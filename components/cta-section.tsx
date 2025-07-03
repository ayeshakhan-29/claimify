"use client";

import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { motion } from "framer-motion";
import Link from "next/link";

const fadeInUp = {
  initial: { opacity: 0, y: 60 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6 },
};

export default function CTASection() {
  return (
    <section className="py-20 bg-gradient-to-r from-blue-600 to-green-600 text-white">
      <div className="container mx-auto px-4 text-center">
        <motion.div className="max-w-4xl mx-auto space-y-8" {...fadeInUp}>
          <h2 className="text-4xl lg:text-5xl font-bold leading-tight">
            Ready to Transform Your Medical Billing?
          </h2>
          <p className="text-xl opacity-90 leading-relaxed">
            Join hundreds of healthcare providers who have increased their
            revenue and reduced administrative burden with Claimify.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contact">
              <Button
                size="lg"
                variant="secondary"
                className="px-8 py-6 text-lg"
              >
                Start Free Trial
                <ArrowRight className="ml-2 w-5 h-5" />
              </Button>
            </Link>
            <Link href="/contact">
              <Button
                size="lg"
                variant="outline"
                className="px-8 py-6 text-lg border-white text-white hover:bg-white hover:text-blue-600 bg-transparent"
              >
                Schedule Consultation
              </Button>
            </Link>
          </div>

          <div className="pt-8 border-t border-white/20">
            <p className="text-lg opacity-90">
              <strong>No setup fees.</strong> No long-term contracts. Cancel
              anytime.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
