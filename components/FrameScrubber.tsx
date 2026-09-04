"use client";

import { useEffect, useRef, useCallback } from "react";
import { gsap, ScrollTrigger, debouncedRefresh, usePrefersReducedMotion } from "@/lib/animations";
import { studio } from "@/lib/site";
import TextReveal from "./TextReveal";

const TOTAL_FRAMES = 300;
const framePath = (i: number) =>
  `/frames/frame-${String(i + 1).padStart(4, "0")}.webp`;

export default function FrameScrubber() {
  const runwayRef = useRef<HTMLDivElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const copyRef = useRef<HTMLDivElement>(null);
  const reduced = usePrefersReducedMotion();

  // Array of 300 preloaded HTMLImageElements
  const imagesRef = useRef<(HTMLImageElement | null)[]>([]);
  const currentFrameRef = useRef(0);

  // Cached canvas dimensions — eliminates per-tick clientWidth/clientHeight reads
  const canvasSizeRef = useRef({ w: 0, h: 0, dpr: 1 });

  const measureCanvas = useCallback(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const dpr = Math.min(window.devicePixelRatio || 1, 2);
    canvasSizeRef.current = {
      w: canvas.clientWidth,
      h: canvas.clientHeight,
      dpr,
    };
    // Resize the backing buffer to match
    const bufW = canvasSizeRef.current.w * dpr;
    const bufH = canvasSizeRef.current.h * dpr;
    if (canvas.width !== bufW || canvas.height !== bufH) {
      canvas.width = bufW;
      canvas.height = bufH;
    }
  }, []);

  // Helper to load a single frame on-demand if not already loading
  const loadFrame = useCallback((index: number) => {
    const images = imagesRef.current;
    if (images[index]) return images[index]!;

    const img = new Image();
    img.src = framePath(index);
    img.onload = () => {
      if (
        currentFrameRef.current === index ||
        (index === 0 && currentFrameRef.current === 0)
      ) {
        drawFrame(currentFrameRef.current);
      }
    };
    images[index] = img;
    return img;
  }, []);

  // Draws a specific frame to the canvas — reads ONLY cached dimensions (no layout)
  const drawFrame = useCallback((frameIndex: number) => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    currentFrameRef.current = frameIndex;

    // Load requested frame and adjacent frames on-demand
    loadFrame(frameIndex);
    if (frameIndex + 1 < TOTAL_FRAMES) loadFrame(frameIndex + 1);
    if (frameIndex - 1 >= 0) loadFrame(frameIndex - 1);

    // Find target image or nearest loaded frame
    const images = imagesRef.current;
    let targetImg = images[frameIndex];

    if (!targetImg || !targetImg.complete || targetImg.naturalWidth === 0) {
      let bestDist = Infinity;
      for (let i = 0; i < TOTAL_FRAMES; i++) {
        const img = images[i];
        if (img && img.complete && img.naturalWidth > 0) {
          const dist = Math.abs(i - frameIndex);
          if (dist < bestDist) {
            bestDist = dist;
            targetImg = img;
          }
        }
      }
    }

    if (!targetImg || !targetImg.complete || targetImg.naturalWidth === 0) {
      return;
    }

    // Use cached dimensions — no layout-triggering reads
    const { w: displayWidth, h: displayHeight, dpr } = canvasSizeRef.current;
    if (displayWidth === 0 || displayHeight === 0) return;

    ctx.save();
    ctx.scale(dpr, dpr);

    // Object-fit: cover algorithm
    const imgRatio = targetImg.naturalWidth / targetImg.naturalHeight;
    const canvasRatio = displayWidth / displayHeight;

    let drawW: number;
    let drawH: number;
    let drawX: number;
    let drawY: number;

    if (canvasRatio > imgRatio) {
      drawW = displayWidth;
      drawH = displayWidth / imgRatio;
      drawX = 0;
      drawY = (displayHeight - drawH) / 2;
    } else {
      drawW = displayHeight * imgRatio;
      drawH = displayHeight;
      drawX = (displayWidth - drawW) / 2;
      drawY = 0;
    }

    ctx.clearRect(0, 0, displayWidth, displayHeight);
    ctx.drawImage(targetImg, drawX, drawY, drawW, drawH);
    ctx.restore();
  }, [loadFrame]);

  // Intelligent tiered background preloader
  useEffect(() => {
    let cancelled = false;
    imagesRef.current = new Array(TOTAL_FRAMES).fill(null);

    // Initial canvas measurement
    measureCanvas();

    // Tier 1: Immediately load first 20 frames for instant initial scroll
    for (let i = 0; i < 20; i++) {
      loadFrame(i);
    }

    // Tier 2: Stream keyframes (every 4th frame) across the whole runway
    const keyframesTimeout = setTimeout(() => {
      if (cancelled) return;
      for (let i = 20; i < TOTAL_FRAMES; i += 4) {
        loadFrame(i);
      }
    }, 150);

    // Tier 3: Stream all remaining frames progressively in chunked idle batches
    const fullQueue: number[] = [];
    for (let i = 20; i < TOTAL_FRAMES; i++) {
      if (i % 4 !== 0) fullQueue.push(i);
    }

    let qIdx = 0;
    const BATCH_SIZE = 12;

    const streamNextBatch = () => {
      if (cancelled || qIdx >= fullQueue.length) return;
      const end = Math.min(qIdx + BATCH_SIZE, fullQueue.length);
      for (let i = qIdx; i < end; i++) {
        loadFrame(fullQueue[i]);
      }
      qIdx = end;
      if (qIdx < fullQueue.length) {
        setTimeout(streamNextBatch, 80);
      }
    };

    const streamTimeout = setTimeout(streamNextBatch, 400);

    // Initial frame 0 render check
    const checkInitialFrame = () => {
      const img0 = imagesRef.current[0];
      if (img0 && img0.complete && img0.naturalWidth > 0) {
        drawFrame(0);
        debouncedRefresh();
      } else {
        requestAnimationFrame(checkInitialFrame);
      }
    };
    checkInitialFrame();

    // Debounced resize handler — only place we re-measure canvas dimensions
    let resizeTimer: ReturnType<typeof setTimeout>;
    const handleResize = () => {
      clearTimeout(resizeTimer);
      resizeTimer = setTimeout(() => {
        measureCanvas();
        drawFrame(currentFrameRef.current);
      }, 100);
    };
    window.addEventListener("resize", handleResize);

    return () => {
      cancelled = true;
      clearTimeout(keyframesTimeout);
      clearTimeout(streamTimeout);
      clearTimeout(resizeTimer);
      window.removeEventListener("resize", handleResize);
    };
  }, [loadFrame, drawFrame, measureCanvas]);

  // GSAP ScrollTrigger timeline for buttery-smooth frame scrubbing
  useEffect(() => {
    const runway = runwayRef.current;
    const canvas = canvasRef.current;
    const copy = copyRef.current;
    if (!runway || !canvas || !copy || reduced) return;

    const frameTracker = { frame: 0 };

    const ctx = gsap.context(() => {
      // Smooth 0 -> 299 scroll scrub
      gsap.to(frameTracker, {
        frame: TOTAL_FRAMES - 1,
        ease: "none",
        scrollTrigger: {
          trigger: runway,
          start: "top top",
          end: "bottom bottom",
          scrub: 0.12, // Butter-smooth interpolation
          onUpdate: () => {
            const target = Math.round(frameTracker.frame);
            drawFrame(target);
          },
        },
      });

      // Subtle scale breathing
      gsap.fromTo(
        canvas,
        { scale: 1.05 },
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

      // Hero copy lifts and fades as first scroll starts
      gsap.to(copy, {
        autoAlpha: 0,
        yPercent: -28,
        ease: "none",
        scrollTrigger: {
          trigger: runway,
          start: "top top",
          end: "22% top",
          scrub: true,
        },
      });

      // Hero text entrance animation
      gsap.from(copy.querySelectorAll<HTMLElement>("[data-hero]"), {
        autoAlpha: 0,
        y: 24,
        duration: 1.2,
        ease: "power3.out",
        stagger: 0.08,
        delay: 0.1,
        clearProps: "all",
      });
    }, runway);

    debouncedRefresh();

    return () => ctx.revert();
  }, [reduced, drawFrame]);

  return (
    <div
      id="top"
      ref={runwayRef}
      className="hero-runway relative h-[500vh] sm:h-[650vh]"
    >
      <div className="sticky top-0 h-svh w-full overflow-hidden bg-ink">
        {/* High-Performance 60FPS Frame Canvas */}
        <canvas
          ref={canvasRef}
          className="pointer-events-none absolute inset-0 h-full w-full object-cover will-change-transform"
        />

        {/* Ambient Dark Gradient Scrims for Editorial Typography */}
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/60 via-black/10 to-black/35" />
        <div className="pointer-events-none absolute inset-x-0 bottom-0 h-44 bg-gradient-to-t from-ink/75 to-transparent" />

        {/* Hero Copy Overlay */}
        <div
          ref={copyRef}
          className="absolute inset-0 z-10 flex flex-col items-center justify-center px-6 text-center text-paper"
        >
          <p
            className="mb-7 text-[10px] uppercase tracking-far text-paper/70 md:mb-9 md:text-[11px]"
          >
            {studio.tagline}
          </p>
          <TextReveal
            as="h1"
            className="font-sans text-[clamp(1.9rem,6.2vw,5.4rem)] font-light uppercase leading-[1.02] tracking-[0.02em] text-paper"
            speed={1.2}
            stagger={0.06}
            delay={0.2}
          >
            <span className="block" data-line>We don&apos;t just</span>
            <span className="block" data-line>design spaces.</span>
            <span className="block mt-3 text-taupe md:mt-4" data-line>We design how</span>
            <span className="block" data-line>
              they <em className="font-serif font-light italic text-brass">feel</em>.
            </span>
          </TextReveal>

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

