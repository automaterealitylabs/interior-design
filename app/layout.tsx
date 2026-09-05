import type { Metadata, Viewport } from "next";
import { archivo, fraunces, geistMono } from "./fonts";
import SmoothScroll from "@/components/SmoothScroll";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ViewTransitionWrapper from "@/components/ViewTransitionWrapper";
import LumiereJsonLd from "@/components/LumiereJsonLd";
import VisitorTracker from "@/components/VisitorTracker";
import "./globals.css";

export const metadata: Metadata = {
  title: {
    default: "LUMIÈRE INTERIORS — Interior Design Studio",
    template: "%s | LUMIÈRE INTERIORS",
  },
  description:
    "LUMIÈRE INTERIORS is an interior design and architecture studio. We don't just design spaces — we design how they feel.",
  metadataBase: new URL(
    process.env.NEXT_PUBLIC_SITE_URL ||
    process.env.SITE_URL ||
    "https://lumiereinteriors.automaterealitylabs.in",
  ),
  openGraph: {
    title: "LUMIÈRE INTERIORS — Architecture & Bespoke Spaces",
    description: "We don't just design spaces. We design how they feel.",
    siteName: "Lumière Interiors",
    images: [
      {
        url: "/images/projects/courtyard-house.png",
        width: 1200,
        height: 630,
        alt: "Lumière Interiors Studio Architecture",
      },
    ],
  },
  verification: {
    google: process.env.GOOGLE_SITE_VERIFICATION || undefined,
  },
};

export const viewport: Viewport = {
  themeColor: "#161412",
  colorScheme: "dark",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      suppressHydrationWarning
      className={`${archivo.variable} ${fraunces.variable} ${geistMono.variable}`}
    >
      <head>
        <LumiereJsonLd />
      </head>
      <body>
        <VisitorTracker />
        <SmoothScroll>
          <Navbar />
          <ViewTransitionWrapper>{children}</ViewTransitionWrapper>
          <Footer />
        </SmoothScroll>
      </body>
    </html>
  );
}
