import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

export interface Question {
  id: string;
  type: 'multiple-choice' | 'likert' | 'scenario';
  category: 'psychometric' | 'technical' | 'aptitude';
  subcategory?: string;
  question: string;
  options?: string[];
  likertScale?: {
    min: number;
    max: number;
    minLabel: string;
    maxLabel: string;
  };
  scenario?: {
    context: string;
    choices: Array<{
      text: string;
      value: number;
    }>;
  };
}

interface AssessmentQuestionProps {
  question: Question;
  answer?: any;
  onAnswer: (answer: any) => void;
  questionNumber: number;
  totalQuestions: number;
}

export const AssessmentQuestion = ({ 
  question, 
  answer, 
  onAnswer, 
  questionNumber, 
  totalQuestions 
}: AssessmentQuestionProps) => {
  
  const renderMultipleChoice = () => (
    <div className="space-y-3">
      {question.options?.map((option, index) => (
        <Button
          key={index}
          variant={answer === index ? "default" : "outline"}
          className={cn(
            "w-full justify-start text-left p-4 h-auto transition-all duration-200",
            answer === index && "bg-gradient-primary text-primary-foreground shadow-design"
          )}
          onClick={() => onAnswer(index)}
        >
          <span className="text-sm font-medium mr-3 opacity-60">
            {String.fromCharCode(65 + index)}.
          </span>
          {option}
        </Button>
      ))}
    </div>
  );

  const renderLikert = () => {
    const { min, max, minLabel, maxLabel } = question.likertScale!;
    const values = Array.from({ length: max - min + 1 }, (_, i) => min + i);

    return (
      <div className="space-y-4">
        <div className="flex justify-between text-sm text-muted-foreground">
          <span>{minLabel}</span>
          <span>{maxLabel}</span>
        </div>
        <div className="flex justify-between gap-2">
          {values.map((value) => (
            <Button
              key={value}
              variant={answer === value ? "default" : "outline"}
              size="sm"
              className={cn(
                "w-12 h-12 rounded-full transition-all duration-200",
                answer === value && "bg-gradient-primary text-primary-foreground shadow-design scale-110"
              )}
              onClick={() => onAnswer(value)}
            >
              {value}
            </Button>
          ))}
        </div>
      </div>
    );
  };

  const renderScenario = () => (
    <div className="space-y-4">
      <div className="p-4 bg-muted/50 rounded-lg">
        <p className="text-sm leading-relaxed">{question.scenario?.context}</p>
      </div>
      <div className="space-y-2">
        {question.scenario?.choices.map((choice, index) => (
          <Button
            key={index}
            variant={answer === choice.value ? "default" : "outline"}
            className={cn(
              "w-full justify-start text-left p-4 h-auto transition-all duration-200",
              answer === choice.value && "bg-gradient-primary text-primary-foreground shadow-design"
            )}
            onClick={() => onAnswer(choice.value)}
          >
            {choice.text}
          </Button>
        ))}
      </div>
    </div>
  );

  return (
    <Card className="p-8 shadow-design-md animate-slide-up">
      <div className="mb-6">
        <div className="flex justify-between items-center mb-4">
          <span className="text-sm font-medium text-muted-foreground">
            Question {questionNumber} of {totalQuestions}
          </span>
          <span className="text-xs px-2 py-1 bg-primary/10 text-primary rounded-full">
            {question.category}
          </span>
        </div>
        <h3 className="text-xl font-semibold leading-relaxed">
          {question.question}
        </h3>
      </div>

      {question.type === 'multiple-choice' && renderMultipleChoice()}
      {question.type === 'likert' && renderLikert()}
      {question.type === 'scenario' && renderScenario()}
    </Card>
  );
};