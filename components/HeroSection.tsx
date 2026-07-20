"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowRight, ShieldCheck, CreditCard, Clock, Share2, Layers, Search, BarChart2, Globe, Smartphone, Layout } from "lucide-react";

const SERVICES = [
  {
    icon: <Share2 className="w-8 h-8 sm:w-10 sm:h-10 md:w-14 md:h-14 text-[#34c4eb]" />,
    title: "Publicité Réseaux Sociaux",
    description: "Des campagnes percutantes sur Facebook, Instagram, TikTok et LinkedIn pour booster votre visibilité et générer des leads qualifiés.",
  },
  {
    icon: <Layers className="w-8 h-8 sm:w-10 sm:h-10 md:w-14 md:h-14 text-[#6366f1]" />,
    title: "Animation Page Pro",
    description: "Gestion et animation professionnelle de vos pages d'entreprise pour bâtir une communauté engagée et fidèle.",
  },
  {
    icon: <Search className="w-8 h-8 sm:w-10 sm:h-10 md:w-14 md:h-14 text-[#10b981]" />,
    title: "Référencement Naturel (SEO)",
    description: "Optimisez votre positionnement sur Google pour attirer un trafic qualifié et durable sans dépenser en publicité.",
  },
  {
    icon: <BarChart2 className="w-8 h-8 sm:w-10 sm:h-10 md:w-14 md:h-14 text-[#f59e0b]" />,
    title: "Google AdWords",
    description: "Des campagnes Google Ads ciblées et rentables pour apparaître en tête des résultats au bon moment.",
  },
  {
    icon: <Globe className="w-8 h-8 sm:w-10 sm:h-10 md:w-14 md:h-14 text-[#ec4899]" />,
    title: "Création Site Web",
    description: "Des sites web modernes, rapides et sur mesure qui convertissent vos visiteurs en clients.",
  },
  {
    icon: <Smartphone className="w-8 h-8 sm:w-10 sm:h-10 md:w-14 md:h-14 text-[#34c4eb]" />,
    title: "Création Application Mobile",
    description: "Développement d'applications iOS et Android ergonomiques pour répondre aux besoins de vos utilisateurs.",
  },
  {
    icon: <Layout className="w-8 h-8 sm:w-10 sm:h-10 md:w-14 md:h-14 text-[#10b981]" />,
    title: "Site Responsive/Mobile",
    description: "Des interfaces web parfaitement adaptées à tous les écrans pour une expérience utilisateur optimale.",
  },
];

export default function HeroSection() {
  const [currentService, setCurrentService] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentService((prev) => (prev + 1) % SERVICES.length);
    }, 4000); // Change every 4 seconds
    return () => clearInterval(timer);
  }, []);

  return (
    <section className="relative min-h-screen flex flex-col items-center pt-32 pb-12 overflow-hidden text-center">
      
      {/* Global background shines through from layout.tsx */}

      <div className="container mx-auto px-4 md:px-8 z-10 flex flex-col items-center max-w-5xl">
        
        {/* Top Badge */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, type: "spring", bounce: 0.4 }}
          className="mb-8"
        >
          <div className="inline-flex items-center gap-3 py-1.5 px-2 pr-4 rounded-full bg-white/5 border border-white/10 backdrop-blur-md text-sm cursor-pointer hover:bg-white/10 transition-colors shadow-lg">
            <span className="bg-[#2488cd] text-white text-[10px] uppercase tracking-wider font-bold px-3 py-1 rounded-full shadow-[0_0_15px_rgba(36,136,205,0.5)]">Nouveau</span>
            <span className="text-slate-300 font-medium text-xs sm:text-sm">Découvrez nos services d'expertise</span>
            <ArrowRight size={14} className="text-slate-400" />
          </div>
        </motion.div>

        {/* Main Heading */}
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.1, type: "spring" }}
          className="text-5xl md:text-6xl lg:text-7xl font-black font-heading tracking-tight mb-6 text-white leading-[1.1]"
        >
          Propulsez Votre Entreprise <br className="hidden md:block" />
          <span className="font-serif italic font-normal text-slate-200">
            Avec Notre Expertise
          </span>
        </motion.h1>

        {/* Subtitle */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="text-lg md:text-xl text-slate-200 mb-10 max-w-2xl leading-relaxed"
        >
          Optimisez vos opérations, boostez votre productivité et améliorez la satisfaction de vos clients avec notre plateforme de services sur-mesure.
        </motion.p>

        {/* Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.3 }}
          className="flex flex-col sm:flex-row items-center gap-4 mb-16 w-full justify-center"
        >
          <a
            href="#contact"
            className="px-8 py-4 bg-gradient-to-r from-[#34c4eb] to-[#2488cd] text-white rounded-full font-black text-sm hover:from-[#2488cd] hover:to-[#34c4eb] transition-all shadow-[0_0_30px_rgba(52,196,235,0.45)] hover:shadow-[0_0_40px_rgba(52,196,235,0.65)] w-full sm:w-auto hover:scale-105 transform duration-200"
          >
            Démarrer maintenant
          </a>
          <a
            href="#services"
            className="px-8 py-4 bg-white/10 backdrop-blur-md text-white border border-white/20 rounded-full font-bold text-sm flex items-center justify-center gap-2 hover:bg-white/20 hover:border-white/40 hover:gap-3 transition-all w-full sm:w-auto shadow-lg"
          >
            Voir nos services <ArrowRight size={16} />
          </a>
        </motion.div>

        {/* Features Strip */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.6 }}
          className="flex flex-wrap items-center justify-center gap-x-8 gap-y-4 text-xs sm:text-sm text-slate-300 font-medium mb-10"
        >
          <div className="flex items-center gap-2">
            <Clock size={16} className="text-[#34c4eb]" />
            Livraison rapide
          </div>
          <div className="flex items-center gap-2">
            <CreditCard size={16} className="text-[#34c4eb]" />
            Tarification transparente
          </div>
          <div className="flex items-center gap-2">
            <ShieldCheck size={16} className="text-[#34c4eb]" />
            Garantie de qualité
          </div>
        </motion.div>

      </div>

      {/* Fluid 3D Element Image & Laptop Mockup */}
      <motion.div 
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.2, delay: 0.4 }}
        className="w-full max-w-6xl mx-auto mt-4 relative z-0 px-4"
      >
        <div className="relative rounded-[2rem] overflow-hidden border border-white/5 shadow-[0_0_100px_rgba(36,136,205,0.15)] bg-[#030712]/50 flex flex-col items-center justify-center py-8 md:py-20 min-h-[450px] md:min-h-[500px]">
          {/* Fluid Background Image acting as environment for the laptop */}
          <img 
            src="/fluid-bg.png" 
            alt="Fluid 3D Design" 
            className="absolute inset-0 w-full h-full object-cover opacity-80"
            style={{ maskImage: "linear-gradient(to bottom, black 70%, transparent 100%)", WebkitMaskImage: "linear-gradient(to bottom, black 70%, transparent 100%)" }}
          />
          
          {/* Laptop Mockup */}
          <div className="relative z-30 w-full max-w-4xl px-2 sm:px-4 md:px-12 mt-4 mb-20 drop-shadow-2xl">
            {/* Screen frame - using aspect-[1/1] on mobile to give height, md:aspect-[16/9] on desktop */}
            <div className="relative w-full aspect-[1/1] sm:aspect-[16/10] md:aspect-[16/9] bg-[#050b14]/90 backdrop-blur-2xl rounded-t-[1.5rem] md:rounded-t-[2rem] border-[6px] md:border-[10px] border-[#1e293b] shadow-2xl overflow-hidden flex flex-col items-center justify-center p-4 sm:p-6 md:p-10 text-center ring-1 ring-white/10">
               {/* Internal glowing background to simulate screen light */}
               <div className="absolute inset-0 bg-gradient-to-br from-[#34c4eb]/15 via-transparent to-[#6366f1]/10 pointer-events-none" />
               
               <AnimatePresence mode="wait">
                 <motion.div
                   key={currentService}
                   initial={{ opacity: 0, scale: 0.95, filter: "blur(10px)" }}
                   animate={{ opacity: 1, scale: 1, filter: "blur(0px)" }}
                   exit={{ opacity: 0, scale: 1.05, filter: "blur(10px)" }}
                   transition={{ duration: 0.6, type: "spring", bounce: 0.3 }}
                   className="flex flex-col items-center justify-center h-full w-full max-w-xl"
                 >
                   <div className="mb-4 sm:mb-6 md:mb-8 p-3 sm:p-4 md:p-5 rounded-2xl md:rounded-3xl bg-white/5 border border-white/10 shadow-[0_0_30px_rgba(52,196,235,0.2)] backdrop-blur-md">
                     {SERVICES[currentService].icon}
                   </div>
                   <h3 className="text-xl sm:text-2xl md:text-4xl font-black font-heading text-white mb-2 sm:mb-4 leading-tight tracking-tight">
                     {SERVICES[currentService].title}
                   </h3>
                   <p className="text-slate-300 text-xs sm:text-sm md:text-lg leading-relaxed font-medium px-2 sm:px-4">
                     {SERVICES[currentService].description}
                   </p>
                 </motion.div>
               </AnimatePresence>
               
               {/* Progress indicator inside screen */}
               <div className="absolute bottom-4 sm:bottom-6 flex gap-1.5 sm:gap-3">
                 {SERVICES.map((_, idx) => (
                   <button
                     key={idx}
                     onClick={() => setCurrentService(idx)}
                     className={`h-1 sm:h-1.5 md:h-2 rounded-full transition-all duration-500 cursor-pointer ${idx === currentService ? "w-6 sm:w-8 md:w-12 bg-[#34c4eb] shadow-[0_0_10px_#34c4eb]" : "w-1.5 sm:w-2 md:w-3 bg-white/20 hover:bg-white/40"}`}
                     aria-label={`Aller au service ${idx + 1}`}
                   />
                 ))}
               </div>
            </div>
            {/* Laptop Base */}
            <div className="relative w-[108%] -left-[4%] h-3 sm:h-4 md:h-6 bg-gradient-to-b from-[#94a3b8] to-[#475569] rounded-b-2xl shadow-2xl flex justify-center border-t border-slate-300">
              <div className="w-1/4 h-1.5 sm:h-2 md:h-3 bg-[#cbd5e1] rounded-b-md md:rounded-b-lg opacity-50 shadow-inner"></div>
            </div>
            {/* Glow under the laptop */}
            <div className="absolute -bottom-10 left-1/2 -translate-x-1/2 w-3/4 h-10 bg-[#34c4eb]/30 blur-2xl rounded-[100%] pointer-events-none" />
          </div>


        </div>
      </motion.div>
      
    </section>
  );
}
