import { whyChooseFeatures } from "@/app/data/whyChooseData";

const WhyChoose = () => {
	return (
		<section className="py-20 px-4">
			<div className="container mx-auto max-w-6xl">
				<div className="text-center mb-16">
					<h2 className="text-4xl font-bold mb-4 text-zinc-800 text-shadow-sm">
						Why Choose GiftEasy?
					</h2>
					<p className="text-lg text-zinc-800 text-shadow-sm max-w-3xl mx-auto">
						Stop the gift-giving stress. <br /> Our AI makes finding the perfect
						present effortless and enjoyable.
					</p>
				</div>

				<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
					{whyChooseFeatures.map((feature) => (
						<div
							key={feature.id}
							className="bg-white rounded-lg p-4 md:p-8 shadow-md flex flex-col items-center text-center"
						>
							<div
								className={`w-16 h-16 ${feature.iconBgColor} rounded-lg flex items-center justify-center mb-6`}
							>
								<feature.icon className="w-8 h-8 text-zinc-50" />
							</div>
							<h3 className="text-xl font-bold mb-3 text-gray-900">
								{feature.title}
							</h3>
							<p className="text-gray-600">{feature.description}</p>
						</div>
					))}
				</div>
			</div>
		</section>
	);
};

export default WhyChoose;
