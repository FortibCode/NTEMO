"use client";

import { motion, Variants } from "framer-motion";
import { CheckCircle2 } from "lucide-react";

export default function AboutSection() {
  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants: Variants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, type: "spring" } },
  };

  return (
    <section id="about" className="py-24 bg-slate-50 overflow-hidden">
      <div className="container mx-auto px-4 md:px-8">
        <div className="flex flex-col lg:flex-row items-center gap-20 lg:gap-32">
          
          {/* Left Part: Mixed Image & Logo Illustration */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.9, rotate: -5 }}
            whileInView={{ opacity: 1, scale: 1, rotate: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, type: "spring", bounce: 0.4 }}
            className="w-full lg:w-5/12 flex justify-center relative z-10"
          >
            {/* Main Image Container */}
            <div className="relative w-[300px] h-[350px] md:w-[450px] md:h-[500px]">
              
              {/* Background abstract shapes for depth */}
              <div className="absolute -inset-4 bg-gradient-to-tr from-[#34c4eb] to-[#1e40af] rounded-[3rem] rotate-6 opacity-30 blur-2xl -z-10" />
              <div className="absolute inset-0 bg-[#34c4eb] rounded-[2.5rem] -rotate-3 scale-105 opacity-20 -z-10" />
              
              <img 
                src="https://ntemoconsulting.com/wp-content/uploads/2026/02/IMG-20251017-WA0007.jpg" 
                alt="NTEMO Consulting" 
                className="absolute inset-0 w-full h-full object-cover rounded-[2.5rem] shadow-2xl border-8 border-white"
              />

              {/* Floating Logo Badge */}
              <motion.div
                animate={{ y: [0, -15, 0] }}
                transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
                className="absolute -bottom-8 -left-8 md:-bottom-12 md:-left-12 bg-white px-8 py-6 rounded-3xl shadow-[0_20px_50px_rgba(0,0,0,0.15)] flex flex-col items-center border border-slate-100 z-20"
              >
                <div className="bg-[#34c4eb]/10 w-20 h-20 rounded-full flex items-center justify-center mb-3">
                  <svg width="32" height="40" viewBox="0 0 24 32" fill="black" xmlns="http://www.w3.org/2000/svg">
                    <path d="M0 0H6.5L17.5 18V0H24V32H17.5L6.5 14V32H0V0Z" />
                  </svg>
                </div>
                <div className="flex flex-col items-center">
                  <span className="text-[16px] font-black leading-none tracking-tighter text-slate-900 uppercase">
                    Ntémo
                  </span>
                  <span className="text-[9px] font-bold leading-none tracking-widest text-[#34c4eb] mt-[3px] uppercase">
                    Consulting
                  </span>
                </div>
              </motion.div>
              
              {/* Floating Highlight Badge */}
              <motion.div
                animate={{ y: [0, 15, 0] }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut", delay: 1 }}
                className="absolute top-10 -right-6 md:top-16 md:-right-10 bg-white px-5 py-3 rounded-2xl shadow-xl flex items-center gap-3 border border-slate-100 z-20"
              >
                <div className="bg-green-100 text-green-600 rounded-full p-1">
                  <CheckCircle2 size={20} />
                </div>
                <span className="font-bold text-slate-800 text-sm">Stratégie 100% sur mesure</span>
              </motion.div>

            </div>
          </motion.div>

          {/* Right Part: Dynamic Animated Text */}
          <motion.div 
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            className="w-full lg:w-7/12 flex flex-col items-start text-left"
          >
            <motion.div variants={itemVariants} className="mb-4">
              <span className="inline-block py-2 px-4 rounded-full bg-[#34c4eb]/10 text-[#2488cd] font-bold text-xs uppercase tracking-[0.2em]">
                Qui sommes-nous ?
              </span>
            </motion.div>

            <motion.h3 
              variants={itemVariants}
              className="text-4xl md:text-6xl font-black text-[#0a192f] mb-8 font-heading leading-[1.25] tracking-tight"
            >
              L'excellence stratégique pour votre <br className="hidden md:block"/>
              <span className="font-serif italic font-normal text-[#2488cd] tracking-wide block my-1">
                Image de Marque
              </span>
            </motion.h3>

            <motion.div variants={itemVariants} className="space-y-6 text-lg text-slate-600 leading-relaxed font-medium">
              <p>
                <strong className="text-slate-900 font-bold">NTEMO CONSULTING</strong> est une agence de communication et de conseil stratégique dédiée à l'accompagnement des entreprises, institutions et porteurs de projets dans la construction, la valorisation et le développement de leur image de marque.
              </p>
              
              <div className="h-px w-24 bg-gradient-to-r from-[#34c4eb] to-transparent my-4" />
              
              <p>
                Nous plaçons <span className="text-slate-900 font-bold">l'humain</span>, <span className="text-slate-900 font-bold">la créativité</span> et <span className="text-slate-900 font-bold">la performance</span> au cœur de nos actions pour vous offrir des solutions sur mesure, efficaces et innovantes.
              </p>
            </motion.div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
