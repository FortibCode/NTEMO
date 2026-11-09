"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const MIN_DURATION_MS = 5000; // keep the logo on screen long enough to be seen
const MAX_DURATION_MS = 7000; // never block the site longer than this

// Launch screen shown when the site is opened: the NTÊMO logo appears on a
// white page with a loading bar, then the screen lifts to reveal the site.
// It is part of the static HTML, so the site never flashes before it.
export default function SplashScreen() {
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const minDelay = reduced ? 600 : MIN_DURATION_MS;
    const start = performance.now();
    let done = false;

    const hide = () => {
      if (done) return;
      done = true;
      const wait = Math.max(0, minDelay - (performance.now() - start));
      setTimeout(() => setVisible(false), wait);
    };

    if (document.readyState === "complete") hide();
    else window.addEventListener("load", hide, { once: true });
    const safety = setTimeout(hide, MAX_DURATION_MS);

    document.body.style.overflow = "hidden";
    return () => {
      window.removeEventListener("load", hide);
      clearTimeout(safety);
    };
  }, []);

  useEffect(() => {
    if (!visible) document.body.style.overflow = "";
  }, [visible]);

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          key="splash"
          role="status"
          aria-label="Chargement du site NTEMO Consulting"
          exit={{ y: "-100%" }}
          transition={{ duration: 0.8, ease: [0.76, 0, 0.24, 1] }}
          className="fixed inset-0 z-[100] bg-white flex flex-col items-center justify-center"
        >
          <motion.img
            src="/logo-ntemo-officiel.svg"
            alt="NTEMO Consulting"
            initial={{ opacity: 0, scale: 0.85, y: 10 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
            className="w-44 sm:w-56 h-auto"
          />

          {/* Loading bar */}
          <div className="mt-10 h-[3px] w-40 sm:w-52 bg-[#0a1d6e]/10 overflow-hidden">
            <motion.div
              initial={{ x: "-100%" }}
              animate={{ x: "0%" }}
              transition={{ duration: MIN_DURATION_MS / 1000, ease: "easeInOut" }}
              className="h-full w-full bg-gradient-to-r from-[#22b8f0] to-[#0a1d6e]"
            />
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
