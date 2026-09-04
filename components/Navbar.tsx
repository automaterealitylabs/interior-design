"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { gsap, ScrollTrigger, usePrefersReducedMotion } from "@/lib/animations";
import { nav, studio } from "@/lib/site";

export default function Navbar() {
  const progressRef = useRef<HTMLDivElement>(null);
  const navRef = useRef<HTMLElement>(null);
  const indicatorRef = useRef<HTMLDivElement>(null);
  const [open, setOpen] = useState(false);
  const reduced = usePrefersReducedMotion();
  const pathname = usePathname();

  // On agency section, AgencyNav in layout takes over
  if (pathname.startsWith("/work-with-us")) {
    return null;
  }

  // Scroll progress bar
  useEffect(() => {
    if (!progressRef.current || reduced) return;
    const ctx = gsap.context(() => {
      gsap.fromTo(
        progressRef.current,
        { scaleX: 0 },
        {
          scaleX: 1,
          ease: "none",
          scrollTrigger: { start: 0, end: "max", scrub: 0.4 },
        },
      );
    });
    return () => ctx.revert();
  }, [reduced]);

  // Position brass indicator under a specific link element
  const positionIndicator = (target: HTMLElement | null, instant = false) => {
    const indicator = indicatorRef.current;
    const navEl = navRef.current;
    if (!indicator || !navEl) return;

    if (!target) {
      indicator.style.opacity = "0";
      return;
    }

    const rect = target.getBoundingClientRect();
    const navRect = navEl.getBoundingClientRect();
    const x = rect.left - navRect.left;
    const w = rect.width;

    if (instant) {
      indicator.style.transform = `translateX(${x}px)`;
      indicator.style.width = `${w}px`;
      indicator.style.opacity = "1";
    } else {
      gsap.to(indicator, {
        x,
        width: w,
        opacity: 1,
        duration: 0.35,
        ease: "power3.out",
      });
    }
  };

  // Active route tracking
  useEffect(() => {
    const indicator = indicatorRef.current;
    const navEl = navRef.current;
    if (!indicator || !navEl) return;

    if (reduced) {
      indicator.style.opacity = "0";
      return;
    }

    // Match the active nav item by pathname
    const activeIdx = nav.findIndex((item) => {
      const cleanHref = item.href.split("#")[0];
      if (cleanHref === pathname) return true;
      if (cleanHref !== "/" && pathname.startsWith(cleanHref)) return true;
      return false;
    });

    if (activeIdx !== -1) {
      const targetEl = navEl.querySelector(`[data-nav-idx="${activeIdx}"]`) as HTMLElement;
      if (targetEl) {
        positionIndicator(targetEl, true);
      } else {
        indicator.style.opacity = "0";
      }
    } else {
      indicator.style.opacity = "0";
    }

    // On homepage, track on-page sections if present
    if (pathname === "/") {
      const ctx = gsap.context(() => {
        nav.forEach((item, idx) => {
          const id = item.href.replace(/^\//, "");
          const el = document.getElementById(id);
          if (el) {
            ScrollTrigger.create({
              trigger: el,
              start: "top center",
              end: "bottom center",
              onEnter: () => {
                const target = navEl.querySelector(`[data-nav-idx="${idx}"]`) as HTMLElement;
                positionIndicator(target);
              },
              onEnterBack: () => {
                const target = navEl.querySelector(`[data-nav-idx="${idx}"]`) as HTMLElement;
                positionIndicator(target);
              },
              onLeaveBack: () => {
                if (window.scrollY < 300) {
                  indicator.style.opacity = "0";
                }
              },
            });
          }
        });
      });

      return () => ctx.revert();
    }

    // Window resize handler to reposition indicator
    const handleResize = () => {
      if (activeIdx !== -1) {
        const targetEl = navEl.querySelector(`[data-nav-idx="${activeIdx}"]`) as HTMLElement;
        if (targetEl) positionIndicator(targetEl, true);
      }
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, [reduced, pathname]);

  useEffect(() => {
    if (!open) return;
    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = prev;
    };
  }, [open]);

  const close = () => setOpen(false);

  return (
    <>
      {/* scroll progress */}
      <div className="fixed inset-x-0 top-0 z-[70] h-[2px]">
        <div
          ref={progressRef}
          className="h-full w-full origin-left scale-x-0 bg-brass will-change-transform"
        />
      </div>

      <header className="fixed inset-x-0 top-0 z-[60] mix-blend-difference">
        <div className="flex items-center justify-between px-6 py-5 text-paper md:px-10 md:py-6">
          <Link
            href="/"
            className="font-sans text-[13px] font-medium tracking-[0.28em] md:text-sm"
          >
            {studio.name}
          </Link>

          <nav
            ref={navRef}
            className="hidden items-center gap-8 md:flex relative"
            aria-label="Primary"
          >
            {/* active indicator */}
            <div
              ref={indicatorRef}
              className="absolute -bottom-1 left-0 h-px bg-brass transition-all duration-300 ease-out origin-center opacity-0 pointer-events-none"
              aria-hidden="true"
            />
            {nav.map((item, idx) => {
              const cleanHref = item.href.split("#")[0];
              const isActive =
                cleanHref === pathname ||
                (cleanHref !== "/" && pathname.startsWith(cleanHref));

              return (
                <Link
                  key={item.href}
                  href={item.href}
                  data-nav-idx={idx}
                  data-nav-label={item.label}
                  className={`group relative text-[11px] uppercase tracking-luxe transition-colors duration-300 ${
                    isActive ? "text-paper" : "text-paper/75 hover:text-paper"
                  }`}
                >
                  {item.label}
                  <span className="absolute -bottom-1 left-0 h-px w-0 bg-brass transition-all duration-500 ease-[cubic-bezier(0.65,0,0.35,1)] group-hover:w-full" />
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
      </header>

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
    </>
  );
}
