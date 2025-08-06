import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { cn } from "@/lib/utils";
import { 
  BookOpen, 
  Brain, 
  Code2, 
  BarChart3, 
  TrendingUp,
  CheckCircle
} from "lucide-react";

interface ProgressNavigationProps {
  currentSection: 'intro' | 'assessment' | 'results';
  progress: number;
}

export const ProgressNavigation = ({ currentSection, progress }: ProgressNavigationProps) => {
  const sections = [
    {
      id: 'intro',
      title: 'Introduction',
      icon: BookOpen,
      description: 'Assessment overview'
    },
    {
      id: 'psychological',
      title: 'Psychological Fit',
      icon: Brain,
      description: 'Personality & motivation'
    },
    {
      id: 'technical',
      title: 'Technical Aptitude',
      icon: Code2,
      description: 'Skills & knowledge'
    },
    {
      id: 'wiscar',
      title: 'WISCAR Analysis',
      icon: BarChart3,
      description: 'Comprehensive evaluation'
    },
    {
      id: 'results',
      title: 'Your Results',
      icon: TrendingUp,
      description: 'Personalized insights'
    }
  ];

  const getSectionStatus = (sectionId: string) => {
    if (currentSection === 'intro' && sectionId === 'intro') return 'current';
    if (currentSection === 'assessment') {
      if (sectionId === 'intro') return 'completed';
      if (['psychological', 'technical', 'wiscar'].includes(sectionId)) return 'current';
      return 'upcoming';
    }
    if (currentSection === 'results') {
      if (sectionId === 'results') return 'current';
      if (sectionId !== 'results') return 'completed';
    }
    return 'upcoming';
  };

  return (
    <Card className="p-6 shadow-design-md bg-gradient-subtle">
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-lg font-semibold">Assessment Progress</h2>
        <Badge variant="secondary" className="text-sm">
          {Math.round(progress)}% Complete
        </Badge>
      </div>
      
      <div className="flex flex-wrap gap-2 md:gap-4">
        {sections.map((section, index) => {
          const Icon = section.icon;
          const status = getSectionStatus(section.id);
          
          return (
            <div
              key={section.id}
              className={cn(
                "flex items-center gap-2 px-3 py-2 rounded-lg text-sm transition-all duration-200",
                "flex-1 min-w-0",
                status === 'current' && "bg-primary text-primary-foreground shadow-design",
                status === 'completed' && "bg-success text-success-foreground",
                status === 'upcoming' && "bg-muted text-muted-foreground"
              )}
            >
              {status === 'completed' ? (
                <CheckCircle className="w-4 h-4 flex-shrink-0" />
              ) : (
                <Icon className="w-4 h-4 flex-shrink-0" />
              )}
              <div className="min-w-0 hidden sm:block">
                <div className="font-medium truncate">{section.title}</div>
                <div className="text-xs opacity-80 truncate">{section.description}</div>
              </div>
              <div className="sm:hidden font-medium truncate">{section.title}</div>
            </div>
          );
        })}
      </div>
      
      {/* Progress Bar */}
      <div className="mt-4">
        <div className="w-full bg-muted rounded-full h-2">
          <div 
            className="bg-gradient-primary rounded-full h-2 transition-all duration-500 ease-out"
            style={{ width: `${progress}%` }}
          />
        </div>
      </div>
    </Card>
  );
};