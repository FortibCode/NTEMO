import Link from "next/link";
import { Phone, Mail, MapPin } from "lucide-react";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-[#030712] text-slate-400 border-t border-white/5">
      <div className="container mx-auto px-4 md:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 mb-12">

          {/* Brand Column */}
          <div className="md:col-span-4">
            <Link href="/" className="flex items-center gap-3 mb-6">
              <div className="bg-white rounded-xl p-2 flex items-center justify-center">
                <svg width="22" height="26" viewBox="0 0 24 32" fill="black" xmlns="http://www.w3.org/2000/svg">
                  <path d="M0 0H6.5L17.5 18V0H24V32H17.5L6.5 14V32H0V0Z" />
                </svg>
              </div>
              <div>
                <span className="font-black text-xl text-white tracking-tight uppercase">Ntémo</span>
                <span className="block text-[10px] font-bold tracking-[0.2em] text-[#34c4eb] uppercase">Consulting</span>
              </div>
            </Link>
            <p className="text-slate-400 leading-relaxed text-sm max-w-xs">
              Nous mettons notre expertise et notre passion à votre service. Que vous soyez novice ou expérimenté, nous collaborons ensemble.
            </p>
          </div>

          {/* Informations Column */}
          <div className="md:col-span-2">
            <h4 className="text-white font-bold mb-5 text-sm">Informations</h4>
            <ul className="space-y-3 text-sm">
              {[
                { name: "FAQ", href: "/#faq" },
                { name: "Site Map", href: "/" },
                { name: "Politique de cookies", href: "/" },
                { name: "Contact", href: "/#contact" },
                { name: "Recrutement", href: "/#contact" },
              ].map((item) => (
                <li key={item.name}>
                  <Link href={item.href} className="hover:text-[#34c4eb] transition-colors">
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Menu Column */}
          <div className="md:col-span-3">
            <h4 className="text-white font-bold mb-5 text-sm">Menu</h4>
            <ul className="space-y-3 text-sm">
              {[
                { name: "Accueil", href: "/" },
                { name: "À Propos", href: "/#about" },
                { name: "Marketing & Communication", href: "/services/publicite-reseaux-sociaux" },
                { name: "Production-audiovisuelle", href: "/services/animation-page-pro" },
                { name: "Photographie (Shooting)", href: "/#contact" },
              ].map((item) => (
                <li key={item.name}>
                  <Link href={item.href} className="hover:text-[#34c4eb] transition-colors">
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contacts Column */}
          <div className="md:col-span-3">
            <h4 className="text-white font-bold mb-5 text-sm">Contacts</h4>
            <ul className="space-y-4 text-sm">
              <li>
                <a href="tel:+242064313808" className="flex items-start gap-3 hover:text-[#34c4eb] transition-colors">
                  <Phone size={15} className="text-[#34c4eb] flex-shrink-0 mt-0.5" />
                  <span>Tél.: +242 06 431 38 08</span>
                </a>
              </li>
              <li>
                <a href="mailto:contact@ntemoconsulting.com" className="flex items-start gap-3 hover:text-[#34c4eb] transition-colors">
                  <Mail size={15} className="text-[#34c4eb] flex-shrink-0 mt-0.5" />
                  <span>contact@ntemoconsulting.com</span>
                </a>
              </li>
              <li>
                <div className="flex items-start gap-3">
                  <MapPin size={15} className="text-[#34c4eb] flex-shrink-0 mt-0.5" />
                  <span>Avenue CEMAC, MPILA zone Industrielle Ouenzé – Brazzaville (Congo)</span>
                </div>
              </li>
            </ul>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-white/5 flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-slate-600">
          <p>© {currentYear} <span className="text-slate-400 font-semibold">NTEMO Consulting</span>. Tous droits réservés.</p>
          <div className="flex items-center gap-6">
            <a href="#" className="hover:text-slate-400 transition-colors">Mentions légales</a>
            <a href="#" className="hover:text-slate-400 transition-colors">Politique de confidentialité</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
