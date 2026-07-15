"use client";

import { motion } from "framer-motion";
import { PenTool, Camera, Film, TrendingUp, Server, Code } from "lucide-react";

const formations = [
  {
    icon: <PenTool className="w-7 h-7" />,
    title: "Design graphique",
    duration: "4 semaines",
    level: "Débutant → Professionnel",
    description: "Apprenez à maîtriser les outils phares (Photoshop, Illustrator) et concevez des chartes et identités visuelles percutantes.",
    color: "from-[#ec4899] to-[#f43f5e]",
  },
  {
    icon: <Camera className="w-7 h-7" />,
    title: "Photographie",
    duration: "3 semaines",
    level: "Débutant → Intermédiaire",
    description: "Maîtrisez le réglage d'exposition, le cadrage, le stylisme photo en studio et le traitement d'image professionnel.",
    color: "from-[#34c4eb] to-[#2488cd]",
  },
  {
    icon: <Film className="w-7 h-7" />,
    title: "L'Audiovisuel",
    duration: "4 semaines",
    level: "Tous niveaux",
    description: "Formez-vous aux techniques de prise de vue, d'éclairage, d'enregistrement sonore et de montage vidéo professionnel.",
    color: "from-[#6366f1] to-[#8b5cf6]",
  },
  {
    icon: <TrendingUp className="w-7 h-7" />,
    title: "Gestion commerciale & Marketing digital",
    duration: "6 semaines",
    level: "Intermédiaire → Avancé",
    description: "Développez des techniques de vente efficaces et pilotez vos leviers digitaux pour démultiplier vos opportunités d'affaires.",
    color: "from-[#f59e0b] to-[#fbbf24]",
  },
  {
    icon: <Server className="w-7 h-7" />,
    title: "Téléphonie IP & administration Noc",
    duration: "8 semaines",
    level: "Technique / Avancé",
    description: "Apprenez à déployer et superviser les infrastructures de VoIP d'entreprise et à piloter les centres d'opérations réseau (NOC).",
    color: "from-[#10b981] to-[#34d399]",
  },
  {
    icon: <Code className="w-7 h-7" />,
    title: "Développement Web",
    duration: "10 semaines",
    level: "Débutant → Développeur",
    description: "Apprenez HTML, CSS, JavaScript, la conception de bases de données et la création de sites internet modernes et adaptables.",
    color: "from-[#8b5cf6] to-[#ec4899]",
  },
];

export default function FormationsSection() {
  return (
    <section id="formations" className="py-24 bg-slate-50">
      <div className="container mx-auto px-4 md:px-8">

        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.span
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-block py-2 px-4 rounded-full bg-[#34c4eb]/10 text-[#2488cd] font-bold text-xs uppercase tracking-[0.2em] mb-4"
          >
            Formations Professionnelles
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-4xl md:text-5xl font-black text-[#0a192f] font-heading leading-tight mb-5"
          >
            Montez en <span className="font-serif italic font-normal text-[#2488cd] tracking-wide">compétences</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-lg text-slate-600 animate-fade-in"
          >
            Des formations pratiques et certifiantes pour développer vos compétences et accélérer votre insertion ou évolution de carrière.
          </motion.p>
        </div>

        {/* Formations Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {formations.map((formation, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.08 }}
              whileHover={{ y: -8 }}
              className="group bg-white rounded-[2rem] p-8 border border-slate-200 hover:border-transparent hover:shadow-2xl transition-all duration-400 relative overflow-hidden cursor-pointer flex flex-col justify-between"
            >
              {/* Gradient overlay on hover */}
              <div className={`absolute inset-0 rounded-[2rem] bg-gradient-to-br ${formation.color} opacity-0 group-hover:opacity-[0.03] transition-opacity duration-400`} />

              <div>
                {/* Header elements */}
                <div className="flex items-center gap-4 mb-6">
                  {/* Icon */}
                  <div className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${formation.color} text-white flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300`}>
                    {formation.icon}
                  </div>
                  <div>
                    <span className="text-[10px] font-bold text-slate-400 uppercase tracking-widest block mb-0.5">Formation</span>
                    <h3 className="text-lg font-black text-[#0a192f] font-heading leading-tight">{formation.title}</h3>
                  </div>
                </div>

                <p className="text-slate-600 leading-relaxed text-sm mb-6">{formation.description}</p>
              </div>

              <div>
                <div className="flex gap-2.5 mb-5 flex-wrap">
                  <span className="text-[11px] font-bold bg-slate-100 text-slate-600 px-3 py-1.5 rounded-full">
                    ⏱ {formation.duration}
                  </span>
                  <span className="text-[11px] font-bold bg-[#34c4eb]/10 text-[#2488cd] px-3 py-1.5 rounded-full">
                    🎯 {formation.level}
                  </span>
                </div>

                <div className="pt-4 border-t border-slate-100">
                  <a
                    href="#contact"
                    className={`inline-flex items-center gap-2 text-sm font-bold bg-gradient-to-r ${formation.color} bg-clip-text text-transparent hover:gap-4 transition-all duration-300`}
                  >
                    S'inscrire à cette formation →
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
