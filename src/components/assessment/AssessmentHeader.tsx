import { Brain, Palette, Target } from "lucide-react";

interface AssessmentHeaderProps {
  currentSection?: string;
  progress?: number;
}

export const AssessmentHeader = ({ currentSection = "Introduction", progress = 0 }: AssessmentHeaderProps) => {
  return (
    <div className="relative overflow-hidden bg-gradient-primary text-primary-foreground">
      <div className="absolute inset-0 opacity-20">
        <div className="w-full h-full bg-gradient-to-br from-white/5 to-transparent"></div>
      </div>
      
      <div className="relative container mx-auto px-6 py-8">
        <div className="flex items-center justify-between mb-6">
          <div className="flex items-center gap-3">
            <div className="p-3 bg-white/10 rounded-xl backdrop-blur-sm animate-float">
              <Brain className="w-8 h-8" />
            </div>
            <div className="p-3 bg-white/10 rounded-xl backdrop-blur-sm animate-float delay-100">
              <Palette className="w-8 h-8" />
            </div>
            <div className="p-3 bg-white/10 rounded-xl backdrop-blur-sm animate-float delay-200">
              <Target className="w-8 h-8" />
            </div>
          </div>
          
          {progress > 0 && (
            <div className="text-right">
              <div className="text-2xl font-bold">{Math.round(progress)}%</div>
              <div className="text-sm text-primary-foreground/80">Complete</div>
            </div>
          )}
        </div>
        
        <h1 className="text-3xl md:text-4xl font-bold mb-3 animate-slide-up">
          Is UI/UX Design Right for You?
        </h1>
        <p className="text-lg text-primary-foreground/90 max-w-2xl animate-slide-up delay-100">
          Comprehensive Career Assessment & Guidance
        </p>
      </div>
    </div>
  );
};