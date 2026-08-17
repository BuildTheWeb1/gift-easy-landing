export interface FAQItem {
	id: string;
	question: string;
	answer: string;
}

export const faqItems: FAQItem[] = [
	{
		id: "is-gifteasy-free",
		question: "Is GiftEasy really free?",
		answer:
			"Your first search is completely free, no account needed. After that, generating a new list of ideas uses credits — 1 credit per recommendation, so you're never charged for more than you get. New accounts also get 3 free credits to try it out.",
	},
	{
		id: "how-does-gifteasy-work",
		question: "How does it know what to recommend?",
		answer:
			"Tell us who the gift is for, the occasion, their age range, and a bit about them — their interests, relationship to you, budget — and our AI searches the web in real time to find real, currently-available products that actually fit, instead of generic suggestions.",
	},
	{
		id: "need-an-account",
		question: "Do I need to create an account?",
		answer:
			"No — your first gift list works instantly with no sign-up. You'll only need an account if you want to buy more credits, save your search history, or come back to a list later.",
	},
	{
		id: "dont-like-the-ideas",
		question: "What if I don't like the suggestions?",
		answer:
			"You can vote thumbs up or down on any recommendation to help us learn your taste, or just start a new search with different details — a different budget, occasion, or a bit more context about them usually turns up better matches.",
	},
	{
		id: "share-the-list",
		question: "Can I share my gift list with someone else?",
		answer:
			'Yes — every list gets a shareable link. Hit "Share" (or "Copy link") on your results page and send it to anyone; they don\'t need an account to view it.',
	},
	{
		id: "what-occasions",
		question: "What occasions does GiftEasy cover?",
		answer:
			"Dozens, from birthdays, holidays, and weddings to more specific milestones like graduations, promotions, and new pets — organized into categories like Personal Achievements, Cultural & Religious Events, and Relationship Milestones so you can find the right occasion fast.",
	},
	{
		id: "is-data-safe",
		question: "Is my data safe?",
		answer:
			"Yes. We never see or store your payment details — purchases go through Stripe. Your gift lists are private by default and only visible to you, unless you choose to share the link.",
	},
	{
		id: "why-not-google",
		question: "How is this different from searching gift ideas on Google?",
		answer:
			"Google gives you a list of articles to read through yourself. GiftEasy does the research for you — it searches the web live and returns specific, in-stock products tailored to the actual person you're shopping for, not a generic \"best gifts for X\" listicle.",
	},
];
