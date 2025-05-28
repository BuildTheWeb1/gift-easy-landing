import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { Analytics } from "@vercel/analytics/react";
import SchemaMarkup from "../components/SchemaMarkup";
import "./globals.css";

const inter = Inter({
	subsets: ["latin"],
	display: "swap",
	variable: "--font-inter",
});

export const metadata: Metadata = {
	title: "Gift Easy | Find Perfect Gifts For Any Occasion",
	description:
		"Find the perfect gift for any occasion with personalized AI recommendations from Gift Easy.",
	keywords:
		"gift recommendations, AI gift finder, personalized gifts, gift ideas, occasion gifts, budget gifts",
	openGraph: {
		title: "Gift Easy | AI-Powered Gift Recommendations",
		description:
			"Discover the perfect gift for any occasion with personalized AI recommendations tailored to your recipient's preferences and your budget.",
		type: "website",
		url: "https://gift-easy.com",
		images: [
			{
				url: "/og-image.png",
				width: 1200,
				height: 630,
				alt: "Gift Easy - Find the perfect gift with AI",
			},
		],
	},
	twitter: {
		card: "summary_large_image",
		title: "Gift Easy | AI-Powered Gift Recommendations",
		description: "Find the perfect gift in seconds with AI personalization",
		images: ["/twitter-image.png"],
	},
	robots: {
		index: true,
		follow: true,
	},
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang="en">
			<head>
				<link rel="canonical" href="https://gift-easy.com" />
				<SchemaMarkup />
			</head>
			<body className={`${inter.variable} antialiased`}>
				{children}
				<Analytics />
			</body>
		</html>
	);
}
