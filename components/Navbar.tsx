"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { usePrefersReducedMotion } from "@/lib/use-reduced-motion";
import { nav, studio } from "@/lib/site-config";

export default function Navbar() {
  const progressRef = useRef<HTMLDivElement>(null);
  const [open, setOpen] = useState(false);
  const [activeSection, setActiveSection] = useState<string | null>(null);
  const reduced = usePrefersReducedMotion();
  const pathname = usePathname();
  const isAgency = pathname.startsWith("/work-with-us");

  // Scroll progress bar: uses CSS animation-timeline when supported (0 JS, 0 forced reflows)
  // Fallback for older browsers: measures scroll height only on idle/resize, never during scroll
  useEffect(() => {
    const bar = progressRef.current;
    if (!bar || reduced) return;

    // If browser supports CSS scroll-driven animation, let the GPU compositor handle it with 0 JS
    if (typeof CSS !== "undefined" && CSS.supports && CSS.supports("animation-timeline", "scroll()")) {
      return;
    }

    let cachedMax = 0;
    const measureMax = () => {
      cachedMax = document.documentElement.scrollHeight - window.innerHeight;
    };

    // Defer measurement to idle to completely avoid layout thrashing during initial hydration
    const idleSchedule =
      (window as unknown as { requestIdleCallback?: (cb: () => void) => number }).requestIdleCallback ||
      ((cb: () => void) => setTimeout(cb, 1200));
    const idleId = idleSchedule(() => measureMax());

    let ticking = false;
    const updateProgress = () => {
      if (cachedMax > 0) {
        const progress = Math.min(1, Math.max(0, window.scrollY / cachedMax));
        bar.style.transform = `scaleX(${progress})`;
      }
      ticking = false;
    };

    const onScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(updateProgress);
        ticking = true;
      }
    };

    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", measureMax, { passive: true });

    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", measureMax);
      const cancelIdle =
        (window as unknown as { cancelIdleCallback?: (id: number) => void }).cancelIdleCallback ||
        ((id: number) => clearTimeout(id));
      cancelIdle(idleId as number);
    };
  }, [reduced]);

  // On homepage, track active section via IntersectionObserver without reading element geometry
  useEffect(() => {
    if (pathname !== "/") return;

    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        }
      },
      { rootMargin: "-30% 0px -40% 0px" },
    );

    nav.forEach((item) => {
      const id = item.href.replace(/^\//, "");
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, [pathname]);

  useEffect(() => {
    if (!open) return;
    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = prev;
    };
  }, [open]);

  const close = () => setOpen(false);

  if (isAgency) {
    return null;
  }

  return (
    <header className="fixed inset-x-0 top-0 z-[60] pointer-events-none">
      {/* scroll progress */}
      <div
        ref={progressRef}
        className="nav-scroll-progress fixed inset-x-0 top-0 z-[70] h-[2px] w-full origin-left scale-x-0 bg-brass will-change-transform pointer-events-none"
      />

      <div className="pointer-events-auto mix-blend-difference">
        <div className="flex items-center justify-between px-6 py-5 text-paper md:px-10 md:py-6">
          <Link
            href="/"
            className="font-sans text-[13px] font-medium tracking-[0.28em] md:text-sm"
          >
            {studio.name}
          </Link>

          <nav
            className="hidden items-center gap-8 md:flex relative"
            aria-label="Primary"
          >
            {nav.map((item, idx) => {
              const cleanHref = item.href.split("#")[0];
              const sectionId = item.href.replace(/^\//, "");
              const isActive =
                pathname === "/"
                  ? (activeSection ? activeSection === sectionId : idx === 0)
                  : cleanHref === pathname || (cleanHref !== "/" && pathname.startsWith(cleanHref));

              return (
                <Link
                  key={item.href}
                  href={item.href}
                  data-nav-label={item.label}
                  className={`group relative text-[11px] uppercase tracking-luxe transition-colors duration-300 ${
                    isActive ? "text-paper" : "text-paper/75 hover:text-paper"
                  }`}
                >
                  {item.label}
                  <span
                    className={`absolute -bottom-1 left-0 h-px bg-brass transition-all duration-300 ease-out ${
                      isActive ? "w-full opacity-100" : "w-0 opacity-0 group-hover:w-full group-hover:opacity-100"
                    }`}
                  />
                </Link>
              );
            })}
          </nav>

          <div className="flex items-center gap-4 md:gap-5">
            <Link
              href="/work-with-us"
              className="inline-flex items-center gap-2 rounded-full border border-brass/40 bg-brass/15 px-3.5 py-1.5 font-mono text-[10px] uppercase tracking-wider text-paper backdrop-blur-md transition-all duration-300 hover:border-brass hover:bg-brass hover:text-ink hover:scale-105"
            >
              <span className="h-1.5 w-1.5 rounded-full bg-emerald-400 animate-pulse" />
              <span>Work With Us</span>
            </Link>

            <Link
              href="/contact"
              className="hidden btn-fill relative px-6 py-2.5 text-[11px] uppercase tracking-luxe transition-colors duration-300 md:inline"
            >
              Start a conversation
            </Link>

            <button
              type="button"
              aria-label={open ? "Close menu" : "Open menu"}
              aria-expanded={open}
              onClick={() => setOpen((v) => !v)}
              className="relative flex h-9 w-9 items-center justify-center md:hidden"
            >
              <span
                className={`absolute h-px w-6 bg-paper transition-transform duration-300 ${
                  open ? "translate-y-0 rotate-45" : "-translate-y-[5px]"
                }`}
              />
              <span
                className={`absolute h-px w-6 bg-paper transition-transform duration-300 ${
                  open ? "translate-y-0 -rotate-45" : "translate-y-[5px]"
                }`}
              />
            </button>
          </div>
        </div>
      </div>

      {/* mobile menu overlay */}
      <div
        className={`fixed inset-0 z-[55] flex flex-col justify-between bg-ink px-6 pb-8 pt-28 text-paper transition-[transform,opacity] duration-500 ease-[cubic-bezier(0.65,0,0.35,1)] md:hidden ${
          open
            ? "pointer-events-auto translate-y-0 opacity-100"
            : "pointer-events-none -translate-y-4 opacity-0"
        }`}
      >
        <nav className="flex flex-col gap-2">
          {nav.map((item, i) => (
            <Link
              key={item.href}
              href={item.href}
              onClick={close}
              className="group flex items-baseline gap-4 py-3"
            >
              <span className="font-mono text-[11px] text-stone">
                0{i + 1}
              </span>
              <span className="font-serif text-4xl italic leading-none text-paper/85 transition-colors duration-300 group-hover:text-brass">
                {item.label}
              </span>
            </Link>
          ))}
        </nav>
        <div className="flex flex-col gap-4 border-t border-line-light pt-6">
          <Link
            href="/work-with-us"
            onClick={close}
            className="flex items-center justify-between rounded-xs border border-brass/50 bg-brass/10 px-4 py-3 text-paper transition-all hover:bg-brass hover:text-ink"
          >
            <div className="flex items-center gap-2">
              <span className="h-2 w-2 rounded-full bg-emerald-400 animate-pulse" />
              <span className="font-mono text-[11px] uppercase tracking-wider">
                Work With Us (Agency / Web Studio)
              </span>
            </div>
            <span className="font-mono text-[11px]">↗</span>
          </Link>
          <div className="flex items-end justify-between">
            <div>
              <p className="text-[11px] uppercase tracking-luxe text-stone">New business</p>
              <a
                href="mailto:hello@lumiere-interiors.studio"
                className="mt-1 block font-serif text-lg italic text-paper"
              >
                hello@lumiere-interiors.studio
              </a>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
