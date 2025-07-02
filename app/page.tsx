import Header from "@/components/header";
import HeroSection from "@/components/hero-section";
import TrustedBySection from "@/components/trusted-by-section";
import ServicesSection from "@/components/services-section";
import HowItWorksSection from "@/components/how-it-works-section";
import WhyChooseSection from "@/components/why-choose-section";
import TestimonialsSection from "@/components/testimonials-section";
import CTASection from "@/components/cta-section";
import Footer from "@/components/footer";

export default function LandingPage() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <HeroSection />
      <TrustedBySection />
      <ServicesSection />
      <HowItWorksSection />
      <WhyChooseSection />
      <TestimonialsSection />
      <CTASection />
      <Footer />
    </div>
  );
}
