"use client";

import Link from "next/link";
import Reveal from "./Reveal";
import TextReveal from "./TextReveal";
import { pricingPackages } from "@/lib/site";

export default function PricingTeaser() {
  return (
    <section id="pricing-teaser" className="relative bg-paper py-28 text-ink md:py-40">
      <div className="mx-auto w-full max-w-[1440px] px-6 md:px-10 lg:px-16">
        <Reveal className="flex items-center gap-5" y={0} duration={1}>
          <span className="font-mono text-[11px] text-taupe">05</span>
          <span className="text-[11px] uppercase tracking-luxe text-taupe">
            Investment & Pricing
          </span>
          <span className="h-px flex-1 bg-line" />
        </Reveal>

        <div className="mt-12 flex flex-col justify-between gap-8 md:mt-16 md:flex-row md:items-end">
          <Reveal className="max-w-2xl" y={40} duration={1.2} start="top 88%">
            <TextReveal
              as="h2"
              className="font-serif text-[clamp(1.8rem,4vw,3.6rem)] font-light leading-[1.12] text-ink"
              speed={1.2}
              stagger={0.06}
              delay={0.15}
            >
              <span className="block" data-line>Transparent commission tiers —</span>
              <span className="block" data-line>
                <em className="italic text-brass">proportioned to your ambition</em>.
              </span>
            </TextReveal>
          </Reveal>

          <Reveal
            as={Link}
            href="/pricing"
            className="group inline-flex items-center gap-3 text-[11px] uppercase tracking-luxe text-ink transition-colors hover:text-brass"
            y={20}
            duration={1}
            delay={0.2}
            start="top 90%"
          >
            <span>Explore full cost calculator & matrix</span>
            <span className="text-brass transition-transform duration-300 group-hover:translate-x-1">
              →
            </span>
          </Reveal>
        </div>

        {/* 3 Package Cards */}
        <div className="mt-14 grid gap-8 md:mt-20 md:grid-cols-3">
          {pricingPackages.map((pkg, idx) => (
            <Reveal
              key={pkg.id}
              className={`relative flex h-full flex-col justify-between rounded-xs border p-8 transition-all duration-500 md:p-10 ${pkg.featured
                  ? "border-brass/70 bg-paper-2 shadow-xl ring-1 ring-brass/30"
                  : "border-line bg-paper hover:border-line-hover"
                }`}
              y={40}
              duration={1.2}
              delay={idx * 0.1}
              start="top 90%"
            >
              {pkg.featured && (
                <div className="absolute -top-3 right-8 rounded-full bg-brass px-3.5 py-0.5 font-mono text-[9px] uppercase tracking-wider text-paper">
                  Most Selected
                </div>
              )}

              <div>
                <div className="flex items-center justify-between font-mono text-[11px] text-taupe">
                  <span>Tier 0{idx + 1}</span>
                  <span className="uppercase">{pkg.id}</span>
                </div>

                <h3 className="mt-4 font-serif text-2xl text-ink md:text-3xl">
                  {pkg.name}
                </h3>
                <p className="mt-3 text-[13px] leading-relaxed text-taupe font-sans">
                  {pkg.tagline}
                </p>

                <div className="mt-8 border-y border-line py-5">
                  <span className="font-mono text-[10px] uppercase tracking-luxe text-taupe block">
                    Starting from
                  </span>
                  <p className="mt-1 flex items-baseline gap-1 font-serif text-3xl font-normal text-ink">
                    <span className="font-currency text-2xl font-normal text-ink/80 select-none mr-0.5" aria-hidden="true">
                      ₹
                    </span>
                    {pkg.priceStarting.replace(/^₹/, "")}
                    <span className="font-mono text-[11px] text-taupe ml-1 font-normal">
                      {pkg.priceUnit}
                    </span>
                  </p>
                </div>

                <span className="mt-8 font-mono text-[10px] uppercase tracking-luxe text-taupe block">
                  Key Deliverables
                </span>
                <ul className="mt-4 space-y-3">
                  {pkg.features.slice(0, 4).map((f) => (
                    <li
                      key={f}
                      className="relative pl-4 text-[13px] text-ink/80 before:absolute before:left-0 before:top-0 before:text-brass before:content-['•']"
                    >
                      {f}
                    </li>
                  ))}
                </ul>
              </div>

              <div className="mt-10 pt-6 border-t border-line">
                <Link
                  href={`/pricing?tier=${pkg.id}`}
                  className={`block w-full text-center py-3.5 px-6 text-[11px] uppercase tracking-luxe transition-all duration-300 ${pkg.featured
                      ? "bg-ink text-paper hover:bg-brass hover:text-paper"
                      : "border border-line text-ink hover:border-ink hover:bg-paper-2"
                    }`}
                >
                  Estimate My Space →
                </Link>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
