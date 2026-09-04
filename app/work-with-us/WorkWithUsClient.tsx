"use client";

import { useState } from "react";
import Link from "next/link";
import Reveal from "@/components/Reveal";
import { agencyInfo, agencyServices, agencyPricingTiers } from "@/lib/agency";

const whyUsPoints = [
  {
    title: "We Understand Architectural Luxury",
    desc: "We don't use generic corporate templates. We treat digital design the way you treat physical spaces—with rigorous spatial grids, refined typography (Fraunces & Archivo), and tactile micro-interactions.",
  },
  {
    title: "Pre-Qualify High-Net-Worth Inquiries",
    desc: "Our custom interactive estimation engines anchor client expectations to realistic, premium budgets before discovery calls, filtering out mismatched leads automatically.",
  },
  {
    title: "Programmatic Multi-City SEO",
    desc: "Expand your practice into high-value luxury real estate markets (Mumbai, Delhi, Bengaluru, Goa) with crawlable, localized landing pages that rank organically on Google.",
  },
  {
    title: "Sub-Second Next.js Performance",
    desc: "Built on modern React and Next.js App Router, your website loads in under 1 second worldwide, maximizing engagement and mobile conversion.",
  },
];

const faqs = [
  {
    q: "How is this different from Squarespace or a WordPress theme?",
    a: "Template builders like Squarespace score poorly on mobile PageSpeed, cannot build custom dynamic estimation calculators, and lack programmatic multi-city SEO architecture. We engineer custom, bespoke Next.js platforms tailored specifically to your studio's brand and conversion goals.",
  },
  {
    q: "How long does a custom studio website take to launch?",
    a: "Our typical delivery timeline is 3 to 6 weeks from kickoff to live deployment, depending on the package selected. We handle all design, development, content population, SEO setup, and hosting.",
  },
  {
    q: "Can our team easily add new projects and journal posts?",
    a: "Yes. We configure clean, structured CMS workflows (or lightweight markdown/headless CMS) so your internal team can publish new projects, update before/after photos, and write articles in minutes without touching code.",
  },
  {
    q: "Do you offer ongoing technical maintenance and SEO support?",
    a: "Yes. We provide quarterly retainers covering performance optimization, new case study formatting, local keyword tracking, and feature expansion as your practice grows.",
  },
];

export default function WorkWithUsClient() {
  const [submitted, setSubmitted] = useState(false);
  const [openFaq, setOpenFaq] = useState<number | null>(null);
  const [homeLoading, setHomeLoading] = useState(false);
  const [homeError, setHomeError] = useState("");
  const [homeFormData, setHomeFormData] = useState({
    name: "",
    studio: "",
    email: "",
    phone: "",
    package: "Signature Platform (₹2,75,000 / $3,450)",
    timeline: "Within 4 Weeks",
    goals: "",
  });

  return (
    <div className="min-h-screen bg-paper text-ink">
      {/* Hero Section */}
      <section className="relative border-b border-line bg-paper-2 pt-28 pb-20 md:pt-36 md:pb-28">
        <div className="mx-auto w-full max-w-[1440px] px-6 md:px-10 lg:px-16">
          <Reveal as="div" y={0} duration={1}>
            <div className="flex items-center gap-3">
              <span className="inline-block h-2 w-2 rounded-full bg-emerald-500 animate-pulse" />
              <span className="font-mono text-[11px] uppercase tracking-luxe text-brass">
                {agencyInfo.name} &middot; Agency Platform
              </span>
              <span className="h-px flex-1 bg-line" />
            </div>
          </Reveal>

          <div className="mt-8 max-w-4xl">
            <Reveal as="h1" y={25} duration={1.2}>
              <span className="font-serif text-[clamp(2.4rem,5.2vw,5rem)] font-light leading-[1.08] text-ink block">
                Websites Built for the{" "}
                <em className="italic text-brass font-normal">Business of Design</em>.
              </span>
            </Reveal>

            <Reveal as="p" y={20} duration={1.2} delay={0.15}>
              <span className="mt-6 block text-[16px] md:text-[19px] leading-relaxed text-taupe font-sans max-w-3xl">
                We design and engineer bespoke, high-converting digital flagships, interactive cost estimation engines, and programmatic local SEO infrastructure exclusively for luxury architecture practices and interior design studios.
              </span>
            </Reveal>

            <Reveal as="div" y={20} duration={1.2} delay={0.3}>
              <div className="mt-9 flex flex-wrap items-center gap-4">
                <Link
                  href="/work-with-us/contact"
                  className="btn-fill px-8 py-3.5 text-[11px] uppercase tracking-luxe"
                >
                  Start Your Studio Website
                </Link>
                <Link
                  href="/work-with-us/portfolio/lumiere-interiors"
                  className="rounded-full border border-line bg-paper px-6 py-3.5 font-mono text-[11px] uppercase tracking-wider text-ink hover:border-brass hover:text-brass transition-colors"
                >
                  Explore Lumière Case Study →
                </Link>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* Featured Proof of Concept Spotlight: Lumière Interiors */}
      <section className="border-b border-line bg-paper py-20 md:py-28">
        <div className="mx-auto w-full max-w-[1440px] px-6 md:px-10 lg:px-16">
          <div className="rounded-xs border border-brass/50 bg-paper-2 p-8 md:p-12 lg:p-16 shadow-2xl relative overflow-hidden">
            <div className="absolute -top-10 -right-10 w-96 h-96 bg-brass/5 rounded-full blur-3xl pointer-events-none" />

            <div className="grid gap-10 lg:grid-cols-12 lg:gap-16 items-center">
              <div className="lg:col-span-7">
                <div className="inline-flex items-center gap-2 rounded-full border border-brass/40 bg-brass/10 px-3.5 py-1 font-mono text-[10px] uppercase tracking-wider text-brass">
                  <span>Flagship Proof of Concept</span>
                </div>
                <h2 className="mt-4 font-serif text-3xl md:text-5xl italic font-light text-ink leading-tight">
                  Lumière Interiors: A Living Demonstration
                </h2>
                <p className="mt-4 text-[14px] leading-relaxed text-taupe font-sans">
                  We engineered Lumière Interiors as a comprehensive demonstration of what an elite architectural website should be in 2026. Featuring <strong>82 production routes</strong>, a 60fps cinematic 3D scroll canvas hero, interactive BHK cost calculators, drawing plate switchers, and multi-city programmatic SEO hubs.
                </p>

                <div className="mt-8 flex flex-wrap items-center gap-4">
                  <Link
                    href="/work-with-us/portfolio/lumiere-interiors"
                    className="btn-fill px-7 py-3 text-[11px] uppercase tracking-luxe"
                  >
                    Read Full Case Study Teardown
                  </Link>
                  <Link
                    href="/"
                    className="font-mono text-[11px] uppercase tracking-wider text-taupe hover:text-ink underline transition-colors"
                  >
                    Launch Live Demo Site ↗
                  </Link>
                </div>
              </div>

              {/* Stats Mini Grid */}
              <div className="lg:col-span-5 grid grid-cols-2 gap-4">
                <div className="rounded-xs border border-line bg-paper p-5">
                  <span className="font-serif text-3xl italic text-brass block">82</span>
                  <span className="font-mono text-[10px] uppercase text-taupe block mt-1">
                    Production Routes
                  </span>
                </div>
                <div className="rounded-xs border border-line bg-paper p-5">
                  <span className="font-serif text-3xl italic text-brass block">&lt; 1s</span>
                  <span className="font-mono text-[10px] uppercase text-taupe block mt-1">
                    DOM Content Ready
                  </span>
                </div>
                <div className="rounded-xs border border-line bg-paper p-5">
                  <span className="font-serif text-3xl italic text-brass block">300</span>
                  <span className="font-mono text-[10px] uppercase text-taupe block mt-1">
                    60fps 3D Frames
                  </span>
                </div>
                <div className="rounded-xs border border-line bg-paper p-5">
                  <span className="font-serif text-3xl italic text-brass block">5 Cities</span>
                  <span className="font-mono text-[10px] uppercase text-taupe block mt-1">
                    Local SEO Silos
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* What We Build (Services Overview) */}
      <section className="border-b border-line bg-paper-2 py-20 md:py-28">
        <div className="mx-auto w-full max-w-[1440px] px-6 md:px-10 lg:px-16">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
            <div>
              <span className="font-mono text-[11px] uppercase tracking-luxe text-taupe font-semibold">
                Specialized Systems
              </span>
              <h2 className="mt-3 font-serif text-3xl md:text-5xl font-light text-ink">
                Built specifically for architecture and interior design.
              </h2>
            </div>
            <Link
              href="/work-with-us/services"
              className="font-mono text-[11px] uppercase tracking-wider text-ink hover:text-brass transition-colors"
            >
              View All Services in Detail →
            </Link>
          </div>

          <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {agencyServices.map((service, idx) => (
              <div
                key={service.slug}
                className="group flex flex-col justify-between rounded-xs border border-line bg-paper p-8 transition-all duration-300 hover:border-brass hover:shadow-xl"
              >
                <div>
                  <span className="font-mono text-[11px] text-brass">0{idx + 1}</span>
                  <h3 className="mt-3 font-serif text-xl italic text-ink">
                    {service.title}
                  </h3>
                  <p className="mt-3 text-[13px] text-taupe leading-relaxed font-sans">
                    {service.overview}
                  </p>
                </div>

                <div className="mt-6 pt-4 border-t border-line">
                  <Link
                    href={service.proofPointHref}
                    className="inline-flex items-center gap-1.5 font-mono text-[11px] uppercase tracking-wider text-ink group-hover:text-brass transition-colors"
                  >
                    <span>{service.proofPointTitle}</span>
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Interior Designers Choose Us */}
      <section className="border-b border-line bg-paper py-20 md:py-28">
        <div className="mx-auto w-full max-w-[1440px] px-6 md:px-10 lg:px-16">
          <div className="grid gap-12 lg:grid-cols-12 lg:gap-16 items-start">
            <div className="lg:col-span-5 lg:sticky lg:top-28">
              <span className="font-mono text-[11px] uppercase tracking-luxe text-taupe font-semibold">
                Strategic Advantage
              </span>
              <h2 className="mt-4 font-serif text-3xl md:text-5xl italic font-light text-ink leading-tight">
                Why luxury design studios partner with us.
              </h2>
              <p className="mt-6 text-[14px] leading-relaxed text-taupe font-sans">
                Most web agencies build generic e-commerce or SaaS sites. We specialize exclusively in the visual language, commercial dynamics, and lead qualification requirements of high-end interior designers and architects.
              </p>
              <div className="mt-8">
                <Link
                  href="/work-with-us/contact"
                  className="btn-fill px-7 py-3.5 text-[11px] uppercase tracking-luxe"
                >
                  Book Discovery Call
                </Link>
              </div>
            </div>

            <div className="lg:col-span-7 space-y-6">
              {whyUsPoints.map((item, idx) => (
                <div key={item.title} className="rounded-xs border border-line bg-paper-2 p-7 md:p-8">
                  <span className="font-mono text-[10px] text-brass uppercase tracking-wider">
                    Advantage 0{idx + 1}
                  </span>
                  <h3 className="mt-2 font-serif text-2xl italic text-ink">
                    {item.title}
                  </h3>
                  <p className="mt-3 text-[13px] text-taupe leading-relaxed font-sans">
                    {item.desc}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Pricing Preview Section */}
      <section className="border-b border-line bg-paper-2 py-20 md:py-28">
        <div className="mx-auto w-full max-w-[1440px] px-6 md:px-10 lg:px-16">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
            <div>
              <span className="font-mono text-[11px] uppercase tracking-luxe text-taupe font-semibold">
                Transparent Investment
              </span>
              <h2 className="mt-3 font-serif text-3xl md:text-5xl font-light text-ink">
                Fixed-scope web development packages.
              </h2>
            </div>
            <Link
              href="/work-with-us/pricing"
              className="font-mono text-[11px] uppercase tracking-wider text-ink hover:text-brass transition-colors"
            >
              See Full Scope Matrix &amp; Add-ons →
            </Link>
          </div>

          <div className="mt-14 grid gap-8 lg:grid-cols-3">
            {agencyPricingTiers.map((tier) => (
              <div
                key={tier.id}
                className={`relative flex flex-col justify-between rounded-xs border p-8 transition-all duration-300 ${
                  tier.popular
                    ? "border-brass bg-paper shadow-2xl"
                    : "border-line bg-paper-2 hover:border-taupe"
                }`}
              >
                {tier.badge && (
                  <div className="absolute -top-3 left-8 rounded-full bg-brass px-3 py-1 font-mono text-[9px] uppercase tracking-wider text-paper">
                    {tier.badge}
                  </div>
                )}

                <div>
                  <div className="flex items-center justify-between">
                    <h3 className="font-serif text-2xl italic text-ink">{tier.name}</h3>
                    <span className="font-mono text-[10px] uppercase text-taupe border border-line px-2.5 py-1 rounded-xs">
                      {tier.timeline}
                    </span>
                  </div>
                  <div className="mt-4 flex items-baseline gap-2">
                    <span className="font-serif text-3xl text-ink font-normal">
                      <span className="font-currency text-[0.85em] mr-0.5 inline-block select-none not-italic">₹</span>
                      {tier.priceINR.replace(/^₹/, "")}
                    </span>
                    <span className="font-mono text-[11px] text-stone">/ {tier.priceUSD}</span>
                  </div>
                  <p className="mt-3 text-[12px] text-taupe font-sans leading-relaxed">
                    {tier.description}
                  </p>

                  <div className="mt-6 space-y-2.5 border-t border-line pt-6">
                    <span className="font-mono text-[10px] uppercase tracking-luxe text-ink block font-semibold">
                      Key Deliverables:
                    </span>
                    {tier.deliverables.slice(0, 5).map((del) => (
                      <div key={del} className="flex items-start gap-2 text-[12px] text-taupe font-sans">
                        <span className="text-brass mt-0.5">•</span>
                        <span>{del}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="mt-8 pt-6 border-t border-line">
                  <Link
                    href="/work-with-us/contact"
                    className={`block w-full text-center py-3.5 text-[11px] uppercase tracking-luxe transition-all ${
                      tier.popular
                        ? "bg-ink text-paper hover:bg-brass hover:text-paper"
                        : "border border-line bg-paper text-ink hover:border-ink"
                    }`}
                  >
                    Select {tier.name}
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Agency FAQ Accordion */}
      <section className="border-b border-line bg-paper py-20 md:py-28">
        <div className="mx-auto w-full max-w-[1440px] px-6 md:px-10 lg:px-16">
          <div className="max-w-2xl">
            <span className="font-mono text-[11px] uppercase tracking-luxe text-taupe font-semibold">
              Common Questions
            </span>
            <h2 className="mt-3 font-serif text-3xl md:text-5xl font-light text-ink">
              Frequently asked agency questions.
            </h2>
          </div>

          <div className="mt-12 space-y-4 max-w-4xl">
            {faqs.map((faq, idx) => (
              <div
                key={faq.q}
                className="rounded-xs border border-line bg-paper-2 overflow-hidden transition-colors"
              >
                <button
                  type="button"
                  onClick={() => setOpenFaq(openFaq === idx ? null : idx)}
                  className="w-full p-6 text-left flex items-center justify-between gap-4"
                >
                  <span className="font-serif text-xl italic text-ink">{faq.q}</span>
                  <span className="font-mono text-base text-brass">
                    {openFaq === idx ? "−" : "+"}
                  </span>
                </button>
                {openFaq === idx && (
                  <div className="px-6 pb-6 pt-0 text-[13px] text-taupe leading-relaxed font-sans border-t border-line/60 mt-2 pt-4">
                    {faq.a}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Direct Contact & Lead Capture Form */}
      <section id="contact-section" className="bg-paper-2 py-20 md:py-32">
        <div className="mx-auto w-full max-w-[1440px] px-6 md:px-10 lg:px-16">
          <div className="grid gap-12 lg:grid-cols-12 lg:gap-16">
            <div className="lg:col-span-5">
              <span className="font-mono text-[11px] uppercase tracking-luxe text-brass">
                Start a Conversation
              </span>
              <h2 className="mt-4 font-serif text-3xl md:text-5xl font-light text-ink leading-tight">
                Let&rsquo;s build a digital flagship for your studio.
              </h2>
              <p className="mt-6 text-[14px] leading-relaxed text-taupe font-sans">
                Tell us about your practice, your current website challenges, and your timeline. We will review your current presence and send you a custom architectural teardown and scoped proposal within 24 hours.
              </p>

              <div className="mt-8 space-y-4 font-mono text-[12px]">
                <div className="flex items-center gap-3">
                  <span className="text-brass">Lead Architect:</span>
                  <span className="text-ink font-sans font-medium">{agencyInfo.founder} &middot; {agencyInfo.name}</span>
                </div>
                <div className="flex items-center gap-3">
                  <span className="text-brass">Direct Email:</span>
                  <a
                    href={`mailto:${agencyInfo.email}?subject=Studio%20Website%20Inquiry`}
                    className="text-ink underline hover:text-brass transition-colors"
                  >
                    {agencyInfo.email}
                  </a>
                </div>
                <div className="flex items-center gap-3">
                  <span className="text-brass">Phone / Mobile:</span>
                  <a
                    href={`tel:${agencyInfo.phone.replace(/\s+/g, "")}`}
                    className="text-ink underline hover:text-brass transition-colors"
                  >
                    {agencyInfo.phone}
                  </a>
                </div>
                <div className="flex items-center gap-3">
                  <span className="text-brass">WhatsApp:</span>
                  <a
                    href={agencyInfo.whatsappUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-ink underline hover:text-brass transition-colors"
                  >
                    Direct WhatsApp Consultation ({agencyInfo.phone}) ↗
                  </a>
                </div>
              </div>
            </div>

            {/* Form */}
            <div className="lg:col-span-7">
              <div className="rounded-xs border border-line bg-paper p-8 md:p-10 shadow-xl">
                <h3 className="font-serif text-2xl italic text-ink">
                  Inquire About a Custom Studio Website
                </h3>
                <p className="mt-1 text-[12px] text-taupe font-sans">
                  Fill out this brief form to schedule an introductory video consultation.
                </p>

                {submitted ? (
                  <div className="mt-8 rounded-xs border border-brass/40 bg-brass/10 p-8 text-center animate-in fade-in duration-300">
                    <h4 className="font-serif text-2xl italic text-ink">
                      Inquiry Received Successfully
                    </h4>
                    <p className="mt-3 text-[14px] text-taupe leading-relaxed">
                      Thank you! Your studio details have been routed to Swapnil. We will review your requirements and send a tailored proposal within 24 business hours.
                    </p>
                    <div className="mt-6 flex flex-wrap items-center justify-center gap-4">
                      <a
                        href={`https://wa.me/918605832851?text=${encodeURIComponent(
                          `Hi Swapnil, I submitted a website inquiry on Automate Reality Labs for ${homeFormData.studio || "our design studio"}.\n\nName: ${homeFormData.name}\nEmail: ${homeFormData.email}\nPackage: ${homeFormData.package}`,
                        )}`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="btn-fill px-6 py-2.5 text-[10px] uppercase tracking-luxe"
                      >
                        Message on WhatsApp Now ↗
                      </a>
                    </div>
                  </div>
                ) : (
                  <form
                    onSubmit={async (e) => {
                      e.preventDefault();
                      setHomeLoading(true);
                      setHomeError("");
                      try {
                        const res = await fetch("/api/contact", {
                          method: "POST",
                          headers: { "Content-Type": "application/json" },
                          body: JSON.stringify({
                            ...homeFormData,
                            source: "Agency Overview Page (/work-with-us)",
                          }),
                        });
                        const data = await res.json();
                        if (!res.ok) throw new Error(data.error || "Submission failed");
                        setSubmitted(true);
                      } catch (err: unknown) {
                        setHomeError(
                          err instanceof Error
                            ? err.message
                            : "Failed to submit. Please contact Swapnil directly.",
                        );
                      } finally {
                        setHomeLoading(false);
                      }
                    }}
                    className="mt-8 space-y-5"
                  >
                    {homeError && (
                      <div className="rounded-xs border border-red-500/40 bg-red-500/10 p-4 text-[12px] text-red-600 font-mono">
                        {homeError}
                      </div>
                    )}

                    <div className="grid gap-5 sm:grid-cols-2">
                      <div>
                        <label className="block font-mono text-[10px] uppercase tracking-wider text-taupe mb-2">
                          Your Name *
                        </label>
                        <input
                          type="text"
                          required
                          value={homeFormData.name}
                          onChange={(e) => setHomeFormData({ ...homeFormData, name: e.target.value })}
                          placeholder="e.g. Maya Advani"
                          className="w-full border border-line bg-paper-2 px-4 py-3 text-[13px] text-ink focus:border-brass focus:outline-none"
                        />
                      </div>
                      <div>
                        <label className="block font-mono text-[10px] uppercase tracking-wider text-taupe mb-2">
                          Studio / Practice Name *
                        </label>
                        <input
                          type="text"
                          required
                          value={homeFormData.studio}
                          onChange={(e) => setHomeFormData({ ...homeFormData, studio: e.target.value })}
                          placeholder="e.g. Advani Architects"
                          className="w-full border border-line bg-paper-2 px-4 py-3 text-[13px] text-ink focus:border-brass focus:outline-none"
                        />
                      </div>
                    </div>

                    <div className="grid gap-5 sm:grid-cols-2">
                      <div>
                        <label className="block font-mono text-[10px] uppercase tracking-wider text-taupe mb-2">
                          Work Email *
                        </label>
                        <input
                          type="email"
                          required
                          value={homeFormData.email}
                          onChange={(e) => setHomeFormData({ ...homeFormData, email: e.target.value })}
                          placeholder="maya@advanidesign.com"
                          className="w-full border border-line bg-paper-2 px-4 py-3 text-[13px] text-ink focus:border-brass focus:outline-none"
                        />
                      </div>
                      <div>
                        <label className="block font-mono text-[10px] uppercase tracking-wider text-taupe mb-2">
                          Phone / WhatsApp
                        </label>
                        <input
                          type="tel"
                          value={homeFormData.phone}
                          onChange={(e) => setHomeFormData({ ...homeFormData, phone: e.target.value })}
                          placeholder="+91 98200 00000"
                          className="w-full border border-line bg-paper-2 px-4 py-3 text-[13px] text-ink focus:border-brass focus:outline-none"
                        />
                      </div>
                    </div>

                    <div className="grid gap-5 sm:grid-cols-2">
                      <div>
                        <label className="block font-mono text-[10px] uppercase tracking-wider text-taupe mb-2">
                          Desired Package
                        </label>
                        <select
                          value={homeFormData.package}
                          onChange={(e) => setHomeFormData({ ...homeFormData, package: e.target.value })}
                          className="w-full border border-line bg-paper-2 px-4 py-3 text-[13px] text-ink focus:border-brass focus:outline-none"
                        >
                          <option>Signature Platform (₹2,75,000 / $3,450) — Most Popular</option>
                          <option>Studio Showcase (₹1,45,000 / $1,850)</option>
                          <option>Flagship Bespoke Architecture (₹4,50,000+ / $5,500+)</option>
                          <option>Custom Scope Consultation</option>
                        </select>
                      </div>
                      <div>
                        <label className="block font-mono text-[10px] uppercase tracking-wider text-taupe mb-2">
                          Target Launch Timeline
                        </label>
                        <select
                          value={homeFormData.timeline}
                          onChange={(e) => setHomeFormData({ ...homeFormData, timeline: e.target.value })}
                          className="w-full border border-line bg-paper-2 px-4 py-3 text-[13px] text-ink focus:border-brass focus:outline-none"
                        >
                          <option>Immediate (Within 4 weeks)</option>
                          <option>Next Quarter (1–3 months)</option>
                          <option>Flexible / Exploring Ideas</option>
                        </select>
                      </div>
                    </div>

                    <div>
                      <label className="block font-mono text-[10px] uppercase tracking-wider text-taupe mb-2">
                        Key Goals or Bottlenecks
                      </label>
                      <textarea
                        rows={4}
                        value={homeFormData.goals}
                        onChange={(e) => setHomeFormData({ ...homeFormData, goals: e.target.value })}
                        placeholder="Tell us what you want to achieve — e.g. rebrand our portfolio, add an interactive cost calculator, rank for local Mumbai luxury interior searches, or launch a shop."
                        className="w-full border border-line bg-paper-2 p-4 text-[13px] text-ink focus:border-brass focus:outline-none"
                      />
                    </div>

                    <button
                      type="submit"
                      disabled={homeLoading}
                      className="w-full btn-fill py-4 text-[11px] uppercase tracking-luxe font-medium transition-all disabled:opacity-50"
                    >
                      {homeLoading ? "Transmitting Inquiry..." : "Submit Studio Inquiry & Request Proposal"}
                    </button>
                  </form>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
