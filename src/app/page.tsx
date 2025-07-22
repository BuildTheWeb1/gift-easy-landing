import EnhancedScrollAnimation from "@/components/EnhancedScrollAnimation";
import HeroSection from "@/components/Hero/HeroSection";
import SocialProofSection from "@/components/SocialProofSection";
import FAQSection from "../components/FAQSection";
import Footer from "../components/Footer";
import HowItWorks from "../components/HowItWorks";
import WhyChoose from "../components/WhyChoose";

export default function Home() {
	return (
		<div className="bg-teal-gradient text-zinc-800">
			<div className="container mx-auto px-4">
				<main>
					{/* Hero Section */}
					<section
						aria-labelledby="hero-heading"
						className="md:h-screen flex items-center justify-center"
					>
						<EnhancedScrollAnimation
							animation="fade-up"
							duration={800}
							once={false}
						>
							<HeroSection />
						</EnhancedScrollAnimation>
					</section>

					{/* How It Works Section */}
					<section
						id="how-it-works"
						aria-labelledby="how-it-works-heading"
						className="md:h-screen flex items-center justify-center"
					>
						<h2 id="how-it-works-heading" className="sr-only">
							How It Works
						</h2>
						<EnhancedScrollAnimation
							animation="fade-left"
							duration={800}
							threshold={0.2}
							once={false}
						>
							<HowItWorks />
						</EnhancedScrollAnimation>
					</section>

					{/* Why Choose Section */}
					<section
						id="why-choose"
						aria-labelledby="why-choose-heading"
						className="md:h-screen flex items-center justify-center"
					>
						<h2 id="why-choose-heading" className="sr-only">
							Why Choose GiftEasy
						</h2>
						<EnhancedScrollAnimation
							animation="fade-right"
							duration={800}
							threshold={0.2}
							once={false}
						>
							<WhyChoose />
						</EnhancedScrollAnimation>
					</section>

					{/* FAQ Section */}
					<section
						id="faq"
						aria-labelledby="faq-heading"
						className="md:h-screen flex items-center justify-center"
					>
						<EnhancedScrollAnimation
							animation="zoom-in"
							duration={800}
							threshold={0.2}
							once={false}
						>
							<FAQSection />
						</EnhancedScrollAnimation>
					</section>

					{/* Social Proof Section */}
				</main>

				{/* Footer */}
				<div className="py-8 transition-all duration-700 ease-in-out transform translate-y-0">
					<section
						id="social-proof"
						aria-labelledby="social-proof-heading"
						className="flex items-center justify-center"
					>
						<h2 id="social-proof-heading" className="sr-only">
							Social Proof
						</h2>
						<EnhancedScrollAnimation
							animation="zoom-out"
							duration={800}
							threshold={0.2}
							once={false}
						>
							<SocialProofSection />
						</EnhancedScrollAnimation>
					</section>
					<Footer />
				</div>
			</div>
		</div>
	);
}
