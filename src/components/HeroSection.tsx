import Image from "next/image";
import Link from "next/link";

const HeroSection = () => {
	return (
		<div className="max-w-3xl mx-auto text-center mb-16">
			<div className="flex justify-center mb-6">
				<div className="bg-white/10 p-4 rounded-xl backdrop-blur-sm">
					<Image
						src="/gift-box.svg"
						alt="Gift Easy logo"
						width={64}
						height={64}
						className="text-white"
						priority
					/>
				</div>
			</div>

			<h1 className="text-5xl md:text-6xl font-bold mb-6">Gift Easy</h1>

			<p className="text-xl md:text-2xl mb-10 text-indigo-100">
				Find the perfect gift for any occasion with AI personalized
				recommendations
			</p>

			<Link
				href="https://app.gift-easy.com/"
				className="px-8 py-4 bg-indigo-500 text-white font-medium rounded-xl hover:bg-indigo-600 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1 inline-flex items-center gap-2"
			>
				Get Started
				<svg
					xmlns="http://www.w3.org/2000/svg"
					className="h-5 w-5"
					viewBox="0 0 20 20"
					fill="currentColor"
					aria-hidden="true"
				>
					<path
						fillRule="evenodd"
						d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z"
						clipRule="evenodd"
					/>
				</svg>
			</Link>
		</div>
	);
};

export default HeroSection;
