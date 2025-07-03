"use client";

import { Button } from "@/components/ui/button";
import { Phone, Calendar } from "lucide-react";
import { motion } from "framer-motion";

export default function ServicesCTASection() {
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
          <h2 className="text-4xl lg:text-5xl font-bold leading-tight">
            Ready to Elevate Your Billing & Operations?
          </h2>

          <p className="text-xl opacity-90 leading-relaxed max-w-3xl mx-auto">
            Join hundreds of healthcare providers who have transformed their
            practice operations and increased revenue with Claimify's
            comprehensive solutions.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              size="lg"
              variant="secondary"
              className="px-8 py-6 text-lg bg-white text-blue-600 hover:bg-gray-100"
            >
              <Calendar className="mr-2 w-5 h-5" />
              Book Free Consultation
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="px-8 py-6 text-lg border-white text-white hover:bg-white hover:text-blue-600 bg-transparent"
            >
              <Phone className="mr-2 w-5 h-5" />
              Call (555) 123-4567
            </Button>
          </div>

          <div className="pt-8 border-t border-white/20">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
              <div>
                <div className="text-2xl font-bold mb-2">Free Consultation</div>
                <div className="opacity-90">No obligation assessment</div>
              </div>
              <div>
                <div className="text-2xl font-bold mb-2">Quick Setup</div>
                <div className="opacity-90">Get started in 48 hours</div>
              </div>
              <div>
                <div className="text-2xl font-bold mb-2">Proven Results</div>
                <div className="opacity-90">Average 40% revenue increase</div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
