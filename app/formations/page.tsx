import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import PageHeader from "@/components/PageHeader";
import FormationsSection from "@/components/FormationsSection";

export const metadata: Metadata = {
  title: "Nos Formations | NTEMO Consulting",
  description: "Les formations proposées par NTEMO Consulting.",
};

export default function Page() {
  return (
    <>
      <Navbar />
      <main className="flex-grow min-h-screen">
        <PageHeader
          strong="Nos"
          light="formations"
          crumb="Formations"
          intro="Des programmes pratiques en design graphique, photographie, audiovisuel, marketing digital, réseaux et développement web."
          image="https://images.unsplash.com/photo-1528901166007-3784c7dd3653?w=2000&q=80"
        />
        <FormationsSection />
      </main>
      <Footer />
    </>
  );
}
