import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";

const HeroSection = () => {
	return (
		<div className="max-w-6xl mx-auto text-center py-16 px-4">
			<div className="flex justify-center items-center mb-4">
				<Image
					src="/GiftEasy-logo.svg"
					alt="Gift Easy logo"
					width={100}
					height={100}
					className="mr-2"
					priority
				/>
			</div>

			<div className="mt-16 mb-8">
				<h1 className="text-5xl md:text-6xl font-bold mb-4">
					Perfect Gifts Made
					<br />
					<span className="text-pink-500">Simple</span>
				</h1>
				<p className="text-lg md:text-xl max-w-2xl mx-auto mb-8">
					Let our AI find the perfect gift for any occasion. Just tell us about
					the person and the event - we'll handle the rest.
				</p>

				<div className="flex flex-wrap justify-center gap-4 mb-8">
					<div className="flex items-center bg-zinc-100 backdrop-blur-sm px-4 py-2 rounded-full">
						<div className="w-6 h-6 mr-2 flex items-center justify-center rounded-full bg-white bg-opacity-30">
							<svg
								xmlns="http://www.w3.org/2000/svg"
								className="h-4 w-4"
								viewBox="0 0 20 20"
								fill="currentColor"
								aria-hidden="true"
							>
								<path
									fillRule="evenodd"
									d="M11.3 1.046A1 1 0 0112 2v5h4a1 1 0 01.82 1.573l-7 10A1 1 0 018 18v-5H4a1 1 0 01-.82-1.573l7-10a1 1 0 011.12-.38z"
									clipRule="evenodd"
								/>
							</svg>
						</div>
						AI-Powered
					</div>
					<div className="flex items-center bg-zinc-100 backdrop-blur-sm px-4 py-2 rounded-full">
						<div className="w-6 h-6 mr-2 flex items-center justify-center rounded-full bg-white bg-opacity-30">
							<svg
								xmlns="http://www.w3.org/2000/svg"
								className="h-4 w-4"
								viewBox="0 0 20 20"
								fill="currentColor"
								aria-hidden="true"
							>
								<path d="M13 6a3 3 0 11-6 0 3 3 0 016 0zM18 8a2 2 0 11-4 0 2 2 0 014 0zM14 15a4 4 0 00-8 0v3h8v-3zM6 8a2 2 0 11-4 0 2 2 0 014 0zM16 18v-3a5.972 5.972 0 00-.75-2.906A3.005 3.005 0 0119 15v3h-3zM4.75 12.094A5.973 5.973 0 004 15v3H1v-3a3 3 0 013.75-2.906z" />
							</svg>
						</div>
						Personalized
					</div>
					<div className="flex items-center bg-zinc-100 backdrop-blur-sm px-4 py-2 rounded-full">
						<div className="w-6 h-6 mr-2 flex items-center justify-center rounded-full bg-white bg-opacity-30">
							<svg
								xmlns="http://www.w3.org/2000/svg"
								className="h-4 w-4"
								viewBox="0 0 20 20"
								fill="currentColor"
								aria-hidden="true"
							>
								<path
									fillRule="evenodd"
									d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-11a1 1 0 10-2 0v2H7a1 1 0 100 2h2v2a1 1 0 102 0v-2h2a1 1 0 100-2h-2V7z"
									clipRule="evenodd"
								/>
							</svg>
						</div>
						For Everyone
					</div>
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

			<p className="text-sm text-white text-opacity-70 mt-4">
				Easy to use • No signup required • Instant results
			</p>
		</div>
	);
};

export default HeroSection;
