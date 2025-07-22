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
			"Our AI analyzes the information you provide about the recipient such as age, interests, relationship, and occasion and matches it against a vast database of gift ideas. By considering personality traits, current trends, and your budget, it delivers thoughtful and personalized gift suggestions every time.",
	},
	{
		id: "how-much-does-it-cost",
		question: "How much does it cost?",
		answer:
			"Each batch of 5 personalized gift ideas costs just $2.49. You only pay when you’re ready to see your curated recommendations. No hidden fees or subscriptions.",
	},
	{
		id: "need-account",
		question: "Do I need to create an account?",
		answer:
			"No signup or account creation is required, just answer a few quick questions and instantly receive your gift ideas. Enjoy a seamless experience with complete privacy.",
	},
	{
		id: "occasions-supported",
		question: "What occasions does GiftEasy support?",
		answer:
			"GiftEasy helps with a wide range of occasions, including birthdays, anniversaries, holidays, graduations, corporate gifts, and more. No matter the event, we’ll find the perfect present.",
	},
	{
		id: "budget-range",
		question: "Can I specify a budget range?",
		answer:
			"Absolutely! GiftEasy allows you to set specific budget parameters, ensuring all recommendations fall within your price range. Whether you’re seeking affordable ideas or premium gifts, our AI tailors suggestions to your spending comfort.",
	},
	{
		id: "accuracy",
		question: "How accurate are the gift suggestions?",
		answer:
			"Our AI is trained to provide thoughtful, relevant ideas based on your input and current trends. If you want more options or aren’t fully satisfied, you can always request another batch of suggestions.",
	},
	{
		id: "business-gifts",
		question: "Can I use GiftEasy for business gifts?",
		answer:
			"Yes! GiftEasy offers a dedicated business gifting feature for corporate presents, client appreciation, employee recognition, and team celebrations. Make professional gifting effortless and thoughtful.",
	},
	{
		id: "dont-like-suggestions",
		question: "What if I don't like any of the suggestions?",
		answer:
			"If you’re not satisfied with the initial suggestions, you can refine your search by providing more details or adjusting your preferences. Simply request a new batch, our AI learns from your feedback to improve future recommendations.",
	},
];
