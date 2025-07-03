"use client";

import Header from "@/components/header";
import Footer from "@/components/footer";
import ServiceHero from "@/components/services/service-hero";
import ServiceOverview from "@/components/services/service-overview";
import ServiceFeatures from "@/components/services/service-features";
import ServiceCTA from "@/components/services/service-cta";
import { Globe, Search, Target, Star } from "lucide-react";

const features = [
  {
    icon: Globe,
    title: "HIPAA-Compliant Website Design",
    description:
      "Professional, mobile-responsive websites designed specifically for healthcare providers.",
  },
  {
    icon: Search,
    title: "Local SEO & Google Business Optimization",
    description:
      "Optimize your online presence to attract local patients searching for healthcare services.",
  },
  {
    icon: Target,
    title: "Paid Ads & Retargeting",
    description:
      "Strategic paid advertising campaigns with HIPAA-compliant retargeting to attract new patients.",
  },
  {
    icon: Star,
    title: "Reputation & Review Management",
    description:
      "Professional reputation management to build trust and attract more patients to your practice.",
  },
];

export default function DigitalMarketingPage() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <ServiceHero
        badge="Growth Strategy"
        title="Healthcare-Focused Digital Marketing Solutions"
        description="Grow your practice with patient-focused SEO, ads, and local strategy."
        ctaText="Request a Free Marketing Audit"
        stats={[
          { value: "150%", label: "Avg Patient Increase" },
          { value: "3-6", label: "Months to Results" },
          { value: "100%", label: "HIPAA Compliant" },
          { value: "24/7", label: "Campaign Monitoring" },
        ]}
      />
      <ServiceOverview
        title="Attract More Patients with Digital Marketing"
        description="We help healthcare providers attract new patients through targeted digital strategies tailored to their specialty and location."
        highlights={[
          "Healthcare marketing specialists with industry expertise",
          "HIPAA-compliant marketing strategies and tools",
          "Local market knowledge and patient behavior insights",
          "Comprehensive analytics and ROI tracking",
        ]}
      />
      <ServiceFeatures title="Services Include" features={features} />
      <ServiceCTA
        title="Grow Your Practice with Digital Marketing"
        description="Our healthcare-focused digital marketing strategies help practices increase patient volume by an average of 150%."
        primaryCTA="Request a Free Marketing Audit"
        secondaryCTA="View Case Studies"
      />
      <Footer />
    </div>
  );
}
