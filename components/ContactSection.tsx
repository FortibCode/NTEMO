"use client";

import { motion } from "framer-motion";
import { Phone, MessageCircle, Mail, MapPin, Clock } from "lucide-react";

// Simple SVG social icons
const FacebookIcon = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
    <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
  </svg>
);

const XIcon = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
  </svg>
);

const WhatsAppIcon = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 0 1 2.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0 0 12.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 0 0 5.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 0 0-3.48-8.413z"/>
  </svg>
);


export default function ContactSection() {
  const phoneNumber = "+242064313808";
  const whatsappNumber = "242064313808";
  const email = "contact@ntemoconsulting.com";

  const socialLinks = [
    {
      icon: <FacebookIcon />,
      href: "https://www.facebook.com/profile.php?id=61586582638909",
      label: "Facebook",
      bg: "bg-[#1877f2] hover:bg-[#0e5fc0]",
    },
    {
      icon: <XIcon />,
      href: "https://x.com/NtemoC37781",
      label: "X (Twitter)",
      bg: "bg-black hover:bg-slate-800",
    },
    {
      icon: <WhatsAppIcon />,
      href: `https://wa.me/${whatsappNumber}`,
      label: "WhatsApp",
      bg: "bg-[#25d366] hover:bg-[#1db554]",
    },
  ];

  return (
    <section id="contact" className="py-24 relative overflow-hidden">

      {/* Decorative background blobs */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 right-[-15%] w-[600px] h-[600px] bg-[#34c4eb]/10 rounded-full blur-[120px]" />
        <div className="absolute bottom-0 left-[-10%] w-[400px] h-[400px] bg-[#1e40af]/15 rounded-full blur-[100px]" />
        <div className="absolute inset-0 bg-[radial-gradient(rgba(255,255,255,0.04)_1px,transparent_1px)] [background-size:24px_24px]" />
      </div>

      <div className="container mx-auto px-4 md:px-8 relative z-10">

        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <motion.span
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-block py-2 px-4 rounded-full bg-[#34c4eb]/10 text-[#34c4eb] font-bold text-xs uppercase tracking-[0.2em] mb-4"
          >
            Nous Contacter
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-4xl md:text-5xl font-black text-white font-heading mb-5 leading-tight"
          >
            Prêt à collaborer ?<br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#34c4eb] to-[#7fdbf5]">Parlons-en.</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-lg text-slate-200"
          >
            Contactez notre équipe dès aujourd'hui. Nous sommes disponibles par téléphone ou sur WhatsApp pour une réponse rapide.
          </motion.p>
        </div>

        {/* Contact Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-3xl mx-auto">

          {/* WhatsApp Card */}
          <motion.a
            href={`https://wa.me/${whatsappNumber}`}
            target="_blank"
            rel="noopener noreferrer"
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            whileHover={{ y: -8, scale: 1.02 }}
            className="group relative overflow-hidden flex flex-col items-center justify-center p-10 bg-green-500/10 hover:bg-green-500/20 border-2 border-green-500/30 hover:border-green-400/70 rounded-3xl text-center transition-all duration-300 cursor-pointer shadow-[0_0_30px_rgba(34,197,94,0.1)] hover:shadow-[0_0_50px_rgba(34,197,94,0.25)]"
          >
            <div className="absolute inset-0 bg-gradient-to-br from-green-500/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-3xl" />
            <div className="w-20 h-20 rounded-full bg-green-500/20 text-green-400 flex items-center justify-center mb-6 group-hover:bg-green-500 group-hover:text-white transition-all duration-300 shadow-lg relative z-10">
              <MessageCircle size={36} />
            </div>
            <h3 className="text-2xl font-black text-white mb-2 font-heading relative z-10">WhatsApp</h3>
            <p className="text-slate-200 group-hover:text-green-300 transition-colors relative z-10 font-medium">Notre équipe vous répond instantanément</p>
          </motion.a>

          {/* Call Card */}
          <motion.a
            href={`tel:${phoneNumber}`}
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            whileHover={{ y: -8, scale: 1.02 }}
            className="group relative overflow-hidden flex flex-col items-center justify-center p-10 bg-[#34c4eb]/10 hover:bg-[#34c4eb]/20 border-2 border-[#34c4eb]/30 hover:border-[#34c4eb]/70 rounded-3xl text-center transition-all duration-300 cursor-pointer shadow-[0_0_30px_rgba(52,196,235,0.1)] hover:shadow-[0_0_50px_rgba(52,196,235,0.25)]"
          >
            <div className="absolute inset-0 bg-gradient-to-br from-[#34c4eb]/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-3xl" />
            <div className="w-20 h-20 rounded-full bg-[#34c4eb]/20 text-[#34c4eb] flex items-center justify-center mb-6 group-hover:bg-[#34c4eb] group-hover:text-white transition-all duration-300 shadow-lg relative z-10">
              <Phone size={36} />
            </div>
            <h3 className="text-2xl font-black text-white mb-2 font-heading relative z-10">Appel Direct</h3>
            <p className="text-slate-200 group-hover:text-[#34c4eb] transition-colors relative z-10 font-medium">Nous sommes à votre écoute</p>
          </motion.a>
        </div>

        {/* Social + Info banner — matching the screenshot */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3, duration: 0.6 }}
          className="mt-16 relative rounded-[2.5rem] overflow-hidden"
        >
          {/* Gradient background */}
          <div className="absolute inset-0 bg-gradient-to-br from-[#0f3460] via-[#0a2a60] to-[#061535]" />
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(52,196,235,0.15),transparent_70%)]" />

          <div className="relative z-10 py-14 px-8 flex flex-col items-center text-center gap-6">

            {/* Company Name */}
            <h3 className="text-3xl md:text-4xl font-black text-white tracking-widest uppercase">
              NTEMO CONSULTING
            </h3>

            {/* Social Icons */}
            <div className="flex items-center gap-3">
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={social.label}
                  className={`w-10 h-10 rounded-full ${social.bg} text-white flex items-center justify-center transition-all duration-300 hover:scale-110 shadow-lg`}
                >
                  {social.icon}
                </a>
              ))}
            </div>

            {/* Phone Button */}
            <a
              href={`tel:${phoneNumber}`}
              className="flex items-center gap-3 bg-[#0a192f]/70 border border-white/20 text-white px-8 py-3 rounded-full font-bold tracking-widest text-sm hover:bg-[#34c4eb]/20 hover:border-[#34c4eb]/50 transition-all duration-300"
            >
              <Phone size={16} className="text-[#34c4eb]" />
              +242064313808
            </a>

            {/* Hours */}
            <div className="flex items-center gap-2 text-slate-300 text-sm font-medium">
              <Clock size={15} className="text-[#34c4eb]" />
              Service disponible du Lundi au Vendredi 8h30 à 17h
            </div>

            {/* Address */}
            <div className="flex items-center gap-2 text-slate-300 text-sm font-medium">
              <MapPin size={15} className="text-[#34c4eb]" />
              Adresse : Avenue CEMAC, MPILA zone industrielle Ouenzé – Brazzaville (Congo)
            </div>

            {/* Email */}
            <a href={`mailto:${email}`} className="flex items-center gap-2 text-slate-400 hover:text-[#34c4eb] transition-colors text-sm">
              <Mail size={15} className="text-[#34c4eb]" />
              {email}
            </a>

          </div>
        </motion.div>

      </div>
    </section>
  );
}
