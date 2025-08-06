import { Question } from "@/components/assessment/AssessmentQuestion";

export const assessmentQuestions: Question[] = [
  // Psychometric Section - Interest & Motivation (5 questions)
  {
    id: "interest_1",
    type: "likert",
    category: "psychometric",
    subcategory: "interest",
    question: "How excited do you feel when you see a beautifully designed app or website?",
    likertScale: {
      min: 1,
      max: 5,
      minLabel: "Not excited at all",
      maxLabel: "Extremely excited"
    }
  },
  {
    id: "interest_2", 
    type: "multiple-choice",
    category: "psychometric",
    subcategory: "interest",
    question: "Which activity sounds most appealing to you?",
    options: [
      "Researching what users want and need",
      "Creating visual mockups and prototypes", 
      "Analyzing user behavior data",
      "Testing and iterating on designs"
    ]
  },
  {
    id: "motivation_1",
    type: "likert",
    category: "psychometric", 
    subcategory: "grit",
    question: "I finish whatever I begin, even when it's challenging.",
    likertScale: {
      min: 1,
      max: 5,
      minLabel: "Not like me at all",
      maxLabel: "Very much like me"
    }
  },
  {
    id: "motivation_2",
    type: "likert",
    category: "psychometric",
    subcategory: "grit", 
    question: "Setbacks don't discourage me. I bounce back from challenges quickly.",
    likertScale: {
      min: 1,
      max: 5,
      minLabel: "Not like me at all", 
      maxLabel: "Very much like me"
    }
  },
  {
    id: "mindset_1",
    type: "likert",
    category: "psychometric",
    subcategory: "growth-mindset",
    question: "I believe my design abilities can be developed through effort and practice.",
    likertScale: {
      min: 1,
      max: 5,
      minLabel: "Strongly disagree",
      maxLabel: "Strongly agree"
    }
  },

  // Personality Section - Big Five traits (8 questions)
  {
    id: "personality_1",
    type: "likert",
    category: "psychometric",
    subcategory: "openness",
    question: "I enjoy trying new creative approaches to solving problems.",
    likertScale: {
      min: 1,
      max: 5,
      minLabel: "Strongly disagree",
      maxLabel: "Strongly agree"
    }
  },
  {
    id: "personality_2",
    type: "likert", 
    category: "psychometric",
    subcategory: "conscientiousness",
    question: "I pay attention to details and like to perfect my work.",
    likertScale: {
      min: 1,
      max: 5,
      minLabel: "Strongly disagree",
      maxLabel: "Strongly agree" 
    }
  },
  {
    id: "personality_3",
    type: "likert",
    category: "psychometric",
    subcategory: "agreeableness", 
    question: "I enjoy collaborating with others and value their input.",
    likertScale: {
      min: 1,
      max: 5,
      minLabel: "Strongly disagree",
      maxLabel: "Strongly agree"
    }
  },
  {
    id: "personality_4",
    type: "scenario",
    category: "psychometric",
    subcategory: "working-style",
    question: "You're working on a design project with tight deadlines. How do you prefer to approach it?",
    scenario: {
      context: "Your team has 2 weeks to redesign a mobile app's checkout flow. The stakeholders want regular updates.",
      choices: [
        { text: "Create a detailed plan first, then execute methodically", value: 4 },
        { text: "Start sketching ideas immediately and iterate quickly", value: 3 },
        { text: "Research similar apps first, then design based on best practices", value: 5 },
        { text: "Collaborate closely with the team throughout the process", value: 4 }
      ]
    }
  },

  // Technical Knowledge (10 questions)
  {
    id: "technical_1",
    type: "multiple-choice",
    category: "technical",
    subcategory: "domain-knowledge",
    question: "What is the primary purpose of wireframing in the design process?",
    options: [
      "To create the final visual design",
      "To map out the basic structure and layout before adding visual details",
      "To test the app's functionality",
      "To create marketing materials"
    ]
  },
  {
    id: "technical_2",
    type: "multiple-choice",
    category: "technical", 
    subcategory: "domain-knowledge",
    question: "Which principle is most important for good usability?",
    options: [
      "Making interfaces look beautiful",
      "Using the latest design trends",
      "Making interfaces easy to understand and use",
      "Adding as many features as possible"
    ]
  },
  {
    id: "technical_3",
    type: "multiple-choice",
    category: "technical",
    subcategory: "domain-knowledge", 
    question: "What does 'user-centered design' mean?",
    options: [
      "Designing based on what users say they want",
      "Putting user needs and behaviors at the center of the design process",
      "Making designs that look appealing to users",
      "Copying designs that other users have created"
    ]
  },
  {
    id: "technical_4",
    type: "multiple-choice",
    category: "technical",
    subcategory: "tools",
    question: "Which tool is primarily used for creating interactive prototypes?",
    options: [
      "Photoshop",
      "Microsoft Word", 
      "Figma",
      "Excel"
    ]
  },
  {
    id: "technical_5",
    type: "scenario",
    category: "technical",
    subcategory: "problem-solving",
    question: "Users are struggling to find the search function on an e-commerce website. What would you do first?",
    scenario: {
      context: "Analytics show that only 15% of users are using the search feature, but user interviews reveal that many want to search for specific products.",
      choices: [
        { text: "Move the search bar to a more prominent location", value: 3 },
        { text: "Research how other successful e-commerce sites handle search", value: 5 },
        { text: "Conduct user testing to understand the specific problems", value: 5 },
        { text: "Add a search icon next to the current search bar", value: 2 }
      ]
    }
  },

  // Aptitude Section (12 questions)
  {
    id: "aptitude_1",
    type: "multiple-choice",
    category: "aptitude",
    subcategory: "logical-reasoning",
    question: "If App A has a 25% conversion rate and App B has a 20% conversion rate, and App A gets 1000 visitors while App B gets 1500 visitors, which app generates more conversions?",
    options: [
      "App A (250 conversions)",
      "App B (300 conversions)", 
      "They generate the same number",
      "Not enough information to determine"
    ]
  },
  {
    id: "aptitude_2",
    type: "multiple-choice",
    category: "aptitude",
    subcategory: "pattern-recognition",
    question: "In a user interface, which layout pattern would be most appropriate for displaying a list of equal-priority items?",
    options: [
      "A single prominent card at the top",
      "A grid layout with equal-sized cards",
      "A hierarchical tree structure", 
      "A horizontal scrolling banner"
    ]
  },
  {
    id: "aptitude_3",
    type: "scenario",
    category: "aptitude", 
    subcategory: "analytical-thinking",
    question: "You notice that users spend an average of 3 minutes on your app's signup page, but only 40% complete the signup. What might this indicate?",
    scenario: {
      context: "Your analytics show high engagement (long time spent) but low conversion on the signup page.",
      choices: [
        { text: "Users are interested but the form is too complex or confusing", value: 5 },
        { text: "Users don't want to sign up for the service", value: 2 },
        { text: "The page is loading too slowly", value: 3 },
        { text: "Users are multitasking and not focused", value: 1 }
      ]
    }
  },

  // RIASEC Holland Codes (6 questions)
  {
    id: "riasec_1",
    type: "multiple-choice",
    category: "psychometric",
    subcategory: "riasec",
    question: "Which type of work environment appeals to you most?",
    options: [
      "Collaborative spaces where I can work closely with others",
      "Creative studios with artistic freedom and inspiration",
      "Structured environments with clear processes and goals", 
      "Dynamic spaces where I can influence and lead projects"
    ]
  },
  {
    id: "riasec_2",
    type: "multiple-choice",
    category: "psychometric", 
    subcategory: "riasec",
    question: "Which activity energizes you most?",
    options: [
      "Solving complex puzzles or analytical problems",
      "Creating something beautiful and original",
      "Helping others achieve their goals",
      "Organizing and improving systems or processes"
    ]
  },

  // Scenario-Based Questions (5 questions)
  {
    id: "scenario_1",
    type: "scenario",
    category: "psychometric",
    subcategory: "work-preference", 
    question: "Your design team receives conflicting feedback from different stakeholders. How do you handle this situation?",
    scenario: {
      context: "Marketing wants a bold, colorful design while Engineering prefers a minimal approach. The CEO wants 'something innovative but safe.'",
      choices: [
        { text: "Research industry best practices and present data-driven recommendations", value: 5 },
        { text: "Create multiple design options that satisfy different stakeholders", value: 4 },
        { text: "Schedule a meeting to align everyone on user needs and business goals", value: 5 },
        { text: "Design based on the highest-ranking stakeholder's preference", value: 2 }
      ]
    }
  },
  {
    id: "scenario_2", 
    type: "scenario",
    category: "psychometric",
    subcategory: "work-preference",
    question: "You're asked to redesign a feature that you personally love but users find confusing. What's your approach?",
    scenario: {
      context: "User testing shows that 70% of users struggle with a navigation feature you think is elegant and innovative.",
      choices: [
        { text: "Keep the design but add more tutorial content", value: 2 },
        { text: "Completely redesign based on user feedback", value: 5 },
        { text: "Make small tweaks to improve usability while keeping the concept", value: 3 },
        { text: "Conduct more research to understand why users are struggling", value: 4 }
      ]
    }
  }
];

// Scoring weights for WISCAR framework
export const scoringWeights = {
  will: {
    'grit': 0.4,
    'growth-mindset': 0.3, 
    'motivation': 0.3
  },
  interest: {
    'interest': 0.7,
    'riasec': 0.3
  },
  skill: {
    'domain-knowledge': 0.5,
    'tools': 0.3,
    'problem-solving': 0.2
  },
  cognitive: {
    'logical-reasoning': 0.3,
    'pattern-recognition': 0.3,
    'analytical-thinking': 0.4
  },
  abilityToLearn: {
    'growth-mindset': 0.4,
    'openness': 0.3,
    'curiosity': 0.3
  },
  realWorldAlignment: {
    'work-preference': 0.5,
    'working-style': 0.3,
    'scenario-performance': 0.2
  }
};