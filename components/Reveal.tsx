"use client";

import { useEffect, useRef, type ElementType, type ReactNode } from "react";
import { usePrefersReducedMotion } from "@/lib/use-reduced-motion";

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
 *  Uses GPU compositor-accelerated CSS transitions and IntersectionObserver,
 *  completely eliminating GSAP bundle weight and main-thread JavaScript execution. */
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
    if (!el || reduced) return;

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
          el.style.willChange = "transform, opacity";
          el.style.transition = `opacity ${duration}s cubic-bezier(0.16, 1, 0.3, 1) ${delay}s, transform ${duration}s cubic-bezier(0.16, 1, 0.3, 1) ${delay}s`;
          el.style.opacity = "1";
          el.style.transform = "translate3d(0, 0, 0)";
          el.addEventListener(
            "transitionend",
            () => {
              el.style.willChange = "auto";
            },
            { once: true },
          );
        }
      },
      { rootMargin },
    );

    observer.observe(el);

    return () => {
      observer.disconnect();
    };
  }, [reduced, delay, y, start, duration]);

  const existingStyle = (rest.style as React.CSSProperties) || {};

  return (
    <Tag
      ref={ref}
      data-reveal=""
      className={className}
      style={{
        opacity: reduced ? 1 : 0,
        transform: reduced || !y ? undefined : `translate3d(0, ${y}px, 0)`,
        ...existingStyle,
      }}
      {...rest}
    >
      {children}
    </Tag>
  );
}
