"use client";

import Header from "@/components/header";
import Footer from "@/components/footer";
import ServiceHero from "@/components/services/service-hero";
import ServiceOverview from "@/components/services/service-overview";
import ServiceFeatures from "@/components/services/service-features";
import ServiceCTA from "@/components/services/service-cta";
import { Calendar, Shield, Phone, CheckCircle } from "lucide-react";

const features = [
  {
    icon: Calendar,
    title: "Appointment Scheduling",
    description:
      "Professional appointment scheduling and calendar management for your practice.",
  },
  {
    icon: Shield,
    title: "Insurance Eligibility Checks",
    description:
      "Real-time insurance verification and eligibility checks before patient visits.",
  },
  {
    icon: CheckCircle,
    title: "Patient Follow-ups",
    description:
      "Systematic patient follow-ups for appointments, treatments, and care coordination.",
  },
  {
    icon: Phone,
    title: "Voicemail & Call Management",
    description:
      "Professional call handling, message taking, and voicemail management services.",
  },
];

export default function FrontOfficePage() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <ServiceHero
        badge="Virtual Support"
        title="Virtual Front Office Assistant for Medical Practices"
        description="Delegate scheduling, calls, and insurance verifications to our trained team."
        ctaText="Book a Discovery Call"
        stats={[
          { value: "50%", label: "Cost Reduction" },
          { value: "8-5", label: "Business Hours" },
          { value: "100%", label: "HIPAA Trained" },
          { value: "24hr", label: "Response Time" },
        ]}
      />
      <ServiceOverview
        title="Extend Your Front Desk Virtually"
        description="Our HIPAA-trained virtual assistants serve as an extension of your front desk — handling calls, verifying insurance, scheduling patients, and more."
        highlights={[
          "HIPAA-trained and certified virtual assistants",
          "Seamless integration with your practice management system",
          "Professional communication with patients and staff",
          "Flexible scheduling to match your practice hours",
        ]}
      />
      <ServiceFeatures title="Duties Include" features={features} />
      <ServiceCTA
        title="Reduce Front Office Costs by 50%"
        description="Our virtual front office assistants provide professional support at a fraction of the cost of in-house staff."
        primaryCTA="Book a Discovery Call"
        secondaryCTA="View Service Packages"
      />
      <Footer />
    </div>
  );
}
