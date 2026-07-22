"use client";

import Image from "next/image";
import { motion } from "framer-motion";

const PARTNERS = [
  { name: "Partenaire 1", src: "/partenaire-1.png" },
  { name: "Partenaire 2", src: "/partenaire-2.png" },
  { name: "Partenaire 3", src: "/partenaire-3.png" },
];

const duplicatedPartners = [...PARTNERS, ...PARTNERS, ...PARTNERS];

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
              className="flex items-center gap-6 px-8 md:px-12 cursor-pointer group shrink-0"
            >
              {/* Partner logo image */}
              <div className="relative w-28 h-28 md:w-32 md:h-32 rounded-full overflow-hidden border-2 border-white/10 bg-white group-hover:border-white/30 transition-all duration-300 shrink-0">
                <Image
                  src={partner.src}
                  alt={partner.name}
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 112px, 128px"
                />
              </div>
              {/* Dot separator */}
              <span className="text-white/20 text-2xl">·</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
