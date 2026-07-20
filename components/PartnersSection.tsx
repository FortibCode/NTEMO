"use client";

import { motion } from "framer-motion";

const PARTNERS = [
  { name: "MTN", abbr: "MTN", color: "#ffcb00" },
  { name: "Airtel", abbr: "Air", color: "#e40000" },
  { name: "Orange", abbr: "Org", color: "#ff6600" },
  { name: "Canal+", abbr: "C+", color: "#00a0e9" },
  { name: "BGFI Bank", abbr: "BGFI", color: "#005f9e" },
  { name: "TotalEnergies", abbr: "Total", color: "#ef3b42" },
  { name: "Azur", abbr: "Azur", color: "#0072ce" },
  { name: "Bolloré", abbr: "Bol", color: "#003087" },
  { name: "CCA Bank", abbr: "CCA", color: "#00843d" },
  { name: "Pana TV", abbr: "Pan", color: "#c0392b" },
];

const duplicatedPartners = [...PARTNERS, ...PARTNERS];

export default function PartnersSection() {
  return (
    <section className="py-20 overflow-hidden border-t border-b border-white/5 bg-[#01030c]/50 backdrop-blur-sm relative z-10">
      <div className="container mx-auto px-4 md:px-8 mb-12 text-center">
        <motion.span
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="inline-block py-2 px-4 rounded-full bg-[#34c4eb]/10 text-[#34c4eb] font-bold text-xs uppercase tracking-[0.2em] mb-4"
        >
          Ils nous font confiance
        </motion.span>
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="text-3xl md:text-4xl font-black text-white font-heading leading-tight"
        >
          Nos partenaires &amp;{" "}
          <span className="font-serif italic font-normal text-[#2488cd] tracking-wide">clients</span>
        </motion.h2>
      </div>

      <div className="relative w-full flex overflow-hidden select-none">
        {/* Edge fades */}
        <div className="absolute top-0 left-0 bottom-0 w-32 md:w-56 bg-gradient-to-r from-[#01030c] to-transparent z-10 pointer-events-none" />
        <div className="absolute top-0 right-0 bottom-0 w-32 md:w-56 bg-gradient-to-l from-[#01030c] to-transparent z-10 pointer-events-none" />

        <div className="flex animate-infinite-scroll-reverse items-center">
          {duplicatedPartners.map((partner, index) => (
            <div
              key={index}
              className="flex items-center gap-3 px-8 md:px-12 cursor-pointer group"
            >
              {/* Logo icon */}
              <div
                className="w-12 h-12 rounded-xl flex items-center justify-center font-black text-sm border border-white/10 bg-white/5 group-hover:border-white/30 transition-all duration-300 shrink-0"
                style={{ color: partner.color }}
              >
                {partner.abbr}
              </div>
              {/* Name */}
              <span className="text-xl md:text-2xl font-black text-white/40 group-hover:text-white tracking-tight whitespace-nowrap transition-colors duration-300">
                {partner.name}
              </span>
              {/* Dot separator */}
              <span className="text-white/20 ml-4 text-2xl">·</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
