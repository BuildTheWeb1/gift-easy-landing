import { howItWorksSteps } from "@/app/data/howItWorksData";

const HowItWorks = () => {
	return (
		<section className="py-20 px-4">
			<div className="container mx-auto max-w-5xl">
				<div className="text-center mb-16">
					<h2 className="text-4xl font-bold mb-4">How It Works</h2>
					<p className="text-lg text-zinc-800 text-shadow-sm">
						Three simple steps to find the perfect gift every time. It's really
						that easy.
					</p>
				</div>

				<div className="grid gap-8 md:gap-12">
					{howItWorksSteps.map((step) => {
						const Icon = step.icon;
						return (
							<div key={step.id} className="flex items-start gap-6 relative">
								{/* Number and Icon Column */}
								<div className="flex flex-col items-center gap-2">
									<div className="w-14 h-14 rounded-full bg-pink-500 flex items-center justify-center text-zinc-50 text-xl font-bold">
										{step.id}
									</div>
									<div className="h-full flex flex-col items-center">
										<div className="w-0.5 h-8 bg-pink-200" />
										<div className="w-8 h-8 rounded-full bg-pink-100 flex items-center justify-center">
											<Icon className="text-pink-500" size={20} />
										</div>
									</div>
								</div>

								{/* Content Card */}
								<div className="flex-1 bg-white rounded-lg shadow-md p-6 relative">
									<h3 className="text-2xl font-bold text-black mb-2">
										{step.title}
									</h3>
									<p className="text-muted-foreground mb-2">
										{step.description}
									</p>
									<p className="text-sm text-muted-foreground">
										{step.subtext}
									</p>
								</div>
							</div>
						);
					})}
				</div>
			</div>
		</section>
	);
};

export default HowItWorks;
