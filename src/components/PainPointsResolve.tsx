"use client";

import { motion, useReducedMotion } from "framer-motion";
import Link from "next/link";
import { Button } from "@/components/ui/button";

type PainPointsResolveProps = {
	painPoints: string[];
	trustBarItems: string[];
	ctaHref: string;
	reassurance: string;
};

/**
 * The one section on the page that names the shopper's anxiety directly.
 * Motion here is deliberately different from the rest of the page's uniform
 * fade-up: the pain-point quotes snap in quick and tight, one after another,
 * mirroring the rushed, crowding-in quality of last-minute gift panic. The
 * trust pills + CTA that follow then settle in as a single slower, softer
 * beat — the exhale after the list of worries. Every other section keeps the
 * plain MotionReveal fade so this contrast reads as intentional, not as a
 * new site-wide pattern.
 */
export default function PainPointsResolve({
	painPoints,
	trustBarItems,
	ctaHref,
	reassurance,
}: PainPointsResolveProps) {
	const shouldReduceMotion = useReducedMotion();

	if (shouldReduceMotion) {
		return (
			<>
				<div className="mt-10 grid gap-4 md:grid-cols-2">
					{painPoints.map((point) => (
						<article
							key={point}
							className="rounded-[1.8rem] border border-stone-200 bg-white/80 p-6 shadow-sm"
						>
							<p className="text-lg leading-8 text-stone-800">&ldquo;{point}&rdquo;</p>
						</article>
					))}
				</div>
				<div className="mt-8 max-w-3xl">
					<p className="text-pretty text-lg leading-8 text-stone-700">{reassurance}</p>
					<ul className="mt-6 flex flex-wrap gap-3 text-sm font-medium text-stone-800">
						{trustBarItems.map((item) => (
							<li
								key={item}
								className="rounded-full border border-amber-200/80 bg-amber-50/70 px-4 py-2 shadow-sm"
							>
								<span className="font-semibold text-amber-800">+</span> {item}
							</li>
						))}
					</ul>
					<div className="mt-8">
						<Button
							asChild
							size="lg"
							className="h-14 rounded-full bg-stone-950 px-7 text-base font-semibold text-stone-50 hover:bg-stone-800"
						>
							<Link href={ctaHref}>Try It Free</Link>
						</Button>
					</div>
				</div>
			</>
		);
	}

	return (
		<>
			<motion.div
				className="mt-10 grid gap-4 md:grid-cols-2"
				initial="rest"
				whileInView="shown"
				viewport={{ once: true, amount: 0.2 }}
				variants={{
					rest: {},
					shown: { transition: { staggerChildren: 0.05 } },
				}}
			>
				{painPoints.map((point) => (
					<motion.article
						key={point}
						className="rounded-[1.8rem] border border-stone-200 bg-white/80 p-6 shadow-sm"
						variants={{
							rest: { opacity: 0.4, y: 14 },
							shown: {
								opacity: 1,
								y: 0,
								transition: { duration: 0.32, ease: [0.4, 0, 1, 1] },
							},
						}}
					>
						<p className="text-lg leading-8 text-stone-800">&ldquo;{point}&rdquo;</p>
					</motion.article>
				))}
			</motion.div>
			<motion.div
				className="mt-8 max-w-3xl"
				initial={{ opacity: 0.4, y: 12, scale: 0.97 }}
				whileInView={{ opacity: 1, y: 0, scale: 1 }}
				viewport={{ once: true, amount: 0.3 }}
				transition={{
					type: "spring",
					stiffness: 90,
					damping: 20,
					delay: painPoints.length * 0.05 + 0.15,
				}}
			>
				<p className="text-pretty text-lg leading-8 text-stone-700">{reassurance}</p>
				<ul className="mt-6 flex flex-wrap gap-3 text-sm font-medium text-stone-800">
					{trustBarItems.map((item) => (
						<li
							key={item}
							className="rounded-full border border-amber-200/80 bg-amber-50/70 px-4 py-2 shadow-sm"
						>
							<span className="font-semibold text-amber-800">+</span> {item}
						</li>
					))}
				</ul>
				<div className="mt-8">
					<Button
						asChild
						size="lg"
						className="h-14 rounded-full bg-stone-950 px-7 text-base font-semibold text-stone-50 hover:bg-stone-800"
					>
						<Link href={ctaHref}>Try It Free</Link>
					</Button>
				</div>
			</motion.div>
		</>
	);
}
