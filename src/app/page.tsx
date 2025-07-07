import HeroSection from "@/components/Hero/HeroSection";
import ScrollAnimation from "@/components/ScrollAnimation";
import SocialProofSection from "@/components/SocialProofSection";
import FAQSection from "../components/FAQSection";
import Footer from "../components/Footer";
import HowItWorks from "../components/HowItWorks";
import WhyChoose from "../components/WhyChoose";

export default function Home() {
	return (
		<div className="bg-teal-gradient text-white">
			<div className="container mx-auto px-4">
				<main>
					{/* Hero Section */}
					<section
						aria-labelledby="hero-heading"
						className="h-screen flex items-center justify-center"
					>
						<ScrollAnimation>
							<HeroSection />
						</ScrollAnimation>
					</section>

					{/* How It Works Section */}
					<section
						id="how-it-works"
						aria-labelledby="how-it-works-heading"
						className="h-screen flex items-center justify-center"
					>
						<h2 id="how-it-works-heading" className="sr-only">
							How It Works
						</h2>
						<ScrollAnimation>
							<HowItWorks />
						</ScrollAnimation>
					</section>

					{/* Why Choose Section */}
					<section
						id="why-choose"
						aria-labelledby="why-choose-heading"
						className="h-screen flex items-center justify-center"
					>
						<h2 id="why-choose-heading" className="sr-only">
							Why Choose GiftEasy
						</h2>
						<ScrollAnimation>
							<WhyChoose />
						</ScrollAnimation>
					</section>

					{/* FAQ Section */}
					<section
						id="faq"
						aria-labelledby="faq-heading"
						className="h-screen flex items-center justify-center"
					>
						<ScrollAnimation>
							<FAQSection />
						</ScrollAnimation>
					</section>

					{/* Social Proof Section */}
					<section
						id="social-proof"
						aria-labelledby="social-proof-heading"
						className="h-screen flex items-center justify-center"
					>
						<h2 id="social-proof-heading" className="sr-only">
							Social Proof
						</h2>
						<ScrollAnimation>
							<SocialProofSection />
						</ScrollAnimation>
					</section>
				</main>

				{/* Footer */}
				<div className="py-8 transition-all duration-700 ease-in-out transform translate-y-0">
					<Footer />
				</div>
			</div>
		</div>
	);
}
