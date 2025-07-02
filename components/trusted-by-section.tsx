"use client";

import { motion } from "framer-motion";

const trustedLogos = [
  "MedCenter Health",
  "Valley Medical",
  "Prime Care",
  "HealthFirst",
  "Metro Hospital",
  "Wellness Group",
];

const fadeInUp = {
  initial: { opacity: 0, y: 60 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6 },
};

const staggerContainer = {
  animate: {
    transition: {
      staggerChildren: 0.1,
    },
  },
};

export default function TrustedBySection() {
  return (
    <section className="py-12 bg-gray-50">
      <div className="container mx-auto px-4">
        <motion.div className="text-center mb-8" {...fadeInUp}>
          <p className="text-gray-600 font-medium">
            Trusted by leading healthcare providers
          </p>
        </motion.div>
        <motion.div
          className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8 items-center"
          variants={staggerContainer}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
        >
          {trustedLogos.map((logo, index) => (
            <motion.div key={index} className="text-center" variants={fadeInUp}>
              <div className="bg-white rounded-lg p-4 shadow-sm border border-gray-100 h-16 flex items-center justify-center">
                <span className="text-gray-400 font-medium text-sm">
                  {logo}
                </span>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
