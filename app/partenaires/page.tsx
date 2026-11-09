import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import PageHeader from "@/components/PageHeader";
import PartnersSection from "@/components/PartnersSection";

export const metadata: Metadata = {
  title: "Nos Partenaires | NTEMO Consulting",
  description: "Les partenaires qui font confiance à NTEMO Consulting.",
};

export default function Page() {
  return (
    <>
      <Navbar />
      <main className="flex-grow min-h-screen">
        <PageHeader
          strong="Nos"
          light="partenaires"
          crumb="Partenaires"
          intro="Ils nous font confiance et avancent à nos côtés pour bâtir des marques fortes et durables."
          image="https://images.unsplash.com/photo-1521790797524-b2497295b8a0?w=2000&q=80"
        />
        <PartnersSection />
      </main>
      <Footer />
    </>
  );
}
