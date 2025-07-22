"use client";
import { faqItems } from "@/app/data/faqData";
import {
	Accordion,
	AccordionContent,
	AccordionItem,
	AccordionTrigger,
} from "@/components/ui/accordion";

const FAQSection = () => {
	return (
		<div className="py-20 px-4 max-w-4xl mx-auto">
			<div className="text-center mb-16">
				<h2 className="text-4xl font-bold mb-4 text-zinc-800 text-shadow-sm">
					Frequently Asked Questions
				</h2>
				<p className="text-lg text-zinc-800 text-shadow-sm">
					Everything you need to know about finding perfect gifts with AI.
				</p>
			</div>

			<Accordion
				type="single"
				collapsible
				defaultValue="how-does-ai-work"
				className="w-full"
			>
				{faqItems.map((faq) => (
					<AccordionItem
						key={faq.id}
						value={faq.id}
						className="mb-4 bg-white rounded-lg shadow-sm"
					>
						<AccordionTrigger className="px-5 py-4 hover:no-underline">
							<div className="font-medium text-gray-900 text-left">
								{faq.question}
							</div>
						</AccordionTrigger>
						<AccordionContent className="px-5 text-gray-600">
							<p>{faq.answer}</p>
						</AccordionContent>
					</AccordionItem>
				))}
			</Accordion>
		</div>
	);
};

export default FAQSection;
