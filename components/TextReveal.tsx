"use client";

import {
  useEffect,
  useRef,
  Children,
  isValidElement,
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

    const ctx = gsap.context(() => {
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

    return () => ctx.revert();
  }, [reduced, speed, stagger, delay, ease]);

  // Server-render masks: wrap each [data-line] child in an overflow-hidden container.
  // CSS in globals.css hides [data-line] via translateY(105%) until GSAP animates.
  const maskedChildren = Children.map(children, (child) => {
    if (
      isValidElement(child) &&
      (child.props as Record<string, unknown>)["data-line"] !== undefined
    ) {
      return (
        <span className="text-reveal-mask">
          {child}
        </span>
      );
    }
    return child;
  });

  return (
    <Tag ref={ref} className={className}>
      {maskedChildren}
    </Tag>
  );
}