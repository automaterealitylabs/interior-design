"use client";

import { useEffect, useRef, type ElementType, type ReactNode } from "react";
import { usePrefersReducedMotion } from "@/lib/use-reduced-motion";

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
      inner.style.transform = "none";
      return;
    }

    inner.style.transform = `translate3d(0, 100%, 0) scale(${scale})`;

    let rootMargin = "0px 0px -15% 0px";
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
          inner.style.transition = `transform ${duration}s cubic-bezier(0.16, 1, 0.3, 1) ${delay}s`;
          inner.style.transform = "translate3d(0, 0, 0) scale(1)";
        }
      },
      { rootMargin },
    );

    observer.observe(el);

    return () => {
      observer.disconnect();
    };
  }, [reduced, duration, delay, start, scale]);

  return (
    <Tag
      ref={ref}
      className={`overflow-hidden ${className ?? ""}`}
    >
      {innerClassName ? <div className={innerClassName}>{children}</div> : children}
    </Tag>
  );
}
