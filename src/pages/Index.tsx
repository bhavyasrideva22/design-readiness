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

  const getCurrentSectionName = () => {
    switch (state.section) {
      case 'intro': return 'Introduction';
      case 'assessment': return 'Assessment Questions';
      case 'results': return 'Results';
      default: return 'Introduction';
    }
  };

  const renderContent = () => {
    switch (state.section) {
      case 'intro':
        return <IntroductionSection onStart={startAssessment} />;
      
      case 'assessment':
        return <AssessmentFlow />;
      
      case 'results':
        const wiscarScores = calculateWISCARScores();
        const overallScore = calculateOverallScore(wiscarScores);
        const recommendation = getRecommendation(overallScore);
        
        return (
          <ResultsSection
            wiscarScores={wiscarScores}
            overallScore={overallScore}
            recommendation={recommendation}
            onRestart={restart}
          />
        );
      
      default:
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
