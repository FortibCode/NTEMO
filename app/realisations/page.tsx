"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ExternalLink } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const REALISATIONS = [
  {
    slug: "projet-1",
    title: "Projet NTEMO Branding",
    image: "/LOGO-1.png",
  },
  {
    slug: "projet-2",
    title: "Application NTEMO Consulting",
    image: "/LOGO-2.jpeg",
  },
  // {
  //   slug: "projet-3",
  //   title: "Stratégie Digitale NTEMO",
  //   image: "/LOGO-3.jpeg",
  // },
  // {
  //   slug: "projet-4",
  //   title: "Site Web NTEMO",
  //   image: "/LOGO-4.jpeg",
  // },
  // {
  //   slug: "projet-5",
  //   title: "Solution Entreprise NTEMO",
  //   image: "/LOGO-5.jpeg",
  // },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.15 },
  },
} as const;

const itemVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: "easeOut" },
  },
} as const;

export default function RealisationsPage() {
  return (
    <>
      <Navbar />
      <main className="min-h-screen bg-[#01030c] pt-28 pb-20 relative overflow-hidden">
        {/* Global ambient glow */}
        <div className="fixed inset-0 pointer-events-none z-0">
          <div className="absolute top-0 left-1/4 w-[600px] h-[600px] bg-[#34c4eb]/5 rounded-full blur-[140px]" />
          <div className="absolute bottom-1/3 right-0 w-[500px] h-[500px] bg-[#1e40af]/8 rounded-full blur-[120px]" />
        </div>

        {/* Banner Hero */}
        <section className="relative py-16 md:py-20 overflow-hidden z-10">
          <div className="absolute inset-0 pointer-events-none">
            <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-[#34c4eb]/10 rounded-full blur-[120px]" />
            <div className="absolute inset-0 bg-[radial-gradient(rgba(52,196,235,0.03)_1px,transparent_1px)] [background-size:24px_24px]" />
          </div>

          <div className="container mx-auto px-4 md:px-8 relative z-10">
            <motion.span
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="inline-block py-2 px-4 rounded-full bg-[#34c4eb]/10 text-[#34c4eb] font-bold text-xs uppercase tracking-[0.2em] mb-5 border border-[#34c4eb]/20"
            >
              Nos Projets
            </motion.span>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.05 }}
              className="text-4xl md:text-6xl font-black font-heading tracking-tight mb-4 text-white"
            >
              Nos Réalisations
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="text-lg md:text-xl text-slate-400 font-medium max-w-2xl leading-relaxed"
            >
              Découvrez nos projets récents et le travail de notre équipe. Chaque réalisation reflète notre engagement envers l&apos;excellence et l&apos;innovation.
            </motion.p>
          </div>
        </section>

        {/* Projects Grid */}
        <section className="container mx-auto px-4 md:px-8 mt-10 relative z-10">
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            {REALISATIONS.map((projet) => (
              <motion.div
                key={projet.slug}
                variants={itemVariants}
              >
                <Link
                  href={`/realisations/${projet.slug}`}
                  className="group relative block bg-[#01030c] border border-white/5 rounded-[2rem] overflow-hidden hover:border-[#34c4eb]/50 transition-all duration-500 hover:shadow-2xl hover:shadow-[#34c4eb]/15 hover:-translate-y-1 h-full"
                >
                  {/* Circle with image filling 100% */}
                  <div className="relative h-72 md:h-96 w-full flex items-center justify-center p-4 md:p-6">
                    {/* Background ambient glow */}
                    <div className="absolute inset-0 bg-gradient-to-br from-[#34c4eb]/5 via-transparent to-[#1e40af]/5" />
                    
                    {/* Large filled circle */}
                    <div className="relative z-10 w-full h-full max-w-[280px] md:max-w-[320px] rounded-full overflow-hidden border-2 border-white/10 group-hover:border-[#34c4eb]/50 transition-all duration-500 shadow-xl shadow-black/50 group-hover:shadow-[#34c4eb]/20">
                      <img
                        src={projet.image}
                        alt={projet.title}
                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700 ease-out"
                      />
                    </div>
                  </div>

                  {/* Hover overlay - centered button on the circle */}
                  <div className="absolute inset-0 rounded-[2rem] opacity-0 group-hover:opacity-100 transition-all duration-500 flex items-center justify-center">
                    <div className="w-full h-full max-w-[280px] md:max-w-[320px] rounded-full bg-[#01030c]/70 backdrop-blur-[2px] flex items-center justify-center scale-90 opacity-0 group-hover:scale-100 group-hover:opacity-100 transition-all duration-500">
                      <span className="inline-flex items-center gap-2 bg-[#34c4eb] text-slate-900 px-8 py-4 rounded-full font-bold text-base shadow-2xl shadow-[#34c4eb]/40 hover:bg-white hover:shadow-[#34c4eb]/60 transition-all duration-300">
                        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"/><circle cx="12" cy="12" r="3"/></svg>
                        Voir le projet
                      </span>
                    </div>
                  </div>
                </Link>
              </motion.div>
            ))}
          </motion.div>
        </section>

        {/* CTA Section */}
        <section className="container mx-auto px-4 md:px-8 mt-20 md:mt-28 relative z-10">
          <div className="bg-gradient-to-br from-slate-900 to-[#01030c] text-white p-10 md:p-16 rounded-[3rem] shadow-2xl relative overflow-hidden flex flex-col md:flex-row md:items-center md:justify-between gap-8 border border-white/10">
            <div className="absolute inset-0 pointer-events-none">
              <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-[#34c4eb]/10 rounded-full blur-[100px]" />
              <div className="absolute bottom-0 left-0 w-[300px] h-[300px] bg-[#1e40af]/10 rounded-full blur-[80px]" />
            </div>
            <div className="relative z-10 max-w-2xl">
              <h2 className="text-3xl md:text-4xl font-black font-heading mb-4 leading-tight text-white">
                Vous avez un projet en tête ?
              </h2>
              <p className="text-slate-400 font-medium leading-relaxed">
                Discutons de votre vision et concrétisons-la ensemble. Notre équipe est prête à relever vos défis les plus ambitieux.
              </p>
            </div>
            <div className="relative z-10 flex flex-wrap gap-4 flex-shrink-0">
              <Link
                href="/#contact"
                className="flex items-center gap-3 bg-[#34c4eb] hover:bg-[#2488cd] text-slate-900 px-8 py-4 rounded-full font-bold text-base transition-colors shadow-lg shadow-[#34c4eb]/20"
              >
                <ExternalLink size={20} />
                <span>Nous contacter</span>
              </Link>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}

