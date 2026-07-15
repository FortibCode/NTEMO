"use client";

import { motion, Variants } from "framer-motion";
import { Ear, Palette, Shield, Target, Handshake } from "lucide-react";

const values = [
  {
    icon: <Ear className="w-6 h-6" />,
    title: "Écoute",
    description: "Comprendre vos besoins pour mieux vous accompagner.",
    color: "from-[#34c4eb] to-[#2488cd]",
  },
  {
    icon: <Palette className="w-6 h-6" />,
    title: "Créativité",
    description: "Apporter des solutions originales, pertinentes et adaptées.",
    color: "from-[#6366f1] to-[#8b5cf6]",
  },
  {
    icon: <Shield className="w-6 h-6" />,
    title: "Professionnalisme",
    description: "Travailler avec rigueur, méthode et transparence.",
    color: "from-[#10b981] to-[#34d399]",
  },
  {
    icon: <Target className="w-6 h-6" />,
    title: "Impact",
    description: "Viser des résultats concrets et mesurables.",
    color: "from-[#f59e0b] to-[#fbbf24]",
  },
  {
    icon: <Handshake className="w-6 h-6" />,
    title: "Engagement",
    description: "Être un partenaire de confiance, à chaque étape de votre évolution.",
    color: "from-[#ec4899] to-[#f43f5e]",
  },
];

const getCardVariant = (index: number): Variants => ({
  hidden: {
    opacity: 0,
    x: index % 2 === 0 ? -100 : 100,
    y: 20,
    rotate: index % 2 === 0 ? -6 : 6,
    scale: 0.9,
  },
  visible: {
    opacity: 1,
    x: 0,
    y: 0,
    rotate: 0,
    scale: 1,
    transition: {
      duration: 0.6,
      delay: index * 0.12,
      type: "spring",
      bounce: 0.3,
    },
  },
});

export default function MissionValuesSection() {
  return (
    <section className="py-24 bg-white overflow-hidden border-t border-slate-100">
      <div className="container mx-auto px-4 md:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center mb-20">
          <motion.span
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="inline-block py-2 px-4 rounded-full bg-[#34c4eb]/10 text-[#2488cd] font-bold text-xs uppercase tracking-[0.2em] mb-4"
          >
            Notre Engagement
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-4xl md:text-5xl font-black text-[#0a192f] font-heading leading-tight mb-6"
          >
            Notre mission & nos <span className="font-serif italic font-normal text-[#2488cd] tracking-wide">valeurs</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-lg md:text-xl text-slate-600 leading-relaxed font-medium"
          >
            Aider nos clients à communiquer efficacement, à valoriser leur identité et à atteindre leurs objectifs à travers une stratégie claire, cohérente et impactante.
          </motion.p>
        </div>

        {/* Dynamic Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6">
          {values.map((val, index) => (
            <motion.div
              key={index}
              variants={getCardVariant(index)}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-40px" }}
              whileHover={{ 
                y: -10,
                scale: 1.05,
                transition: { duration: 0.2, type: "spring", bounce: 0.4 }
              }}
              className="group relative overflow-hidden bg-slate-50 hover:bg-white rounded-3xl p-6 border border-slate-100 hover:border-slate-200 hover:shadow-2xl transition-all duration-300 cursor-pointer flex flex-col h-full justify-between"
            >
              {/* Subtle top indicator bar */}
              <div className={`absolute top-0 left-0 right-0 h-[4px] bg-gradient-to-r ${val.color}`} />
              
              <div>
                {/* Icon wrapper */}
                <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${val.color} text-white flex items-center justify-center mb-5 shadow-md group-hover:scale-110 transition-transform duration-300`}>
                  {val.icon}
                </div>

                <h3 className="text-lg font-black text-[#0a192f] mb-3 font-heading">
                  {val.title}
                </h3>
                <p className="text-slate-600 text-sm leading-relaxed font-medium">
                  {val.description}
                </p>
              </div>

              {/* Bottom dynamic accent path line */}
              <div className={`mt-6 w-8 h-[2px] bg-gradient-to-r ${val.color} group-hover:w-full transition-all duration-300`} />
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
