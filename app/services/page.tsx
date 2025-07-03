import Header from "@/components/header";
import Footer from "@/components/footer";
import ServicesHeroSection from "@/components/services/services-hero-section";
import ServicesOverviewSection from "@/components/services/services-overview-section";
import ServicesGridSection from "@/components/services/services-grid-section";
import WhyClaimifySection from "@/components/services/why-claimify-section";
import ServicesCTASection from "@/components/services/services-cta-section";

export default function ServicesPage() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <ServicesHeroSection />
      <ServicesOverviewSection />
      <ServicesGridSection />
      <WhyClaimifySection />
      <ServicesCTASection />
      <Footer />
    </div>
  );
}
