"use client";

import { Button } from "@/components/ui/button";
import { BarChart3, Users, Clock, Shield } from "lucide-react";
import { motion } from "framer-motion";

const features = [
  {
    icon: BarChart3,
    title: "Transparent Reporting",
    description:
      "Real-time dashboards and detailed analytics for complete visibility.",
  },
  {
    icon: Users,
    title: "Certified Coders",
    description: "AAPC and AHIMA certified professionals handling your claims.",
  },
  {
    icon: Clock,
    title: "Quick Turnaround",
    description: "24-48 hour claim submission with priority processing.",
  },
  {
    icon: Shield,
    title: "HIPAA-Compliant",
    description: "Bank-level security ensuring your data is always protected.",
  },
];

export default function WhyChooseSection() {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <motion.div
            className="space-y-8"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <div>
              <h2 className="text-4xl font-bold text-gray-900 mb-4">
                Why Choose Claimify
              </h2>
              <p className="text-xl text-gray-600">
                We combine cutting-edge technology with expert knowledge to
                deliver unmatched results for your practice.
              </p>
            </div>

            <div className="space-y-6">
              {features.map((feature, index) => (
                <motion.div
                  key={index}
                  className="flex items-start space-x-4"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                >
                  <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center flex-shrink-0">
                    <feature.icon className="w-6 h-6 text-blue-600" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-2">
                      {feature.title}
                    </h3>
                    <p className="text-gray-600">{feature.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          <motion.div
            className="relative"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <div className="bg-gradient-to-br from-blue-600 to-green-600 rounded-2xl p-8 text-white">
              <div className="space-y-6">
                <h3 className="text-2xl font-bold">Performance Metrics</h3>

                <div className="grid grid-cols-2 gap-4">
                  <div className="bg-white/10 rounded-lg p-4 backdrop-blur-sm">
                    <div className="text-3xl font-bold">99.5%</div>
                    <div className="text-sm opacity-90">First-Pass Rate</div>
                  </div>
                  <div className="bg-white/10 rounded-lg p-4 backdrop-blur-sm">
                    <div className="text-3xl font-bold">15</div>
                    <div className="text-sm opacity-90">Avg Days A/R</div>
                  </div>
                  <div className="bg-white/10 rounded-lg p-4 backdrop-blur-sm">
                    <div className="text-3xl font-bold">40%</div>
                    <div className="text-sm opacity-90">Revenue Increase</div>
                  </div>
                  <div className="bg-white/10 rounded-lg p-4 backdrop-blur-sm">
                    <div className="text-3xl font-bold">2.1%</div>
                    <div className="text-sm opacity-90">Denial Rate</div>
                  </div>
                </div>

                <div className="pt-4">
                  <Button variant="secondary" size="lg" className="w-full">
                    View Detailed Report
                  </Button>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
