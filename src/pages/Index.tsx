import { AssessmentHeader } from "@/components/assessment/AssessmentHeader";
import { ProgressNavigation } from "@/components/assessment/ProgressNavigation";
import { IntroductionSection } from "@/components/assessment/IntroductionSection";
import { AssessmentFlow } from "@/components/assessment/AssessmentFlow";
import { ResultsSection } from "@/components/assessment/ResultsSection";
import { useAssessment } from "@/hooks/useAssessment";

const Index = () => {
  const {
    state,
    startAssessment,
    calculateWISCARScores,
    calculateOverallScore,
    getRecommendation,
    restart,
    getProgress
  } = useAssessment();

  console.log('=== INDEX COMPONENT RENDER ===');
  console.log('Current section:', state.section, 'Progress:', getProgress(), 'isComplete:', state.isComplete);
  console.log('==============================');

  const getCurrentSectionName = () => {
    switch (state.section) {
      case 'intro': return 'Introduction';
      case 'assessment': return 'Assessment Questions';
      case 'results': return 'Results';
      default: return 'Introduction';
    }
  };

  const renderContent = () => {
    console.log('=== RENDER CONTENT DEBUG ===');
    console.log('Current state.section:', state.section);
    console.log('Current state.isComplete:', state.isComplete);
    console.log('Current state.currentQuestionIndex:', state.currentQuestionIndex);
    console.log('=============================');
    
    // Force results page if marked as complete
    if (state.isComplete || state.section === 'results') {
      console.log('>>> RENDERING RESULTS SECTION <<<');
      const wiscarScores = calculateWISCARScores();
      const overallScore = calculateOverallScore(wiscarScores);
      const recommendation = getRecommendation(overallScore);
      
      console.log('Results data:', { wiscarScores, overallScore, recommendation });
      
      return (
        <ResultsSection
          wiscarScores={wiscarScores}
          overallScore={overallScore}
          recommendation={recommendation}
          onRestart={restart}
        />
      );
    }
    
    switch (state.section) {
      case 'intro':
        console.log('>>> RENDERING INTRODUCTION SECTION <<<');
        return <IntroductionSection onStart={startAssessment} />;
      
      case 'assessment':
        console.log('>>> RENDERING ASSESSMENT FLOW <<<');
        return <AssessmentFlow />;
      
      default:
        console.log('>>> DEFAULT - RENDERING INTRODUCTION SECTION <<<');
        return <IntroductionSection onStart={startAssessment} />;
    }
  };

  return (
    <div className="min-h-screen bg-background">
      <AssessmentHeader 
        currentSection={getCurrentSectionName()}
        progress={getProgress()}
      />
      
      <div className="container mx-auto px-6 py-8 max-w-6xl">
        {/* Progress Navigation */}
        <div className="mb-8">
          <ProgressNavigation 
            currentSection={state.section}
            progress={getProgress()}
          />
        </div>
        
        {/* Main Content */}
        <div className="max-w-4xl mx-auto">
          {renderContent()}
        </div>
      </div>
    </div>
  );
};

export default Index;
