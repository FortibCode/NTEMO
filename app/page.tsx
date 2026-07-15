import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import AboutSection from "@/components/AboutSection";
import MissionValuesSection from "@/components/MissionValuesSection";
import TeamSection from "@/components/TeamSection";
import ServicesSection from "@/components/ServicesSection";
import FormationsSection from "@/components/FormationsSection";
import FAQSection from "@/components/FAQSection";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <main className="flex-grow">
        <HeroSection />
        <AboutSection />
        <MissionValuesSection />
        <TeamSection />
        <ServicesSection />
        <FormationsSection />
        <FAQSection />
        <ContactSection />
      </main>
      <Footer />
    </>
  );
}
