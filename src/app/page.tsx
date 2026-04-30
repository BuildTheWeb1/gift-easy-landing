import LandingPage from "@/components/LandingPage";
import SchemaMarkup from "@/components/SchemaMarkup";
import type { Metadata } from "next";

export const metadata: Metadata = {
	title: "GiftEasy - Personalized Gift Ideas in 30 Seconds | Free AI Gift Finder",
	description:
		"Tell us about your person and get 5 thoughtful, personalized gift recommendations with prices and purchase links. Free, no signup needed.",
	keywords: [
		"gift ideas",
		"gift finder",
		"personalized gift recommendations",
		"AI gift finder",
		"birthday gift ideas",
		"gifts for mom",
	],
	alternates: {
		canonical: "/",
	},
	openGraph: {
		title: "GiftEasy - Gift Ideas That Actually Fit Your Person",
		description:
			"Find 5 thoughtful gift ideas with prices and where-to-buy links in about 30 seconds.",
		type: "website",
		url: "https://gift-easy.com",
		images: [
			{
				url: "/og-image.png",
				width: 1200,
				height: 630,
				alt: "GiftEasy personalized gift ideas preview",
			},
		],
	},
	twitter: {
		card: "summary_large_image",
		title: "GiftEasy - Personalized Gift Ideas in 30 Seconds",
		description:
			"Tell us who they are. Get 5 thoughtful gift ideas with price guidance and where-to-buy links.",
		images: ["/twitter-image.png"],
	},
	robots: {
		index: true,
		follow: true,
	},
};

export default function Home() {
	return (
		<>
			<SchemaMarkup />
			<LandingPage />
		</>
	);
}
