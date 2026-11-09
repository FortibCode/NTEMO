// Shared entrance for the split "panel + photo" blocks: each half slides in
// from its own side and the two meet in the middle with a soft spring.
const transition = { type: "spring", stiffness: 55, damping: 16, mass: 0.9 } as const;

const offset = (side: "left" | "right") => (side === "left" ? -180 : 180);

/** Scroll-triggered version (blocks further down the page). */
export function slideIn(side: "left" | "right", delay = 0) {
  return {
    initial: { opacity: 0, x: offset(side) },
    whileInView: { opacity: 1, x: 0 },
    viewport: { once: true, margin: "-80px" },
    transition: { ...transition, delay },
  };
}

/** On-load version (blocks visible as soon as the page opens). */
export function slideInOnLoad(side: "left" | "right", delay = 0) {
  return {
    initial: { opacity: 0, x: offset(side) },
    animate: { opacity: 1, x: 0 },
    transition: { ...transition, delay },
  };
}
