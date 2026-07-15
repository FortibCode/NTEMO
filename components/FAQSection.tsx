"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown } from "lucide-react";

const faqs = [
  {
    question: "Quels types d'entreprises accompagnez-vous ?",
    answer: "Nous accompagnons tout type de structure : startups, PME, grandes entreprises, institutions publiques, associations et porteurs de projets. Notre approche sur mesure s'adapte à la taille et aux besoins spécifiques de chaque client.",
  },
  {
    question: "Comment se déroule un projet avec NTEMO Consulting ?",
    answer: "Chaque projet commence par une phase de découverte où nous analysons vos besoins, votre marché et vos objectifs. Nous élaborons ensuite une stratégie sur mesure, la mettons en œuvre avec votre équipe et assurons un suivi régulier pour garantir les résultats.",
  },
  {
    question: "Proposez-vous des forfaits ou travaillez-vous sur devis ?",
    answer: "Nous travaillons principalement sur devis pour garantir des solutions parfaitement adaptées à vos besoins et à votre budget. Contactez-nous pour obtenir une proposition personnalisée sans engagement.",
  },
  {
    question: "Quels sont vos délais de réalisation ?",
    answer: "Les délais varient selon la nature et la complexité du projet. Un site vitrine peut être livré en 2 à 4 semaines, tandis qu'une stratégie de communication complète peut prendre 4 à 8 semaines. Nous vous communiquons un calendrier précis dès le début du projet.",
  },
  {
    question: "Proposez-vous un suivi après la livraison du projet ?",
    answer: "Oui, absolument. Nous proposons un accompagnement continu sous forme de maintenance, de formation de vos équipes ou d'un contrat de suivi mensuel pour assurer la performance de vos actions dans la durée.",
  },
];

export default function FAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section id="faq" className="py-24 bg-white">
      <div className="container mx-auto px-4 md:px-8 max-w-4xl">

        {/* Header */}
        <div className="text-center mb-16">
          <motion.span
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-block py-2 px-4 rounded-full bg-[#34c4eb]/10 text-[#2488cd] font-bold text-xs uppercase tracking-[0.2em] mb-4"
          >
            Questions Fréquentes
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-4xl md:text-5xl font-black text-[#0a192f] font-heading leading-tight"
          >
            Vous avez des <span className="font-serif italic font-normal text-[#2488cd] tracking-wide">questions ?</span>
          </motion.h2>
        </div>

        {/* FAQ Accordion */}
        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.07 }}
              className={`rounded-2xl border transition-all duration-300 overflow-hidden ${
                openIndex === index
                  ? "border-[#34c4eb]/50 bg-[#34c4eb]/5 shadow-lg"
                  : "border-slate-200 bg-white hover:border-[#34c4eb]/30"
              }`}
            >
              <button
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                className="w-full text-left flex items-center justify-between p-6 gap-4 cursor-pointer"
              >
                <span className="text-lg font-bold text-[#0a192f]">{faq.question}</span>
                <motion.div
                  animate={{ rotate: openIndex === index ? 180 : 0 }}
                  transition={{ duration: 0.3 }}
                  className={`flex-shrink-0 w-8 h-8 rounded-full flex items-center justify-center transition-colors ${
                    openIndex === index ? "bg-[#34c4eb] text-white" : "bg-slate-100 text-slate-600"
                  }`}
                >
                  <ChevronDown size={18} />
                </motion.div>
              </button>

              <AnimatePresence>
                {openIndex === index && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3, ease: "easeInOut" }}
                  >
                    <p className="px-6 pb-6 text-slate-600 leading-relaxed font-medium">
                      {faq.answer}
                    </p>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
