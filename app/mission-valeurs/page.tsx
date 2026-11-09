import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import PageHeader from "@/components/PageHeader";
import MissionValuesSection from "@/components/MissionValuesSection";

export const metadata: Metadata = {
  title: "Mission & Valeurs | NTEMO Consulting",
  description: "La mission et les valeurs qui guident NTEMO Consulting.",
};

export default function Page() {
  return (
    <>
      <Navbar />
      <main className="flex-grow min-h-screen">
        <PageHeader
          strong="Notre mission"
          light="& nos valeurs"
          crumb="Mission & Valeurs"
          intro="Ce qui nous anime au quotidien et les principes qui guident chacune de nos actions auprès de nos clients."
          image="/hero/hero-3.jpg"
        />
        <MissionValuesSection />
      </main>
      <Footer />
    </>
  );
}
