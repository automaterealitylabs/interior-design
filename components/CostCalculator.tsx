"use client";

import { useState } from "react";
import Link from "next/link";
import Reveal from "./Reveal";
import TextReveal from "./TextReveal";
import { costCalculator } from "@/lib/site";

const fmt = (v: number) => Math.round(v).toLocaleString("en-IN");
const lakh = (v: number) =>
  (v / 100000).toLocaleString("en-IN", { maximumFractionDigits: 1 });

function Seg({
  value,
  options,
  onChange,
}: {
  value: string;
  options: string[];
  onChange: (v: string) => void;
}) {
  return (
    <div className="flex flex-wrap gap-2">
      {options.map((o) => (
        <button
          key={o}
          type="button"
          onClick={() => onChange(o)}
          aria-pressed={value === o}
          className={`border px-4 py-2 text-[10px] uppercase tracking-luxe transition-colors duration-300 ${
            value === o
              ? "border-ink bg-ink text-paper"
              : "border-line text-taupe hover:border-ink/40 hover:text-ink"
          }`}
        >
          {o}
        </button>
      ))}
    </div>
  );
}

export default function CostCalculator({ initialTier = "Signature" }: { initialTier?: string }) {
  const [type, setType] = useState("3 BHK");
  const [style, setStyle] = useState("Modern");
  const [budget, setBudget] = useState(
    initialTier === "essential" ? "Essential" : initialTier === "bespoke" ? "Bespoke" : "Signature"
  );
  const [area, setArea] = useState(1400);

  const [minA, maxA] = costCalculator.areaRanges[type] ?? [1100, 1700];
  const rate = costCalculator.styleRates[style]?.[budget] ?? 2800;
  const a = Math.min(Math.max(area, minA), maxA);

  const low = a * rate;
  const high = a * rate * 1.15;
  const fillPct = ((a - minA) / Math.max(maxA - minA, 1)) * 100;

  const pickType = (t: string) => {
    setType(t);
    const [lo, hi] = costCalculator.areaRanges[t] ?? [1100, 1700];
    setArea(Math.round((lo + hi) / 2));
  };

  // Itemized estimations
  const joineryEst = low * 0.42;
  const civilEst = low * 0.22;
  const lightingEst = low * 0.14;
  const furnishingEst = low * 0.12;
  const feesEst = low * 0.10;

  return (
    <section id="calculator" className="relative scroll-mt-24 bg-paper py-32 text-ink md:py-44">
      <div className="mx-auto w-full max-w-[1440px] px-6 md:px-10 lg:px-16">
        <Reveal as="div" y={0} duration={1}>
          <div className="flex items-center gap-5">
            <span className="font-mono text-[11px] text-taupe">11</span>
            <span className="text-[11px] uppercase tracking-luxe text-taupe">
              Interactive Cost Calculator
            </span>
            <span className="h-px flex-1 bg-line" />
          </div>
        </Reveal>

        <div className="mt-14 md:mt-20">
          <Reveal as="div" y={50} duration={1.3} start="top 88%">
            <TextReveal
              as="h2"
              className="max-w-3xl font-serif text-[clamp(1.9rem,4vw,3.8rem)] font-light leading-[1.1] text-ink"
              speed={1.2}
              stagger={0.06}
              delay={0.15}
            >
              <span className="block" data-line>Instant project cost estimator —</span>
              <span className="block" data-line>
                <em className="italic text-brass">configured in real-time</em>.
              </span>
            </TextReveal>
          </Reveal>
        </div>

        <Reveal as="div" y={40} duration={1.2} start="top 92%">
          <div className="mt-14 grid gap-10 lg:grid-cols-12 lg:gap-12">
            {/* controls */}
            <div className="lg:col-span-7 space-y-10">
              <div className="border-t border-line pt-6">
                <p className="mb-4 font-mono text-[10px] uppercase tracking-luxe text-taupe">
                  01. Property Typology
                </p>
                <Seg
                  value={type}
                  options={costCalculator.propertyTypes}
                  onChange={pickType}
                />
              </div>

              <div className="border-t border-line pt-6">
                <p className="mb-4 font-mono text-[10px] uppercase tracking-luxe text-taupe">
                  02. Design Language &amp; Architecture Style
                </p>
                <Seg
                  value={style}
                  options={costCalculator.designStyles}
                  onChange={setStyle}
                />
              </div>

              <div className="border-t border-line pt-6">
                <p className="mb-4 font-mono text-[10px] uppercase tracking-luxe text-taupe">
                  03. Material &amp; Specification Tier
                </p>
                <Seg
                  value={budget}
                  options={costCalculator.budgetRanges}
                  onChange={setBudget}
                />
              </div>

              <div className="border-t border-line pt-6">
                <div className="mb-4 flex items-baseline justify-between gap-4">
                  <p className="font-mono text-[10px] uppercase tracking-luxe text-taupe">
                    04. Approximate Carpet Area
                  </p>
                  <p className="font-serif text-2xl italic text-ink">
                    {fmt(a)}{" "}
                    <span className="font-mono text-[12px] not-italic text-taupe">
                      sq. ft ({Math.round(a * 0.0929)} m²)
                    </span>
                  </p>
                </div>
                <input
                  type="range"
                  min={minA}
                  max={maxA}
                  step={25}
                  value={a}
                  onChange={(e) => setArea(Number(e.target.value))}
                  className="calc-range w-full cursor-pointer"
                  style={{
                    background: `linear-gradient(to right, var(--ink) 0%, var(--ink) ${fillPct}%, var(--line) ${fillPct}%, var(--line) 100%)`,
                  }}
                  aria-label="Approximate area in square feet"
                />
                <div className="mt-3 flex justify-between font-mono text-[10px] text-taupe">
                  <span>{fmt(minA)} sq.ft</span>
                  <span>{fmt(maxA)} sq.ft</span>
                </div>
              </div>

              {/* Itemized preview breakdown */}
              <div className="border-t border-line pt-8">
                <p className="mb-4 font-mono text-[10px] uppercase tracking-luxe text-taupe">
                  Estimated Allocation Breakdown
                </p>
                <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 font-mono text-[11px]">
                  <div className="rounded-xs border border-line bg-paper-2 p-3">
                    <span className="text-taupe block text-[10px]">Joinery (42%)</span>
                    <span className="text-ink font-semibold"><span className="font-currency select-none">₹</span>{lakh(joineryEst)}L</span>
                  </div>
                  <div className="rounded-xs border border-line bg-paper-2 p-3">
                    <span className="text-taupe block text-[10px]">Civil & Floor (22%)</span>
                    <span className="text-ink font-semibold"><span className="font-currency select-none">₹</span>{lakh(civilEst)}L</span>
                  </div>
                  <div className="rounded-xs border border-line bg-paper-2 p-3">
                    <span className="text-taupe block text-[10px]">Lighting (14%)</span>
                    <span className="text-ink font-semibold"><span className="font-currency select-none">₹</span>{lakh(lightingEst)}L</span>
                  </div>
                  <div className="rounded-xs border border-line bg-paper-2 p-3">
                    <span className="text-taupe block text-[10px]">Soft Furnishing (12%)</span>
                    <span className="text-ink font-semibold"><span className="font-currency select-none">₹</span>{lakh(furnishingEst)}L</span>
                  </div>
                  <div className="rounded-xs border border-line bg-paper-2 p-3 sm:col-span-2">
                    <span className="text-taupe block text-[10px]">Design & Site Mgmt (10%)</span>
                    <span className="text-ink font-semibold"><span className="font-currency select-none">₹</span>{lakh(feesEst)}L</span>
                  </div>
                </div>
              </div>
            </div>

            {/* result sidebar */}
            <div className="lg:col-span-5">
              <div className="sticky top-28 flex flex-col justify-between rounded-xs border border-line bg-ink p-8 text-paper md:p-10 shadow-2xl">
                <div>
                  <div className="flex items-center justify-between border-b border-line-light pb-4">
                    <p className="text-[10px] uppercase tracking-luxe text-stone">
                      Calculated Estimate Range
                    </p>
                    <span className="rounded-full bg-brass/20 px-2.5 py-0.5 font-mono text-[9px] uppercase text-brass">
                      Fixed-Scope Guarantee
                    </span>
                  </div>

                  <p className="mt-8 font-serif text-[clamp(2.2rem,4vw,3.2rem)] font-light italic leading-tight text-paper">
                    <span className="font-currency text-[0.85em] mr-0.5 inline-block select-none not-italic">₹</span>{lakh(low)}L
                    <span className="mx-2 font-sans text-xl not-italic text-stone">
                      &ndash;
                    </span>
                    <span className="font-currency text-[0.85em] mr-0.5 inline-block select-none not-italic">₹</span>{lakh(high)}L
                  </p>
                  <p className="mt-4 font-mono text-[11px] leading-relaxed text-stone">
                    <span className="font-currency select-none">₹</span>{fmt(rate)} / ft&sup2; &middot; {style} &middot; {budget} Tier
                  </p>

                  <div className="mt-8 space-y-2 border-t border-line-light pt-6 text-[12px] text-stone font-sans">
                    <div className="flex items-center justify-between">
                      <span>Property Typology:</span>
                      <span className="text-paper font-mono">{type}</span>
                    </div>
                    <div className="flex items-center justify-between">
                      <span>Total Measured Area:</span>
                      <span className="text-paper font-mono">{fmt(a)} sq. ft</span>
                    </div>
                    <div className="flex items-center justify-between">
                      <span>Warranty Period:</span>
                      <span className="text-brass font-mono">
                        {budget === "Essential" ? "5-Year Warranty" : "10-Year Warranty"}
                      </span>
                    </div>
                  </div>
                </div>

                <div className="mt-10 border-t border-line-light pt-8">
                  <Link
                    href={`/contact?type=${encodeURIComponent(type)}&tier=${encodeURIComponent(
                      budget
                    )}&area=${a}&style=${encodeURIComponent(style)}`}
                    className="btn-fill block w-full py-4 text-center text-[11px] uppercase tracking-luxe shadow-lg"
                  >
                    Lock In This Estimate &amp; Book Consultation →
                  </Link>

                  <p className="mt-4 text-center font-mono text-[10px] text-stone">
                    No login required &middot; 24-hour turnaround
                  </p>
                </div>
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
