import { Analytics } from "@vercel/analytics/react";
import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
	metadataBase: new URL("https://gift-easy.com"),
	icons: {
		icon: "/GiftEasy-logo.svg",
		apple: "/GiftEasy-logo.svg",
		shortcut: "/GiftEasy-logo.svg",
	},
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang="en">
			<head />
			<body className="antialiased">
				{children}
				<Analytics />
			</body>
		</html>
	);
}
