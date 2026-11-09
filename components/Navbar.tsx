"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import { Menu, X } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";

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

const NAV_LINKS = [
  { name: "Accueil", href: "/" },
  { name: "À Propos", href: "/#about" },
  { name: "Mission & Valeurs", href: "/mission-valeurs" },
  { name: "Équipe", href: "/#equipe" },
  { name: "Nos Services", href: "/#services" },
  { name: "Réalisations", href: "/realisations" },
  { name: "Formations", href: "/formations" },
  { name: "Partenaires", href: "/partenaires" },
  { name: "FAQ", href: "/faq" },
  { name: "Contact", href: "/contact" },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const pathname = usePathname() || "/";

  // Transparent over the hero, solid once the page is scrolled
  useEffect(() => {
    const onScroll = () => setIsScrolled(window.scrollY > 40);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Lock page scroll and close on Escape while the menu is open
  useEffect(() => {
    if (!isOpen) return;
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && setIsOpen(false);
    window.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => {
      window.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  const close = () => setIsOpen(false);

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 text-white transition-all duration-500 ${
          isScrolled ? "bg-white shadow-md" : "bg-white"
        }`}
      >
        <div
          className={`container mx-auto px-6 md:px-10 lg:px-20 flex items-center justify-between transition-all duration-500 ${
            isScrolled ? "py-2" : "py-3 md:py-4"
          }`}
        >
          {/* Logo */}
          <Link href="/" onClick={close} className="flex items-center group" aria-label="NTEMO Consulting, accueil">
            <Image
              src="/logo-ntemo-officiel.svg"
              alt="NTEMO Consulting"
              width={142}
              height={112}
              priority
              className={`w-auto transition-all duration-500 group-hover:scale-105 ${
                isScrolled ? "h-11 md:h-12" : "h-12 md:h-16"
              }`}
            />
          </Link>

          {/* Menu toggle */}
          <button
            type="button"
            onClick={() => setIsOpen((v) => !v)}
            aria-label={isOpen ? "Fermer le menu" : "Ouvrir le menu"}
            aria-expanded={isOpen}
            aria-controls="main-menu"
            className="p-2 -mr-2 text-[#0a1d6e] hover:text-[#2488cd] transition-colors"
          >
            {isOpen ? <X size={30} strokeWidth={2} /> : <Menu size={30} strokeWidth={2} />}
          </button>
        </div>
      </header>

      {/* Side drawer menu (opens from the left) */}
      <AnimatePresence>
        {isOpen && (
          <>
            <motion.div
              key="backdrop"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
              onClick={close}
              className="fixed inset-0 z-[60] bg-black/50"
              aria-hidden="true"
            />
            <motion.aside
              key="drawer"
              id="main-menu"
              role="dialog"
              aria-modal="true"
              aria-label="Menu"
              initial={{ x: "-100%" }}
              animate={{ x: 0 }}
              exit={{ x: "-100%" }}
              transition={{ type: "tween", duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
              className="fixed top-0 left-0 bottom-0 z-[70] w-full max-w-[420px] bg-white shadow-2xl overflow-y-auto flex flex-col"
            >
              <div className="flex justify-end px-6 pt-6">
                <button
                  type="button"
                  onClick={close}
                  aria-label="Fermer le menu"
                  className="p-2 -mr-2 text-[#0a1d6e] hover:text-[#2488cd] transition-colors"
                >
                  <X size={26} strokeWidth={2.5} />
                </button>
              </div>

              <nav aria-label="Menu principal" className="flex-1 flex flex-col justify-center px-10 py-10">
                <ul className="space-y-5">
                  {NAV_LINKS.map((link) => {
                    const active = link.href === pathname || link.href === pathname.replace(/\/$/, "");
                    return (
                      <li key={link.name}>
                        <Link
                          href={link.href}
                          onClick={close}
                          aria-current={active ? "page" : undefined}
                          className={`text-[17px] transition-colors ${
                            active ? "text-[#2488cd] font-semibold" : "text-slate-800 hover:text-[#2488cd]"
                          }`}
                        >
                          {link.name}
                        </Link>
                      </li>
                    );
                  })}
                </ul>

                <div className="flex items-center gap-2.5 mt-12">
                  {SOCIAL_LINKS.map((social) => (
                    <a
                      key={social.label}
                      href={social.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={social.label}
                      className="w-7 h-7 rounded-full bg-[#0a1d6e] text-white flex items-center justify-center hover:bg-[#2488cd] transition-colors [&_svg]:w-3.5 [&_svg]:h-3.5"
                    >
                      {social.icon}
                    </a>
                  ))}
                </div>
              </nav>
            </motion.aside>
          </>
        )}
      </AnimatePresence>
    </>
  );
}
