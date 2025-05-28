import FeaturesSection from "../components/FeaturesSection";
import Footer from "../components/Footer";
import HeroSection from "../components/HeroSection";

export default function Home() {
	return (
		<div className="min-h-screen bg-gradient-to-b from-indigo-900 via-purple-900 to-indigo-800 text-white">
			<div className="container mx-auto px-4 py-16 flex flex-col items-center justify-center min-h-screen">
				<HeroSection />

				<FeaturesSection />

				<Footer />
			</div>
		</div>
	);
}
