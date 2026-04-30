"use client";

import type { DemoScenario } from "@/app/data/landingPageData";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import Link from "next/link";
import { useSearchParams } from "next/navigation";
import { startTransition, useEffect, useRef, useState } from "react";

type DemoTabsProps = {
	scenarios: DemoScenario[];
};

export default function DemoTabs({ scenarios }: DemoTabsProps) {
	const searchParams = useSearchParams();
	const fallbackId = scenarios[0]?.id ?? "";
	const initialId = searchParams.get("example") ?? fallbackId;
	const [activeId, setActiveId] = useState(initialId);
	const tabRefs = useRef<Array<HTMLButtonElement | null>>([]);

	useEffect(() => {
		const example = searchParams.get("example");
		setActiveId(example ?? fallbackId);
	}, [fallbackId, searchParams]);

	const activeScenario =
		scenarios.find((scenario) => scenario.id === activeId) ?? scenarios[0];

	function handleSelect(id: string) {
		setActiveId(id);
		startTransition(() => {
			const params = new URLSearchParams(Array.from(searchParams.entries()));
			params.set("example", id);
			window.history.replaceState(null, "", `?${params.toString()}`);
		});
	}

	function focusTab(index: number) {
		tabRefs.current[index]?.focus();
	}

	function handleKeyDown(
		event: React.KeyboardEvent<HTMLButtonElement>,
		index: number,
		id: string,
	) {
		if (event.key === "ArrowRight" || event.key === "ArrowDown") {
			event.preventDefault();
			const nextIndex = (index + 1) % scenarios.length;
			handleSelect(scenarios[nextIndex]?.id ?? id);
			focusTab(nextIndex);
			return;
		}

		if (event.key === "ArrowLeft" || event.key === "ArrowUp") {
			event.preventDefault();
			const previousIndex = (index - 1 + scenarios.length) % scenarios.length;
			handleSelect(scenarios[previousIndex]?.id ?? id);
			focusTab(previousIndex);
			return;
		}

		if (event.key === "Home") {
			event.preventDefault();
			handleSelect(scenarios[0]?.id ?? id);
			focusTab(0);
			return;
		}

		if (event.key === "End") {
			event.preventDefault();
			const lastIndex = scenarios.length - 1;
			handleSelect(scenarios[lastIndex]?.id ?? id);
			focusTab(lastIndex);
		}
	}

	if (!activeScenario) {
		return null;
	}

	return (
		<div className="space-y-6">
			<div
				className="flex flex-wrap gap-3"
				role="tablist"
				aria-label="Gift recommendation examples"
			>
				{scenarios.map((scenario, index) => {
					const isActive = scenario.id === activeScenario.id;

					return (
						<button
							key={scenario.id}
							ref={(element) => {
								tabRefs.current[index] = element;
							}}
							type="button"
							role="tab"
							aria-selected={isActive}
							aria-controls={`panel-${scenario.id}`}
							id={`tab-${scenario.id}`}
							onClick={() => handleSelect(scenario.id)}
							onKeyDown={(event) => handleKeyDown(event, index, scenario.id)}
							tabIndex={isActive ? 0 : -1}
							className={cn(
								"touch-manipulation rounded-full border px-4 py-2 text-sm font-medium transition-[background-color,border-color,color,box-shadow] duration-200 focus-visible:ring-2 focus-visible:ring-amber-500/60 focus-visible:ring-offset-2",
								isActive
									? "border-stone-950 bg-stone-950 text-stone-50 shadow-sm"
									: "border-stone-300 bg-white/80 text-stone-700 hover:border-stone-500 hover:bg-white",
							)}
						>
							{scenario.label}
						</button>
					);
				})}
			</div>

			<div
				id={`panel-${activeScenario.id}`}
				role="tabpanel"
				aria-labelledby={`tab-${activeScenario.id}`}
				className="grid gap-6 lg:grid-cols-[0.92fr_1.08fr]"
			>
				<div className="rounded-[2rem] border border-stone-200 bg-stone-950 p-6 text-stone-50 shadow-[0_24px_60px_rgba(28,25,23,0.12)]">
					<p className="text-xs font-semibold uppercase tracking-[0.24em] text-amber-300">
						Input Summary
					</p>
					<p className="mt-4 text-pretty text-lg leading-8 text-stone-100">
						&ldquo;{activeScenario.input}&rdquo;
					</p>
					<div className="mt-8 flex flex-wrap gap-3 text-sm text-stone-300">
						<span className="rounded-full border border-white/12 px-3 py-1">
							{activeScenario.occasion}
						</span>
						<span className="rounded-full border border-white/12 px-3 py-1">
							{activeScenario.relationship}
						</span>
						<span className="rounded-full border border-white/12 px-3 py-1">
							{activeScenario.budget}
						</span>
					</div>
				</div>

				<div className="rounded-[2rem] border border-stone-200 bg-white/92 p-4 shadow-[0_24px_60px_rgba(28,25,23,0.08)] sm:p-6">
					<div className="space-y-4">
						{activeScenario.results.map((result) => (
							<article
								key={result.title}
								className="rounded-[1.5rem] border border-stone-200 bg-stone-50 p-5"
							>
								<p className="text-sm font-semibold uppercase tracking-[0.18em] text-amber-700">
									Thoughtful Match
								</p>
								<h3 className="mt-3 font-display text-[1.65rem] leading-tight text-stone-950">
									{result.title}
								</h3>
								<p className="mt-3 text-pretty leading-7 text-stone-700">
									{result.hook}
								</p>
								<div className="mt-4 flex items-center justify-between gap-4">
									<p className="font-semibold text-stone-950">{result.price}</p>
									<Button
										asChild
										variant="ghost"
										className="h-auto rounded-full px-0 text-sm font-semibold text-stone-950 hover:bg-transparent hover:text-amber-700"
									>
										<Link href={result.href}>Try this scenario</Link>
									</Button>
								</div>
							</article>
						))}
					</div>

					<p className="mt-5 text-sm font-medium text-stone-600">
						Plus 3 more ideas when you run it for your person.
					</p>
				</div>
			</div>
		</div>
	);
}
