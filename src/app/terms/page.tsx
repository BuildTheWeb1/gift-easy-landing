import type { Metadata } from "next";

export const metadata: Metadata = {
	title: "Terms | GiftEasy",
	description: "Terms for using the GiftEasy landing page and gift recommendation app.",
};

export default function TermsPage() {
	return (
		<main className="min-h-screen bg-[linear-gradient(180deg,#faf6ef_0%,#f4efe6_100%)] px-4 py-16 text-stone-950 sm:px-6 lg:px-8">
			<div className="mx-auto max-w-3xl rounded-[2rem] border border-stone-200 bg-white/88 p-8 shadow-[0_20px_50px_rgba(28,25,23,0.08)] sm:p-10">
				<p className="text-sm font-semibold uppercase tracking-[0.24em] text-amber-700">
					Terms
				</p>
				<h1 className="mt-4 font-display text-5xl leading-none">GiftEasy Terms</h1>
				<div className="mt-8 space-y-6 text-pretty leading-8 text-stone-700">
					<p>
						GiftEasy is provided to help you discover gift ideas faster. The
						recommendations are informational and may include third-party products
						or retailers that are outside GiftEasy&apos;s control.
					</p>
					<p>
						You are responsible for reviewing any purchase details, pricing,
						availability, and seller terms before buying. GiftEasy may update the
						experience, recommendation logic, and pricing structure over time.
					</p>
					<p>
						If you need support or want to report an issue, contact{" "}
						<a
							href="mailto:hello@gift-easy.com"
							className="font-semibold text-stone-950 underline decoration-amber-400 underline-offset-4"
						>
							hello@gift-easy.com
						</a>
						.
					</p>
				</div>
			</div>
		</main>
	);
}
