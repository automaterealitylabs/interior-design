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
};

/** Reveals its children from y-offset + fade when scrolled into view.
 *  Respects prefers-reduced-motion (renders fully visible, no tween). */
export default function Reveal({
  children,
  className,
  as: Tag = "div",
  delay = 0,
  y = 44,
  start = "top 86%",
  duration = 1.15,
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
    const ctx = gsap.context(() => {
      gsap.fromTo(
        el,
        { autoAlpha: 0, y },
        {
          autoAlpha: 1,
          y: 0,
          duration,
          delay,
          ease: "power3.out",
          scrollTrigger: {
            trigger: el,
            start,
            toggleActions: "play none none none",
          },
        },
      );
    });
    return () => ctx.revert();
  }, [reduced, delay, y, start, duration]);

  return (
    <Tag ref={ref} className={className}>
      {children}
    </Tag>
  );
}
