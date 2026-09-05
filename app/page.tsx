import dynamic from "next/dynamic";
import FrameScrubber from "@/components/FrameScrubber";
import Story from "@/components/Story";
import TrustBar from "@/components/TrustBar";
import SignatureWorks from "@/components/SignatureWorks";

import RoomsWeCraft from "@/components/RoomsWeCraft";
import TheJourney from "@/components/TheJourney";
import PricingTeaser from "@/components/PricingTeaser";
import FieldNotes from "@/components/FieldNotes";
import PressRecognition from "@/components/PressRecognition";
import BeginProject from "@/components/BeginProject";

const Testimonials = dynamic(() => import("@/components/Testimonials"), {
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