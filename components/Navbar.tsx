"use client";

import { useState } from "react";
import { ChevronDown, Menu, X } from "lucide-react";
import Link from "next/link";

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
    { name: "FAQ", href: "/#faq" },
    { name: "Formations", href: "/#formations" },
    { name: "Contact", href: "/#contact" },
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-slate-900/60 text-white backdrop-blur-md border-b border-slate-100/10 shadow-sm transition-all duration-300">
      <div className="w-full px-8 md:px-24 flex items-center justify-between py-3">
        {/* Logo */}
        <Link href="/" className="flex flex-col items-center group">
          <svg width="24" height="28" viewBox="0 0 24 32" fill="none" xmlns="http://www.w3.org/2000/svg" className="group-hover:scale-105 transition-transform">
            <path d="M0 0H6.5L17.5 18V0H24V32H17.5L6.5 14V32H0V0Z" fill="url(#navLogoGrad)" />
            <defs>
              <linearGradient id="navLogoGrad" x1="0" y1="0" x2="24" y2="32" gradientUnits="userSpaceOnUse">
                <stop stopColor="#34c4eb" />
                <stop offset="1" stopColor="#0a549d" />
              </linearGradient>
            </defs>
          </svg>
          <div className="flex flex-col items-center mt-1">
            <span className="text-[12px] font-black leading-none tracking-tighter text-white uppercase">
              Ntémo
            </span>
            <span className="text-[7px] font-bold leading-none tracking-widest text-[#2488cd] mt-[2px] uppercase">
              Consulting
            </span>
          </div>
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

        {/* Phone CTA - Desktop */}
        <a
          href="tel:+242064313808"
          className="hidden md:flex items-center gap-2 bg-[#34c4eb]/10 hover:bg-[#34c4eb]/20 border border-[#34c4eb]/30 hover:border-[#34c4eb]/60 text-white px-4 py-2 rounded-full text-sm font-bold transition-all duration-300 group"
        >
          <span className="w-2 h-2 rounded-full bg-[#34c4eb] animate-pulse shrink-0" />
          +242 064313808
        </a>

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
