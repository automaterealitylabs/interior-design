"use client";

import { useEffect, useRef } from "react";
import { usePathname } from "next/navigation";
import { debouncedRefresh } from "@/lib/animations";

/**
 * Wraps page content for smooth transitions between routes and refreshes ScrollTrigger.
 */
export default function ViewTransitionWrapper({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  const wrapperRef = useRef<HTMLDivElement>(null);

  // Ensure GSAP ScrollTrigger is refreshed on route change
  useEffect(() => {
    const timer = setTimeout(() => {
      debouncedRefresh();
    }, 100);
    return () => clearTimeout(timer);
  }, [pathname]);

  return (
    <div
      ref={wrapperRef}
      className="view-transition-wrapper min-h-screen"
    >
      {children}
    </div>
  );
}