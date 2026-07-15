"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { Share2, Smartphone, Search, BarChart2, Globe, Layers, Layout } from "lucide-react";

const services = [
  {
    icon: <Share2 className="w-7 h-7" />,
    title: "Publicité Réseaux Sociaux",
    description: "Des campagnes percutantes sur Facebook, Instagram, TikTok et LinkedIn pour booster votre visibilité et générer des leads qualifiés.",
    color: "from-[#34c4eb] to-[#2488cd]",
    slug: "publicite-reseaux-sociaux",
  },
  {
    icon: <Layers className="w-7 h-7" />,
    title: "Animation Page Pro",
    description: "Gestion et animation professionnelle de vos pages d'entreprise pour bâtir une communauté engagée et fidèle.",
    color: "from-[#6366f1] to-[#8b5cf6]",
    slug: "animation-page-pro",
  },
  {
    icon: <Search className="w-7 h-7" />,
    title: "Référencement Naturel (SEO)",
    description: "Optimisez votre positionnement sur Google pour attirer un trafic qualifié et durable sans dépenser en publicité.",
    color: "from-[#10b981] to-[#34d399]",
    slug: "referencement-naturel-seo",
  },
  {
    icon: <BarChart2 className="w-7 h-7" />,
    title: "Google AdWords",
    description: "Des campagnes Google Ads ciblées et rentables pour apparaître en tête des résultats au bon moment.",
    color: "from-[#f59e0b] to-[#fbbf24]",
    slug: "google-adwords",
  },
  {
    icon: <Globe className="w-7 h-7" />,
    title: "Création Site Web",
    description: "Des sites web modernes, rapides et sur mesure qui convertissent vos visiteurs en clients.",
    color: "from-[#ec4899] to-[#f43f5e]",
    slug: "creation-site-web",
  },
  {
    icon: <Smartphone className="w-7 h-7" />,
    title: "Création Application Mobile",
    description: "Développement d'applications iOS et Android ergonomiques pour répondre aux besoins de vos utilisateurs.",
    color: "from-[#34c4eb] to-[#6366f1]",
    slug: "creation-application-mobile",
  },
  {
    icon: <Layout className="w-7 h-7" />,
    title: "Site Responsive/Mobile",
    description: "Des interfaces web parfaitement adaptées à tous les écrans pour une expérience utilisateur optimale.",
    color: "from-[#10b981] to-[#34c4eb]",
    slug: "site-responsive-mobile",
  },
];

// Cards arrive alternately from left and right with a rotation and spring effect
const getZigzagVariant = (index: number) => ({
  hidden: {
    opacity: 0,
    x: index % 2 === 0 ? -150 : 150,
    y: 30,
    rotate: index % 2 === 0 ? -10 : 10,
    scale: 0.85,
  },
  visible: {
    opacity: 1,
    x: 0,
    y: 0,
    rotate: 0,
    scale: 1,
    transition: {
      duration: 0.75,
      delay: Math.floor(index / 2) * 0.18,
      type: "spring" as const,
      bounce: 0.35,
    },
  },
});

export default function ServicesSection() {
  return (
    <section id="services" className="py-24 bg-[#030712] overflow-hidden">
      <div className="container mx-auto px-4 md:px-8">

        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-20">
          <motion.span
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="inline-block py-2 px-4 rounded-full bg-[#34c4eb]/10 text-[#34c4eb] font-bold text-xs uppercase tracking-[0.2em] mb-4"
          >
            Nos Services
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-4xl md:text-5xl font-black font-heading text-white mb-5 leading-tight"
          >
            Nos Services{" "}
            <span className="font-serif italic font-normal text-[#34c4eb] tracking-wide">
              d'Expertise
            </span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-lg text-slate-400"
          >
            Chez NTEMO Consulting, nous activons les leviers stratégiques essentiels pour propulser votre entreprise et la faire briller dans un marché hautement concurrentiel.
          </motion.p>
        </div>

        {/* ZigZag Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {services.map((service, index) => (
            <Link 
              key={index}
              href={`/services/${service.slug}`}
              className={`block ${index % 2 !== 0 ? "md:mt-8" : ""}`}
            >
              <motion.div
                variants={getZigzagVariant(index)}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-60px" }}
                whileHover={{
                  y: -10,
                  scale: 1.03,
                  transition: { duration: 0.2, type: "spring", bounce: 0.5 },
                }}
                className="group relative overflow-hidden rounded-3xl p-8 border border-white/10 hover:border-white/25 bg-white/[0.04] cursor-pointer h-full"
              >
                {/* Gradient glow overlay on hover */}
                <div
                  className={`absolute inset-0 bg-gradient-to-br ${service.color} opacity-0 group-hover:opacity-[0.12] transition-opacity duration-500 rounded-3xl`}
                />

                {/* Corner accent dot */}
                <div
                  className={`absolute top-5 right-5 w-2.5 h-2.5 rounded-full bg-gradient-to-br ${service.color} opacity-40 group-hover:opacity-100 group-hover:scale-[2] transition-all duration-500`}
                />

                <div className="flex items-start gap-6 relative z-10">
                  {/* Colored icon block */}
                  <motion.div
                    whileHover={{ rotate: [0, -12, 12, -6, 0] }}
                    transition={{ duration: 0.5 }}
                    className={`flex-shrink-0 w-16 h-16 rounded-2xl bg-gradient-to-br ${service.color} text-white flex items-center justify-center shadow-xl`}
                  >
                    {service.icon}
                  </motion.div>

                  <div className="flex-1 pt-1">
                    <h3 className="text-xl font-black text-white mb-2 font-heading leading-tight">
                      {service.title}
                    </h3>
                    <p className="text-slate-400 leading-relaxed text-sm">
                      {service.description}
                    </p>
                  </div>
                </div>

                {/* Animated bottom line that sweeps on hover */}
                <div
                  className={`absolute bottom-0 left-0 h-[3px] bg-gradient-to-r ${service.color} w-0 group-hover:w-full transition-all duration-500 ease-out rounded-b-3xl`}
                />
              </motion.div>
            </Link>
          ))}
        </div>

      </div>
    </section>
  );
}
