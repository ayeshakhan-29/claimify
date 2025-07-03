"use client";

import { Card, CardContent } from "@/components/ui/card";
import { FileText, Settings, Rocket, ArrowRight } from "lucide-react";
import { motion } from "framer-motion";

const steps = [
  {
    number: "01",
    icon: FileText,
    title: "Submit Your Information",
    description:
      "Complete our simple onboarding form with your practice details and current billing challenges.",
    details: [
      "Practice information",
      "Current billing volume",
      "Specialty requirements",
      "Integration needs",
    ],
    color: "blue",
  },
  {
    number: "02",
    icon: Settings,
    title: "Custom Setup & Integration",
    description:
      "Our team configures your account and integrates with your existing practice management system.",
    details: [
      "System integration",
      "Data migration",
      "Team training",
      "Workflow setup",
    ],
    color: "green",
  },
  {
    number: "03",
    icon: Rocket,
    title: "Launch & Optimize",
    description:
      "Go live with full support and ongoing optimization to maximize your revenue and efficiency.",
    details: [
      "Live support",
      "Performance monitoring",
      "Continuous optimization",
      "Regular reporting",
    ],
    color: "purple",
  },
];

const fadeInUp = {
  initial: { opacity: 0, y: 60 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6 },
};

const staggerContainer = {
  animate: {
    transition: {
      staggerChildren: 0.2,
    },
  },
};

export default function GetStartedStepsSection() {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <motion.div className="text-center mb-16" {...fadeInUp}>
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            How to Get Started
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Our streamlined onboarding process gets you up and running quickly
            with minimal disruption to your practice.
          </p>
        </motion.div>

        <motion.div
          className="relative"
          variants={staggerContainer}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
        >
          <div className="grid lg:grid-cols-3 gap-8">
            {steps.map((step, index) => (
              <motion.div key={index} className="relative" variants={fadeInUp}>
                <Card className="h-full bg-white border-0 shadow-lg hover:shadow-xl transition-shadow duration-300">
                  <CardContent className="p-8">
                    <div className="flex items-center mb-6">
                      <div
                        className={`w-12 h-12 bg-${step.color}-100 rounded-lg flex items-center justify-center mr-4`}
                      >
                        <step.icon
                          className={`w-6 h-6 text-${step.color}-600`}
                        />
                      </div>
                      <div
                        className={`text-3xl font-bold text-${step.color}-600`}
                      >
                        {step.number}
                      </div>
                    </div>

                    <h3 className="text-xl font-semibold text-gray-900 mb-4">
                      {step.title}
                    </h3>
                    <p className="text-gray-600 leading-relaxed mb-6">
                      {step.description}
                    </p>

                    <div className="space-y-2">
                      {step.details.map((detail, detailIndex) => (
                        <div
                          key={detailIndex}
                          className="flex items-center text-sm text-gray-600"
                        >
                          <div
                            className={`w-1.5 h-1.5 bg-${step.color}-500 rounded-full mr-3`}
                          ></div>
                          {detail}
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>

                {index < steps.length - 1 && (
                  <div className="hidden lg:block absolute top-1/2 -right-4 transform -translate-y-1/2 z-10">
                    <ArrowRight className="w-8 h-8 text-gray-300" />
                  </div>
                )}
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
