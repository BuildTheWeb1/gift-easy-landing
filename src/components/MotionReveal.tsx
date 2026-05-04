"use client";

import { motion, useInView, useReducedMotion } from "framer-motion";
import type { ReactNode } from "react";
import { useRef } from "react";

type MotionRevealProps = {
	children: ReactNode;
	className?: string;
	delay?: number;
	y?: number;
};

export default function MotionReveal({
	children,
	className,
	delay = 0,
	y = 28,
}: MotionRevealProps) {
	const shouldReduceMotion = useReducedMotion();
	const ref = useRef<HTMLDivElement | null>(null);
	const isInView = useInView(ref, { amount: 0.2 });

	if (shouldReduceMotion) {
		return <div className={className}>{children}</div>;
	}

	return (
		<motion.div
			ref={ref}
			className={className}
			initial={false}
			animate={{ opacity: isInView ? 1 : 0, y: isInView ? 0 : y }}
			transition={{ duration: 0.55, delay, ease: [0.22, 1, 0.36, 1] }}
		>
			{children}
		</motion.div>
	);
}
