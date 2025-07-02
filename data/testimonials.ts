export interface Testimonial {
  name: string;
  title: string;
  content: string;
  rating: number;
  image: string;
}

export const testimonials: Testimonial[] = [
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
