"use client";

import { Card, CardContent } from "@/components/ui/card";
import { CheckCircle, DollarSign, Shield, BarChart3 } from "lucide-react";
import { motion } from "framer-motion";

const benefits = [
  {
    icon: CheckCircle,
    title: "99% Claim Accuracy Rate",
    description:
      "Industry-leading accuracy ensures maximum reimbursements and minimal denials.",
    stat: "99%",
    color: "green",
  },
  {
    icon: DollarSign,
    title: "Transparent Pricing",
    description:
      "No hidden fees, no setup costs. Clear, predictable pricing that scales with you.",
    stat: "$0",
    color: "blue",
  },
  {
    icon: Shield,
    title: "HIPAA-Compliant Workflow",
    description:
      "Bank-level security with full HIPAA compliance and regular security audits.",
    stat: "100%",
    color: "purple",
  },
  {
    icon: BarChart3,
    title: "Real-Time Reporting Dashboard",
    description:
      "Access comprehensive analytics and insights 24/7 through our client portal.",
    stat: "24/7",
    color: "orange",
  },
];

export default function WhyClaimifySection() {
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
            Why Claimify?
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            We deliver measurable results that directly impact your practice's
            bottom line and operational efficiency.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
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
                  <div
                    className={`w-16 h-16 bg-${benefit.color}-100 rounded-full flex items-center justify-center mx-auto mb-6`}
                  >
                    <benefit.icon
                      className={`w-8 h-8 text-${benefit.color}-600`}
                    />
                  </div>

                  <div
                    className={`text-4xl font-bold text-${benefit.color}-600 mb-4`}
                  >
                    {benefit.stat}
                  </div>

                  <h3 className="text-xl font-semibold text-gray-900 mb-4">
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
      </div>
    </section>
  );
}
