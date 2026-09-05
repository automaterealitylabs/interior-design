import Reveal from "./Reveal";
import TextReveal from "./TextReveal";
import { journey } from "@/lib/site";

export default function TheJourney() {
  return (
    <section
      id="journey"
      className="relative scroll-mt-24 bg-ink py-32 text-paper md:py-44"
    >
      <div className="mx-auto w-full max-w-[1440px] px-6 md:px-10 lg:px-16">
        <Reveal className="flex items-center gap-5" y={0} duration={1}>
          <span className="font-mono text-[11px] text-stone">III</span>
          <span className="text-[11px] uppercase tracking-luxe text-stone">
            The Journey
          </span>
          <span className="h-px flex-1 bg-line-light" />
        </Reveal>

        <Reveal className="mt-14 max-w-3xl md:mt-20" y={50} duration={1.3} start="top 88%">
          <TextReveal
            as="h2"
            className="font-sans text-[clamp(1.8rem,4.2vw,4rem)] font-light uppercase leading-[1.05] tracking-[0.02em]"
            speed={1.2}
            stagger={0.06}
            delay={0.15}
          >
            <span className="block" data-line>From first listen to handover,</span>
            <span className="block" data-line>on a schedule that holds.</span>
          </TextReveal>
        </Reveal>

        {/* five-phase timeline, no interaction required */}
        <div className="mt-16 grid gap-12 md:mt-24 md:grid-cols-5 md:gap-8">
          {journey.map((j, i) => (
            <Reveal
              key={j.n}
              className="group relative border-t border-line-light pt-8"
              y={44}
              duration={1.1}
              delay={i * 0.08}
              start="top 90%"
            >
              <span
                aria-hidden="true"
                className="absolute -top-[5px] left-0 h-[9px] w-[9px] rounded-full bg-brass"
              />
              <span className="font-mono text-[10px] text-stone">{j.n}</span>
              <p className="mt-3 font-mono text-[11px] tracking-luxe text-brass">
                {j.weeks}
              </p>
              <h3 className="mt-4 font-sans text-xl font-light uppercase tracking-[0.04em] text-paper/90 transition-colors duration-500 group-hover:text-paper">
                {j.phase}
              </h3>
              <p className="mt-4 text-[12px] leading-[1.7] text-stone">
                {j.line}
              </p>
              <span className="mt-5 inline-block border border-line-light px-3 py-1 font-mono text-[9px] uppercase tracking-luxe text-stone transition-colors duration-500 group-hover:border-brass/60 group-hover:text-brass">
                {j.deliverable}
              </span>
            </Reveal>
          ))}
        </div>

        <Reveal as="p" className="mt-16 text-center font-mono text-[10px] uppercase tracking-luxe text-stone md:mt-24" y={24} duration={1} start="top 95%">
          Average project: twenty weeks · consultation to keys
        </Reveal>
      </div>
    </section>
  );
}
