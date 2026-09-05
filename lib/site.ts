import type { PlateKey } from "@/components/plates";

import { scarcityNotice } from "./site-config";
export * from "./site-config";

/* ── Trust Metrics & Guarantees ───────────────────────────────────────── */

export const trustStats = [
  { value: "140+", label: "Completed Commissions" },
  { value: "12+", label: "Years in Practice" },
  { value: "98.6%", label: "Client Satisfaction" },
  { value: "8+", label: "Cities Served" },
];

export const trustGuarantees = [
  {
    title: "10-Year Woodwork Warranty",
    desc: "Comprehensive structural guarantee on all custom joinery, carcasses, and hardware mechanisms.",
  },
  {
    title: "On-Time Handover Guarantee",
    desc: "Milestone-backed project timelines with an explicit contractual delay credit guarantee.",
  },
  {
    title: "Fixed-Scope BOQ Promise",
    desc: "100% transparent pricing locked before on-site work starts — zero hidden costs or surprise markups.",
  },
  {
    title: "Dedicated Studio Architect",
    desc: "Single accountable project director on-site through concept, fabrication, and final snagging.",
  },
];

/* ── Services ─────────────────────────────────────────────────────────── */

export const services = [
  {
    n: "01",
    slug: "living-room",
    title: "Living Room",
    desc: "The heart of the home — designed for conversation, comfort and the quiet pleasure of a room that just works.",
    features: ["Furniture layout", "Lighting design", "Custom joinery", "Soft furnishing"],
    startingPrice: "₹4,50,000",
    image: "/images/rooms/living-room.png",
  },
  {
    n: "02",
    slug: "kitchen",
    title: "Modular Kitchen",
    desc: "Workflows, storage and finishes choreographed around how you cook — not how a catalogue photographs.",
    features: ["Layout planning", "Countertop selection", "Hardware", "Appliance integration"],
    startingPrice: "₹6,00,000",
    image: "/images/rooms/kitchen.png",
  },
  {
    n: "03",
    slug: "bedroom",
    title: "Bedroom",
    desc: "A room that holds rest. Calm proportion, warm materials and storage that disappears into the architecture.",
    features: ["Wardrobe design", "Lighting layers", "Material palette", "Acoustic comfort"],
    startingPrice: "₹3,80,000",
    image: "/images/rooms/bedroom.png",
  },
  {
    n: "04",
    slug: "dining",
    title: "Dining Area",
    desc: "Where the table is the anchor — proportioned to the room, lit to flatter, built to last.",
    features: ["Table selection", "Seating design", "Ambient lighting", "Wall treatments"],
    startingPrice: "₹3,20,000",
    image: "/images/rooms/dining.png",
  },
  {
    n: "05",
    slug: "study",
    title: "Home Office",
    desc: "A workspace that sharpens focus without sacrificing the feeling of home.",
    features: ["Ergonomic planning", "Storage solutions", "Task lighting", "Acoustic treatment"],
    startingPrice: "₹2,50,000",
    image: "/images/rooms/study.png",
  },
  {
    n: "06",
    slug: "bath",
    title: "Bathroom & Spa",
    desc: "A single vision of luxury — stone, steam and restorative calm in every material decision.",
    features: ["Stone selection", "Fixture design", "Wet room planning", "Lighting atmosphere"],
    startingPrice: "₹2,80,000",
    image: "/images/rooms/bath.png",
  },
  {
    n: "07",
    slug: "entry",
    title: "Entry & Foyer",
    desc: "The first room is a threshold — it sets the register for the rest of the home.",
    features: ["Threshold design", "Console & art", "Lighting", "Architectural transition"],
    startingPrice: "₹1,90,000",
    image: "/images/rooms/entry.png",
  },
  {
    n: "08",
    slug: "living-room",
    title: "Full Home Interior",
    desc: "A single vision, carried through every room — consistent material language, unified flow, one accountable team.",
    features: ["Complete design", "Material coordination", "Project management", "Turnkey delivery"],
    startingPrice: "₹22,00,000",
    image: "/images/signature-living-room.png",
  },
];

/* ── Design Process & Payment Milestones ──────────────────────────────── */

export const process = [
  {
    n: "01",
    title: "Consultation & Brief",
    brief: "Listen first. We understand your requirements, lifestyle, property, preferences and budget — the raw material of every good design.",
    detail: "A site visit, spatial survey, and a shared brief that ensures we are solving the right problem before a single line is drawn.",
  },
  {
    n: "02",
    title: "Design & Planning",
    brief: "Where ideas take form. Layouts, mood boards, 2D working drawings and photoreal 3D visualisations.",
    detail: "We present concepts that are buildable, not just beautiful — every plan is tested against budget, structure and the way you actually live.",
  },
  {
    n: "03",
    title: "Material Selection",
    brief: "Laminates, veneers, hardware, lighting, countertops and finishes — chosen for character, durability and how they age.",
    detail: "Touch, compare, decide. We guide you through a curated material library so every surface earns its place.",
  },
  {
    n: "04",
    title: "Execution & Making",
    brief: "Professional site supervision, trade coordination and precision installation — the part where drawings become rooms.",
    detail: "A dedicated project manager ensures quality at every stage. Weekly updates, transparent timelines, zero surprises.",
  },
  {
    n: "05",
    title: "Final Handover",
    brief: "Final inspection, 100-point audit, handover and post-project warranty support — the last detail matters as much as the first.",
    detail: "We don't leave until every joint is tight, every surface is clean, and the room feels exactly like the vision we started with.",
  },
];

export const processMilestones = [
  {
    phase: "Phase 01",
    name: "Discovery & Spatial Audit",
    weeks: "Weeks 1–2",
    paymentPercentage: 10,
    deliverables: [
      "Physical site laser-measurement & spatial audit",
      "Lifestyle choreography brief & aesthetic charter",
      "Preliminary zoning and circulation plans",
      "Initial feasibility & budget envelope framework",
    ],
    commercialTerm: "10% Booking Deposit upon engagement contract",
  },
  {
    phase: "Phase 02 & 03",
    name: "Design Development & Working Drawings",
    weeks: "Weeks 3–10",
    paymentPercentage: 40,
    deliverables: [
      "High-definition photoreal 3D architectural renders",
      "Full construction CAD sets (electrical, plumbing, HVAC, masonry)",
      "Millwork joinery detail blueprints (1:20 & 1:5 scale)",
      "Curated physical material box (veneers, marble, textiles, finishes)",
      "Itemized Fixed-Scope BOQ for procurement signoff",
    ],
    commercialTerm: "40% upon approval of 3D concept & technical drawing set",
  },
  {
    phase: "Phase 04",
    name: "Procurement & On-Site Execution",
    weeks: "Weeks 11–18",
    paymentPercentage: 40,
    deliverables: [
      "Factory fabrication of bespoke millwork & casework",
      "Civil masonry, flooring, and ceiling framing",
      "MEP rough-ins and acoustic insulation",
      "Weekly digital photo progress logs and timeline audits",
      "On-site installation of lighting, vanities, and loose furnishings",
    ],
    commercialTerm: "40% in structured progress milestones during on-site fabrication",
  },
  {
    phase: "Phase 05",
    name: "Snagging, 100-Point Audit & Handover",
    weeks: "Weeks 19–20",
    paymentPercentage: 10,
    deliverables: [
      "100-point snagging inspection & micro-adjustments",
      "Deep architectural cleaning & textile steaming",
      "Comprehensive maintenance dossier & material care guide",
      "10-Year Woodwork Warranty Certificate & keys handover",
    ],
    commercialTerm: "10% Final Balance upon client walkthrough & signoff",
  },
];

export const timelineContingency = {
  headline: "Committed Timelines & Shift Guarantee",
  note: "We hold our build schedules to the highest standard. If approved project milestones shift due to any studio-controlled delay, Lumière Interiors automatically credits ₹2,500 per day towards custom loose furnishings or decor additions.",
  clause: "All project timelines are contractually binding and tracked live in your weekly client portal.",
};

/* ── Philosophy ───────────────────────────────────────────────────────── */

export const philosophy = [
  {
    n: "I",
    word: "Function",
    note: "Every object earns its place. A room must work before it is allowed to be beautiful.",
  },
  {
    n: "II",
    word: "Form",
    note: "Proportion is the quiet luxury. We edit until only the essential line remains.",
  },
  {
    n: "III",
    word: "Material",
    note: "Oak, lime, stone, brass — honest materials allowed to age with dignity.",
  },
  {
    n: "IV",
    word: "Light",
    note: "Light is the first material we pour. It shapes a space before anything is placed in it.",
  },
  {
    n: "V",
    word: "Detail",
    note: "The last millimetre is where character lives. We chase it without compromise.",
  },
];

/* ── Design Styles ────────────────────────────────────────────────────── */

export const styles = [
  {
    name: "Modern",
    desc: "Clean lines, open spaces and a palette that breathes — less ornament, more intention.",
    plate: "arch" as PlateKey,
  },
  {
    name: "Minimal",
    desc: "The art of restraint. Every object earns its place through function and proportion alone.",
    plate: "light" as PlateKey,
  },
  {
    name: "Contemporary",
    desc: "Forward-looking without being trend-driven — a living design language that evolves with the occupant.",
    plate: "plan" as PlateKey,
  },
  {
    name: "Luxury",
    desc: "Rich materials, considered details and an atmosphere of understated opulence.",
    plate: "section" as PlateKey,
  },
  {
    name: "Industrial",
    desc: "Raw honesty — exposed structure, honest materials and the beauty of the unfinished.",
    plate: "arch" as PlateKey,
  },
  {
    name: "Traditional",
    desc: "Timeless proportion and craftsmanship — a language that has endured for centuries.",
    plate: "plan" as PlateKey,
  },
  {
    name: "Modern Indian",
    desc: "Where heritage meets contemporary craft — regional materials, artisan details, modern sensibility.",
    plate: "light" as PlateKey,
  },
];

/* ── Materials ────────────────────────────────────────────────────────── */

export const materials = [
  { category: "Plywood", finish: "Marine, Commercial, BWR", application: "Structural, carcasses, furniture", benefit: "Moisture resistance, durability, load-bearing strength" },
  { category: "Laminates", finish: "Matte, Gloss, Textured, Post-formed", application: "Cabinets, wardrobes, countertops", benefit: "Wide colour range, scratch resistance, easy maintenance" },
  { category: "Veneers", finish: "Natural, Reconstituted, Backed", application: "Feature walls, doors, furniture", benefit: "Real wood grain, warmth, premium finish" },
  { category: "Acrylic", finish: "High-gloss, Matte, Mirror", application: "Kitchen shutters, wardrobes, panels", benefit: "Lustre, depth of colour, seamless surfaces" },
  { category: "Glass", finish: "Tempered, Frosted, Tinted, Bevelled", application: "Partitions, shelving, backsplashes", benefit: "Light transmission, visual depth, easy cleaning" },
  { category: "Marble", finish: "Polished, Honed, Leathered", application: "Flooring, countertops, accent walls", benefit: "Timeless luxury, unique veining, thermal mass" },
  { category: "Quartz", finish: "Polished, Textured, Veined", application: "Kitchen countertops, vanities", benefit: "Non-porous, stain-resistant, consistent colour" },
  { category: "Hardware", finish: "Brass, Chrome, Matte Black, Nickel", application: "Handles, hinges, pulls, fittings", benefit: "Tactile quality, durability, visual accent" },
  { category: "Lighting", finish: "Pendant, Recessed, Track, Floor", application: "Ambient, task, accent lighting", benefit: "Layered illumination, mood control, energy efficiency" },
  { category: "Paint", finish: "Emulsion, Distemper, Texture, Luxury", application: "Walls, ceilings, exterior", benefit: "Colour fidelity, washability, coverage" },
  { category: "Textures", finish: "Stone cladding, Wood panelling, Wallpaper", application: "Feature walls, ceilings, partitions", benefit: "Tactile depth, acoustic absorption, visual interest" },
  { category: "Flooring", finish: "Hardwood, Marble, Vitrified, Vinyl", application: "Living areas, bedrooms, wet areas", benefit: "Wear resistance, aesthetic range, thermal comfort" },
];

/* ── Before / After ───────────────────────────────────────────────────── */

export const beforeAfter = [
  {
    title: "The Living Room",
    subtitle: "From a cramped builder layout with a small window to an open sanctuary of light.",
    beforeNote: "Original 1.2m window opening · Builder beige walls · Unoptimized layout",
    afterNote: "Expanded 4.5m floor-to-ceiling glass · Travertine hearth · Cove lighting",
    beforeImage: "/images/before-after/living-room-before.png",
    afterImage: "/images/before-after/living-room-after.png",
  },
  {
    title: "The Kitchen",
    subtitle: "From a cramped galley layout to a generous, open culinary architecture.",
    beforeNote: "Closed galley wall · Worn laminate counter · Single central bulb",
    afterNote: "Open architectural flow · Nero Marquina marble island · Pocket millwork",
    beforeImage: "/images/before-after/kitchen-before.png",
    afterImage: "/images/before-after/kitchen-after.png",
  },
  {
    title: "The Bedroom",
    subtitle: "From an un-proportioned box to a serene master suite.",
    beforeNote: "Plain un-articulated walls · Cramped bed position · Exposed wiring",
    afterNote: "Fluted walnut acoustic wall · Centered platform bed · Indirect cove light",
    beforeImage: "/images/before-after/bedroom-before.png",
    afterImage: "/images/before-after/bedroom-after.png",
  },
];

/* ── Projects (Comprehensive Portfolio & Case Studies) ─────────────────── */

export interface ProjectCaseStudy {
  n: string;
  slug: string;
  name: string;
  location: string;
  city: string;
  type: string;
  bhk: string;
  area: string;
  style: string;
  year: string;
  budgetTier: "Essential" | "Signature" | "Bespoke";
  desc: string;
  shortHook: string;
  plate: PlateKey;
  image: string;
  gallery: string[];
  beforeAfter?: {
    beforeImage: string;
    afterImage: string;
    beforeNote: string;
    afterNote: string;
  };
  narrative: {
    brief: string;
    concept: string;
    execution: string;
    quote: string;
  };
  scope: string[];
  materials: Array<{ name: string; finish: string; role: string }>;
  timeline: string;
}

export const projects: ProjectCaseStudy[] = [
  {
    n: "01",
    slug: "villa-meridian",
    name: "Villa Meridian",
    location: "Palm Springs, California",
    city: "Palm Springs",
    type: "Residential",
    bhk: "Villa",
    area: "520 m²",
    style: "Modern",
    year: "2025",
    budgetTier: "Bespoke",
    desc: "A desert retreat turned on its axis to follow the sun. Lime-washed walls, travertine floors and a sequence of rooms that open one into the next.",
    shortHook: "A desert sanctuary designed around the path of natural light.",
    plate: "arch" as PlateKey,
    image: "/images/projects/villa-meridian.png",
    gallery: [
      "/images/projects/villa-meridian.png",
      "/images/rooms/living-room/1.png",
      "/images/rooms/living-room/3.png",
      "/images/rooms/kitchen/1.png",
      "/images/rooms/bedroom/1.png",
      "/images/rooms/bath/1.png",
      "/images/rooms/dining/1.png",
    ],
    beforeAfter: {
      beforeImage: "/images/before-after/living-room-before.png",
      afterImage: "/images/before-after/living-room-after.png",
      beforeNote: "Builder-standard concrete box with fragmented small windows",
      afterNote: "Monumental 4.5m glass facade with monolithic travertine hearth",
    },
    narrative: {
      brief: "The clients desired an unhurried, monolithic sanctuary that embraced the extreme desert climate while providing an intimate, tactile family residence.",
      concept: "We rotated the living axis 18 degrees to eliminate harsh western glare while capturing framed mountain silhouettes through deep overhangs.",
      execution: "Cast-in-place pigmented concrete walls harmonize with hand-cut Roman travertine and custom smoked oak casework throughout all five bedrooms.",
      quote: "Lumière transformed our experience of the desert into an architectural meditation.",
    },
    scope: [
      "Complete Architectural Spatial Reconfiguration",
      "Full-Height Smoked Oak Millwork Suite",
      "Seamless Roman Travertine Slab Flooring",
      "Concealed Low-Glare Architectural Lighting",
      "Custom Integrated Kitchen with Pietra Cardosa",
      "Integrated Outdoor Shading & Spa Suite",
    ],
    materials: [
      { name: "Roman Travertine", finish: "Honed & Unfilled", role: "Continuous Flooring & Fireplace Hearth" },
      { name: "Smoked Oak", finish: "Matte Polyurethane Oil", role: "Floor-to-Ceiling Storage Casework" },
      { name: "Hand-Applied Lime Plaster", finish: "Warm Bone Mineral", role: "Monolithic Wall Planes" },
      { name: "Solid Unlacquered Brass", finish: "Hand-Brushed Patina", role: "Hardware & Custom Light Fixtures" },
    ],
    timeline: "24 Weeks (Turnkey Delivery)",
  },
  {
    n: "02",
    slug: "courtyard-house",
    name: "The Courtyard House",
    location: "Bandra, Mumbai",
    city: "Mumbai",
    type: "Residential",
    bhk: "4 BHK",
    area: "380 m²",
    style: "Modern Indian",
    year: "2025",
    budgetTier: "Signature",
    desc: "A coastal home arranged around an internal atrium. Teak woodwork, fluted glass screens and a quiet rhythm of shadowed breezeways.",
    shortHook: "A home arranged around sea air, courtyards, and deep shadows.",
    plate: "arch" as PlateKey,
    image: "/images/projects/courtyard-house.png",
    gallery: [
      "/images/projects/courtyard-house.png",
      "/images/rooms/living-room/2.png",
      "/images/rooms/dining/2.png",
      "/images/rooms/kitchen/2.png",
      "/images/rooms/bedroom/2.png",
      "/images/rooms/bath/2.png",
      "/images/rooms/study/1.png",
    ],
    beforeAfter: {
      beforeImage: "/images/before-after/kitchen-before.png",
      afterImage: "/images/before-after/kitchen-after.png",
      beforeNote: "Divided dark rooms with heavy structural columns and damp plaster",
      afterNote: "Open-plan courtyard breezeway with ventilated teak louvres and quartz island",
    },
    narrative: {
      brief: "A multi-generational Mumbai apartment needing acoustic quiet from street traffic and continuous cross-ventilation.",
      concept: "Drawing from traditional Indian haveli courtyards, we carved a central sky-lit atrium that acts as the thermal and social heart of the residence.",
      execution: "Locally sourced Malabar teak joinery paired with custom Kota stone floors and bespoke brass-inlaid terrazzo borders.",
      quote: "Stepping inside feels like leaving the city behind completely.",
    },
    scope: [
      "Atrium & Structural Column Encasement",
      "Acoustic Double-Glazed Teak Joinery",
      "Handcrafted Kota Stone & Brass Terrazzo Flooring",
      "Custom Modular Kitchen with Fluted Timber Shutters",
      "Curated Art Glass Screens & Indirect Cove Lighting",
    ],
    materials: [
      { name: "Malabar Teak", finish: "Natural Matte Seal", role: "Louvered Partitions & Door Frames" },
      { name: "Kota Stone", finish: "Leathered & Mirror-Bordered", role: "Living & Circulation Flooring" },
      { name: "Fluted Cast Glass", finish: "Low-Iron Acoustic", role: "Privacy Screens" },
      { name: "Acoustic Lime Wash", finish: "Warm Ecru", role: "Living Room Shell" },
    ],
    timeline: "20 Weeks (Design to Handover)",
  },
  {
    n: "03",
    slug: "lightwell-penthouse",
    name: "The Lightwell Penthouse",
    location: "Golf Course Road, New Delhi",
    city: "New Delhi",
    type: "Residential",
    bhk: "3 BHK",
    area: "310 m²",
    style: "Contemporary",
    year: "2024",
    budgetTier: "Bespoke",
    desc: "A triplex penthouse crowned by a central light shaft that channels soft sky illumination into three connected levels.",
    shortHook: "A vertical shaft of light that articulates three storeys of space.",
    plate: "light" as PlateKey,
    image: "/images/projects/lightwell-penthouse.png",
    gallery: [
      "/images/projects/lightwell-penthouse.png",
      "/images/rooms/living-room/4.png",
      "/images/rooms/bedroom/3.png",
      "/images/rooms/study/2.png",
      "/images/rooms/kitchen/3.png",
      "/images/rooms/bath/3.png",
      "/images/rooms/entry/1.png",
    ],
    beforeAfter: {
      beforeImage: "/images/before-after/bedroom-before.png",
      afterImage: "/images/before-after/bedroom-after.png",
      beforeNote: "Low false ceilings, glaring downlights and disjointed dark stairwells",
      afterNote: "Double-height void with fluted walnut acoustic wall and floating steps",
    },
    narrative: {
      brief: "The client wanted a calm, art-collector gallery home that minimized Delhi's urban haze and maximized natural upward daylight.",
      concept: "A central 9-metre lightwell was sculpted to act as a light funnel and vertical spatial spine.",
      execution: "Precision-engineered walnut panelling with integrated micro-perforated acoustic backing and Italian Statuario marble slabs.",
      quote: "The light moves through the triplex like a living sculpture all day.",
    },
    scope: [
      "Double-Height Void Engineering & Glazing",
      "Acoustic Walnut Fluted Wall System",
      "Statuario Marble Flooring & Floating Cantilever Staircase",
      "Smart Motorized Architectural Blinds & Automation",
      "Custom Dressing Suite with Leather-Lined Joinery",
    ],
    materials: [
      { name: "Statuario Marble", finish: "Honed Velvet", role: "Living Room Floor & Master Bath" },
      { name: "American Walnut", finish: "Natural Fluted Profile", role: "Central Vertical Acoustic Core" },
      { name: "Antiqued Bronze", finish: "Patinated Metal", role: "Stair Stringers & Door Portals" },
      { name: "Pure Belgian Linen", finish: "Soft Oatmeal", role: "Drapery & Wall Insets" },
    ],
    timeline: "22 Weeks",
  },
  {
    n: "04",
    slug: "maison-verre",
    name: "Maison Verre",
    location: "Indiranagar, Bengaluru",
    city: "Bengaluru",
    type: "Commercial",
    bhk: "Commercial",
    area: "340 m²",
    style: "Contemporary",
    year: "2025",
    budgetTier: "Signature",
    desc: "A boutique creative studio and gallery — raw microcement, blackened steel framing, and a continuous wall of diffused glass.",
    shortHook: "An architectural gallery space where light meets raw craft.",
    plate: "light" as PlateKey,
    image: "/images/projects/maison-verre.png",
    gallery: [
      "/images/projects/maison-verre.png",
      "/images/rooms/living-room/5.png",
      "/images/rooms/study/3.png",
      "/images/rooms/dining/3.png",
      "/images/rooms/bath/4.png",
      "/images/rooms/entry/2.png",
      "/images/rooms/kitchen/4.png",
    ],
    narrative: {
      brief: "Transform an industrial warehouse unit into a serene architecture studio and private gallery.",
      concept: "Retain structural honesty while softening acoustic reverberation with warm oak and textured render.",
      execution: "Poured microcement floors with blackened steel partitions and custom magnetic track lighting.",
      quote: "A space that sharpens clarity and calms the creative mind.",
    },
    scope: [
      "Industrial Unit Turnkey Fitout",
      "Acoustic Ceiling Baffles & Glass Partitioning",
      "Microcement Floor Application (340 m²)",
      "Custom 12-Person Solid Oak Discussion Table",
      "Exhibition Track Lighting with DALI Dimming",
    ],
    materials: [
      { name: "Microcement", finish: "Industrial Matte Charcoal", role: "Monolithic Seamless Flooring" },
      { name: "Solid White Oak", finish: "Natural Soap Finish", role: "Work Tables & Display Islands" },
      { name: "Blackened Steel", finish: "Cold-Rolled Waxed", role: "Architectural Screen Framing" },
    ],
    timeline: "14 Weeks",
  },
  {
    n: "05",
    slug: "loft-at-atlas",
    name: "The Loft at Atlas",
    location: "Jubilee Hills, Hyderabad",
    city: "Hyderabad",
    type: "Residential",
    bhk: "3 BHK",
    area: "280 m²",
    style: "Industrial",
    year: "2024",
    budgetTier: "Essential",
    desc: "A full-floor residence designed around an exposed concrete and teak casework core. Minimal visual noise, maximum functional storage.",
    shortHook: "Clean urban loft living with a rich tactile heart.",
    plate: "section" as PlateKey,
    image: "/images/projects/loft-at-atlas.png",
    gallery: [
      "/images/projects/loft-at-atlas.png",
      "/images/rooms/living-room/6.png",
      "/images/rooms/kitchen/5.png",
      "/images/rooms/bedroom/4.png",
      "/images/rooms/dining/4.png",
      "/images/rooms/bath/5.png",
      "/images/rooms/entry/3.png",
    ],
    narrative: {
      brief: "Create an uncluttered, easy-to-maintain apartment for a busy young tech founder and their partner.",
      concept: "Consolidate all utilities and storage into a single central architectural spine, leaving the periphery completely open.",
      execution: "Custom flush joinery with hidden magnetic touch latches and durable matte sintered stone surfaces.",
      quote: "Everything has its exact place, and the home feels twice its real size.",
    },
    scope: [
      "Central Utility Core Construction",
      "Modular Kitchen with Concealed Appliance Garage",
      "Flush Floor-to-Ceiling Wardrobes",
      "Vitrified Large-Format Tile Flooring",
      "Smart Lighting Automation",
    ],
    materials: [
      { name: "Sintered Stone", finish: "Matte Basalt", role: "Kitchen Counters & Splashbacks" },
      { name: "BWR Plywood with Matte Laminate", finish: "Warm Cashmere", role: "Built-in Cabinetry" },
      { name: "Engineered Oak", finish: "UV Lacquer", role: "Bedroom Flooring" },
    ],
    timeline: "16 Weeks",
  },
  {
    n: "06",
    slug: "hotel-ombelle",
    name: "Hôtel Ombelle",
    location: "Assagao, Goa",
    city: "Goa",
    type: "Hospitality",
    bhk: "Commercial",
    area: "1,800 m²",
    style: "Luxury",
    year: "2024",
    budgetTier: "Bespoke",
    desc: "A tropical heritage boutique hotel featuring laterite stone courtyards, brass-accented suites, and breezy open-air dining pavilions.",
    shortHook: "Portuguese-Goan heritage reimagined through contemporary craft.",
    plate: "plan" as PlateKey,
    image: "/images/projects/hotel-ombelle.png",
    gallery: [
      "/images/projects/hotel-ombelle.png",
      "/images/rooms/living-room/7.png",
      "/images/rooms/bedroom/5.png",
      "/images/rooms/bath/6.png",
      "/images/rooms/dining/5.png",
      "/images/rooms/study/4.png",
      "/images/rooms/entry/4.png",
    ],
    narrative: {
      brief: "Restore an 80-year-old Indo-Portuguese estate into a 14-suite boutique luxury retreat.",
      concept: "Celebrate regional masonry and vintage timber work while introducing modern climate control and spa suites.",
      execution: "Exposed local red laterite stone paired with hand-cast terrazzo tiles and reclaimed teak roof trusses.",
      quote: "Lumière captured the soul of Goa without leaning on colonial clichés.",
    },
    scope: [
      "Heritage Adaptive Reuse Architecture",
      "14 Bespoke Suite Interiors & En-Suites",
      "Handcrafted Terrazzo Pattern Floor Installations",
      "Custom Brass Wet-Bar & Vanity Joinery",
      "Landscape & Pavilion Lighting Choreography",
    ],
    materials: [
      { name: "Red Laterite Stone", finish: "Natural Dressed", role: "Courtyard Walls & Verandas" },
      { name: "Handmade Terrazzo", finish: "Polished Mustard & Jade", role: "Suite Flooring" },
      { name: "Reclaimed Burmese Teak", finish: "Hand-Waxed", role: "Heritage Doors & Rafters" },
    ],
    timeline: "36 Weeks",
  },
];

export const projectFilters = [
  "All",
  "1 BHK",
  "2 BHK",
  "3 BHK",
  "4 BHK",
  "Villa",
  "Commercial",
];

/* ── Pricing Packages Matrix ──────────────────────────────────────────── */

export interface PricingTier {
  id: string;
  name: string;
  tagline: string;
  priceStarting: string;
  priceUnit: string;
  ratePerSqFt: number;
  featured?: boolean;
  description: string;
  idealFor: string;
  features: string[];
  specs: {
    cabinetryCore: string;
    finishes: string;
    countertops: string;
    hardware: string;
    lighting: string;
    warranty: string;
    projectLead: string;
  };
}

export const pricingPackages: PricingTier[] = [
  {
    id: "essential",
    name: "Essential",
    tagline: "Smart, refined spaces with high-durability modern materials.",
    priceStarting: "₹1,800",
    priceUnit: "per sq. ft",
    ratePerSqFt: 1800,
    featured: false,
    description: "Designed for modern apartments seeking clean architectural lines, optimized storage, and dependable build quality.",
    idealFor: "1 BHK & 2 BHK Apartments · Rental Investments · Clean Minimalist Homes",
    features: [
      "Complete 2D drawings & layout planning",
      "BWR Grade Commercial Plywood carcasses",
      "Branded 1mm matte laminates (Merino / Century)",
      "Soft-close Hettich / Ebco hardware mechanisms",
      "Layered warm LED lighting design",
      "Turnkey site coordination & weekly updates",
    ],
    specs: {
      cabinetryCore: "BWR Grade Commercial Plywood",
      finishes: "Premium 1mm Anti-Fingerprint Matte Laminates",
      countertops: "Engineered Quartz or Polished Granite",
      hardware: "Hettich / Ebco Soft-Close Hinges & Channels",
      lighting: "Warm 3000K Recessed Architectural Coves",
      warranty: "5-Year Woodwork Warranty",
      projectLead: "Dedicated Project Manager & Site Engineer",
    },
  },
  {
    id: "signature",
    name: "Signature",
    tagline: "Bespoke millwork, natural veneers, and curated light.",
    priceStarting: "₹2,800",
    priceUnit: "per sq. ft",
    ratePerSqFt: 2800,
    featured: true,
    description: "Our most chosen studio tier — custom floor-to-ceiling joinery, rich timber veneers, and thoughtful acoustic comfort.",
    idealFor: "3 BHK & 4 BHK Residences · Premium City Penthouses · Turnkey Family Homes",
    features: [
      "Photoreal 3D visualization & VR walkthrough",
      "Marine Grade BWP (IS:710) plywood joinery",
      "Natural smoked oak / walnut veneer feature walls",
      "Blum Austria concealed runner & lift systems",
      "Seamless quartz countertops with waterfall edges",
      "Architectural recessed profile & magnetic track lighting",
      "10-Year Comprehensive Woodwork Warranty",
    ],
    specs: {
      cabinetryCore: "Marine Grade BWP (IS:710) Calibrated Core",
      finishes: "Natural Smoked Oak / Walnut Veneers & Fluted Panelling",
      countertops: "Imported Quartz (Kalinga / Caesarstone) or Honed Marble",
      hardware: "Blum Austria Aventos & Tandembox Full-Extension",
      lighting: "Magnetic Low-Glare Track Lighting & Concealed Indirect Coves",
      warranty: "10-Year Comprehensive Woodwork Warranty",
      projectLead: "Senior Project Architect & Dedicated Site Supervisor",
    },
  },
  {
    id: "bespoke",
    name: "Bespoke",
    tagline: "Couture architecture, imported stone, and rare artisan craft.",
    priceStarting: "₹4,500",
    priceUnit: "per sq. ft",
    ratePerSqFt: 4500,
    featured: false,
    description: "Uncompromised custom luxury. Handcrafted solid brass, imported Italian marble, and personal 1-on-1 direction from our principal.",
    idealFor: "Luxury Villas · Triplex Penthouses · Flagship Boutiques · Discerning Collectors",
    features: [
      "1-on-1 direction by Principal Designer Aria Moreau",
      "Imported Italian Statuario / Travertine stone masonry",
      "Handcrafted unlacquered solid brass architectural hardware",
      "Smart motorized lighting, HVAC & drape automation (DALI / Lutron)",
      "Curated custom loose furniture design & artisan textile sourcing",
      "White-glove 100-point audit & lifetime maintenance priority",
    ],
    specs: {
      cabinetryCore: "Marine BWP with Solid Hardwood Lippings & Veneered Interiors",
      finishes: "Hand-Polished Natural Veneers, Microcement & Leather Insets",
      countertops: "Italian Statuario / Nero Marquina Bookmatched Slabs",
      hardware: "Bespoke Solid Brass & Custom CNC Knurled Pulls",
      lighting: "Smart DALI / Lutron Tunable Architectural Scene System",
      warranty: "10-Year Extended Warranty + Lifetime Priority Care",
      projectLead: "Principal Designer Aria Moreau & Studio Master Builder",
    },
  },
];

/* ── Shop the Look (Curated Pieces) ───────────────────────────────────── */

export interface ShopItem {
  id: string;
  name: string;
  category: "Seating" | "Tables" | "Lighting" | "Decor";
  featuredIn: string;
  priceEstimate: string;
  dimensions: string;
  materials: string;
  leadTime: string;
  image: string;
  description: string;
}

export const shopItems: ShopItem[] = [
  {
    id: "meridian-travertine-table",
    name: "Meridian Cocktail Table",
    category: "Tables",
    featuredIn: "Villa Meridian, Palm Springs",
    priceEstimate: "₹1,45,000",
    dimensions: "140 cm × 80 cm × 36 cm",
    materials: "Honed Roman Travertine, Solid Smoked Oak Base",
    leadTime: "4–6 Weeks (Handcrafted)",
    image: "/images/rooms/living-room/1.png",
    description: "A monolithic low table celebrating the organic voids and creamy warmth of unfilled Roman travertine, resting on shadow-recessed oak runners.",
  },
  {
    id: "fluted-walnut-credenza",
    name: "Atlas Fluted Credenza",
    category: "Tables",
    featuredIn: "The Loft at Atlas, New York",
    priceEstimate: "₹2,10,000",
    dimensions: "200 cm × 50 cm × 75 cm",
    materials: "American Walnut, Nero Marquina Marble Top, Brass Feet",
    leadTime: "5–6 Weeks",
    image: "/images/rooms/dining/1.png",
    description: "Precision CNC-fluted solid timber tambour doors gliding seamlessly to reveal leather-lined interior storage drawers and integrated wire management.",
  },
  {
    id: "lumiere-boucle-armchair",
    name: "Sérénité Bouclé Lounge Chair",
    category: "Seating",
    featuredIn: "The Lightwell Penthouse, Delhi",
    priceEstimate: "₹95,000",
    dimensions: "88 cm × 85 cm × 72 cm",
    materials: "Heavy French Bouclé, Internal Hardwood Frame, Brass Base",
    leadTime: "3–4 Weeks",
    image: "/images/rooms/bedroom/1.png",
    description: "Sculptural organic curves upholstered in rich textured ecru bouclé, engineered for deep restorative reading and conversation.",
  },
  {
    id: "brass-clerestory-sconce",
    name: "Clerestory Fluted Wall Sconce",
    category: "Lighting",
    featuredIn: "Courtyard House, Mumbai",
    priceEstimate: "₹38,000",
    dimensions: "15 cm × 12 cm × 55 cm",
    materials: "Solid Brushed Brass, Low-Iron Reeded Glass, 2700K Warm LED",
    leadTime: "2–3 Weeks",
    image: "/images/rooms/bath/1.png",
    description: "Cast brass linear sconce casting soft bi-directional architectural grazing light across textured plaster and stone walls.",
  },
  {
    id: "monolithic-stone-vessel",
    name: "Canyon Sculptural Vessel",
    category: "Decor",
    featuredIn: "Villa Meridian",
    priceEstimate: "₹28,000",
    dimensions: "35 cm × 35 cm × 48 cm",
    materials: "Hand-Carved Sandstone, Raw Chiseled Finish",
    leadTime: "In Stock (Ready to Dispatch)",
    image: "/images/rooms/entry/1.png",
    description: "Individually hand-chiseled from a single block of desert sandstone, capturing architectural shadows on entrance consoles and plinths.",
  },
  {
    id: "verre-dining-table",
    name: "Monolith Oak Dining Table",
    category: "Tables",
    featuredIn: "Maison Verre",
    priceEstimate: "₹2,60,000",
    dimensions: "260 cm × 105 cm × 76 cm",
    materials: "Solid White Oak, Natural Soap Finish",
    leadTime: "6 Weeks",
    image: "/images/rooms/dining/2.png",
    description: "A commanding eight-to-ten seater dining table anchored on twin chamfered timber plinths with a 45mm bullnose top.",
  },
];

/* ── FAQ System ───────────────────────────────────────────────────────── */

export interface FAQItem {
  id: string;
  category: "Process & Workflow" | "Pricing & Commercial" | "Timelines & Delivery" | "Warranty & Quality" | "Locations";
  question: string;
  answer: string;
}

export const faqs: FAQItem[] = [
  {
    id: "faq-1",
    category: "Process & Workflow",
    question: "How does the design consultation and project kickoff work?",
    answer: "Every engagement begins with an on-site spatial survey and brief consultation. We measure your property, map light choreographies, understand lifestyle routines, and prepare a written scope brief before creating photoreal 3D renders and detailed technical drawings.",
  },
  {
    id: "faq-2",
    category: "Process & Workflow",
    question: "Do you handle turnkey execution or only design drawings?",
    answer: "Lumière Interiors operates as a single accountable end-to-end design and build studio. We supervise every carpenter, stone mason, electrician, and finisher directly on-site to ensure drawings match reality down to the last millimetre.",
  },
  {
    id: "faq-3",
    category: "Pricing & Commercial",
    question: "What is your pricing structure and how do payment milestones work?",
    answer: "We quote transparent Fixed-Scope BOQs based on property square footage and material tier (Essential from ₹1,800/sq.ft, Signature from ₹2,800/sq.ft, Bespoke from ₹4,500/sq.ft). Payments are split into 10% booking deposit, 40% drawings/3D approval, 40% on-site progress execution, and 10% final signoff balance.",
  },
  {
    id: "faq-4",
    category: "Pricing & Commercial",
    question: "Are there any hidden costs or surprise markups during construction?",
    answer: "No. Our BOQs are comprehensive, itemized, and fixed before manufacturing starts. Any client-requested scope alterations are documented and approved via formal change orders prior to execution.",
  },
  {
    id: "faq-5",
    category: "Timelines & Delivery",
    question: "How long does a full home interior project typically take?",
    answer: "A standard 2BHK to 3BHK takes 16 to 20 weeks from brief signoff to final handover. Larger villas and bespoke penthouses take 22 to 26 weeks. We back our schedules with an on-time handover guarantee.",
  },
  {
    id: "faq-6",
    category: "Warranty & Quality",
    question: "What warranty and post-handover support do you provide?",
    answer: "All custom cabinetry, wardrobes, and modular joinery are covered by our 10-Year Comprehensive Woodwork Warranty. Hardware mechanisms carry brand warranties (up to 15 years for Blum/Hettich), and our team conducts a complimentary 6-month post-handover inspection.",
  },
  {
    id: "faq-7",
    category: "Locations",
    question: "Which cities does Lumière Interiors currently serve?",
    answer: "We maintain active design ateliers and on-site project teams across Mumbai, New Delhi / NCR, Bengaluru, Hyderabad, and Goa, with select destination villa commissions undertaken nationwide.",
  },
];

/* ── Location SEO Data ────────────────────────────────────────────────── */

export interface LocationInfo {
  slug: string;
  city: string;
  country: string;
  address: string;
  phone: string;
  email: string;
  tagline: string;
  localStory: string;
  heroImage: string;
  projectsCount: number;
  featuredProjects: string[];
  localAreas: string[];
  reviews: Array<{ name: string; area: string; quote: string; rating: number }>;
}

export const locationsData: Record<string, LocationInfo> = {
  mumbai: {
    slug: "mumbai",
    city: "Mumbai",
    country: "India",
    address: "Waterfield Road, Bandra West, Mumbai 400050",
    phone: "+91 22 6902 4400",
    email: "mumbai@lumiere-interiors.studio",
    tagline: "Coastal light, sea-air materials, and generous spatial planning.",
    localStory: "From heritage sea-facing Bandra apartments to high-rise duplex penthouses in Worli and Juhu, our Mumbai studio crafts homes that filter out urban hustle while letting coastal breeze and warmth flow freely.",
    heroImage: "/images/projects/courtyard-house.png",
    projectsCount: 42,
    featuredProjects: ["courtyard-house", "villa-meridian"],
    localAreas: ["Bandra West", "Juhu", "Worli", "Pali Hill", "Cuffe Parade", "BKC", "Lower Parel"],
    reviews: [
      {
        name: "Rohit & Meera Singhal",
        area: "Pali Hill, Bandra",
        quote: "Our Bandra home has become a true oasis. The acoustic glazing and teak woodwork completely insulate us from the street.",
        rating: 5,
      },
    ],
  },
  delhi: {
    slug: "delhi",
    city: "New Delhi",
    country: "India",
    address: "Golf Course Road, DLF Phase 5, Gurugram / New Delhi 122002",
    phone: "+91 11 4105 8820",
    email: "delhi@lumiere-interiors.studio",
    tagline: "Monolithic proportions, courtyard warmth, and refined acoustic comfort.",
    localStory: "In Delhi NCR, our projects celebrate volumetric scale, daylight-funnelling lightwells, and rich tactile stone palettes designed to stay cool in summer and cozy in winter.",
    heroImage: "/images/projects/lightwell-penthouse.png",
    projectsCount: 36,
    featuredProjects: ["lightwell-penthouse", "loft-at-atlas"],
    localAreas: ["Golf Course Road", "Vasant Vihar", "Sundar Nagar", "Chanakyapuri", "DLF Camellias", "Greater Kailash"],
    reviews: [
      {
        name: "Vikram & Suniti Ahuja",
        area: "Golf Course Road",
        quote: "The 3D walkthrough was identical to what was handed over on day one. Flawless execution and zero budget creep.",
        rating: 5,
      },
    ],
  },
  bengaluru: {
    slug: "bengaluru",
    city: "Bengaluru",
    country: "India",
    address: "100ft Road, Indiranagar, Bengaluru 560038",
    phone: "+91 80 4220 1190",
    email: "bengaluru@lumiere-interiors.studio",
    tagline: "Biophilic greenery, warm oak joinery, and indoor-outdoor living.",
    localStory: "Bengaluru's temperate climate invites seamless transitions between garden terraces and internal living rooms. We design with raw microcement, fluted glass, and sustainable timbers.",
    heroImage: "/images/projects/maison-verre.png",
    projectsCount: 28,
    featuredProjects: ["maison-verre", "courtyard-house"],
    localAreas: ["Indiranagar", "Koramangala", "Sadashivanagar", "Lavelle Road", "Whitefield", "Sarjapur"],
    reviews: [
      {
        name: "Arjun Nambiar",
        area: "Indiranagar",
        quote: "Lumière's attention to light and joinery details transformed our duplex into an effortless modern haven.",
        rating: 5,
      },
    ],
  },
  hyderabad: {
    slug: "hyderabad",
    city: "Hyderabad",
    country: "India",
    address: "Road No. 36, Jubilee Hills, Hyderabad 500033",
    phone: "+91 40 6811 7740",
    email: "hyderabad@lumiere-interiors.studio",
    tagline: "Granite masonry, expansive villa proportions, and grand entertaining suites.",
    localStory: "Serving Jubilee Hills, Banjara Hills, and HITEC City, our Hyderabad practice designs luxury villas and modern urban lofts that balance grandeur with intimate craftsmanship.",
    heroImage: "/images/projects/loft-at-atlas.png",
    projectsCount: 22,
    featuredProjects: ["loft-at-atlas", "villa-meridian"],
    localAreas: ["Jubilee Hills", "Banjara Hills", "Financial District", "Madhapur", "Gachibowli"],
    reviews: [
      {
        name: "Divya & Krishna Rao",
        area: "Jubilee Hills",
        quote: "From custom Italian marble counters to our acoustic library, every square foot feels purposeful.",
        rating: 5,
      },
    ],
  },
  goa: {
    slug: "goa",
    city: "Goa",
    country: "India",
    address: "Assagao Badem Road, Assagao, Goa 403507",
    phone: "+91 832 290 3310",
    email: "goa@lumiere-interiors.studio",
    tagline: "Laterite courtyards, reclaimed teak timbers, and tropical modernism.",
    localStory: "Specializing in Portuguese villa restorations and luxury coastal holiday homes across North and South Goa, we blend regional artisanal masonry with world-class contemporary comforts.",
    heroImage: "/images/projects/hotel-ombelle.png",
    projectsCount: 18,
    featuredProjects: ["hotel-ombelle", "villa-meridian"],
    localAreas: ["Assagao", "Siolim", "Anjuna", "Moira", "Candolim", "Aldona"],
    reviews: [
      {
        name: "Camille & Philippe Laurent",
        area: "Assagao",
        quote: "Our holiday villa was executed completely while we were abroad. Weekly video logs and transparent timelines made it stress-free.",
        rating: 5,
      },
    ],
  },
};

export const locations = [
  { city: "Mumbai", country: "India", projects: 42 },
  { city: "New Delhi", country: "India", projects: 36 },
  { city: "Bengaluru", country: "India", projects: 28 },
  { city: "Hyderabad", country: "India", projects: 22 },
  { city: "Goa", country: "India", projects: 18 },
  { city: "Los Angeles", country: "United States", projects: 18 },
  { city: "Lyon", country: "France", projects: 8 },
];

/* ── Why Choose Us ────────────────────────────────────────────────────── */

export const whyChooseUs = [
  {
    n: "01",
    title: "Personalized Design",
    desc: "No templates. Every design is born from your brief, your lifestyle and your space.",
  },
  {
    n: "02",
    title: "One Team, End to End",
    desc: "Design through execution, one accountable studio — no finger-pointing between designers and contractors.",
  },
  {
    n: "03",
    title: "Transparent Pricing",
    desc: "Detailed quotes before work begins. No hidden costs, no surprise invoices.",
  },
  {
    n: "04",
    title: "Quality Materials",
    desc: "Sourced from trusted suppliers, specified for longevity — not just how they photograph on day one.",
  },
  {
    n: "05",
    title: "Detailed Execution",
    desc: "Every joint, every finish, every millimetre matters. We supervise every stage of the build.",
  },
  {
    n: "06",
    title: "Reliable Timelines",
    desc: "A schedule that holds. Weekly updates, milestone tracking, and a handover date you can count on.",
  },
];

/* ── About ────────────────────────────────────────────────────────────── */

export const about = {
  story:
    "Lumière Interiors was founded in 2012 with a simple conviction: a space should be felt before it is seen. What began as a two-person practice has grown into a studio of architects, interior designers and master builders who share one belief — that good design is an act of attention, not decoration.",
  philosophy:
    "We don't chase trends. We study proportion, material and light until a room feels inevitable — as though it could not have been any other way. Our work is guided by function first, form always, and an obsession with the details that separate a designed space from a decorated one.",
  mission:
    "To create interiors that hold the shape of the people who live in them — spaces that feel personal, considered and built to endure.",
  approach:
    "Every project begins with listening. We map how you move through your day, what you see when you wake, where light falls at four in the afternoon. From that understanding, we design rooms that work as beautifully as they look.",
  stats: [
    { value: "2012", label: "Founded" },
    { value: "140+", label: "Projects Completed" },
    { value: "8+", label: "Cities" },
    { value: "22", label: "Architects & Craftspeople" },
  ],
};

/* ── Team ─────────────────────────────────────────────────────────────── */

export const team = [
  {
    name: "Aria Moreau",
    role: "Founder & Principal Architect",
    desc: "A trained architect with 18 years of experience spanning residential, hospitality and commercial interiors across three continents.",
  },
  {
    name: "Daniel Kirchner",
    role: "Head of Design & Joinery",
    desc: "Former furniture maker turned spatial designer — obsessed with joinery, proportion and the moment a room comes together.",
  },
  {
    name: "Priya Sharma",
    role: "Senior Interior Designer",
    desc: "Specializes in material-rich residential projects — layering texture, colour and light into rooms that feel warm and considered.",
  },
  {
    name: "Léa Fontaine",
    role: "Director of Project Delivery",
    desc: "The person who ensures every project stays on brief, on time and on budget — the calm at the centre of every build.",
  },
];

/* ── Testimonials ─────────────────────────────────────────────────────── */

export * from "./testimonials-data";

/* ── Blog / Journal (Categorized) ─────────────────────────────────────── */

export const blogCategories = [
  "All",
  "Design Tips",
  "Materials Guide",
  "Trends",
  "Case Studies",
] as const;

export type BlogCategory = (typeof blogCategories)[number];

export interface JournalArticle {
  slug: string;
  title: string;
  category: "Design Tips" | "Materials Guide" | "Trends" | "Case Studies";
  date: string;
  readTime: string;
  author: string;
  excerpt: string;
  heroImage: string;
  content: {
    introduction: string;
    sections: Array<{ heading: string; body: string }>;
    quote: string;
    takeaways: string[];
  };
}

export const blogPosts: JournalArticle[] = [
  {
    slug: "modern-2bhk-interior-ideas",
    title: "Modern 2BHK Interior Ideas That Maximise Every Square Metre",
    category: "Design Tips",
    date: "February 14, 2026",
    readTime: "5 min read",
    author: "Aria Moreau, Principal Architect",
    excerpt: "Small homes deserve big thinking. We break down layout strategies that make a 2BHK feel generous without adding a single wall.",
    heroImage: "/images/rooms/living-room/1.png",
    content: {
      introduction:
        "Designing a 2BHK apartment is not about shrinking full-scale villa furniture to fit smaller rooms. It is an exercise in spatial intelligence — discovering how light, proportion, and continuous material transitions can turn 90 square metres into an expansive, uncluttered home.",
      sections: [
        {
          heading: "01. Establish Uninterrupted Sightlines",
          body: "When entering a compact home, the eye should meet continuous plane transitions rather than immediate wall partitions. Using low-profile credenzas, pocketing glass doors, and unified travertine floor tiles allows visual depth to extend uninterrupted across living and dining zones.",
        },
        {
          heading: "02. Millwork That Disappears Into the Shell",
          body: "Standard freestanding wardrobes fragment small rooms. By engineering full-height floor-to-ceiling cabinetry painted to match the adjacent lime-plaster wall tone, storage capacity doubles while visual bulk completely vanishes into the background.",
        },
        {
          heading: "03. Layered Cove & Architectural Lighting",
          body: "Single central ceiling lights flatten small spaces and create harsh shadows. Perimeter warm LED coves and indirect low-level wash lighting visually push ceiling planes upward, giving compact rooms volumetric depth after dusk.",
        },
      ],
      quote: "Space is created not by adding square metres, but by eliminating visual friction.",
      takeaways: [
        "Use monolithic neutral floor finishes across all living and circulation zones.",
        "Integrate handleless full-height millwork flush with wall surfaces.",
        "Replace solid partition walls with reeded glass or open timber dividers.",
      ],
    },
  },
  {
    slug: "choosing-laminates-material-guide",
    title: "The Studio Guide to Specifying Laminates, Veneers & Sintered Stone",
    category: "Materials Guide",
    date: "January 28, 2026",
    readTime: "7 min read",
    author: "Daniel Kirchner, Head of Joinery",
    excerpt: "Understand core board substrates, moisture ratings, and tactile finishes before committing your joinery budget.",
    heroImage: "/images/rooms/kitchen/2.png",
    content: {
      introduction:
        "Cabinetry finishes make up over 40% of a residential interior's visual surface. Choosing between anti-fingerprint laminates, natural timber veneers, and sintered quartz requires understanding tactile character, durability against humidity, and aging patina.",
      sections: [
        {
          heading: "01. Core Plywood: Why Calibrated BWR & BWP Matter",
          body: "Never compromise on the internal carcass. Calibrated Marine BWP (IS:710) plywood ensures zero thickness variation and prevents shutter warping, especially in tropical humid climates like Mumbai or Goa.",
        },
        {
          heading: "02. Natural Veneer vs High-Pressure Laminates",
          body: "Veneers bring organic wood grain warmth and dignity that ages gracefully with oil finishes. For heavy-traffic zones like kitchen base cabinets, zero-reflection matte acrylics or 1mm laminates offer scratch-free longevity.",
        },
        {
          heading: "03. Stone Countertops: Quartz vs Honed Granite",
          body: "While polished marble makes exquisite vanity feature walls, kitchen worktops demand stain-resistant quartz or leathered South Indian granite that withstands turmeric and citrus acids effortlessly.",
        },
      ],
      quote: "A true material does not disguise itself — it performs its role with quiet integrity.",
      takeaways: [
        "Specify IS:710 Marine Grade plywood for all wet areas and kitchen carcasses.",
        "Pair natural oak veneers on upper walls with durable quartz surfaces at counter level.",
        "Opt for honed or leathered stone finishes rather than high-gloss polish for a contemporary touch.",
      ],
    },
  },
  {
    slug: "quiet-luxury-interior-trends-2026",
    title: "Quiet Luxury in Architecture: The End of Gloss and the Rise of Tactility",
    category: "Trends",
    date: "January 15, 2026",
    readTime: "6 min read",
    author: "Priya Sharma, Senior Interior Designer",
    excerpt: "Why high-contrast gloss is receding in favor of microcement, hand-troweled lime plaster, and honest unlacquered brass.",
    heroImage: "/images/rooms/dining/1.png",
    content: {
      introduction:
        "The era of ostentatious gold trim and shiny surfaces has given way to 'quiet luxury' — interiors defined by acoustic calm, seamless architectural plaster, and organic materials that reward touch rather than social media feeds.",
      sections: [
        {
          heading: "01. Monolithic Plaster & Mineral Washes",
          body: "Lime wash and breathable mineral plasters absorb light gently, eliminating harsh glare and creating a velvety atmospheric envelope across living rooms.",
        },
        {
          heading: "02. The Patina of Living Metals",
          body: "Unlacquered brass and blackened bronze hardware develop a rich natural oxidation from human touch, grounding a home in authentic craft.",
        },
        {
          heading: "03. Acoustic Proportion",
          body: "True luxury is quiet. Micro-perforated timber acoustic panels and layered linen draperies eliminate harsh echo, creating spaces that feel instantly grounding.",
        },
      ],
      quote: "Luxury is not what you add; it is the visual and acoustic peace you preserve.",
      takeaways: [
        "Replace cold white emulsion paints with tinted lime plaster washes.",
        "Incorporate unlacquered living metal hardware that develops natural character.",
        "Prioritize acoustic softening through textiles, area rugs, and fluted joinery.",
      ],
    },
  },
  {
    slug: "courtyard-house-case-study",
    title: "Case Study: Inside the Transformation of the Bandra Courtyard House",
    category: "Case Studies",
    date: "January 04, 2026",
    readTime: "8 min read",
    author: "Aria Moreau & Daniel Kirchner",
    excerpt: "How an outdated dark 4BHK apartment in Mumbai was transformed into an airy coastal sanctuary organized around an internal atrium.",
    heroImage: "/images/projects/courtyard-house.png",
    content: {
      introduction:
        "When our clients acquired their 380-square-metre flat in Bandra West, it was a maze of dark corridors and low false ceilings. Here is how we reorganized the entire floorplan to harvest sea air and natural light.",
      sections: [
        {
          heading: "01. Demolishing Non-Structural Partitions",
          body: "We stripped the apartment back to its structural concrete frame, opening up a 14-metre continuous axial living corridor extending from east to west.",
        },
        {
          heading: "02. The Central Internal Courtyard",
          body: "By enclosing the internal lightwell with acoustic teak louvres and Kota stone planters, we created a restorative green core that cools the entire home naturally.",
        },
        {
          heading: "03. Turnkey On-Site Execution",
          body: "Delivered in 20 weeks on an exact Fixed-Scope BOQ, with all joinery fabricated off-site to reduce dust and noise for neighboring residents.",
        },
      ],
      quote: "The project proves that city living does not have to mean sacrificing silence or nature.",
      takeaways: [
        "Open axial floorplans double perceived square footage.",
        "Internal green courtyards act as natural air purifiers and thermal buffers.",
        "Pre-fabricated off-site millwork accelerates handover by over 6 weeks.",
      ],
    },
  },
];

/* ── Cost Calculator Config ───────────────────────────────────────────── */

export const costCalculator = {
  propertyTypes: ["1 BHK", "2 BHK", "3 BHK", "4 BHK", "Villa", "Commercial"],
  designStyles: ["Modern", "Minimal", "Contemporary", "Luxury", "Industrial", "Traditional", "Modern Indian"],
  budgetRanges: ["Essential", "Signature", "Bespoke"],
  styleRates: {
    Modern: { Essential: 1800, Signature: 2800, Bespoke: 4200 },
    Minimal: { Essential: 1600, Signature: 2600, Bespoke: 3800 },
    Contemporary: { Essential: 2000, Signature: 3000, Bespoke: 4500 },
    Luxury: { Essential: 2500, Signature: 3800, Bespoke: 5500 },
    Industrial: { Essential: 1700, Signature: 2700, Bespoke: 4000 },
    Traditional: { Essential: 2200, Signature: 3200, Bespoke: 4800 },
    "Modern Indian": { Essential: 2100, Signature: 3100, Bespoke: 4600 },
  } as Record<string, Record<string, number>>,
  areaRanges: {
    "1 BHK": [450, 700],
    "2 BHK": [700, 1150],
    "3 BHK": [1150, 1850],
    "4 BHK": [1850, 2800],
    Villa: [2800, 6500],
    Commercial: [1000, 12000],
  } as Record<string, [number, number]>,
  breakdownPercentages: {
    joineryMillwork: 0.42,
    civilFlooringCeilings: 0.22,
    lightingElectrical: 0.14,
    softFurnishingDecor: 0.12,
    designProjectSupervision: 0.10,
  },
};


/* ── Homepage Exclusive Modules ───────────────────────────────────────── */

export const signatureWorks = [
  {
    n: "I",
    title: "The Courtyard House",
    location: "Bandra, Mumbai",
    year: "2025",
    type: "Residence",
    note: "A house arranged around weather.",
    detail:
      "Rooms open to the rain court in the wet season and fold shut for the afternoon sun — the plan is the climate, and the walls are simply its instrument.",
    plate: "arch" as PlateKey,
  },
  {
    n: "II",
    title: "The Lightwell Penthouse",
    location: "New Delhi",
    year: "2024",
    type: "Residence",
    note: "A single clerestory, three floors of it.",
    detail:
      "One slot of sky carved through the whole section, so the afternoon sun lands somewhere new in the room each hour and never stays long enough to bore.",
    plate: "light" as PlateKey,
  },
  {
    n: "III",
    title: "The Gallery on Rue Vieille",
    location: "Lyon, France",
    year: "2024",
    type: "Cultural",
    note: "Whitewashed plaster, unlit.",
    detail:
      "The collection supplies the colour; the room supplies only the quiet. A low, even light from one north wall, and nothing to argue with the work.",
    plate: "section" as PlateKey,
  },
];

export const rooms = [
  {
    slug: "living-room",
    title: "Living Room",
    line: "Furniture set for conversation, a hearth of light, nothing that shouts.",
    plate: "plan" as PlateKey,
    feature: true,
    image: "/images/rooms/living-room.png",
  },
  {
    slug: "kitchen",
    title: "Kitchen",
    line: "Workflows measured in steps, not square feet — cooking choreographed.",
    plate: "section" as PlateKey,
    image: "/images/rooms/kitchen.png",
  },
  {
    slug: "bedroom",
    title: "Bedroom",
    line: "A room that holds rest; storage that disappears into the walls.",
    plate: "light" as PlateKey,
    image: "/images/rooms/bedroom.png",
  },
  {
    slug: "dining",
    title: "Dining",
    line: "The table anchored, the ceiling low enough to feel gathered.",
    plate: "arch" as PlateKey,
    image: "/images/rooms/dining.png",
  },
  {
    slug: "study",
    title: "Study",
    line: "A desk at the window, a wall of reference, silence by design.",
    plate: "plan" as PlateKey,
    image: "/images/rooms/study.png",
  },
  {
    slug: "bath",
    title: "Bath",
    line: "Stone, steam, and a single shaft of light — the smallest room, the longest stays.",
    plate: "section" as PlateKey,
    image: "/images/rooms/bath.png",
  },
  {
    slug: "entry",
    title: "Entry",
    line: "The first room is a threshold — it sets the register for the rest.",
    plate: "arch" as PlateKey,
    image: "/images/rooms/entry.png",
  },
];

export const roomDetails: Record<
  string,
  {
    slug: string;
    title: string;
    tagline: string;
    subtitle: string;
    heroImage: string;
    specifications: {
      type: string;
      location: string;
      area: string;
      year: string;
      style: string;
      materials: string;
      lighting: string;
      furniture: string;
      approach: string;
    };
    caseStudy: {
      type: string;
      approach: string;
      materials: string;
      lighting: string;
      furniture: string;
      concept: string;
    };
    gallery: Array<{ src: string; caption: string; alt: string }>;
    materialsPalette: Array<{ name: string; type: string; desc: string; image: string }>;
    lightingStory: {
      title: string;
      daylight: string;
      afternoon: string;
      evening: string;
    };
    detailsCraftsmanship: Array<{ title: string; desc: string; image: string }>;
    story: {
      idea: string;
      materials: string;
      light: string;
      details: string;
    };
    finalStatement: {
      quote: string;
      image: string;
    };
  }
> = {
  "living-room": {
    slug: "living-room",
    title: "Living Room",
    tagline: "THE HEARTH OF CONVERSATION",
    subtitle: "A refined living environment shaped around proportion, natural light and quiet architectural luxury.",
    heroImage: "/images/rooms/living-room.png",
    specifications: {
      type: "Residential Living Suite",
      location: "Palm Springs, CA",
      area: "140 m²",
      year: "2025",
      style: "Warm Contemporary Minimal",
      materials: "Italian Travertine, Smoked Walnut, Textured Bouclé, Brushed Bronze",
      lighting: "Concealed Perimeter Cove, Soft Diffused Pendants, Direct Window Light",
      furniture: "Custom Low-Profile Sectional, Sculptural Bronze Coffee Table",
      approach: "Framing space around human gesture and light, eliminating decorative clutter.",
    },
    caseStudy: {
      type: "Residential Living Suite",
      approach: "Spatial & Architectural Editing",
      materials: "Italian Travertine, Smoked Walnut, Textured Bouclé, Brushed Bronze",
      lighting: "Concealed Perimeter LED, Soft Diffused Pendants, Direct Window Daylight",
      furniture: "Custom Low-Profile Sectional, Sculptural Bronze Coffee Table",
      concept: "Framing space around human gesture and light, eliminating decorative clutter.",
    },
    gallery: [
      { src: "/images/rooms/living-room/1.png", caption: "Establishing wide architectural view framed by travertine feature wall", alt: "Living room wide angle" },
      { src: "/images/rooms/living-room/2.png", caption: "Seating lounge with bespoke bouclé sofa and afternoon light", alt: "Seating area" },
      { src: "/images/rooms/living-room/3.png", caption: "Custom hearth detailing integrated into book-matched stone", alt: "Fireplace detail" },
      { src: "/images/rooms/living-room/4.png", caption: "Material joinery transition between walnut panelling and limestone", alt: "Material joinery" },
      { src: "/images/rooms/living-room/5.png", caption: "Evening lighting atmosphere with perimeter cove glow", alt: "Evening atmosphere" },
      { src: "/images/rooms/living-room/6.png", caption: "Architectural perspective towards full-height floor glazing", alt: "Glazing perspective" },
      { src: "/images/rooms/living-room/7.png", caption: "Bespoke lounge chair in charcoal shearling and low walnut side table", alt: "Lounge chair" },
      { src: "/images/rooms/living-room/8.png", caption: "Integrated media wall with concealed sliding acoustic panels", alt: "Media wall" },
      { src: "/images/rooms/living-room/9.png", caption: "Close-up of hand-honed travertine texture and flush shadow gap", alt: "Travertine detail" },
      { src: "/images/rooms/living-room/10.png", caption: "Dusk perspective showing warm interior glow against city skyline", alt: "Dusk perspective" },
    ],
    materialsPalette: [
      { name: "Italian Travertine", type: "Natural Stone", desc: "Honed porous surface capturing natural sunlight softly.", image: "/images/rooms/living-room/1.png" },
      { name: "Smoked Walnut", type: "Architectural Timber", desc: "Deep warm grain providing acoustic dampening and warmth.", image: "/images/rooms/living-room/4.png" },
      { name: "Textured Bouclé", type: "Textile", desc: "Tactile wool weave upholstery engineered for extended seating.", image: "/images/rooms/living-room/2.png" },
      { name: "Brushed Bronze", type: "Hardware & Metal", desc: "Unlacquered metallic detail that ages into a rich patina.", image: "/images/rooms/living-room/9.png" },
    ],
    lightingStory: {
      title: "Natural Daylight & Cove Scenography",
      daylight: "Floor-to-ceiling glass admits direct morning sun, creating dynamic shadow patterns across limestone floor slabs.",
      afternoon: "Filtered light through linen drapes softens contrast, maintaining glare-free reading conditions throughout the lounge.",
      evening: "Concealed LED coves along ceiling slots and wall bases wash vertical surfaces in warm 2700K ambient illumination.",
    },
    detailsCraftsmanship: [
      { title: "Flush Shadow Gap", desc: "10mm negative reveal where stone wall meets oak ceiling, eliminating traditional skirtings.", image: "/images/rooms/living-room/9.png" },
      { title: "Book-Matched Stone", desc: "Precision CNC cut travertine slabs mirrored along central hearth seam.", image: "/images/rooms/living-room/3.png" },
      { title: "Concealed Acoustics", desc: "Sound-absorbing micro-perforated walnut panels integrated behind fabric wall segments.", image: "/images/rooms/living-room/8.png" },
    ],
    story: {
      idea: "The living room is planned around pause and conversation rather than passive viewing. Every architectural volume is scaled to create warmth within openness.",
      materials: "Monolithic Italian travertine floors ground the space, while smoked walnut panels introduce acoustic softness and rich visual weight.",
      light: "Light enters through floor-to-ceiling frameless glass during the day and transitions to atmospheric perimeter cove lighting after sunset.",
      details: "Bespoke furniture pieces are designed at custom lower proportions so sightlines across the architectural horizon remain uninterrupted.",
    },
    finalStatement: {
      quote: "A room that holds light without capturing it — designed for unhurried conversations.",
      image: "/images/rooms/living-room/10.png",
    },
  },
  kitchen: {
    slug: "kitchen",
    title: "Modular Kitchen",
    tagline: "CHOREOGRAPHED CULINARY ARCHITECTURE",
    subtitle: "Workflows, storage and stone surfaces choreographed around how you cook and entertain.",
    heroImage: "/images/rooms/kitchen.png",
    specifications: {
      type: "Culinary & Dining Suite",
      location: "Lyon, France",
      area: "85 m²",
      year: "2025",
      style: "Architectural Minimalist",
      materials: "Nero Marquina Marble, Smoked Oak, Brushed Brass, Matte Lacquer",
      lighting: "Linear Task Strips, Sculptural Counter Pendant Grid",
      furniture: "Monolithic Marble Island, Concealed Pocket Pantry",
      approach: "Functional performance encased in monolithic stone and warm timber architectural volumes.",
    },
    caseStudy: {
      type: "Culinary & Dining Suite",
      approach: "Precision Millwork & Integrated Systems",
      materials: "Nero Marquina Marble, Smoked Oak, Brushed Brass, Matte Lacquer",
      lighting: "Linear Task Strips, Sculptural Counter Pendant Grid",
      furniture: "Monolithic Marble Island, Concealed Pocket Pantry",
      concept: "Functional performance encased in monolithic stone and warm timber architectural volumes.",
    },
    gallery: [
      { src: "/images/rooms/kitchen/1.png", caption: "Monolithic Nero Marquina marble island with waterfall edge", alt: "Kitchen island" },
      { src: "/images/rooms/kitchen/2.png", caption: "Handleless smoked oak cabinetry with integrated pocket pantry", alt: "Cabinetry millwork" },
      { src: "/images/rooms/kitchen/3.png", caption: "Brushed bronze fittings and seamless countertop detailing", alt: "Brass fittings" },
      { src: "/images/rooms/kitchen/4.png", caption: "Linear architectural task lighting illuminating work surfaces", alt: "Task lighting" },
      { src: "/images/rooms/kitchen/5.png", caption: "Integrated appliances concealed behind full-height timber doors", alt: "Concealed appliances" },
      { src: "/images/rooms/kitchen/6.png", caption: "Breakfast counter seating facing central courtyard window", alt: "Breakfast counter" },
      { src: "/images/rooms/kitchen/7.png", caption: "Wine storage cellar niche with climate control and brass racks", alt: "Wine storage" },
      { src: "/images/rooms/kitchen/8.png", caption: "Detail of undercut stone lip and touch-open drawer joinery", alt: "Undercut stone detail" },
      { src: "/images/rooms/kitchen/9.png", caption: "Prep sink area with pull-out bronze faucet and marble backsplash", alt: "Prep sink" },
      { src: "/images/rooms/kitchen/10.png", caption: "Evening ambiance showing under-island illumination glow", alt: "Under-island lighting" },
    ],
    materialsPalette: [
      { name: "Nero Marquina Marble", type: "Natural Stone", desc: "Deep black marble with striking white veins carved for island surfaces.", image: "/images/rooms/kitchen/1.png" },
      { name: "Smoked Oak", type: "Timber Veneer", desc: "Matte lacquered smoked oak providing warmth against hard stone.", image: "/images/rooms/kitchen/2.png" },
      { name: "Brushed Brass", type: "Hardware", desc: "Precision machined fittings and linear trim details.", image: "/images/rooms/kitchen/3.png" },
      { name: "Textured Glass", type: "Architectural Glass", desc: "Reeded glass doors softening display pantry backlights.", image: "/images/rooms/kitchen/7.png" },
    ],
    lightingStory: {
      title: "Focused Workflows & Ambient Warmth",
      daylight: "Sunlight from adjacent courtyard glass highlights stone grain without creating harsh counter glare.",
      afternoon: "Indirect ceiling slots illuminate prep zones evenly for precise cooking workflows.",
      evening: "Under-counter LEDs and warm pendant dimmers transform the workspace into an intimate bar setting.",
    },
    detailsCraftsmanship: [
      { title: "Mitred Waterfall Edge", desc: "Seamless 45-degree corner joints making stone island appear carved from a single block.", image: "/images/rooms/kitchen/1.png" },
      { title: "Pocket Door Hardware", desc: "German engineered slide-away cabinet fronts concealing work stations.", image: "/images/rooms/kitchen/2.png" },
      { title: "Integrated Drainage", desc: "Custom sloped stone grooves carved directly into countertop.", image: "/images/rooms/kitchen/9.png" },
    ],
    story: {
      idea: "We treat the kitchen not as a collection of appliances, but as a sculpted architectural piece where culinary prep is effortless.",
      materials: "Bold black marble with sharp white veining creates a focal anchor, balanced by natural open-grain oak that ages gracefully.",
      light: "Direct task lighting washes working counters, while ambient under-cabinet LEDs warm the backsplash at night.",
      details: "All hardware and appliances disappear behind flush-fitting pocket doors for a clean, monolithic visual register.",
    },
    finalStatement: {
      quote: "Cooking choreographed around stone, light and precision — where workflow meets hospitality.",
      image: "/images/rooms/kitchen/10.png",
    },
  },
  bedroom: {
    slug: "bedroom",
    title: "Master Suite Bedroom",
    tagline: "SANCTUARY OF SILENCE",
    subtitle: "A tranquil master suite designed with warm materials, calm proportions and concealed storage.",
    heroImage: "/images/rooms/bedroom.png",
    specifications: {
      type: "Private Master Suite",
      location: "Los Angeles, CA",
      area: "95 m²",
      year: "2025",
      style: "Tactile Luxury Minimal",
      materials: "Taupe Suede, Fluted Walnut, Limestone, Belgian Linen",
      lighting: "Soft Headboard Backlight, Low-Level Night Lighting",
      furniture: "Custom King Platform Bed, Floating Oak Nightstands, Shearling Chair",
      approach: "An sanctuary designed to lower sensory stress and promote deep rest.",
    },
    caseStudy: {
      type: "Private Master Suite",
      approach: "Acoustic Comfort & Atmospheric Layering",
      materials: "Taupe Suede, Fluted Walnut, Limestone, Belgian Linen",
      lighting: "Soft Headboard Backlight, Low-Level Night Lighting",
      furniture: "Custom King Platform Bed, Floating Oak Nightstands, Shearling Chair",
      concept: "An sanctuary designed to lower sensory stress and promote deep rest.",
    },
    gallery: [
      { src: "/images/rooms/bedroom/1.png", caption: "Full-height upholstered headboard with fluted walnut paneling", alt: "Bedroom headboard wall" },
      { src: "/images/rooms/bedroom/2.png", caption: "Platform bed with layered Belgian linen and morning daylight", alt: "Platform bed" },
      { src: "/images/rooms/bedroom/3.png", caption: "Floating nightstand with integrated dimmable reading light", alt: "Floating nightstand" },
      { src: "/images/rooms/bedroom/4.png", caption: "Shearling reading chair by terrace glazing", alt: "Reading lounge" },
      { src: "/images/rooms/bedroom/5.png", caption: "Concealed floor-to-ceiling wardrobe with integrated LED lighting", alt: "Concealed wardrobe" },
      { src: "/images/rooms/bedroom/6.png", caption: "En-suite bathroom transition through fluted glass sliding door", alt: "En-suite transition" },
      { src: "/images/rooms/bedroom/7.png", caption: "Dressing vanity console with framed bronze mirror", alt: "Dressing vanity" },
      { src: "/images/rooms/bedroom/8.png", caption: "Custom wool rug detail and floating timber platform base", alt: "Rug detail" },
      { src: "/images/rooms/bedroom/9.png", caption: "Nighttime scene with warm low-level perimeter illumination", alt: "Night ambiance" },
      { src: "/images/rooms/bedroom/10.png", caption: "Terrace view perspective from bed at sunrise", alt: "Sunrise perspective" },
    ],
    materialsPalette: [
      { name: "Taupe Suede", type: "Acoustic Wall Covering", desc: "Soft padded wall panels reducing room echo and adding warmth.", image: "/images/rooms/bedroom/1.png" },
      { name: "Fluted Walnut", type: "Architectural Timber", desc: "Linear timber slats creating subtle vertical shadow rhythms.", image: "/images/rooms/bedroom/1.png" },
      { name: "Belgian Linen", type: "Textile", desc: "Breathable natural bedding linens washed for relaxed drape.", image: "/images/rooms/bedroom/2.png" },
      { name: "Limestone Slabs", type: "Flooring", desc: "Honed neutral stone floors providing thermal mass and cool comfort.", image: "/images/rooms/bedroom/8.png" },
    ],
    lightingStory: {
      title: "Glare-Free Ambient Rest",
      daylight: "Deep window recesses diffuse direct sunlight into a soft perimeter glow.",
      afternoon: "Motorized linen shades filter sunlight for midday rest while maintaining outdoor foliage views.",
      evening: "Warm backlight behind the headboard provides gentle reading light without overhead brightness.",
    },
    detailsCraftsmanship: [
      { title: "Floating Cantilever", desc: "Wall-mounted bedside tables with concealed wireless charging surfaces.", image: "/images/rooms/bedroom/3.png" },
      { title: "Flush Closet Doors", desc: "Floor-to-ceiling wardrobe fronts engineered to match plaster wall color exactly.", image: "/images/rooms/bedroom/5.png" },
      { title: "Seamless Glass Partition", desc: "Acoustic fluted glass doors connecting bedroom to master bath.", image: "/images/rooms/bedroom/6.png" },
    ],
    story: {
      idea: "Rest requires visual silence. The bedroom hides all practical storage so only soft texture, warm timber and daylight remain.",
      materials: "Acoustically absorbent suede panels wrap the headboard wall, grounded by cool limestone flooring and warm silk-wool rugs.",
      light: "Glare-free indirect illumination flows from behind the headboard and window drapes, ensuring zero harsh bulbs overhead.",
      details: "Wardrobe doors align flush with the plaster wall, opening via concealed push catches to maintain architectural purity.",
    },
    finalStatement: {
      quote: "Visual silence and tactile softness — a master suite built for restorative rest.",
      image: "/images/rooms/bedroom/10.png",
    },
  },
  dining: {
    slug: "dining",
    title: "Dining Room",
    tagline: "THE GATHERED TABLE",
    subtitle: "A proportioned dining space anchored by stone, lit to flatter, and built for unhurried gatherings.",
    heroImage: "/images/rooms/dining.png",
    specifications: {
      type: "Formal Dining Suite",
      location: "New York, NY",
      area: "70 m²",
      year: "2025",
      style: "Sculptural Luxury",
      materials: "Calacatta Viola Marble, Venetian Plaster, Dark Leather, Brass",
      lighting: "Custom Blown-Glass Chandelier, Accent Niche Spotlights",
      furniture: "Monolithic 10-Seater Stone Table, Sculptural Armchairs",
      approach: "Creating intimacy in large rooms through ceiling height, warm tone, and focused dining light.",
    },
    caseStudy: {
      type: "Formal Dining Architecture",
      approach: "Acoustic Warmth & Lighting Scenography",
      materials: "Calacatta Viola Marble, Venetian Plaster, Dark Leather, Brass",
      lighting: "Custom Blown-Glass Chandelier, Accent Niche Spotlights",
      furniture: "Monolithic 10-Seater Stone Table, Sculptural Armchairs",
      concept: "Creating intimacy in large rooms through ceiling height, warm tone, and focused dining light.",
    },
    gallery: [
      { src: "/images/rooms/dining/1.png", caption: "Monolithic Calacatta Viola marble dining table under brass chandelier", alt: "Dining table centerpiece" },
      { src: "/images/rooms/dining/2.png", caption: "Sculptural dark leather dining armchairs and coffered ceiling", alt: "Dining chairs" },
      { src: "/images/rooms/dining/3.png", caption: "Fluted timber wall paneling with lit display niches", alt: "Display niches" },
      { src: "/images/rooms/dining/4.png", caption: "Venetian plaster wall finish capturing soft evening light", alt: "Venetian plaster wall" },
      { src: "/images/rooms/dining/5.png", caption: "Detail of veined stone table edge and bespoke tableware", alt: "Stone table edge" },
      { src: "/images/rooms/dining/6.png", caption: "Buffet credenza in smoked oak with marble top", alt: "Buffet credenza" },
      { src: "/images/rooms/dining/7.png", caption: "Sculptural wall sconces illuminating textured plaster wall", alt: "Wall sconces" },
      { src: "/images/rooms/dining/8.png", caption: "Wide perspective towards adjacent wine display room", alt: "Wine room perspective" },
      { src: "/images/rooms/dining/9.png", caption: "Close-up of leather stitching and solid wood chair joints", alt: "Chair joinery detail" },
      { src: "/images/rooms/dining/10.png", caption: "Candlelit evening setting creating warm intimate dining atmosphere", alt: "Evening candlelit setting" },
    ],
    materialsPalette: [
      { name: "Calacatta Viola Marble", type: "Natural Stone", desc: "Rare violet-veined marble forming the central dining table monolith.", image: "/images/rooms/dining/1.png" },
      { name: "Venetian Plaster", type: "Wall Finish", desc: "Hand-troweled lime plaster providing velvet-like depth.", image: "/images/rooms/dining/4.png" },
      { name: "Full-Grain Leather", type: "Upholstery", desc: "Supple dark leather seating tailored for long dinner conversations.", image: "/images/rooms/dining/2.png" },
      { name: "Aged Brass", type: "Hardware", desc: "Hand-burnished metallic accents on lighting fixtures and credenza.", image: "/images/rooms/dining/1.png" },
    ],
    lightingStory: {
      title: "Hospitality Lighting Scenography",
      daylight: "Soft side illumination flatters guests while highlighting marble table veining.",
      afternoon: "Directional ceiling spots bring out warm tones in Venetian plaster walls.",
      evening: "A low-hung chandelier and warm wall sconces cast focused light onto the table surface.",
    },
    detailsCraftsmanship: [
      { title: "Sculpted Stone Bullnose", desc: "Hand-carved rounded edges making heavy marble table feel approachable.", image: "/images/rooms/dining/5.png" },
      { title: "Coffered Ceiling Acoustics", desc: "Recessed ceiling panels fitted with hidden acoustic absorption felt.", image: "/images/rooms/dining/2.png" },
      { title: "Custom Leather Stitching", desc: "Saddle-stitched seams on dining chair upholstery for enduring beauty.", image: "/images/rooms/dining/9.png" },
    ],
    story: {
      idea: "The dining table is the anchor of hospitality. We tune ceiling height, room acoustic, and light to bring people together naturally.",
      materials: "Rare violet-veined marble paired with dark hand-finished plaster creates a dramatic yet welcoming visual depth.",
      light: "A low-slung custom chandelier casts warm focused light over the tabletop while keeping guests' eyes comfortably in shade.",
      details: "Chairs are ergonomically upholstered in matte full-grain leather for extended dining comfort.",
    },
    finalStatement: {
      quote: "Proportioned around hospitality — where the table anchors the room and light flatters conversation.",
      image: "/images/rooms/dining/10.png",
    },
  },
  study: {
    slug: "study",
    title: "Home Office & Study",
    tagline: "SILENCE BY DESIGN",
    subtitle: "A quiet workspace designed to sharpen focus, hold reference, and integrate seamlessly into the home.",
    heroImage: "/images/rooms/study.png",
    specifications: {
      type: "Executive Workspace",
      location: "Lisbon, Portugal",
      area: "55 m²",
      year: "2025",
      style: "Intellectual Luxury",
      materials: "Dark Walnut, Saddle Leather, Steel, Textured Stone",
      lighting: "Architectural Task Lamp, Integrated Bookshelf Strips",
      furniture: "Bespoke Leather Desk, Mid-Century Executive Chair",
      approach: "Balancing intellectual rigour with domestic warmth.",
    },
    caseStudy: {
      type: "Executive Home Office",
      approach: "Ergonomic & Acoustic Planning",
      materials: "Dark Walnut, Saddle Leather, Steel, Textured Stone",
      lighting: "Architectural Task Lamp, Integrated Bookshelf Strips",
      furniture: "Bespoke Leather Desk, Mid-Century Executive Chair",
      concept: "Balancing intellectual rigour with domestic warmth.",
    },
    gallery: [
      { src: "/images/rooms/study/1.png", caption: "Custom dark walnut library bookshelf with integrated warm lighting", alt: "Library wall" },
      { src: "/images/rooms/study/2.png", caption: "Bespoke leather-topped desk positioned by floor-to-ceiling window", alt: "Executive desk" },
      { src: "/images/rooms/study/3.png", caption: "Architectural task lamp and curated art canvas backdrop", alt: "Desk lamp detail" },
      { src: "/images/rooms/study/4.png", caption: "Acoustic wall paneling and parquet oak flooring", alt: "Parquet flooring" },
      { src: "/images/rooms/study/5.png", caption: "Integrated wire management and concealed credenza", alt: "Concealed credenza" },
      { src: "/images/rooms/study/6.png", caption: "Reading armchair nook with brass floor lamp and garden window view", alt: "Reading nook" },
      { src: "/images/rooms/study/7.png", caption: "Detail of saddle leather desk mat with blind debossed logo", alt: "Leather desk mat" },
      { src: "/images/rooms/study/8.png", caption: "Concealed print and storage station behind walnut pocket doors", alt: "Concealed storage" },
      { src: "/images/rooms/study/9.png", caption: "High-CRI desk illumination for drafting and document reading", alt: "Task illumination" },
      { src: "/images/rooms/study/10.png", caption: "Evening study atmosphere with warm shelf backlights and quiet silence", alt: "Evening study" },
    ],
    materialsPalette: [
      { name: "Dark Walnut", type: "Architectural Millwork", desc: "Acoustically dampening timber lining shelves and walls.", image: "/images/rooms/study/1.png" },
      { name: "Saddle Leather", type: "Desk Surface", desc: "Supple writing leather providing quiet warmth under wrist.", image: "/images/rooms/study/2.png" },
      { name: "Patinated Steel", type: "Window Frames", desc: "Slim-line metal framing maximizing natural window daylight.", image: "/images/rooms/study/2.png" },
      { name: "Oak Parquet", type: "Flooring", desc: "Herringbone timber pattern adding classical floor movement.", image: "/images/rooms/study/4.png" },
    ],
    lightingStory: {
      title: "Precision Task & Ambient Balance",
      daylight: "Side window daylight illuminates desk surfaces without screen reflection.",
      afternoon: "Concealed shelf LED strips cast soft warm light onto book spines.",
      evening: "High-CRI architectural desk lamp provides focused 3000K light for drafting.",
    },
    detailsCraftsmanship: [
      { title: "Wire Conduit Legs", desc: "Desk legs engineered with hollow channels hiding all power cables.", image: "/images/rooms/study/5.png" },
      { title: "Integrated Leather Inlay", desc: "Hand-set desk mat flush with walnut timber border.", image: "/images/rooms/study/7.png" },
      { title: "Acoustic Wall Felt", desc: "Micro-perforated backing behind bookshelves dampening room echo.", image: "/images/rooms/study/4.png" },
    ],
    story: {
      idea: "A great study is a sanctuary of clear thought. We align the desk with natural light and surround it with accessible reference.",
      materials: "Rich dark walnut millwork provides acoustic insulation and tactile warmth during long working hours.",
      light: "Glare-free daylight enters from the side, supplemented by soft warm shelf lighting and a high-CRI task fixture.",
      details: "All power cables and hardware connections drop invisibly through hollow desk legs into sub-floor conduits.",
    },
    finalStatement: {
      quote: "A workspace designed for deep focus — where reference is at hand and silence reigns.",
      image: "/images/rooms/study/10.png",
    },
  },
  bath: {
    slug: "bath",
    title: "Spa Master Bath",
    tagline: "THE STONE & STEAM SANCTUARY",
    subtitle: "Honed stone, steam, and a single shaft of light — designed for slow, restorative rituals.",
    heroImage: "/images/rooms/bath.png",
    specifications: {
      type: "Master Bath Spa Suite",
      location: "Morocco / Marrakech Residence",
      area: "48 m²",
      year: "2025",
      style: "Monolithic Spa Sanctuary",
      materials: "Arabescato Marble, Travertine, Fluted Glass, Brushed Bronze",
      lighting: "Vertical Skylight Shaft, Indirect Floating Vanity Glow",
      furniture: "Carved Travertine Bathtub, Floating Double Vanity",
      approach: "A sanctuary inspired by ancient stone thermal baths.",
    },
    caseStudy: {
      type: "Master Bath Spa",
      approach: "Monolithic Stone & Wet Room Engineering",
      materials: "Arabescato Marble, Travertine, Fluted Glass, Brushed Bronze",
      lighting: "Vertical Skylight Shaft, Indirect Floating Vanity Glow",
      furniture: "Carved Travertine Bathtub, Floating Double Vanity",
      concept: "A sanctuary inspired by ancient stone thermal baths.",
    },
    gallery: [
      { src: "/images/rooms/bath/1.png", caption: "Monolithic travertine bathtub carved from a single block", alt: "Travertine tub" },
      { src: "/images/rooms/bath/2.png", caption: "Honed Arabescato marble walls with vertical skylight shaft", alt: "Marble walls skylight" },
      { src: "/images/rooms/bath/3.png", caption: "Floating double vanity with integrated marble basins and backlit mirror", alt: "Double vanity" },
      { src: "/images/rooms/bath/4.png", caption: "Walk-in steam shower with frameless glass and bronze fixtures", alt: "Steam shower" },
      { src: "/images/rooms/bath/5.png", caption: "Close-up of brushed bronze hardware against natural stone", alt: "Bronze fixture detail" },
      { src: "/images/rooms/bath/6.png", caption: "Rain shower head integrated seamlessly into marble slab ceiling", alt: "Ceiling rain shower" },
      { src: "/images/rooms/bath/7.png", caption: "Towel warming niche with concealed radiant heating panel", alt: "Towel warming niche" },
      { src: "/images/rooms/bath/8.png", caption: "Water closet enclosure with fluted glass privacy door", alt: "Water closet glass" },
      { src: "/images/rooms/bath/9.png", caption: "Detail of honed travertine grain under warm water stream", alt: "Travertine water detail" },
      { src: "/images/rooms/bath/10.png", caption: "Night atmosphere showing subtle floor-level perimeter lighting", alt: "Night bath glow" },
    ],
    materialsPalette: [
      { name: "Honed Arabescato Marble", type: "Wall Lining", desc: "Smooth matte stone with dramatic organic grey veining.", image: "/images/rooms/bath/2.png" },
      { name: "Beige Travertine", type: "Bathtub & Floor", desc: "Porous natural stone carved into monolithic bath fixture.", image: "/images/rooms/bath/1.png" },
      { name: "Brushed Bronze", type: "Water Fixtures", desc: "Unlacquered metal that patinates beautifully with steam and water.", image: "/images/rooms/bath/5.png" },
      { name: "Fluted Privacy Glass", type: "Partitions", desc: "Soft textured glass diffusing light between shower and room.", image: "/images/rooms/bath/8.png" },
    ],
    lightingStory: {
      title: "Light & Steam Dynamics",
      daylight: "Vertical skylight slices sunlight through rising steam during morning baths.",
      afternoon: "Diffused window glass maintains privacy while filling stone surfaces with soft daylight.",
      evening: "Backlit vanity mirrors and floor step lights provide gentle non-glare night illumination.",
    },
    detailsCraftsmanship: [
      { title: "Single-Block Carving", desc: "Bathtub milled from one continuous 4-tonne travertine block.", image: "/images/rooms/bath/1.png" },
      { title: "Flush Floor Drain", desc: "Linear slot drain concealed beneath marble floor slab seam.", image: "/images/rooms/bath/4.png" },
      { title: "Backlit Mirror Ring", desc: "Warm halo lighting built behind circular vanity mirrors.", image: "/images/rooms/bath/3.png" },
    ],
    story: {
      idea: "We elevate bathing from a daily task into a meditative ritual by combining tactile stone, steam, and sky light.",
      materials: "Monolithic travertine and Arabescato marble create a continuous waterproof envelope that will age with timeless dignity.",
      light: "A slot skylight casts a moving beam of natural light across stone walls throughout the morning.",
      details: "Fixtures are specified in unlacquered brushed bronze to develop a rich, organic patina over time.",
    },
    finalStatement: {
      quote: "Stone, steam, and sky — an atmospheric sanctuary built for slow restorative rituals.",
      image: "/images/rooms/bath/10.png",
    },
  },
  entry: {
    slug: "entry",
    title: "Entrance Foyer",
    tagline: "THE THRESHOLD REGISTER",
    subtitle: "The initial architectural threshold — setting the register of craft and atmosphere for the entire home.",
    heroImage: "/images/rooms/entry.png",
    specifications: {
      type: "Architectural Threshold",
      location: "Paris, France",
      area: "40 m²",
      year: "2025",
      style: "Grand Minimalist Entry",
      materials: "Terrazzo with Brass Inlay, Lime Plaster, Bronze, Glass",
      lighting: "Recessed Architectural Spotlights, Linear Step Strips",
      furniture: "Sculptural Bronze Console Table, Custom Pivot Door",
      approach: "A dramatic yet welcoming transition between the outside world and private retreat.",
    },
    caseStudy: {
      type: "Architectural Threshold",
      approach: "Spatial Transition & Material Prelude",
      materials: "Terrazzo with Brass Inlay, Lime Plaster, Bronze, Glass",
      lighting: "Recessed Architectural Spotlights, Linear Step Strips",
      furniture: "Sculptural Bronze Console Table, Custom Pivot Door",
      concept: "A dramatic yet welcoming transition between the outside world and private retreat.",
    },
    gallery: [
      { src: "/images/rooms/entry/1.png", caption: "Double-height entrance foyer with floating travertine staircase", alt: "Foyer staircase" },
      { src: "/images/rooms/entry/2.png", caption: "Polished terrazzo floor with hand-set brass inlay geometry", alt: "Terrazzo floor" },
      { src: "/images/rooms/entry/3.png", caption: "Monolithic bronze console table with organic ceramic vase", alt: "Console table" },
      { src: "/images/rooms/entry/4.png", caption: "Large-scale abstract oil painting on textured lime plaster wall", alt: "Plaster wall art" },
      { src: "/images/rooms/entry/5.png", caption: "Custom full-height timber pivot door with bronze pull", alt: "Pivot door" },
      { src: "/images/rooms/entry/6.png", caption: "Concealed coat check closet concealed within timber wall paneling", alt: "Concealed coat closet" },
      { src: "/images/rooms/entry/7.png", caption: "Sculptural bronze door handle detail with textured grip", alt: "Bronze door handle" },
      { src: "/images/rooms/entry/8.png", caption: "Floating staircase tread lighting illuminating terrazzo floor", alt: "Staircase step light" },
      { src: "/images/rooms/entry/9.png", caption: "Perspective looking into main living salon through portal", alt: "Salon portal view" },
      { src: "/images/rooms/entry/10.png", caption: "Evening entrance lighting setting a warm welcoming register", alt: "Evening foyer light" },
    ],
    materialsPalette: [
      { name: "Terrazzo Flooring", type: "Poured Stone", desc: "Custom marble aggregate terrazzo with polished finish.", image: "/images/rooms/entry/2.png" },
      { name: "Brass Inlay Strips", type: "Floor Detail", desc: "Hand-set metal dividers creating subtle geometric flooring lines.", image: "/images/rooms/entry/2.png" },
      { name: "Lime Plaster", type: "Wall Finish", desc: "Tactile textured wall surface capturing soft spotlighting.", image: "/images/rooms/entry/4.png" },
      { name: "Cast Bronze", type: "Console & Door Pull", desc: "Sculptural heavy metal elements creating a memorable tactile entrance.", image: "/images/rooms/entry/3.png" },
    ],
    lightingStory: {
      title: "Threshold Arrival Scenography",
      daylight: "Natural top light from double-height void washes floor and staircase treads.",
      afternoon: "Focused narrow spotlights highlight large-scale artwork on lime plaster walls.",
      evening: "Discreet step lights under floating treads guide steps softly towards living areas.",
    },
    detailsCraftsmanship: [
      { title: "Heavy Timber Pivot", desc: "3-metre tall entrance door balanced on heavy-duty floor pivot hinge.", image: "/images/rooms/entry/5.png" },
      { title: "Brass Inlay Geometry", desc: "4mm brass strips laid into terrazzo before final diamond polishing.", image: "/images/rooms/entry/2.png" },
      { title: "Floating Staircase Treads", desc: "Cantilevered travertine treads anchored into reinforced core wall.", image: "/images/rooms/entry/1.png" },
    ],
    story: {
      idea: "First impressions establish expectations. The entry introduces the residence's material palette in a single dramatic space.",
      materials: "Hard-wearing terrazzo with custom brass inlay borders provides durable beauty under foot.",
      light: "Targeted ceiling spots illuminate artwork while subtle step lights guide movement into the main living areas.",
      details: "A custom pivot door closes with acoustic seals, cutting out street noise the moment you step inside.",
    },
    finalStatement: {
      quote: "The first threshold — setting the architectural register of craft and light for the home.",
      image: "/images/rooms/entry/10.png",
    },
  },
};


export const journey = [
  {
    n: "I",
    phase: "The Brief",
    weeks: "Wk1–2",
    line: "A site visit, a long listen, and a written brief that names the problem exactly.",
    deliverable: "Brief + scope",
  },
  {
    n: "II",
    phase: "The Concept",
    weeks: "Wk3–6",
    line: "Layouts and material studies — one idea tested against structure, budget and light.",
    deliverable: "Concept boards",
  },
  {
    n: "III",
    phase: "The Drawings",
    weeks: "Wk7–10",
    line: "Working drawings, joinery detail, and a schedule of quantities you can price.",
    deliverable: "Full set",
  },
  {
    n: "IV",
    phase: "The Making",
    weeks: "Wk11–18",
    line: "Site supervision, trades coordinated, weekly notes — no surprises, ever.",
    deliverable: "Weekly reports",
  },
  {
    n: "V",
    phase: "The Handover",
    weeks: "Wk19–20",
    line: "A final walkthrough, a few days of living in it, and the keys.",
    deliverable: "Keys + care notes",
  },
];

export const fieldNotes = [
  {
    title: "On the height of a window sill",
    category: "Observation",
    slug: "modern-2bhk-interior-ideas",
    excerpt:
      "At 900mm a sill reads as a ledge; at 1100 it reads as architecture. Ten centimetres is a decision.",
    plate: "light" as PlateKey,
  },
  {
    title: "Why we specify lime plaster over paint",
    category: "Material",
    slug: "choosing-laminates-material-guide",
    excerpt:
      "Paint is a skin; lime is a breath. One peels at the edges, the other takes on the weather of the room.",
    plate: "section" as PlateKey,
  },
  {
    title: "The hallway is not a hallway",
    category: "Proportion",
    slug: "quiet-luxury-interior-trends-2026",
    excerpt:
      "It is the room you pass through most often — so we design it like one, and the house stops feeling thin.",
    plate: "plan" as PlateKey,
  },
];

export const press = [
  { year: "2026", publication: "Architectural Digest", kind: "Featured", note: "The Courtyard House in the March international edition.", image: "/images/projects/courtyard-house.png", link: "https://www.architecturaldigest.in" },
  { year: "2025", publication: "Dezeen", kind: "Featured", note: "Lightwell Penthouse selected for the residential series.", image: "/images/projects/lightwell-penthouse.png", link: "https://www.dezeen.com" },
  { year: "2025", publication: "Frame Awards", kind: "Shortlisted", note: "Hospitality interior of the year.", image: "/images/projects/hotel-ombelle.png", link: "https://www.frameweb.com" },
  { year: "2024", publication: "Dwell", kind: "Cover", note: "October issue, photographed at dusk.", image: "/images/projects/villa-meridian.png", link: "https://www.dwell.com" },
  { year: "2024", publication: "The World of Interiors", kind: "Reviewed", note: "A profile of the Lyon gallery project.", image: "/images/projects/maison-verre.png", link: "https://www.worldofinteriors.com" },
  { year: "2023", publication: "Elle Decor", kind: "Best of Year", note: "Honouree, residential architecture category.", image: "/images/projects/loft-at-atlas.png", link: "https://elledecor.in" },
];

export const begin = {
  line: "The next room is yours.",
  sub: scarcityNotice.subText,
  scarcity: scarcityNotice.note,
  cta: "Begin a project",
};
