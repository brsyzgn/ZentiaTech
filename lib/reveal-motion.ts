/** Ana sayfa: scroll ile görünür. Alt sayfalar: mount'ta hemen görünür. */
export function getRevealProps(animateOnMount = false) {
  if (animateOnMount) {
    return {
      initial: "visible" as const,
      animate: "visible" as const,
    };
  }

  return {
    initial: "hidden" as const,
    whileInView: "visible" as const,
    viewport: { once: true, amount: 0.12 as const },
  };
}
