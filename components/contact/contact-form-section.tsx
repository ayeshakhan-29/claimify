"use client";

import type React from "react";

import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Checkbox } from "@/components/ui/checkbox";
import { ArrowRight, CheckCircle } from "lucide-react";
import { motion } from "framer-motion";
import { useState } from "react";

export default function ContactFormSection() {
  const [formSubmitted, setFormSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission here
    setFormSubmitted(true);
    setTimeout(() => setFormSubmitted(false), 5000);
  };

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-16 items-start">
          {/* Form */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <Card className="shadow-xl border-0">
              <CardContent className="p-8">
                <h2 className="text-3xl font-bold text-gray-900 mb-6">
                  Get Your Free Consultation
                </h2>
                <p className="text-gray-600 mb-8">
                  Fill out the form below and we'll get back to you within 24
                  hours to discuss your practice needs.
                </p>

                {formSubmitted ? (
                  <div className="text-center py-12">
                    <CheckCircle className="w-16 h-16 text-green-600 mx-auto mb-4" />
                    <h3 className="text-2xl font-bold text-gray-900 mb-2">
                      Thank You!
                    </h3>
                    <p className="text-gray-600">
                      We've received your message and will get back to you
                      within 24 hours.
                    </p>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid md:grid-cols-2 gap-4">
                      <div>
                        <Label htmlFor="firstName">First Name *</Label>
                        <Input id="firstName" required className="mt-1" />
                      </div>
                      <div>
                        <Label htmlFor="lastName">Last Name *</Label>
                        <Input id="lastName" required className="mt-1" />
                      </div>
                    </div>

                    <div>
                      <Label htmlFor="email">Email Address *</Label>
                      <Input
                        id="email"
                        type="email"
                        required
                        className="mt-1"
                      />
                    </div>

                    <div>
                      <Label htmlFor="phone">Phone Number *</Label>
                      <Input id="phone" type="tel" required className="mt-1" />
                    </div>

                    <div>
                      <Label htmlFor="practiceType">Practice Type *</Label>
                      <Select required>
                        <SelectTrigger className="mt-1">
                          <SelectValue placeholder="Select your practice type" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="family-medicine">
                            Family Medicine
                          </SelectItem>
                          <SelectItem value="internal-medicine">
                            Internal Medicine
                          </SelectItem>
                          <SelectItem value="cardiology">Cardiology</SelectItem>
                          <SelectItem value="orthopedics">
                            Orthopedics
                          </SelectItem>
                          <SelectItem value="dermatology">
                            Dermatology
                          </SelectItem>
                          <SelectItem value="psychiatry">Psychiatry</SelectItem>
                          <SelectItem value="pediatrics">Pediatrics</SelectItem>
                          <SelectItem value="other">Other</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>

                    <div>
                      <Label htmlFor="practiceSize">Practice Size</Label>
                      <Select>
                        <SelectTrigger className="mt-1">
                          <SelectValue placeholder="Select practice size" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="solo">Solo Provider</SelectItem>
                          <SelectItem value="2-5">2-5 Providers</SelectItem>
                          <SelectItem value="6-10">6-10 Providers</SelectItem>
                          <SelectItem value="11-25">11-25 Providers</SelectItem>
                          <SelectItem value="25+">25+ Providers</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>

                    <div>
                      <Label htmlFor="services">Services Interested In</Label>
                      <div className="mt-2 space-y-2">
                        <div className="flex items-center space-x-2">
                          <Checkbox id="medical-billing" />
                          <Label htmlFor="medical-billing" className="text-sm">
                            Medical Billing
                          </Label>
                        </div>
                        <div className="flex items-center space-x-2">
                          <Checkbox id="rcm" />
                          <Label htmlFor="rcm" className="text-sm">
                            Revenue Cycle Management
                          </Label>
                        </div>
                        <div className="flex items-center space-x-2">
                          <Checkbox id="credentialing" />
                          <Label htmlFor="credentialing" className="text-sm">
                            Provider Credentialing
                          </Label>
                        </div>
                        <div className="flex items-center space-x-2">
                          <Checkbox id="front-office" />
                          <Label htmlFor="front-office" className="text-sm">
                            Front Office Support
                          </Label>
                        </div>
                      </div>
                    </div>

                    <div>
                      <Label htmlFor="message">
                        Tell us about your practice needs
                      </Label>
                      <Textarea
                        id="message"
                        rows={4}
                        className="mt-1"
                        placeholder="Describe your current challenges and what you're looking to improve..."
                      />
                    </div>

                    <Button
                      type="submit"
                      size="lg"
                      className="w-full bg-blue-600 hover:bg-blue-700"
                    >
                      Send Message
                      <ArrowRight className="ml-2 w-5 h-5" />
                    </Button>
                  </form>
                )}
              </CardContent>
            </Card>
          </motion.div>

          {/* Benefits */}
          <motion.div
            className="space-y-8"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <div>
              <h3 className="text-2xl font-bold text-gray-900 mb-6">
                What Happens Next?
              </h3>
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="w-8 h-8 bg-blue-600 text-white rounded-full flex items-center justify-center font-bold text-sm">
                    1
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-2">
                      Free Consultation Call
                    </h4>
                    <p className="text-gray-600">
                      We'll schedule a 30-minute call to understand your
                      practice needs and current challenges.
                    </p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <div className="w-8 h-8 bg-green-600 text-white rounded-full flex items-center justify-center font-bold text-sm">
                    2
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-2">
                      Custom Proposal
                    </h4>
                    <p className="text-gray-600">
                      We'll create a tailored solution with transparent pricing
                      based on your specific requirements.
                    </p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <div className="w-8 h-8 bg-purple-600 text-white rounded-full flex items-center justify-center font-bold text-sm">
                    3
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-2">
                      Quick Implementation
                    </h4>
                    <p className="text-gray-600">
                      Get started within 48 hours with our streamlined
                      onboarding process.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-br from-blue-50 to-green-50 rounded-2xl p-8">
              <h4 className="text-xl font-bold text-gray-900 mb-4">
                Why Choose Claimify?
              </h4>
              <ul className="space-y-3">
                <li className="flex items-center space-x-3">
                  <CheckCircle className="w-5 h-5 text-green-600" />
                  <span className="text-gray-700">99% claim accuracy rate</span>
                </li>
                <li className="flex items-center space-x-3">
                  <CheckCircle className="w-5 h-5 text-green-600" />
                  <span className="text-gray-700">40% faster payments</span>
                </li>
                <li className="flex items-center space-x-3">
                  <CheckCircle className="w-5 h-5 text-green-600" />
                  <span className="text-gray-700">
                    HIPAA-compliant platform
                  </span>
                </li>
                <li className="flex items-center space-x-3">
                  <CheckCircle className="w-5 h-5 text-green-600" />
                  <span className="text-gray-700">24/7 dedicated support</span>
                </li>
              </ul>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
