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
  Share2,
  Award,
  BookOpen,
  Zap,
  BarChart3
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
  
  console.log('Results Section Data:', { wiscarScores, overallScore, recommendation });
  
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

  const getLearningResources = () => {
    const resources = [];
    if (recommendation === 'Yes') {
      resources.push(
        "Start with Figma: Complete beginner's course",
        "UX Research fundamentals on Coursera",
        "Build your first portfolio project",
        "Join design communities (Dribbble, Behance)"
      );
    } else if (recommendation === 'Maybe') {
      if (wiscarScores.skill < 60) {
        resources.push("Take a design fundamentals course");
      }
      if (wiscarScores.interest < 60) {
        resources.push("Explore design thinking workshops");
      }
      resources.push("Practice with free design tools", "Follow UX design blogs and podcasts");
    } else {
      resources.push(
        "Consider related fields: Graphic Design, Product Management",
        "Build foundational skills in visual design",
        "Explore frontend development as an alternative"
      );
    }
    return resources;
  };

  const getScoreInterpretation = (score: number) => {
    if (score >= 80) return { label: 'Excellent', color: 'text-success' };
    if (score >= 70) return { label: 'Very Good', color: 'text-primary' };
    if (score >= 60) return { label: 'Good', color: 'text-warning' };
    if (score >= 40) return { label: 'Developing', color: 'text-muted-foreground' };
    return { label: 'Needs Work', color: 'text-destructive' };
  };

  const RecommendationIcon = getRecommendationIcon();

  return (
    <div className="space-y-8 animate-slide-up">
      {/* Header Section */}
      <Card className="p-8 text-center shadow-design-lg bg-gradient-primary text-primary-foreground relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="w-full h-full bg-gradient-to-br from-white/20 to-transparent"></div>
        </div>
        <div className="relative">
          <Award className="w-16 h-16 mx-auto mb-4 animate-pulse-glow" />
          <h1 className="text-3xl font-bold mb-2">Assessment Complete!</h1>
          <p className="text-primary-foreground/90 text-lg">Your UI/UX Design Career Analysis</p>
        </div>
      </Card>

      {/* Overall Score Card */}
      <Card className="p-8 text-center shadow-design-lg bg-gradient-subtle">
        <div className="mb-6">
          <div className="text-6xl font-bold bg-gradient-primary bg-clip-text text-transparent mb-2">
            {overallScore}
          </div>
          <div className="text-xl text-muted-foreground mb-4">Overall Readiness Score</div>
          
          <div className="flex items-center justify-center gap-3 mb-6">
            <RecommendationIcon className={`w-6 h-6 text-${getRecommendationColor()}`} />
            <Badge 
              variant={getRecommendationColor() === 'success' ? 'default' : 'secondary'} 
              className={`text-lg px-6 py-2 ${
                getRecommendationColor() === 'success' ? 'bg-success text-success-foreground' :
                getRecommendationColor() === 'warning' ? 'bg-warning text-warning-foreground' :
                'bg-destructive text-destructive-foreground'
              }`}
            >
              {recommendation === 'Yes' ? '✅ Start Learning!' : 
               recommendation === 'Maybe' ? '⚠️ Proceed with Caution' : 
               '❌ Consider Alternatives'}
            </Badge>
          </div>
        </div>
        
        <div className="max-w-2xl mx-auto">
          <h3 className="text-xl font-semibold mb-3">Your Personalized Insight</h3>
          <p className="text-muted-foreground leading-relaxed">
            {getPersonalizedInsight()}
          </p>
        </div>
      </Card>

      {/* WISCAR Detailed Analysis */}
      <Card className="p-8 shadow-design-md">
        <h2 className="text-2xl font-bold mb-6 text-center flex items-center justify-center gap-2">
          <BarChart3 className="w-6 h-6 text-primary" />
          WISCAR Framework Analysis
        </h2>
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {wiscarData.map((item) => {
            const Icon = item.icon;
            const interpretation = getScoreInterpretation(item.score);
            
            return (
              <div key={item.key} className="text-center group hover:scale-105 transition-transform duration-200">
                <div className="relative mb-4">
                  {/* Circular Progress */}
                  <div className="w-24 h-24 mx-auto rounded-full bg-muted flex items-center justify-center relative overflow-hidden">
                    <svg className="w-24 h-24 transform -rotate-90 absolute inset-0">
                      <circle
                        cx="48"
                        cy="48"
                        r="40"
                        stroke="currentColor"
                        strokeWidth="8"
                        fill="none"
                        className="text-muted-foreground/20"
                      />
                      <circle
                        cx="48"
                        cy="48"
                        r="40"
                        stroke={item.color}
                        strokeWidth="8"
                        fill="none"
                        strokeDasharray={`${2 * Math.PI * 40}`}
                        strokeDashoffset={`${2 * Math.PI * 40 * (1 - item.score / 100)}`}
                        className="transition-all duration-1000 ease-out"
                        strokeLinecap="round"
                      />
                    </svg>
                    <div className="relative flex flex-col items-center">
                      <Icon className="w-6 h-6 mb-1" style={{ color: item.color }} />
                      <div className="text-lg font-bold" style={{ color: item.color }}>
                        {item.score}
                      </div>
                    </div>
                  </div>
                </div>
                <h3 className="font-semibold mb-1">{item.label}</h3>
                <div className={`text-sm font-medium ${interpretation.color}`}>
                  {interpretation.label}
                </div>
              </div>
            );
          })}
        </div>
      </Card>

      {/* Career Recommendations */}
      <Card className="p-8 shadow-design-md">
        <h2 className="text-2xl font-bold mb-6 flex items-center gap-2">
          <Target className="w-6 h-6 text-primary" />
          Recommended Career Paths
        </h2>
        <div className="grid gap-4 md:grid-cols-2">
          {getTopCareerPaths().map((path, index) => (
            <div key={index} className="p-4 rounded-lg bg-gradient-subtle border hover:shadow-design transition-all duration-200">
              <div className="flex items-center gap-3">
                <CheckCircle className="w-5 h-5 text-success" />
                <h3 className="font-semibold">{path}</h3>
              </div>
            </div>
          ))}
        </div>
      </Card>

      {/* Learning Path & Resources */}
      <Card className="p-8 shadow-design-md">
        <h2 className="text-2xl font-bold mb-6 flex items-center gap-2">
          <BookOpen className="w-6 h-6 text-primary" />
          Your Next Steps
        </h2>
        
        <div className="grid gap-6 md:grid-cols-2">
          <div>
            <h3 className="font-semibold text-lg mb-4 flex items-center gap-2">
              <Zap className="w-5 h-5 text-warning" />
              Recommended Actions
            </h3>
            {recommendation === 'Yes' && (
              <div className="space-y-3">
                <div className="p-3 rounded-lg bg-success/10 border border-success/20">
                  <h4 className="font-medium text-success mb-2">Immediate Next Steps:</h4>
                  <ul className="space-y-1 text-sm text-muted-foreground">
                    <li>• Start with Figma basics and design fundamentals</li>
                    <li>• Take a UX research course to strengthen user empathy</li>
                    <li>• Build your first portfolio project</li>
                    <li>• Join design communities and follow industry leaders</li>
                  </ul>
                </div>
              </div>
            )}
            
            {recommendation === 'Maybe' && (
              <div className="space-y-3">
                <div className="p-3 rounded-lg bg-warning/10 border border-warning/20">
                  <h4 className="font-medium text-warning mb-2">Areas to Develop:</h4>
                  <ul className="space-y-1 text-sm text-muted-foreground">
                    {wiscarScores.skill < 60 && <li>• Strengthen technical design skills and tool knowledge</li>}
                    {wiscarScores.cognitive < 60 && <li>• Practice analytical thinking and problem-solving</li>}
                    {wiscarScores.interest < 60 && <li>• Explore design more deeply to build genuine interest</li>}
                  </ul>
                </div>
              </div>
            )}

            {recommendation === 'No' && (
              <div className="space-y-3">
                <div className="p-3 rounded-lg bg-destructive/10 border border-destructive/20">
                  <h4 className="font-medium text-destructive mb-2">Alternative Paths:</h4>
                  <ul className="space-y-1 text-sm text-muted-foreground">
                    <li>• Consider Graphic Design or Visual Design</li>
                    <li>• Explore Product Management roles</li>
                    <li>• Look into Frontend Development</li>
                    <li>• Build foundational design skills first</li>
                  </ul>
                </div>
              </div>
            )}
          </div>

          <div>
            <h3 className="font-semibold text-lg mb-4">Learning Resources</h3>
            <ul className="space-y-2">
              {getLearningResources().map((resource, index) => (
                <li key={index} className="flex items-start gap-2 text-sm">
                  <CheckCircle className="w-4 h-4 text-primary mt-0.5 flex-shrink-0" />
                  <span>{resource}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </Card>

      {/* Action Buttons */}
      <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
        <Button variant="outline" onClick={onRestart} className="flex items-center gap-2 hover:shadow-design transition-all duration-200">
          <Target className="w-4 h-4" />
          Take Assessment Again
        </Button>
        <Button className="flex items-center gap-2 bg-gradient-primary hover:shadow-glow">
          <Download className="w-4 h-4" />
          Download Report
        </Button>
        <Button variant="secondary" className="flex items-center gap-2 hover:shadow-design transition-all duration-200">
          <Share2 className="w-4 h-4" />
          Share Results
        </Button>
      </div>
    </div>
  );
};