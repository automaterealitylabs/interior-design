"use client";

import Link from "next/link";
import Reveal from "./Reveal";
import MaskedReveal from "./MaskedReveal";
import TextReveal from "./TextReveal";
import { PLATES } from "./plates";
import { rooms } from "@/lib/site";

export default function RoomsWeCraft() {
  return (
    <section
      id="rooms-we-craft"
      className="relative scroll-mt-24 bg-paper py-32 text-ink md:py-44"
    >
      <div className="mx-auto w-full max-w-[1440px] px-6 md:px-10 lg:px-16">
        <Reveal className="flex items-center gap-5" y={0} duration={1}>
          <span className="font-mono text-[11px] text-taupe">II</span>
          <span className="text-[11px] uppercase tracking-luxe text-taupe">
            Rooms We Craft
          </span>
          <span className="h-px flex-1 bg-line" />
        </Reveal>

        <Reveal className="mt-14 max-w-3xl md:mt-20" y={50} duration={1.3} start="top 88%">
          <TextReveal
            as="h2"
            className="font-sans text-[clamp(1.8rem,4.2vw,4rem)] font-light uppercase leading-[1.05] tracking-[0.02em]"
            speed={1.2}
            stagger={0.06}
            delay={0.15}
          >
            <span className="block" data-line>Every room we touch gets</span>
            <span className="block" data-line>the same attention.</span>
          </TextReveal>
        </Reveal>

        {/* hairline mosaic — 7 cells, the first spans two columns */}
        <Reveal className="mt-16 grid gap-px bg-line md:mt-24 md:grid-cols-2 lg:grid-cols-4" y={15} duration={1} start="top 95%">
          {rooms.map((r, i) => (
            <Link
              key={r.title}
              href={`/services/${r.slug}`}
              className={`group flex flex-col justify-between bg-paper-2 p-6 transition-colors duration-500 hover:bg-paper md:p-8 ${
                r.feature ? "col-span-2" : ""
              }`}
            >
              <div>
                <div className="flex items-center justify-between">
                  <span className="font-mono text-[10px] text-taupe">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <span className="text-[10px] uppercase tracking-luxe text-brass opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                    Explore Space &rarr;
                  </span>
                </div>
                <div className="mt-6 flex items-baseline justify-between gap-4">
                  <h3 className="font-serif text-xl font-light italic text-ink md:text-2xl transition-colors duration-300 group-hover:text-brass">
                    {r.title}
                  </h3>
                  {r.feature && (
                    <span className="shrink-0 text-[9px] uppercase tracking-luxe text-brass">
                      Most requested
                    </span>
                  )}
                </div>
                <p className="mt-3 max-w-sm text-[12px] leading-[1.7] text-taupe">
                  {r.line}
                </p>
              </div>
              <MaskedReveal
                className={`mt-8 w-full rounded-sm ${
                  r.feature ? "h-40 sm:h-56" : "h-28 sm:h-36"
                }`}
                start="top 98%"
                delay={i * 0.04}
              >
                {r.image ? (
                  <img
                    src={r.image}
                    alt={r.title}
                    className="h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                  />
                ) : (() => {
                  const Plate = PLATES[r.plate];
                  return (
                    <Plate className="h-full w-full text-ink/25 transition-colors duration-700 group-hover:text-brass/60" />
                  );
                })()}
              </MaskedReveal>
            </Link>
          ))}
        </Reveal>

        <Reveal className="mt-12 md:mt-16" y={30} duration={1} start="top 95%">
          <Link
            href="/services"
            className="group btn-fill--light relative inline-flex items-center gap-4 px-6 py-3 text-[11px] uppercase tracking-luxe text-ink/80 transition-colors hover:text-ink"
          >
            The full scope of work
            <span className="text-brass relative z-10 transition-transform duration-500 group-hover:translate-x-1">
              &#8594;
            </span>
          </Link>
        </Reveal>
      </div>
    </section>
  );
}
