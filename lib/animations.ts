"use client";

import { useEffect, useState } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
  ScrollTrigger.config({
    limitCallbacks: true,
    syncInterval: 100,
  });
}

export { gsap, ScrollTrigger };
export { usePrefersReducedMotion } from "./use-reduced-motion";

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

