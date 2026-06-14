type ScrollOptions = {
  duration?: number;
  offset?: number;
};

const easeInOutCubic = (t: number) =>
  t < 0.5 ? 4 * t * t * t : 1 - Math.pow(-2 * t + 2, 3) / 2;

export const slowScrollTo = (target: string | number, options: ScrollOptions = {}) => {
  if (typeof window === "undefined") {
    return;
  }

  const { duration = 1200, offset = 104 } = options;

  const absoluteTarget =
    typeof target === "number"
      ? target
      : (() => {
          const element = document.getElementById(target);
          if (!element) {
            return null;
          }

          return element.getBoundingClientRect().top + window.scrollY - offset;
        })();

  if (absoluteTarget === null) {
    return;
  }

  const prefersReducedMotion = window.matchMedia(
    "(prefers-reduced-motion: reduce)"
  ).matches;

  if (prefersReducedMotion || duration <= 0) {
    window.scrollTo({ top: absoluteTarget, behavior: "auto" });
    return;
  }

  const startY = window.scrollY;
  const distance = absoluteTarget - startY;
  const startTime = performance.now();

  const animate = (now: number) => {
    const elapsed = now - startTime;
    const progress = Math.min(elapsed / duration, 1);
    const eased = easeInOutCubic(progress);

    window.scrollTo(0, startY + distance * eased);

    if (progress < 1) {
      requestAnimationFrame(animate);
    }
  };

  requestAnimationFrame(animate);
};
