"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";

// Web-sized copies of public/image-1..4.jpg (originals are 5–13 MB each)
const HERO_IMAGES = [
  { src: "/hero/hero-1.jpg", position: "center 35%" },
  { src: "/hero/hero-2.jpg", position: "center" },
  { src: "/hero/hero-3.jpg", position: "center 30%" },
  { src: "/hero/hero-4.jpg", position: "center" },
];

const SLIDE_MS = 6000;

const HEADLINES = [
  { strong: "Propulser", light: "votre marque" },
  { strong: "Valoriser", light: "votre image" },
  { strong: "Accélérer", light: "votre croissance" },
];

// NTÊMO "N" monogram (same geometry as public/logo-ntemo.svg), drawn as one
// translucent shape for the large watermark.
function Monogram({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 56 74" className={className} aria-hidden="true">
      <defs>
        <mask id="hero-n-cut" maskUnits="userSpaceOnUse" x="-50" y="-50" width="200" height="200">
          <rect x="-50" y="-50" width="200" height="200" fill="#fff" />
          <line x1="-6" y1="-32" x2="60" y2="105" stroke="#000" strokeWidth="23" />
        </mask>
        <linearGradient id="hero-n-grad" x1="0" y1="0" x2="0.4" y2="1">
          <stop offset="0" stopColor="#ffffff" />
          <stop offset="1" stopColor="#ffffff" />
        </linearGradient>
      </defs>
      <g fill="url(#hero-n-grad)">
        <g mask="url(#hero-n-cut)">
          <path d="M0 17 V64.5 a8.5 8.5 0 0 0 17 0 V8 Z" />
          <path d="M39 10 a8.5 8.5 0 0 1 17 0 V72 H39 Z" />
        </g>
      </g>
      <line x1="13.5" y1="9" x2="40" y2="64" stroke="url(#hero-n-grad)" strokeWidth="17" strokeLinecap="round" />
    </svg>
  );
}

function SmallMark() {
  return (
    <svg viewBox="0 0 56 74" className="w-3.5 h-[18px]" aria-hidden="true" fill="currentColor">
      <path d="M0 17 V64.5 a8.5 8.5 0 0 0 17 0 V30 Z" />
      <path d="M39 10 a8.5 8.5 0 0 1 17 0 V60 L39 32 Z" />
      <line x1="13.5" y1="9" x2="40" y2="64" stroke="currentColor" strokeWidth="17" strokeLinecap="round" />
    </svg>
  );
}

export default function HeroSection() {
  const [slide, setSlide] = useState(0);

  useEffect(() => {
    const id = setTimeout(() => setSlide((i) => (i + 1) % HERO_IMAGES.length), SLIDE_MS);
    return () => clearTimeout(id);
  }, [slide]);

  // Preload the other slides so each crossfade is instant
  useEffect(() => {
    HERO_IMAGES.slice(1).forEach(({ src }) => {
      const img = new window.Image();
      img.src = src;
    });
  }, []);

  return (
    <section className="relative h-screen min-h-[640px] w-full overflow-hidden">

      {/* Background slideshow: crossfade + slow zoom */}
      <AnimatePresence initial={false}>
        <motion.div
          key={slide}
          initial={{ opacity: 0, scale: 1.12 }}
          animate={{ opacity: 1, scale: 1, rotate: 0 }}
          exit={{ opacity: 0 }}
          transition={{
            opacity: { duration: 1.4, ease: "easeInOut" },
            scale: { duration: SLIDE_MS / 1000 + 1.5, ease: "linear" },
          }}
          className="absolute inset-0"
        >
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src={HERO_IMAGES[slide].src}
            alt=""
            className="w-full h-full object-cover"
            style={{ objectPosition: HERO_IMAGES[slide].position }}
          />
        </motion.div>
      </AnimatePresence>

      {/* Neutral fade at the bottom keeps the white headline readable */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/65 via-black/15 to-transparent" />

      {/* Large translucent monogram */}
      <motion.div
        initial={{ opacity: 0, x: 300, rotate: 8 }}
        animate={{ opacity: 1, x: 0, scale: 1, rotate: 0 }}
        transition={{ duration: 1.4, delay: 0.3, ease: "easeOut" }}
        className="absolute right-[-12%] sm:right-[-4%] lg:right-[4%] top-[14%] h-[62%] pointer-events-none"
      >
        <Monogram className="h-full w-auto opacity-25" />
      </motion.div>

      {/* Headline + CTA */}
      <div className="relative z-10 h-full container mx-auto px-6 md:px-10 lg:px-20 flex flex-col justify-end pb-20 md:pb-28">
        <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-10">
          <h1 className="font-heading text-white text-[2.4rem] sm:text-5xl md:text-6xl leading-[1.15] uppercase">
            {HEADLINES.map((line, i) => (
              <motion.span
                key={line.strong}
                initial={{ opacity: 0, y: 90, scale: 0.94 }}
                animate={{ opacity: 1, y: 0, scale: 1, rotate: 0 }}
                transition={{ duration: 0.8, delay: 0.4 + i * 0.18, ease: "easeOut" }}
                className="block"
              >
                <span className="font-black italic">{line.strong}</span>{" "}
                <span className="font-light">{line.light}</span>
              </motion.span>
            ))}
          </h1>

          <motion.div
            initial={{ opacity: 0, y: 70, scale: 0.94 }}
            animate={{ opacity: 1, y: 0, scale: 1, rotate: 0 }}
            transition={{ duration: 0.8, delay: 1.1 }}
            className="lg:mb-3"
          >
            <Link
              href="/#services"
              className="group inline-flex items-center gap-3 rounded-full border border-white/80 px-6 py-3.5 text-sm font-medium uppercase tracking-wider text-white backdrop-blur-[2px] transition-colors duration-300 hover:bg-white hover:text-[#1b2a6b]"
            >
              <SmallMark />
              Découvrir nos services
            </Link>
          </motion.div>
        </div>
      </div>
      {/* Slide indicators */}
      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 z-10 flex items-center gap-2">
        {HERO_IMAGES.map((img, i) => (
          <button
            key={img.src}
            type="button"
            onClick={() => setSlide(i)}
            aria-label={`Afficher l'image ${i + 1}`}
            aria-current={i === slide}
            className={`h-1 rounded-full transition-all duration-500 ${
              i === slide ? "w-8 bg-white" : "w-3 bg-white/40 hover:bg-white/70"
            }`}
          />
        ))}
      </div>
    </section>
  );
}
