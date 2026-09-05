"use client";

import { useEffect, useRef } from "react";
import { usePathname } from "next/navigation";

function getOrSetVisitorId(): string {
  if (typeof window === "undefined") return "";
  try {
    let vid = localStorage.getItem("lumiere_vid");
    if (!vid) {
      vid = "vid_" + Date.now().toString(36) + "_" + Math.random().toString(36).substring(2, 10);
      localStorage.setItem("lumiere_vid", vid);
    }
    return vid;
  } catch {
    return "vid_" + Math.random().toString(36).substring(2, 10);
  }
}

function getOrSetSessionId(): string {
  if (typeof window === "undefined") return "";
  try {
    let sid = sessionStorage.getItem("lumiere_sid");
    if (!sid) {
      sid = "sid_" + Date.now().toString(36) + "_" + Math.random().toString(36).substring(2, 8);
      sessionStorage.setItem("lumiere_sid", sid);
    }
    return sid;
  } catch {
    return "sid_" + Math.random().toString(36).substring(2, 8);
  }
}

export default function VisitorTracker() {
  const pathname = usePathname();
  const lastTrackedRef = useRef<string>("");

  useEffect(() => {
    if (typeof window === "undefined") return;
    if (typeof navigator !== "undefined" && /Chrome-Lighthouse|Googlebot|bot|crawl|spider/i.test(navigator.userAgent)) {
      return;
    }

    const schedule = (window as unknown as { requestIdleCallback?: (cb: () => void) => number }).requestIdleCallback ||
      ((cb: () => void) => setTimeout(cb, 5000));

    const id = schedule(() => {
      try {
        const search = window.location.search || "";
        const fullPath = (pathname || "/") + search;

        // Prevent duplicate triggers for the same path in immediate succession
        if (lastTrackedRef.current === fullPath) return;
        lastTrackedRef.current = fullPath;

      const visitorId = getOrSetVisitorId();
      const sessionId = getOrSetSessionId();
      const referrer = document.referrer || "Direct";
      const screenResolution = `${window.screen?.width || 0}x${window.screen?.height || 0}`;
      const language = navigator.language || "Unknown";
      let timeZone = "Unknown";
      try {
        timeZone = Intl.DateTimeFormat().resolvedOptions().timeZone;
      } catch {
        // Fallback
      }

      const payload = {
        path: fullPath,
        referrer,
        visitorId,
        sessionId,
        screenResolution,
        language,
        timeZone,
      };

      const dataString = JSON.stringify(payload);

      let beaconSent = false;
      if (navigator.sendBeacon) {
        try {
          const blob = new Blob([dataString], { type: "application/json" });
          beaconSent = navigator.sendBeacon("/api/track", blob);
        } catch {
          beaconSent = false;
        }
      }

      if (!beaconSent) {
        fetch("/api/track", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: dataString,
          keepalive: true,
        }).catch(() => {});
      }
    } catch {
      // Completely swallow client tracking errors
    }
    });

    return () => {
      const cancel = (window as unknown as { cancelIdleCallback?: (id: number) => void }).cancelIdleCallback ||
        ((id: number) => clearTimeout(id));
      cancel(id as number);
    };
  }, [pathname]);

  return null;
}
