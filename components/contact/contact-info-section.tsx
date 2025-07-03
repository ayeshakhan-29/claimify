"use client";

import { Card, CardContent } from "@/components/ui/card";
import {
  Phone,
  Mail,
  MapPin,
  Clock,
  MessageCircle,
  Calendar,
} from "lucide-react";
import { motion } from "framer-motion";

const contactMethods = [
  {
    icon: Phone,
    title: "Call Us",
    description: "Speak directly with our billing experts",
    contact: "(555) 123-4567",
    action: "Call Now",
    color: "blue",
  },
  {
    icon: Mail,
    title: "Email Us",
    description: "Send us your questions anytime",
    contact: "hello@claimify.com",
    action: "Send Email",
    color: "green",
  },
  {
    icon: MessageCircle,
    title: "Live Chat",
    description: "Chat with our support team",
    contact: "Available 9AM-6PM EST",
    action: "Start Chat",
    color: "purple",
  },
  {
    icon: Calendar,
    title: "Schedule Meeting",
    description: "Book a convenient time to talk",
    contact: "30-minute consultation",
    action: "Book Now",
    color: "orange",
  },
];

export default function ContactInfoSection() {
  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Multiple Ways to Reach Us
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Choose the contact method that works best for you. We're here to
            help optimize your medical billing.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {contactMethods.map((method, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
            >
              <Card className="h-full hover:shadow-lg transition-shadow duration-300 border-0 shadow-md group">
                <CardContent className="p-8 text-center">
                  <div
                    className={`w-16 h-16 bg-${method.color}-100 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:bg-${method.color}-600 transition-colors duration-300`}
                  >
                    <method.icon
                      className={`w-8 h-8 text-${method.color}-600 group-hover:text-white transition-colors duration-300`}
                    />
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">
                    {method.title}
                  </h3>
                  <p className="text-gray-600 mb-4">{method.description}</p>
                  <div className="font-semibold text-gray-900 mb-4">
                    {method.contact}
                  </div>
                  <button
                    className={`text-${method.color}-600 hover:text-${method.color}-700 font-medium transition-colors`}
                  >
                    {method.action} →
                  </button>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        {/* Office Information */}
        <motion.div
          className="bg-white rounded-2xl p-8 shadow-lg"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h3 className="text-2xl font-bold text-gray-900 mb-6">
                Visit Our Office
              </h3>
              <div className="space-y-4">
                <div className="flex items-start space-x-4">
                  <MapPin className="w-6 h-6 text-blue-600 mt-1" />
                  <div>
                    <div className="font-semibold text-gray-900">Address</div>
                    <div className="text-gray-600">
                      123 Healthcare Plaza
                      <br />
                      Suite 456
                      <br />
                      New York, NY 10001
                    </div>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <Clock className="w-6 h-6 text-green-600 mt-1" />
                  <div>
                    <div className="font-semibold text-gray-900">
                      Business Hours
                    </div>
                    <div className="text-gray-600">
                      Monday - Friday: 8:00 AM - 6:00 PM EST
                      <br />
                      Saturday: 9:00 AM - 2:00 PM EST
                      <br />
                      Sunday: Closed
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="bg-gray-100 rounded-lg h-64 flex items-center justify-center">
              <div className="text-center text-gray-500">
                <MapPin className="w-12 h-12 mx-auto mb-2" />
                <div>Interactive Map</div>
                <div className="text-sm">Coming Soon</div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
