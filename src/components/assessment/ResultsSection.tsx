import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { 
  Brain, 
  Target, 
  Lightbulb, 
  TrendingUp, 
  Heart, 
  CheckCircle,
  AlertCircle,
  Download,
  Share2
} from "lucide-react";

interface WISCARScore {
  will: number;
  interest: number;
  skill: number;
  cognitive: number;
  abilityToLearn: number;
  realWorldAlignment: number;
}

interface ResultsSectionProps {
  wiscarScores: WISCARScore;
  overallScore: number;
  recommendation: 'Yes' | 'Maybe' | 'No';
  onRestart: () => void;
}

export const ResultsSection = ({ 
  wiscarScores, 
  overallScore, 
  recommendation,
  onRestart 
}: ResultsSectionProps) => {
  
  const getRecommendationColor = () => {
    switch (recommendation) {
      case 'Yes': return 'success';
      case 'Maybe': return 'warning';
      case 'No': return 'destructive';
    }
  };

  const getRecommendationIcon = () => {
    switch (recommendation) {
      case 'Yes': return CheckCircle;
      case 'Maybe': return AlertCircle;
      case 'No': return AlertCircle;
    }
  };

  const wiscarData = [
    { key: 'will', label: 'Will (Motivation)', score: wiscarScores.will, icon: TrendingUp, color: 'hsl(142, 71%, 45%)' },
    { key: 'interest', label: 'Interest', score: wiscarScores.interest, icon: Heart, color: 'hsl(0, 84%, 60%)' },
    { key: 'skill', label: 'Current Skills', score: wiscarScores.skill, icon: Target, color: 'hsl(220, 90%, 60%)' },
    { key: 'cognitive', label: 'Cognitive Readiness', score: wiscarScores.cognitive, icon: Brain, color: 'hsl(264, 92%, 65%)' },
    { key: 'abilityToLearn', label: 'Learning Ability', score: wiscarScores.abilityToLearn, icon: Lightbulb, color: 'hsl(38, 92%, 50%)' },
    { key: 'realWorldAlignment', label: 'Career Alignment', score: wiscarScores.realWorldAlignment, icon: CheckCircle, color: 'hsl(185, 85%, 55%)' }
  ];

  const getPersonalizedInsight = () => {
    if (overallScore >= 80) {
      return "Excellent! You show strong potential across all areas. UI/UX Design appears to be a natural fit for your interests and abilities.";
    } else if (overallScore >= 70) {
      return "Very promising! You have solid foundations with some areas to develop. With focused learning, you could excel in UI/UX Design.";
    } else if (overallScore >= 60) {
      return "Good potential with room for growth. Consider developing your weaker areas while building on your strengths.";
    } else if (overallScore >= 50) {
      return "Mixed signals. You have some relevant strengths, but significant skill development would be needed.";
    } else {
      return "UI/UX Design may not be the best fit currently. Consider exploring related fields or developing foundational skills first.";
    }
  };

  const getTopCareerPaths = () => {
    const paths = [];
    if (wiscarScores.skill >= 70 && wiscarScores.cognitive >= 70) {
      paths.push("UX Designer");
    }
    if (wiscarScores.interest >= 80) {
      paths.push("Product Designer");
    }
    if (wiscarScores.realWorldAlignment >= 70) {
      paths.push("UI Designer");
    }
    if (wiscarScores.abilityToLearn >= 75) {
      paths.push("UX Researcher");
    }
    
    return paths.length > 0 ? paths : ["Entry-level Design Roles"];
  };

  const RecommendationIcon = getRecommendationIcon();

  return (
    <div className="space-y-8 animate-slide-up">
      {/* Overall Score Card */}
      <Card className="p-8 text-center shadow-design-lg bg-gradient-subtle">
        <div className="mb-6">
          <div className="text-6xl font-bold bg-gradient-primary bg-clip-text text-transparent mb-2">
            {overallScore}
          </div>
          <div className="text-xl text-muted-foreground">Overall Readiness Score</div>
        </div>
        
        <div className="flex items-center justify-center gap-3 mb-4">
          <RecommendationIcon className={`w-6 h-6 text-${getRecommendationColor()}`} />
          <Badge variant={getRecommendationColor() as any} className="text-lg px-4 py-2">
            {recommendation === 'Yes' ? 'Start Learning!' : recommendation === 'Maybe' ? 'Proceed with Caution' : 'Consider Alternatives'}
          </Badge>
        </div>
        
        <p className="text-muted-foreground leading-relaxed max-w-2xl mx-auto">
          {getPersonalizedInsight()}
        </p>
      </Card>

      {/* WISCAR Radar Chart */}
      <Card className="p-8 shadow-design-md">
        <h2 className="text-2xl font-bold mb-6 text-center">WISCAR Framework Analysis</h2>
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {wiscarData.map((item) => {
            const Icon = item.icon;
            return (
              <div key={item.key} className="text-center">
                <div className="relative mb-4">
                  <div className="w-24 h-24 mx-auto rounded-full bg-muted flex items-center justify-center relative overflow-hidden">
                    <div 
                      className="absolute inset-0 rounded-full transition-all duration-1000 ease-out"
                      style={{
                        background: `conic-gradient(${item.color} ${item.score * 3.6}deg, hsl(var(--muted)) 0deg)`,
                      }}
                    />
                    <div className="absolute inset-2 bg-background rounded-full flex items-center justify-center">
                      <Icon className="w-6 h-6" style={{ color: item.color }} />
                    </div>
                  </div>
                  <div className="text-2xl font-bold mt-2" style={{ color: item.color }}>
                    {item.score}
                  </div>
                </div>
                <h3 className="font-semibold">{item.label}</h3>
                <div className="text-sm text-muted-foreground mt-1">
                  {item.score >= 80 ? 'Excellent' : 
                   item.score >= 60 ? 'Good' : 
                   item.score >= 40 ? 'Developing' : 'Needs Work'}
                </div>
              </div>
            );
          })}
        </div>
      </Card>

      {/* Career Recommendations */}
      <Card className="p-8 shadow-design-md">
        <h2 className="text-2xl font-bold mb-6">Recommended Career Paths</h2>
        <div className="grid gap-4 md:grid-cols-2">
          {getTopCareerPaths().map((path, index) => (
            <div key={index} className="p-4 rounded-lg bg-gradient-subtle border">
              <h3 className="font-semibold">{path}</h3>
            </div>
          ))}
        </div>
      </Card>

      {/* Next Steps */}
      <Card className="p-8 shadow-design-md">
        <h2 className="text-2xl font-bold mb-6">Your Learning Path</h2>
        {recommendation === 'Yes' && (
          <div className="space-y-4">
            <h3 className="font-semibold text-success">Recommended Next Steps:</h3>
            <ul className="space-y-2 text-muted-foreground">
              <li>• Start with Figma basics and design fundamentals</li>
              <li>• Take a UX research course to strengthen user empathy</li>
              <li>• Build your first portfolio project</li>
              <li>• Join design communities and follow industry leaders</li>
            </ul>
          </div>
        )}
        
        {recommendation === 'Maybe' && (
          <div className="space-y-4">
            <h3 className="font-semibold text-warning">Areas to Develop:</h3>
            <ul className="space-y-2 text-muted-foreground">
              {wiscarScores.skill < 60 && <li>• Strengthen technical design skills and tool knowledge</li>}
              {wiscarScores.cognitive < 60 && <li>• Practice analytical thinking and problem-solving</li>}
              {wiscarScores.interest < 60 && <li>• Explore design more deeply to build genuine interest</li>}
            </ul>
          </div>
        )}
      </Card>

      {/* Action Buttons */}
      <div className="flex flex-col sm:flex-row gap-4 justify-center">
        <Button variant="outline" onClick={onRestart} className="flex items-center gap-2">
          <Target className="w-4 h-4" />
          Take Assessment Again
        </Button>
        <Button variant="gradient" className="flex items-center gap-2">
          <Download className="w-4 h-4" />
          Download Report
        </Button>
        <Button variant="secondary" className="flex items-center gap-2">
          <Share2 className="w-4 h-4" />
          Share Results
        </Button>
      </div>
    </div>
  );
};