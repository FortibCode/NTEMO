"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowRight } from "lucide-react";

const IMAGES = [
  "https://images.unsplash.com/photo-1600880292203-757bb62b4baf?w=800&q=80",
  "https://images.unsplash.com/photo-1552664730-d307ca884978?w=800&q=80",
  "https://images.unsplash.com/photo-1542744173-8e7e53415bb0?w=800&q=80",
  "https://images.unsplash.com/photo-1553877522-43269d4ea984?w=800&q=80",
  "https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?w=800&q=80",
  "https://images.unsplash.com/photo-1531545514256-b1400bc00f31?w=800&q=80",
];

export default function HeroSection() {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % IMAGES.length);
    }, 4000);
    return () => clearInterval(timer);
  }, []);

  const displayImages = [
    IMAGES[currentIndex % IMAGES.length],
    IMAGES[(currentIndex + 1) % IMAGES.length],
    IMAGES[(currentIndex + 2) % IMAGES.length],
  ];

  return (
    <section className="relative min-h-screen flex items-center justify-center pt-24 pb-12 overflow-hidden">
      
      {/* Background Image with Dark Overlay */}
      <div className="absolute inset-0 z-0">
        <img 
          src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=1600&q=80" 
          alt="Marketing Digital Background" 
          className="w-full h-full object-cover"
        />
        {/* Dark Slate Overlay for Text Contrast */}
        <div className="absolute inset-0 bg-slate-900/85" />
      </div>

      {/* Premium Dynamic Background Enhancements */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden z-0">
        {/* Subtle dot pattern grid (lightened for dark background) */}
        <div className="absolute inset-0 bg-[radial-gradient(rgba(255,255,255,0.15)_1px,transparent_1px)] [background-size:24px_24px] opacity-40" />
        
        {/* Gradient masks to fade out the grid naturally at the edges */}
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-slate-900/60 to-slate-900" />
        <div className="absolute inset-0 bg-gradient-to-r from-slate-900/80 via-transparent to-slate-900/80" />

        {/* Dynamic ZigZag SVG lines (adjusted colors for dark background) */}
        <svg className="absolute w-full h-full opacity-20" viewBox="0 0 100 100" preserveAspectRatio="none">
          <motion.path 
            initial={{ pathLength: 0 }}
            animate={{ pathLength: 1 }}
            transition={{ duration: 2, ease: "easeInOut" }}
            d="M-10,20 L20,50 L40,10 L70,80 L110,40" 
            fill="none" 
            stroke="#34c4eb" 
            strokeWidth="0.5" 
            vectorEffect="non-scaling-stroke"
          />
          <motion.path 
            initial={{ pathLength: 0 }}
            animate={{ pathLength: 1 }}
            transition={{ duration: 2.5, ease: "easeInOut", delay: 0.2 }}
            d="M-10,80 L30,40 L60,90 L90,30 L110,70" 
            fill="none" 
            stroke="#60a5fa" 
            strokeWidth="0.2" 
            vectorEffect="non-scaling-stroke"
          />
        </svg>

        {/* Soft floating glow blobs */}
        <div className="absolute top-0 right-[-10%] w-[800px] h-[800px] bg-gradient-to-br from-[#34c4eb]/20 to-transparent rounded-full blur-[120px] mix-blend-multiply" />
        <div className="absolute bottom-[-10%] left-[-10%] w-[600px] h-[600px] bg-gradient-to-tr from-[#3b82f6]/20 to-transparent rounded-full blur-[100px] mix-blend-multiply" />
      </div>

      <div className="container mx-auto px-4 md:px-8 z-10 flex flex-col lg:flex-row items-center gap-16 lg:gap-8">
        
        {/* Left Part: Text & CTA */}
        <div className="w-full lg:w-5/12 flex flex-col items-start text-left relative z-20">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, type: "spring", bounce: 0.4 }}
          >
            <span className="inline-block py-2 px-5 rounded-full bg-white/10 text-cyan-300 font-bold text-xs mb-6 uppercase tracking-[0.2em] border border-cyan-400/20 backdrop-blur-sm">
              Agence NTEMO
            </span>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1, type: "spring" }}
            className="text-4xl lg:text-5xl xl:text-6xl font-black font-heading tracking-tight mb-8 text-white leading-[1.25]"
          >
            Vous avez un projet ? <br className="hidden md:block" />
            <span className="font-serif italic font-normal text-[#34c4eb] tracking-wide block my-1">
              Notre expertise
            </span>
            est à votre service.
          </motion.div>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.3 }}
            className="text-lg md:text-xl text-slate-300 mb-10 max-w-lg leading-relaxed font-medium"
          >
            Nous bousculons les codes de la communication et du marketing pour propulser votre entreprise vers de nouveaux sommets.
          </motion.p>

          <motion.a
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            href="#contact"
            className="relative overflow-hidden group flex items-center gap-4 bg-[#34c4eb] text-slate-900 px-10 py-5 rounded-full font-bold text-lg shadow-2xl hover:shadow-[#34c4eb]/40 transition-all"
          >
            <div className="absolute inset-0 bg-gradient-to-r from-white/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            <span className="relative z-10">Contactez-nous</span>
            <ArrowRight size={22} className="relative z-10 group-hover:translate-x-2 transition-transform duration-300" />
          </motion.a>
        </div>

        {/* Right Part: Dynamic ZigZag Image Gallery */}
        <div className="w-full lg:w-7/12 h-[500px] md:h-[700px] relative z-20">
          
          {/* Image 1: Top Left (Zig) */}
          <div className="absolute top-[5%] left-[5%] w-[50%] h-[50%] z-20">
            <AnimatePresence mode="wait">
              <motion.div
                key={displayImages[0]}
                initial={{ opacity: 0, x: -50, y: -50, rotate: -15, scale: 0.8 }}
                animate={{ opacity: 1, x: 0, y: 0, rotate: -6, scale: 1 }}
                exit={{ opacity: 0, filter: "blur(10px)", scale: 1.1 }}
                transition={{ duration: 0.8, type: "spring" }}
                className="w-full h-full rounded-[2rem] overflow-hidden shadow-2xl border-[3px] border-white/20 backdrop-blur-sm"
              >
                <img src={displayImages[0]} className="w-full h-full object-cover" alt="Gallery 1" />
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Image 2: Middle Right (Zag) */}
          <div className="absolute top-[25%] right-[5%] w-[55%] h-[55%] z-30">
            <AnimatePresence mode="wait">
              <motion.div
                key={displayImages[1]}
                initial={{ opacity: 0, x: 50, rotate: 15, scale: 0.8 }}
                animate={{ opacity: 1, x: 0, rotate: 8, scale: 1 }}
                exit={{ opacity: 0, filter: "blur(10px)", scale: 1.1 }}
                transition={{ duration: 0.8, type: "spring", delay: 0.1 }}
                className="w-full h-full rounded-[2rem] overflow-hidden shadow-2xl border-[3px] border-white/20 backdrop-blur-sm"
              >
                <img src={displayImages[1]} className="w-full h-full object-cover" alt="Gallery 2" />
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Image 3: Bottom Left (Zig) */}
          <div className="absolute bottom-[5%] left-[15%] w-[45%] h-[45%] z-10">
            <AnimatePresence mode="wait">
              <motion.div
                key={displayImages[2]}
                initial={{ opacity: 0, y: 50, rotate: -15, scale: 0.8 }}
                animate={{ opacity: 1, y: 0, rotate: -4, scale: 1 }}
                exit={{ opacity: 0, filter: "blur(10px)", scale: 1.1 }}
                transition={{ duration: 0.8, type: "spring", delay: 0.2 }}
                className="w-full h-full rounded-[2rem] overflow-hidden shadow-2xl border-[3px] border-white/20 backdrop-blur-sm"
              >
                <img src={displayImages[2]} className="w-full h-full object-cover" alt="Gallery 3" />
              </motion.div>
            </AnimatePresence>
          </div>

        </div>

      </div>
    </section>
  );
}
