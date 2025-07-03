"use client";

import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Shield, Award, CheckCircle, Lock } from "lucide-react";
import { motion } from "framer-motion";

const certifications = [
  {
    name: "AAPC",
    fullName: "American Academy of Professional Coders",
    description: "Certified Professional Coders on our team",
    icon: Award,
    color: "blue",
  },
  {
    name: "AHIMA",
    fullName: "American Health Information Management Association",
    description: "Certified Health Information Management professionals",
    icon: CheckCircle,
    color: "green",
  },
  {
    name: "HIPAA",
    fullName: "Health Insurance Portability and Accountability Act",
    description:
      "Fully compliant with all HIPAA privacy and security requirements",
    icon: Shield,
    color: "purple",
  },
  {
    name: "SOC 2",
    fullName: "Service Organization Control 2",
    description:
      "Type II compliance for security, availability, and confidentiality",
    icon: Lock,
    color: "orange",
  },
];

const partners = [
  "Epic Systems",
  "Cerner",
  "Allscripts",
  "athenahealth",
  "NextGen Healthcare",
  "eClinicalWorks",
  "Practice Fusion",
  "Greenway Health",
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

export default function CertificationsSection() {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <motion.div className="text-center mb-16" {...fadeInUp}>
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Certifications & Partners
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Our commitment to excellence is backed by industry-leading
            certifications and strategic partnerships.
          </p>
        </motion.div>

        {/* Certifications */}
        <motion.div
          className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16"
          variants={staggerContainer}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
        >
          {certifications.map((cert, index) => (
            <motion.div key={index} variants={fadeInUp}>
              <Card className="h-full hover:shadow-lg transition-all duration-300 border-0 shadow-md group">
                <CardContent className="p-8 text-center">
                  <div
                    className={`w-16 h-16 bg-${cert.color}-100 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:bg-${cert.color}-600 transition-colors duration-300`}
                  >
                    <cert.icon
                      className={`w-8 h-8 text-${cert.color}-600 group-hover:text-white transition-colors duration-300`}
                    />
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">
                    {cert.name}
                  </h3>
                  <p className="text-sm font-medium text-gray-700 mb-3">
                    {cert.fullName}
                  </p>
                  <p className="text-gray-600 text-sm leading-relaxed">
                    {cert.description}
                  </p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </motion.div>

        {/* Partners */}
        <motion.div {...fadeInUp}>
          <div className="bg-gray-50 rounded-2xl p-8">
            <h3 className="text-2xl font-bold text-gray-900 text-center mb-8">
              Technology Partners
            </h3>
            <p className="text-center text-gray-600 mb-8">
              We integrate seamlessly with leading healthcare management systems
            </p>
            <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-8 gap-6 items-center">
              {partners.map((partner, index) => (
                <motion.div
                  key={index}
                  className="text-center"
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                >
                  <div className="bg-white rounded-lg p-4 shadow-sm border border-gray-100 h-16 flex items-center justify-center hover:shadow-md transition-shadow">
                    <span className="text-gray-500 font-medium text-sm">
                      {partner}
                    </span>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>

        {/* Trust Indicators */}
        <motion.div className="mt-16 text-center" {...fadeInUp}>
          <div className="flex flex-wrap justify-center gap-4">
            <Badge
              variant="secondary"
              className="bg-blue-100 text-blue-700 px-4 py-2"
            >
              HIPAA Compliant
            </Badge>
            <Badge
              variant="secondary"
              className="bg-green-100 text-green-700 px-4 py-2"
            >
              SOC 2 Certified
            </Badge>
            <Badge
              variant="secondary"
              className="bg-purple-100 text-purple-700 px-4 py-2"
            >
              99.9% Uptime
            </Badge>
            <Badge
              variant="secondary"
              className="bg-orange-100 text-orange-700 px-4 py-2"
            >
              24/7 Support
            </Badge>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
