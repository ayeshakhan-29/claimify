"use client";

import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@/components/ui/collapsible";
import { ChevronDown } from "lucide-react";
import { motion } from "framer-motion";
import { useState } from "react";

const faqs = [
  {
    question: "How quickly can we get started with Claimify?",
    answer:
      "We can typically have your practice up and running within 48 hours. Our streamlined onboarding process includes data migration, system setup, and team training to ensure a smooth transition.",
  },
  {
    question: "What information do I need to provide for the consultation?",
    answer:
      "For the best consultation, please have information about your practice size, specialty, current billing challenges, and monthly patient volume. However, we can work with whatever information you have available.",
  },
  {
    question: "Do you work with all practice management systems?",
    answer:
      "Yes, we integrate with all major practice management systems including Epic, Cerner, Allscripts, athenahealth, NextGen, and many others. Our team will handle the technical integration.",
  },
  {
    question: "What are your pricing models?",
    answer:
      "We offer transparent, percentage-based pricing with no setup fees or long-term contracts. Pricing varies based on your practice size and services needed. We'll provide a custom quote during your consultation.",
  },
  {
    question: "How do you ensure HIPAA compliance?",
    answer:
      "All our systems and processes are fully HIPAA compliant with bank-level security. We conduct regular security audits, provide staff training, and maintain comprehensive business associate agreements.",
  },
  {
    question: "Can I speak with current clients as references?",
    answer:
      "We're happy to connect you with current clients in similar specialties who can share their experience working with Claimify. Just let us know during your consultation.",
  },
];

export default function ContactFAQSection() {
  const [openItems, setOpenItems] = useState<number[]>([]);

  const toggleItem = (index: number) => {
    setOpenItems((prev) =>
      prev.includes(index) ? prev.filter((i) => i !== index) : [...prev, index]
    );
  };

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Frequently Asked Questions
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Get quick answers to common questions about our services and
            process.
          </p>
        </motion.div>

        <div className="max-w-4xl mx-auto space-y-4">
          {faqs.map((faq, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
            >
              <Collapsible
                open={openItems.includes(index)}
                onOpenChange={() => toggleItem(index)}
              >
                <CollapsibleTrigger className="flex items-center justify-between w-full p-6 bg-gray-50 hover:bg-gray-100 rounded-lg transition-colors text-left">
                  <span className="font-semibold text-gray-900 pr-4">
                    {faq.question}
                  </span>
                  <ChevronDown
                    className={`w-5 h-5 text-gray-500 transition-transform ${
                      openItems.includes(index) ? "rotate-180" : ""
                    }`}
                  />
                </CollapsibleTrigger>
                <CollapsibleContent className="px-6 pb-6 pt-2">
                  <p className="text-gray-600 leading-relaxed">{faq.answer}</p>
                </CollapsibleContent>
              </Collapsible>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
