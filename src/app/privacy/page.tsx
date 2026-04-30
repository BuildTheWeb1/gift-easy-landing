import type { Metadata } from "next";

export const metadata: Metadata = {
	title: "Privacy Policy | GiftEasy",
	description: "Privacy information for the GiftEasy landing page and app.",
};

export default function PrivacyPage() {
	return (
		<main className="min-h-screen bg-[linear-gradient(180deg,#faf6ef_0%,#f4efe6_100%)] px-4 py-16 text-stone-950 sm:px-6 lg:px-8">
			<div className="mx-auto max-w-3xl rounded-[2rem] border border-stone-200 bg-white/88 p-8 shadow-[0_20px_50px_rgba(28,25,23,0.08)] sm:p-10">
				<p className="text-sm font-semibold uppercase tracking-[0.24em] text-amber-700">
					Privacy Policy
				</p>
				<h1 className="mt-4 font-display text-5xl leading-none">GiftEasy Privacy</h1>
				<div className="mt-8 space-y-6 text-pretty leading-8 text-stone-700">
					<p>
						GiftEasy uses the information you provide about a recipient only to
						generate recommendations and improve the product experience. The
						landing page itself does not ask for sensitive account details before
						you enter the app.
					</p>
					<p>
						If you contact the team directly, that message may be retained for
						support, analytics, or product follow-up. Gift ideas and product links
						are generated from the context you share, so avoid including anything
						you would not want used for recommendation quality.
					</p>
					<p>
						Questions about privacy can be sent to{" "}
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
