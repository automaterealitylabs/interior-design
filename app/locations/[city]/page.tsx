import { notFound } from "next/navigation";
import type { Metadata } from "next";
import Link from "next/link";
import Reveal from "@/components/Reveal";
import TextReveal from "@/components/TextReveal";
import MaskedReveal from "@/components/MaskedReveal";
import { locationsData, projects, services } from "@/lib/site";

interface Props {
  params: Promise<{ city: string }>;
}

export async function generateStaticParams() {
  return Object.keys(locationsData).map((city) => ({
    city,
  }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { city } = await params;
  const loc = locationsData[city];
  if (!loc) return { title: "Location Not Found" };

  return {
    title: `Interior Designers in ${loc.city} — Luxury Residential & Turnkey Architecture`,
    description: `Leading luxury interior design studio in ${loc.city}. ${loc.tagline} End-to-end turnkey architectural interiors with 10-year warranty.`,
    openGraph: {
      title: `Interior Designers in ${loc.city} | LUMIÈRE INTERIORS`,
      description: loc.localStory,
      images: [{ url: loc.heroImage }],
    },
  };
}

export default async function CityLocationPage({ params }: Props) {
  const { city } = await params;
  const loc = locationsData[city];

  if (!loc) {
    notFound();
  }

  const featured = projects.filter((p) => loc.featuredProjects.includes(p.slug));

  return (
    <main className="bg-paper text-ink">
      {/* City Hero */}
      <section className="relative border-b border-line bg-ink py-32 text-paper md:py-44">
        <div className="mx-auto w-full max-w-[1440px] px-6 md:px-10 lg:px-16">
          <Reveal as="div" y={0} duration={1}>
            <div className="flex items-center gap-5">
              <span className="font-mono text-[11px] text-stone">01</span>
              <span className="text-[11px] uppercase tracking-luxe text-stone">
                Atelier Location &middot; {loc.city}, {loc.country}
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
                <span className="block" data-line>Luxury Interior Design</span>
                <span className="block" data-line>
                  in <em className="italic text-brass">{loc.city}</em>.
                </span>
              </TextReveal>
            </Reveal>

            <Reveal as="div" y={30} duration={1.1} delay={0.15} start="top 90%">
              <p className="mt-6 max-w-2xl text-[16px] leading-relaxed text-stone font-sans">
                {loc.localStory}
              </p>
            </Reveal>

            {/* Quick Contact Bar */}
            <Reveal as="div" y={20} duration={1} delay={0.2} start="top 90%">
              <div className="mt-10 flex flex-wrap items-center gap-6 font-mono text-[11px] text-stone">
                <span className="text-paper">Studio Address: {loc.address}</span>
                <span className="text-brass">•</span>
                <a href={`tel:${loc.phone.replace(/\s+/g, "")}`} className="text-brass hover:underline">{loc.phone}</a>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* Local Areas Served */}
      <section className="relative border-b border-line bg-paper-2 py-12 text-ink">
        <div className="mx-auto w-full max-w-[1440px] px-6 md:px-10 lg:px-16">
          <div className="flex flex-col gap-4 md:flex-row md:items-center">
            <span className="font-mono text-[11px] uppercase tracking-luxe text-taupe shrink-0">
              Neighborhoods Served:
            </span>
            <div className="flex flex-wrap gap-2">
              {loc.localAreas.map((area) => (
                <span
                  key={area}
                  className="rounded-full border border-line bg-paper px-3.5 py-1 font-mono text-[10px] uppercase text-ink"
                >
                  {area}
                </span>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Local Featured Commissions */}
      <section className="relative py-28 md:py-40">
        <div className="mx-auto w-full max-w-[1440px] px-6 md:px-10 lg:px-16">
          <Reveal as="div" y={0} duration={1}>
            <div className="flex items-center gap-5">
              <span className="font-mono text-[11px] text-taupe">02</span>
              <span className="text-[11px] uppercase tracking-luxe text-taupe">
                Selected Work in {loc.city}
              </span>
              <span className="h-px flex-1 bg-line" />
            </div>
          </Reveal>

          <div className="mt-14 grid gap-12 md:grid-cols-2">
            {featured.map((p) => (
              <div key={p.slug} className="group">
                <Link href={`/work/${p.slug}`}>
                  <MaskedReveal className="overflow-hidden rounded-xs border border-line bg-paper-2">
                    <img
                      src={p.image}
                      alt={p.name}
                      className="h-80 w-full object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                  </MaskedReveal>
                  <div className="mt-6 flex items-center justify-between">
                    <div>
                      <span className="font-mono text-[10px] uppercase tracking-luxe text-taupe">
                        {p.location} &middot; {p.bhk}
                      </span>
                      <h3 className="mt-1 font-serif text-2xl text-ink group-hover:text-brass transition-colors">
                        {p.name}
                      </h3>
                    </div>
                    <span className="text-brass font-mono">Explore Case Study →</span>
                  </div>
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services in this City */}
      <section className="relative border-t border-line bg-paper-2 py-24 md:py-36">
        <div className="mx-auto w-full max-w-[1440px] px-6 md:px-10 lg:px-16">
          <Reveal as="div" y={0} duration={1}>
            <div className="flex items-center gap-5">
              <span className="font-mono text-[11px] text-taupe">03</span>
              <span className="text-[11px] uppercase tracking-luxe text-taupe">
                Room Typologies &amp; Services in {loc.city}
              </span>
              <span className="h-px flex-1 bg-line" />
            </div>
          </Reveal>

          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {services.slice(0, 7).map((s) => (
              <Link
                key={s.slug}
                href={`/locations/${loc.slug}/${s.slug}`}
                className="group rounded-xs border border-line bg-paper p-6 transition-all duration-300 hover:border-brass hover:bg-paper-2"
              >
                <span className="font-mono text-[10px] text-brass">0{s.n}</span>
                <h4 className="mt-3 font-serif text-xl text-ink group-hover:text-brass transition-colors">
                  {s.title} in {loc.city}
                </h4>
                <p className="mt-2 text-[12px] text-taupe line-clamp-2">{s.desc}</p>
                <span className="mt-4 inline-block font-mono text-[10px] uppercase text-brass">
                  Explore Service →
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* City Client Review */}
      {loc.reviews.length > 0 && (
        <section className="relative border-t border-line bg-ink py-24 text-paper md:py-32">
          <div className="mx-auto w-full max-w-[1440px] px-6 md:px-10 lg:px-16">
            <div className="max-w-3xl">
              <span className="font-mono text-[11px] uppercase tracking-luxe text-stone">
                Client Perspective &middot; {loc.reviews[0].area}
              </span>
              <blockquote className="mt-6 font-serif text-[clamp(1.5rem,3vw,2.4rem)] italic text-paper/90 leading-snug">
                &ldquo;{loc.reviews[0].quote}&rdquo;
              </blockquote>
              <p className="mt-4 font-mono text-[11px] uppercase text-brass">
                {loc.reviews[0].name} &middot; {loc.reviews[0].area}, {loc.city}
              </p>
            </div>

            <div className="mt-12 pt-8 border-t border-line-light flex flex-wrap gap-4">
              <Link
                href={`/contact?city=${encodeURIComponent(loc.city)}`}
                className="btn-fill px-8 py-3.5 text-[11px] uppercase tracking-luxe"
              >
                Book a Consultation in {loc.city} →
              </Link>
            </div>
          </div>
        </section>
      )}
    </main>
  );
}
