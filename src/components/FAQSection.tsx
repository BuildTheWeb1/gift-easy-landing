const faqs = [
	{
		id: "faq-recommendations",
		question: "How does Gift Easy find personalized gift recommendations?",
		answer:
			"Gift Easy uses advanced AI algorithms to analyze the occasion, recipient preferences, and your budget to suggest perfectly tailored gift ideas that will be appreciated.",
	},
	{
		id: "faq-cost",
		question: "How much does Gift Easy cost?",
		answer:
			"Gift Easy charges just $0.99 per request and delivers 5 personalized gift ideas each time. This affordable service helps you find the perfect gift without the premium price tag of a personal shopper.",
	},
	{
		id: "faq-occasions",
		question: "What types of occasions does Gift Easy support?",
		answer:
			"Gift Easy supports a wide range of occasions across three main categories: \n\n1) Personal Achievements & Milestones (birthdays, graduations, new jobs, retirement, first day of school/college, exams, fitness achievements, new homes, and business ventures), \n\n2) Cultural & Religious Events (Christmas, Hanukkah, Diwali, Eid, Chinese New Year, Valentine's Day, Mother's Day, Father's Day, and Thanksgiving), \n\n3) Relationship Milestones (engagements, weddings, housewarmings, baby showers, bridal showers, and pet adoptions).",
	},
	{
		id: "faq-budget",
		question: "Can I specify a budget for my gift?",
		answer:
			"Absolutely! Gift Easy allows you to set your preferred budget range, ensuring all recommendations fit comfortably within your spending limit.",
	},
	// {
	// 	id: "faq-accuracy",
	// 	question: "How accurate are Gift Easy's recommendations?",
	// 	answer:
	// 		"Our AI-powered recommendation engine has a 95% satisfaction rate based on user feedback, making it highly reliable for finding gifts that recipients will love.",
	// },
];

const FAQSection = () => {
	return (
		<section
			className="w-full max-w-5xl mx-auto mt-24"
			aria-labelledby="faq-heading"
		>
			<h2
				id="faq-heading"
				className="text-2xl font-medium text-center mb-12 text-black"
			>
				Frequently Asked Questions
			</h2>

			<div className="space-y-6">
				{faqs.map((faq) => (
					<div
						key={faq.id}
						className="bg-white/70 p-6 rounded-xl backdrop-blur-sm shadow-xl transition-transform duration-300 hover:scale-105"
					>
						<h3 className="text-xl font-bold text-black mb-3">
							{faq.question}
						</h3>
						<p className="text-black font-medium whitespace-pre-line">
							{faq.answer}
						</p>
					</div>
				))}
			</div>
		</section>
	);
};

export default FAQSection;
