import { Zap, Target, Clock, Heart, Shield, Sparkles } from 'lucide-react';

export interface FeatureItem {
  id: string;
  title: string;
  description: string;
  icon: typeof Zap;
  iconBgColor: string;
}

export const whyChooseFeatures: FeatureItem[] = [
  {
    id: 'lightning-fast',
    title: 'Lightning Fast',
    description: 'Get personalized gift recommendations in seconds, not hours of browsing.',
    icon: Zap,
    iconBgColor: 'bg-amber-400'
  },
  {
    id: 'spot-on',
    title: 'Spot-On Suggestions',
    description: 'Our AI considers personality, interests, budget, and occasion for perfect matches.',
    icon: Target,
    iconBgColor: 'bg-indigo-400'
  },
  {
    id: 'save-time',
    title: 'Save Time',
    description: 'No more endless scrolling through gift websites. We do the research for you.',
    icon: Clock,
    iconBgColor: 'bg-emerald-400'
  },
  {
    id: 'thoughtful-gifts',
    title: 'Thoughtful Gifts',
    description: 'Show you care with gifts that truly resonate with your loved ones.',
    icon: Heart,
    iconBgColor: 'bg-pink-400'
  },
  {
    id: 'privacy-first',
    title: 'Privacy First',
    description: 'Your personal information stays private. We don\'t store or share your data.',
    icon: Shield,
    iconBgColor: 'bg-blue-400'
  },
  {
    id: 'always-fresh',
    title: 'Always Fresh',
    description: 'Our AI learns from latest trends to suggest contemporary and relevant gifts.',
    icon: Sparkles,
    iconBgColor: 'bg-fuchsia-400'
  }
];
