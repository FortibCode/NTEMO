import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import PageHeader from "@/components/PageHeader";
import ContactSection from "@/components/ContactSection";

export const metadata: Metadata = {
  title: "Contact | NTEMO Consulting",
  description: "Contactez NTEMO Consulting pour discuter de votre projet.",
};

export default function Page() {
  return (
    <>
      <Navbar />
      <main className="flex-grow min-h-screen">
        <PageHeader
          strong="Nous"
          light="contacter"
          crumb="Contact"
          intro="Un projet, une question ou un besoin d'accompagnement ? Notre équipe vous répond rapidement."
          image="https://images.unsplash.com/photo-1521790361543-f645cf042ec4?w=2000&q=80"
        />
        <ContactSection />
      </main>
      <Footer />
    </>
  );
}
