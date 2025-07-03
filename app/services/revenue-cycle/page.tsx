"use client";

import Header from "@/components/header";
import Footer from "@/components/footer";
import ServiceHero from "@/components/services/service-hero";
import ServiceOverview from "@/components/services/service-overview";
import ServiceFeatures from "@/components/services/service-features";
import ServiceCTA from "@/components/services/service-cta";
import { CheckSquare, RefreshCw, AlertCircle, BarChart3 } from "lucide-react";

const features = [
  {
    icon: CheckSquare,
    title: "Eligibility & Benefits Verification",
    description:
      "Real-time insurance verification to prevent claim denials and patient billing issues.",
  },
  {
    icon: RefreshCw,
    title: "Claims Lifecycle Management",
    description:
      "Complete management of claims from submission through payment posting.",
  },
  {
    icon: AlertCircle,
    title: "Denial Analysis & Appeals",
    description:
      "Expert denial management with systematic appeals process to maximize recovery.",
  },
  {
    icon: BarChart3,
    title: "Real-Time Financial Reporting",
    description:
      "Comprehensive dashboards and reports providing complete visibility into your revenue cycle.",
  },
];

export default function RevenueCyclePage() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <ServiceHero
        badge="Complete Solution"
        title="Streamlined Revenue Cycle Management (RCM)"
        description="From patient intake to final payment, we optimize your financial workflows."
        ctaText="Get a Demo"
        stats={[
          { value: "30%", label: "Revenue Increase" },
          { value: "15", label: "Days Average A/R" },
          { value: "95%", label: "Collection Rate" },
          { value: "2.1%", label: "Denial Rate" },
        ]}
      />
      <ServiceOverview
        title="Complete Revenue Cycle Optimization"
        description="Claimify's RCM services reduce administrative overhead while increasing collections. We handle every step in the billing lifecycle so you can focus on delivering care."
        highlights={[
          "End-to-end revenue cycle management",
          "Dedicated RCM specialists for your account",
          "Advanced analytics and performance tracking",
          "Seamless integration with your practice management system",
        ]}
      />
      <ServiceFeatures title="What's Included" features={features} />
      <ServiceCTA
        title="Transform Your Revenue Cycle Today"
        description="See how our RCM services can reduce your administrative burden while increasing collections."
        primaryCTA="Get a Demo"
        secondaryCTA="Download RCM Guide"
      />
      <Footer />
    </div>
  );
}
