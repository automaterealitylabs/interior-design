"use client";

import Link from "next/link";
import Reveal from "./Reveal";
import MaskedReveal from "./MaskedReveal";
import TextReveal from "./TextReveal";
import { PlateArch } from "./plates";
import { signatureWorks } from "@/lib/site";

export default function SignatureWorks() {
  const getSlug = (i: number) => {
    if (i === 0) return "courtyard-house";
    if (i === 1) return "lightwell-penthouse";
    return "maison-verre";
  };

  return (
    <section
      id="signature-works"
      className="relative overflow-hidden scroll-mt-24 bg-ink py-32 text-paper md:py-44"
    >
      {/* faint oversized elevation as editorial texture */}
      <Reveal
        as="div"
        className="pointer-events-none absolute -right-24 top-40 hidden text-paper/5 lg:block"
        y={0}
        start="top 80%"
        duration={1.6}
      >
        <PlateArch className="h-[560px] w-auto" />
      </Reveal>

      <div className="relative z-10 mx-auto w-full max-w-[1440px] px-6 md:px-10 lg:px-16">
        <Reveal className="flex items-center gap-5" y={0} duration={1}>
          <span className="font-mono text-[11px] text-stone">01</span>
          <span className="text-[11px] uppercase tracking-luxe text-stone">
            Signature Works
          </span>
          <span className="h-px flex-1 bg-line-light" />
        </Reveal>

        <Reveal className="mt-14 max-w-3xl md:mt-20" y={50} duration={1.3} start="top 88%">
          <TextReveal as="h2" className="font-serif text-[clamp(1.9rem,4vw,3.8rem)] font-light leading-[1.12]" speed={1.2} stagger={0.06} delay={0.15}>
            <span className="block" data-line>Three spaces we keep going back to —</span>
            <span className="block" data-line>
              <em className="italic text-brass">each one a signature</em>.
            </span>
          </TextReveal>
        </Reveal>

        {signatureWorks.map((f, i) => {
          const reversed = i % 2 === 1;
          const slug = getSlug(i);

          return (
            <Reveal
              key={f.n}
              as="article"
              className={`group relative grid items-center gap-10 border-t border-line-light py-16 md:grid-cols-12 md:gap-8 md:py-28 ${
                i === 0 ? "mt-12 md:mt-20" : ""
              }`}
              y={50}
              duration={1.2}
              delay={i * 0.05}
              start="top 88%"
            >
              {/* framed project photo with technical drawing annotation */}
              <Link
                href={`/work/${slug}`}
                className={`block focus:outline-none md:col-span-7 ${
                  reversed ? "md:col-start-6" : "md:col-start-1"
                }`}
              >
                <MaskedReveal
                  className="relative border border-line-light bg-ink-2 after:pointer-events-none after:absolute after:inset-0 after:bg-gradient-to-t after:from-ink/60 after:via-transparent after:to-transparent"
                  start="top 85%"
                  delay={i * 0.05}
                >
                  <img
                    src={
                      f.plate === "arch"
                        ? "/images/projects/courtyard-house.png"
                        : f.plate === "light"
                        ? "/images/projects/lightwell-penthouse.png"
                        : "/images/projects/maison-verre.png"
                    }
                    alt={f.title}
                    className="h-[300px] w-full object-cover transition-transform duration-700 ease-out group-hover:scale-105 sm:h-[380px] lg:h-[460px]"
                  />
                </MaskedReveal>
                <p className="mt-3 font-mono text-[10px] uppercase tracking-far text-stone group-hover:text-brass transition-colors">
                  Drawing {f.plate} / 1:50 — {f.title} ↗
                </p>
              </Link>

              {/* text */}
              <div
                className={`relative md:col-span-4 ${
                  reversed ? "md:col-start-1 md:row-start-1" : "md:col-start-9"
                }`}
              >
                <span
                  aria-hidden="true"
                  className="pointer-events-none absolute -top-16 right-0 -z-10 select-none font-mono text-[7rem] leading-none text-paper/5 md:text-[10rem]"
                >
                  {f.n}
                </span>

                <p className="font-mono text-[10px] uppercase tracking-luxe text-stone">
                  {f.location} · {f.year} · {f.type}
                </p>
                <h3 className="mt-4 font-serif text-[clamp(1.9rem,3.4vw,3.2rem)] font-light italic leading-[1.05] text-paper transition-colors duration-500 group-hover:text-brass">
                  <Link href={`/work/${slug}`}>
                    {f.title}
                  </Link>
                </h3>
                <p className="mt-6 font-mono text-[11px] uppercase tracking-luxe text-brass">
                  {f.note}
                </p>
                <p className="mt-5 max-w-sm text-[14px] leading-[1.8] text-stone">
                  {f.detail}
                </p>

                <Link
                  href={`/work/${slug}`}
                  className="group mt-8 inline-flex items-center gap-3 text-[11px] uppercase tracking-luxe text-paper/80 transition-colors hover:text-brass"
                >
                  <span>Explore full case study</span>
                  <span className="text-brass transition-transform duration-300 group-hover:translate-x-1">→</span>
                </Link>
              </div>
            </Reveal>
          );
        })}

        <Reveal className="mt-6 border-t border-line-light pt-10 md:mt-10" y={30} duration={1} start="top 95%">
          <Link
            href="/work"
            className="group inline-flex items-center gap-4 text-[11px] uppercase tracking-luxe text-paper/85 transition-colors hover:text-paper relative"
          >
            View all work
            <span className="absolute -bottom-1 left-0 h-px w-0 bg-brass transition-all duration-500 ease-[cubic-bezier(0.65,0,0.35,1)] group-hover:w-full" />
            <span className="text-brass transition-transform duration-500 group-hover:translate-x-1 relative z-10">
              &#8594;
            </span>
          </Link>
        </Reveal>
      </div>
    </section>
  );
}
