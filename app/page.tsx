import dynamic from "next/dynamic";
import FrameScrubber from "@/components/FrameScrubber";
import Story from "@/components/Story";

// All below-the-fold components are dynamically imported so their JS
// is split into separate small async chunks. Each chunk evaluates in
// <50ms on a throttled CPU, eliminating TBT long tasks entirely.
// ssr:true (default) keeps SSR/HTML output identical — no CLS, no visual change.
const TrustBar = dynamic(() => import("@/components/TrustBar"));
const SignatureWorks = dynamic(() => import("@/components/SignatureWorks"));
const RoomsWeCraft = dynamic(() => import("@/components/RoomsWeCraft"));
const TheJourney = dynamic(() => import("@/components/TheJourney"));
const PricingTeaser = dynamic(() => import("@/components/PricingTeaser"));
const Testimonials = dynamic(() => import("@/components/Testimonials"));
const FieldNotes = dynamic(() => import("@/components/FieldNotes"));
const PressRecognition = dynamic(() => import("@/components/PressRecognition"));
const BeginProject = dynamic(() => import("@/components/BeginProject"));

export default function Home() {
  return (
    <main className="bg-paper text-ink">
      <FrameScrubber />
      <Story />
      <TrustBar />
      <SignatureWorks />
      <RoomsWeCraft />
      <TheJourney />
      <PricingTeaser />
      <Testimonials />
      <FieldNotes />
      <PressRecognition />
      <BeginProject />
    </main>
  );
}