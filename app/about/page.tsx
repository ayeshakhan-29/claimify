"use client";

import Header from "@/components/header";
import Footer from "@/components/footer";
import MissionVisionSection from "@/components/about/mission-vision-section";
import OurStorySection from "@/components/about/our-story-section";
import TeamSection from "@/components/about/team-section";
import CertificationsSection from "@/components/about/certifications-section";
import ValuesSection from "@/components/about/values-section";
import AboutHeroSection from "@/components/about/about-hero-section";

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <AboutHeroSection />
      <MissionVisionSection />
      <OurStorySection />
      <ValuesSection />
      <TeamSection />
      <CertificationsSection />
      <Footer />
    </div>
  );
}
