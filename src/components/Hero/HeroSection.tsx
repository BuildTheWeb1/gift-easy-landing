import { heroPills } from "@/app/data/heroData";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";
import { HeroPills } from "./HeroPills";

const HeroSection = () => {
	return (
		<div className="max-w-6xl mx-auto text-center py-16 px-4">
			<div className="flex justify-center items-center mb-4">
				<Image
					src="/GiftEasy-logo.svg"
					alt="Gift Easy logo"
					width={120}
					height={120}
					className="mr-2"
					priority
				/>
			</div>

			<div className="mt-16 mb-8">
				<h1 className="text-5xl md:text-6xl text-shadow-xs font-bold mb-4">
					Perfect Gift Ideas
					<br />
					<span className="text-pink-500">Easy</span>
				</h1>
				<p className="text-lg md:text-xl text-shadow-xs max-w-2xl mx-auto mb-8">
					Let our AI find the perfect gift for any occasion. Just tell us about
					the person and the event - we'll handle the rest.
				</p>

				<div className="flex flex-wrap justify-center gap-4 mb-8">
					{heroPills.map((pill) => (
						<HeroPills key={pill.title} pill={pill} />
					))}
				</div>

				<div className="flex flex-wrap justify-center gap-4">
					<Button
						asChild
						className="bg-gradient-to-r from-pink-500 to-rose-500 text-white px-8 py-6 rounded-full text-lg font-medium hover:opacity-90 transition-all duration-300"
					>
						<Link href="https://app.gift-easy.com/">
							Get Gift Ideas Now
							<svg
								xmlns="http://www.w3.org/2000/svg"
								className="h-5 w-5 ml-2"
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
					</Button>
				</div>
			</div>

			<p className="text-sm text-white text-shadow-xs mt-4">
				Easy to use • No signup required • Instant results
			</p>
		</div>
	);
};

export default HeroSection;
