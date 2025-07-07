import { MessageSquare, Sparkles, Gift } from 'lucide-react';

export interface HowItWorksStep {
  id: number;
  title: string;
  description: string;
  subtext: string;
  icon: typeof MessageSquare;
}

export const howItWorksSteps: HowItWorksStep[] = [
  {
    id: 1,
    title: "Tell Us About Them",
    description: "Share details about the person - their interests, age, relationship to you, and the occasion.",
    subtext: "Just a few simple questions and we'll understand exactly what you're looking for.",
    icon: MessageSquare
  },
  {
    id: 2,
    title: "AI Does the Magic",
    description: "Our advanced AI analyzes the information and searches through thousands of gift possibilities.",
    subtext: "Powered by machine learning to find the perfect match based on your input.",
    icon: Sparkles
  },
  {
    id: 3,
    title: "Get Perfect Suggestions",
    description: "Receive a curated list of thoughtful, personalized gift ideas tailored just for them.",
    subtext: "Complete with reasons why each gift is perfect and where to find them.",
    icon: Gift
  }
];
