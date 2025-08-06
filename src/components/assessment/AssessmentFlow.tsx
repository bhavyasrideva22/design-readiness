import { Button } from "@/components/ui/button";
import { AssessmentQuestion } from "./AssessmentQuestion";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { useAssessment } from "@/hooks/useAssessment";

export const AssessmentFlow = () => {
  const {
    state,
    nextQuestion,
    previousQuestion,
    answerQuestion,
    completeAssessment,
    getCurrentQuestion,
    getCurrentAnswer,
    canProceed,
    totalQuestions
  } = useAssessment();

  const currentQuestion = getCurrentQuestion();
  
  console.log('AssessmentFlow render - currentQuestion:', currentQuestion, 'section:', state.section);
  
  if (!currentQuestion) {
    console.log('No current question - section might have changed');
    return null;
  }

  const handleAnswer = (answer: any) => {
    answerQuestion(currentQuestion.id, answer);
  };

  const handleNext = () => {
    console.log('HandleNext called - current index:', state.currentQuestionIndex, 'total questions:', totalQuestions);
    
    if (state.currentQuestionIndex === totalQuestions - 1) {
      // This is the last question - complete the assessment
      console.log('Last question reached - completing assessment');
      completeAssessment();
    } else {
      console.log('Moving to next question');
      nextQuestion();
    }
  };

  const handlePrevious = () => {
    previousQuestion();
  };

  return (
    <div className="space-y-6">
      <AssessmentQuestion
        question={currentQuestion}
        answer={getCurrentAnswer()}
        onAnswer={handleAnswer}
        questionNumber={state.currentQuestionIndex + 1}
        totalQuestions={totalQuestions}
      />
      
      <div className="flex justify-between items-center">
        <Button
          variant="outline"
          onClick={handlePrevious}
          disabled={state.currentQuestionIndex === 0}
          className="flex items-center gap-2"
        >
          <ChevronLeft className="w-4 h-4" />
          Previous
        </Button>
        
        <div className="text-sm text-muted-foreground">
          {state.currentQuestionIndex + 1} of {totalQuestions}
        </div>
        
        <Button
          onClick={handleNext}
          disabled={!canProceed()}
          className="flex items-center gap-2 bg-gradient-primary hover:shadow-glow transition-all duration-300"
        >
          {state.currentQuestionIndex === totalQuestions - 1 ? 'Complete Assessment' : 'Next'}
          <ChevronRight className="w-4 h-4" />
        </Button>
      </div>
    </div>
  );
};