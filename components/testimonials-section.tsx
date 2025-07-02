"use client";

import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Star, ChevronLeft, ChevronRight } from "lucide-react";
import { motion } from "framer-motion";
import { useState } from "react";

const testimonials = [
  {
    name: "Dr. Sarah Johnson",
    title: "Family Medicine Physician",
    content:
      "Claimify increased our revenue by 35% in just 6 months. Their team is incredibly professional and responsive.",
    rating: 5,
    image: "/images/doctor1.jpg",
  },
  {
    name: "Michael Chen",
    title: "Practice Manager, Cardiology Associates",
    content:
      "The transparency and reporting tools are game-changers. We finally have clear visibility into our billing process.",
    rating: 5,
    image: "/images/doc3.jpg",
  },
  {
    name: "Dr. Emily Rodriguez",
    title: "Orthopedic Surgeon",
    content:
      "Outstanding service! Denials dropped by 60% and our cash flow improved dramatically.",
    rating: 5,
    image: "/images/doc4.jpg",
  },
];

const fadeInUp = {
  initial: { opacity: 0, y: 60 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6 },
};

export default function TestimonialsSection() {
  const [currentTestimonial, setCurrentTestimonial] = useState(0);

  const nextTestimonial = () => {
    setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentTestimonial(
      (prev) => (prev - 1 + testimonials.length) % testimonials.length
    );
  };

  return (
    <section id="testimonials" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <motion.div className="text-center mb-16" {...fadeInUp}>
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            What Our Clients Say
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Don't just take our word for it. Here's what healthcare providers
            are saying about Claimify.
          </p>
        </motion.div>

        <motion.div className="max-w-4xl mx-auto" {...fadeInUp}>
          <Card className="bg-white border-0 shadow-lg">
            <CardContent className="p-12">
              <div className="text-center mb-8">
                <div className="flex justify-center mb-4">
                  {[...Array(testimonials[currentTestimonial].rating)].map(
                    (_, i) => (
                      <Star
                        key={i}
                        className="w-6 h-6 text-yellow-400 fill-current"
                      />
                    )
                  )}
                </div>
                <blockquote className="text-2xl text-gray-700 italic leading-relaxed mb-8">
                  "{testimonials[currentTestimonial].content}"
                </blockquote>
                <div className="flex items-center justify-center space-x-4">
                  <img
                    src={
                      testimonials[currentTestimonial].image ||
                      "/images/doc3.jpg"
                    }
                    alt={testimonials[currentTestimonial].name}
                    className="w-16 h-16 rounded-full"
                  />
                  <div className="text-left">
                    <div className="font-semibold text-gray-900">
                      {testimonials[currentTestimonial].name}
                    </div>
                    <div className="text-gray-600">
                      {testimonials[currentTestimonial].title}
                    </div>
                  </div>
                </div>
              </div>

              <div className="flex justify-center space-x-4">
                <Button
                  variant="outline"
                  size="sm"
                  onClick={prevTestimonial}
                  className="rounded-full w-10 h-10 p-0 bg-transparent"
                >
                  <ChevronLeft className="w-4 h-4" />
                </Button>
                <Button
                  variant="outline"
                  size="sm"
                  onClick={nextTestimonial}
                  className="rounded-full w-10 h-10 p-0 bg-transparent"
                >
                  <ChevronRight className="w-4 h-4" />
                </Button>
              </div>

              <div className="flex justify-center space-x-2 mt-6">
                {testimonials.map((_, index) => (
                  <button
                    key={index}
                    className={`w-2 h-2 rounded-full transition-colors ${
                      index === currentTestimonial
                        ? "bg-blue-600"
                        : "bg-gray-300"
                    }`}
                    onClick={() => setCurrentTestimonial(index)}
                  />
                ))}
              </div>
            </CardContent>
          </Card>
        </motion.div>
      </div>
    </section>
  );
}
