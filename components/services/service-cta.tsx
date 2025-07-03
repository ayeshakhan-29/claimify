"use client";

import { Button } from "@/components/ui/button";
import { ArrowRight, Phone } from "lucide-react";
import { motion } from "framer-motion";

interface ServiceCTAProps {
  title: string;
  description: string;
  primaryCTA: string;
  secondaryCTA: string;
}

export default function ServiceCTA({
  title,
  description,
  primaryCTA,
  secondaryCTA,
}: ServiceCTAProps) {
  return (
    <section className="py-20 bg-gradient-to-r from-blue-600 to-green-600 text-white">
      <div className="container mx-auto px-4 text-center">
        <motion.div
          className="max-w-4xl mx-auto space-y-8"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-4xl font-bold leading-tight">{title}</h2>
          <p className="text-xl opacity-90 leading-relaxed">{description}</p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              size="lg"
              variant="secondary"
              className="px-8 py-6 text-lg bg-white text-blue-600 hover:bg-gray-100"
            >
              <ArrowRight className="mr-2 w-5 h-5" />
              {primaryCTA}
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="px-8 py-6 text-lg border-white text-white hover:bg-white hover:text-blue-600 bg-transparent"
            >
              <Phone className="mr-2 w-5 h-5" />
              {secondaryCTA}
            </Button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
