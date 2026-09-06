"use client";

import { useRef } from "react";
import { studio } from "@/lib/site-config";
import HeroCanvas from "./HeroCanvas";

/**
 * FrameScrubber — Hero section.
 *
 * Architecture:
 *  - This thin "use client" wrapper exists only to create the shared refs
 *    (runwayRef, copyRef) that both the DOM structure and HeroCanvas need.
 *  - The LCP <img> renders in the SSR HTML immediately, no JS needed.
 *  - HeroCanvas receives the refs and attaches GSAP + canvas logic lazily.
 *
 * Why the img has explicit width/height:
 *  Providing 1920×1080 gives the browser an aspect-ratio hint so it can
 *  reserve space without a layout read — eliminating the forced reflow that
 *  caused the 365ms regression. The CSS h-full/w-full overrides painted size.
 */
export default function FrameScrubber() {
  const runwayRef = useRef<HTMLDivElement>(null);
  const copyRef = useRef<HTMLDivElement>(null);

  return (
    <div
      id="top"
      ref={runwayRef}
      className="hero-runway relative h-[500vh] sm:h-[650vh]"
    >
      <div className="sticky top-0 h-svh w-full overflow-hidden bg-ink">
        {/* ── LCP Image ────────────────────────────────────────────────────
            fetchPriority="high" + preload in <head> ensures this is the
            first resource the browser fetches and paints (~200ms).
            width/height give the browser an aspect-ratio hint so it never
            needs to reflow to compute the image box size.
            ──────────────────────────────────────────────────────────────── */}
        <img
          src="/frames/frame-0001.webp"
          alt="Lumière Interiors — bespoke architectural interior"
          fetchPriority="high"
          width={1920}
          height={1080}
          className="pointer-events-none absolute inset-0 h-full w-full object-cover"
        />

        {/* ── Animated Canvas ───────────────────────────────────────────────
            Renders transparent / invisible until JS hydrates and loads
            frame-0. At that point it paints on top of the static LCP img.
            ──────────────────────────────────────────────────────────────── */}
        <HeroCanvas runwayRef={runwayRef} copyRef={copyRef} />

        {/* ── Ambient Dark Gradient Scrims ──────────────────────────────── */}
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/60 via-black/10 to-black/35" />
        <div className="pointer-events-none absolute inset-x-0 bottom-0 h-44 bg-gradient-to-t from-ink/75 to-transparent" />

        {/* ── Hero Copy Overlay ─────────────────────────────────────────── */}
        <div
          ref={copyRef}
          className="hero-copy-fade absolute inset-0 z-10 flex flex-col items-center justify-center px-6 text-center text-paper"
        >
          <p className="mb-7 text-[10px] uppercase tracking-far text-paper/70 md:mb-9 md:text-[11px]">
            {studio.tagline}
          </p>
          <h1 className="font-sans text-[clamp(1.9rem,6.2vw,5.4rem)] font-light uppercase leading-[1.02] tracking-[0.02em] text-paper">
            <span className="block">We don&apos;t just</span>
            <span className="block">design spaces.</span>
            <span className="block mt-3 text-taupe md:mt-4">We design how</span>
            <span className="block">
              they <em className="font-serif font-light italic text-brass">feel</em>.
            </span>
          </h1>

          <div
            data-hero
            className="absolute bottom-9 left-0 right-0 flex flex-col items-center gap-4"
          >
            <span className="text-[10px] uppercase tracking-luxe text-paper/60">
              Scroll
            </span>
            <span className="scroll-indicator" aria-hidden="true" />
          </div>
        </div>
      </div>
    </div>
  );
}
