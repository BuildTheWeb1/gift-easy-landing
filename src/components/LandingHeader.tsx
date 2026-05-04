"use client";

import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";

type LandingHeaderProps = {
	primaryCtaHref: string;
};

export default function LandingHeader({
	primaryCtaHref,
}: LandingHeaderProps) {
	const [isScrolled, setIsScrolled] = useState(false);

	useEffect(() => {
		const updateScrollState = () => {
			setIsScrolled(window.scrollY > 12);
		};

		updateScrollState();
		window.addEventListener("scroll", updateScrollState, { passive: true });

		return () => {
			window.removeEventListener("scroll", updateScrollState);
		};
	}, []);

	return (
		<header
			className={cn(
				"sticky top-0 z-40 transition-all duration-300",
				isScrolled
					? "border-b border-white/55 bg-[#faf6ef]/80 backdrop-blur-xl"
					: "border-b border-transparent bg-transparent",
			)}
		>
			<div className="mx-auto flex max-w-6xl items-center justify-between gap-3 px-4 py-4 sm:gap-4 sm:px-6 lg:px-8">
				<Link
					href="/"
					className="min-w-0 flex items-center gap-3 rounded-full focus-visible:ring-2 focus-visible:ring-amber-500/60 focus-visible:ring-offset-2"
				>
					<Image
						src="/GiftEasy-logo.svg"
						alt="GiftEasy logo"
						width={42}
						height={42}
						priority
					/>
					<span className="hidden font-display text-2xl tracking-tight sm:inline">
						GiftEasy
					</span>
				</Link>
				<Button
					asChild
					size="lg"
					className="h-11 rounded-full bg-stone-950 px-3 text-sm font-semibold text-stone-50 shadow-[0_18px_30px_rgba(28,25,23,0.16)] hover:bg-stone-800 sm:h-12 sm:px-5"
				>
					<Link href={primaryCtaHref}>
						<span className="sm:hidden">Find Gifts</span>
						<span className="hidden sm:inline">Find Gift Ideas</span>
					</Link>
				</Button>
			</div>
		</header>
	);
}
