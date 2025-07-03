"use client";

import Header from "@/components/header";
import Footer from "@/components/footer";
import ServiceHero from "@/components/services/service-hero";
import ServiceOverview from "@/components/services/service-overview";
import ServiceFeatures from "@/components/services/service-features";
import ServiceCTA from "@/components/services/service-cta";
import { FileText, CheckCircle, Clock, TrendingUp } from "lucide-react";

const features = [
  {
    icon: FileText,
    title: "Charge Entry & Claim Submission",
    description:
      "Accurate charge entry with fast, electronic claim submission to all major payers.",
  },
  {
    icon: CheckCircle,
    title: "ICD-10 & CPT Coding Compliance",
    description:
      "Certified coders ensure 100% compliance with latest coding standards and regulations.",
  },
  {
    icon: Clock,
    title: "Claims Tracking & Follow-Up",
    description:
      "Proactive tracking and follow-up on all submitted claims to ensure timely payment.",
  },
  {
    icon: TrendingUp,
    title: "Payment Posting & Patient Statements",
    description:
      "Accurate payment posting and professional patient statement generation.",
  },
];

export default function MedicalBillingPage() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <ServiceHero
        badge="Core Service"
        title="Medical Billing Services Built for Accuracy & Speed"
        description="Claimify ensures 99% clean claims with faster reimbursements so you can focus on patient care."
        ctaText="Book a Free Consultation"
        stats={[
          { value: "99%", label: "Clean Claims Rate" },
          { value: "48hrs", label: "Claim Submission" },
          { value: "40%", label: "Faster Payments" },
          { value: "24/7", label: "Support Available" },
        ]}
      />
      <ServiceOverview
        title="End-to-End Medical Billing Excellence"
        description="At Claimify, our end-to-end medical billing solution eliminates errors, reduces denials, and accelerates cash flow. Whether you're a solo provider or a multi-specialty practice, we tailor our services to your needs."
        highlights={[
          "99% first-pass claim acceptance rate",
          "Certified medical coders with 10+ years experience",
          "Real-time claim tracking and reporting",
          "Dedicated account manager for your practice",
        ]}
      />
      <ServiceFeatures title="Key Features" features={features} />
      <ServiceCTA
        title="Ready to Optimize Your Medical Billing?"
        description="Join hundreds of healthcare providers who trust Claimify for accurate, fast medical billing services."
        primaryCTA="Book a Free Consultation"
        secondaryCTA="View Pricing"
      />
      <Footer />
    </div>
  );
}
