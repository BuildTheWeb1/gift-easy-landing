import { faqItems } from "@/app/data/faqData";

export function buildFaqSchema() {
	return {
		"@context": "https://schema.org",
		"@type": "FAQPage",
		mainEntity: faqItems.map((item) => ({
			"@type": "Question",
			name: item.question,
			acceptedAnswer: {
				"@type": "Answer",
				text: item.answer,
			},
		})),
	};
}

export function buildOrganizationSchema() {
	return {
		"@context": "https://schema.org",
		"@type": "Organization",
		name: "GiftEasy",
		url: "https://gift-easy.com",
		logo: "https://gift-easy.com/GiftEasy-logo.svg",
	};
}

export function buildWebApplicationSchema() {
	return {
		"@context": "https://schema.org",
		"@type": "WebApplication",
		name: "GiftEasy",
		url: "https://gift-easy.com",
		applicationCategory: "LifestyleApplication",
		operatingSystem: "Web",
		description:
			"GiftEasy helps people find personalized gift ideas in about 30 seconds using recipient context, budget, and occasion details.",
		offers: {
			"@type": "Offer",
			price: "0",
			priceCurrency: "USD",
		},
		featureList: [
			"5 personalized gift ideas",
			"Price guidance included",
			"Direct purchase links",
			"No signup required for the free flow",
		],
	};
}
