import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import PageHeader from "@/components/PageHeader";
import FAQSection from "@/components/FAQSection";

export const metadata: Metadata = {
  title: "Questions fréquentes | NTEMO Consulting",
  description: "Les réponses aux questions les plus fréquentes sur NTEMO Consulting.",
};

export default function Page() {
  return (
    <>
      <Navbar />
      <main className="flex-grow min-h-screen">
        <PageHeader
          strong="Questions"
          light="fréquentes"
          crumb="FAQ"
          intro="Les réponses aux questions que l'on nous pose le plus souvent sur nos services, nos méthodes et nos tarifs."
          image="/hero/hero-2.jpg"
        />
        <FAQSection />
      </main>
      <Footer />
    </>
  );
}
