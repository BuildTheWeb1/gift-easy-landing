"use client";
import { faqItems } from "@/app/data/faqData";
import { ChevronDown, ChevronUp } from "lucide-react";
import { useState } from "react";

const FAQSection = () => {
	const [openFAQ, setOpenFAQ] = useState<string>("how-does-ai-work");

	const toggleFAQ = (id: string) => {
		setOpenFAQ(openFAQ === id ? "" : id);
	};

	return (
		<section className="py-20 px-4">
			<div className="container mx-auto max-w-3xl">
				<div className="text-center mb-16">
					<h2 className="text-4xl font-bold mb-4 text-white text-shadow-sm">
						Frequently Asked Questions
					</h2>
					<p className="text-lg text-white text-shadow-sm">
						Everything you need to know about finding perfect gifts with AI.
					</p>
				</div>

				<div className="space-y-4">
					{faqItems.map((faq) => (
						<div
							key={faq.id}
							className="bg-white rounded-lg overflow-hidden shadow-sm"
						>
							<button
								type="button"
								className="w-full flex items-center justify-between p-5 text-left focus:outline-none"
								onClick={() => toggleFAQ(faq.id)}
								aria-expanded={openFAQ === faq.id}
								aria-controls={`faq-answer-${faq.id}`}
							>
								<span className="font-medium text-gray-900">
									{faq.question}
								</span>
								{openFAQ === faq.id ? (
									<ChevronUp className="h-5 w-5 text-gray-500" />
								) : (
									<ChevronDown className="h-5 w-5 text-gray-500" />
								)}
							</button>

							{openFAQ === faq.id && (
								<div
									id={`faq-answer-${faq.id}`}
									className="px-5 pb-5 text-gray-600"
								>
									<p>{faq.answer}</p>
								</div>
							)}
						</div>
					))}
				</div>
			</div>
		</section>
	);
};

export default FAQSection;
