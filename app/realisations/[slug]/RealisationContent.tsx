"use client";

import { use } from "react";
import Link from "next/link";
import { slideInOnLoad } from "@/components/splitMotion";
import { motion, Variants } from "framer-motion";
import { ArrowLeft, ArrowUpRight, Check, ChevronRight } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import GooglePlayButton from "@/components/GooglePlayButton";
import { realisationsData } from "./realisations-data";

const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.1, delayChildren: 0.15 } },
};

const itemVariants: Variants = {
  hidden: { opacity: 0, y: 60, scale: 0.95 },
  visible: { opacity: 1, y: 0, scale: 1, transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] } },
};

export default function RealisationContent({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = use(params);
  const projet = realisationsData[slug];
  const others = Object.entries(realisationsData).filter(([s]) => s !== slug);

  if (!projet) {
    return (
      <>
        <Navbar />
        <main className="min-h-screen flex flex-col items-center justify-center px-4 pt-28 text-center">
          <h1 className="text-3xl font-black mb-4 uppercase text-white">Projet non trouvé</h1>
          <p className="text-slate-300 mb-8">Désolé, ce projet n&apos;existe pas ou a été déplacé.</p>
          <Link href="/realisations" className="inline-flex items-center gap-2 text-white underline underline-offset-4">
            <ArrowLeft size={18} />
            Retour aux réalisations
          </Link>
        </main>
        <Footer />
      </>
    );
  }

  return (
    <>
      <Navbar />
      <main className="flex-grow min-h-screen pt-32 md:pt-36 pb-24 overflow-x-hidden">
        <div className="container mx-auto px-4 md:px-8">
          {/* Breadcrumb */}
          <nav aria-label="Fil d'Ariane" className="max-w-6xl mx-auto mb-8">
            <ol className="flex flex-wrap items-center gap-2 text-sm text-white/70">
              <li><Link href="/" className="hover:text-white transition-colors">Accueil</Link></li>
              <li aria-hidden="true"><ChevronRight size={14} /></li>
              <li><Link href="/realisations" className="hover:text-white transition-colors">Réalisations</Link></li>
              <li aria-hidden="true"><ChevronRight size={14} /></li>
              <li aria-current="page" className="text-white">{projet.title}</li>
            </ol>
          </nav>

          {/* App sheet */}
          <div className="grid grid-cols-1 lg:grid-cols-2 max-w-6xl mx-auto">
            <motion.div
              {...slideInOnLoad("left")}
              className={`bg-gradient-to-br ${projet.tint} flex items-center justify-center p-10 md:p-16 min-h-[340px]`}
            >
              <motion.img
                src={projet.image}
                alt={`Logo ${projet.title}`}
                initial={{ scale: 0.6, opacity: 0, rotate: -6 }}
                animate={{ scale: 1, opacity: 1, rotate: 0 }}
                transition={{ duration: 0.9, ease: "easeOut", delay: 0.15 }}
                className="w-full max-w-[380px] h-auto object-contain mix-blend-multiply"
              />
            </motion.div>

            <motion.div {...slideInOnLoad("right", 0.05)} className="bg-gradient-to-br from-white to-[#e8f4fc] flex items-center">
              <motion.div
                variants={containerVariants}
                initial="hidden"
                animate="visible"
                className="w-full px-6 sm:px-10 lg:px-12 xl:px-14 py-14 md:py-16"
              >
                <motion.div variants={itemVariants} className="flex flex-wrap items-center gap-3 mb-4">
                  <span className="text-xs font-semibold uppercase tracking-[0.25em] text-[#2488cd]">
                    {projet.category}
                  </span>
                  {projet.status === "live" && (
                    <span className="inline-flex items-center gap-1.5 text-xs font-semibold text-emerald-700">
                      <span className="w-2 h-2 rounded-full bg-emerald-500" />
                      Disponible sur le Play Store
                    </span>
                  )}
                </motion.div>

                <motion.h1
                  variants={itemVariants}
                  className="font-heading font-black italic uppercase text-[#0a1d6e] text-4xl md:text-5xl leading-tight mb-2"
                >
                  {projet.title}
                </motion.h1>
                <motion.p variants={itemVariants} className="text-[#0a1d6e]/80 font-medium text-lg mb-6">
                  {projet.subtitle}
                </motion.p>

                <motion.p variants={itemVariants} className="text-slate-600 text-base md:text-lg leading-relaxed mb-8">
                  {projet.description}
                </motion.p>

                <motion.h2 variants={itemVariants} className="font-heading font-bold uppercase text-[#0a1d6e] text-sm tracking-[0.2em] mb-4">
                  Fonctionnalités
                </motion.h2>
                <motion.ul variants={itemVariants} className="space-y-2.5 mb-10">
                  {projet.features.map((f) => (
                    <li key={f} className="flex items-start gap-3 text-slate-700">
                      <Check size={18} className="text-[#2488cd] mt-0.5 flex-shrink-0" />
                      {f}
                    </li>
                  ))}
                </motion.ul>

                {projet.playStoreUrl && (
                  <motion.div variants={itemVariants}>
                    <GooglePlayButton href={projet.playStoreUrl} appName={projet.title} />
                  </motion.div>
                )}
              </motion.div>
            </motion.div>
          </div>

          {/* Other projects */}
          {others.length > 0 && (
            <div className="max-w-6xl mx-auto mt-16">
              <h2 className="font-heading font-bold uppercase text-white text-sm tracking-[0.2em] mb-5">
                Autres réalisations
              </h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                {others.map(([s, o]) => (
                  <Link
                    key={s}
                    href={`/realisations/${s}`}
                    className="group flex items-center gap-5 bg-white p-4 hover:bg-[#e8f4fc] transition-colors"
                  >
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img src={o.image} alt="" className="w-20 h-20 object-contain mix-blend-multiply flex-shrink-0" />
                    <div className="min-w-0">
                      <p className="font-heading font-black italic uppercase text-[#0a1d6e] text-lg">{o.title}</p>
                      <p className="text-slate-500 text-sm">{o.subtitle}</p>
                    </div>
                    <ArrowUpRight size={20} className="ml-auto text-[#0a1d6e] transition-transform duration-300 group-hover:rotate-45" />
                  </Link>
                ))}
              </div>
            </div>
          )}

          {/* CTA */}
          <div className="max-w-6xl mx-auto mt-16 bg-[#0a1d6e] text-white px-8 md:px-14 py-12 flex flex-col md:flex-row md:items-center md:justify-between gap-8">
            <div className="max-w-2xl">
              <h2 className="font-heading uppercase text-2xl md:text-3xl leading-tight mb-3">
                <span className="font-black italic">Votre application</span>{" "}
                <span className="font-light">sera la prochaine</span>
              </h2>
              <p className="text-white/80 leading-relaxed">
                Vous avez un projet d&apos;application ou de site ? Parlons-en et construisons-le ensemble.
              </p>
            </div>
            <Link
              href="/contact"
              className="group inline-flex items-center gap-3 self-start md:self-auto rounded-full border border-white px-6 py-3 text-sm font-semibold uppercase tracking-wider text-white transition-colors duration-300 hover:bg-white hover:text-[#0a1d6e]"
            >
              <ArrowUpRight size={18} className="transition-transform duration-300 group-hover:rotate-45" />
              Nous contacter
            </Link>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
