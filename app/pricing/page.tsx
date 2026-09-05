import type { Metadata } from "next";
import Link from "next/link";
import Reveal from "@/components/Reveal";
import TextReveal from "@/components/TextReveal";
import CostCalculator from "@/components/CostCalculator";
import { pricingPackages, trustGuarantees } from "@/lib/site";

export const metadata: Metadata = {
  title: "Pricing & Cost Calculator",
  description:
    "Transparent interior design pricing, interactive space cost estimator, and 3-tier commission matrix by Lumière Interiors.",
};

export default async function PricingPage({
  searchParams,
}: {
  searchParams: Promise<{ tier?: string }>;
}) {
  const { tier } = await searchParams;

  return (
    <main className="bg-paper text-ink">
      {/* Header */}
      <section className="relative border-b border-line bg-ink py-32 text-paper md:py-44">
        <div className="mx-auto w-full max-w-[1440px] px-6 md:px-10 lg:px-16">
          <Reveal as="div" y={0} duration={1}>
            <div className="flex items-center gap-5">
              <span className="font-mono text-[11px] text-stone">01</span>
              <span className="text-[11px] uppercase tracking-luxe text-stone">
                Investment Structure
              </span>
              <span className="h-px flex-1 bg-line-light" />
            </div>
          </Reveal>

          <div className="mt-14 max-w-3xl md:mt-20">
            <Reveal as="div" y={50} duration={1.3} start="top 88%">
              <TextReveal
                as="h1"
                className="font-serif text-[clamp(2.4rem,5.5vw,5rem)] font-light leading-[1.05] text-paper"
                speed={1.2}
                stagger={0.06}
                delay={0.1}
              >
                <span className="block" data-line>Transparent commission tiers —</span>
                <span className="block" data-line>
                  <em className="italic text-brass">zero hidden costs</em>.
                </span>
              </TextReveal>
            </Reveal>

            <Reveal as="div" y={30} duration={1.1} delay={0.15} start="top 90%">
              <p className="mt-6 max-w-2xl text-[16px] leading-relaxed text-stone font-sans">
                Every Lumière commission is anchored by an itemized Fixed-Scope BOQ. From smart compact urban apartments to couture private villas, explore our three tiered offerings or configure your exact budget in real-time below.
              </p>
            </Reveal>
          </div>
        </div>
      </section>

      {/* Interactive Calculator */}
      <CostCalculator initialTier={tier} />

      {/* Detailed 3-Tier Comparison Matrix Table */}
      <section className="relative border-t border-line bg-paper-2 py-28 md:py-40">
        <div className="mx-auto w-full max-w-[1440px] px-6 md:px-10 lg:px-16">
          <Reveal as="div" y={0} duration={1}>
            <div className="flex items-center gap-5">
              <span className="font-mono text-[11px] text-taupe">02</span>
              <span className="text-[11px] uppercase tracking-luxe text-taupe">
                Detailed Tier Comparison Matrix
              </span>
              <span className="h-px flex-1 bg-line" />
            </div>
          </Reveal>

          <div className="mt-12 md:mt-16">
            <Reveal as="div" y={30} duration={1.2}>
              <h2 className="font-serif text-[clamp(1.8rem,3.5vw,3.2rem)] font-light text-ink">
                Compare what&apos;s included in <em className="italic text-brass">every tier</em>.
              </h2>
            </Reveal>

            {/* Desktop Table View */}
            <div className="mt-12 overflow-x-auto">
              <table className="w-full min-w-[700px] border-collapse text-left font-sans">
                <thead>
                  <tr className="border-b border-line bg-paper text-ink">
                    <th className="p-6 font-mono text-[11px] uppercase tracking-luxe text-taupe">
                      Specification Attribute
                    </th>
                    {pricingPackages.map((pkg) => (
                      <th
                        key={pkg.id}
                        className={`p-6 ${
                          pkg.featured ? "bg-brass/5 text-ink font-semibold" : "text-ink"
                        }`}
                      >
                        <span className="font-serif text-xl block">{pkg.name}</span>
                        <span className="font-mono text-[11px] text-brass block mt-1">
                          From <span className="font-currency select-none">₹</span>{pkg.priceStarting.replace(/^₹/, "")} / sq.ft
                        </span>
                      </th>
                    ))}
                  </tr>
                </thead>
                <tbody className="divide-y divide-line text-[13px] text-ink/85">
                  <tr>
                    <td className="p-6 font-mono text-[11px] uppercase text-taupe">Ideal For</td>
                    {pricingPackages.map((pkg) => (
                      <td key={pkg.id} className="p-6">{pkg.idealFor}</td>
                    ))}
                  </tr>
                  <tr>
                    <td className="p-6 font-mono text-[11px] uppercase text-taupe">Carcass Substrate</td>
                    {pricingPackages.map((pkg) => (
                      <td key={pkg.id} className="p-6">{pkg.specs.cabinetryCore}</td>
                    ))}
                  </tr>
                  <tr>
                    <td className="p-6 font-mono text-[11px] uppercase text-taupe">Surfaces & Finishes</td>
                    {pricingPackages.map((pkg) => (
                      <td key={pkg.id} className="p-6">{pkg.specs.finishes}</td>
                    ))}
                  </tr>
                  <tr>
                    <td className="p-6 font-mono text-[11px] uppercase text-taupe">Stone Countertops</td>
                    {pricingPackages.map((pkg) => (
                      <td key={pkg.id} className="p-6">{pkg.specs.countertops}</td>
                    ))}
                  </tr>
                  <tr>
                    <td className="p-6 font-mono text-[11px] uppercase text-taupe">Hardware Mechanism</td>
                    {pricingPackages.map((pkg) => (
                      <td key={pkg.id} className="p-6">{pkg.specs.hardware}</td>
                    ))}
                  </tr>
                  <tr>
                    <td className="p-6 font-mono text-[11px] uppercase text-taupe">Lighting Design</td>
                    {pricingPackages.map((pkg) => (
                      <td key={pkg.id} className="p-6">{pkg.specs.lighting}</td>
                    ))}
                  </tr>
                  <tr>
                    <td className="p-6 font-mono text-[11px] uppercase text-taupe">Warranty Guarantee</td>
                    {pricingPackages.map((pkg) => (
                      <td key={pkg.id} className="p-6 font-semibold text-brass">{pkg.specs.warranty}</td>
                    ))}
                  </tr>
                  <tr>
                    <td className="p-6 font-mono text-[11px] uppercase text-taupe">Project Director</td>
                    {pricingPackages.map((pkg) => (
                      <td key={pkg.id} className="p-6">{pkg.specs.projectLead}</td>
                    ))}
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </section>

      {/* Trust & Guarantee Banner */}
      <section className="relative border-t border-line bg-paper py-24 md:py-32">
        <div className="mx-auto w-full max-w-[1440px] px-6 md:px-10 lg:px-16">
          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {trustGuarantees.map((g, idx) => (
              <div key={g.title} className="rounded-xs border border-line bg-paper-2 p-6">
                <span className="font-mono text-[10px] text-brass">0{idx + 1}</span>
                <h4 className="mt-3 font-serif text-lg text-ink">{g.title}</h4>
                <p className="mt-2 text-[12px] leading-relaxed text-taupe">{g.desc}</p>
              </div>
            ))}
          </div>

          <div className="mt-16 text-center">
            <Link
              href="/contact"
              className="btn-fill inline-flex items-center gap-4 px-10 py-4 text-[11px] uppercase tracking-luxe"
            >
              Request Exact Architectural Quotation →
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
