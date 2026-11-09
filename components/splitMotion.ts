// Shared entrance for the split "panel + photo" blocks: each half slides in
// from far outside its own side and the two meet in the middle with a spring.
//
// The halves start off-screen, so they can't detect scrolling themselves:
// the (static) block wrapper watches the viewport via `splitBlock` and the
// halves animate through variants with `half(...)`.
const transition = { type: "spring", stiffness: 40, damping: 14, mass: 1.1 } as const;

// Each half starts 60% of the screen width away from its final position
const offset = (side: "left" | "right") => (side === "left" ? "-60vw" : "60vw");
const tilt = (side: "left" | "right") => (side === "left" ? -6 : 6);

/** Spread on the block wrapper (a motion element that does not move). */
export const splitBlock = {
  initial: "hidden",
  whileInView: "visible",
  viewport: { once: true, margin: "-80px" },
  // Mouse over (or finger on mobile): the whole card lifts; a tap presses it
  whileHover: { y: -12, transition: { type: "spring", stiffness: 260, damping: 18 } },
  whileTap: { scale: 0.985 },
} as const;

/** Classes for the block wrapper: shadow on hover + `group` for the photo zoom. */
export const splitBlockHoverClass =
  "group transition-shadow duration-500 hover:shadow-[0_40px_80px_-24px_rgba(0,0,0,0.65)]";

/** Classes for the photo inside a block: slow zoom while the card is hovered. */
export const photoHoverClass = "transition-transform duration-[900ms] ease-out group-hover:scale-110";

/** Spread on each half inside a `splitBlock` wrapper. */
export function half(side: "left" | "right", delay = 0) {
  return {
    variants: {
      hidden: { opacity: 0, x: offset(side), rotate: tilt(side), scale: 0.85 },
      visible: { opacity: 1, x: 0, rotate: 0, scale: 1, transition: { ...transition, delay } },
    },
  };
}

/** On-load version (blocks visible as soon as the page opens). */
export function slideInOnLoad(side: "left" | "right", delay = 0) {
  return {
    initial: { opacity: 0, x: offset(side), rotate: tilt(side), scale: 0.85 },
    animate: { opacity: 1, x: 0, rotate: 0, scale: 1 },
    transition: { ...transition, delay },
  };
}
