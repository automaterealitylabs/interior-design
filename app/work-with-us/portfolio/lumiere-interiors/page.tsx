import type { Metadata } from "next";
import Link from "next/link";
import Reveal from "@/components/Reveal";
import { agencyInfo } from "@/lib/agency";

export const metadata: Metadata = {
  title: "Case Study: Building Lumière Interiors | Automate Reality Labs",
  description:
    "A deep architectural and engineering teardown of Lumière Interiors — 72 static routes, 60fps canvas scroll sequence, real-time BHK cost estimation, drawing plates, and programmatic local SEO.",
  keywords: [
    "interior design case study web design",
    "architecture studio website case study",
    "Next.js interior design website breakdown",
    "custom interior cost calculator case study",
    "Automate Reality Labs case study",
  ],
};

export default function LumiereCaseStudyPage() {
  return (
    <div className="min-h-screen bg-paper text-ink">
      {/* Hero Header */}
      <section className="relative border-b border-line bg-paper-2 pt-28 pb-16 md:pt-36 md:pb-24">
        <div className="mx-auto w-full max-w-[1440px] px-6 md:px-10 lg:px-16">
          <Reveal as="div" y={0} duration={1}>
            <div className="flex items-center gap-3">
              <Link
                href="/work-with-us"
                className="font-mono text-[11px] uppercase tracking-luxe text-taupe hover:text-ink transition-colors"
              >
                ← Back to Overview
              </Link>
              <span className="text-line">•</span>
              <span className="font-mono text-[11px] uppercase tracking-luxe text-brass font-semibold">
                Deep Case Study Teardown
              </span>
            </div>
          </Reveal>

          <div className="mt-8 max-w-4xl">
            <Reveal as="h1" y={25} duration={1.2}>
              <span className="font-serif text-[clamp(2.4rem,5vw,4.8rem)] font-light leading-[1.1] text-ink block">
                Engineering <em className="italic text-brass font-normal">Lumière Interiors</em>: A Digital Flagship for Modern Architecture.
              </span>
            </Reveal>

            <Reveal as="p" y={20} duration={1.2} delay={0.15}>
              <span className="mt-6 block text-[16px] md:text-[19px] leading-relaxed text-taupe font-sans max-w-3xl">
                How we engineered an 82-route Next.js web application featuring 60fps canvas sequence animations, interactive cost calculators, and programmatic local SEO to prove what high-end web development can do for interior design studios.
              </span>
            </Reveal>

            <Reveal as="div" y={20} duration={1.2} delay={0.3}>
              <div className="mt-8 flex flex-wrap items-center gap-4">
                <Link
                  href="/"
                  className="btn-fill px-8 py-3 text-[11px] uppercase tracking-luxe"
                >
                  Explore Live Demo Site ↗
                </Link>
                <Link
                  href="/work-with-us/contact"
                  className="rounded-full border border-line bg-paper px-6 py-3 font-mono text-[11px] uppercase tracking-wider text-ink hover:border-brass hover:text-brass transition-colors"
                >
                  Request Similar Studio Build
                </Link>
              </div>
            </Reveal>
          </div>

          {/* Quick Metrics Bar */}
          <div className="mt-14 grid grid-cols-2 md:grid-cols-4 gap-4 border-t border-line pt-8">
            <div>
              <span className="font-mono text-[10px] uppercase text-taupe block">Client Archetype</span>
              <span className="font-serif text-lg italic text-ink block mt-1">Luxury Residential Studio</span>
            </div>
            <div>
              <span className="font-mono text-[10px] uppercase text-taupe block">Engineering Stack</span>
              <span className="font-serif text-lg italic text-ink block mt-1">Next.js 16, React 19, GSAP</span>
            </div>
            <div>
              <span className="font-mono text-[10px] uppercase text-taupe block">Route Complexity</span>
              <span className="font-serif text-lg italic text-ink block mt-1">82 Production Routes</span>
            </div>
            <div>
              <span className="font-mono text-[10px] uppercase text-taupe block">Lead Capture Systems</span>
              <span className="font-serif text-lg italic text-ink block mt-1">Calculator + WhatsApp CRM</span>
            </div>
          </div>
        </div>
      </section>

      {/* Main Case Study Body */}
      <section className="py-20 md:py-28">
        <div className="mx-auto w-full max-w-[1440px] px-6 md:px-10 lg:px-16">
          <div className="grid gap-14 lg:grid-cols-12 lg:gap-20">
            {/* Table of Contents Sidebar */}
            <aside className="lg:col-span-4 lg:sticky lg:top-28 h-fit space-y-6">
              <div className="rounded-xs border border-line bg-paper-2 p-6">
                <span className="font-mono text-[10px] uppercase tracking-luxe text-taupe font-semibold block mb-4">
                  Case Study Navigation
                </span>
                <nav className="space-y-3 font-mono text-[12px]">
                  <a href="#the-brief" className="block text-taupe hover:text-ink transition-colors">
                    01. The Brief &amp; Industry Bottleneck
                  </a>
                  <a href="#the-design-system" className="block text-taupe hover:text-ink transition-colors">
                    02. Architectural Design System
                  </a>
                  <a href="#feature-cost-calculator" className="block text-taupe hover:text-ink transition-colors">
                    03. Interactive Cost Calculator
                  </a>
                  <a href="#feature-case-studies" className="block text-taupe hover:text-ink transition-colors">
                    04. Case Studies &amp; Drawing Plates
                  </a>
                  <a href="#feature-spatial-twin" className="block text-taupe hover:text-ink transition-colors">
                    05. Spatial Digital Twin Viewports
                  </a>
                  <a href="#feature-local-seo" className="block text-taupe hover:text-ink transition-colors">
                    06. Programmatic Multi-City SEO
                  </a>
                  <a href="#feature-lead-capture" className="block text-taupe hover:text-ink transition-colors">
                    07. WhatsApp CRM &amp; Lead Capture
                  </a>
                  <a href="#results-proof" className="block text-taupe hover:text-ink transition-colors">
                    08. Engineering Quality &amp; Results
                  </a>
                </nav>
              </div>

              <div className="rounded-xs border border-brass/40 bg-brass/10 p-6 text-center">
                <span className="font-serif text-lg italic text-ink block">
                  Ready for a custom studio build?
                </span>
                <p className="mt-2 text-[12px] text-taupe leading-relaxed">
                  We build and deploy production platforms like this in 3–6 weeks.
                </p>
                <Link
                  href="/work-with-us/contact"
                  className="mt-4 block btn-fill py-3 text-[10px] uppercase tracking-luxe"
                >
                  Start a Project
                </Link>
              </div>
            </aside>

            {/* Content Article */}
            <article className="lg:col-span-8 space-y-16">
              {/* Section 1: The Brief */}
              <div id="the-brief" className="space-y-4 border-b border-line pb-12">
                <span className="font-mono text-[11px] text-brass uppercase tracking-wider">
                  01 / Problem Analysis
                </span>
                <h2 className="font-serif text-3xl md:text-4xl italic text-ink font-light">
                  The Brief: Why Most Interior Websites Fail to Convert
                </h2>
                <p className="text-[14px] leading-relaxed text-taupe font-sans">
                  The interior design and luxury architecture sector operates on high-ticket contracts where single commissions exceed <span className="font-currency select-none">₹</span>25 Lakhs to <span className="font-currency select-none">₹</span>3+ Crores ($30k – $350k). Yet almost every interior design website suffers from three fatal problems:
                </p>
                <ul className="space-y-3 text-[13px] text-taupe font-sans pt-2">
                  <li className="flex items-start gap-2">
                    <span className="text-brass font-bold">•</span>
                    <span><strong>Zero Price Transparency:</strong> Leads to dozens of wasted hours fielding discovery calls with mismatched budgets.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-brass font-bold">•</span>
                    <span><strong>Generic Photo Dumps:</strong> Portfolios that fail to explain the structural concept, joinery specifications, or technical rigor.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-brass font-bold">•</span>
                    <span><strong>Template Performance Ceilings:</strong> Slow Squarespace or WordPress setups with poor mobile PageSpeed that leak organic traffic.</span>
                  </li>
                </ul>
              </div>

              {/* Section 2: Design System */}
              <div id="the-design-system" className="space-y-4 border-b border-line pb-12">
                <span className="font-mono text-[11px] text-brass uppercase tracking-wider">
                  02 / Aesthetics &amp; Identity
                </span>
                <h2 className="font-serif text-3xl md:text-4xl italic text-ink font-light">
                  The Design System: Editorial Typography &amp; Material Palettes
                </h2>
                <p className="text-[14px] leading-relaxed text-taupe font-sans">
                  To evoke the refined, tactile atmosphere of high-end architectural monographs (such as <em>El Croquis</em> and <em>Kinfolk</em>), we crafted a bespoke design system:
                </p>
                <div className="grid gap-4 sm:grid-cols-3 pt-3">
                  <div className="rounded-xs border border-line bg-paper-2 p-4">
                    <span className="font-serif text-2xl italic text-ink block">Fraunces</span>
                    <span className="font-mono text-[10px] text-taupe uppercase block mt-1">
                      Display Headings &amp; Quotes
                    </span>
                  </div>
                  <div className="rounded-xs border border-line bg-paper-2 p-4">
                    <span className="font-sans text-xl font-medium text-ink block">Archivo</span>
                    <span className="font-mono text-[10px] text-taupe uppercase block mt-1">
                      Body Copy &amp; Clear Reading
                    </span>
                  </div>
                  <div className="rounded-xs border border-line bg-paper-2 p-4">
                    <span className="font-mono text-lg text-brass block">Geist Mono</span>
                    <span className="font-mono text-[10px] text-taupe uppercase block mt-1">
                      Technical Specs &amp; Tags
                    </span>
                  </div>
                </div>
                <p className="text-[13px] text-taupe font-sans leading-relaxed pt-2">
                  The palette combines deep mineral charcoals (<code>#0c0b09</code>), tactile bone plasters (<code>#f5f2eb</code>), and patinated architectural brass accents (<code>#b89058</code>).
                </p>
              </div>

              {/* Section 3: Cost Calculator */}
              <div id="feature-cost-calculator" className="space-y-4 border-b border-line pb-12">
                <span className="font-mono text-[11px] text-brass uppercase tracking-wider">
                  03 / Conversion Feature
                </span>
                <h2 className="font-serif text-3xl md:text-4xl italic text-ink font-light">
                  Interactive Cost Calculator &amp; Budget Pre-Qualification
                </h2>
                <p className="text-[14px] leading-relaxed text-taupe font-sans">
                  We built an interactive, multi-tiered interior cost estimation engine. Clients can toggle between BHK floorplans, adjust square footage sliders, and choose their material tier (Essential, Signature, Bespoke) to see instant cost breakdowns.
                </p>
                <div className="rounded-xs border border-line bg-paper-2 p-6 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                  <div>
                    <span className="font-serif text-lg italic text-ink block">Live Feature Proof</span>
                    <span className="text-[12px] text-taupe block mt-0.5">Test real-time calculation logic and room scopes</span>
                  </div>
                  <Link
                    href="/calculator"
                    className="btn-fill px-5 py-2.5 text-[10px] uppercase tracking-luxe shrink-0"
                  >
                    Open Cost Calculator ↗
                  </Link>
                </div>
              </div>

              {/* Section 4: Case Studies */}
              <div id="feature-case-studies" className="space-y-4 border-b border-line pb-12">
                <span className="font-mono text-[11px] text-brass uppercase tracking-wider">
                  04 / Deep Portfolios
                </span>
                <h2 className="font-serif text-3xl md:text-4xl italic text-ink font-light">
                  Architectural Drawing Plates &amp; Before/After Sliders
                </h2>
                <p className="text-[14px] leading-relaxed text-taupe font-sans">
                  To elevate portfolio presentation beyond generic galleries, we integrated technical drawing plates (Floor Plans, Reflected Ceiling Lighting Plans, Joinery Sections) with responsive Before/After renovation comparison components.
                </p>
                <div className="rounded-xs border border-line bg-paper-2 p-6 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                  <div>
                    <span className="font-serif text-lg italic text-ink block">Villa Meridian Case Study</span>
                    <span className="text-[12px] text-taupe block mt-0.5">Inspect drawing plate switcher and material narratives</span>
                  </div>
                  <Link
                    href="/work/villa-meridian"
                    className="btn-fill px-5 py-2.5 text-[10px] uppercase tracking-luxe shrink-0"
                  >
                    View Project Case Study ↗
                  </Link>
                </div>
              </div>

              {/* Section 5: Spatial Twin */}
              <div id="feature-spatial-twin" className="space-y-4 border-b border-line pb-12">
                <span className="font-mono text-[11px] text-brass uppercase tracking-wider">
                  05 / Spatial Technology
                </span>
                <h2 className="font-serif text-3xl md:text-4xl italic text-ink font-light">
                  3D Spatial Walkthrough &amp; Digital Twin Architecture
                </h2>
                <p className="text-[14px] leading-relaxed text-taupe font-sans">
                  We engineered a responsive spatial walkthrough card system with direct support for 3D digital twins, BIM models, and confidential access gating for client consultations.
                </p>
                <div className="rounded-xs border border-line bg-paper-2 p-6 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                  <div>
                    <span className="font-serif text-lg italic text-ink block">Spatial Walkthrough Module</span>
                    <span className="text-[12px] text-taupe block mt-0.5">Explore the digital twin presentation component</span>
                  </div>
                  <Link
                    href="/work/villa-meridian"
                    className="btn-fill px-5 py-2.5 text-[10px] uppercase tracking-luxe shrink-0"
                  >
                    Inspect Spatial Module ↗
                  </Link>
                </div>
              </div>

              {/* Section 6: Local SEO */}
              <div id="feature-local-seo" className="space-y-4 border-b border-line pb-12">
                <span className="font-mono text-[11px] text-brass uppercase tracking-wider">
                  06 / Search Engine Dominance
                </span>
                <h2 className="font-serif text-3xl md:text-4xl italic text-ink font-light">
                  Programmatic Multi-City Local SEO Architecture
                </h2>
                <p className="text-[14px] leading-relaxed text-taupe font-sans">
                  Covering 5 major luxury real estate markets (Mumbai, New Delhi, Bengaluru, Hyderabad, Goa) across 7 primary service categories, generating **35+ indexed, crawlable landing pages** with Schema.org JSON-LD structured data.
                </p>
                <div className="rounded-xs border border-line bg-paper-2 p-6 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                  <div>
                    <span className="font-serif text-lg italic text-ink block">Mumbai Living Room SEO Hub</span>
                    <span className="text-[12px] text-taupe block mt-0.5">Inspect schema tags, localized FAQs and curated case studies</span>
                  </div>
                  <Link
                    href="/locations/mumbai/living-room"
                    className="btn-fill px-5 py-2.5 text-[10px] uppercase tracking-luxe shrink-0"
                  >
                    View Local SEO Page ↗
                  </Link>
                </div>
              </div>

              {/* Section 7: Lead Capture */}
              <div id="feature-lead-capture" className="space-y-4 border-b border-line pb-12">
                <span className="font-mono text-[11px] text-brass uppercase tracking-wider">
                  07 / Lead Qualification
                </span>
                <h2 className="font-serif text-3xl md:text-4xl italic text-ink font-light">
                  WhatsApp Direct Integration &amp; Multi-Step Booking
                </h2>
                <p className="text-[14px] leading-relaxed text-taupe font-sans">
                  We integrated a floating 1-click WhatsApp consultation widget and a multi-step design consultation form that collects square footage, budget tier, and architectural style to qualify leads before initial contact.
                </p>
                <div className="rounded-xs border border-line bg-paper-2 p-6 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                  <div>
                    <span className="font-serif text-lg italic text-ink block">Consultation Booking Flow</span>
                    <span className="text-[12px] text-taupe block mt-0.5">Test the interactive consultation intake questionnaire</span>
                  </div>
                  <Link
                    href="/contact"
                    className="btn-fill px-5 py-2.5 text-[10px] uppercase tracking-luxe shrink-0"
                  >
                    Test Consultation Flow ↗
                  </Link>
                </div>
              </div>

              {/* Section 8: Results & Capability Proof */}
              <div id="results-proof" className="space-y-6">
                <span className="font-mono text-[11px] text-brass uppercase tracking-wider">
                  08 / Engineering Rigor
                </span>
                <h2 className="font-serif text-3xl md:text-4xl italic text-ink font-light">
                  Technical Results &amp; Verification Proof
                </h2>
                <div className="grid gap-4 sm:grid-cols-2">
                  <div className="rounded-xs border border-line bg-paper-2 p-6">
                    <span className="font-serif text-3xl italic text-brass block">82 Routes</span>
                    <p className="mt-2 text-[13px] text-taupe">
                      Every single route statically pre-rendered with Next.js App Router for instant edge delivery.
                    </p>
                  </div>
                  <div className="rounded-xs border border-line bg-paper-2 p-6">
                    <span className="font-serif text-3xl italic text-brass block">0 Errors</span>
                    <p className="mt-2 text-[13px] text-taupe">
                      Strict TypeScript type safety, zero lint warnings, and full cross-device verification.
                    </p>
                  </div>
                </div>

                {/* Final Call to Action */}
                <div className="rounded-xs border border-brass/50 bg-paper-2 p-8 md:p-12 text-center mt-12">
                  <h3 className="font-serif text-3xl italic text-ink">
                    Want a site like this for your studio? Let&rsquo;s talk.
                  </h3>
                  <p className="mt-3 max-w-lg mx-auto text-[14px] text-taupe font-sans leading-relaxed">
                    We partner with select interior design and architecture firms to build custom, high-converting digital platforms that win top-tier client commissions.
                  </p>
                  <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
                    <Link
                      href="/work-with-us/contact"
                      className="btn-fill px-8 py-3.5 text-[11px] uppercase tracking-luxe"
                    >
                      Start Your Studio Website
                    </Link>
                    <Link
                      href="/work-with-us/pricing"
                      className="rounded-full border border-line bg-paper px-6 py-3.5 font-mono text-[11px] uppercase tracking-wider text-ink hover:border-brass hover:text-brass transition-colors"
                    >
                      View Pricing Packages
                    </Link>
                  </div>
                </div>
              </div>
            </article>
          </div>
        </div>
      </section>
    </div>
  );
}
