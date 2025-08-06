import { useState, useCallback } from 'react';
import { assessmentQuestions, scoringWeights } from '@/data/assessmentQuestions';
import { Question } from '@/components/assessment/AssessmentQuestion';

interface AssessmentState {
  currentQuestionIndex: number;
  answers: Record<string, any>;
  section: 'intro' | 'assessment' | 'results';
  isComplete: boolean;
}

interface WISCARScore {
  will: number;
  interest: number;
  skill: number;
  cognitive: number;
  abilityToLearn: number;
  realWorldAlignment: number;
}

export const useAssessment = () => {
  const [state, setState] = useState<AssessmentState>({
    currentQuestionIndex: 0,
    answers: {},
    section: 'intro',
    isComplete: false
  });

  const startAssessment = useCallback(() => {
    setState(prev => ({
      ...prev,
      section: 'assessment'
    }));
  }, []);

  const answerQuestion = useCallback((questionId: string, answer: any) => {
    setState(prev => ({
      ...prev,
      answers: {
        ...prev.answers,
        [questionId]: answer
      }
    }));
  }, []);

  const nextQuestion = useCallback(() => {
    setState(prev => {
      const nextIndex = prev.currentQuestionIndex + 1;
      if (nextIndex >= assessmentQuestions.length) {
        // Assessment complete - go to results
        return {
          ...prev,
          section: 'results',
          isComplete: true
        };
      }
      return {
        ...prev,
        currentQuestionIndex: nextIndex
      };
    });
  }, []);

  const completeAssessment = useCallback(() => {
    setState(prev => ({
      ...prev,
      section: 'results',
      isComplete: true
    }));
  }, []);

  const previousQuestion = useCallback(() => {
    setState(prev => ({
      ...prev,
      currentQuestionIndex: Math.max(0, prev.currentQuestionIndex - 1)
    }));
  }, []);

  const calculateWISCARScores = useCallback((): WISCARScore => {
    const { answers } = state;
    
    // Initialize category scores
    const categoryScores: Record<string, number[]> = {};
    
    // Group answers by subcategory
    assessmentQuestions.forEach(question => {
      const answer = answers[question.id];
      if (answer !== undefined && question.subcategory) {
        if (!categoryScores[question.subcategory]) {
          categoryScores[question.subcategory] = [];
        }
        
        // Normalize score to 0-100 scale
        let normalizedScore = 0;
        if (question.type === 'likert') {
          const scale = question.likertScale!;
          normalizedScore = ((answer - scale.min) / (scale.max - scale.min)) * 100;
        } else if (question.type === 'multiple-choice') {
          // Assume correct answers score higher
          normalizedScore = (answer + 1) * 25; // 0-3 -> 25-100
        } else if (question.type === 'scenario') {
          normalizedScore = (answer / 5) * 100; // Assuming max value is 5
        }
        
        categoryScores[question.subcategory].push(normalizedScore);
      }
    });

    // Calculate average scores for each subcategory
    const avgCategoryScores: Record<string, number> = {};
    Object.keys(categoryScores).forEach(category => {
      const scores = categoryScores[category];
      avgCategoryScores[category] = scores.reduce((sum, score) => sum + score, 0) / scores.length;
    });

    // Calculate WISCAR scores using weights
    const wiscarScores: WISCARScore = {
      will: 0,
      interest: 0,
      skill: 0,
      cognitive: 0,
      abilityToLearn: 0,
      realWorldAlignment: 0
    };

    // Calculate Will score
    const willCategories = scoringWeights.will;
    Object.keys(willCategories).forEach(category => {
      if (avgCategoryScores[category]) {
        wiscarScores.will += avgCategoryScores[category] * willCategories[category as keyof typeof willCategories];
      }
    });

    // Calculate Interest score
    const interestCategories = scoringWeights.interest;
    Object.keys(interestCategories).forEach(category => {
      if (avgCategoryScores[category]) {
        wiscarScores.interest += avgCategoryScores[category] * interestCategories[category as keyof typeof interestCategories];
      }
    });

    // Calculate Skill score
    const skillCategories = scoringWeights.skill;
    Object.keys(skillCategories).forEach(category => {
      if (avgCategoryScores[category]) {
        wiscarScores.skill += avgCategoryScores[category] * skillCategories[category as keyof typeof skillCategories];
      }
    });

    // Calculate Cognitive score
    const cognitiveCategories = scoringWeights.cognitive;
    Object.keys(cognitiveCategories).forEach(category => {
      if (avgCategoryScores[category]) {
        wiscarScores.cognitive += avgCategoryScores[category] * cognitiveCategories[category as keyof typeof cognitiveCategories];
      }
    });

    // Calculate Ability to Learn score
    const learningCategories = scoringWeights.abilityToLearn;
    Object.keys(learningCategories).forEach(category => {
      if (avgCategoryScores[category]) {
        wiscarScores.abilityToLearn += avgCategoryScores[category] * learningCategories[category as keyof typeof learningCategories];
      }
    });

    // Calculate Real World Alignment score
    const alignmentCategories = scoringWeights.realWorldAlignment;
    Object.keys(alignmentCategories).forEach(category => {
      if (avgCategoryScores[category]) {
        wiscarScores.realWorldAlignment += avgCategoryScores[category] * alignmentCategories[category as keyof typeof alignmentCategories];
      }
    });

    // Round scores
    Object.keys(wiscarScores).forEach(key => {
      wiscarScores[key as keyof WISCARScore] = Math.round(wiscarScores[key as keyof WISCARScore]);
    });

    return wiscarScores;
  }, [state]);

  const calculateOverallScore = useCallback((wiscarScores: WISCARScore): number => {
    const weights = {
      will: 0.2,
      interest: 0.2,
      skill: 0.2,
      cognitive: 0.15,
      abilityToLearn: 0.15,
      realWorldAlignment: 0.1
    };

    const weightedSum = 
      wiscarScores.will * weights.will +
      wiscarScores.interest * weights.interest +
      wiscarScores.skill * weights.skill +
      wiscarScores.cognitive * weights.cognitive +
      wiscarScores.abilityToLearn * weights.abilityToLearn +
      wiscarScores.realWorldAlignment * weights.realWorldAlignment;

    return Math.round(weightedSum);
  }, []);

  const getRecommendation = useCallback((overallScore: number): 'Yes' | 'Maybe' | 'No' => {
    if (overallScore >= 70) return 'Yes';
    if (overallScore >= 50) return 'Maybe';
    return 'No';
  }, []);

  const restart = useCallback(() => {
    setState({
      currentQuestionIndex: 0,
      answers: {},
      section: 'intro',
      isComplete: false
    });
  }, []);

  const getCurrentQuestion = (): Question | null => {
    return assessmentQuestions[state.currentQuestionIndex] || null;
  };

  const getProgress = (): number => {
    if (state.section === 'intro') return 0;
    if (state.section === 'results') return 100;
    return (state.currentQuestionIndex / assessmentQuestions.length) * 100;
  };

  const getCurrentAnswer = (): any => {
    const currentQuestion = getCurrentQuestion();
    return currentQuestion ? state.answers[currentQuestion.id] : undefined;
  };

  const canProceed = (): boolean => {
    const currentQuestion = getCurrentQuestion();
    return currentQuestion ? state.answers[currentQuestion.id] !== undefined : false;
  };

  return {
    state,
    startAssessment,
    answerQuestion,
    nextQuestion,
    previousQuestion,
    completeAssessment,
    calculateWISCARScores,
    calculateOverallScore,
    getRecommendation,
    restart,
    getCurrentQuestion,
    getProgress,
    getCurrentAnswer,
    canProceed,
    totalQuestions: assessmentQuestions.length
  };
};