"use client";

import { Card, CardContent } from "@/components/ui/card";
import { Shield, Zap, Users, CheckCircle } from "lucide-react";
import { motion } from "framer-motion";

const values = [
  {
    icon: Shield,
    title: "Integrity",
    description:
      "We maintain the highest standards of honesty and transparency in all our interactions.",
    color: "blue",
  },
  {
    icon: Zap,
    title: "Excellence",
    description:
      "We strive for perfection in every claim, every report, and every client interaction.",
    color: "green",
  },
  {
    icon: Users,
    title: "Partnership",
    description:
      "We work as an extension of your team, understanding your unique needs and challenges.",
    color: "purple",
  },
  {
    icon: CheckCircle,
    title: "Reliability",
    description:
      "You can count on us for consistent, accurate, and timely medical billing services.",
    color: "orange",
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

export default function ValuesSection() {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <motion.div className="text-center mb-16" {...fadeInUp}>
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Our Core Values
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            These principles guide everything we do and shape how we serve our
            healthcare partners.
          </p>
        </motion.div>

        <motion.div
          className="grid md:grid-cols-2 lg:grid-cols-4 gap-8"
          variants={staggerContainer}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
        >
          {values.map((value, index) => (
            <motion.div key={index} variants={fadeInUp}>
              <Card className="h-full hover:shadow-lg transition-all duration-300 border-0 shadow-md group">
                <CardContent className="p-8 text-center">
                  <div
                    className={`w-16 h-16 bg-${value.color}-100 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:bg-${value.color}-600 transition-colors duration-300`}
                  >
                    <value.icon
                      className={`w-8 h-8 text-${value.color}-600 group-hover:text-white transition-colors duration-300`}
                    />
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-4">
                    {value.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
                    {value.description}
                  </p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
