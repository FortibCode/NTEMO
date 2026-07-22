"use client";

import { use } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowLeft, Construction, Clock, Sparkles, Hammer, Cog, ExternalLink } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { realisationsData } from "./realisations-data";

const floatingAnimation = {
  initial: { y: 0 },
  animate: {
    y: [-10, 10, -10],
    transition: {
      duration: 4,
      repeat: Infinity,
      ease: "easeInOut" as const,
    },
  },
};

const spinAnimation = {
  initial: { rotate: 0 },
  animate: {
    rotate: 360,
    transition: {
      duration: 8,
      repeat: Infinity,
      ease: "linear" as const,
    },
  },
};

const pulseAnimation = {
  initial: { scale: 1, opacity: 0.6 },
  animate: {
    scale: [1, 1.15, 1],
    opacity: [0.6, 1, 0.6],
    transition: {
      duration: 2.5,
      repeat: Infinity,
      ease: "easeInOut" as const,
    },
  },
};

export default function RealisationContent({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = use(params);
  const projet = realisationsData[slug];

  if (!projet) {
    return (
      <>
        <Navbar />
        <div className="min-h-screen flex flex-col items-center justify-center bg-[#01030c] text-white px-4">
          <h1 className="text-3xl font-black mb-4">Projet non trouvé</h1>
          <p className="text-slate-400 mb-8">Désolé, ce projet n&apos;existe pas ou a été déplacé.</p>
          <Link href="/realisations" className="flex items-center gap-2 bg-[#34c4eb] text-slate-900 px-6 py-3 rounded-full font-bold">
            <ArrowLeft size={18} />
            Retour aux réalisations
          </Link>
        </div>
        <Footer />
      </>
    );
  }

  return (
    <>
      <Navbar />
      <main className="min-h-screen bg-[#01030c] pt-28 pb-20 relative overflow-hidden">
        <div className="fixed inset-0 pointer-events-none z-0">
          <div className="absolute top-0 left-1/4 w-[600px] h-[600px] bg-[#34c4eb]/5 rounded-full blur-[140px]" />
          <div className="absolute bottom-1/3 right-0 w-[500px] h-[500px] bg-[#1e40af]/8 rounded-full blur-[120px]" />
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] bg-[#34c4eb]/3 rounded-full blur-[160px]" />
        </div>

        <div className="container mx-auto px-4 md:px-8 relative z-10 mb-8">
          <Link href="/realisations" className="inline-flex items-center gap-2 text-sm text-[#34c4eb] hover:text-white font-bold transition-colors">
            <ArrowLeft size={16} />
            Retour aux réalisations
          </Link>
        </div>

        <section className="relative z-10">
          <div className="container mx-auto px-4 md:px-8">
            <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-20">
              <motion.div initial={{ opacity: 0, x: -50 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.7, ease: "easeOut" }} className="w-full lg:w-1/2">
                <div className="relative">
                  <motion.div variants={pulseAnimation} initial="initial" animate="animate" className="absolute -inset-10 bg-[#34c4eb]/20 rounded-full blur-[60px]" />
                  <div className="relative bg-slate-900/60 border border-white/10 rounded-[2.5rem] p-8 md:p-12 backdrop-blur-sm">
                    <motion.img src={projet.image} alt={projet.title} className="w-full h-auto object-contain max-h-[400px] mx-auto" whileHover={{ scale: 1.05 }} transition={{ duration: 0.3 }} />
                  </div>
                </div>
              </motion.div>
              <motion.div initial={{ opacity: 0, x: 50 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.7, ease: "easeOut", delay: 0.2 }} className="w-full lg:w-1/2">
                <motion.span initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.3 }} className="inline-block py-2 px-4 rounded-full bg-amber-500/10 text-amber-400 font-bold text-xs uppercase tracking-[0.2em] mb-5 border border-amber-500/20">
                  <span className="flex items-center gap-2"><Construction size={12} />En cours de production</span>
                </motion.span>
                <motion.h1 initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.35 }} className="text-4xl md:text-5xl lg:text-6xl font-black font-heading tracking-tight mb-3 text-white">{projet.title}</motion.h1>
                <motion.p initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.4 }} className="text-xl text-[#34c4eb] font-semibold mb-8">{projet.subtitle}</motion.p>
                <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.45 }} className="bg-white/[0.04] border border-white/10 rounded-[2rem] p-8 relative overflow-hidden">
                  <div className="absolute -top-20 -right-20 w-[200px] h-[200px] bg-amber-500/5 rounded-full blur-[60px]" />
                  <div className="relative z-10">
                    <div className="flex items-center gap-3 mb-4">
                      <motion.div variants={spinAnimation} initial="initial" animate="animate"><Cog size={24} className="text-amber-400" /></motion.div>
                      <h3 className="text-xl font-black text-white font-heading">Production en cours</h3>
                    </div>
                    <p className="text-slate-300 leading-relaxed mb-6">Ce projet est actuellement en cours de d&eacute;veloppement par notre &eacute;quipe d&apos;experts. Nous travaillons avec soin pour vous offrir un r&eacute;sultat &agrave; la hauteur de vos attentes.</p>
                    <div className="flex flex-wrap gap-4 mb-6">
                      <motion.div variants={floatingAnimation} initial="initial" animate="animate" className="flex items-center gap-2 bg-amber-500/10 border border-amber-500/20 rounded-full px-4 py-2"><Clock size={14} className="text-amber-400" /><span className="text-amber-300 text-sm font-semibold">Bient&ocirc;t disponible</span></motion.div>
                      <motion.div variants={floatingAnimation} initial="initial" animate="animate" style={{ animationDelay: "1s" } as React.CSSProperties} className="flex items-center gap-2 bg-[#34c4eb]/10 border border-[#34c4eb]/20 rounded-full px-4 py-2"><Hammer size={14} className="text-[#34c4eb]" /><span className="text-[#34c4eb] text-sm font-semibold">En d&eacute;veloppement</span></motion.div>
                      <motion.div variants={floatingAnimation} initial="initial" animate="animate" style={{ animationDelay: "2s" } as React.CSSProperties} className="flex items-center gap-2 bg-purple-500/10 border border-purple-500/20 rounded-full px-4 py-2"><Sparkles size={14} className="text-purple-400" /><span className="text-purple-300 text-sm font-semibold">Bient&ocirc;t d&eacute;voil&eacute;</span></motion.div>
                    </div>
                    <p className="text-slate-500 text-sm italic">Merci de votre int&eacute;r&ecirc;t ! Revenez bient&ocirc;t pour d&eacute;couvrir ce projet en version finale.</p>
                  </div>
                </motion.div>
              </motion.div>
            </div>
          </div>
        </section>

        <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
          <motion.div variants={floatingAnimation} initial="initial" animate="animate" className="absolute top-1/4 left-[15%] w-3 h-3 rounded-full bg-[#34c4eb]/30 blur-sm" />
          <motion.div variants={floatingAnimation} initial="initial" animate="animate" style={{ animationDelay: "1.5s" } as React.CSSProperties} className="absolute top-1/3 right-[20%] w-2 h-2 rounded-full bg-amber-400/30 blur-sm" />
          <motion.div variants={floatingAnimation} initial="initial" animate="animate" style={{ animationDelay: "0.8s" } as React.CSSProperties} className="absolute bottom-1/4 left-[30%] w-4 h-4 rounded-full bg-purple-500/20 blur-sm" />
          <motion.div variants={floatingAnimation} initial="initial" animate="animate" style={{ animationDelay: "2.2s" } as React.CSSProperties} className="absolute bottom-1/3 right-[25%] w-2 h-2 rounded-full bg-[#34c4eb]/20 blur-sm" />
        </div>

        {/* CTA Section */}
        <section className="container mx-auto px-4 md:px-8 mt-20 md:mt-28 relative z-10">
          <div className="bg-gradient-to-br from-slate-900 to-[#01030c] text-white p-10 md:p-16 rounded-[3rem] shadow-2xl relative overflow-hidden flex flex-col md:flex-row md:items-center md:justify-between gap-8 border border-white/10">
            <div className="absolute inset-0 pointer-events-none">
              <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-[#34c4eb]/10 rounded-full blur-[100px]" />
              <div className="absolute bottom-0 left-0 w-[300px] h-[300px] bg-[#1e40af]/10 rounded-full blur-[80px]" />
            </div>
            <div className="relative z-10 max-w-2xl">
              <h2 className="text-3xl md:text-4xl font-black font-heading mb-4 leading-tight text-white">Vous avez un projet en t&ecirc;te ?</h2>
              <p className="text-slate-400 font-medium leading-relaxed">Discutons de votre vision et concr&eacute;tisons-la ensemble. Notre &eacute;quipe est pr&ecirc;te &agrave; relever vos d&eacute;fis les plus ambitieux.</p>
            </div>
            <div className="relative z-10 flex flex-wrap gap-4 flex-shrink-0">
              <Link href="/#contact" className="flex items-center gap-3 bg-[#34c4eb] hover:bg-[#2488cd] text-slate-900 px-8 py-4 rounded-full font-bold text-base transition-colors shadow-lg shadow-[#34c4eb]/20">
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
