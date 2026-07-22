"use client";

import { motion, Variants } from "framer-motion";

const teamMembers = [
  {
    name: "Dieu-Merci BOUELANKANA",
    role: "CEO FOUNDER, NTEMO CONSULTING",
    quote: "« Dans le vaste univers de la communication, les mots sont des ponts et les idées des voiles ; une entreprise qui sait écouter avant de parler, qui sait créer avant de vendre, et qui sait inspirer avant de convaincre, devient plus qu'une marque : elle devient une voix qui résonne dans le cœur des gens. »",
    image: "/boulankana.jpg",
  },
  {
    name: "Edgard BAVOUMINA",
    role: "Directeur des Opérations, NTEMO CONSULTING",
    quote: "« Une entreprise de communication et de marketing, les idées sont des étincelles et les campagnes des flammes, mais sans organisation, elles s'éteignent avant d'éclairer. Le rôle des opérations est de transformer l'inspiration en action, de donner une structure aux rêves et une cadence aux ambitions. »",
    image: "/edgard.jpg",
  },
  {
    name: "Gaste Istardi NDOMBA",
    role: "Responsable Commercial, NTEMO CONSULTING",
    quote: "« Le Responsable Commercial est le bâtisseur de ponts entre la vision et le marché. Car vendre ne consiste pas seulement à conclure des contrats, mais à créer des relations durables, à écouter les besoins cachés derrière les mots, et à transformer chaque échange en une promesse tenue. »",
    image: "/gatse.jpg",
  },
  {
    name: "Glade NTOLANY",
    role: "Responsable technique et suivis projet, NTEMO CONSULTING",
    quote: "« Le Responsable Technique et Suivi de Projet est le garant de la promesse faite au client. Car piloter un projet ne consiste pas seulement à respecter des délais et des budgets, mais à bâtir des solutions solides, à anticiper les complexités invisibles derrière les lignes de code ou les plans, et à transformer chaque défi technique en une réussite partagée. »",
    image: "/glade.jpeg",
  },
];

const getCardVariant = (index: number): Variants => ({
  hidden: {
    opacity: 0,
    x: index === 0 ? -120 : index === 2 ? 120 : 0,
    y: index === 1 ? 120 : 40,
    rotate: index === 0 ? -8 : index === 2 ? 8 : 0,
    scale: 0.85,
  },
  visible: {
    opacity: 1,
    x: 0,
    y: 0,
    rotate: 0,
    scale: 1,
    transition: {
      duration: 0.8,
      delay: index * 0.15,
      type: "spring",
      bounce: 0.3,
    },
  },
});

export default function TeamSection() {
  return (
    <section className="py-16 md:py-28 pb-20 md:pb-40 relative overflow-hidden">
      {/* Background effects */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute bottom-0 left-0 right-0 h-48 bg-gradient-to-t from-[#34c4eb]/20 to-transparent" />
      </div>

      <div className="container mx-auto px-4 md:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 md:mb-24">
          <motion.span
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-block py-2 px-4 rounded-full bg-[#34c4eb]/10 text-[#2488cd] font-bold text-xs uppercase tracking-[0.2em] mb-4"
          >
            Notre Capital Humain
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-3xl md:text-5xl  font-black text-white font-heading tracking-tight mb-4 uppercase"
          >
            Notre Équipe
          </motion.h2>
          <div className="h-1.5 w-16 bg-[#34c4eb] md:mb-3 sm:mb-3 mx-auto rounded-full" />
        </div>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 md:gap-8 max-w-7xl mx-auto">
          {teamMembers.map((member, index) => (
            <motion.div
              key={index}
              variants={getCardVariant(index)}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-60px" }}
              whileHover={{
                y: -12,
                scale: 1.03,
                transition: { duration: 0.25, type: "spring" },
              }}
              className="relative bg-[#060f24] hover:bg-[#0a1936] text-white rounded-[2rem]  md:rounded-[2.5rem] px-5 md:px-6 pt-20 md:pt-20 pb-6 md:pb-8 border border-white/10 hover:border-[#34c4eb]/40 shadow-2xl flex flex-col transition-colors duration-300 md:mb-3 sm:mb-4 cursor-pointer h-full w-full"
            >
              {/* Profile Photo - Position absolue comme avant */}
              <div className="absolute mt-5 top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 z-20">
                <div className="relative w-24 h-24 sm:w-28 sm:h-28 md:w-32 md:h-32 rounded-full overflow-hidden border-4 border-white shadow-xl hover:scale-105 transition-transform duration-300">
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>

              {/* Decorative Quote Icon */}
              <div className="absolute top-8 md:top-8 left-4 md:left-6 text-[#34c4eb]/15 pointer-events-none select-none font-serif text-5xl md:text-7xl leading-none">
                "
              </div>

              {/* Quote */}
              <div className="relative z-10 flex-grow mb-4 md:mb-6 mt-4 md:mt-4">
                <p className="text-slate-300 text-xs sm:text-xs md:text-sm leading-relaxed text-center font-medium italic px-1 line-clamp-6 md:line-clamp-none">
                  {member.quote}
                </p>
              </div>

              {/* Member Info */}
              <div className="text-center border-t border-white/10 pt-4 md:pt-5 mt-auto">
                <h3 className="text-xs sm:text-sm font-black text-white font-heading tracking-tight mb-1 leading-tight">
                  {member.name}
                </h3>
                <p className="text-[#34c4eb] text-[9px] sm:text-[10px] font-bold uppercase tracking-wider leading-tight">
                  {member.role}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}