import {
	demoScenarios,
	footerLinks,
	heroStats,
	howItWorksSteps,
	occasionLinks,
	painPoints,
	primaryCtaHref,
	proofStats,
	testimonials,
	trustBarItems,
} from "@/app/data/landingPageData";
import { faqItems } from "@/app/data/faqData";
import AnimatedClosingCta from "@/components/AnimatedClosingCta";
import LandingHeader from "@/components/LandingHeader";
import MotionReveal from "@/components/MotionReveal";
import AnimatedSocialProof from "@/components/AnimatedSocialProof";
import PainPointsResolve from "@/components/PainPointsResolve";
import DemoTabs from "@/components/DemoTabs";
import OccasionsGrid from "@/components/OccasionsGrid";
import {
	Accordion,
	AccordionContent,
	AccordionItem,
	AccordionTrigger,
} from "@/components/ui/accordion";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { Suspense } from "react";

function DemoTabsFallback() {
	const fallbackScenario = demoScenarios[0];

	if (!fallbackScenario) {
		return null;
	}

	return (
		<div className="space-y-6">
			<div className="relative">
				<div className="flex snap-x gap-3 overflow-x-auto pb-2 pr-8 [-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
					{demoScenarios.map((scenario, index) => (
						<span
							key={scenario.id}
							className={`shrink-0 snap-start rounded-full border px-4 py-2 text-sm font-medium ${
								index === 0
									? "border-stone-950 bg-stone-950 text-stone-50"
									: "border-stone-300 bg-white/80 text-stone-700"
							}`}
						>
							{scenario.label}
						</span>
					))}
				</div>
				<div className="pointer-events-none absolute inset-y-0 right-0 w-10 bg-gradient-to-l from-[#f4efe6] via-[#f4efe6]/88 to-transparent" />
			</div>
			<div className="grid gap-6 lg:grid-cols-[0.92fr_1.08fr]">
				<div className="flex h-full flex-col justify-between rounded-[2rem] border border-stone-200 bg-stone-950 p-6 text-stone-50 shadow-[0_24px_60px_rgba(28,25,23,0.12)]">
					<div>
						<p className="text-xs font-semibold uppercase tracking-[0.24em] text-amber-300">
							Input Summary
						</p>
						<p className="mt-4 text-pretty text-lg leading-8 text-stone-100">
							&ldquo;{fallbackScenario.input}&rdquo;
						</p>
					</div>
					<div className="mt-8 flex flex-wrap gap-3 text-sm text-stone-300">
						<span className="rounded-full border border-white/12 px-3 py-1">
							{fallbackScenario.occasion}
						</span>
						<span className="rounded-full border border-white/12 px-3 py-1">
							{fallbackScenario.relationship}
						</span>
						<span className="rounded-full border border-white/12 px-3 py-1">
							{fallbackScenario.budget}
						</span>
					</div>
				</div>
				<div className="min-w-0 overflow-hidden rounded-[2rem] border border-stone-200 bg-white/92 p-4 shadow-[0_24px_60px_rgba(28,25,23,0.08)] sm:p-6">
					<div className="divide-y divide-stone-200">
						{fallbackScenario.results.map((result) => (
							<article key={result.title} className="w-full min-w-0 py-5 first:pt-0 last:pb-0">
								<p className="text-sm font-semibold uppercase tracking-[0.18em] text-amber-800">
									Thoughtful Match
								</p>
								<h3 className="mt-3 font-display text-3xl leading-tight text-stone-950">
									{result.title}
								</h3>
								<p className="mt-3 text-pretty leading-7 text-stone-700">
									{result.hook}
								</p>
								<p className="mt-4 text-sm font-semibold text-amber-800">
									Use this scenario in the app
								</p>
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

export default function LandingPage() {
	return (
		<div className="min-h-screen overflow-x-hidden bg-[radial-gradient(circle_at_top,rgba(245,158,11,0.17),transparent_28%),linear-gradient(180deg,#faf6ef_0%,#f4efe6_45%,#ede6da_100%)] text-stone-950">
			<a
				href="#main-content"
				className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-50 focus:rounded-full focus:bg-stone-950 focus:px-4 focus:py-2 focus:text-stone-50"
			>
				Skip to content
			</a>
			<LandingHeader primaryCtaHref={primaryCtaHref} />
			<main id="main-content">
				<section className="px-4 pb-14 pt-10 sm:px-6 lg:px-8 lg:pb-24 lg:pt-16">
					<div className="mx-auto grid max-w-6xl gap-12 lg:grid-cols-[1.05fr_0.95fr] lg:items-center">
						<div>
							<p className="text-sm font-semibold uppercase tracking-[0.24em] text-amber-800">
								Stop guessing. Start gifting.
							</p>
							<h1 className="mt-5 max-w-[12ch] text-balance font-display text-[clamp(2rem,7vw,6.1rem)] leading-[1.05] tracking-[-0.04em]">
								The gift they&rsquo;ll actually love, found in under 30 seconds.
							</h1>
							<p className="mt-6 max-w-2xl text-pretty text-lg leading-8 text-stone-700">
								Tell us who they are and GiftEasy returns 5 thoughtful gift ideas with
								prices, context, and where to buy them.
							</p>
							<div className="mt-8 flex flex-col gap-4 sm:flex-row">
								<Button
									asChild
									size="lg"
									className="h-14 rounded-full bg-stone-950 px-7 text-base font-semibold text-stone-50 shadow-[0_24px_40px_rgba(28,25,23,0.18)] hover:bg-stone-800"
								>
									<Link href={primaryCtaHref}>Find Gift Ideas</Link>
								</Button>
								<Button
									asChild
									size="lg"
									variant="outline"
									className="h-14 rounded-full border-stone-300 bg-white/70 px-7 text-base font-semibold text-stone-950 hover:border-stone-500 hover:bg-white"
								>
									<Link href="#live-demo">See an Example</Link>
								</Button>
							</div>
							<ul className="mt-8 flex flex-wrap gap-3 text-sm font-medium text-stone-800">
								{trustBarItems.map((item) => (
									<li
										key={item}
										className="rounded-full border border-amber-200/80 bg-amber-50/70 px-4 py-2 shadow-sm"
									>
										<span className="font-semibold text-amber-800">+</span> {item}
									</li>
								))}
							</ul>
						</div>
						<div className="relative">
							<div className="absolute inset-x-8 top-8 -z-10 h-48 rounded-full bg-amber-200/45 blur-3xl" />
							<div className="rounded-[2.3rem] border border-white/65 bg-white/84 p-4 shadow-[0_30px_80px_rgba(28,25,23,0.13)] sm:p-6">
								<div className="rounded-[1.9rem] border border-stone-200 bg-stone-950 p-5 text-stone-50 sm:p-6">
									<div className="flex items-center justify-between gap-3">
										<p className="whitespace-nowrap text-xs font-semibold uppercase tracking-[0.18em] text-amber-300 sm:tracking-[0.22em]">
											Product Preview
										</p>
										<span className="rounded-full border border-white/10 px-3 py-1 text-xs text-stone-300">
											5 ideas ready
										</span>
									</div>
									<h2 className="mt-4 font-display text-[2rem] leading-tight">
										Thoughtful results without the panic-scroll.
									</h2>
									<p className="mt-3 max-w-lg text-pretty leading-7 text-stone-300">
										Preview the same warm, reasoned recommendation style the app uses
										after the form is complete.
									</p>
								</div>
								<div className="mt-4">
									<h3 className="text-xs font-semibold uppercase tracking-[0.24em] text-amber-800">
										What you get
									</h3>
								</div>
								<div className="mt-3 divide-y divide-stone-200 border-t border-stone-200">
									{heroStats.map((item) => (
										<p
											key={item}
											className="flex items-center gap-3 py-4 font-display text-lg leading-tight text-stone-900 sm:text-xl"
										>
											<span className="inline-block size-2 shrink-0 rounded-full bg-amber-500" />
											{item}
										</p>
									))}
								</div>
							</div>
						</div>
					</div>
				</section>
				<section
					id="live-demo"
					className="scroll-mt-28 px-4 py-14 sm:px-6 lg:px-8 lg:py-24"
				>
					<div className="mx-auto max-w-6xl">
						<div className="max-w-3xl">
							<p className="text-sm font-semibold uppercase tracking-[0.24em] text-amber-800">
								Live Demo
							</p>
							<h2 className="mt-4 text-balance font-display text-[clamp(2.25rem,4.8vw,3.7rem)] leading-[1] tracking-[-0.03em]">
								Here&rsquo;s what GiftEasy actually finds.
							</h2>
							<p className="mt-4 text-pretty text-lg leading-8 text-stone-700">
								Real examples build trust faster than generic claims. Start with one of
								these scenarios, then run your own.
							</p>
						</div>
						<div className="mt-10">
							<Suspense fallback={<DemoTabsFallback />}>
								<DemoTabs scenarios={demoScenarios} />
							</Suspense>
						</div>
						<div className="mt-8">
							<Button
								asChild
								size="lg"
								className="h-14 rounded-full bg-stone-950 px-7 text-base font-semibold text-stone-50 hover:bg-stone-800"
							>
								<Link href={primaryCtaHref}>Get Ideas Like These</Link>
							</Button>
						</div>
					</div>
				</section>
				<section className="px-4 py-14 sm:px-6 lg:px-8 lg:py-24">
					<div className="mx-auto max-w-6xl rounded-[2.5rem] border border-white/65 bg-white/72 p-8 shadow-[0_20px_70px_rgba(28,25,23,0.08)] sm:p-10 lg:p-14">
						<MotionReveal className="max-w-2xl">
							<p className="text-sm font-semibold uppercase tracking-[0.24em] text-amber-800">
								How It Works
							</p>
							<h2 className="mt-4 text-balance font-display text-[clamp(2.15rem,3.8vw,3.25rem)] leading-[1.02] tracking-[-0.03em]">
								Short form in. Strong gift ideas out.
							</h2>
						</MotionReveal>
						<div className="mt-10 grid gap-8 divide-y divide-stone-200 lg:grid-cols-3 lg:gap-6 lg:divide-x lg:divide-y-0">
							{howItWorksSteps.map((step, index) => (
								<MotionReveal key={step.id} delay={index * 0.08}>
									<article
										className={[
											index === 0 ? "pt-0 lg:pl-0" : "pt-8 lg:pl-6 lg:pt-0",
											index === howItWorksSteps.length - 1 ? "pb-0" : "pb-8 lg:pr-6",
										].join(" ")}
									>
										<p className="text-sm font-semibold uppercase tracking-[0.24em] text-amber-800">
											{step.id}
										</p>
										<h3 className="mt-4 font-display text-3xl leading-tight text-stone-950">
											{step.title}
										</h3>
										<p className="mt-3 text-pretty leading-7 text-stone-700">
											{step.description}
										</p>
										<p className="mt-5 text-sm font-semibold text-stone-600">
											{step.meta}
										</p>
									</article>
								</MotionReveal>
							))}
						</div>
					</div>
				</section>
				<section className="px-4 py-14 sm:px-6 lg:px-8 lg:py-24">
					<div className="mx-auto max-w-6xl">
						<MotionReveal className="max-w-3xl">
							<p className="text-sm font-semibold uppercase tracking-[0.24em] text-amber-800">
								We&rsquo;ve All Been There
							</p>
							<h2 className="mt-4 text-balance font-display text-[clamp(2.2rem,3.9vw,3.35rem)] leading-[1.02] tracking-[-0.03em]">
								GiftEasy was built for the awkward, last-minute, impossible cases.
							</h2>
						</MotionReveal>
						<PainPointsResolve
							painPoints={painPoints}
							trustBarItems={trustBarItems}
							ctaHref={primaryCtaHref}
							reassurance="These are the exact moments the app is designed for. You bring the personality and context. GiftEasy turns that into ideas that make them ask how you knew."
						/>
					</div>
				</section>
				<section className="px-4 py-14 sm:px-6 lg:px-8 lg:py-24">
					<div className="mx-auto max-w-6xl rounded-[2.5rem] border border-stone-200 bg-stone-950 px-6 py-10 text-stone-50 shadow-[0_30px_80px_rgba(28,25,23,0.16)] sm:px-8 lg:px-12">
						<AnimatedSocialProof
							proofStats={proofStats}
							testimonials={testimonials}
						/>
					</div>
				</section>
				<section className="px-4 pb-10 pt-14 sm:px-6 lg:px-8 lg:pb-14 lg:pt-24">
					<div className="mx-auto max-w-6xl">
						<MotionReveal className="max-w-3xl">
							<p className="text-sm font-semibold uppercase tracking-[0.24em] text-amber-800">
								Occasions
							</p>
							<h2 className="mt-4 text-balance font-display text-[clamp(2.05rem,3.6vw,3rem)] leading-[1.03] tracking-[-0.03em]">
								Gift ideas for every moment that matters.
							</h2>
							<p className="mt-4 max-w-xl text-pretty leading-7 text-stone-700">
								Start with the occasions people search for most, or see the full list.
							</p>
						</MotionReveal>
						<OccasionsGrid items={occasionLinks} />
					</div>
				</section>
				<section className="px-4 pb-14 pt-10 sm:px-6 lg:px-8 lg:pb-24 lg:pt-14">
					<div className="mx-auto max-w-4xl">
						<div className="text-center">
							<p className="text-sm font-semibold uppercase tracking-[0.24em] text-amber-800">
								FAQ
							</p>
							<h2 className="mt-4 text-balance font-display text-[clamp(2rem,3.5vw,2.9rem)] leading-[1.03] tracking-[-0.03em]">
								Questions? We&rsquo;ve got answers.
							</h2>
						</div>
						<Accordion
							type="single"
							collapsible
							className="mt-10 space-y-4"
							defaultValue={faqItems[0]?.id}
						>
							{faqItems.map((faq) => (
								<AccordionItem
									key={faq.id}
									value={faq.id}
									className="overflow-hidden rounded-[1.6rem] border border-stone-200 bg-white/84 px-2 py-1"
								>
									<AccordionTrigger className="px-4 py-5 text-left text-lg font-semibold text-stone-950 hover:no-underline sm:px-6">
										{faq.question}
									</AccordionTrigger>
									<AccordionContent className="px-4 pb-5 text-pretty leading-7 text-stone-700 sm:px-6">
										{faq.answer}
									</AccordionContent>
								</AccordionItem>
							))}
						</Accordion>
					</div>
				</section>
				<section className="px-4 pb-16 pt-8 sm:px-6 lg:px-8 lg:pb-24 lg:pt-12">
					<div className="mx-auto max-w-5xl">
						<AnimatedClosingCta href={primaryCtaHref} />
					</div>
				</section>
			</main>
			<footer className="border-t border-stone-200/80 px-4 py-10 sm:px-6 lg:px-8">
				<div className="mx-auto flex max-w-6xl flex-col gap-6 sm:flex-row sm:items-end sm:justify-between">
					<div>
						<p className="font-display text-2xl">GiftEasy</p>
						<p className="mt-2 text-sm text-stone-600">
							2025 - {new Date().getFullYear()} &copy; GiftEasy | Made for better gift-giving, not more guesswork.
						</p>
						<div className="mt-4 flex flex-wrap gap-3 text-sm text-stone-600">
							<Link
								target="_blank"
								rel="noopener noreferrer"
								href="https://www.producthunt.com/products/gift-easy"
								className="rounded-full border border-stone-200 bg-white/70 px-4 py-2 outline-none transition-colors duration-200 hover:text-stone-950 focus-visible:ring-2 focus-visible:ring-amber-500/60 focus-visible:ring-offset-2 focus-visible:[outline:2px_solid_#f59e0b] focus-visible:[outline-offset:2px]"
							>
								Product Hunt
							</Link>
							<Link
								target="_blank"
								rel="noopener noreferrer"
								href="https://trustmrr.com/startup/gifteasy"
								className="rounded-full border border-stone-200 bg-white/70 px-4 py-2 outline-none transition-colors duration-200 hover:text-stone-950 focus-visible:ring-2 focus-visible:ring-amber-500/60 focus-visible:ring-offset-2 focus-visible:[outline:2px_solid_#f59e0b] focus-visible:[outline-offset:2px]"
							>
								TrustMRR
							</Link>
							<Link
								target="_blank"
								rel="noopener noreferrer"
								href="https://x.com/buildtheweb1"
								className="rounded-full border border-stone-200 bg-white/70 px-4 py-2 outline-none transition-colors duration-200 hover:text-stone-950 focus-visible:ring-2 focus-visible:ring-amber-500/60 focus-visible:ring-offset-2 focus-visible:[outline:2px_solid_#f59e0b] focus-visible:[outline-offset:2px]"
							>
								X / Updates
							</Link>
						</div>
					</div>
					<div className="flex flex-wrap gap-4 text-sm text-stone-600">
						{footerLinks.map((item) => (
							<Link
								key={item.label}
								href={item.href}
								className="inline-block py-3 underline underline-offset-4 decoration-stone-300 outline-none transition-colors duration-200 hover:text-stone-950 hover:decoration-stone-500 focus-visible:ring-2 focus-visible:ring-amber-500/60 focus-visible:ring-offset-2 focus-visible:[outline:2px_solid_#f59e0b] focus-visible:[outline-offset:2px] sm:py-0"
							>
								{item.label}
							</Link>
						))}
					</div>
				</div>
			</footer>
		</div>
	);
}
