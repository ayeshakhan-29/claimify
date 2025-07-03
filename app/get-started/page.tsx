import Header from "@/components/header";
import Footer from "@/components/footer";
import GetStartedHeroSection from "@/components/get-started/get-started-hero-section";
import GetStartedStepsSection from "@/components/get-started/get-started-steps-section";
import GetStartedFormSection from "@/components/get-started/get-started-form-section";
import GetStartedBenefitsSection from "@/components/get-started/get-started-benefits-section";

export default function GetStartedPage() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <GetStartedHeroSection />
      <GetStartedStepsSection />
      <GetStartedFormSection />
      <GetStartedBenefitsSection />
      <Footer />
    </div>
  );
}
