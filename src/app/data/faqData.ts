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
			"Yes. You can generate 5 personalized gift recommendations without paying or creating an account. Premium options may expand the experience later, but the free flow is meant to be genuinely useful on its own.",
	},
	{
		id: "how-does-gifteasy-work",
		question: "How does it know what to recommend?",
		answer:
			"You describe the person, the occasion, and your budget. GiftEasy uses that context to generate ideas tailored to one specific person instead of serving another generic list meant for everyone.",
	},
	{
		id: "need-an-account",
		question: "Do I need to create an account?",
		answer:
			"No. The landing page sends you straight into the app, and the free gift flow works without signup. That keeps the first run fast when you are already short on time.",
	},
	{
		id: "dont-like-the-ideas",
		question: "What if I do not like the suggestions?",
		answer:
			"Give the app a little more context and run it again. Stronger details about their hobbies, style, or habits usually produce sharper recommendations than broad descriptions.",
	},
	{
		id: "share-the-list",
		question: "Can I share my gift list with someone else?",
		answer:
			"Yes. The app supports shareable result links so you can send ideas to a sibling, partner, or anyone helping with the purchase decision.",
	},
	{
		id: "what-occasions",
		question: "What occasions does GiftEasy cover?",
		answer:
			"Birthdays, anniversaries, graduations, holidays, housewarmings, retirements, and more. The landing page highlights common starting points, but the app already covers a much wider occasion set.",
	},
	{
		id: "is-data-safe",
		question: "Is my data safe?",
		answer:
			"The flow keeps the input lightweight and focused on gift context rather than sensitive personal data. You are describing a person for recommendation quality, not building a permanent profile.",
	},
	{
		id: "why-not-google",
		question: "How is this different from searching gift ideas on Google?",
		answer:
			"Search results give you listicles for the average person. GiftEasy gives you 5 ideas for your person, with reasoning, price guidance, and direct next steps to buy.",
	},
];
