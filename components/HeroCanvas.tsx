"use client";

import { useEffect, useRef, useCallback } from "react";
import { usePrefersReducedMotion } from "@/lib/use-reduced-motion";

const TOTAL_FRAMES = 300;
const framePath = (i: number) =>
  `/frames/frame-${String(i + 1).padStart(4, "0")}.webp`;

interface HeroCanvasProps {
  runwayRef: React.RefObject<HTMLDivElement | null>;
  copyRef: React.RefObject<HTMLDivElement | null>;
}

export default function HeroCanvas({ runwayRef, copyRef }: HeroCanvasProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const reduced = usePrefersReducedMotion();

  const imagesRef = useRef<(HTMLImageElement | null)[]>([]);
  const currentFrameRef = useRef(0);
  const canvasSizeRef = useRef({ w: 0, h: 0, dpr: 1 });
  const drawFrameRef = useRef<(index: number) => void>(() => {});
  const lastDrawnImgRef = useRef<HTMLImageElement | null>(null);
  const pendingFrameRef = useRef<number | null>(null);
  const rafIdRef = useRef<number | null>(null);

  const measureCanvas = useCallback(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const dpr = Math.min(window.devicePixelRatio || 1, 2);
    const w = window.innerWidth;
    const h = window.innerHeight;
    canvasSizeRef.current = { w, h, dpr };
    const bufW = Math.round(w * dpr);
    const bufH = Math.round(h * dpr);
    if (canvas.width !== bufW || canvas.height !== bufH) {
      canvas.width = bufW;
      canvas.height = bufH;
    }
  }, []);

  const loadFrame = useCallback((index: number) => {
    if (index < 0 || index >= TOTAL_FRAMES) return null;
    const images = imagesRef.current;
    if (images[index]) return images[index]!;
    const img = new Image();
    img.src = framePath(index);
    img.onload = () => {
      if (currentFrameRef.current === index || (index === 0 && currentFrameRef.current === 0)) {
        drawFrameRef.current(currentFrameRef.current);
      }
    };
    images[index] = img;
    return img;
  }, []);

  const drawFrame = useCallback(
    (frameIndex: number) => {
      const canvas = canvasRef.current;
      if (!canvas) return;
      const ctx = canvas.getContext("2d", { alpha: false });
      if (!ctx) return;

      currentFrameRef.current = frameIndex;
      loadFrame(frameIndex);
      // Only preload adjacent frames during active scrubbing — not on initial load
      // (prevents frame-0002 and frame-0003 from downloading during the LCP window)
      if (frameIndex > 0) {
        if (frameIndex + 1 < TOTAL_FRAMES) loadFrame(frameIndex + 1);
        if (frameIndex + 2 < TOTAL_FRAMES) loadFrame(frameIndex + 2);
        if (frameIndex - 1 >= 0) loadFrame(frameIndex - 1);
      }

      const images = imagesRef.current;
      const targetImg = images[frameIndex];
      const isReady = targetImg && targetImg.complete && targetImg.naturalWidth > 0;
      const imgToDraw = isReady ? targetImg : lastDrawnImgRef.current;
      if (!imgToDraw || !imgToDraw.complete || imgToDraw.naturalWidth === 0) return;
      if (!isReady && lastDrawnImgRef.current === imgToDraw) return;

      lastDrawnImgRef.current = imgToDraw;
      const { w: displayWidth, h: displayHeight, dpr } = canvasSizeRef.current;
      if (displayWidth === 0 || displayHeight === 0) return;

      ctx.save();
      ctx.scale(dpr, dpr);

      const imgRatio = imgToDraw.naturalWidth / imgToDraw.naturalHeight;
      const canvasRatio = displayWidth / displayHeight;
      let drawW: number, drawH: number, drawX: number, drawY: number;

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
      ctx.drawImage(imgToDraw, drawX, drawY, drawW, drawH);
      ctx.restore();
    },
    [loadFrame],
  );

  const requestDraw = useCallback(
    (target: number) => {
      pendingFrameRef.current = target;
      if (rafIdRef.current === null) {
        rafIdRef.current = requestAnimationFrame(() => {
          rafIdRef.current = null;
          if (pendingFrameRef.current !== null) drawFrame(pendingFrameRef.current);
        });
      }
    },
    [drawFrame],
  );

  useEffect(() => {
    drawFrameRef.current = drawFrame;
  }, [drawFrame]);

  // Tiered frame preloader — 500ms breather to protect LCP paint window
  useEffect(() => {
    let cancelled = false;
    imagesRef.current = new Array(TOTAL_FRAMES).fill(null);

    requestAnimationFrame(() => {
      if (!cancelled) {
        measureCanvas();
        loadFrame(0);
      }
    });

    let backgroundPreloadStarted = false;
    const startBackgroundPreload = () => {
      if (backgroundPreloadStarted || cancelled) return;
      backgroundPreloadStarted = true;
      for (let i = 1; i <= 20; i++) {
        setTimeout(() => { if (!cancelled) loadFrame(i); }, 500 + i * 60);
      }
    };

    const onUserIntent = () => {
      startBackgroundPreload();
      window.removeEventListener("scroll", onUserIntent);
      window.removeEventListener("pointerdown", onUserIntent);
    };
    window.addEventListener("scroll", onUserIntent, { passive: true, once: true });
    window.addEventListener("pointerdown", onUserIntent, { passive: true, once: true });

    let resizeTimer: ReturnType<typeof setTimeout>;
    const handleResize = () => {
      clearTimeout(resizeTimer);
      resizeTimer = setTimeout(() => { measureCanvas(); drawFrame(currentFrameRef.current); }, 100);
    };
    window.addEventListener("resize", handleResize);

    return () => {
      cancelled = true;
      clearTimeout(resizeTimer);
      window.removeEventListener("resize", handleResize);
      window.removeEventListener("scroll", onUserIntent);
      window.removeEventListener("pointerdown", onUserIntent);
      if (rafIdRef.current !== null) cancelAnimationFrame(rafIdRef.current);
    };
  }, [loadFrame, drawFrame, measureCanvas]);

  // GSAP ScrollTrigger — lazy on first user intent
  useEffect(() => {
    const runway = runwayRef.current;
    const canvas = canvasRef.current;
    const copy = copyRef.current;
    if (!runway || !canvas || reduced) return;

    let ctx: { revert: () => void } | null = null;
    let cancelled = false;

    const initTimeline = async () => {
      try {
        const { gsap } = await import("@/lib/animations");
        if (cancelled) return;
        ctx = gsap.context(() => {
          const tl = gsap.timeline({
            scrollTrigger: {
              trigger: runway,
              start: "top top",
              end: "bottom bottom",
              scrub: 0.12,
              onUpdate: (self) => {
                requestDraw(Math.round(self.progress * (TOTAL_FRAMES - 1)));
              },
            },
          });
          tl.fromTo(canvas, { scale: 1.05 }, { scale: 1, ease: "none", duration: 1 }, 0);
          if (copy && !(typeof CSS !== "undefined" && CSS.supports?.("animation-timeline", "scroll()"))) {
            tl.to(copy, { autoAlpha: 0, yPercent: -28, ease: "none", duration: 0.22 }, 0);
          }
        }, runway);
      } catch { /* ignore */ }
    };

    let timelineStarted = false;
    const startTimeline = () => {
      if (timelineStarted || cancelled) return;
      timelineStarted = true;
      initTimeline();
    };

    const onIntent = () => {
      startTimeline();
      ["scroll", "wheel", "touchstart", "pointerdown"].forEach((e) =>
        window.removeEventListener(e, onIntent),
      );
    };
    ["scroll", "wheel", "touchstart", "pointerdown"].forEach((e) =>
      window.addEventListener(e, onIntent, { passive: true, once: true }),
    );

    return () => {
      cancelled = true;
      ["scroll", "wheel", "touchstart", "pointerdown"].forEach((e) =>
        window.removeEventListener(e, onIntent),
      );
      if (ctx) ctx.revert();
    };
  }, [reduced, drawFrame, requestDraw, runwayRef, copyRef]);

  return (
    <canvas
      ref={canvasRef}
      aria-hidden="true"
      className="pointer-events-none absolute inset-0 h-full w-full object-cover will-change-transform"
    />
  );
}
