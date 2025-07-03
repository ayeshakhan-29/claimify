"use client";

import Header from "@/components/header";
import Footer from "@/components/footer";
import ServiceHero from "@/components/services/service-hero";
import ServiceOverview from "@/components/services/service-overview";
import ServiceFeatures from "@/components/services/service-features";
import ServiceCTA from "@/components/services/service-cta";
import { Search, AlertTriangle, Shield, TrendingUp } from "lucide-react";

const features = [
  {
    icon: AlertTriangle,
    title: "Identify Missed Charges or Overbilling",
    description:
      "Comprehensive review to identify revenue leaks and compliance risks in your billing process.",
  },
  {
    icon: Shield,
    title: "Ensure HIPAA and Payer Policy Compliance",
    description:
      "Thorough compliance check against HIPAA regulations and individual payer policies.",
  },
  {
    icon: TrendingUp,
    title: "Increase First-Pass Claim Acceptance Rates",
    description:
      "Optimize your billing process to achieve higher first-pass acceptance rates.",
  },
  {
    icon: Search,
    title: "Detailed Revenue Analysis",
    description:
      "In-depth analysis of your revenue cycle to identify optimization opportunities.",
  },
];

export default function BillingAuditsPage() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <ServiceHero
        badge="Revenue Protection"
        title="Medical Billing Audits That Save You Revenue"
        description="Identify billing leaks and compliance risks with our detailed audit services."
        ctaText="Schedule an Audit Call"
        stats={[
          { value: "15%", label: "Avg Revenue Recovery" },
          { value: "100%", label: "Compliance Rate" },
          { value: "7-14", label: "Days to Complete" },
          { value: "500+", label: "Audits Completed" },
        ]}
      />
      <ServiceOverview
        title="Protect Your Revenue with Expert Audits"
        description="Regular billing audits are essential to ensure your revenue cycle is error-free and compliant. Our certified auditors review coding accuracy, claim timelines, payer rules, and more."
        highlights={[
          "Certified medical auditors with healthcare expertise",
          "Comprehensive review of coding accuracy and compliance",
          "Detailed reporting with actionable recommendations",
          "Follow-up support to implement improvements",
        ]}
      />
      <ServiceFeatures title="Audit Benefits" features={features} />
      <ServiceCTA
        title="Discover Hidden Revenue in Your Practice"
        description="Our comprehensive billing audits typically identify 10-20% additional revenue opportunities."
        primaryCTA="Schedule an Audit Call"
        secondaryCTA="Download Audit Checklist"
      />
      <Footer />
    </div>
  );
}
