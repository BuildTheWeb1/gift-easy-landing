import Image from "next/image";
import Link from "next/link";

const HeroSection = () => {
	return (
		<div className="max-w-3xl mx-auto text-center mb-16">
			<div className="flex justify-center mb-2">
				<Image
					src="/GiftEasy-logo.svg"
					alt="Gift Easy logo"
					width={300}
					height={300}
					className="text-white w-[150px] sm:w-[250px] md:w-[300px]"
					priority
				/>
			</div>

			<h1 className="text-lg md:text-2xl mb-10 text-black">
				Find the perfect gift for any occasion with{" "}
				<span className="font-extrabold text-xl text-[#6a004d] md:text-3xl">
					AI
				</span>{" "}
				personalized recommendations
			</h1>

			<div className="flex justify-center w-full">
				<Link
					href="https://app.gift-easy.com/"
					className="group px-8 md:px-12 w-full sm:w-auto py-6 bg-gift-pink-gradient text-[#6a004d] text-lg md:text-xl font-bold rounded-xl hover:opacity-90 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1 flex items-center justify-center gap-2"
				>
					Find the Perfect Gift Now
					<svg
						xmlns="http://www.w3.org/2000/svg"
						className="h-6 w-6 transition-all duration-300 transform group-hover:translate-x-1"
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
		</div>
	);
};

export default HeroSection;
