import Link from "next/link";
import Image from "next/image";
import { Phone, Mail, MapPin } from "lucide-react";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-white text-slate-600 border-t border-slate-200 relative z-10">
      <div className="container mx-auto px-4 md:px-8 py-16 md:py-20">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 mb-12">

          {/* Brand Column */}
          <div className="md:col-span-4">
            <Link href="/" className="inline-flex items-center mb-6 group" aria-label="NTEMO Consulting, accueil">
              <Image
                src="/logo-ntemo-officiel.svg"
                alt="NTEMO Consulting Logo"
                width={142}
                height={112}
                className="h-16 md:h-20 w-auto group-hover:scale-105 transition-all duration-300"
              />
            </Link>
            <p className="text-slate-600 leading-relaxed text-sm max-w-xs">
              Nous mettons notre expertise et notre passion à votre service. Que vous soyez novice ou expérimenté, nous collaborons ensemble.
            </p>
          </div>

          {/* Informations Column */}
          <div className="md:col-span-2">
            <h4 className="text-slate-900 font-bold mb-5 text-sm">Informations</h4>
            <ul className="space-y-3 text-sm">
              {[
                { name: "FAQ", href: "/faq" },
                { name: "Réalisations", href: "/realisations" },
                { name: "Site Map", href: "/" },
                { name: "Politique de cookies", href: "/" },
                { name: "Contact", href: "/contact" },
                { name: "Recrutement", href: "/contact" },
              ].map((item) => (
                <li key={item.name}>
                  <Link href={item.href} className="hover:text-[#2488cd] transition-colors">
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Menu Column */}
          <div className="md:col-span-3">
            <h4 className="text-slate-900 font-bold mb-5 text-sm">Menu</h4>
            <ul className="space-y-3 text-sm">
              {[
                { name: "Accueil", href: "/" },
                { name: "À Propos", href: "/#about" },
                { name: "Marketing & Communication", href: "/services/publicite-reseaux-sociaux" },
                { name: "Production-audiovisuelle", href: "/services/animation-page-pro" },
                { name: "Conseil Financier", href: "/services/conseil-financier" },
                { name: "Photographie (Shooting)", href: "/contact" },
              ].map((item) => (
                <li key={item.name}>
                  <Link href={item.href} className="hover:text-[#2488cd] transition-colors">
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contacts Column */}
          <div className="md:col-span-3">
            <h4 className="text-slate-900 font-bold mb-5 text-sm">Contacts</h4>
            <ul className="space-y-4 text-sm">
              <li>
                <a href="tel:+242064313808" className="flex items-start gap-3 hover:text-[#2488cd] transition-colors">
                  <Phone size={15} className="text-[#2488cd] flex-shrink-0 mt-0.5" />
                  <span className="text-slate-900 font-bold">+242 06 431 38 08</span>
                </a>
              </li>
              <li>
                <a href="mailto:contact@ntemoconsulting.com" className="flex items-start gap-3 hover:text-[#2488cd] transition-colors">
                  <Mail size={15} className="text-[#2488cd] flex-shrink-0 mt-0.5" />
                  <span>contact@ntemoconsulting.com</span>
                </a>
              </li>
              <li>
                <div className="flex items-start gap-3">
                  <MapPin size={15} className="text-[#2488cd] flex-shrink-0 mt-0.5" />
                  <span>Avenue CEMAC, MPILA zone Industrielle Ouenzé – Brazzaville (Congo)</span>
                </div>
              </li>
            </ul>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-slate-200 flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-slate-600">
          <p>© {currentYear} <span className="text-slate-900 font-semibold">NTEMO Consulting</span>. Tous droits réservés.</p>
          <div className="flex items-center gap-6">
            <a href="#" className="hover:text-[#2488cd] transition-colors">Mentions légales</a>
            <a href="#" className="hover:text-[#2488cd] transition-colors">Politique de confidentialité</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
