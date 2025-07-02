"use client";

import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Star, ChevronLeft, ChevronRight } from "lucide-react";
import { motion } from "framer-motion";
import { useState } from "react";
import Image from "next/image";
import { testimonials, type Testimonial } from "@/data/testimonials";

const fadeInUp = {
  initial: { opacity: 0, y: 60 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6 },
};

const TestimonialCard = ({ testimonial }: { testimonial: Testimonial }) => (
  <Card className="bg-white border-0 shadow-lg">
    <CardContent className="p-12">
      <div className="text-center mb-8">
        <div className="flex justify-center mb-4">
          {Array.from({ length: testimonial.rating }).map((_, i) => (
            <Star key={i} className="w-6 h-6 text-yellow-400 fill-current" />
          ))}
        </div>
        <blockquote className="text-2xl text-gray-700 italic leading-relaxed mb-8">
          &ldquo;{testimonial.content}&rdquo;
        </blockquote>
        <div className="flex items-center justify-center space-x-4">
          <div className="relative w-16 h-16 rounded-full overflow-hidden">
            <Image
              src={testimonial.image}
              alt={testimonial.name}
              fill
              className="object-cover"
              sizes="64px"
              priority
            />
          </div>
          <div className="text-left">
            <div className="font-semibold text-gray-900">
              {testimonial.name}
            </div>
            <div className="text-gray-600">
              {testimonial.title}
            </div>
          </div>
        </div>
      </div>
    </CardContent>
  </Card>
);

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
            Don&apos;t just take our word for it. Here&apos;s what healthcare providers
            are saying about Claimify.
          </p>
        </motion.div>

        <motion.div className="max-w-4xl mx-auto" {...fadeInUp}>
          <TestimonialCard testimonial={testimonials[currentTestimonial]} />
          
          <div className="flex justify-center mt-8 space-x-4">
            <Button
              variant="outline"
              size="icon"
              onClick={prevTestimonial}
              aria-label="Previous testimonial"
            >
              <ChevronLeft className="h-5 w-5" />
            </Button>
            <Button
              variant="outline"
              size="icon"
              onClick={nextTestimonial}
              aria-label="Next testimonial"
            >
              <ChevronRight className="h-5 w-5" />
            </Button>
          </div>

          <div className="flex justify-center space-x-2 mt-6">
            {testimonials.map((_, index) => (
              <button
                key={index}
                className={`w-2 h-2 rounded-full transition-colors ${
                  index === currentTestimonial ? "bg-blue-600" : "bg-gray-300"
                }`}
                onClick={() => setCurrentTestimonial(index)}
                aria-label={`Go to testimonial ${index + 1}`}
              />
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
