"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ChevronRight } from "lucide-react";

type PageHeaderProps = {
  /** Bold italic part of the title */
  strong: string;
  /** Light part of the title */
  light?: string;
  /** Breadcrumb label for the current page */
  crumb: string;
  intro: string;
  image: string;
};

// Page banner in the same style as the home hero: full-width photo,
// navy/indigo grading, bold-italic + light title, breadcrumb.
export default function PageHeader({ strong, light, crumb, intro, image }: PageHeaderProps) {
  return (
    <section className="relative h-[62vh] min-h-[440px] max-h-[640px] w-full overflow-hidden">
      <motion.div
        initial={{ scale: 1.12 }}
        animate={{ scale: 1 }}
        transition={{ duration: 6, ease: "easeOut" }}
        className="absolute inset-0"
      >
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img src={image} alt="" className="w-full h-full object-cover" />
      </motion.div>

      <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />

      <div className="relative z-10 h-full container mx-auto px-6 md:px-10 lg:px-20 flex flex-col justify-end pb-14 md:pb-20">
        <motion.nav
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          aria-label="Fil d'Ariane"
          className="mb-5"
        >
          <ol className="flex items-center gap-2 text-sm text-white/70">
            <li>
              <Link href="/" className="hover:text-white transition-colors">
                Accueil
              </Link>
            </li>
            <li aria-hidden="true">
              <ChevronRight size={14} />
            </li>
            <li aria-current="page" className="text-white">
              {crumb}
            </li>
          </ol>
        </motion.nav>

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3, ease: "easeOut" }}
          className="font-heading text-white text-4xl sm:text-5xl md:text-6xl leading-[1.1] mb-5 uppercase"
        >
          <span className="font-black italic">{strong}</span>
          {light && (
            <>
              {" "}
              <span className="font-light">{light}</span>
            </>
          )}
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="max-w-2xl text-base md:text-lg text-white/85 leading-relaxed"
        >
          {intro}
        </motion.p>
      </div>
    </section>
  );
}
