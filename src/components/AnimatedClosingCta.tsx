"use client";

import { motion, useReducedMotion } from "framer-motion";
import { Button } from "@/components/ui/button";
import Link from "next/link";

type AnimatedClosingCtaProps = {
	href: string;
};

export default function AnimatedClosingCta({ href }: AnimatedClosingCtaProps) {
	const shouldReduceMotion = useReducedMotion();

	return (
		<div className="relative overflow-hidden rounded-[2.8rem] border border-amber-300/50 bg-[linear-gradient(135deg,rgba(251,191,36,0.26),rgba(255,255,255,0.92),rgba(245,158,11,0.18))] px-6 py-12 text-center shadow-[0_30px_80px_rgba(28,25,23,0.09)] sm:px-10">
			{shouldReduceMotion ? null : (
				<motion.div
					aria-hidden="true"
					className="pointer-events-none absolute inset-x-[12%] top-6 h-28 rounded-full bg-white/45 blur-3xl"
					animate={{ scale: [1, 1.08, 1], opacity: [0.5, 0.8, 0.5] }}
					transition={{ duration: 6, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut" }}
				/>
			)}
			<div className="relative">
				<p className="text-sm font-semibold uppercase tracking-[0.24em] text-amber-700">
					Ready When You Are
				</p>
				<h2 className="mx-auto mt-4 max-w-3xl text-balance font-display text-[clamp(2.2rem,3.8vw,3.4rem)] leading-[1.02] tracking-[-0.03em]">
					Your person deserves a gift that means something.
				</h2>
				<p className="mx-auto mt-4 max-w-2xl text-pretty text-lg leading-8 text-stone-700">
					30 seconds. 5 ideas. Zero stress.
				</p>
				<div className="mt-8">
					<motion.div
						className="inline-flex"
						whileHover={shouldReduceMotion ? undefined : { scale: 1.03, y: -2 }}
						whileTap={shouldReduceMotion ? undefined : { scale: 0.98 }}
						transition={{ type: "spring", stiffness: 260, damping: 18 }}
					>
						<Button
							asChild
							size="lg"
							className="h-14 rounded-full bg-stone-950 px-7 text-base font-semibold text-stone-50 hover:bg-stone-800"
						>
							<Link href={href}>Find Gift Ideas</Link>
						</Button>
					</motion.div>
				</div>
				<p className="mt-4 text-sm text-stone-600">
					Free to try · No signup · Takes about 30 seconds
				</p>
			</div>
		</div>
	);
}
