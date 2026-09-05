"use client";

import { useEffect, useRef, type ElementType, type ReactNode } from "react";
import { gsap, usePrefersReducedMotion } from "@/lib/animations";

type RevealProps = {
  children: ReactNode;
  className?: string;
  as?: ElementType;
  /** delay in seconds before the reveal tween starts */
  delay?: number;
  /** start offset in px (positive = starts lower) */
  y?: number;
  start?: string;
  duration?: number;
  [key: string]: unknown;
};

/** Reveals its children from y-offset + fade when scrolled into view.
 *  Uses high-performance IntersectionObserver instead of registering separate
 *  ScrollTriggers, completely eliminating layout thrashing and forced reflows.
 *  Respects prefers-reduced-motion (renders fully visible, no tween). */
export default function Reveal({
  children,
  className,
  as: Tag = "div",
  delay = 0,
  y = 44,
  start = "top 86%",
  duration = 1.15,
  ...rest
}: RevealProps) {
  const ref = useRef<HTMLElement | null>(null);
  const reduced = usePrefersReducedMotion();

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    if (reduced) {
      gsap.set(el, { clearProps: "all" });
      return;
    }

    // Set initial hidden state without calling gsap.set to avoid hydration thrashing
    el.style.opacity = "0";
    el.style.visibility = "hidden";
    if (y) el.style.transform = `translate3d(0, ${y}px, 0)`;

    // Calculate rootMargin from start prop (e.g. "top 86%" -> bottom -14%)
    let rootMargin = "0px 0px -14% 0px";
    const match = start.match(/top\s+(\d+)%/);
    if (match) {
      const bottomPct = Math.max(0, 100 - parseInt(match[1], 10));
      rootMargin = `0px 0px -${bottomPct}% 0px`;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        const [entry] = entries;
        if (entry.isIntersecting) {
          observer.unobserve(el);
          gsap.to(el, {
            autoAlpha: 1,
            y: 0,
            duration,
            delay,
            ease: "power3.out",
          });
        }
      },
      { rootMargin },
    );

    observer.observe(el);

    return () => {
      observer.disconnect();
    };
  }, [reduced, delay, y, start, duration]);

  return (
    <Tag ref={ref} className={className} {...rest}>
      {children}
    </Tag>
  );
}
