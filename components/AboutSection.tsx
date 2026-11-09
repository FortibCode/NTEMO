"use client";

import { motion, Variants } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { half, splitBlock } from "@/components/splitMotion";
import { ArrowUpRight } from "lucide-react";

const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.15, delayChildren: 0.2 },
  },
};

const itemVariants: Variants = {
  hidden: { opacity: 0, y: 60, scale: 0.95 },
  visible: { opacity: 1, y: 0, scale: 1, transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] } },
};

export default function AboutSection() {
  return (
    <section id="about" className="py-24 overflow-hidden">
      <div className="container mx-auto px-4 md:px-8">
      <motion.div {...splitBlock} className="grid grid-cols-1 lg:grid-cols-2 min-h-[520px] max-w-6xl mx-auto">

        {/* Left: brand panel */}
        <motion.div
          {...half("left")}
          className="relative bg-gradient-to-br from-white to-[#e8f4fc] flex items-center"
        >
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            className="w-full px-6 sm:px-10 lg:px-12 xl:px-14 py-14 md:py-16"
          >
            {/* Logo lockup */}
            <motion.div variants={itemVariants} className="mb-10">
              <Image
                src="/logo-ntemo-officiel.svg"
                alt="NTEMO Consulting"
                width={142}
                height={112}
                className="h-20 md:h-24 w-auto"
              />
            </motion.div>

            <motion.p
              variants={itemVariants}
              className="text-slate-600 text-base md:text-lg leading-relaxed mb-5"
            >
              <strong className="text-[#0a1d6e] font-bold">NTEMO Consulting</strong>{" "}est une agence de communication et de conseil stratégique dédiée à l&apos;accompagnement des entreprises, institutions et porteurs de projets dans la construction, la valorisation et le développement de leur image de marque.
            </motion.p>

            <motion.p
              variants={itemVariants}
              className="text-slate-600 text-base md:text-lg leading-relaxed mb-12"
            >
              Nous plaçons l&apos;humain, la créativité et la performance au cœur de nos actions pour vous offrir des solutions sur mesure, efficaces et innovantes.
            </motion.p>

            <motion.div variants={itemVariants}>
              <Link
                href="/#services"
                className="group inline-flex items-center gap-3 rounded-full border border-[#0a1d6e] px-6 py-3 text-sm font-semibold uppercase tracking-wider text-[#0a1d6e] transition-colors duration-300 hover:bg-[#0a1d6e] hover:text-white"
              >
                <ArrowUpRight
                  size={18}
                  className="transition-transform duration-300 group-hover:rotate-45"
                />
                En savoir plus
              </Link>
            </motion.div>
          </motion.div>
        </motion.div>

        {/* Right: photo */}
        <motion.div
          {...half("right", 0.05)}
          className="relative min-h-[320px] sm:min-h-[420px] lg:min-h-0"
        >
          <Image
            src="https://images.unsplash.com/photo-1739298061707-cefee19941b7?w=1400&q=80"
            alt="Réunion de travail d'une équipe autour d'une table"
            fill
            sizes="(max-width: 1024px) 100vw, 50vw"
            className="object-cover"
          />
        </motion.div>

      </motion.div>
      </div>
    </section>
  );
}
