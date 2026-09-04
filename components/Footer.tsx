"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { contact, nav, studio } from "@/lib/site";

export default function Footer() {
  const pathname = usePathname();

  // On agency micro-site pages, AgencyFooter in layout takes over
  if (pathname.startsWith("/work-with-us")) {
    return null;
  }

  return (
    <footer className="bg-paper text-ink">
      <div className="mx-auto w-full max-w-[1440px] px-6 py-14 md:px-10 md:py-20 lg:px-16">
        <div className="grid gap-12 md:grid-cols-12">
          <div className="md:col-span-5">
            <span className="font-sans text-sm font-medium tracking-[0.28em]">
              {studio.name}
            </span>
            <p className="mt-4 max-w-xs text-[11px] uppercase leading-loose tracking-luxe text-taupe">
              {studio.tagline}
            </p>
            <p className="mt-8 max-w-xs font-serif text-lg italic leading-snug text-ink/70">
              &ldquo;We don&rsquo;t just design spaces — we design how they
              feel.&rdquo;
            </p>
          </div>

          <nav className="flex flex-col gap-3 md:col-span-2 md:col-start-7">
            <span className="text-[10px] uppercase tracking-luxe text-taupe">
              Studio
            </span>
            {nav.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="w-fit text-[13px] text-ink/70 transition-colors hover:text-ink"
              >
                {item.label}
              </Link>
            ))}
          </nav>

          <div className="flex flex-col gap-3 md:col-span-3">
            <span className="text-[10px] uppercase tracking-luxe text-taupe">
              Connect
            </span>
            <a
              href={`mailto:${contact.email}`}
              className="w-fit text-[13px] text-ink/70 transition-colors hover:text-ink"
            >
              {contact.email}
            </a>
            <a
              href={`tel:${contact.phone.replace(/\s+/g, "")}`}
              className="w-fit text-[13px] text-ink/70 transition-colors hover:text-ink"
            >
              {contact.phone}
            </a>
            <span className="text-[11px] leading-relaxed text-taupe">
              {contact.address}
            </span>
          </div>
        </div>

        <div className="mt-14 flex flex-col gap-4 border-t border-line pt-8 text-[11px] uppercase tracking-luxe text-taupe md:flex-row md:items-center md:justify-between">
          <span>&copy; {new Date().getFullYear()} {studio.name}. All rights reserved.</span>
          <p className="text-right">
            Bespoke Interiors &middot; Turnkey Execution &middot; Spatial Architecture
          </p>
        </div>

        {/* Developer Attribution Credit Line */}
        <div className="mt-6 border-t border-line/50 pt-4 text-center">
          <p className="text-[11px] font-mono text-stone hover:text-taupe transition-colors">
            Concept site designed &amp; developed by{" "}
            <Link
              href="/work-with-us"
              className="text-brass underline hover:text-ink transition-colors font-medium"
            >
              Automate Reality Labs
            </Link>{" "}
            — a demonstration built for interior design studios.{" "}
            <Link
              href="/work-with-us"
              className="text-brass hover:underline transition-colors font-medium ml-1"
            >
              Work with us &rarr;
            </Link>
            <span className="mx-2 text-stone/40">|</span>
            <Link
              href="/admin/visitors"
              className="text-stone/70 hover:text-brass transition-colors font-mono text-[10px]"
            >
              Visitor Logs &rarr;
            </Link>
          </p>
        </div>
      </div>
    </footer>
  );
}
