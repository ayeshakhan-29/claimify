"use client";

import Header from "@/components/header";
import Footer from "@/components/footer";
import ServiceHero from "@/components/services/service-hero";
import ServiceOverview from "@/components/services/service-overview";
import ServiceFeatures from "@/components/services/service-features";
import ServiceCTA from "@/components/services/service-cta";
import { Activity, Smartphone, Eye, TrendingUp } from "lucide-react";

const features = [
  {
    icon: Smartphone,
    title: "Device Setup & Data Capture",
    description:
      "Complete setup and management of remote monitoring devices with automated data capture.",
  },
  {
    icon: Eye,
    title: "24/7 Monitoring Support",
    description:
      "Round-the-clock monitoring with alert management and clinical escalation protocols.",
  },
  {
    icon: TrendingUp,
    title: "Reimbursement Optimization",
    description:
      "Maximize RPM reimbursements with proper documentation and billing optimization.",
  },
  {
    icon: Activity,
    title: "Clinical Data Analysis",
    description:
      "Professional analysis of patient data with actionable insights for clinical decision-making.",
  },
];

export default function RemoteMonitoringPage() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <ServiceHero
        badge="Technology Enabled"
        title="Remote Patient Monitoring (RPM) Services"
        description="Provide real-time care with real-time data."
        ctaText="See How RPM Pays Off"
        stats={[
          { value: "$50-100", label: "Per Patient/Month" },
          { value: "24/7", label: "Monitoring" },
          { value: "16", label: "Days Minimum" },
          { value: "30%", label: "Better Outcomes" },
        ]}
      />
      <ServiceOverview
        title="Advanced Remote Patient Monitoring"
        description="Our RPM support includes device integration, data review, alerts management, and CMS reporting — all while helping you improve outcomes and earn new revenue."
        highlights={[
          "FDA-approved monitoring devices and platforms",
          "Clinical staff trained in RPM protocols",
          "Seamless EHR integration and data flow",
          "Comprehensive patient education and support",
        ]}
      />
      <ServiceFeatures title="Features" features={features} />
      <ServiceCTA
        title="Transform Patient Care with RPM"
        description="RPM services improve patient outcomes while generating significant new revenue streams for your practice."
        primaryCTA="See How RPM Pays Off"
        secondaryCTA="Schedule RPM Demo"
      />
      <Footer />
    </div>
  );
}
