"use client";

import { Badge } from "@/components/ui/badge";
import { Phone, Mail, MapPin, Clock } from "lucide-react";
import { motion } from "framer-motion";

export default function ContactHeroSection() {
  return (
    <section className="pt-24 pb-16 bg-gradient-to-br from-blue-50 via-white to-green-50">
      <div className="container mx-auto px-4">
        <motion.div
          className="text-center max-w-4xl mx-auto"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <Badge
            variant="secondary"
            className="bg-blue-100 text-blue-700 hover:bg-blue-100 mb-6"
          >
            Get In Touch
          </Badge>

          <h1 className="text-5xl lg:text-6xl font-bold text-gray-900 mb-6 leading-tight">
            Ready to Transform Your{" "}
            <span className="text-blue-600">Medical Billing</span>?
          </h1>

          <p className="text-xl text-gray-600 leading-relaxed mb-12 max-w-3xl mx-auto">
            Let&apos;s discuss how Claimify can optimize your revenue cycle, reduce
            administrative burden, and help your practice thrive. Get your free
            consultation today.
          </p>

          {/* Quick Contact Info */}
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 max-w-4xl mx-auto">
            <div className="text-center">
              <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Phone className="w-6 h-6 text-blue-600" />
              </div>
              <div className="font-semibold text-gray-900">Call Us</div>
              <div className="text-gray-600">(555) 123-4567</div>
            </div>
            <div className="text-center">
              <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Mail className="w-6 h-6 text-green-600" />
              </div>
              <div className="font-semibold text-gray-900">Email Us</div>
              <div className="text-gray-600">hello@claimify.com</div>
            </div>
            <div className="text-center">
              <div className="w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <MapPin className="w-6 h-6 text-purple-600" />
              </div>
              <div className="font-semibold text-gray-900">Visit Us</div>
              <div className="text-gray-600">New York, NY</div>
            </div>
            <div className="text-center">
              <div className="w-12 h-12 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Clock className="w-6 h-6 text-orange-600" />
              </div>
              <div className="font-semibold text-gray-900">Business Hours</div>
              <div className="text-gray-600">Mon-Fri 8AM-6PM</div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
