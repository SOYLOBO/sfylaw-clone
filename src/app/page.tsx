import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import SubheadingBar from "@/components/SubheadingBar";
import AboutSection from "@/components/AboutSection";
import PracticeAreas from "@/components/PracticeAreas";
import ComplexLegalSection from "@/components/ComplexLegalSection";
import LawyersLawyerSection from "@/components/LawyersLawyerSection";
import PublicationsSection from "@/components/PublicationsSection";
import TestimonialsSection from "@/components/TestimonialsSection";
import CTABar from "@/components/CTABar";
import ContactFormSection from "@/components/ContactFormSection";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <HeroSection />
        <SubheadingBar />
        <AboutSection />
        <PracticeAreas />
        <ComplexLegalSection />
        <LawyersLawyerSection />
        <PublicationsSection />
        <TestimonialsSection />
        <CTABar />
        <ContactFormSection />
      </main>
      <Footer />
    </>
  );
}
