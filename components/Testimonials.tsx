"use client";

import { useEffect, useRef, useState } from "react";
import Reveal from "./Reveal";
import TextReveal from "./TextReveal";
import { testimonials } from "@/lib/testimonials-data";

/** A single large quote that rotates on a slow cadence — one voice at a
 *  time, with manual prev/next and a running counter. */
export default function Testimonials() {
  const [idx, setIdx] = useState(0);
  const timer = useRef<ReturnType<typeof setInterval> | null>(null);

  const go = (next: number) =>
    setIdx((next + testimonials.length) % testimonials.length);

  useEffect(() => {
    timer.current = setInterval(
      () => setIdx((i) => (i + 1) % testimonials.length),
      6500,
    );
    return () => {
      if (timer.current) clearInterval(timer.current);
    };
  }, []);

  return (
    <section id="testimonials" className="relative bg-ink py-32 text-paper md:py-44">
      <div className="mx-auto w-full max-w-[1440px] px-6 md:px-10 lg:px-16">
        <Reveal className="flex items-center gap-5" y={0} duration={1}>
          <span className="font-mono text-[11px] text-stone">14</span>
          <span className="text-[11px] uppercase tracking-luxe text-stone">
            Words
          </span>
          <span className="h-px flex-1 bg-line-light" />
        </Reveal>

        <Reveal className="mt-14 md:mt-20" y={50} duration={1.3} start="top 88%">
          <TextReveal
            as="h2"
            className="max-w-3xl font-sans text-[clamp(1.8rem,4.4vw,4.2rem)] font-light uppercase leading-[1.05] tracking-[0.02em]"
            speed={1.2}
            stagger={0.06}
            delay={0.15}
          >
            <span className="block" data-line>From the people who live</span>
            <span className="block" data-line>in our work.</span>
          </TextReveal>
        </Reveal>

        <Reveal className="relative mt-16 md:mt-24" y={40} duration={1.2} start="top 92%">
          <div className="relative min-h-[380px] md:min-h-[320px]">
            {(() => {
              const t = testimonials[idx];
              return (
                <figure
                  key={t.name}
                  className="flex flex-col justify-between animate-fade-in"
                >
                  <div>
                    <span
                      aria-hidden="true"
                      className="font-serif text-6xl italic leading-none text-brass/60 select-none"
                    >
                      &ldquo;
                    </span>
                    <blockquote className="mt-2 max-w-3xl font-serif text-[clamp(1.4rem,2.8vw,2.4rem)] font-light italic leading-[1.4] text-paper/90">
                      {t.text}
                    </blockquote>
                  </div>
                  <figcaption className="mt-10">
                    <div className="flex items-center gap-2 text-brass">
                      <span className="text-[11px] tracking-widest">
                        {"★".repeat(t.rating)}
                      </span>
                    </div>
                    <p className="mt-3 font-serif text-lg italic text-paper">
                      {t.name}
                    </p>
                    <p className="mt-1 font-mono text-[10px] uppercase tracking-luxe text-stone">
                      {t.project}
                    </p>
                  </figcaption>
                </figure>
              );
            })()}
          </div>

            <div className="mt-12 flex items-center gap-8 border-t border-line-light pt-6">
              <button
                type="button"
                onClick={() => go(idx - 1)}
                aria-label="Previous testimonial"
                className="text-paper/70 transition-colors hover:text-brass"
              >
                &#8592;
              </button>
              <span className="font-mono text-[11px] tracking-luxe text-stone">
                {String(idx + 1).padStart(2, "0")} /{" "}
                {String(testimonials.length).padStart(2, "0")}
              </span>
              <button
                type="button"
                onClick={() => go(idx + 1)}
                aria-label="Next testimonial"
                className="text-paper/70 transition-colors hover:text-brass"
              >
                &#8594;
              </button>
            </div>
        </Reveal>
      </div>
    </section>
  );
}