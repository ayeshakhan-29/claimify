"use client";

import { Card, CardContent } from "@/components/ui/card";
import { Linkedin, Mail } from "lucide-react";
import { motion } from "framer-motion";
import { useState } from "react";
import Image from "next/image";

const teamMembers = [
  {
    name: "Sarah Mitchell",
    title: "CEO & Founder",
    image: "/placeholder.svg",
    bio: "15+ years in healthcare administration. Former Director of Revenue Cycle Management at Metro Health System.",
    expertise: [
      "Healthcare Administration",
      "Revenue Cycle Management",
      "Strategic Planning",
    ],
    linkedin: "#",
    email: "sarah@claimify.com",
  },
  {
    name: "Dr. Michael Chen",
    title: "Chief Medical Officer",
    image: "/placeholder.svg",
    bio: "Board-certified physician with extensive experience in medical coding and compliance.",
    expertise: ["Medical Coding", "HIPAA Compliance", "Clinical Documentation"],
    linkedin: "#",
    email: "michael@claimify.com",
  },
  {
    name: "Jennifer Rodriguez",
    title: "VP of Operations",
    image: "/placeholder.svg",
    bio: "AAPC certified coder with 12+ years managing billing operations for multi-specialty practices.",
    expertise: ["Medical Billing", "Denial Management", "Team Leadership"],
    linkedin: "#",
    email: "jennifer@claimify.com",
  },
  {
    name: "David Park",
    title: "Head of Technology",
    image: "/placeholder.svg",
    bio: "Former healthcare IT consultant specializing in HIPAA-compliant systems and data security.",
    expertise: ["Healthcare IT", "Data Security", "System Integration"],
    linkedin: "#",
    email: "david@claimify.com",
  },
  {
    name: "Lisa Thompson",
    title: "Director of Client Success",
    image: "/placeholder.svg?height=300&width=300",
    bio: "Dedicated to ensuring our clients achieve maximum revenue optimization and satisfaction.",
    expertise: [
      "Client Relations",
      "Process Optimization",
      "Training & Support",
    ],
    linkedin: "#",
    email: "lisa@claimify.com",
  },
  {
    name: "Robert Kim",
    title: "Senior Billing Specialist",
    image: "/placeholder.svg?height=300&width=300",
    bio: "AHIMA certified with expertise in complex claim resolution and insurance negotiations.",
    expertise: ["Complex Claims", "Insurance Relations", "Audit & Compliance"],
    linkedin: "#",
    email: "robert@claimify.com",
  },
];

const fadeInUp = {
  initial: { opacity: 0, y: 60 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6 },
};

const staggerContainer = {
  animate: {
    transition: {
      staggerChildren: 0.1,
    },
  },
};

export default function TeamSection() {
  const [hoveredMember, setHoveredMember] = useState<number | null>(null);

  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <motion.div className="text-center mb-16" {...fadeInUp}>
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Meet Our Team
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Our experienced professionals combine deep healthcare knowledge with
            cutting-edge technology to deliver exceptional results for your
            practice.
          </p>
        </motion.div>

        <motion.div
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
          variants={staggerContainer}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
        >
          {teamMembers.map((member, index) => (
            <motion.div
              key={index}
              variants={fadeInUp}
              onMouseEnter={() => setHoveredMember(index)}
              onMouseLeave={() => setHoveredMember(null)}
            >
              <Card className="h-full hover:shadow-xl transition-all duration-300 border-0 shadow-md overflow-hidden group">
                <div className="relative h-64">
                  <Image
                    src={member.image || "/placeholder.svg"}
                    alt={member.name}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-300"
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  <div className="absolute bottom-4 left-4 right-4 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <div className="flex space-x-2">
                      <a
                        href={member.linkedin}
                        className="w-8 h-8 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center hover:bg-white/30 transition-colors"
                      >
                        <Linkedin className="w-4 h-4" />
                      </a>
                      <a
                        href={`mailto:${member.email}`}
                        className="w-8 h-8 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center hover:bg-white/30 transition-colors"
                      >
                        <Mail className="w-4 h-4" />
                      </a>
                    </div>
                  </div>
                </div>
                <CardContent className="p-6">
                  <h3 className="text-xl font-semibold text-gray-900 mb-1">
                    {member.name}
                  </h3>
                  <p className="text-blue-600 font-medium mb-3">
                    {member.title}
                  </p>

                  {hoveredMember === index ? (
                    <motion.div
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: "auto" }}
                      exit={{ opacity: 0, height: 0 }}
                      className="space-y-3"
                    >
                      <p className="text-gray-600 text-sm leading-relaxed">
                        {member.bio}
                      </p>
                      <div>
                        <p className="text-xs font-semibold text-gray-700 mb-2">
                          Expertise:
                        </p>
                        <div className="flex flex-wrap gap-1">
                          {member.expertise.map((skill, skillIndex) => (
                            <span
                              key={skillIndex}
                              className="px-2 py-1 bg-blue-100 text-blue-700 text-xs rounded-full"
                            >
                              {skill}
                            </span>
                          ))}
                        </div>
                      </div>
                    </motion.div>
                  ) : (
                    <p className="text-gray-600 text-sm leading-relaxed line-clamp-2">
                      {member.bio}
                    </p>
                  )}
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
