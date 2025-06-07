const FeaturesSection = () => {
	return (
		<div className="grid md:grid-cols-3 gap-4 md:gap-8 max-w-5xl mx-auto">
			<div className="bg-white/90 p-6 rounded-xl backdrop-blur-sm shadow-xl">
				<h3 className="text-black mb-4 text-lg md:text-xl font-bold">
					Personalized
				</h3>
				<p className="text-black text-base font-medium">
					Tailored gift recommendations based on occasion, budget and recipient
					preferences
				</p>
			</div>

			<div className="bg-white/90 p-6 rounded-xl backdrop-blur-sm shadow-xl">
				<h3 className="text-black mb-4 text-lg md:text-xl font-bold">Simple</h3>
				<p className="text-black text-base font-medium">
					Easy-to-use interface that makes finding the perfect gift effortless
				</p>
			</div>

			<div className="bg-white/90 p-6 rounded-xl backdrop-blur-sm shadow-xl">
				<h3 className="text-black mb-4 text-lg md:text-xl font-bold">
					Thoughtful
				</h3>
				<p className="text-black text-sm md:text-base font-medium">
					Curated selection of meaningful gifts for every relationship and
					milestone for only <span className="font-extrabold">$0.99</span>
				</p>
			</div>
		</div>
	);
};

export default FeaturesSection;
