import FAQSection from "../components/FAQSection";
import FeaturesSection from "../components/FeaturesSection";
import Footer from "../components/Footer";
import HeroSection from "../components/HeroSection";

export default function Home() {
	return (
		<div className="min-h-screen bg-gift-gradient text-white">
			<div className="container mx-auto px-4 py-16 flex flex-col items-center justify-center min-h-screen">
				<main>
					{/* Hero Section */}
					<section
						aria-labelledby="hero-heading"
						className="mb-20 transition-all duration-700 ease-in-out transform translate-y-0"
					>
						<HeroSection />
					</section>

					{/* Features Section */}
					<section
						id="features"
						aria-labelledby="features-heading"
						className="mb-20 transition-all duration-700 ease-in-out transform translate-y-0"
					>
						<h2 id="features-heading" className="sr-only">
							Our Features
						</h2>
						<FeaturesSection />
					</section>

					{/* FAQ Section */}
					<section
						id="faq"
						aria-labelledby="faq-heading"
						className="mb-20 transition-all duration-700 ease-in-out transform translate-y-0"
					>
						<FAQSection />
					</section>
				</main>

				{/* Footer */}
				<div className="transition-all duration-700 ease-in-out transform translate-y-0">
					<Footer />
				</div>
			</div>
		</div>
	);
}
