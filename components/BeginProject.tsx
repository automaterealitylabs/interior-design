import Link from "next/link";
import Reveal from "./Reveal";
import TextReveal from "./TextReveal";
import { PlatePlan } from "./plates";
import { begin, contact, scarcityNotice } from "@/lib/site";

export default function BeginProject() {
  const cleanPhone = (contact.whatsapp || "+919820012345").replace(/[^0-9]/g, "");
  const whatsappUrl = `https://wa.me/${cleanPhone}?text=${encodeURIComponent(
    "Hello Lumière Interiors, I would like to inquire about opening a new residential design commission."
  )}`;

  return (
    <section
      id="begin-project"
      className="relative overflow-hidden scroll-mt-24 border-t border-line-light bg-ink py-24 text-paper md:py-32"
    >
      {/* faint plan study tucked behind the right edge */}
      <Reveal
        as="div"
        className="pointer-events-none absolute -bottom-32 -right-24 hidden text-paper/5 lg:block"
        y={0}
        start="top 90%"
        duration={1.8}
      >
        <PlatePlan className="h-[480px] w-auto" />
      </Reveal>

      <div className="relative z-10 mx-auto w-full max-w-[1440px] px-6 md:px-10 lg:px-16">
        <Reveal className="flex items-center gap-5" y={0} duration={1}>
          <span className="font-mono text-[11px] text-stone">VI</span>
          <span className="text-[11px] uppercase tracking-luxe text-stone">
            Begin a Project
          </span>
          <span className="h-px flex-1 bg-line-light" />
        </Reveal>

        <div className="mt-12 grid gap-12 lg:grid-cols-12 lg:items-start lg:gap-16">
          <div className="lg:col-span-7">
            <TextReveal
              as="h2"
              className="max-w-2xl font-serif text-[clamp(2rem,4.6vw,4.2rem)] font-light leading-[1.08] text-paper"
              speed={1.2}
              stagger={0.06}
              delay={0.15}
            >
              <span className="block" data-line>The next room is yours. Let&apos;s</span>
              <span className="block" data-line>
                <em className="italic text-brass">begin</em> it properly.
              </span>
            </TextReveal>

            <Reveal as="p" className="mt-6 max-w-xl text-[14px] leading-[1.8] text-stone" y={30} duration={1.1} delay={0.15} start="top 94%">
              {begin.sub}
            </Reveal>

            <Reveal className="mt-10 flex flex-wrap items-center gap-4" y={30} duration={1.1} delay={0.2} start="top 94%">
              <Link
                href="/contact"
                className="group btn-fill inline-flex items-center gap-4 px-9 py-4 text-[11px] uppercase tracking-luxe transition-colors duration-500"
              >
                {begin.cta}
                <span className="transition-transform duration-500 group-hover:translate-x-1">
                  &#8594;
                </span>
              </Link>

              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2.5 rounded-xs border border-line-light/80 bg-paper/5 px-6 py-4 font-mono text-[11px] uppercase tracking-wider text-paper transition-colors duration-300 hover:border-emerald-500/70 hover:bg-emerald-950/30 hover:text-emerald-300"
              >
                <svg className="h-4 w-4 fill-[#25D366]" viewBox="0 0 24 24">
                  <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981zm11.387-5.464c-.074-.124-.272-.198-.57-.347-.297-.149-1.758-.868-2.031-.967-.272-.099-.47-.149-.669.149-.198.297-.768.967-.941 1.165-.173.198-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414z" />
                </svg>
                <span>Chat on WhatsApp</span>
              </a>
            </Reveal>
          </div>

          {/* Scarcity Banner & Flagship Studio Map Card */}
          <Reveal className="lg:col-span-5 rounded-xs border border-line-light bg-paper/5 p-6 md:p-8 backdrop-blur-sm" y={30} duration={1.2} delay={0.2} start="top 90%">
            <div className="flex items-center justify-between border-b border-line-light pb-4">
              <span className="font-mono text-[10px] uppercase tracking-far text-brass">
                {scarcityNotice.note}
              </span>
              <span className="inline-block h-2 w-2 rounded-full bg-brass animate-ping" />
            </div>

            <div className="mt-6 space-y-4 text-[13px] text-stone">
              <div>
                <span className="font-mono text-[10px] uppercase tracking-luxe text-paper block">
                  Flagship Atelier
                </span>
                <p className="mt-1 text-paper/85 font-sans">
                  {contact.address}
                </p>
              </div>

              <div className="grid grid-cols-2 gap-4 border-t border-line-light/60 pt-4 font-mono text-[11px]">
                <div>
                  <span className="text-[10px] uppercase tracking-luxe text-stone block">
                    Direct Studio
                  </span>
                  <a
                    href={`tel:${contact.phone.replace(/\s+/g, "")}`}
                    className="mt-1 block text-paper hover:text-brass transition-colors"
                  >
                    {contact.phone}
                  </a>
                </div>
                <div>
                  <span className="text-[10px] uppercase tracking-luxe text-stone block">
                    Direct Email
                  </span>
                  <a
                    href={`mailto:${contact.email}`}
                    className="mt-1 block text-paper hover:text-brass transition-colors truncate"
                  >
                    {contact.email}
                  </a>
                </div>
              </div>

              <div className="pt-2">
                <p className="font-mono text-[10px] uppercase tracking-wide text-stone">
                  {contact.hours} • {contact.responseTime}
                </p>
              </div>
            </div>

            {/* Embedded Map Visual */}
            <div className="mt-6 overflow-hidden rounded-xs border border-line-light/60 bg-ink-2">
              <div className="relative h-32 w-full bg-[radial-gradient(#d4af37_1px,transparent_1px)] [background-size:16px_16px] opacity-40 flex items-center justify-center">
                <div className="flex items-center gap-2 rounded-full bg-ink px-3 py-1 text-paper border border-brass/40 shadow-lg">
                  <span className="h-2 w-2 rounded-full bg-brass" />
                  <span className="font-mono text-[10px] uppercase tracking-wider">Lumière Studio • Bandra West</span>
                </div>
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
