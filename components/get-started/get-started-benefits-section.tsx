"use client";

import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Phone, MessageCircle } from "lucide-react";
import { motion } from "framer-motion";
import Link from "next/link";

const benefits = [
  {
    title: "No Setup Fees",
    description: "Get started without any upfront costs or hidden fees.",
    value: "$0",
  },
  {
    title: "Quick Implementation",
    description: "Full setup and integration completed within 48 hours.",
    value: "48hrs",
  },
  {
    title: "Revenue Increase",
    description: "Average revenue improvement seen by our clients.",
    value: "40%",
  },
  {
    title: "Claim Accuracy",
    description: "Industry-leading accuracy rate for clean claims.",
    value: "99%",
  },
];

export default function GetStartedBenefitsSection() {
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
            Why Start with Claimify?
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Join hundreds of healthcare providers who have transformed their
            billing operations with our proven solutions.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {benefits.map((benefit, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
            >
              <Card className="h-full text-center hover:shadow-lg transition-shadow duration-300 border-0 shadow-md">
                <CardContent className="p-8">
                  <div className="text-4xl font-bold text-blue-600 mb-4">
                    {benefit.value}
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">
                    {benefit.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
                    {benefit.description}
                  </p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        {/* Final CTA */}
        <motion.div
          className="bg-gradient-to-r from-blue-600 to-green-600 rounded-2xl p-12 text-white text-center"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <h3 className="text-3xl font-bold mb-4">Ready to Get Started?</h3>
          <p className="text-xl opacity-90 mb-8 max-w-2xl mx-auto">
            Have questions before you begin? Our team is here to help you every
            step of the way.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contact">
              <Button
                size="lg"
                variant="secondary"
                className="px-8 py-6 text-lg bg-white text-blue-600 hover:bg-gray-100"
              >
                <Phone className="mr-2 w-5 h-5" />
                Talk to an Expert
              </Button>
            </Link>
            <Link href="/contact">
              <Button
                size="lg"
                variant="outline"
                className="px-8 py-6 text-lg border-white text-white hover:bg-white hover:text-blue-600 bg-transparent"
              >
                <MessageCircle className="mr-2 w-5 h-5" />
                Ask Questions
              </Button>
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
