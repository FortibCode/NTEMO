"use client";

import { useCallback, useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { ChevronLeft, ChevronRight, ArrowUpRight } from "lucide-react";
import { servicesData } from "@/app/services/[slug]/services-data";

// Headline split: bold italic part + light part, as in the reference design
const slides: { slug: string; strong: string; light: string }[] = [
  { slug: "publicite-reseaux-sociaux", strong: "Publicité", light: "Réseaux Sociaux" },
  { slug: "animation-page-pro", strong: "Animation", light: "Page Pro" },
  { slug: "referencement-naturel-seo", strong: "Référencement", light: "Naturel (SEO)" },
  { slug: "google-adwords", strong: "Google", light: "AdWords" },
  { slug: "creation-site-web", strong: "Création", light: "Site Web" },
  { slug: "creation-application-mobile", strong: "Application", light: "Mobile" },
  { slug: "site-responsive-mobile", strong: "Site", light: "Responsive/Mobile" },
  { slug: "conseil-financier", strong: "Conseil", light: "Financier" },
];

const AUTOPLAY_MS = 7000;

const imageVariants = {
  enter: (dir: number) => ({ opacity: 0, x: dir > 0 ? 60 : -60, scale: 1.05 }),
  center: { opacity: 1, x: 0, scale: 1 },
  exit: (dir: number) => ({ opacity: 0, x: dir > 0 ? -60 : 60, scale: 1.05 }),
};

const textVariants = {
  enter: (dir: number) => ({ opacity: 0, y: dir > 0 ? 24 : -24 }),
  center: { opacity: 1, y: 0 },
  exit: (dir: number) => ({ opacity: 0, y: dir > 0 ? -24 : 24 }),
};

export default function ServicesSection() {
  const [[index, direction], setSlide] = useState<[number, number]>([0, 0]);
  const [paused, setPaused] = useState(false);

  const paginate = useCallback((dir: number) => {
    setSlide(([i]) => [(i + dir + slides.length) % slides.length, dir]);
  }, []);

  const goTo = (i: number) => setSlide(([cur]) => [i, i > cur ? 1 : -1]);

  useEffect(() => {
    if (paused) return;
    const id = setTimeout(() => paginate(1), AUTOPLAY_MS);
    return () => clearTimeout(id);
  }, [index, paused, paginate]);

  const slide = slides[index];
  const data = servicesData[slide.slug];

  return (
    <section id="services" className="py-24 overflow-hidden">
      <div className="container mx-auto px-4 md:px-8">

        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-4xl md:text-5xl font-black font-heading text-white mb-5 leading-tight uppercase"
          >
            Nos Services
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-lg text-slate-300"
          >
            Chez NTEMO Consulting, nous activons les leviers stratégiques essentiels pour propulser votre entreprise et la faire briller dans un marché hautement concurrentiel.
          </motion.p>
        </div>

        {/* Carousel */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.7 }}
          className="relative max-w-6xl mx-auto"
          onMouseEnter={() => setPaused(true)}
          onMouseLeave={() => setPaused(false)}
          aria-roledescription="carousel"
          aria-label="Nos services"
        >
          <div className="grid grid-cols-1 lg:grid-cols-2 lg:h-[520px] overflow-hidden">

            {/* Left: photo + headline */}
            <div className="relative h-[320px] sm:h-[400px] lg:h-full overflow-hidden bg-slate-900">
              <AnimatePresence initial={false} custom={direction}>
                <motion.div
                  key={slide.slug}
                  custom={direction}
                  variants={imageVariants}
                  initial="enter"
                  animate="center"
                  exit="exit"
                  transition={{ duration: 0.7, ease: "easeOut" }}
                  className="absolute inset-0"
                  drag="x"
                  dragConstraints={{ left: 0, right: 0 }}
                  dragElastic={0.2}
                  onDragEnd={(_, info) => {
                    if (info.offset.x < -80) paginate(1);
                    else if (info.offset.x > 80) paginate(-1);
                  }}
                >
                  <Image
                    src={data.image.replace("w=800", "w=1400")}
                    alt={data.title}
                    fill
                    sizes="(max-width: 1024px) 100vw, 50vw"
                    className="object-cover pointer-events-none"
                    priority={index === 0}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-black/10" />
                  <h3 className="absolute left-8 md:left-14 right-8 bottom-10 md:bottom-16 text-3xl md:text-[2.6rem] leading-tight text-white font-heading uppercase">
                    <span className="font-black italic">{slide.strong}</span>{" "}
                    <span className="font-light">{slide.light}</span>
                  </h3>
                </motion.div>
              </AnimatePresence>

              <button
                type="button"
                onClick={() => paginate(-1)}
                aria-label="Service précédent"
                className="absolute left-3 md:left-5 top-1/2 -translate-y-1/2 z-10 p-2 text-white/90 hover:text-white hover:scale-110 transition-transform"
              >
                <ChevronLeft size={34} strokeWidth={2.5} />
              </button>
            </div>

            {/* Right: description panel */}
            <div className="relative bg-[#2b4c8c] flex items-center px-8 sm:px-12 lg:pl-16 lg:pr-20 py-12 lg:py-0 min-h-[300px]">
              <AnimatePresence mode="wait" initial={false} custom={direction}>
                <motion.div
                  key={slide.slug}
                  custom={direction}
                  variants={textVariants}
                  initial="enter"
                  animate="center"
                  exit="exit"
                  transition={{ duration: 0.45, ease: "easeOut" }}
                >
                  <p className="text-white/90 text-base md:text-[17px] leading-relaxed mb-8">
                    {data.description}
                  </p>
                  <Link
                    href={`/services/${slide.slug}`}
                    className="group inline-flex items-center gap-3 rounded-full border border-white/80 px-6 py-3 text-sm font-semibold uppercase tracking-wider text-white transition-colors duration-300 hover:bg-white hover:text-[#2b4c8c]"
                  >
                    <ArrowUpRight size={18} className="transition-transform duration-300 group-hover:rotate-45" />
                    En savoir plus
                  </Link>
                </motion.div>
              </AnimatePresence>

              <button
                type="button"
                onClick={() => paginate(1)}
                aria-label="Service suivant"
                className="absolute right-3 md:right-5 top-1/2 -translate-y-1/2 z-10 p-2 text-white/90 hover:text-white hover:scale-110 transition-transform"
              >
                <ChevronRight size={34} strokeWidth={2.5} />
              </button>
            </div>
          </div>

          {/* Pagination */}
          <div className="flex items-center justify-center mt-8">
            <div className="flex items-center gap-2">
              {slides.map((s, i) => (
                <button
                  key={s.slug}
                  type="button"
                  onClick={() => goTo(i)}
                  aria-label={`Afficher ${servicesData[s.slug].title}`}
                  aria-current={i === index}
                  className={`h-1.5 rounded-full transition-all duration-500 ${
                    i === index ? "w-10 bg-[#34c4eb]" : "w-3 bg-white/20 hover:bg-white/40"
                  }`}
                />
              ))}
            </div>
          </div>
        </motion.div>

      </div>
    </section>
  );
}
