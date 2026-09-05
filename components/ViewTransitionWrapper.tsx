"use client";

import { useEffect, useRef } from "react";
import { usePathname } from "next/navigation";

/**
 * Handles route change animations and refreshes GSAP ScrollTrigger on subsequent navigation.
 */
export default function ViewTransitionWrapper({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  const isFirstMount = useRef(true);

  // Ensure GSAP ScrollTrigger is refreshed on route change, skipping initial load
  useEffect(() => {
    if (isFirstMount.current) {
      isFirstMount.current = false;
      return;
    }
    const timer = setTimeout(async () => {
      const { debouncedRefresh } = await import("@/lib/animations");
      debouncedRefresh();
    }, 150);
    return () => clearTimeout(timer);
  }, [pathname]);

  return <>{children}</>;
}