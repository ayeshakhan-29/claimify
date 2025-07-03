"use client";

import Header from "@/components/header";
import Footer from "@/components/footer";
import ServiceHero from "@/components/services/service-hero";
import ServiceOverview from "@/components/services/service-overview";
import ServiceFeatures from "@/components/services/service-features";
import ServiceCTA from "@/components/services/service-cta";
import { UserCheck, FileText, RefreshCw, Clock } from "lucide-react";

const features = [
  {
    icon: FileText,
    title: "NPI Registration & CAQH Setup",
    description:
      "Complete setup and management of your National Provider Identifier and CAQH profile.",
  },
  {
    icon: UserCheck,
    title: "Commercial and Government Payer Enrollment",
    description:
      "Enrollment with all major commercial insurers and government programs (Medicare, Medicaid).",
  },
  {
    icon: RefreshCw,
    title: "Re-Credentialing & Maintenance",
    description:
      "Ongoing maintenance and timely re-credentialing to ensure continuous network participation.",
  },
  {
    icon: Clock,
    title: "Expedited Processing",
    description:
      "Fast-track credentialing process with dedicated follow-up to minimize wait times.",
  },
];

export default function CredentialingPage() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <ServiceHero
        badge="Network Access"
        title="Fast & Accurate Provider Credentialing"
        description="Join payer networks faster and with less stress."
        ctaText="Get Credentialed Now"
        stats={[
          { value: "60-90", label: "Days to Complete" },
          { value: "100%", label: "Accuracy Rate" },
          { value: "200+", label: "Payer Networks" },
          { value: "24/7", label: "Status Updates" },
        ]}
      />
      <ServiceOverview
        title="Streamlined Credentialing Process"
        description="Our credentialing specialists work with you to ensure fast, accurate submission of credentials to all relevant payers and facilities."
        highlights={[
          "Experienced credentialing specialists",
          "Comprehensive payer network knowledge",
          "Regular status updates and communication",
          "Ongoing maintenance and re-credentialing support",
        ]}
      />
      <ServiceFeatures title="What We Handle" features={features} />
      <ServiceCTA
        title="Start Your Credentialing Process Today"
        description="Don't let credentialing delays impact your revenue. Get started with our expert team."
        primaryCTA="Get Credentialed Now"
        secondaryCTA="Download Credentialing Checklist"
      />
      <Footer />
    </div>
  );
}
