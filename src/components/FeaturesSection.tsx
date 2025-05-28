const FeaturesSection = () => {
	return (
		<div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
			<div className="bg-white/5 p-6 rounded-xl backdrop-blur-sm">
				<div className="text-indigo-300 mb-4 text-xl font-semibold">
					Personalized
				</div>
				<p>
					Tailored gift recommendations based on occasion, budget and recipient
					preferences
				</p>
			</div>

			<div className="bg-white/5 p-6 rounded-xl backdrop-blur-sm">
				<div className="text-indigo-300 mb-4 text-xl font-semibold">Simple</div>
				<p>
					Easy-to-use interface that makes finding the perfect gift effortless
				</p>
			</div>

			<div className="bg-white/5 p-6 rounded-xl backdrop-blur-sm">
				<div className="text-indigo-300 mb-4 text-xl font-semibold">
					Thoughtful
				</div>
				<p>
					Curated selection of meaningful gifts for every relationship and
					milestone for only $0.99
				</p>
			</div>
		</div>
	);
};

export default FeaturesSection;
