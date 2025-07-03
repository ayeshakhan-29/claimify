"use client";
import { Target, Eye, Heart } from "lucide-react";
import { motion } from "framer-motion";
import Image from "next/image";

export default function MissionVisionSection() {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <motion.div
            className="space-y-8"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <div>
              <h2 className="text-4xl font-bold text-gray-900 mb-6">
                Our Mission & Vision
              </h2>
              <p className="text-lg text-gray-600 leading-relaxed">
                We believe healthcare providers should spend their time healing,
                not handling paperwork. That's why we've dedicated ourselves to
                creating the most efficient, accurate, and transparent medical
                billing solutions in the industry.
              </p>
            </div>

            <div className="space-y-6">
              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Target className="w-6 h-6 text-blue-600" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">
                    Our Mission
                  </h3>
                  <p className="text-gray-600">
                    Empowering healthcare providers with efficient, error-free
                    billing solutions that maximize revenue and minimize
                    administrative burden.
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Eye className="w-6 h-6 text-green-600" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">
                    Our Vision
                  </h3>
                  <p className="text-gray-600">
                    To be the leading medical billing partner that transforms
                    healthcare administration, enabling providers to focus
                    entirely on patient care.
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Heart className="w-6 h-6 text-purple-600" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">
                    Our Purpose
                  </h3>
                  <p className="text-gray-600">
                    Every claim we process, every denial we resolve, and every
                    dollar we recover serves one ultimate goal: better patient
                    care through streamlined healthcare operations.
                  </p>
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div
            className="relative"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <div className="bg-gradient-to-br from-blue-600 to-green-600 rounded-2xl p-8 text-white">
              <h3 className="text-2xl font-bold mb-6">
                Why We Started Claimify
              </h3>
              <blockquote className="text-lg italic leading-relaxed mb-6">
                &ldquo;After seeing countless healthcare providers struggle with
                billing inefficiencies, we knew there had to be a better way. We
                founded Claimify to bridge the gap between healthcare excellence
                and administrative efficiency.&rdquo;
              </blockquote>
              <div className="flex items-center space-x-4">
                <div className="relative w-16 h-16 rounded-full border-2 border-white overflow-hidden">
                  <Image
                    src="/placeholder.svg"
                    alt="Founder"
                    fill
                    className="object-cover"
                    sizes="64px"
                  />
                </div>
                <div>
                  <div className="font-semibold">Ali Bin Rashid, CEO</div>
                  <div className="text-sm opacity-90">Business Owner</div>
                </div>
              </div>
            </div>

            {/* Decorative elements */}
            <div className="absolute -top-4 -right-4 w-24 h-24 bg-blue-200 rounded-full opacity-20"></div>
            <div className="absolute -bottom-4 -left-4 w-32 h-32 bg-green-200 rounded-full opacity-20"></div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
