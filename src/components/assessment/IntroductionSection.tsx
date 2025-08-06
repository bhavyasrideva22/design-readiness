import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { CheckCircle, Users, Lightbulb, BarChart3, Heart, Puzzle } from "lucide-react";

interface IntroductionSectionProps {
  onStart: () => void;
}

export const IntroductionSection = ({ onStart }: IntroductionSectionProps) => {
  const purposes = [
    "Measure psychological and cognitive fit",
    "Evaluate current skill levels", 
    "Determine readiness to learn",
    "Suggest improvement plans",
    "Recommend career paths"
  ];

  const careers = [
    { title: "UI Designer", desc: "Focus on interface visuals and interactions" },
    { title: "UX Designer", desc: "Design user experience, flows, wireframes" },
    { title: "Product Designer", desc: "Blend UI, UX, and strategy" },
    { title: "UX Researcher", desc: "Gather user feedback and insights" },
    { title: "Information Architect", desc: "Organize content and navigation" }
  ];

  const traits = [
    { icon: Heart, text: "Empathy and user-centric mindset" },
    { icon: Lightbulb, text: "Visual communication & creativity" },
    { icon: BarChart3, text: "Analytical thinking" },
    { icon: Puzzle, text: "Curiosity and iterative mindset" }
  ];

  return (
    <div className="space-y-8 animate-slide-up">
      {/* Purpose Section */}
      <Card className="p-8 shadow-design-md">
        <h2 className="text-2xl font-bold mb-6 bg-gradient-primary bg-clip-text text-transparent">
          Purpose of This Assessment
        </h2>
        <p className="text-muted-foreground mb-6">
          To help individuals evaluate if UI/UX Design is a good fit for their personality, skills, and career goals. This assessment will:
        </p>
        <ul className="space-y-3">
          {purposes.map((purpose, index) => (
            <li key={index} className="flex items-center gap-3">
              <CheckCircle className="w-5 h-5 text-success" />
              <span>{purpose}</span>
            </li>
          ))}
        </ul>
      </Card>

      {/* What is UI/UX Design */}
      <Card className="p-8 shadow-design-md">
        <h2 className="text-2xl font-bold mb-4">What is UI/UX Design?</h2>
        <p className="text-muted-foreground leading-relaxed">
          UI/UX Design involves designing user interfaces (UI) and user experiences (UX) for digital products like websites, apps, and software. It combines creativity, user empathy, problem-solving, and technical tools to create intuitive and beautiful digital experiences.
        </p>
      </Card>

      {/* Career Paths */}
      <Card className="p-8 shadow-design-md">
        <h2 className="text-2xl font-bold mb-6 flex items-center gap-2">
          <Users className="w-6 h-6 text-primary" />
          Typical Careers in UI/UX
        </h2>
        <div className="grid gap-4 md:grid-cols-2">
          {careers.map((career, index) => (
            <div key={index} className="p-4 rounded-lg bg-gradient-subtle border">
              <h3 className="font-semibold mb-1">{career.title}</h3>
              <p className="text-sm text-muted-foreground">{career.desc}</p>
            </div>
          ))}
        </div>
      </Card>

      {/* Traits & Skills */}
      <Card className="p-8 shadow-design-md">
        <h2 className="text-2xl font-bold mb-6">Traits & Skills That Succeed</h2>
        <div className="grid gap-4 md:grid-cols-2">
          {traits.map((trait, index) => {
            const Icon = trait.icon;
            return (
              <div key={index} className="flex items-center gap-3 p-4 rounded-lg bg-muted/50">
                <Icon className="w-5 h-5 text-primary" />
                <span>{trait.text}</span>
              </div>
            );
          })}
        </div>
        <div className="mt-6 p-4 bg-accent/10 rounded-lg">
          <p className="text-sm text-muted-foreground">
            <strong>Tools:</strong> Figma, Adobe XD, Sketch, user research methods, prototyping tools
          </p>
        </div>
      </Card>

      {/* Start Button */}
      <div className="text-center pt-8">
        <Button 
          size="lg" 
          onClick={onStart}
          className="bg-gradient-primary hover:shadow-glow transition-all duration-300 px-8 py-6 text-lg font-semibold"
        >
          Start Assessment
        </Button>
        <p className="text-sm text-muted-foreground mt-4">
          Assessment takes approximately 30 minutes • 80 questions total
        </p>
      </div>
    </div>
  );
};