"use client";

import { use } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowLeft, CheckCircle2, MessageCircle, Phone } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { servicesData } from "./services-data";

export default function ServiceContent({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = use(params);
  const service = servicesData[slug];

  if (!service) {
    return (
      <>
        <Navbar />
        <div className="min-h-screen flex flex-col items-center justify-center bg-[#01030c] text-white px-4">
          <h1 className="text-3xl font-black mb-4">Service non trouvé</h1>
          <p className="text-slate-400 mb-8">Désolé, ce service n&apos;existe pas ou a été déplacé.</p>
          <Link href="/" className="flex items-center gap-2 bg-[#34c4eb] text-slate-900 px-6 py-3 rounded-full font-bold">
            <ArrowLeft size={18} />
            Retour à l&apos;accueil
          </Link>
        </div>
        <Footer />
      </>
    );
  }

  return (
    <>
      <Navbar />
      <main className="min-h-screen bg-[#01030c] pt-28 pb-20 relative overflow-hidden">
        <div className="fixed inset-0 pointer-events-none z-0">
          <div className="absolute top-0 left-1/4 w-[600px] h-[600px] bg-[#34c4eb]/5 rounded-full blur-[140px]" />
          <div className="absolute bottom-1/3 right-0 w-[500px] h-[500px] bg-[#1e40af]/8 rounded-full blur-[120px]" />
        </div>
        <section className="relative py-20 overflow-hidden z-10">
          <div className="absolute inset-0 pointer-events-none">
            <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-[#34c4eb]/10 rounded-full blur-[120px]" />
            <div className="absolute inset-0 bg-[radial-gradient(rgba(52,196,235,0.03)_1px,transparent_1px)] [background-size:24px_24px]" />
          </div>
          <div className="container mx-auto px-4 md:px-8 relative z-10">
            <Link href="/#services" className="inline-flex items-center gap-2 text-sm text-[#34c4eb] hover:text-white mb-6 font-bold transition-colors">
              <ArrowLeft size={16} />
              Retour aux services
            </Link>
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.05 }}
              className="text-4xl md:text-6xl font-black font-heading tracking-tight mb-4 text-white"
            >
              {service.title}
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="text-lg md:text-2xl text-slate-400 font-medium max-w-3xl leading-relaxed"
            >
              {service.subtitle}
            </motion.p>
          </div>
        </section>
        <section className="container mx-auto px-4 md:px-8 mt-10 md:mt-16 relative z-10">
          <div className="flex flex-col lg:flex-row items-start gap-16 lg:gap-24">
            <div className="w-full lg:w-7/12">
              <h2 className="text-2xl md:text-3xl font-black text-white font-heading mb-6">
                Pourquoi choisir notre expertise ?
              </h2>
              <p className="text-slate-400 text-lg leading-relaxed font-medium mb-10">
                {service.description}
              </p>
              <h3 className="text-xl font-black text-white font-heading mb-6">
                Nos actions clés pour votre succès :
              </h3>
              <ul className="space-y-4">
                {service.features.map((feature, idx) => (
                  <motion.li
                    key={idx}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: idx * 0.1 }}
                    className="flex items-start gap-4 bg-white/[0.03] border border-white/10 rounded-2xl p-5 hover:border-[#34c4eb]/30 hover:bg-white/[0.05] transition-all duration-300"
                  >
                    <div className="mt-0.5 flex-shrink-0 w-7 h-7 rounded-full bg-[#34c4eb]/10 text-[#34c4eb] flex items-center justify-center border border-[#34c4eb]/20">
                      <CheckCircle2 size={15} />
                    </div>
                    <span className="text-slate-300 font-medium leading-relaxed">{feature}</span>
                  </motion.li>
                ))}
              </ul>
            </div>
            <div className="w-full lg:w-5/12 flex flex-col gap-8">
              <div className="relative h-[250px] md:h-[340px] rounded-[2.5rem] overflow-hidden shadow-2xl border border-white/10">
                <div className="absolute inset-0 bg-gradient-to-t from-[#01030c]/70 to-transparent z-10" />
                <img src={service.image} alt={service.title} className="w-full h-full object-cover" />
              </div>
              <div className="bg-white/[0.04] backdrop-blur-md p-8 rounded-[2.5rem] border border-white/10 relative overflow-hidden">
                <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-[#34c4eb] to-[#2488cd]" />
                <h3 className="text-lg font-black text-white font-heading mb-6">
                  Bénéfices constatés :
                </h3>
                <ul className="grid grid-cols-1 gap-4">
                  {service.benefits.map((benefit, idx) => (
                    <li key={idx} className="flex items-center gap-3">
                      <div className="w-2 h-2 rounded-full bg-[#34c4eb] shadow-[0_0_8px_#34c4eb] shrink-0" />
                      <span className="text-slate-300 font-bold text-sm">{benefit}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </section>
        <section className="container mx-auto px-4 md:px-8 mt-20 md:mt-28 relative z-10">
          <div className="bg-gradient-to-br from-slate-900 to-[#01030c] text-white p-10 md:p-16 rounded-[3rem] shadow-2xl relative overflow-hidden flex flex-col md:flex-row md:items-center md:justify-between gap-8 border border-white/10">
            <div className="absolute inset-0 pointer-events-none">
              <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-[#34c4eb]/10 rounded-full blur-[100px]" />
              <div className="absolute bottom-0 left-0 w-[300px] h-[300px] bg-[#1e40af]/10 rounded-full blur-[80px]" />
            </div>
            <div className="relative z-10 max-w-2xl">
              <h2 className="text-3xl md:text-4xl font-black font-heading mb-4 leading-tight text-white">
                Prêt à faire décoller vos conversions ?
              </h2>
              <p className="text-slate-400 font-medium leading-relaxed">
                Contactez notre agence dès maintenant. Nos experts répondent à toutes vos questions et élaborent une proposition sur mesure.
              </p>
            </div>
            <div className="relative z-10 flex flex-wrap gap-4 flex-shrink-0">
              <a href="https://wa.me/242064313808" target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 bg-green-500 hover:bg-green-600 text-white px-8 py-4 rounded-full font-bold text-base transition-colors shadow-lg shadow-green-500/20">
                <MessageCircle size={20} />
                <span>WhatsApp</span>
              </a>
              <a href="tel:+242064313808" className="flex items-center gap-3 bg-[#34c4eb] hover:bg-[#2488cd] text-slate-900 px-8 py-4 rounded-full font-bold text-base transition-colors shadow-lg shadow-[#34c4eb]/20">
                <Phone size={20} />
                <span>Appel direct</span>
              </a>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
