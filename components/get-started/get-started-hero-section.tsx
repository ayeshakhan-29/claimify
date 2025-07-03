"use client";

import { Badge } from "@/components/ui/badge";
import { CheckCircle, Clock, Shield, TrendingUp } from "lucide-react";
import { motion } from "framer-motion";

export default function GetStartedHeroSection() {
  return (
    <section className="pt-24 pb-16 bg-gradient-to-br from-blue-50 via-white to-green-50">
      <div className="container mx-auto px-4">
        <motion.div
          className="text-center max-w-5xl mx-auto"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <Badge
            variant="secondary"
            className="bg-green-100 text-green-700 hover:bg-green-100 mb-6"
          >
            Start Your Journey
          </Badge>

          <h1 className="text-5xl lg:text-6xl font-bold text-gray-900 mb-6 leading-tight">
            Get Started with <span className="text-blue-600">Claimify</span>{" "}
            Today
          </h1>

          <p className="text-xl text-gray-600 leading-relaxed mb-12 max-w-4xl mx-auto">
            Transform your medical billing in just 3 simple steps. Join hundreds
            of healthcare providers who have increased their revenue by 40% with
            our proven billing solutions.
          </p>

          {/* Key Benefits */}
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 max-w-4xl mx-auto">
            <div className="text-center">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Clock className="w-8 h-8 text-green-600" />
              </div>
              <div className="font-semibold text-gray-900 mb-2">
                48 Hour Setup
              </div>
              <div className="text-gray-600">Quick implementation</div>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <CheckCircle className="w-8 h-8 text-blue-600" />
              </div>
              <div className="font-semibold text-gray-900 mb-2">
                99% Accuracy
              </div>
              <div className="text-gray-600">Clean claims guarantee</div>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Shield className="w-8 h-8 text-purple-600" />
              </div>
              <div className="font-semibold text-gray-900 mb-2">
                HIPAA Secure
              </div>
              <div className="text-gray-600">Bank-level security</div>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <TrendingUp className="w-8 h-8 text-orange-600" />
              </div>
              <div className="font-semibold text-gray-900 mb-2">
                40% More Revenue
              </div>
              <div className="text-gray-600">Average increase</div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
