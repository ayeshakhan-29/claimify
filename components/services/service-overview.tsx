"use client";

import { CheckCircle } from "lucide-react";
import { motion } from "framer-motion";

interface ServiceOverviewProps {
  title: string;
  description: string;
  highlights: string[];
}

export default function ServiceOverview({
  title,
  description,
  highlights,
}: ServiceOverviewProps) {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <motion.div
            className="space-y-6"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-3xl font-bold text-gray-900">{title}</h2>
            <p className="text-lg text-gray-600 leading-relaxed">
              {description}
            </p>
          </motion.div>

          <motion.div
            className="space-y-4"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            {highlights.map((highlight, index) => (
              <div key={index} className="flex items-start space-x-3">
                <CheckCircle className="w-6 h-6 text-green-600 flex-shrink-0 mt-0.5" />
                <span className="text-gray-700">{highlight}</span>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
