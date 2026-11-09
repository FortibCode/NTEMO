"use client";

import { motion, Variants } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { half, splitBlock } from "@/components/splitMotion";
import { ArrowUpRight, Clock, Target } from "lucide-react";

const U = (id: string) => `https://images.unsplash.com/photo-${id}?w=1400&q=80`;

const formations = [
  {
    title: "Design graphique",
    duration: "4 semaines",
    level: "Débutant → Professionnel",
    description: "Apprenez à maîtriser les outils phares (Photoshop, Illustrator) et concevez des chartes et identités visuelles percutantes.",
    image: U("1561070791-2526d30994b5"),
    alt: "Palette de couleurs et maquettes de design graphique",
  },
  {
    title: "Photographie",
    duration: "3 semaines",
    level: "Débutant → Intermédiaire",
    description: "Maîtrisez le réglage d'exposition, le cadrage, le stylisme photo en studio et le traitement d'image professionnel.",
    image: U("1616258288682-b428428213f3"),
    alt: "Photographe avec son appareil photo",
  },
  {
    title: "L'Audiovisuel",
    duration: "4 semaines",
    level: "Tous niveaux",
    description: "Formez-vous aux techniques de prise de vue, d'éclairage, d'enregistrement sonore et de montage vidéo professionnel.",
    image: "/hero/hero-4.jpg",
    alt: "Jeune femme travaillant dans une régie vidéo",
  },
  {
    title: "Gestion commerciale & Marketing digital",
    duration: "6 semaines",
    level: "Intermédiaire → Avancé",
    description: "Développez des techniques de vente efficaces et pilotez vos leviers digitaux pour démultiplier vos opportunités d'affaires.",
    image: U("1533750349088-cd871a92f312"),
    alt: "Bureau avec des documents de stratégie marketing",
  },
  {
    title: "Téléphonie IP & administration NOC",
    duration: "8 semaines",
    level: "Technique / Avancé",
    description: "Apprenez à déployer et superviser les infrastructures de VoIP d'entreprise et à piloter les centres d'opérations réseau (NOC).",
    image: U("1558494949-ef010cbdcc31"),
    alt: "Baie de serveurs et câblage réseau",
  },
  {
    title: "Développement Web",
    duration: "10 semaines",
    level: "Débutant → Développeur",
    description: "Apprenez HTML, CSS, JavaScript, la conception de bases de données et la création de sites internet modernes et adaptables.",
    image: U("1498050108023-c5249f4df085"),
    alt: "Ordinateur portable affichant du code",
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

export default function FormationsSection() {
  return (
    <section id="formations" className="py-24 overflow-hidden">
      <div className="container mx-auto px-4 md:px-8 space-y-16 md:space-y-24">
        {formations.map((f, index) => {
          const photoLeft = index % 2 === 1;
          return (
            <motion.div
              {...splitBlock}
              key={f.title}
              className="grid grid-cols-1 lg:grid-cols-2 min-h-[460px] max-w-6xl mx-auto"
            >
              {/* Text panel */}
              <motion.div
                {...half(photoLeft ? "right" : "left")}
                className="relative bg-gradient-to-br from-white to-[#e8f4fc] flex items-center"
              >
                <motion.div
                  variants={containerVariants}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true, margin: "-100px" }}
                  className="w-full px-6 sm:px-10 lg:px-12 xl:px-14 py-14 md:py-16"
                >
                  <motion.span
                    variants={itemVariants}
                    className="block text-xs font-semibold uppercase tracking-[0.25em] text-[#2488cd] mb-3"
                  >
                    Formation {String(index + 1).padStart(2, "0")}
                  </motion.span>

                  <motion.h2
                    variants={itemVariants}
                    className="font-heading font-black italic text-[#0a1d6e] text-3xl md:text-4xl leading-tight mb-5 uppercase"
                  >
                    {f.title}
                  </motion.h2>

                  <motion.div
                    variants={itemVariants}
                    className="flex flex-wrap gap-x-6 gap-y-2 text-sm font-medium text-[#0a1d6e] mb-6"
                  >
                    <span className="inline-flex items-center gap-2">
                      <Clock size={16} className="text-[#2488cd]" />
                      {f.duration}
                    </span>
                    <span className="inline-flex items-center gap-2">
                      <Target size={16} className="text-[#2488cd]" />
                      {f.level}
                    </span>
                  </motion.div>

                  <motion.p
                    variants={itemVariants}
                    className="text-slate-600 text-base md:text-lg leading-relaxed mb-10"
                  >
                    {f.description}
                  </motion.p>

                  <motion.div variants={itemVariants}>
                    <Link
                      href="/contact"
                      className="group inline-flex items-center gap-3 rounded-full border border-[#0a1d6e] px-6 py-3 text-sm font-semibold uppercase tracking-wider text-[#0a1d6e] transition-colors duration-300 hover:bg-[#0a1d6e] hover:text-white"
                    >
                      <ArrowUpRight size={18} className="transition-transform duration-300 group-hover:rotate-45" />
                      S&apos;inscrire
                    </Link>
                  </motion.div>
                </motion.div>
              </motion.div>

              {/* Photo */}
              <motion.div
                {...half(photoLeft ? "left" : "right", 0.05)}
                className={`relative min-h-[300px] sm:min-h-[400px] lg:min-h-0 ${photoLeft ? "lg:order-first" : ""}`}
              >
                <Image
                  src={f.image}
                  alt={f.alt}
                  fill
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  className="object-cover"
                />
              </motion.div>
            </motion.div>
          );
        })}
      </div>
    </section>
  );
}
