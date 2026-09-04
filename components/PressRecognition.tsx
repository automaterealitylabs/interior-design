"use client";

import Reveal from "./Reveal";
import TextReveal from "./TextReveal";
import { PlateLight } from "./plates";
import { press } from "@/lib/site";

export default function PressRecognition() {
  return (
    <section
      id="press"
      className="relative overflow-hidden scroll-mt-24 bg-ink py-32 text-paper md:py-44"
    >
      {/* faint light-study plate as cinematic texture */}
      <Reveal
        as="div"
        className="pointer-events-none absolute -bottom-40 -left-24 hidden text-paper/5 lg:block"
        y={0}
        start="top 90%"
        duration={1.8}
      >
        <PlateLight className="h-[560px] w-auto rotate-[-6deg]" />
      </Reveal>

      <div className="relative z-10 mx-auto w-full max-w-[1440px] px-6 md:px-10 lg:px-16">
        <Reveal className="flex items-center gap-5" y={0} duration={1}>
          <span className="font-mono text-[11px] text-stone">V</span>
          <span className="text-[11px] uppercase tracking-luxe text-stone">
            Press &amp; Recognition
          </span>
          <span className="h-px flex-1 bg-line-light" />
        </Reveal>

        <Reveal className="mt-14 max-w-3xl md:mt-20" y={50} duration={1.3} start="top 88%">
          <TextReveal
            as="h2"
            className="font-serif text-[clamp(1.9rem,4vw,3.8rem)] font-light leading-[1.1]"
            speed={1.2}
            stagger={0.06}
            delay={0.15}
          >
            <span className="block" data-line>Mentioned, awarded, and</span>
            <span className="block" data-line>
              <em className="italic text-brass">asked back</em>.
            </span>
          </TextReveal>
        </Reveal>

        {/* dense credits list */}
        <div className="mt-16 border-t border-line-light md:mt-24">
          {press.map((p, i) => (
            <Reveal
              key={p.publication}
              className="group flex flex-wrap items-center gap-x-6 gap-y-3 border-b border-line-light py-5 md:py-6"
              y={26}
              duration={1}
              delay={i * 0.05}
              start="top 92%"
            >
              <span className="w-12 shrink-0 font-mono text-[11px] text-stone">
                {p.year}
              </span>

              {"image" in p && p.image && (
                <div className="h-12 w-20 shrink-0 overflow-hidden rounded-xs border border-line-light/30 bg-ink-2 hidden sm:block">
                  <img
                    src={p.image as string}
                    alt={p.publication}
                    className="h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-110"
                  />
                </div>
              )}

              <h3 className="min-w-0 flex-1 font-serif text-[clamp(1.3rem,2.6vw,2.2rem)] font-light italic leading-none text-paper/90 transition-colors duration-500 group-hover:text-brass">
                {p.publication}
              </h3>
              <span className="hidden font-mono text-[10px] uppercase tracking-luxe text-brass sm:inline">
                {p.kind}
              </span>
              <p className="hidden max-w-xs text-[12px] leading-[1.7] text-stone lg:ml-auto lg:block">
                {p.note}
              </p>
              <span className="hidden text-lg text-brass opacity-0 transition-all duration-500 group-hover:translate-x-0 group-hover:opacity-100 md:-translate-x-2 md:block">
                &#8599;
              </span>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
