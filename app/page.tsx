import dynamic from "next/dynamic";
import FrameScrubber from "@/components/FrameScrubber";
import Story from "@/components/Story";
import TrustBar from "@/components/TrustBar";
import SignatureWorks from "@/components/SignatureWorks";

const RoomsWeCraft = dynamic(() => import("@/components/RoomsWeCraft"), {
  ssr: true,
});
const TheJourney = dynamic(() => import("@/components/TheJourney"), {
  ssr: true,
});
const PricingTeaser = dynamic(() => import("@/components/PricingTeaser"), {
  ssr: true,
});
const Testimonials = dynamic(() => import("@/components/Testimonials"), {
  ssr: true,
});
const FieldNotes = dynamic(() => import("@/components/FieldNotes"), {
  ssr: true,
});
const PressRecognition = dynamic(() => import("@/components/PressRecognition"), {
  ssr: true,
});
const BeginProject = dynamic(() => import("@/components/BeginProject"), {
  ssr: true,
});

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