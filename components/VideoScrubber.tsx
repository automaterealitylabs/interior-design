"use client";

import { useEffect, useRef, useState } from "react";
import { gsap, ScrollTrigger, debouncedRefresh, usePrefersReducedMotion } from "@/lib/animations";
import { studio } from "@/lib/site";

/** Cinematic hero: a pinned full-screen video that scrubs in sync with the
 *  user's scroll position.  Uses requestVideoFrameCallback for frame-accurate
 *  seeking with a pending-seek buffer to prevent seek pile-up. */
export default function VideoScrubber() {
  const runwayRef = useRef<HTMLDivElement>(null);
  const videoRef = useRef<HTMLVideoElement>(null);
  const copyRef = useRef<HTMLDivElement>(null);
  const reduced = usePrefersReducedMotion();
  const [loaded, setLoaded] = useState(false);

  /* Safari ignores the JSX `muted` attribute on server-rendered video;
     set it imperatively so the element is always muted and seekable. */
  useEffect(() => {
    const v = videoRef.current;
    if (v) {
      v.muted = true;
      v.defaultMuted = true;
    }
  }, []);

  /* prefers-reduced-motion: show a single static frame, no pin, no scrub. */
  useEffect(() => {
    if (!reduced) return;
    const v = videoRef.current;
    if (!v) return;
    const setStatic = () => {
      v.pause();
      v.currentTime = Number.isFinite(v.duration)
        ? Math.min(v.duration - 0.1, v.duration * 0.45)
        : 4;
    };
    if (v.readyState >= 2) setStatic();
    else v.addEventListener("loadeddata", setStatic, { once: true });
  }, [reduced]);

  /* ------------------------------------------------------------------ */
  /* Main scrub setup                                                    */
  /* ------------------------------------------------------------------ */
  useEffect(() => {
    const runway = runwayRef.current;
    const video = videoRef.current;
    const copy = copyRef.current;
    if (!runway || !video || !copy || reduced) return;

    /* pending-seek buffer: the scroll handler writes the desired time here,
       and the loop applies it only when no seek is in-flight. This prevents
       piling up multiple seeks (browsers discard them, leaving the video
       stuck on an old frame). */
    let pendingTime = 0;
    let rafId = 0;
    let ready = false;

    /* ── seek driver ────────────────────────────────────────────────── */
    const applySeek = () => {
      if (!ready || video.seeking) return;
      const max = Math.max(video.duration - 0.01, 0);
      const t = Math.min(Math.max(pendingTime, 0), max);
      if (Math.abs(t - video.currentTime) > 0.008) video.currentTime = t;
    };

    /* rAF loop acts as a safety net — catches any pending seek that the
       scroll handler couldn't apply (e.g. mid-decode). */
    const rafLoop = () => {
      rafId = requestAnimationFrame(rafLoop);
      applySeek();
    };
    rafId = requestAnimationFrame(rafLoop);

    /* ── video ready gate ──────────────────────────────────────────── */
    const markReady = () => {
      if (!Number.isFinite(video.duration) || video.duration <= 0) return;
      ready = true;
      video.pause();
      setLoaded(true);
      debouncedRefresh();
    };
    video.addEventListener("loadedmetadata", markReady);
    video.addEventListener("loadeddata", markReady);
    if (video.readyState >= 2) markReady();

    /* ── GSAP context ──────────────────────────────────────────────── */
    const ctx = gsap.context(() => {
      /* ScrollTrigger maps scroll progress → target time. A gentle ease-in-out
         curve makes the first and last frames linger while the middle
         advances at a natural pace — more cinematic than a linear map. */
      ScrollTrigger.create({
        trigger: runway,
        start: "top top",
        end: "bottom bottom",
        scrub: true,
        onUpdate: (self) => {
          if (!ready) return;
          const raw = self.progress;
          /* smooth ease-in-out: slow start, even middle, slow finish */
          const eased = raw < 0.5
            ? 2 * raw * raw
            : 1 - (-2 * raw + 2) ** 2 / 2;
          pendingTime = eased * video.duration;
          applySeek();
        },
      });

      /* A whisper of camera movement so the frame never feels frozen. */
      gsap.fromTo(
        video,
        { scale: 1.06 },
        {
          scale: 1,
          ease: "none",
          scrollTrigger: {
            trigger: runway,
            start: "top top",
            end: "bottom bottom",
            scrub: true,
          },
        },
      );

      /* Copy drifts up and away as the first scroll momentum builds. */
      gsap.to(copy, {
        autoAlpha: 0,
        yPercent: -26,
        ease: "none",
        scrollTrigger: {
          trigger: runway,
          start: "top top",
          end: "22% top",
          scrub: true,
        },
      });

      /* Entrance: rise-in with a light stagger as the veil clears. */
      gsap.from(copy.querySelectorAll<HTMLElement>("[data-hero]"), {
        autoAlpha: 0,
        y: 26,
        duration: 1.3,
        ease: "power3.out",
        stagger: 0.09,
        delay: 0.15,
        clearProps: "all",
      });
    }, runway);

    /* ── cleanup ───────────────────────────────────────────────────── */
    return () => {
      ctx.revert();
      cancelAnimationFrame(rafId);
      video.removeEventListener("loadedmetadata", markReady);
      video.removeEventListener("loadeddata", markReady);
    };
  }, [reduced]);

  return (
    <div
      id="top"
      ref={runwayRef}
      className="hero-runway relative h-[500vh] sm:h-[700vh]"
    >
      <div className="sticky top-0 h-svh w-full overflow-hidden bg-ink">
        <video
          ref={videoRef}
          src="/video.mp4"
          muted
          playsInline
          preload="auto"
          disablePictureInPicture
          tabIndex={-1}
          aria-hidden="true"
          onError={() => setLoaded(true)}
          className="pointer-events-none absolute inset-0 h-full w-full object-cover will-change-transform"
        />

        {/* legibility scrims (functional, over the film frame only) */}
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/55 via-black/5 to-black/30" />
        <div className="pointer-events-none absolute inset-x-0 bottom-0 h-44 bg-gradient-to-t from-ink/70 to-transparent" />

        {/* copy */}
        <div
          ref={copyRef}
          className="absolute inset-0 z-10 flex flex-col items-center justify-center px-6 text-center text-paper"
        >
          <p
            className="mb-7 text-[10px] uppercase tracking-far text-paper/70 md:mb-9 md:text-[11px]"
          >
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

        {/* loading veil */}
        <div
          aria-hidden="true"
          className={`pointer-events-none absolute inset-0 z-20 bg-ink transition-opacity duration-700 ${
            loaded ? "opacity-0" : "opacity-100"
          }`}
        />
      </div>
    </div>
  );
}
