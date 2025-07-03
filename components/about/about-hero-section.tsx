"use client";

import { motion } from "framer-motion";

export default function AboutHeroSection() {
  return (
    <section className="pt-24 pb-16 bg-gradient-to-br from-blue-50 via-white to-green-50">
      <div className="container mx-auto px-4">
        <motion.div
          className="text-center max-w-4xl mx-auto"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h1 className="text-5xl lg:text-6xl font-bold text-gray-900 mb-6">
            About <span className="text-blue-600">Claimify</span>
          </h1>
          <p className="text-xl text-gray-600 mt-6 max-w-2xl mx-auto">
            We&apos;re a team of healthcare and technology experts dedicated to simplifying medical billing and improving practice revenue cycles.
          </p>
          <div className="flex items-center justify-center space-x-12 text-center">
            <div>
              <div className="text-3xl font-bold text-blue-600">500+</div>
              <div className="text-gray-600">Healthcare Providers</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-green-600">$50M+</div>
              <div className="text-gray-600">Revenue Processed</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-purple-600">99.5%</div>
              <div className="text-gray-600">Accuracy Rate</div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
