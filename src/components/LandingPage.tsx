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
import DemoTabs from "@/components/DemoTabs";
import {
	Accordion,
	AccordionContent,
	AccordionItem,
	AccordionTrigger,
} from "@/components/ui/accordion";
import { Button } from "@/components/ui/button";
import Image from "next/image";
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
				<div className="rounded-[2rem] border border-stone-200 bg-stone-950 p-6 text-stone-50 shadow-[0_24px_60px_rgba(28,25,23,0.12)]">
					<p className="text-xs font-semibold uppercase tracking-[0.24em] text-amber-300">
						Input Summary
					</p>
					<p className="mt-4 text-pretty text-lg leading-8 text-stone-100">
						&ldquo;{fallbackScenario.input}&rdquo;
					</p>
				</div>
				<div className="min-w-0 overflow-hidden rounded-[2rem] border border-stone-200 bg-white/92 p-4 shadow-[0_24px_60px_rgba(28,25,23,0.08)] sm:p-6">
					<div className="space-y-4">
						{fallbackScenario.results.map((result) => (
							<article
								key={result.title}
								className="w-full min-w-0 rounded-[1.5rem] border border-stone-200 bg-stone-50 p-5"
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
									<p className="mt-4 text-sm font-semibold text-amber-700">
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
			<header className="sticky top-0 z-40 border-b border-white/55 bg-[#faf6ef]/80 backdrop-blur-xl">
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
			<main id="main-content">
				<section className="px-4 pb-14 pt-10 sm:px-6 lg:px-8 lg:pb-24 lg:pt-16">
					<div className="mx-auto grid max-w-6xl gap-12 lg:grid-cols-[1.05fr_0.95fr] lg:items-center">
						<div>
							<p className="text-sm font-semibold uppercase tracking-[0.24em] text-amber-700">
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
							<ul className="mt-8 flex flex-wrap gap-3 text-sm text-stone-700">
								{trustBarItems.map((item) => (
									<li
										key={item}
										className="rounded-full border border-stone-200 bg-white/75 px-4 py-2 shadow-sm"
									>
										<span className="font-semibold text-amber-700">+</span> {item}
									</li>
								))}
							</ul>
						</div>
						<div className="relative">
							<div className="absolute inset-x-8 top-8 -z-10 h-48 rounded-full bg-amber-200/45 blur-3xl" />
							<div className="rounded-[2.3rem] border border-white/65 bg-white/84 p-4 shadow-[0_30px_80px_rgba(28,25,23,0.13)] sm:p-6">
								<div className="rounded-[1.9rem] border border-stone-200 bg-stone-950 p-5 text-stone-50 sm:p-6">
									<div className="flex items-center justify-between gap-3">
										<p className="whitespace-nowrap text-[10px] font-semibold uppercase tracking-[0.18em] text-amber-300 sm:text-xs sm:tracking-[0.22em]">
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
									<h3 className="text-xs font-semibold uppercase tracking-[0.24em] text-amber-700">
										What you get
									</h3>
								</div>
								<div className="mt-3 grid gap-3 sm:grid-cols-2">
									{heroStats.map((item, index) => (
										<div
											key={item}
											className={index === 0 ? "sm:col-span-2" : undefined}
										>
											<div className="rounded-[1.7rem] border border-stone-200 bg-stone-50 p-4 sm:p-5">
												<p className="flex items-center gap-3 font-display text-lg leading-tight sm:text-[1.35rem]">
													<span className="inline-block size-2 rounded-full bg-amber-500" />
													{item}
												</p>
											</div>
										</div>
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
							<p className="text-sm font-semibold uppercase tracking-[0.24em] text-amber-700">
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
						<div className="max-w-2xl">
							<p className="text-sm font-semibold uppercase tracking-[0.24em] text-amber-700">
								How It Works
							</p>
							<h2 className="mt-4 text-balance font-display text-[clamp(2.15rem,3.8vw,3.25rem)] leading-[1.02] tracking-[-0.03em]">
								Short form in. Strong gift ideas out.
							</h2>
						</div>
						<div className="mt-10 grid gap-5 lg:grid-cols-3">
							{howItWorksSteps.map((step) => (
								<article
									key={step.id}
									className="rounded-[1.8rem] border border-stone-200 bg-stone-50 p-6"
								>
									<p className="text-sm font-semibold uppercase tracking-[0.24em] text-amber-700">
										{step.id}
									</p>
									<h3 className="mt-4 font-display text-3xl leading-tight text-stone-950">
										{step.title}
									</h3>
									<p className="mt-3 text-pretty leading-7 text-stone-700">
										{step.description}
									</p>
									<p className="mt-5 text-sm font-semibold text-stone-500">{step.meta}</p>
								</article>
							))}
						</div>
					</div>
				</section>
				<section className="px-4 py-14 sm:px-6 lg:px-8 lg:py-24">
					<div className="mx-auto max-w-6xl">
						<div className="max-w-3xl">
							<p className="text-sm font-semibold uppercase tracking-[0.24em] text-amber-700">
								We&rsquo;ve All Been There
							</p>
							<h2 className="mt-4 text-balance font-display text-[clamp(2.2rem,3.9vw,3.35rem)] leading-[1.02] tracking-[-0.03em]">
								GiftEasy was built for the awkward, last-minute, impossible cases.
							</h2>
						</div>
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
						<p className="mt-8 max-w-3xl text-pretty text-lg leading-8 text-stone-700">
							These are the exact moments the app is designed for. You bring the
							personality and context. GiftEasy turns that into ideas that make them ask
							how you knew.
						</p>
						<div className="mt-8">
							<Button
								asChild
								size="lg"
								className="h-14 rounded-full bg-stone-950 px-7 text-base font-semibold text-stone-50 hover:bg-stone-800"
							>
								<Link href={primaryCtaHref}>Try It Free</Link>
							</Button>
						</div>
					</div>
				</section>
				<section className="px-4 py-14 sm:px-6 lg:px-8 lg:py-24">
					<div className="mx-auto max-w-6xl rounded-[2.5rem] border border-stone-200 bg-stone-950 px-6 py-10 text-stone-50 shadow-[0_30px_80px_rgba(28,25,23,0.16)] sm:px-8 lg:px-12">
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
										<div
											key={stat.label}
											className="rounded-[1.6rem] border border-white/12 bg-white/6 p-5"
										>
											<p className="font-display text-4xl leading-none text-amber-300">
												{stat.value}
											</p>
											<p className="mt-3 text-sm leading-6 text-stone-300">{stat.label}</p>
										</div>
									))}
								</div>
							</div>
							<div className="grid gap-4 lg:grid-cols-3">
								{testimonials.map((testimonial) => (
									<article
										key={testimonial.name}
										className="flex h-full flex-col rounded-[1.8rem] border border-white/12 bg-white/6 p-6"
									>
										<p aria-hidden="true" className="text-sm tracking-[0.2em] text-amber-300">
											★★★★★
										</p>
										<p className="sr-only">Five-star feedback</p>
										<p className="flex-1 text-pretty leading-7 text-stone-100">
											&ldquo;{testimonial.quote}&rdquo;
										</p>
										<p className="mt-6 text-sm font-semibold text-stone-50">
											{testimonial.name}
										</p>
										<p className="mt-1 text-sm text-stone-400">{testimonial.source}</p>
									</article>
								))}
							</div>
						</div>
					</div>
				</section>
				<section className="px-4 py-14 sm:px-6 lg:px-8 lg:py-24">
					<div className="mx-auto max-w-6xl">
						<div className="max-w-3xl">
							<p className="text-sm font-semibold uppercase tracking-[0.24em] text-amber-700">
								Occasions
							</p>
							<h2 className="mt-4 text-balance font-display text-[clamp(2.05rem,3.6vw,3rem)] leading-[1.03] tracking-[-0.03em]">
								Gift ideas for every moment that matters.
							</h2>
						</div>
						<div className="mt-10 grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
							{occasionLinks.map((item) => (
								<Link
									key={`${item.label}-${item.href}`}
									href={item.href}
									className="group rounded-[1.7rem] border border-stone-200 bg-white/82 p-5 transition-[transform,background-color,border-color,box-shadow] duration-200 hover:-translate-y-0.5 hover:border-stone-400 hover:bg-white hover:shadow-[0_16px_32px_rgba(28,25,23,0.08)] focus-visible:ring-2 focus-visible:ring-amber-500/60 focus-visible:ring-offset-2"
								>
									<p className="font-display text-2xl leading-tight text-stone-950">
										{item.label}
									</p>
									<p className="mt-3 text-sm leading-6 text-stone-600">
										{item.description}
									</p>
									<span className="mt-5 inline-flex h-11 items-center rounded-full border border-stone-300 bg-white px-4 text-sm font-semibold text-stone-950 transition-colors duration-200 group-hover:border-stone-500">
										Open the form &rarr;
									</span>
								</Link>
							))}
						</div>
					</div>
				</section>
				<section className="px-4 py-14 sm:px-6 lg:px-8 lg:py-24">
					<div className="mx-auto max-w-4xl">
						<div className="text-center">
							<p className="text-sm font-semibold uppercase tracking-[0.24em] text-amber-700">
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
									className="overflow-hidden rounded-[1.6rem] border border-stone-200 bg-white/84 px-2"
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
				<section className="px-4 pb-16 pt-14 sm:px-6 lg:px-8 lg:pb-24 lg:pt-24">
					<div className="mx-auto max-w-5xl rounded-[2.8rem] border border-amber-300/50 bg-[linear-gradient(135deg,rgba(251,191,36,0.26),rgba(255,255,255,0.92),rgba(245,158,11,0.18))] px-6 py-12 text-center shadow-[0_30px_80px_rgba(28,25,23,0.09)] sm:px-10">
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
							<Button
								asChild
								size="lg"
								className="h-14 rounded-full bg-stone-950 px-7 text-base font-semibold text-stone-50 hover:bg-stone-800"
							>
								<Link href={primaryCtaHref}>Find Gift Ideas</Link>
							</Button>
						</div>
						<p className="mt-4 text-sm text-stone-600">
							Free to try · No signup · Takes about 30 seconds
						</p>
					</div>
				</section>
			</main>
			<footer className="border-t border-stone-200/80 px-4 py-10 sm:px-6 lg:px-8">
				<div className="mx-auto flex max-w-6xl flex-col gap-6 sm:flex-row sm:items-end sm:justify-between">
					<div>
						<p className="font-display text-2xl">GiftEasy</p>
						<p className="mt-2 text-sm text-stone-600">
							Made for better gift-giving, not more guesswork.
						</p>
						<div className="mt-4 flex flex-wrap gap-3 text-sm text-stone-600">
							<Link
								href="https://www.producthunt.com/products/gift-easy"
								className="rounded-full border border-stone-200 bg-white/70 px-4 py-2 transition-colors duration-200 hover:text-stone-950 focus-visible:ring-2 focus-visible:ring-amber-500/60 focus-visible:ring-offset-2"
							>
								Product Hunt
							</Link>
							<Link
								href="https://trustmrr.com/startup/gifteasy"
								className="rounded-full border border-stone-200 bg-white/70 px-4 py-2 transition-colors duration-200 hover:text-stone-950 focus-visible:ring-2 focus-visible:ring-amber-500/60 focus-visible:ring-offset-2"
							>
								TrustMRR
							</Link>
							<Link
								href="https://x.com/buildtheweb1"
								className="rounded-full border border-stone-200 bg-white/70 px-4 py-2 transition-colors duration-200 hover:text-stone-950 focus-visible:ring-2 focus-visible:ring-amber-500/60 focus-visible:ring-offset-2"
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
								className="transition-colors duration-200 hover:text-stone-950 focus-visible:ring-2 focus-visible:ring-amber-500/60 focus-visible:ring-offset-2"
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
