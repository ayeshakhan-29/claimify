"use client";

import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import {
  FileText,
  Search,
  TrendingUp,
  UserCheck,
  Headphones,
  Heart,
  Activity,
  Megaphone,
  ArrowRight,
} from "lucide-react";
import { motion } from "framer-motion";
import Link from "next/link";

const services = [
  {
    icon: FileText,
    title: "Medical Billing Services",
    description:
      "Accurate coding, fast claim submission, and payment posting with 99% accuracy rate.",
    features: ["ICD-10 & CPT Coding", "Claims Tracking", "Payment Posting"],
    color: "blue",
    href: "/services/medical-billing",
  },
  {
    icon: Search,
    title: "Medical Billing Audits",
    description:
      "Eliminate revenue leakage with our expert audit services and compliance reviews.",
    features: ["Revenue Analysis", "Compliance Check", "Error Identification"],
    color: "green",
    href: "/services/billing-audits",
  },
  {
    icon: TrendingUp,
    title: "Revenue Cycle Management",
    description:
      "From patient intake to final payment, we handle your complete revenue cycle.",
    features: ["End-to-End RCM", "Denial Management", "Financial Reporting"],
    color: "purple",
    href: "/services/revenue-cycle",
  },
  {
    icon: UserCheck,
    title: "Provider Credentialing",
    description:
      "Speedy enrollment with payers and comprehensive credentialing support.",
    features: ["Payer Enrollment", "CAQH Setup", "Re-credentialing"],
    color: "orange",
    href: "/services/credentialing",
  },
  {
    icon: Headphones,
    title: "Front Office Assistant",
    description:
      "Virtual administrative support to manage scheduling, calls, and eligibility checks.",
    features: [
      "Appointment Scheduling",
      "Insurance Verification",
      "Call Management",
    ],
    color: "teal",
    href: "/services/front-office",
  },
  {
    icon: Heart,
    title: "Chronic Care Management",
    description:
      "Monthly check-ins and compliance-driven patient follow-ups for chronic conditions.",
    features: ["Patient Check-ins", "Care Coordination", "CMS Compliance"],
    color: "red",
    href: "/services/chronic-care",
  },
  {
    icon: Activity,
    title: "Remote Patient Monitoring",
    description:
      "Monitor patient vitals remotely and increase reimbursements with RPM services.",
    features: ["Device Integration", "24/7 Monitoring", "Data Analysis"],
    color: "indigo",
    href: "/services/remote-monitoring",
  },
  {
    icon: Megaphone,
    title: "Healthcare Digital Marketing",
    description:
      "Attract and retain patients with targeted digital strategies and local SEO.",
    features: ["Website Design", "Local SEO", "Reputation Management"],
    color: "pink",
    href: "/services/digital-marketing",
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

export default function ServicesGridSection() {
  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <motion.div className="text-center mb-16" {...fadeInUp}>
          <h2 className="text-4xl font-bold text-gray-900 mb-6">
            What We Offer
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Comprehensive healthcare solutions designed to optimize every aspect
            of your practice operations.
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
              <Card className="h-full hover:shadow-xl transition-all duration-300 border-0 shadow-md group bg-white">
                <CardContent className="p-8">
                  <div
                    className={`w-16 h-16 bg-${service.color}-100 rounded-xl flex items-center justify-center mb-6 group-hover:bg-${service.color}-600 transition-colors duration-300`}
                  >
                    <service.icon
                      className={`w-8 h-8 text-${service.color}-600 group-hover:text-white transition-colors duration-300`}
                    />
                  </div>

                  <h3 className="text-xl font-semibold text-gray-900 mb-4">
                    {service.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed mb-6">
                    {service.description}
                  </p>

                  <div className="space-y-2 mb-6">
                    {service.features.map((feature, featureIndex) => (
                      <div
                        key={featureIndex}
                        className="flex items-center text-sm text-gray-500"
                      >
                        <div
                          className={`w-1.5 h-1.5 bg-${service.color}-500 rounded-full mr-2`}
                        ></div>
                        {feature}
                      </div>
                    ))}
                  </div>

                  <Link href={service.href}>
                    <Button
                      variant="outline"
                      className="w-full group-hover:bg-blue-600 group-hover:text-white group-hover:border-blue-600 transition-all duration-300 bg-transparent"
                    >
                      Learn More
                      <ArrowRight className="ml-2 w-4 h-4" />
                    </Button>
                  </Link>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
