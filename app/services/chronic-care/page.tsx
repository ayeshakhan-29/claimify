"use client";

import Header from "@/components/header";
import Footer from "@/components/footer";
import ServiceHero from "@/components/services/service-hero";
import ServiceOverview from "@/components/services/service-overview";
import ServiceFeatures from "@/components/services/service-features";
import ServiceCTA from "@/components/services/service-cta";
import { Heart, Users, Clock, FileText } from "lucide-react";

const features = [
  {
    icon: Heart,
    title: "Monthly Patient Check-Ins",
    description:
      "Regular patient outreach and health status monitoring for chronic condition management.",
  },
  {
    icon: Users,
    title: "Care Plan Coordination",
    description:
      "Comprehensive care plan development and coordination with your clinical team.",
  },
  {
    icon: Clock,
    title: "Detailed Time Tracking for CMS Compliance",
    description:
      "Accurate time tracking and documentation to ensure CMS compliance and maximize reimbursement.",
  },
  {
    icon: FileText,
    title: "Clinical Documentation",
    description:
      "Professional documentation of all patient interactions and care management activities.",
  },
];

export default function ChronicCarePage() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <ServiceHero
        badge="Patient Care"
        title="Improve Outcomes with Chronic Care Management (CCM)"
        description="Let Claimify manage care plans, follow-ups, and CMS documentation."
        ctaText="Learn About CCM Revenue Potential"
        stats={[
          { value: "$40-60", label: "Per Patient/Month" },
          { value: "20min", label: "Monthly Minimum" },
          { value: "100%", label: "CMS Compliant" },
          { value: "24/7", label: "Care Coordination" },
        ]}
      />
      <ServiceOverview
        title="Comprehensive Chronic Care Management"
        description="We help providers deliver consistent care to chronically ill patients by tracking interventions, managing communication, and improving compliance."
        highlights={[
          "Certified care coordinators with clinical backgrounds",
          "CMS-compliant documentation and reporting",
          "Integration with your existing care protocols",
          "Patient satisfaction and outcome tracking",
        ]}
      />
      <ServiceFeatures title="We Provide" features={features} />
      <ServiceCTA
        title="Generate New Revenue with CCM"
        description="CCM services can generate $40-60 per patient per month while improving patient outcomes."
        primaryCTA="Learn About CCM Revenue Potential"
        secondaryCTA="Download CCM Guide"
      />
      <Footer />
    </div>
  );
}
