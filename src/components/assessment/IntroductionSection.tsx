import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { 
  CheckCircle, 
  Users, 
  Lightbulb, 
  BarChart3, 
  Heart, 
  Puzzle,
  Clock,
  Award,
  TrendingUp,
  Cloud,
  Workflow,
  Building2
} from "lucide-react";

interface IntroductionSectionProps {
  onStart: () => void;
}

export const IntroductionSection = ({ onStart }: IntroductionSectionProps) => {
  const features = [
    { icon: Clock, text: "25-30 minutes" },
    { icon: Award, text: "Personalized Results" },
    { icon: TrendingUp, text: "Career Guidance" }
  ];

  const keyFeatures = [
    { 
      icon: Cloud, 
      title: "User-Centered Design", 
      desc: "Focus on user needs and behaviors in every design decision",
      color: "text-blue-500"
    },
    { 
      icon: Workflow, 
      title: "Design Systems", 
      desc: "Create scalable and consistent design frameworks",
      color: "text-green-500"
    },
    { 
      icon: Building2, 
      title: "Enterprise Solutions", 
      desc: "Design for complex platforms and user workflows",
      color: "text-purple-500"
    }
  ];

  const careers = [
    { title: "UI Designer", desc: "Build visual interfaces and interactions" },
    { title: "UX Designer", desc: "Design user experience flows and research" },
    { title: "Product Designer", desc: "Bridge business needs with user experience" },
    { title: "UX Researcher", desc: "Conduct user research and testing" },
    { title: "Design Systems", desc: "Create scalable design frameworks" }
  ];

  const traits = [
    { icon: Heart, text: "Strong analytical thinking" },
    { icon: Lightbulb, text: "Process-oriented mindset" },
    { icon: BarChart3, text: "Logical problem-solving" },
    { icon: Puzzle, text: "Interest in user behavior" },
    { icon: CheckCircle, text: "Comfort with design tools" },
    { icon: Users, text: "Attention to detail" }
  ];

  const assessmentModules = [
    { number: "1", title: "Psychological Fit Evaluation" },
    { number: "2", title: "Technical Aptitude Testing" },
    { number: "3", title: "WISCAR Framework Analysis" }
  ];

  const resultIncludes = [
    "Personalized fit score (0-100)",
    "Detailed trait analysis", 
    "Technical readiness assessment",
    "Career pathway recommendations",
    "Next steps and learning resources"
  ];

  return (
    <div className="space-y-8 animate-slide-up">
      {/* Hero Section */}
      <Card className="p-8 text-center shadow-design-lg bg-gradient-subtle border-0">
        <h2 className="text-3xl font-bold mb-4 bg-gradient-primary bg-clip-text text-transparent">
          Discover Your UI/UX Design Career Potential
        </h2>
        <p className="text-muted-foreground mb-6 text-lg leading-relaxed max-w-3xl mx-auto">
          Take our comprehensive assessment to evaluate your psychological fit, technical readiness, and career alignment for a future in UI/UX Design and user experience research.
        </p>
        
        <div className="flex items-center justify-center gap-8 mb-8">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <div key={index} className="flex items-center gap-2 text-muted-foreground">
                <Icon className="w-5 h-5 text-primary" />
                <span className="text-sm font-medium">{feature.text}</span>
              </div>
            );
          })}
        </div>
        
        <Button 
          size="lg" 
          onClick={onStart}
          className="bg-gradient-primary hover:shadow-glow transition-all duration-300 px-8 py-6 text-lg font-semibold"
        >
          Start Assessment →
        </Button>
      </Card>

      {/* What is UI/UX Design */}
      <Card className="p-8 shadow-design-md">
        <div className="flex items-center gap-3 mb-6">
          <Lightbulb className="w-6 h-6 text-primary" />
          <h2 className="text-2xl font-bold">What is UI/UX Design?</h2>
        </div>
        <p className="text-muted-foreground leading-relaxed mb-6">
          UI/UX Design is a powerful <strong>user-centered approach</strong> that specializes in <strong>User Interface (UI)</strong> and <strong>User Experience (UX)</strong> design. It empowers organizations to create intuitive digital products and drive user satisfaction across various platforms and applications.
        </p>
        
        <div className="grid gap-6 md:grid-cols-3">
          {keyFeatures.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <div key={index} className="text-center p-4">
                <div className="mb-4">
                  <Icon className={`w-8 h-8 mx-auto ${feature.color}`} />
                </div>
                <h3 className="font-semibold mb-2">{feature.title}</h3>
                <p className="text-sm text-muted-foreground">{feature.desc}</p>
              </div>
            );
          })}
        </div>
      </Card>

      {/* Career Opportunities */}
      <Card className="p-8 shadow-design-md">
        <div className="flex items-center gap-3 mb-6">
          <Users className="w-6 h-6 text-primary" />
          <h2 className="text-2xl font-bold">Career Opportunities</h2>
        </div>
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {careers.map((career, index) => (
            <div key={index} className="p-4 rounded-lg bg-gradient-subtle border">
              <h3 className="font-semibold mb-1">{career.title}</h3>
              <p className="text-sm text-muted-foreground">{career.desc}</p>
            </div>
          ))}
        </div>
      </Card>

      {/* Ideal Traits */}
      <Card className="p-8 shadow-design-md">
        <h2 className="text-2xl font-bold mb-6">Ideal Traits & Skills</h2>
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {traits.map((trait, index) => {
            const Icon = trait.icon;
            return (
              <div key={index} className="flex items-center gap-3 p-4 rounded-lg bg-muted/50">
                <Icon className="w-5 h-5 text-primary" />
                <span className="text-sm font-medium">{trait.text}</span>
              </div>
            );
          })}
        </div>
      </Card>

      {/* What You'll Discover */}
      <Card className="p-8 shadow-design-md">
        <h2 className="text-2xl font-bold mb-6">What You'll Discover</h2>
        
        <div className="grid gap-8 md:grid-cols-2">
          <div>
            <h3 className="font-semibold mb-4 text-lg">Assessment Modules:</h3>
            <div className="space-y-3">
              {assessmentModules.map((module, index) => (
                <div key={index} className="flex items-center gap-3">
                  <Badge variant="secondary" className="w-8 h-8 rounded-full flex items-center justify-center">
                    {module.number}
                  </Badge>
                  <span className="font-medium">{module.title}</span>
                </div>
              ))}
            </div>
          </div>
          
          <div>
            <h3 className="font-semibold mb-4 text-lg">Your Results Include:</h3>
            <ul className="space-y-2">
              {resultIncludes.map((item, index) => (
                <li key={index} className="flex items-start gap-2">
                  <CheckCircle className="w-4 h-4 text-success mt-0.5 flex-shrink-0" />
                  <span className="text-sm">{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </Card>
    </div>
  );
};