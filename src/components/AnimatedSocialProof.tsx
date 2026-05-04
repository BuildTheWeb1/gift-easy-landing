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
			<div>
				<p className="text-sm font-semibold uppercase tracking-[0.24em] text-amber-300">
					Social Proof
				</p>
				<h2 className="mt-4 text-balance font-display text-[clamp(2.15rem,3.8vw,3.2rem)] leading-[1.02] tracking-[-0.03em]">
					People are finding better gifts, faster.
				</h2>
				<div className="mt-8 grid gap-4 sm:grid-cols-3 lg:grid-cols-1">
					{proofStats.map((stat) => (
						<motion.div
							key={stat.label}
							className="rounded-[1.6rem] border border-white/12 bg-white/6 p-5"
							whileHover={hoverLift}
							transition={{ type: "spring", stiffness: 260, damping: 22 }}
						>
							<p className="font-display text-4xl leading-none text-amber-300">
								{stat.value}
							</p>
							<p className="mt-3 text-sm leading-6 text-stone-300">{stat.label}</p>
						</motion.div>
					))}
				</div>
			</div>
			<div className="grid gap-4 lg:grid-cols-3">
				{testimonials.map((testimonial) => (
					<motion.article
						key={testimonial.name}
						className="flex h-full flex-col rounded-[1.8rem] border border-white/12 bg-white/6 p-6"
						whileHover={hoverLift}
						transition={{ type: "spring", stiffness: 260, damping: 22 }}
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
