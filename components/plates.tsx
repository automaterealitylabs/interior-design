/**
 * Bespoke SVG "technical plates" used as the project visuals.
 * Drawn in the language of an architecture office: thin linework,
 * hatching, dimension ticks and micro-captions. Monochrome via
 * currentColor so they inherit ink/paper from the surrounding section.
 * Optimized to minimize DOM node overhead and nesting while preserving
 * 100% exact architectural vector precision.
 */

const MONO = {
  fontFamily: "var(--font-geist-mono), monospace",
  fontSize: 10,
  letterSpacing: "0.18em",
} as const;

function Caption({ x, y, children }: { x: number; y: number; children: string }) {
  return (
    <text x={x} y={y} {...MONO} fill="currentColor" stroke="none">
      {children}
    </text>
  );
}

function Ticks({
  y,
  from,
  to,
  step,
}: {
  y: number;
  from: number;
  to: number;
  step: number;
}) {
  let tickPath = "";
  for (let v = from; v <= to + 0.001; v += step) {
    tickPath += `M${Math.round(v)} ${y - 3}V${y + 3} `;
  }
  return (
    <>
      <path d={tickPath} stroke="currentColor" strokeOpacity="0.45" strokeWidth="1" />
      <line x1={from} y1={y} x2={to} y2={y} stroke="currentColor" strokeOpacity="0.35" strokeDasharray="2 4" />
    </>
  );
}

/* ------------------------------------------------------------------ */
/* FIG. 01 — Elevation study: an arched doorway on a planed wall       */
/* ------------------------------------------------------------------ */
export function PlateArch({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 400 500"
      className={className}
      fill="none"
      stroke="currentColor"
      aria-hidden="true"
    >
      <rect x="40" y="40" width="320" height="420" strokeWidth="1.5" />
      <g>
        <Caption x={56} y={60}>FIG. 01 — ELEVATION</Caption>
        <Caption x={56} y={436}>DOORWAY · Ø120 · R60</Caption>
        {/* Doorway arch, door leaf, floor plane, hatch lines */}
        <path
          d="M140 460 V272 C140 218 174 196 200 196 C226 196 260 218 260 272 V460 M140 460 V280 C140 236 152 216 200 216 M260 460 V280 C260 236 248 216 200 216 M40 460 H360 M64 460 L58 472 M74 460 L68 472 M84 460 L78 472 M94 460 L88 472"
          strokeWidth="1.5"
        />
        {/* Reveals & sun arc (dashed) */}
        <path
          d="M128 196 V460 M272 196 V460 M68 118 A52 52 0 0 1 172 118"
          strokeOpacity="0.4"
          strokeDasharray="3 5"
        />
        <circle cx="96" cy="92" r="6" strokeWidth="1" strokeOpacity="0.7" />
        <Ticks y={484} from={40} to={360} step={80} />
        <Caption x={176} y={502}>4.8 M</Caption>
      </g>
    </svg>
  );
}

/* ------------------------------------------------------------------ */
/* FIG. 02 — Plan study: a ground-floor arrangement                    */
/* ------------------------------------------------------------------ */
export function PlatePlan({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 400 500"
      className={className}
      fill="none"
      stroke="currentColor"
      aria-hidden="true"
    >
      <rect x="40" y="40" width="320" height="420" strokeWidth="1.5" />
      <g>
        <Caption x={56} y={60}>FIG. 02 — PLAN</Caption>
        {/* Outer & inner walls, internal partitions, stair steps, scale bar */}
        <path
          d="M64 64 H336 V436 H64 Z M72 72 H328 V428 H72 Z M150 72 V220 M158 72 V220 M250 220 V428 M258 220 V428 M300 380 H288 V366 H276 V352 H264 V338 H252 V324 H240 V310 H228 M64 452 H184 M64 448 V456 M104 448 V456 M144 448 V456 M184 448 V456"
          strokeWidth="1.2"
        />
        {/* Door swings */}
        <path
          d="M150 200 A42 42 0 0 1 192 158 M250 300 A40 40 0 0 0 210 340"
          strokeOpacity="0.55"
        />
        <Caption x={86} y={132}>SALON</Caption>
        <Caption x={182} y={132}>GALERIE</Caption>
        <Caption x={182} y={330}>BUREAU</Caption>
        <Caption x={282} y={330}>CELLA</Caption>
        <Caption x={196} y={456}>0·1·2 M</Caption>
      </g>
    </svg>
  );
}

/* ------------------------------------------------------------------ */
/* FIG. 03 — Section study: two levels with a hanging light            */
/* ------------------------------------------------------------------ */
export function PlateSection({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 400 500"
      className={className}
      fill="none"
      stroke="currentColor"
      aria-hidden="true"
    >
      <rect x="40" y="40" width="320" height="420" strokeWidth="1.5" />
      <g>
        <Caption x={56} y={60}>FIG. 03 — SECTION</Caption>
        {/* Slabs, walls, glazing mullions, pendant wire, chaise silhouette, table */}
        <path
          d="M70 150 H330 M70 156 H330 M70 150 V420 M76 150 V420 M70 420 H330 M70 426 H330 M330 156 V420 M326 200 H330 M326 244 H330 M326 288 H330 M326 332 H330 M326 376 H330 M230 156 V196 M110 420 V388 C110 372 124 366 140 366 C162 366 176 376 182 392 L186 420 M120 420 V404 M140 420 V400 M164 420 V404 M276 408 H314 M280 408 V420 M310 408 V420 M288 356 V408 M278 352 H298 V356 H278 Z M274 368 H280 V374 H274 Z"
          strokeWidth="1.2"
        />
        {/* Pendant lamp shade & light beam */}
        <path d="M210 196 H250 L238 236 H222 Z" fill="currentColor" fillOpacity="0.06" strokeWidth="1" />
        <path d="M214 252 L246 252 L256 276 L204 276 Z" strokeOpacity="0.35" strokeDasharray="3 4" />
        <Caption x={212} y={282}>PENDANT · Ø32</Caption>
        <Caption x={86} y={180}>SLAB · 220</Caption>
        <Ticks y={484} from={70} to={330} step={52} />
        <Caption x={180} y={502}>8.4 M</Caption>
      </g>
    </svg>
  );
}

/* ------------------------------------------------------------------ */
/* FIG. 04 — Light study: clerestory shafts on a cool morning          */
/* ------------------------------------------------------------------ */
export function PlateLight({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 400 500"
      className={className}
      fill="none"
      stroke="currentColor"
      aria-hidden="true"
    >
      <rect x="40" y="40" width="320" height="420" strokeWidth="1.5" />
      <g>
        <Caption x={56} y={60}>FIG. 04 — LIGHT</Caption>
        <circle cx="90" cy="70" r="9" strokeWidth="1.2" strokeOpacity="0.8" />
        {/* Clerestory grid, sun rays, floor plane, shadow and chair */}
        <path
          d="M72 100 H252 V220 H72 Z M132 100 V220 M192 100 V220 M72 160 H252 M103 70 H108 M99.2 79.2 L102.7 82.7 M90 83 V88 M80.8 79.2 L77.3 82.7 M77 70 H72 M80.8 60.8 L77.3 57.3 M90 57 V52 M99.2 60.8 L102.7 57.3 M40 420 H360 M232 396 H238 V420 H232 Z M222 384 H248 V390 H222 Z M238 384 V348"
          strokeWidth="1.2"
        />
        {/* Dashed light shafts */}
        <path
          d="M84 220 L120 420 M120 220 L180 420 M156 220 L240 420 M192 220 L300 420"
          strokeOpacity="0.3"
          strokeDasharray="2 6"
        />
        <Caption x={238} y={462}>NORTH FACADE · AM 9:12</Caption>
        <Caption x={56} y={462}>LVL +0.00</Caption>
      </g>
    </svg>
  );
}

/* ------------------------------------------------------------------ */
/* FIG. 05 — L-Shaped Kitchen Layout Floorplan                        */
/* ------------------------------------------------------------------ */
export function PlateKitchenL({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 400 500"
      className={className}
      fill="none"
      stroke="currentColor"
      aria-hidden="true"
    >
      <rect x="40" y="40" width="320" height="420" strokeWidth="1.5" />
      <g>
        <Caption x={56} y={60}>FIG. 05 — L-SHAPED KITCHEN</Caption>
        <rect x="64" y="80" width="272" height="340" strokeWidth="1.5" />
        <rect x="72" y="88" width="256" height="324" strokeWidth="1" strokeDasharray="3 3" />
        <path
          d="M72 88 H290 V148 H132 V360 H72 Z"
          fill="currentColor"
          fillOpacity="0.08"
          strokeWidth="1.5"
        />
        {/* Fixtures: sink, hob, fridge */}
        <rect x="150" y="96" width="48" height="36" strokeWidth="1.2" />
        <circle cx="164" cy="114" r="5" strokeWidth="1" />
        <circle cx="184" cy="114" r="5" strokeWidth="1" />
        <Caption x={154} y={144}>SINK</Caption>

        <rect x="80" y="210" width="40" height="48" strokeWidth="1.2" />
        <circle cx="92" cy="224" r="6" strokeWidth="1" />
        <circle cx="108" cy="224" r="6" strokeWidth="1" />
        <circle cx="92" cy="244" r="6" strokeWidth="1" />
        <circle cx="108" cy="244" r="6" strokeWidth="1" />
        <Caption x={80} y={272}>HOB</Caption>

        <rect x="76" y="300" width="50" height="52" strokeWidth="1.5" />
        <line x1="76" y1="326" x2="126" y2="326" strokeWidth="1" />
        <Caption x={82} y={320}>FRIDGE</Caption>

        {/* Work Triangle */}
        <path
          d="M174 114 L100 234 L101 326 Z"
          stroke="#c5a059"
          strokeWidth="1.5"
          strokeDasharray="4 4"
        />

        <path d="M220 260 H300 M280 250 L300 260 L280 270" strokeWidth="1.2" strokeOpacity="0.7" />
        <Caption x={200} y={245}>OPEN PLAN FLOW</Caption>
        <Caption x={210} y={290}>DINING ZONE &rarr;</Caption>

        <Ticks y={444} from={64} to={336} step={68} />
        <Caption x={160} y={462}>LAYOUT: 4.2M x 3.6M</Caption>
      </g>
    </svg>
  );
}

/* ------------------------------------------------------------------ */
/* FIG. 06 — U-Shaped Kitchen Layout Floorplan                        */
/* ------------------------------------------------------------------ */
export function PlateKitchenU({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 400 500"
      className={className}
      fill="none"
      stroke="currentColor"
      aria-hidden="true"
    >
      <rect x="40" y="40" width="320" height="420" strokeWidth="1.5" />
      <g>
        <Caption x={56} y={60}>FIG. 06 — U-SHAPED KITCHEN</Caption>
        <rect x="64" y="80" width="272" height="340" strokeWidth="1.5" />
        <path
          d="M72 360 V88 H328 V360 H268 V148 H132 V360 Z"
          fill="currentColor"
          fillOpacity="0.08"
          strokeWidth="1.5"
        />

        <rect x="176" y="94" width="48" height="40" strokeWidth="1.2" />
        <circle cx="190" cy="106" r="6" strokeWidth="1" />
        <circle cx="210" cy="106" r="6" strokeWidth="1" />
        <circle cx="190" cy="122" r="6" strokeWidth="1" />
        <circle cx="210" cy="122" r="6" strokeWidth="1" />
        <Caption x={186} y={144}>HOB</Caption>

        <rect x="80" y="180" width="40" height="50" strokeWidth="1.2" />
        <circle cx="100" cy="195" r="5" strokeWidth="1" />
        <circle cx="100" cy="215" r="5" strokeWidth="1" />
        <Caption x={80} y={244}>SINK</Caption>

        <rect x="280" y="180" width="42" height="50" strokeWidth="1.5" />
        <line x1="280" y1="205" x2="322" y2="205" strokeWidth="1" />
        <Caption x={282} y={200}>FRIDGE</Caption>

        <rect x="160" y="240" width="80" height="70" strokeWidth="1.2" strokeDasharray="3 3" />
        <Caption x={170} y={280}>PREP ISLAND</Caption>

        <path
          d="M100 205 L200 114 L301 205 Z"
          stroke="#c5a059"
          strokeWidth="1.5"
          strokeDasharray="4 4"
        />

        <Caption x={140} y={350}>ENCLOSED WORK TRIANGLE</Caption>
        <Ticks y={444} from={64} to={336} step={68} />
        <Caption x={160} y={462}>LAYOUT: 3.8M x 3.8M</Caption>
      </g>
    </svg>
  );
}

export const PLATES = {
  arch: PlateArch,
  plan: PlatePlan,
  section: PlateSection,
  light: PlateLight,
  kitchenL: PlateKitchenL,
  kitchenU: PlateKitchenU,
} as const;

export type PlateKey = keyof typeof PLATES;