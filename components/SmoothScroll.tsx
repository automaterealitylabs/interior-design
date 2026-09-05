"use client";

import { useEffect } from "react";

/** Wraps the page in Lenis smooth scrolling and syncs with GSAP
 *  ScrollTrigger so all scroll-driven animations stay frame-accurate.
 *  Dynamically deferred until user scroll or idle to eliminate initial main-thread blocking. */
export default function SmoothScroll({ children }: { children: React.ReactNode }) {
  useEffect(() => {
    let lenis: InstanceType<typeof import("lenis")["default"]> | null = null;
    let tickerFn: ((time: number) => void) | null = null;
    let gsapInstance: typeof import("gsap")["default"] | null = null;
    let cancelled = false;

    const initLenis = async () => {
      if (cancelled || lenis) return;
      try {
        const [{ default: Lenis }, { gsap, ScrollTrigger }] = await Promise.all([
          import("lenis"),
          import("@/lib/animations"),
        ]);
        if (cancelled) return;

        gsapInstance = gsap;
        lenis = new Lenis({
          duration: 1.15,
          easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
          touchMultiplier: 1.5,
          syncTouch: false,
          infinite: false,
        });

        lenis.on("scroll", ScrollTrigger.update);
        tickerFn = (time: number) => {
          lenis?.raf(time * 1000);
        };
        gsap.ticker.add(tickerFn);
      } catch {
        // Graceful fallback to native browser scrolling
      }
    };

    const onScrollIntent = () => {
      initLenis();
      window.removeEventListener("scroll", onScrollIntent);
      window.removeEventListener("wheel", onScrollIntent);
      window.removeEventListener("touchstart", onScrollIntent);
    };

    window.addEventListener("scroll", onScrollIntent, { passive: true, once: true });
    window.addEventListener("wheel", onScrollIntent, { passive: true, once: true });
    window.addEventListener("touchstart", onScrollIntent, { passive: true, once: true });

    return () => {
      cancelled = true;
      window.removeEventListener("scroll", onScrollIntent);
      window.removeEventListener("wheel", onScrollIntent);
      window.removeEventListener("touchstart", onScrollIntent);
      if (tickerFn && gsapInstance) gsapInstance.ticker.remove(tickerFn);
      if (lenis) lenis.destroy();
    };
  }, []);

  return <>{children}</>;
}
