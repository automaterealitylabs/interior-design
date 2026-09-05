"use client";

import {
  useEffect,
  useRef,
  type ReactNode,
  type ElementType,
} from "react";
import { usePrefersReducedMotion } from "@/lib/use-reduced-motion";

type TextRevealProps = {
  children: ReactNode;
  className?: string;
  as?: ElementType;
  /** Lines per second reveal speed */
  speed?: number;
  /** Stagger between lines in seconds */
  stagger?: number;
  /** Delay before starting (seconds) */
  delay?: number;
  /** Easing for each line */
  ease?: string;
};

/**
 * Server-renders each [data-line] child inside an overflow-hidden mask.
 * Lines are revealed with GPU-accelerated CSS transitions on IntersectionObserver.
 * Completely eliminates GSAP script evaluation and bundle weight.
 */
export default function TextReveal({
  children,
  className,
  as: Tag = "div",
  speed = 1,
  stagger = 0.08,
  delay = 0,
}: TextRevealProps) {
  const ref = useRef<HTMLElement>(null);
  const reduced = usePrefersReducedMotion();

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const lines = Array.from(el.querySelectorAll<HTMLElement>("[data-line]"));
    if (lines.length === 0) return;

    if (reduced) {
      // Show text immediately for reduced motion users
      lines.forEach((line) => {
        line.style.transform = "none";
      });
      return;
    }

    lines.forEach((line) => {
      line.style.transform = "translate3d(0, 105%, 0)";
    });

    const duration = 1 / speed;
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0]?.isIntersecting) {
          observer.disconnect();
          lines.forEach((line, idx) => {
            const lineDelay = delay + idx * stagger;
            line.style.transition = `transform ${duration}s cubic-bezier(0.16, 1, 0.3, 1) ${lineDelay}s`;
            line.style.transform = "translate3d(0, 0, 0)";
          });
        }
      },
      { rootMargin: "120px 0px 0px 0px" },
    );

    observer.observe(el);

    return () => {
      observer.disconnect();
    };
  }, [reduced, speed, stagger, delay]);

  return (
    <Tag ref={ref} className={className}>
      {children}
    </Tag>
  );
}