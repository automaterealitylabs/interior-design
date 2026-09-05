"use client";

import Link from "next/link";
import Reveal from "./Reveal";
import TextReveal from "./TextReveal";
import { PLATES } from "./plates";
import { fieldNotes } from "@/lib/site";

export default function FieldNotes() {
  return (
    <section
      id="field-notes"
      className="relative scroll-mt-24 bg-paper py-32 text-ink md:py-44"
    >
      <div className="mx-auto w-full max-w-[1440px] px-6 md:px-10 lg:px-16">
        <Reveal className="flex items-center gap-5" y={0} duration={1}>
          <span className="font-mono text-[11px] text-taupe">IV</span>
          <span className="text-[11px] uppercase tracking-luxe text-taupe">
            Field Notes
          </span>
          <span className="h-px flex-1 bg-line" />
        </Reveal>

        <Reveal className="mt-14 max-w-3xl md:mt-20" y={50} duration={1.3} start="top 88%">
          <TextReveal
            as="h2"
            className="font-serif text-[clamp(1.9rem,4vw,3.8rem)] font-light leading-[1.1]"
            speed={1.2}
            stagger={0.06}
            delay={0.15}
          >
            <span className="block" data-line>Notes from the studio floor —</span>
            <span className="block" data-line>
              <em className="italic text-brass">observed, not drafted</em>.
            </span>
          </TextReveal>
        </Reveal>

        {/* editorial rows, not cards */}
        <div className="mt-14 md:mt-20">
          {fieldNotes.map((n, i) => {
            const Plate = PLATES[n.plate];
            const last = i === fieldNotes.length - 1;
            return (
              <Reveal
                key={n.title}
                as={Link}
                href={`/journal/${n.slug}`}
                className={`group grid gap-6 border-t border-line py-10 transition-colors duration-500 hover:bg-paper-2/40 md:grid-cols-12 md:items-center md:gap-8 md:py-12 ${
                  last ? "border-b" : ""
                }`}
                y={36}
                duration={1.1}
                delay={i * 0.06}
                start="top 92%"
              >
                <span className="font-mono text-[10px] tracking-luxe text-taupe md:col-span-1">
                  Note0{i + 1}
                </span>
                <div className="min-w-0 md:col-span-6">
                  <p className="font-mono text-[10px] uppercase tracking-far text-brass">
                    {n.category}
                  </p>
                  <h3 className="mt-2 font-serif text-[clamp(1.3rem,2.4vw,2rem)] font-light italic leading-snug text-ink transition-colors duration-500 group-hover:text-brass">
                    {n.title}
                  </h3>
                </div>
                <div className="hidden md:col-span-2 md:block">
                  <Plate className="h-24 w-full text-ink/20 transition-colors duration-700 group-hover:text-brass/50" />
                </div>
                <p className="min-w-0 text-[13px] leading-[1.7] text-taupe md:col-span-3">
                  {n.excerpt}
                </p>
              </Reveal>
            );
          })}
        </div>

        <Reveal
          as={Link}
          href="/journal"
          className="group mt-10 inline-flex items-center gap-4 text-[11px] uppercase tracking-luxe text-ink/80 transition-colors hover:text-ink md:mt-14"
          y={30}
          duration={1}
          start="top 95%"
        >
          Read the journal
          <span className="text-brass transition-transform duration-500 group-hover:translate-x-1">
            &#8594;
          </span>
        </Reveal>
      </div>
    </section>
  );
}
