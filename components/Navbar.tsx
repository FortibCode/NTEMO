"use client";

import { useState } from "react";
import Image from "next/image";
import { ChevronDown, Menu, X } from "lucide-react";
import Link from "next/link";

const FacebookIcon = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
    <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
  </svg>
);

const XIcon = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
  </svg>
);

const WhatsAppIcon = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 0 1 2.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0 0 12.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 0 0 5.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 0 0-3.48-8.413z"/>
  </svg>
);

const SOCIAL_LINKS = [
  {
    icon: <FacebookIcon />,
    href: "https://www.facebook.com/profile.php?id=61586582638909",
    label: "Facebook",
    className: "bg-[#1877f2]/20 hover:bg-[#1877f2] border-[#1877f2]/40 hover:border-[#1877f2] text-[#1877f2] hover:text-white",
  },
  {
    icon: <XIcon />,
    href: "https://x.com/NtemoC37781",
    label: "X (Twitter)",
    className: "bg-white/10 hover:bg-white border-white/20 hover:border-white text-white hover:text-black",
  },
  {
    icon: <WhatsAppIcon />,
    href: "https://wa.me/242064313808",
    label: "WhatsApp",
    className: "bg-[#25d366]/20 hover:bg-[#25d366] border-[#25d366]/40 hover:border-[#25d366] text-[#25d366] hover:text-white",
  },
];

export default function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [isMobileServicesOpen, setIsMobileServicesOpen] = useState(false);

  const navLinks = [
    { name: "Accueil", href: "/" },
    { name: "À Propos", href: "/#about" },
    { 
      name: "Nos Services", 
      href: "/#services",
      dropdown: [
        { name: "Publicité Réseaux Sociaux", slug: "publicite-reseaux-sociaux" },
        { name: "Animation Page Pro", slug: "animation-page-pro" },
        { name: "Référencement Naturel (SEO)", slug: "referencement-naturel-seo" },
        { name: "Google AdWords", slug: "google-adwords" },
        { name: "Création Site Web", slug: "creation-site-web" },
        { name: "Création Application Mobile", slug: "creation-application-mobile" },
        { name: "Site Responsive/Mobile", slug: "site-responsive-mobile" }
      ]
    },
    { name: "Réalisations", href: "/realisations" },
    { name: "FAQ", href: "/#faq" },
    { name: "Formations", href: "/#formations" },
    { name: "Contact", href: "/#contact" },
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-slate-900/60 text-white backdrop-blur-md border-b border-slate-100/10 shadow-sm transition-all duration-300">
      <div className="w-full px-8 md:px-24 flex items-center justify-between py-4 md:py-5">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-3.5 group">
          <Image
            src="/logo-ntemo-rebuilt.png"
            alt="NTEMO Consulting"
            width={80}
            height={80}
            className="w-16 h-16 md:w-20 md:h-20 object-contain rounded-2xl shadow-lg border border-white/10 group-hover:scale-105 transition-transform"
          />
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-6 lg:gap-8">
          {navLinks.map((link) => (
            <div 
              key={link.name} 
              className="relative group"
              onMouseEnter={() => link.dropdown && setIsDropdownOpen(true)}
              onMouseLeave={() => link.dropdown && setIsDropdownOpen(false)}
            >
              <Link
                href={link.href}
                className="flex items-center gap-1 text-[14px] font-semibold text-slate-300 hover:text-white transition-colors py-4"
              >
                {link.name}
                {link.dropdown && <ChevronDown size={14} className="mt-[2px]" />}
              </Link>
              
              {/* Dropdown Menu */}
              {link.dropdown && isDropdownOpen && (
                <div className="absolute top-full left-0 bg-slate-900/90 border border-slate-100/10 shadow-xl py-4 min-w-[260px] flex flex-col z-50 rounded-2xl backdrop-blur-md">
                  {link.dropdown.map((item, idx) => (
                    <Link
                      key={idx}
                      href={`/services/${item.slug}`}
                      className="px-6 py-3 text-[14px] font-semibold text-white/90 hover:bg-white/10 hover:text-white transition-colors"
                    >
                      {item.name}
                    </Link>
                  ))}
                </div>
              )}
            </div>
          ))}
        </nav>

        {/* Social Links - Desktop */}
        <div className="hidden md:flex items-center gap-2">
          {SOCIAL_LINKS.map((social) => (
            <a
              key={social.label}
              href={social.href}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={social.label}
              className={`w-9 h-9 rounded-full border flex items-center justify-center transition-all duration-300 hover:scale-110 ${social.className}`}
            >
              {social.icon}
            </a>
          ))}
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden p-2 text-white hover:text-[#34c4eb]"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Navigation */}
      {isMobileMenuOpen && (
        <div className="md:hidden absolute top-full left-0 right-0 bg-slate-900/95 backdrop-blur-md shadow-xl border-t border-slate-100/10 flex flex-col py-2 rounded-b-2xl">
          {navLinks.map((link) => (
            <div key={link.name}>
              {link.dropdown ? (
                <>
                  <button
                    onClick={() => setIsMobileServicesOpen(!isMobileServicesOpen)}
                    className="w-full flex items-center justify-between px-6 py-4 text-slate-200 font-semibold border-b border-white/10 hover:text-white transition-colors text-left"
                  >
                    <span>{link.name}</span>
                    <ChevronDown 
                      size={16} 
                      className={`transform transition-transform duration-200 ${isMobileServicesOpen ? "rotate-180 text-[#2488cd]" : ""}`} 
                    />
                  </button>
                  {isMobileServicesOpen && (
                    <div className="bg-slate-900/50 flex flex-col py-2 border-b border-slate-100/10">
                      {link.dropdown.map((item, idx) => (
                        <Link
                          key={idx}
                          href={`/services/${item.slug}`}
                          onClick={() => {
                            setIsMobileMenuOpen(false);
                            setIsMobileServicesOpen(false);
                          }}
                          className="px-10 py-3 text-[14px] font-medium text-slate-400 hover:text-white transition-colors"
                        >
                          {item.name}
                        </Link>
                      ))}
                    </div>
                  )}
                </>
              ) : (
                <Link
                  href={link.href}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="block px-6 py-4 text-slate-200 font-semibold border-b border-white/10 hover:text-white transition-colors"
                >
                  {link.name}
                </Link>
              )}
            </div>
          ))}
        </div>
      )}
    </header>
  );
}
