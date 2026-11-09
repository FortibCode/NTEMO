"use client";

import { motion, Variants } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { half, splitBlock, splitBlockHoverClass, photoHoverClass } from "@/components/splitMotion";
import { ArrowUpRight, Ear, Palette, Shield, Target, Handshake } from "lucide-react";

const values = [
  {
    icon: Ear,
    title: "Écoute",
    description: "Comprendre vos besoins pour mieux vous accompagner.",
  },
  {
    icon: Palette,
    title: "Créativité",
    description: "Apporter des solutions originales, pertinentes et adaptées.",
  },
  {
    icon: Shield,
    title: "Professionnalisme",
    description: "Travailler avec rigueur, méthode et transparence.",
  },
  {
    icon: Target,
    title: "Impact",
    description: "Viser des résultats concrets et mesurables.",
  },
  {
    icon: Handshake,
    title: "Engagement",
    description: "Être un partenaire de confiance, à chaque étape de votre évolution.",
  },
];

const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.12, delayChildren: 0.2 } },
};

const itemVariants: Variants = {
  hidden: { opacity: 0, y: 60, scale: 0.95 },
  visible: { opacity: 1, y: 0, scale: 1, transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] } },
};

function Photo({ src, alt, fromLeft }: { src: string; alt: string; fromLeft?: boolean }) {
  return (
    <motion.div
      {...half(fromLeft ? "left" : "right", 0.05)}
      className={`relative overflow-hidden min-h-[320px] sm:min-h-[420px] lg:min-h-0 ${fromLeft ? "lg:order-first" : ""}`}
    >
      <Image src={src} alt={alt} fill sizes="(max-width: 1024px) 100vw, 50vw" className={`object-cover ${photoHoverClass}`} />
    </motion.div>
  );
}

function Panel({ children, fromRight }: { children: React.ReactNode; fromRight?: boolean }) {
  return (
    <motion.div
      {...half(fromRight ? "right" : "left")}
      className="relative bg-gradient-to-br from-white to-[#e8f4fc] flex items-center"
    >
      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        className="w-full px-6 sm:px-10 lg:px-12 xl:px-14 py-14 md:py-16"
      >
        {children}
      </motion.div>
    </motion.div>
  );
}

function Heading({ strong, light }: { strong: string; light: string }) {
  return (
    <motion.h2
      variants={itemVariants}
      className="font-heading text-[#0a1d6e] text-3xl md:text-4xl leading-tight mb-6 uppercase"
    >
      <span className="font-black italic">{strong}</span>{" "}
      <span className="font-light">{light}</span>
    </motion.h2>
  );
}

export default function MissionValuesSection() {
  return (
    <section id="mission-valeurs" className="py-24 overflow-hidden">
      <div className="container mx-auto px-4 md:px-8 space-y-16 md:space-y-24">

        {/* Mission: text left, photo right */}
        <motion.div {...splitBlock} className={`grid grid-cols-1 lg:grid-cols-2 min-h-[480px] max-w-6xl mx-auto ${splitBlockHoverClass}`}>
          <Panel>
            <Heading strong="Notre" light="mission" />
            <motion.p
              variants={itemVariants}
              className="text-slate-600 text-base md:text-lg leading-relaxed mb-10"
            >
              Aider nos clients à communiquer efficacement, à valoriser leur identité et à atteindre leurs objectifs à travers une stratégie claire, cohérente et impactante.
            </motion.p>
            <motion.div variants={itemVariants}>
              <Link
                href="/contact"
                className="group inline-flex items-center gap-3 rounded-full border border-[#0a1d6e] px-6 py-3 text-sm font-semibold uppercase tracking-wider text-[#0a1d6e] transition-colors duration-300 hover:bg-[#0a1d6e] hover:text-white"
              >
                <ArrowUpRight size={18} className="transition-transform duration-300 group-hover:rotate-45" />
                Travaillons ensemble
              </Link>
            </motion.div>
          </Panel>
          <Photo
            src="https://images.unsplash.com/photo-1739298061740-5ed03045b280?w=1400&q=80"
            alt="Équipe en réunion de stratégie"
          />
        </motion.div>

        {/* Values: photo left, list right */}
        <motion.div {...splitBlock} className={`grid grid-cols-1 lg:grid-cols-2 min-h-[480px] max-w-6xl mx-auto ${splitBlockHoverClass}`}>
          <Panel fromRight>
            <Heading strong="Nos" light="valeurs" />
            <ul className="space-y-5">
              {values.map(({ icon: Icon, title, description }) => (
                <motion.li
                  key={title}
                  variants={itemVariants}
                  whileHover={{ x: 10 }}
                  whileTap={{ scale: 0.97 }}
                  className="group/value flex items-start gap-4 cursor-default"
                >
                  <span className="flex-shrink-0 w-10 h-10 rounded-full bg-[#0a1d6e] text-white flex items-center justify-center transition-all duration-500 group-hover/value:rotate-[360deg] group-hover/value:bg-[#2488cd] group-hover/value:scale-110">
                    <Icon size={18} />
                  </span>
                  <div>
                    <h3 className="font-heading font-bold text-[#0a1d6e] text-lg leading-tight">
                      {title}
                    </h3>
                    <p className="text-slate-600 text-[15px] leading-relaxed">
                      {description}
                    </p>
                  </div>
                </motion.li>
              ))}
            </ul>
          </Panel>
          <Photo
            src="https://images.unsplash.com/photo-1531482615713-2afd69097998?w=1400&q=80"
            alt="Équipe travaillant ensemble sur ordinateur"
            fromLeft
          />
        </motion.div>

      </div>
    </section>
  );
}
