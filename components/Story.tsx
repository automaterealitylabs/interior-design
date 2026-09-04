"use client";

import Reveal from "./Reveal";
import { PlateArch } from "./plates";

const facts = [
  { value: "2012", label: "Founded" },
  { value: "40+", label: "Projects" },
  { value: "06", label: "Countries" },
];

export default function Story() {
  return (
    <section
      id="story"
      className="relative overflow-hidden bg-paper py-32 text-ink md:py-44"
    >
      {/* oversized decorative elevation, barely there */}
      <Reveal
        as="div"
        className="pointer-events-none absolute -right-24 top-1/2 hidden -translate-y-1/2 text-ink/10 lg:block"
        y={0}
        start="top 80%"
        duration={1.6}
      >
        <PlateArch className="h-[520px] w-auto" />
      </Reveal>

      <div className="relative z-10 mx-auto w-full max-w-[1440px] px-6 md:px-10 lg:px-16">
        <Reveal className="flex items-center gap-5" y={0} duration={1}>
          <span className="font-mono text-[11px] text-taupe">02</span>
          <span className="text-[11px] uppercase tracking-luxe text-taupe">
            The Story
          </span>
          <span className="h-px flex-1 bg-line" />
        </Reveal>

        <div className="mt-14 grid gap-12 md:mt-20 md:grid-cols-12 md:gap-8">
          <div className="md:col-span-8">
            <Reveal as="h2" y={60} duration={1.4} start="top 88%">
              <span className="font-serif text-[clamp(2.1rem,4.6vw,4.6rem)] font-light leading-[1.08] text-ink">
                Every space has a <em className="italic text-brass">story</em>.
                <br />
                We help you <em className="italic text-brass">tell</em> it.
              </span>
            </Reveal>
          </div>

          <div className="flex flex-col justify-end md:col-span-4 md:col-start-9">
            <Reveal as="p" className="max-w-sm text-[15px] leading-[1.8] text-taupe" y={40} duration={1.2} delay={0.15} start="top 90%">
              A home is not a collection of rooms — it is a sequence of
              feelings. We begin every project by listening, then turn
              proportion, material and light into a place that holds the
              shape of your life.
            </Reveal>

            <Reveal className="mt-14 flex max-w-sm flex-col gap-4 border-t border-line pt-6 md:mt-16" y={40} duration={1.1} delay={0.25} start="top 92%">
              {facts.map((f) => (
                <div
                  key={f.label}
                  className="flex items-baseline justify-between gap-6"
                >
                  <span className="font-mono text-[13px] text-ink">
                    {f.value}
                  </span>
                  <span className="text-[10px] uppercase tracking-luxe text-taupe">
                    {f.label}
                  </span>
                </div>
              ))}
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}
