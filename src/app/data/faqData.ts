export interface FAQItem {
	id: string;
	question: string;
	answer: string;
}

export const faqItems: FAQItem[] = [
	{
		id: "how-does-ai-work",
		question: "How does GiftEasy's AI work?",
		answer:
			"Our AI analyzes the information you provide about the recipient (age, interests, relationship, occasion) and matches it against a vast database of gift ideas. It considers factors like personality traits, current trends, and budget constraints to suggest the most suitable gifts.",
	},
	{
		id: "how-much-does-it-cost",
		question: "How much does it cost?",
		answer: "Each batch of 5 personalized gift ideas costs just $0.99",
	},
	{
		id: "need-account",
		question: "Do I need to create an account?",
		answer:
			"No signup required—just answer a few questions and get your results.",
	},
	{
		id: "occasions-supported",
		question: "What occasions does GiftEasy support?",
		answer:
			"GiftEasy helps with birthdays, anniversaries, holidays, graduations, corporate gifts, and more.",
	},
	{
		id: "budget-range",
		question: "Can I specify a budget range?",
		answer:
			"Absolutely! GiftEasy allows you to set specific budget parameters, ensuring all recommendations fall within your price range. Whether you're looking for affordable options or premium gifts, our AI will tailor suggestions to match your spending comfort.",
	},
	{
		id: "accuracy",
		question: "How accurate are the gift suggestions?",
		answer:
			"Our AI is trained to provide thoughtful, relevant ideas, but you can request another batch if you want more options.",
	},
	{
		id: "business-gifts",
		question: "Can I use GiftEasy for business gifts?",
		answer:
			"Yes! GiftEasy has a dedicated business gifting feature designed for corporate presents, client appreciation, employee recognition, and team celebrations.",
	},
	{
		id: "dont-like-suggestions",
		question: "What if I don't like any of the suggestions?",
		answer:
			"If you're not satisfied with the initial suggestions, you can refine your search by providing additional details about the recipient or adjusting your preferences. You can also request a new batch of ideas with a single click. Our AI learns from your feedback to improve future recommendations.",
	},
];
