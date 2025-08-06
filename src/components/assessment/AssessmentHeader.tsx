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
      
      <div className="relative container mx-auto px-6 py-12">
        <div className="flex items-center gap-3 mb-6">
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
        
        <h1 className="text-4xl md:text-5xl font-bold mb-4 animate-slide-up">
          UI/UX Design Readiness Assessment
        </h1>
        <p className="text-xl text-primary-foreground/90 max-w-2xl animate-slide-up delay-100">
          Discover your potential for a career in UI/UX Design through scientifically-backed evaluation
        </p>
        
        {progress > 0 && (
          <div className="mt-8 animate-slide-up delay-200">
            <div className="flex justify-between items-center mb-2">
              <span className="text-sm font-medium">Progress</span>
              <span className="text-sm">{Math.round(progress)}%</span>
            </div>
            <div className="w-full bg-white/20 rounded-full h-2">
              <div 
                className="bg-white rounded-full h-2 transition-all duration-500 ease-out"
                style={{ width: `${progress}%` }}
              ></div>
            </div>
            <p className="text-sm text-primary-foreground/80 mt-2">
              Current Section: {currentSection}
            </p>
          </div>
        )}
      </div>
    </div>
  );
};