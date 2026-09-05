"use client";

import {
  useEffect,
  useRef,
  type ReactNode,
  type ElementType,
} from "react";
import { gsap, usePrefersReducedMotion } from "@/lib/animations";

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
 * Lines start translated below the mask via CSS (`globals.css`) and are
 * revealed by GSAP sliding them into view.  Respects prefers-reduced-motion.
 */
export default function TextReveal({
  children,
  className,
  as: Tag = "div",
  speed = 1,
  stagger = 0.08,
  delay = 0,
  ease = "power3.out",
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

    let ctx: gsap.Context | null = null;
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0]?.isIntersecting) {
          observer.disconnect();
          ctx = gsap.context(() => {
            gsap.fromTo(
              lines,
              { yPercent: 105 },
              {
                yPercent: 0,
                duration: 1 / speed,
                ease,
                stagger,
                delay,
              },
            );
          }, el);
        }
      },
      { rootMargin: "120px 0px 0px 0px" },
    );

    observer.observe(el);

    return () => {
      observer.disconnect();
      if (ctx) ctx.revert();
    };
  }, [reduced, speed, stagger, delay, ease]);

  return (
    <Tag ref={ref} className={className}>
      {children}
    </Tag>
  );
}