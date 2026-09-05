import Link from "next/link";
import { agencyInfo } from "@/lib/agency";

export default function AgencyFooter() {
  return (
    <footer className="border-t border-line-light bg-ink text-paper">
      <div className="mx-auto w-full max-w-[1440px] px-6 py-14 md:px-10 md:py-20 lg:px-16">
        <div className="grid gap-12 md:grid-cols-12">
          {/* Brand Col */}
          <div className="md:col-span-5">
            <div className="flex items-center gap-2.5">
              <div className="h-7 w-7 rounded-xs bg-paper-2 flex items-center justify-center text-ink font-mono text-xs font-bold shadow-md">
                AR
              </div>
              <div>
                <span className="font-sans text-base font-semibold tracking-wider text-paper block leading-none">
                  {agencyInfo.name}
                </span>
                <span className="font-mono text-[9px] uppercase tracking-widest text-brass block mt-0.5">
                  Web Development for the Business of Design
                </span>
              </div>
            </div>
            <p className="mt-4 max-w-sm text-[13px] leading-relaxed text-stone font-sans">
              We design and engineer bespoke, high-converting websites, interactive estimation tools, and programmatic local SEO infrastructure exclusively for architecture practices and interior design studios.
            </p>
            <div className="mt-6 flex flex-wrap items-center gap-3">
              <Link
                href="/work-with-us/contact"
                className="btn-fill px-5 py-2.5 text-[10px] uppercase tracking-luxe"
              >
                Schedule Consultation
              </Link>
              <Link
                href="/"
                className="rounded-full border border-line-light bg-ink-2 px-4 py-2 font-mono text-[10px] uppercase tracking-wider text-stone hover:text-paper transition-colors"
              >
                View Lumière Demo →
              </Link>
            </div>
          </div>

          {/* Agency Navigation */}
          <div className="flex flex-col gap-2.5 md:col-span-3 md:col-start-7">
            <span className="font-mono text-[10px] uppercase tracking-luxe text-stone font-semibold">
              Agency Section
            </span>
            <Link
              href="/work-with-us"
              className="text-[13px] text-stone hover:text-paper transition-colors"
            >
              Overview &amp; Capabilities
            </Link>
            <Link
              href="/work-with-us/portfolio/lumiere-interiors"
              className="text-[13px] text-stone hover:text-paper transition-colors"
            >
              Lumière Case Study Breakdown
            </Link>
            <Link
              href="/work-with-us/services"
              className="text-[13px] text-stone hover:text-paper transition-colors"
            >
              Web Services &amp; Systems
            </Link>
            <Link
              href="/work-with-us/pricing"
              className="text-[13px] text-stone hover:text-paper transition-colors"
            >
              Real Studio Packages &amp; Pricing
            </Link>
            <Link
              href="/work-with-us/blog"
              className="text-[13px] text-stone hover:text-paper transition-colors"
            >
              Studio Insights &amp; Articles
            </Link>
            <Link
              href="/work-with-us/contact"
              className="text-[13px] text-stone hover:text-paper transition-colors"
            >
              Start a Project
            </Link>
          </div>

          {/* Direct Contact */}
          <div className="flex flex-col gap-2.5 md:col-span-4">
            <span className="font-mono text-[10px] uppercase tracking-luxe text-stone font-semibold">
              Direct Contact
            </span>
            <p className="text-[12px] text-stone font-mono">
              Lead Architect: <strong className="text-paper">{agencyInfo.founder}</strong>
            </p>
            <a
              href={`mailto:${agencyInfo.email}`}
              className="text-[13px] text-paper underline hover:text-brass transition-colors font-mono"
            >
              {agencyInfo.email}
            </a>
            <a
              href={`tel:${agencyInfo.phone.replace(/\s+/g, "")}`}
              className="text-[13px] text-paper hover:text-brass transition-colors font-mono"
            >
              {agencyInfo.phone}
            </a>
            <a
              href={agencyInfo.whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 text-[12px] text-emerald-400 hover:text-emerald-300 font-mono font-medium mt-1"
            >
              <span>● Direct WhatsApp Consultation ↗</span>
            </a>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-14 flex flex-col gap-3 border-t border-line-light pt-6 text-[10px] font-mono text-stone md:flex-row md:items-center md:justify-between">
          <span>
            &copy; {new Date().getFullYear()} {agencyInfo.name}. All rights reserved.
          </span>
          <span>
            Serving design studios across India &middot; US &middot; UK &middot; UAE &middot; Australia
          </span>
        </div>
      </div>
    </footer>
  );
}
