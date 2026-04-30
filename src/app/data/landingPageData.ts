export type DemoResult = {
	title: string;
	hook: string;
	price: string;
	href: string;
};

export type DemoScenario = {
	id: string;
	label: string;
	occasion: string;
	relationship: string;
	budget: string;
	input: string;
	appHref: string;
	results: DemoResult[];
};

export type OccasionLink = {
	label: string;
	occasion: string;
	relationship?: string;
	description: string;
	href: string;
};

export const primaryCtaHref = "https://app.gift-easy.com/";

export const trustBarItems = [
	"Free to try",
	"No signup needed",
	"Takes about 30 seconds",
];

export const heroStats = [
	"5 personalized ideas",
	"Prices included",
	"Where-to-buy links",
];

export const demoScenarios: DemoScenario[] = [
	{
		id: "birthday-mom",
		label: "Birthday for Mom",
		occasion: "Birthday",
		relationship: "Mom",
		budget: "$25-$50",
		input:
			"She is 58, loves gardening, makes her own jam, and is always cold. Budget: $25-50.",
		appHref:
			"https://app.gift-easy.com/?occasion=Birthday&relationship=Mom&budget=%2425-%2450&notes=She%20is%2058%2C%20loves%20gardening%2C%20makes%20her%20own%20jam%2C%20and%20is%20always%20cold.",
		results: [
			{
				title: "Haws Heritage Watering Can",
				hook: "For the mom whose garden doubles as therapy.",
				price: "$45-$65",
				href:
					"https://app.gift-easy.com/?occasion=Birthday&relationship=Mom&budget=%2425-%2450&notes=She%20is%2058%2C%20loves%20gardening%2C%20makes%20her%20own%20jam%2C%20and%20is%20always%20cold.",
			},
			{
				title: "Ball Complete Book of Home Preserving",
				hook: "She already makes great jam. This opens the door to chutneys, pickles, and relishes.",
				price: "$22-$28",
				href:
					"https://app.gift-easy.com/?occasion=Birthday&relationship=Mom&budget=%2425-%2450&notes=She%20is%2058%2C%20loves%20gardening%2C%20makes%20her%20own%20jam%2C%20and%20is%20always%20cold.",
			},
		],
	},
	{
		id: "holiday-partner",
		label: "Holiday for Partner",
		occasion: "Christmas",
		relationship: "Partner",
		budget: "$50-$100",
		input:
			"They love cooking on weekends, collect vinyl, and keep saying they want cozy nights at home. Budget: $50-100.",
		appHref:
			"https://app.gift-easy.com/?occasion=Christmas&relationship=Partner&budget=%2450-%24100&notes=They%20love%20cooking%20on%20weekends%2C%20collect%20vinyl%2C%20and%20keep%20saying%20they%20want%20cozy%20nights%20at%20home.",
		results: [
			{
				title: "Cast-Iron Fondue Set",
				hook: "Turns date night into a ritual instead of another takeout order.",
				price: "$58-$78",
				href:
					"https://app.gift-easy.com/?occasion=Christmas&relationship=Partner&budget=%2450-%24100&notes=They%20love%20cooking%20on%20weekends%2C%20collect%20vinyl%2C%20and%20keep%20saying%20they%20want%20cozy%20nights%20at%20home.",
			},
			{
				title: "Vinyl Subscription Gift Box",
				hook: "Feels personal because every delivery still ties back to what they already collect.",
				price: "$65-$95",
				href:
					"https://app.gift-easy.com/?occasion=Christmas&relationship=Partner&budget=%2450-%24100&notes=They%20love%20cooking%20on%20weekends%2C%20collect%20vinyl%2C%20and%20keep%20saying%20they%20want%20cozy%20nights%20at%20home.",
			},
		],
	},
	{
		id: "grad-brother",
		label: "Graduation for Brother",
		occasion: "Graduation",
		relationship: "Brother",
		budget: "$25-$50",
		input:
			"He just finished engineering school, loves coffee, and is moving to a new city for work. Budget: $25-50.",
		appHref:
			"https://app.gift-easy.com/?occasion=Graduation&relationship=Brother&budget=%2425-%2450&notes=He%20just%20finished%20engineering%20school%2C%20loves%20coffee%2C%20and%20is%20moving%20to%20a%20new%20city%20for%20work.",
		results: [
			{
				title: "Commuter Coffee Kit",
				hook: "Useful on day one of the new job without feeling generic.",
				price: "$32-$46",
				href:
					"https://app.gift-easy.com/?occasion=Graduation&relationship=Brother&budget=%2425-%2450&notes=He%20just%20finished%20engineering%20school%2C%20loves%20coffee%2C%20and%20is%20moving%20to%20a%20new%20city%20for%20work.",
			},
			{
				title: "City Discovery Journal",
				hook: "Makes the move feel like an adventure instead of just logistics.",
				price: "$24-$30",
				href:
					"https://app.gift-easy.com/?occasion=Graduation&relationship=Brother&budget=%2425-%2450&notes=He%20just%20finished%20engineering%20school%2C%20loves%20coffee%2C%20and%20is%20moving%20to%20a%20new%20city%20for%20work.",
			},
		],
	},
];

export const howItWorksSteps = [
	{
		id: "01",
		title: "Tell us about them",
		description:
			"Answer 5 quick questions about who they are, what they love, and what this occasion means.",
		meta: "About 30 seconds",
	},
	{
		id: "02",
		title: "We think creatively",
		description:
			"GiftEasy weighs personality, interests, and budget to avoid another generic top-10 list.",
		meta: "Ideas in a few seconds",
	},
	{
		id: "03",
		title: "Pick a winner",
		description:
			"Browse 5 ideas with price guidance, reasoning, and direct links so you can buy with confidence.",
		meta: "Ready to compare",
	},
];

export const painPoints = [
	"What do you buy for someone who already has everything?",
	"She said she does not want anything, which somehow makes this harder.",
	"The party is tomorrow and you still have nothing.",
	"You refuse to give another candle and call it thoughtful.",
];

export const proofStats = [
	{
		value: "23",
		label: "occasion routes already live in the app",
	},
	{
		value: "5",
		label: "personalized ideas in every free result",
	},
	{
		value: "1",
		label: "short form instead of endless gift-list scrolling",
	},
];

export const testimonials = [
	{
		name: "Sarah M.",
		source: "Shared by email",
		quote:
			"I described my dad as impossible to shop for, into golf, and allergic to gadgets. It suggested a lesson with a local pro. He loved it.",
	},
	{
		name: "James K.",
		source: "Shared after a retirement gift",
		quote:
			"Used it for my boss's retirement. The suggestions felt specific, not like another corporate basket roundup.",
	},
	{
		name: "Alex T.",
		source: "Shared after a birthday order",
		quote:
			"Found my girlfriend's birthday gift in two minutes. She cried. That is all I needed.",
	},
];

export const occasionLinks: OccasionLink[] = [
	{
		label: "Birthday",
		occasion: "Birthday",
		description: "For the person who says they do not need anything and still deserves something thoughtful.",
		href: "https://app.gift-easy.com/?occasion=Birthday",
	},
	{
		label: "Anniversary",
		occasion: "Anniversary",
		description: "Find something that feels personal, not like a rushed backup plan.",
		href: "https://app.gift-easy.com/?occasion=Anniversary",
	},
	{
		label: "Christmas",
		occasion: "Christmas",
		description: "Cut through wish-list noise and land on a gift they will actually use.",
		href: "https://app.gift-easy.com/?occasion=Christmas",
	},
	{
		label: "Graduation",
		occasion: "Graduation",
		description: "Mark the milestone with something that feels optimistic and earned.",
		href: "https://app.gift-easy.com/?occasion=Graduation",
	},
	{
		label: "Baby Shower",
		occasion: "Baby Shower",
		description: "Choose a gift that feels useful for the parents and special for the moment.",
		href: "https://app.gift-easy.com/?occasion=Baby%20Shower",
	},
	{
		label: "Mother's Day",
		occasion: "Mother's Day",
		relationship: "Mom",
		description: "Skip the generic flowers-and-candle routine and make it feel considered.",
		href: "https://app.gift-easy.com/?occasion=Mother%27s%20Day&relationship=Mom",
	},
	{
		label: "Housewarming",
		occasion: "Housewarming",
		description: "Find something that helps a new place start feeling like home.",
		href: "https://app.gift-easy.com/?occasion=Housewarming",
	},
	{
		label: "Retirement",
		occasion: "Retirement",
		description: "Celebrate the next chapter with a gift that feels meaningful, not obligatory.",
		href: "https://app.gift-easy.com/?occasion=Retirement",
	},
	{
		label: "Just Because",
		occasion: "Just Because",
		description: "For the thoughtful surprise that lands harder than any calendar reminder.",
		href: "https://app.gift-easy.com/?occasion=Just%20Because",
	},
	{
		label: "Valentine's",
		occasion: "Valentine's Day",
		relationship: "Partner",
		description: "Find a romantic gift that feels specific to your person, not copy-pasted.",
		href: "https://app.gift-easy.com/?occasion=Valentine%27s%20Day&relationship=Partner",
	},
	{
		label: "Father's Day",
		occasion: "Father's Day",
		relationship: "Dad",
		description: "Better than another mug, tie, or gadget he never asked for.",
		href: "https://app.gift-easy.com/?occasion=Father%27s%20Day&relationship=Dad",
	},
	{
		label: "Wedding",
		occasion: "Wedding",
		description: "Give them something that feels lasting instead of another registry filler.",
		href: "https://app.gift-easy.com/?occasion=Wedding",
	},
];

export const footerLinks = [
	{
		label: "Privacy Policy",
		href: "/privacy",
	},
	{
		label: "Terms",
		href: "/terms",
	},
	{
		label: "Contact",
		href: "mailto:hello@gift-easy.com",
	},
];
