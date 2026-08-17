"use client";

import { motion, useReducedMotion } from "framer-motion";

type ProofStat = {
	value: string;
	label: string;
};

type Testimonial = {
	name: string;
	source: string;
	quote: string;
};

type AnimatedSocialProofProps = {
	proofStats: ProofStat[];
	testimonials: Testimonial[];
};

export default function AnimatedSocialProof({
	proofStats,
	testimonials,
}: AnimatedSocialProofProps) {
	const shouldReduceMotion = useReducedMotion();

	const hoverLift = shouldReduceMotion
		? undefined
		: {
				y: -6,
				scale: 1.01,
		  };

	return (
		<div className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr]">
			<motion.div
				initial={shouldReduceMotion ? undefined : { opacity: 0.4, y: 24 }}
				whileInView={shouldReduceMotion ? undefined : { opacity: 1, y: 0 }}
				viewport={{ once: true, amount: 0.2 }}
				transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
			>
				<p className="text-sm font-semibold uppercase tracking-[0.24em] text-amber-300">
					Social Proof
				</p>
				<h2 className="mt-4 text-balance font-display text-[clamp(2.15rem,3.8vw,3.2rem)] leading-[1.02] tracking-[-0.03em]">
					People are finding better gifts, faster.
				</h2>
				<div className="mt-8 grid gap-6 divide-y divide-white/12 sm:grid-cols-3 sm:gap-4 sm:divide-y-0 lg:grid-cols-1 lg:divide-y">
					{proofStats.map((stat, index) => (
						<motion.div
							key={stat.label}
							className={
								index === 0
									? "pt-0 sm:pt-0 lg:pt-0"
									: "pt-6 sm:pt-0 lg:pt-6"
							}
							initial={shouldReduceMotion ? undefined : { opacity: 0.4, y: 18 }}
							whileInView={shouldReduceMotion ? undefined : { opacity: 1, y: 0 }}
							viewport={{ once: true, amount: 0.25 }}
							whileHover={hoverLift}
							transition={{
								type: "spring",
								stiffness: 260,
								damping: 22,
								delay: 0.08,
							}}
						>
							<p className="font-display text-4xl leading-none text-amber-300">
								{stat.value}
							</p>
							<p className="mt-3 text-sm leading-6 text-stone-300">{stat.label}</p>
						</motion.div>
					))}
				</div>
			</motion.div>
			<div className="grid gap-8 divide-y divide-white/12 lg:grid-cols-3 lg:gap-6 lg:divide-x lg:divide-y-0">
				{testimonials.map((testimonial, index) => (
					<motion.article
						key={testimonial.name}
						className={
							index === 0
								? "flex h-full flex-col pt-0 lg:pl-0"
								: "flex h-full flex-col pt-8 lg:pl-6 lg:pt-0"
						}
						initial={shouldReduceMotion ? undefined : { opacity: 0.4, y: 20, scale: 0.98 }}
						whileInView={shouldReduceMotion ? undefined : { opacity: 1, y: 0, scale: 1 }}
						viewport={{ once: true, amount: 0.2 }}
						whileHover={hoverLift}
						transition={{
							type: "spring",
							stiffness: 260,
							damping: 22,
							delay: 0.08 + index * 0.06,
						}}
					>
						<p aria-hidden="true" className="text-sm tracking-[0.2em] text-amber-300">
							★★★★★
						</p>
						<p className="sr-only">Five-star feedback</p>
						<p className="flex-1 text-pretty leading-7 text-stone-100">
							&ldquo;{testimonial.quote}&rdquo;
						</p>
						<p className="mt-6 text-sm font-semibold text-stone-50">{testimonial.name}</p>
						<p className="mt-1 text-sm text-stone-400">{testimonial.source}</p>
					</motion.article>
				))}
			</div>
		</div>
	);
}
