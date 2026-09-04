"use client";

import { useEffect } from "react";
import { usePathname } from "next/navigation";
import { debouncedRefresh } from "@/lib/animations";

/**
 * Handles route change animations and refreshes GSAP ScrollTrigger.
 */
export default function ViewTransitionWrapper({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();

  // Ensure GSAP ScrollTrigger is refreshed on route change
  useEffect(() => {
    const timer = setTimeout(() => {
      debouncedRefresh();
    }, 100);
    return () => clearTimeout(timer);
  }, [pathname]);

  return <>{children}</>;
}