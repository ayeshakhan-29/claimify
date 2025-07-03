"use client";

import { Card, CardContent } from "@/components/ui/card";
import { Calendar, Users, TrendingUp, Award } from "lucide-react";
import { motion } from "framer-motion";

const milestones = [
  {
    year: "2024",
    title: "Claimify Founded",
    description:
      "Started by medical billing experts with 15+ years of combined experience in healthcare administration.",
    icon: Calendar,
    color: "blue",
  },
  {
    year: "2024",
    title: "First 50 Clients",
    description:
      "Quickly gained trust of healthcare providers with our transparent approach and proven results.",
    icon: Users,
    color: "green",
  },
  {
    year: "2024",
    title: "Technology Platform Launch",
    description:
      "Launched our proprietary HIPAA-compliant platform with real-time reporting and analytics.",
    icon: TrendingUp,
    color: "purple",
  },
  {
    year: "2024",
    title: "Industry Recognition",
    description:
      "Achieved key certifications and partnerships with major healthcare organizations.",
    icon: Award,
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
      staggerChildren: 0.2,
    },
  },
};

export default function OurStorySection() {
  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <motion.div className="text-center mb-16" {...fadeInUp}>
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Our Story</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            From a simple idea to transform medical billing, we&apos;ve grown into a
            trusted partner for hundreds of healthcare providers across the
            nation.
          </p>
        </motion.div>

        <motion.div
          className="relative"
          variants={staggerContainer}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
        >
          {/* Timeline line */}
          <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-gradient-to-b from-blue-200 to-green-200 hidden lg:block"></div>

          <div className="space-y-12">
            {milestones.map((milestone, index) => (
              <motion.div
                key={index}
                className={`flex items-center ${
                  index % 2 === 0 ? "lg:flex-row" : "lg:flex-row-reverse"
                } flex-col`}
                variants={fadeInUp}
              >
                {/* Left side content (or right when reversed) */}
                <div className="flex-1 lg:px-8">
                  <Card className="bg-white border-0 shadow-lg hover:shadow-xl transition-shadow duration-300">
                    <CardContent className="p-8">
                      <div className="flex items-center space-x-4 mb-4">
                        <div
                          className={`w-12 h-12 bg-${milestone.color}-100 rounded-lg flex items-center justify-center`}
                        >
                          <milestone.icon
                            className={`w-6 h-6 text-${milestone.color}-600`}
                          />
                        </div>
                        <div>
                          <div className="text-2xl font-bold text-gray-900">
                            {milestone.year}
                          </div>
                          <div className="text-lg font-semibold text-gray-700">
                            {milestone.title}
                          </div>
                        </div>
                      </div>
                      <p className="text-gray-600 leading-relaxed">
                        {milestone.description}
                      </p>
                    </CardContent>
                  </Card>
                </div>

                {/* Timeline dot */}
                <div className="relative z-10 hidden lg:block flex-shrink-0">
                  <div
                    className={`w-6 h-6 rounded-full border-4 border-white shadow-lg ${
                      milestone.color === "blue"
                        ? "bg-blue-500"
                        : milestone.color === "green"
                        ? "bg-green-500"
                        : milestone.color === "purple"
                        ? "bg-purple-500"
                        : "bg-orange-500"
                    }`}
                  ></div>
                </div>

                {/* Right side spacer (or left when reversed) */}
                <div className="flex-1 lg:px-8 hidden lg:block"></div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
