"use client";

import { CheckCircle, Shield, TrendingUp, Users } from "lucide-react";
import { motion } from "framer-motion";

const highlights = [
  {
    icon: CheckCircle,
    title: "Strategic Partnership",
    description:
      "We're more than just a billing company—we're your strategic partner in practice growth.",
  },
  {
    icon: Shield,
    title: "HIPAA Compliant",
    description:
      "All our solutions are fully HIPAA-compliant with bank-level security protocols.",
  },
  {
    icon: TrendingUp,
    title: "Scalable Solutions",
    description:
      "Our services grow with your practice, from solo providers to multi-specialty groups.",
  },
  {
    icon: Users,
    title: "Enhanced Satisfaction",
    description:
      "Streamlined operations lead to better patient experiences and provider satisfaction.",
  },
];

export default function ServicesOverviewSection() {
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
          <h2 className="text-4xl font-bold text-gray-900 mb-6">
            Why Choose Claimify
          </h2>
          <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
            At Claimify, we deliver scalable, HIPAA-compliant solutions that
            boost revenue, reduce administrative burden, and enhance patient
            satisfaction across all aspects of your practice.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {highlights.map((highlight, index) => (
            <motion.div
              key={index}
              className="text-center"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
            >
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <highlight.icon className="w-8 h-8 text-blue-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">
                {highlight.title}
              </h3>
              <p className="text-gray-600 leading-relaxed">
                {highlight.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
