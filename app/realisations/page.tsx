"use client";

import Link from "next/link";
import { half, splitBlock } from "@/components/splitMotion";
import { motion, Variants } from "framer-motion";
import { ArrowUpRight, Check } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import PageHeader from "@/components/PageHeader";
import GooglePlayButton from "@/components/GooglePlayButton";
import { realisationsData } from "./[slug]/realisations-data";

const projects = Object.entries(realisationsData).map(([slug, p]) => ({ slug, ...p }));

const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.12, delayChildren: 0.2 } },
};

const itemVariants: Variants = {
  hidden: { opacity: 0, y: 60, scale: 0.95 },
  visible: { opacity: 1, y: 0, scale: 1, transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] } },
};

export default function RealisationsPage() {
  return (
    <>
      <Navbar />
      <main className="flex-grow min-h-screen">
        <PageHeader
          strong="Nos"
          light="réalisations"
          crumb="Réalisations"
          intro="Des applications conçues par notre équipe et déjà disponibles sur le Google Play Store."
          image="/hero/hero-3.jpg"
        />

        <section className="py-24 overflow-hidden">
          <div className="container mx-auto px-4 md:px-8 space-y-16 md:space-y-24">
            {projects.map((p, index) => {
              const logoLeft = index % 2 === 1;
              return (
                <motion.div
                  {...splitBlock}
                  key={p.slug}
                  className="grid grid-cols-1 lg:grid-cols-2 min-h-[480px] max-w-6xl mx-auto"
                >
                  {/* Text panel */}
                  <motion.div
                    {...half(logoLeft ? "right" : "left")}
                    className="bg-gradient-to-br from-white to-[#e8f4fc] flex items-center"
                  >
                    <motion.div
                      variants={containerVariants}
                      initial="hidden"
                      whileInView="visible"
                      viewport={{ once: true, margin: "-100px" }}
                      className="w-full px-6 sm:px-10 lg:px-12 xl:px-14 py-14 md:py-16"
                    >
                      <motion.div variants={itemVariants} className="flex flex-wrap items-center gap-3 mb-4">
                        <span className="text-xs font-semibold uppercase tracking-[0.25em] text-[#2488cd]">
                          {p.category}
                        </span>
                        {p.status === "live" && (
                          <span className="inline-flex items-center gap-1.5 text-xs font-semibold text-emerald-700">
                            <span className="w-2 h-2 rounded-full bg-emerald-500" />
                            En ligne
                          </span>
                        )}
                      </motion.div>

                      <motion.h2
                        variants={itemVariants}
                        className="font-heading font-black italic uppercase text-[#0a1d6e] text-3xl md:text-4xl leading-tight mb-2"
                      >
                        {p.title}
                      </motion.h2>
                      <motion.p variants={itemVariants} className="text-[#0a1d6e]/80 font-medium mb-5">
                        {p.subtitle}
                      </motion.p>

                      <motion.p variants={itemVariants} className="text-slate-600 text-base md:text-lg leading-relaxed mb-6">
                        {p.description}
                      </motion.p>

                      <motion.ul variants={itemVariants} className="space-y-2 mb-10">
                        {p.features.map((f) => (
                          <li key={f} className="flex items-start gap-3 text-slate-700">
                            <Check size={18} className="text-[#2488cd] mt-0.5 flex-shrink-0" />
                            {f}
                          </li>
                        ))}
                      </motion.ul>

                      <motion.div variants={itemVariants} className="flex flex-wrap items-center gap-4">
                        {p.playStoreUrl && <GooglePlayButton href={p.playStoreUrl} appName={p.title} />}
                        <Link
                          href={`/realisations/${p.slug}`}
                          className="group inline-flex items-center gap-3 rounded-full border border-[#0a1d6e] px-6 py-3 text-sm font-semibold uppercase tracking-wider text-[#0a1d6e] transition-colors duration-300 hover:bg-[#0a1d6e] hover:text-white"
                        >
                          <ArrowUpRight size={18} className="transition-transform duration-300 group-hover:rotate-45" />
                          Voir le projet
                        </Link>
                      </motion.div>
                    </motion.div>
                  </motion.div>

                  {/* Logo side */}
                  <motion.div
                    {...half(logoLeft ? "left" : "right", 0.05)}
                    className={`relative bg-gradient-to-br ${p.tint} flex items-center justify-center p-10 md:p-16 min-h-[320px] ${
                      logoLeft ? "lg:order-first" : ""
                    }`}
                  >
                    <motion.img
                      src={p.image}
                      alt={`Logo ${p.title}`}
                      initial={{ scale: 0.6, opacity: 0, rotate: -6 }}
                      whileInView={{ scale: 1, opacity: 1, rotate: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.9, ease: "easeOut", delay: 0.2 }}
                      className="w-full max-w-[340px] h-auto object-contain mix-blend-multiply"
                    />
                  </motion.div>
                </motion.div>
              );
            })}
          </div>
        </section>

        {/* CTA */}
        <section className="pb-24">
          <div className="container mx-auto px-4 md:px-8">
            <div className="max-w-6xl mx-auto bg-[#0a1d6e] text-white px-8 md:px-14 py-12 md:py-14 flex flex-col md:flex-row md:items-center md:justify-between gap-8">
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
        </section>
      </main>
      <Footer />
    </>
  );
}
