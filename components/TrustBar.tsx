import Reveal from "./Reveal";
import { trustStats, trustGuarantees } from "@/lib/site";

export default function TrustBar() {
  return (
    <section className="relative border-y border-line bg-paper-2 py-16 text-ink md:py-24">
      <div className="mx-auto w-full max-w-[1440px] px-6 md:px-10 lg:px-16">
        {/* Metric stats row */}
        <Reveal className="grid grid-cols-2 gap-8 divide-line md:grid-cols-4 md:divide-x" y={20} duration={1} start="top 90%">
          {trustStats.map((stat, i) => (
            <div
              key={stat.label}
              className={`flex flex-col ${
                i === 0 ? "" : "md:pl-8 lg:pl-12"
              }`}
            >
              <span className="font-serif text-[clamp(2.2rem,4vw,3.6rem)] font-light leading-none text-ink">
                {stat.value}
              </span>
              <span className="mt-3 font-mono text-[11px] uppercase tracking-luxe text-taupe">
                {stat.label}
              </span>
            </div>
          ))}
        </Reveal>

        {/* Quantified guarantee badges */}
        <Reveal className="mt-14 grid gap-6 border-t border-line pt-10 sm:grid-cols-2 md:mt-16 md:pt-12 lg:grid-cols-4" y={30} duration={1.1} delay={0.1} start="top 90%">
          {trustGuarantees.map((g, idx) => (
            <div
              key={g.title}
              className="group relative rounded-xs border border-line bg-paper p-6 transition-all duration-300 hover:border-brass/50 hover:bg-paper-2"
            >
              <div className="flex items-center gap-3">
                <span className="font-mono text-[10px] uppercase text-brass">
                  0{idx + 1}
                </span>
                <span className="h-px flex-1 bg-line group-hover:bg-brass/30 transition-colors" />
                <svg
                  className="h-4 w-4 text-brass"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.5"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M9 12.75L11.25 15 15 9.75M21 12c0 1.268-.63 2.39-1.593 3.068a3.745 3.745 0 01-1.043 3.296 3.745 3.745 0 01-3.296 1.043A3.745 3.745 0 0112 21c-1.268 0-2.39-.63-3.068-1.593a3.746 3.746 0 01-3.296-1.043 3.745 3.745 0 01-1.043-3.296A3.745 3.745 0 013 12c0-1.268.63-2.39 1.593-3.068a3.745 3.745 0 011.043-3.296 3.746 3.746 0 013.296-1.043A3.746 3.746 0 0112 3c1.268 0 2.39.63 3.068 1.593a3.746 3.746 0 013.296 1.043 3.746 3.746 0 011.043 3.296A3.745 3.745 0 0121 12z"
                  />
                </svg>
              </div>
              <h3 className="mt-4 font-serif text-lg font-normal text-ink">
                {g.title}
              </h3>
              <p className="mt-2 text-[12px] leading-relaxed text-taupe font-sans">
                {g.desc}
              </p>
            </div>
          ))}
        </Reveal>
      </div>
    </section>
  );
}
