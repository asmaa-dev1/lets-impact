import React from 'react';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  {
    question: "How does the initial consultation work?",
    answer: "Our initial consultation is a free 30-minute call where we analyze your current situation, identify hidden opportunities, and show you exactly how we can help you unlock your growth potential. No commitment required."
  },
  {
    question: "What kind of businesses do you work with?",
    answer: "We work with ambitious leaders and brands who are ready to scale. Whether you're a startup, SME, or established company, if you're looking to unlock hidden opportunities and strengthen your market position, we can help."
  },
  {
    question: "How long does it take to see results?",
    answer: "Most clients start seeing measurable results within the first 30-60 days. However, sustainable growth is a journey. We focus on building strategies that deliver both quick wins and long-term success."
  },
  {
    question: "Do you offer custom growth strategies?",
    answer: "Absolutely! Every business is unique. We create personalized growth strategies tailored to your specific situation, goals, and market. No cookie-cutter solutions - just strategies that work for you."
  },
  {
    question: "What kind of support do you provide?",
    answer: "We provide hands-on support throughout your growth journey. This includes strategic consulting, implementation guidance, regular check-ins, and ongoing optimization to ensure you achieve your income goals."
  },
  {
    question: "What if I'm not satisfied with the results?",
    answer: "Your success is our priority. We work closely with you to ensure you're making progress toward your goals. If you're not seeing the results we promised, we'll continue working together until you do."
  }
];

const FaqSection = () => {
  return (
    <div className="bg-saas-black py-6 border-t border-gray-800">
      <div className="section-container">
        <div className="text-center max-w-3xl mx-auto mb-6">
          <h2 className="text-3xl md:text-4xl font-bold mb-3">
            Frequently Asked <span className="gradient-text">Questions</span>
          </h2>
          <p className="text-gray-400">
            Find answers to common questions about LET'S IMPACT. If you can't find what you're looking for, feel free to contact our team.
          </p>
        </div>
        
        <div className="max-w-3xl mx-auto bg-saas-darkGray rounded-xl p-4 md:p-6 border border-gray-800 card-shadow">
          <Accordion type="single" collapsible className="space-y-2">
            {faqs.map((faq, index) => (
              <AccordionItem key={index} value={`item-${index}`} className="border-b border-gray-800 last:border-0">
                <AccordionTrigger className="text-left text-white hover:text-saas-orange py-3">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-gray-400 pb-3">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </div>
  );
};

export default FaqSection;