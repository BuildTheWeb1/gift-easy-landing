import Script from "next/script";

export default function SchemaMarkup() {
	const schemaData = {
		"@context": "https://schema.org",
		"@type": "WebApplication",
		name: "Gift Easy",
		description:
			"AI-powered gift recommendation app that helps you find perfect gifts for any occasion based on recipient preferences and your budget.",
		applicationCategory: "LifestyleApplication",
		offers: {
			"@type": "Offer",
			price: "0.99",
			priceCurrency: "USD",
			availability: "https://schema.org/InStock",
		},
		operatingSystem: "All",
		url: "https://gift-easy.com",
		potentialAction: {
			"@type": "UseAction",
			target: "https://gift-easy.com",
		},
		keywords:
			"gift recommendations, AI gift finder, personalized gifts, gift ideas, occasion gifts, budget gifts",
		aggregateRating: {
			"@type": "AggregateRating",
			ratingValue: "4.8",
			ratingCount: "125",
		},
	};

	return (
		<Script id="schema-markup" type="application/ld+json">
			{JSON.stringify(schemaData)}
		</Script>
	);
}
