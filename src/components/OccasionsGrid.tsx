"use client";

import type { OccasionLink } from "@/app/data/landingPageData";
import MotionReveal from "@/components/MotionReveal";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { useState } from "react";

type OccasionsGridProps = {
	items: OccasionLink[];
};

export default function OccasionsGrid({ items }: OccasionsGridProps) {
	const [expanded, setExpanded] = useState(false);
	const popular = items.filter((item) => item.popular);
	const rest = items.filter((item) => !item.popular);
	const visible = expanded ? items : popular;

	return (
		<div>
			<div className="mt-10 grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
				{visible.map((item, index) => (
					<MotionReveal key={`${item.label}-${item.href}`} delay={index * 0.06}>
						<Link
							href={item.href}
							className="group relative block rounded-[1.7rem] border border-stone-200 bg-white/82 p-5 transition-[transform,background-color,border-color,box-shadow] duration-200 hover:-translate-y-0.5 hover:border-stone-400 hover:bg-white hover:shadow-[0_16px_32px_rgba(28,25,23,0.08)] outline-none focus-visible:ring-2 focus-visible:ring-amber-500/60 focus-visible:ring-offset-2 focus-visible:[outline:2px_solid_#f59e0b] focus-visible:[outline-offset:2px]"
						>
							{item.popular && (
								<span className="absolute right-5 top-5 rounded-full bg-amber-500/15 px-3 py-1 text-xs font-semibold uppercase tracking-[0.14em] text-amber-800">
									Popular
								</span>
							)}
							<p className="max-w-[85%] font-display text-2xl leading-tight text-stone-950">
								{item.label}
							</p>
							<p className="mt-3 text-sm leading-6 text-stone-600">
								{item.description}
							</p>
							<span className="mt-5 inline-flex h-11 items-center rounded-full border border-stone-300 bg-white px-4 text-sm font-semibold text-stone-950 transition-colors duration-200 group-hover:border-stone-500">
								Open the form &rarr;
							</span>
						</Link>
					</MotionReveal>
				))}
			</div>
			{!expanded && rest.length > 0 ? (
				<div className="mt-8 flex justify-center">
					<Button
						type="button"
						variant="outline"
						size="lg"
						onClick={() => setExpanded(true)}
						aria-expanded={expanded}
						className="h-14 rounded-full border-stone-300 bg-white/70 px-7 text-base font-semibold text-stone-950 hover:border-stone-500 hover:bg-white"
					>
						See all occasions ({rest.length} more)
					</Button>
				</div>
			) : null}
		</div>
	);
}
