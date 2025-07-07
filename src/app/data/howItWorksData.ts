import { Gift, MessageSquare, Sparkles } from "lucide-react";

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
		description:
			"Share details about the person - occasion, budget, recipient’s age, sex, location, and hobbies.",
		subtext:
			"Just a few simple questions and we'll understand exactly what you're looking for.",
		icon: MessageSquare,
	},
	{
		id: 2,
		title: "AI Does the Magic",
		description:
			"Our advanced AI analyzes your input and searches thousands of trending gift options to find the best matches.",
		subtext:
			"Powered by machine learning to find the perfect match based on your input.",
		icon: Sparkles,
	},
	{
		id: 3,
		title: "Get Perfect Suggestions",
		description:
			"Receive five curated gift suggestions, personalized gift ideas tailored just for them.",
		subtext:
			"Complete with reasons why each gift is perfect and where to find them.",
		icon: Gift,
	},
];
