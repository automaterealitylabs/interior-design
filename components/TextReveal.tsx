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
type TextRevealCallback = () => void;
let textObserver: IntersectionObserver | null = null;
const textCallbacks = new Map<Element, TextRevealCallback>();

function observeTextElement(el: HTMLElement, onIntersect: TextRevealCallback) {
  if (!textObserver) {
    textObserver = new IntersectionObserver(
      (entries) => {
        for (const e of entries) {
          if (e.isIntersecting) {
            const cb = textCallbacks.get(e.target);
            if (cb) {
              textCallbacks.delete(e.target);
              textObserver?.unobserve(e.target);
              cb();
            }
          }
        }
      },
      { rootMargin: "120px 0px 0px 0px" },
    );
  }

  textCallbacks.set(el, onIntersect);
  textObserver.observe(el);

  return () => {
    textCallbacks.delete(el);
    textObserver?.unobserve(el);
  };
}

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
    if (!el || reduced) return;

    const duration = 1 / speed;

    return observeTextElement(el, () => {
      const lines = Array.from(el.querySelectorAll<HTMLElement>("[data-line]"));
      lines.forEach((line, idx) => {
        const lineDelay = delay + idx * stagger;
        line.style.willChange = "transform";
        line.style.transition = `transform ${duration}s cubic-bezier(0.16, 1, 0.3, 1) ${lineDelay}s`;
        line.style.transform = "translate3d(0, 0, 0)";
        line.addEventListener(
          "transitionend",
          () => {
            line.style.willChange = "auto";
          },
          { once: true },
        );
      });
    });
  }, [reduced, speed, stagger, delay]);

  return (
    <Tag ref={ref} data-text-reveal="" className={className}>
      {children}
    </Tag>
  );
}