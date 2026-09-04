"use client";

import { useEffect, useState } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export { gsap, ScrollTrigger };

/** True when the user has requested reduced motion (or until the match
 *  media result is known, which is fine — scrubbers gate on the final value). */
export function usePrefersReducedMotion(): boolean {
  const [reduced, setReduced] = useState(false);
  useEffect(() => {
    const mq = window.matchMedia("(prefers-reduced-motion: reduce)");
    const sync = () => setReduced(mq.matches);
    sync();
    mq.addEventListener("change", sync);
    return () => mq.removeEventListener("change", sync);
  }, []);
  return reduced;
}

/** Coalesces multiple ScrollTrigger.refresh() calls into one per frame.
 *  Prevents redundant forced reflows when many components mount together. */
let _refreshRaf: number | null = null;
export function debouncedRefresh() {
  if (_refreshRaf !== null) return;
  _refreshRaf = requestAnimationFrame(() => {
    _refreshRaf = null;
    ScrollTrigger.refresh();
  });
}

/** Recalculates ScrollTrigger positions once fonts/network settle. */
export function useScrollRefresh() {
  useEffect(() => {
    const onLoad = () => debouncedRefresh();
    // double rAF: after paint, after layout of webfonts and the hero video.
    const raf1 = requestAnimationFrame(() =>
      requestAnimationFrame(() => debouncedRefresh()),
    );
    window.addEventListener("load", onLoad);
    return () => {
      cancelAnimationFrame(raf1);
      window.removeEventListener("load", onLoad);
    };
  }, []);
}

