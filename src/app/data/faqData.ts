export interface FAQItem {
  id: string;
  question: string;
  answer: string;
}

export const faqItems: FAQItem[] = [
  {
    id: "how-does-ai-work",
    question: "How does GiftEasy's AI work?",
    answer: "Our AI analyzes the information you provide about the recipient (age, interests, relationship, occasion) and matches it against a vast database of gift ideas. It considers factors like personality traits, current trends, and budget constraints to suggest the most suitable gifts."
  },
  {
    id: "is-gifteasy-free",
    question: "Is GiftEasy free to use?",
    answer: "GiftEasy offers both free and premium options. The basic service is free and provides general gift suggestions. Our premium tier offers more personalized recommendations, exclusive discounts, and priority support for a small monthly fee."
  },
  {
    id: "need-account",
    question: "Do I need to create an account?",
    answer: "While you can get basic gift suggestions without an account, creating one allows you to save your preferences, track gift history, and access premium features. Registration takes less than a minute and only requires an email address."
  },
  {
    id: "occasions-supported",
    question: "What occasions does GiftEasy support?",
    answer: "GiftEasy supports virtually all gift-giving occasions including birthdays, anniversaries, holidays (Christmas, Valentine's Day, etc.), weddings, graduations, baby showers, housewarmings, retirements, and many more. If you have a special occasion not listed, our AI can still help!"
  },
  {
    id: "budget-range",
    question: "Can I specify a budget range?",
    answer: "Absolutely! GiftEasy allows you to set specific budget parameters, ensuring all recommendations fall within your price range. Whether you're looking for affordable options or premium gifts, our AI will tailor suggestions to match your spending comfort."
  },
  {
    id: "accuracy",
    question: "How accurate are the gift suggestions?",
    answer: "Our AI has been trained on millions of gift preferences and recipient reactions, achieving a 93% satisfaction rate according to user feedback. The more information you provide about the recipient, the more accurate our suggestions become."
  },
  {
    id: "business-gifts",
    question: "Can I use GiftEasy for business gifts?",
    answer: "Yes! GiftEasy has a dedicated business gifting feature designed for corporate presents, client appreciation, employee recognition, and team celebrations. Business accounts include bulk suggestion options and corporate branding opportunities."
  },
  {
    id: "dont-like-suggestions",
    question: "What if I don't like any of the suggestions?",
    answer: "If you're not satisfied with the initial suggestions, you can refine your search by providing additional details about the recipient or adjusting your preferences. You can also request a new batch of ideas with a single click. Our AI learns from your feedback to improve future recommendations."
  }
];
