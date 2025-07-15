const SocialProofSection = () => {
	return (
		<section className="max-w-3xl mx-auto text-center py-8 px-6 my-12 bg-white/50 backdrop-blur-sm rounded-xl shadow-sm">
			<h3 className="text-lg md:text-2xl font-bold mb-3 text-[#6a004d]">
				🎉 Trusted by Gift-Givers Everywhere
			</h3>
			<p className="mb-6 text-base text-black">
				Check us out and support our AI-powered gift recommendation platform!
			</p>
			<div className="grid grid-cols-1 md:grid-cols-2 gap-6 justify-items-center items-center">
				<a
					href="https://www.producthunt.com/products/gift-easy?embed=true&utm_source=badge-featured&utm_medium=badge&utm_source=badge-gift&#0045;easy"
					target="_blank"
					rel="noopener noreferrer"
					className="hover:opacity-90 transition-all duration-300 transform hover:-translate-y-1"
				>
					<img
						src="https://api.producthunt.com/widgets/embed-image/v1/featured.svg?post_id=974457&theme=light&t=1749284477585"
						alt="Gift Easy - AI-powered gift ideas tailored to any occasion | Product Hunt"
						width="250"
						height="54"
					/>
				</a>
				<a
					href="https://www.uneed.best/tool/gifteasy"
					target="_blank"
					rel="noopener noreferrer"
					className="hover:opacity-90 transition-all duration-300 transform hover:-translate-y-1"
				>
					<img
						src="https://www.uneed.best/EMBED3B.png"
						alt="Uneed Embed Badge"
						width="250"
						height="54"
					/>
				</a>
			</div>
		</section>
	);
};

export default SocialProofSection;
