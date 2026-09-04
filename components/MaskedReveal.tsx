"use client";

import { useEffect, useRef, type ElementType, type ReactNode } from "react";
import { gsap, usePrefersReducedMotion } from "@/lib/animations";

type MaskedRevealProps = {
  children: ReactNode;
  className?: string;
  /** class applied to the inner animated element (the thing behind the mask) */
  innerClassName?: string;
  as?: ElementType;
  /** reveal duration in seconds */
  duration?: number;
  /** delay before reveal starts (seconds) */
  delay?: number;
  /** scrollTrigger start position */
  start?: string;
  /** subtle scale settle (1 = none). 1.08 reads as a gentle push-in */
  scale?: number;
};

/** Masks its children behind an overflow-hidden frame and slides them up
 *  into view as the element scrolls in — an editorial "unveiling" used for
 *  photography and technical plates. Respects prefers-reduced-motion. */
export default function MaskedReveal({
  children,
  className,
  innerClassName,
  as: Tag = "div",
  duration = 1.4,
  delay = 0,
  start = "top 85%",
  scale = 1.08,
}: MaskedRevealProps) {
  const ref = useRef<HTMLElement | null>(null);
  const reduced = usePrefersReducedMotion();

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const inner = el.firstElementChild as HTMLElement | null;
    if (!inner) return;

    if (reduced) {
      gsap.set(el, { clearProps: "all" });
      gsap.set(inner, { clearProps: "all" });
      return;
    }

    const ctx = gsap.context(() => {
      gsap.fromTo(
        inner,
        { yPercent: 100, scale },
        {
          yPercent: 0,
          scale: 1,
          duration,
          delay,
          ease: "power3.out",
          scrollTrigger: {
            trigger: el,
            start: start ?? "top 98%",
            toggleActions: "play none none none",
            invalidateOnRefresh: true,
          },
        },
      );
    }, el);

    return () => ctx.revert();
  }, [reduced, duration, delay, start, scale]);

  return (
    <Tag
      ref={ref}
      className={`overflow-hidden ${className ?? ""}`}
    >
      <div className={innerClassName}>{children}</div>
    </Tag>
  );
}
