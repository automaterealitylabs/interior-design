/* ── Scarcity & Calendar Configuration ────────────────────────────────── */
export const CURRENT_SEASON = "2026";
export const OPEN_COMMISSIONS_COUNT = 2;

export const scarcityNotice = {
  season: CURRENT_SEASON,
  openCommissions: OPEN_COMMISSIONS_COUNT,
  note: `Currently accepting: ${OPEN_COMMISSIONS_COUNT === 2 ? "two" : OPEN_COMMISSIONS_COUNT} commissions for ${CURRENT_SEASON}`,
  subText: `${OPEN_COMMISSIONS_COUNT === 2 ? "Two" : OPEN_COMMISSIONS_COUNT} commissions remain open for the ${CURRENT_SEASON} season — we hold the calendar small so the work stays human.`,
};

export const studio = {
  name: "LUMIÈRE INTERIORS",
  tagline: "Interior Design • Architecture • Bespoke Spaces",
};

export const nav = [
  { label: "Work", href: "/work" },
  { label: "Services", href: "/services" },
  { label: "Pricing", href: "/pricing" },
  { label: "Process", href: "/process" },
  { label: "Shop", href: "/shop" },
  { label: "About", href: "/about" },
  { label: "Journal", href: "/journal" },
  { label: "FAQ", href: "/faq" },
  { label: "Contact", href: "/contact" },
];

/* ── Contact & Flagship Studios ───────────────────────────────────────── */
export const contact = {
  email: "hello@lumiere-interiors.studio",
  phone: "+91 22 6902 4400",
  whatsapp: "+91 98200 12345",
  address: "Flagship Atelier: Waterfield Road, Bandra West, Mumbai 400050",
  secondaryAddress: "Design Studio: Golf Course Road, DLF Phase 5, Gurugram 122002",
  hours: "Monday – Saturday: 10:00 AM – 7:00 PM (By Appointment)",
  responseTime: "We respond to all project inquiries within 24 hours.",
  socials: [
    { label: "Instagram", href: "https://instagram.com" },
    { label: "Pinterest", href: "https://pinterest.com" },
    { label: "Behance", href: "https://behance.net" },
    { label: "LinkedIn", href: "https://linkedin.com" },
  ],
};
