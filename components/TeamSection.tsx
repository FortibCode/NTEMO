"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence, Variants } from "framer-motion";
import { X } from "lucide-react";

type Member = {
  name: string;
  role: string;
  quote: string;
  image: string;
  objectPosition: string;
};

const teamMembers: Member[] = [
  {
    name: "Dieu-Merci BOUELANKANA",
    role: "CEO Fondateur de NTEMO Consulting",
    quote: "« Dans le vaste univers de la communication, les mots sont des ponts et les idées des voiles ; une entreprise qui sait écouter avant de parler, qui sait créer avant de vendre, et qui sait inspirer avant de convaincre, devient plus qu'une marque : elle devient une voix qui résonne dans le cœur des gens. »",
    image: "/boulankana.jpg",
    objectPosition: "object-top",
  },
  {
    name: "Edgard BAVOUMINA",
    role: "Directeur des Opérations de NTEMO Consulting",
    quote: "« Une entreprise de communication et de marketing, les idées sont des étincelles et les campagnes des flammes, mais sans organisation, elles s'éteignent avant d'éclairer. Le rôle des opérations est de transformer l'inspiration en action, de donner une structure aux rêves et une cadence aux ambitions. »",
    image: "/edgard.jpg",
    objectPosition: "object-top",
  },
  {
    name: "Gaste Istardi NDOMBA",
    role: "Responsable Commercial de NTEMO Consulting",
    quote: "« Le Responsable Commercial est le bâtisseur de ponts entre la vision et le marché. Car vendre ne consiste pas seulement à conclure des contrats, mais à créer des relations durables, à écouter les besoins cachés derrière les mots, et à transformer chaque échange en une promesse tenue. »",
    image: "/gatse.jpg",
    objectPosition: "object-top",
  },
  {
    name: "Glade NTOLANY",
    role: "Responsable technique et suivi de projets de NTEMO Consulting",
    quote: "« Le Responsable Technique et Suivi de Projet est le garant de la promesse faite au client. Car piloter un projet ne consiste pas seulement à respecter des délais et des budgets, mais à bâtir des solutions solides, à anticiper les complexités invisibles derrière les lignes de code ou les plans, et à transformer chaque défi technique en une réussite partagée. »",
    image: "/glade-fixed.jpg",
    objectPosition: "object-center",
  },
];

// Left half of the team slides in from the left, right half from the right,
// and they meet in the middle (same motion as the split panels).
const cardVariants: Variants = {
  hidden: (i: number) => ({ opacity: 0, x: i < teamMembers.length / 2 ? -180 : 180 }),
  visible: (i: number) => {
    const half = teamMembers.length / 2;
    // cards closest to the centre arrive last so the row "closes" in the middle
    const fromEdge = i < half ? i : teamMembers.length - 1 - i;
    return {
      opacity: 1,
      x: 0,
      transition: { type: "spring", stiffness: 55, damping: 16, mass: 0.9, delay: fromEdge * 0.12 },
    };
  },
};

export default function TeamSection() {
  const [selected, setSelected] = useState<Member | null>(null);

  useEffect(() => {
    if (!selected) return;
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && setSelected(null);
    window.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => {
      window.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [selected]);

  return (
    <section id="equipe" className="py-16 md:py-28 relative overflow-hidden">
      <div className="container mx-auto px-4 md:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 md:mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-3xl md:text-5xl font-black text-white font-heading tracking-tight uppercase"
          >
            Notre Équipe
          </motion.h2>
        </div>

        {/* Team Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-x-8 gap-y-12 max-w-6xl mx-auto">
          {teamMembers.map((member, index) => (
            <motion.article
              key={member.name}
              custom={index}
              variants={cardVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-60px" }}
              className="max-w-[320px] w-full mx-auto"
            >
              {/* Photo with hover excerpt */}
              <button
                type="button"
                onClick={() => setSelected(member)}
                aria-label={`Lire la citation de ${member.name}`}
                className="group relative block w-full aspect-[4/5] overflow-hidden bg-slate-800 text-left focus:outline-none focus-visible:ring-2 focus-visible:ring-[#34c4eb]"
              >
                <img
                  src={member.image}
                  alt={member.name}
                  className={`absolute inset-0 w-full h-full object-cover ${member.objectPosition} transition-transform duration-700 group-hover:scale-105`}
                />

                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent opacity-0 group-hover:opacity-100 group-focus-visible:opacity-100 transition-opacity duration-500" />

                <div className="absolute inset-x-0 bottom-0 p-6 flex flex-col items-center text-center opacity-0 translate-y-4 group-hover:opacity-100 group-hover:translate-y-0 group-focus-visible:opacity-100 group-focus-visible:translate-y-0 transition-all duration-500">
                  <p className="text-white/90 text-sm leading-relaxed line-clamp-3 mb-4">
                    {member.quote}
                  </p>
                  <span className="inline-block bg-slate-700/90 px-5 py-2 text-sm text-white hover:bg-[#2488cd] transition-colors">
                    lire la suite
                  </span>
                </div>
              </button>

              {/* Name & role */}
              <div className="text-center mt-5 px-2">
                <h3 className="text-lg md:text-xl font-semibold text-white font-heading">
                  {member.name}
                </h3>
                <p className="mt-1 text-slate-300 text-base leading-snug">
                  {member.role}
                </p>
              </div>
            </motion.article>
          ))}
        </div>
      </div>

      {/* Full quote modal */}
      <AnimatePresence>
        {selected && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[60] flex items-center justify-center bg-black/70 backdrop-blur-sm p-4"
            onClick={() => setSelected(null)}
          >
            <motion.div
              role="dialog"
              aria-modal="true"
              aria-labelledby="team-modal-title"
              initial={{ opacity: 0, y: 30, scale: 0.97 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: 30, scale: 0.97 }}
              transition={{ duration: 0.3, ease: "easeOut" }}
              onClick={(e) => e.stopPropagation()}
              className="relative w-full max-w-4xl max-h-[90vh] overflow-y-auto bg-gradient-to-br from-white to-[#e8f4fc] shadow-2xl grid grid-cols-1 sm:grid-cols-[minmax(0,5fr)_minmax(0,7fr)]"
            >
              <button
                type="button"
                onClick={() => setSelected(null)}
                aria-label="Fermer"
                className="absolute top-4 right-4 z-10 p-1.5 text-white sm:text-[#0a1d6e] hover:text-[#2488cd] transition-colors"
              >
                <X size={24} />
              </button>

              <div className="relative aspect-[4/5] sm:aspect-auto sm:min-h-[460px]">
                <img
                  src={selected.image}
                  alt={selected.name}
                  className={`absolute inset-0 w-full h-full object-cover ${selected.objectPosition}`}
                />
              </div>

              <figure className="px-7 sm:px-10 lg:px-12 py-10 sm:py-12 flex flex-col justify-center">
                <span aria-hidden="true" className="font-serif text-[#2488cd]/25 text-[7rem] leading-[0.6] -ml-1 mb-2 select-none">
                  &ldquo;
                </span>
                <blockquote className="text-slate-700 text-base md:text-lg leading-[1.8]">
                  {selected.quote.replace(/^«\s*|\s*»$/g, "")}
                </blockquote>
                <figcaption className="mt-8 pt-6 border-t border-[#0a1d6e]/15">
                  <h3 id="team-modal-title" className="font-heading font-bold text-[#0a1d6e] text-xl">
                    {selected.name}
                  </h3>
                  <p className="mt-1 text-slate-500 text-sm">
                    {selected.role}
                  </p>
                </figcaption>
              </figure>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
