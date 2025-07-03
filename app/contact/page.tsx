import Header from "@/components/header";
import Footer from "@/components/footer";
import ContactHeroSection from "@/components/contact/contact-hero-section";
import ContactFormSection from "@/components/contact/contact-form-section";
import ContactInfoSection from "@/components/contact/contact-info-section";
import ContactFAQSection from "@/components/contact/contact-faq-section";

export default function ContactPage() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <ContactHeroSection />
      <ContactFormSection />
      <ContactInfoSection />
      <ContactFAQSection />
      <Footer />
    </div>
  );
}
