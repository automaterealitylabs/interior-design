"use client";

import { useState } from "react";
import Link from "next/link";
import Reveal from "./Reveal";
import MaskedReveal from "./MaskedReveal";
import TextReveal from "./TextReveal";
import { PLATES, type PlateKey } from "./plates";
import { projectFilters, projects } from "@/lib/site";

function ProjectVisual({
  plate,
  image,
  name,
  slug,
}: {
  plate: PlateKey;
  image?: string;
  name: string;
  slug: string;
}) {
  const Plate = PLATES[plate];

  return (
    <Link href={`/work/${slug}`} className="group block focus:outline-none">
      <MaskedReveal
        className="border border-line bg-paper-2 overflow-hidden rounded-xs"
        innerClassName="relative"
        start="top 95%"
      >
        {image ? (
          <img
            src={image}
            alt={name}
            className="h-[300px] w-full object-cover transition-transform duration-700 ease-out group-hover:scale-105 sm:h-[380px] lg:h-[460px]"
          />
        ) : (
          <div className="p-4 md:p-6">
            <Plate className="h-[300px] w-full text-ink sm:h-[380px] lg:h-[460px]" />
          </div>
        )}
      </MaskedReveal>
      <p className="mt-3 font-mono text-[10px] uppercase tracking-far text-taupe group-hover:text-brass transition-colors">
        Case Study / 1:50 — {name} ↗
      </p>
    </Link>
  );
}

export default function Projects() {
  const [filter, setFilter] = useState("All");
  const visible =
    filter === "All"
      ? projects
      : projects.filter((p) => p.bhk === filter || p.type === filter);

  return (
    <section
      id="work"
      className="relative scroll-mt-24 bg-paper py-32 text-ink md:py-44"
    >
      <div className="mx-auto w-full max-w-[1440px] px-6 md:px-10 lg:px-16">
        <Reveal as="div" y={0} duration={1}>
          <div className="flex items-center gap-5">
            <span className="font-mono text-[11px] text-taupe">07</span>
            <span className="text-[11px] uppercase tracking-luxe text-taupe">
              Selected Work
            </span>
            <span className="h-px flex-1 bg-line" />
          </div>
        </Reveal>

        <div className="mt-14 md:mt-20">
          <Reveal as="div" y={50} duration={1.3} start="top 88%">
            <TextReveal
              as="h2"
              className="max-w-3xl font-sans text-[clamp(1.8rem,4.2vw,4rem)] font-light uppercase leading-[1.05] tracking-[0.02em]"
              speed={1.2}
              stagger={0.06}
              delay={0.15}
            >
              <span className="block" data-line>Rooms we are proud</span>
              <span className="block" data-line>to have handed back.</span>
            </TextReveal>
          </Reveal>
        </div>

        {/* filters */}
        <Reveal as="div" y={24} duration={1} start="top 94%">
          <div className="mt-12 flex flex-wrap gap-2 md:mt-16">
            {projectFilters.map((f) => (
              <button
                key={f}
                type="button"
                onClick={() => setFilter(f)}
                aria-pressed={filter === f}
                className={`border px-4 py-2 text-[10px] uppercase tracking-luxe transition-colors duration-300 ${
                  filter === f
                    ? "border-ink bg-ink text-paper"
                    : "border-line text-taupe hover:border-ink/40 hover:text-ink"
                }`}
              >
                {f}
              </button>
            ))}
          </div>
        </Reveal>

        <div key={filter} className="mt-14 md:mt-20">
          {visible.length === 0 ? (
            <Reveal as="div" y={30} duration={1} start="top 92%">
              <div className="border-y border-line py-16 text-center md:py-24">
                <p className="font-serif text-2xl font-light italic text-ink/70 md:text-3xl">
                  Nothing here yet.
                </p>
                <p className="mx-auto mt-4 max-w-sm text-sm leading-[1.8] text-taupe">
                  We haven&rsquo;t published a project in this category —
                  the next one might be yours.
                </p>
              </div>
            </Reveal>
          ) : (
            visible.map((p, i) => {
              const reversed = i % 2 === 1;
              return (
                <article
                  key={p.n}
                  className={`relative border-t border-line py-16 md:py-24 ${
                    i === visible.length - 1 ? "border-b" : ""
                  }`}
                >
                  <div className="grid items-center gap-10 md:grid-cols-12 md:gap-8">
                    {/* visual */}
                    <div
                      className={`md:col-span-7 ${
                        reversed ? "md:col-start-6" : "md:col-start-1"
                      }`}
                    >
                      <ProjectVisual
                        plate={p.plate}
                        image={p.image}
                        name={p.name}
                        slug={p.slug}
                      />
                    </div>

                    {/* text */}
                    <div
                      className={`relative md:col-span-4 ${
                        reversed ? "md:col-start-1 md:row-start-1" : "md:col-start-9"
                      }`}
                    >
                      <span
                        aria-hidden="true"
                        className="pointer-events-none absolute -top-16 right-0 -z-10 select-none font-mono text-[7rem] leading-none text-ink/5 md:text-[10rem]"
                      >
                        {p.n}
                      </span>

                      <Reveal as="div" y={44} duration={1.2} start="top 88%">
                        <div className="flex items-center gap-4">
                          <span className="font-mono text-[11px] text-taupe">
                            {p.n}
                          </span>
                          <span className="text-[10px] uppercase tracking-luxe text-taupe">
                            Case {String(i + 1).padStart(2, "0")}
                          </span>
                        </div>
                        <h3 className="mt-4 font-serif text-[clamp(1.9rem,3.4vw,3.2rem)] font-light italic leading-[1.05]">
                          <Link
                            href={`/work/${p.slug}`}
                            className="hover:text-brass transition-colors"
                          >
                            {p.name}
                          </Link>
                        </h3>
                      </Reveal>

                      <Reveal as="div" y={34} duration={1.1} delay={0.1} start="top 90%">
                        <div className="mt-8 grid grid-cols-3 gap-4 border-y border-line py-4">
                          {[
                            { label: "Location", value: p.location },
                            { label: "Type", value: p.type },
                            { label: "Tier", value: p.budgetTier },
                          ].map((m) => (
                            <div key={m.label} className="min-w-0">
                              <p className="text-[9px] uppercase tracking-luxe text-taupe">
                                {m.label}
                              </p>
                              <p className="mt-1.5 text-[12px] leading-snug text-ink/85 font-mono">
                                {m.value}
                              </p>
                            </div>
                          ))}
                        </div>
                      </Reveal>

                      <Reveal as="div" y={30} duration={1.1} delay={0.2} start="top 92%">
                        <p className="mt-7 max-w-sm text-[14px] leading-[1.8] text-taupe">
                          {p.desc}
                        </p>
                        <Link
                          href={`/work/${p.slug}`}
                          aria-label={`View case study: ${p.name}`}
                          className="group relative mt-7 inline-flex items-center gap-3 text-[11px] uppercase tracking-luxe text-ink/80 transition-colors hover:text-ink"
                        >
                          View case study
                          <span className="absolute -bottom-1 left-0 h-px w-0 bg-brass transition-all duration-500 ease-[cubic-bezier(0.65,0,0.35,1)] group-hover:w-full" />
                          <span className="text-brass relative z-10 transition-transform duration-500 group-hover:translate-x-1 group-hover:-translate-y-0.5" aria-hidden="true">
                            ↗
                          </span>
                        </Link>
                      </Reveal>
                    </div>
                  </div>
                </article>
              );
            })
          )}
        </div>
      </div>
    </section>
  );
}
