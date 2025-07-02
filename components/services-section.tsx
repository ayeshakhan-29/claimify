"use client";

import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import {
  FileText,
  TrendingUp,
  Shield,
  BarChart3,
  ArrowRight,
} from "lucide-react";
import { motion } from "framer-motion";

const services = [
  {
    icon: FileText,
    title: "Medical Billing",
    description:
      "Comprehensive billing services with 99.5% accuracy rate and faster claim processing.",
  },
  {
    icon: TrendingUp,
    title: "Revenue Cycle Management",
    description:
      "End-to-end RCM solutions to maximize your revenue and minimize denials.",
  },
  {
    icon: Shield,
    title: "Credentialing",
    description:
      "Fast-track provider credentialing with insurance networks and healthcare systems.",
  },
  {
    icon: BarChart3,
    title: "AR & Denial Management",
    description:
      "Proactive denial management and accounts receivable optimization.",
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
      staggerChildren: 0.1,
    },
  },
};

export default function ServicesSection() {
  return (
    <section id="services" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <motion.div className="text-center mb-16" {...fadeInUp}>
          <h2 className="text-4xl font-bold text-gray-900 mb-4">What We Do</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Comprehensive medical billing solutions designed to maximize your
            revenue and minimize administrative burden.
          </p>
        </motion.div>

        <motion.div
          className="grid md:grid-cols-2 lg:grid-cols-4 gap-8"
          variants={staggerContainer}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
        >
          {services.map((service, index) => (
            <motion.div key={index} variants={fadeInUp}>
              <Card className="h-full hover:shadow-lg transition-all duration-300 border-0 shadow-md group">
                <CardContent className="p-8 text-center">
                  <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:bg-blue-600 transition-colors duration-300">
                    <service.icon className="w-8 h-8 text-blue-600 group-hover:text-white transition-colors duration-300" />
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-4">
                    {service.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
                    {service.description}
                  </p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </motion.div>

        <motion.div className="text-center mt-12" {...fadeInUp}>
          <Button
            size="lg"
            variant="outline"
            className="px-8 py-6 text-lg bg-transparent"
          >
            Explore All Services
            <ArrowRight className="ml-2 w-5 h-5" />
          </Button>
        </motion.div>
      </div>
    </section>
  );
}
