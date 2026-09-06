"use client";

import { useState, type FormEvent } from "react";
import Reveal from "./Reveal";
import TextReveal from "./TextReveal";
import { PlateLight } from "./plates";
import { contact, costCalculator, scarcityNotice, locationsData } from "@/lib/site";

const consultationSlots = [
  "Tomorrow, 11:00 AM",
  "Tomorrow, 3:30 PM",
  "Thursday, 10:30 AM",
  "Thursday, 4:00 PM",
  "Friday, 2:00 PM",
  "Saturday, 11:30 AM",
];

export default function CTA() {
  const [sent, setSent] = useState(false);
  const [selectedSlot, setSelectedSlot] = useState(consultationSlots[0]);
  const [consultationBooked, setConsultationBooked] = useState(false);

  // Form states
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    type: "3 BHK",
    tier: "Signature",
    city: "Mumbai",
    timeline: "3–6 Months",
    message: "",
  });

  const onSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSent(true);
  };

  const cleanPhone = (contact.whatsapp || "+919820012345").replace(/[^0-9]/g, "");
  const whatsappUrl = `https://wa.me/${cleanPhone}?text=${encodeURIComponent(
    "Hello Lumière Interiors, I would like to schedule a project brief consultation."
  )}`;

  return (
    <section
      id="contact"
      className="relative flex min-h-[92svh] flex-col justify-center overflow-hidden scroll-mt-24 bg-ink py-32 text-paper md:py-40"
    >
      {/* faint light-study plate as cinematic texture */}
      <Reveal
        as="div"
        className="pointer-events-none absolute -bottom-32 -left-24 hidden text-paper/5 lg:block"
        y={0}
        duration={1.8}
        start="top 90%"
      >
        <PlateLight className="h-[560px] w-auto rotate-[-6deg]" />
      </Reveal>

      <div className="relative z-10 mx-auto w-full max-w-[1440px] px-6 md:px-10 lg:px-16">
        <Reveal as="div" y={0} duration={1}>
          <div className="flex items-center gap-5">
            <span className="font-mono text-[11px] text-stone">17</span>
            <span className="text-[11px] uppercase tracking-luxe text-stone">
              Contact &amp; Discovery
            </span>
            <span className="h-px flex-1 bg-line-light" />
          </div>
        </Reveal>

        <div className="mt-14 max-w-3xl md:mt-20">
          <Reveal as="div" y={60} duration={1.5} start="top 90%">
            <TextReveal
              as="h2"
              className="font-sans text-[clamp(2rem,6vw,5.4rem)] font-light uppercase leading-[1.02] tracking-[0.02em]"
              speed={1.1}
              stagger={0.07}
              delay={0.2}
            >
              <span className="block" data-line>Let&apos;s create a space</span>
              <span className="block" data-line>
                that feels like <em className="font-serif font-light italic text-brass">you</em>.
              </span>
            </TextReveal>
          </Reveal>
        </div>

        {/* Scarcity Banner & Studio Direct Lines */}
        <Reveal as="div" y={34} duration={1.1} delay={0.2} start="top 96%">
          <div className="mt-12 rounded-xs border border-line-light/60 bg-paper/5 p-6 backdrop-blur-sm md:p-8">
            <div className="flex flex-col justify-between gap-4 border-b border-line-light pb-4 md:flex-row md:items-center">
              <span className="font-mono text-[11px] uppercase tracking-luxe text-brass">
                {scarcityNotice.note}
              </span>
              <span className="font-mono text-[10px] text-stone">
                {contact.responseTime} &middot; {contact.hours}
              </span>
            </div>

            <div className="mt-6 grid gap-6 sm:grid-cols-2 lg:grid-cols-4 font-sans text-[13px]">
              <div>
                <p className="font-mono text-[9px] uppercase tracking-luxe text-stone">New Business</p>
                <a href={`mailto:${contact.email}`} className="mt-1 block font-serif text-lg italic text-paper hover:text-brass">
                  {contact.email}
                </a>
              </div>
              <div>
                <p className="font-mono text-[9px] uppercase tracking-luxe text-stone">Flagship Line</p>
                <a href={`tel:${contact.phone.replace(/\s+/g, "")}`} className="mt-1 block font-serif text-lg italic text-paper hover:text-brass">
                  {contact.phone}
                </a>
              </div>
              <div>
                <p className="font-mono text-[9px] uppercase tracking-luxe text-stone">Mumbai Atelier</p>
                <p className="mt-1 text-stone/80 text-[12px]">{contact.address}</p>
              </div>
              <div>
                <p className="font-mono text-[9px] uppercase tracking-luxe text-stone">Instant WhatsApp</p>
                <a
                  href={whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-1 inline-flex items-center gap-2 font-mono text-[11px] uppercase text-[#25D366] hover:underline"
                >
                  <span>Chat on WhatsApp</span>
                  <span>↗</span>
                </a>
              </div>
            </div>
          </div>
        </Reveal>

        {/* Lead Form & Consultation Scheduler Grid */}
        <div className="mt-16 grid gap-12 lg:grid-cols-12 lg:gap-16">
          {/* Main Comprehensive Lead Form */}
          <div className="lg:col-span-7">
            <Reveal as="div" y={40} duration={1.2} delay={0.2} start="top 96%">
              <div className="border border-line-light p-6 md:p-10">
                <span className="font-mono text-[10px] uppercase tracking-luxe text-brass block">
                  Project Brief Inquiry
                </span>
                <h3 className="mt-2 font-serif text-2xl text-paper">Tell us about your space</h3>

                {sent ? (
                  <div className="flex min-h-[300px] flex-col justify-center text-center">
                    <span className="font-mono text-xs uppercase text-brass">Inquiry Received</span>
                    <h4 className="mt-3 font-serif text-3xl italic text-paper md:text-4xl">
                      Thank you, {formData.name || "Client"}.
                    </h4>
                    <p className="mx-auto mt-4 max-w-md text-sm leading-[1.8] text-stone font-sans">
                      We have logged your {formData.type} commission inquiry for {formData.city}. Our studio architect will review your parameters and reach out within 24 hours.
                    </p>
                  </div>
                ) : (
                  <form onSubmit={onSubmit} className="mt-8 space-y-6 font-sans">
                    <div className="grid gap-6 sm:grid-cols-2">
                      <div>
                        <label htmlFor="cta-name" className="block text-[10px] uppercase tracking-luxe text-stone">
                          Your Full Name *
                        </label>
                        <input
                          id="cta-name"
                          type="text"
                          required
                          value={formData.name}
                          onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                          placeholder="e.g. Rahul Kapoor"
                          className="mt-2 w-full border-b border-line-light bg-transparent py-2 text-paper outline-none transition-colors placeholder:text-stone/40 focus:border-brass"
                        />
                      </div>
                      <div>
                        <label htmlFor="cta-email" className="block text-[10px] uppercase tracking-luxe text-stone">
                          Email Address *
                        </label>
                        <input
                          id="cta-email"
                          type="email"
                          required
                          value={formData.email}
                          onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                          placeholder="rahul@domain.com"
                          className="mt-2 w-full border-b border-line-light bg-transparent py-2 text-paper outline-none transition-colors placeholder:text-stone/40 focus:border-brass"
                        />
                      </div>
                    </div>

                    <div className="grid gap-6 sm:grid-cols-2">
                      <div>
                        <label htmlFor="cta-phone" className="block text-[10px] uppercase tracking-luxe text-stone">
                          Phone / WhatsApp *
                        </label>
                        <input
                          id="cta-phone"
                          type="tel"
                          required
                          value={formData.phone}
                          onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                          placeholder="+91 98200..."
                          className="mt-2 w-full border-b border-line-light bg-transparent py-2 text-paper outline-none transition-colors placeholder:text-stone/40 focus:border-brass"
                        />
                      </div>
                      <div>
                        <label htmlFor="cta-city" className="block text-[10px] uppercase tracking-luxe text-stone">
                          Project City *
                        </label>
                        <select
                          id="cta-city"
                          value={formData.city}
                          onChange={(e) => setFormData({ ...formData, city: e.target.value })}
                          className="mt-2 w-full cursor-pointer border-b border-line-light bg-transparent py-2 text-paper outline-none focus:border-brass"
                        >
                          <option value="Mumbai" className="bg-ink text-paper">Mumbai</option>
                          <option value="New Delhi" className="bg-ink text-paper">New Delhi / NCR</option>
                          <option value="Bengaluru" className="bg-ink text-paper">Bengaluru</option>
                          <option value="Hyderabad" className="bg-ink text-paper">Hyderabad</option>
                          <option value="Goa" className="bg-ink text-paper">Goa</option>
                          <option value="Other" className="bg-ink text-paper">Other Location</option>
                        </select>
                      </div>
                    </div>

                    <div className="grid gap-6 sm:grid-cols-3">
                      <div>
                        <label htmlFor="cta-type" className="block text-[10px] uppercase tracking-luxe text-stone">
                          Property Typology
                        </label>
                        <select
                          id="cta-type"
                          value={formData.type}
                          onChange={(e) => setFormData({ ...formData, type: e.target.value })}
                          className="mt-2 w-full cursor-pointer border-b border-line-light bg-transparent py-2 text-paper outline-none focus:border-brass"
                        >
                          {costCalculator.propertyTypes.map((t) => (
                            <option key={t} value={t} className="bg-ink text-paper">
                              {t}
                            </option>
                          ))}
                        </select>
                      </div>

                      <div>
                        <label htmlFor="cta-tier" className="block text-[10px] uppercase tracking-luxe text-stone">
                          Target Tier
                        </label>
                        <select
                          id="cta-tier"
                          value={formData.tier}
                          onChange={(e) => setFormData({ ...formData, tier: e.target.value })}
                          className="mt-2 w-full cursor-pointer border-b border-line-light bg-transparent py-2 text-paper outline-none focus:border-brass"
                        >
                          <option value="Essential" className="bg-ink text-paper">Essential (from ₹1,800/sqft)</option>
                          <option value="Signature" className="bg-ink text-paper">Signature (from ₹2,800/sqft)</option>
                          <option value="Bespoke" className="bg-ink text-paper">Bespoke (from ₹4,500/sqft)</option>
                        </select>
                      </div>

                      <div>
                        <label htmlFor="cta-timeline" className="block text-[10px] uppercase tracking-luxe text-stone">
                          Desired Timeline
                        </label>
                        <select
                          id="cta-timeline"
                          value={formData.timeline}
                          onChange={(e) => setFormData({ ...formData, timeline: e.target.value })}
                          className="mt-2 w-full cursor-pointer border-b border-line-light bg-transparent py-2 text-paper outline-none focus:border-brass"
                        >
                          <option value="Immediate" className="bg-ink text-paper">Immediate (1–2 Months)</option>
                          <option value="3–6 Months" className="bg-ink text-paper">3–6 Months</option>
                          <option value="6+ Months" className="bg-ink text-paper">6+ Months (Planning)</option>
                        </select>
                      </div>
                    </div>

                    <div>
                      <label htmlFor="cta-msg" className="block text-[10px] uppercase tracking-luxe text-stone">
                        About the Space &amp; Key Requirements
                      </label>
                      <textarea
                        id="cta-msg"
                        rows={3}
                        value={formData.message}
                        onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                        placeholder="Tell us about the property, current state (bare shell / resale), and any specific material desires."
                        className="mt-2 w-full resize-none border-b border-line-light bg-transparent py-2 text-paper outline-none transition-colors placeholder:text-stone/40 focus:border-brass"
                      />
                    </div>

                    <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between pt-4">
                      <p className="text-[11px] text-stone">
                        Zero spam &middot; Protected by NDA
                      </p>
                      <button
                        type="submit"
                        className="btn-fill px-10 py-4 text-[11px] uppercase tracking-luxe"
                      >
                        Submit Project Brief →
                      </button>
                    </div>
                  </form>
                )}
              </div>
            </Reveal>
          </div>

          {/* Interactive Consultation Calendar Slot Picker */}
          <div className="lg:col-span-5 space-y-8">
            <Reveal as="div" y={40} duration={1.2} delay={0.25} start="top 96%">
              <div className="rounded-xs border border-line-light bg-paper/5 p-6 md:p-8 backdrop-blur-sm">
                <span className="font-mono text-[10px] uppercase tracking-luxe text-brass block">
                  Book A Discovery Session
                </span>
                <h3 className="mt-2 font-serif text-2xl text-paper">
                  30-Min Architectural Consultation
                </h3>
                <p className="mt-2 text-[13px] text-stone font-sans">
                  Select a live discovery slot with one of our studio partners to evaluate floor plans and initial budget feasibility.
                </p>

                {!consultationBooked ? (
                  <div className="mt-6 space-y-3 font-mono text-[11px]">
                    <p className="text-[10px] uppercase text-stone">Available Studio Slots:</p>
                    <div className="grid gap-2 sm:grid-cols-2">
                      {consultationSlots.map((slot) => (
                        <button
                          key={slot}
                          type="button"
                          onClick={() => setSelectedSlot(slot)}
                          className={`p-3 text-left border rounded-xs transition-all duration-300 ${
                            selectedSlot === slot
                              ? "border-brass bg-brass/10 text-paper"
                              : "border-line-light/50 text-stone hover:border-paper/40 hover:text-paper"
                          }`}
                        >
                          {slot}
                        </button>
                      ))}
                    </div>

                    <button
                      type="button"
                      onClick={() => setConsultationBooked(true)}
                      className="mt-6 block w-full rounded-xs bg-paper py-3.5 text-center font-mono text-[11px] uppercase tracking-luxe text-ink transition-transform hover:bg-brass hover:text-paper"
                    >
                      Confirm Slot: {selectedSlot} →
                    </button>
                  </div>
                ) : (
                  <div className="mt-6 rounded-xs border border-emerald-500/40 bg-emerald-950/20 p-5 text-center">
                    <span className="font-mono text-xs uppercase text-emerald-400">Slot Confirmed</span>
                    <h5 className="mt-1 font-serif text-lg text-paper">{selectedSlot}</h5>
                    <p className="mt-2 text-[12px] text-stone">
                      Calendar invite and video meeting link have been prepared. We look forward to meeting you.
                    </p>
                  </div>
                )}
              </div>
            </Reveal>

            {/* Studio Map Visual */}
            <Reveal as="div" y={30} duration={1.1} delay={0.3} start="top 96%">
              <div className="overflow-hidden rounded-xs border border-line-light bg-ink-2 p-6">
                <div className="flex items-center justify-between border-b border-line-light pb-3">
                  <span className="font-mono text-[10px] uppercase text-stone">Studio Ateliers</span>
                  <span className="font-mono text-[10px] text-brass">Mumbai &middot; New Delhi</span>
                </div>
                <div className="relative mt-4 h-40 w-full overflow-hidden rounded-xs bg-[radial-gradient(#d4af37_1px,transparent_1px)] [background-size:14px_14px] opacity-60 flex items-center justify-center">
                  <div className="flex items-center gap-2 rounded-full border border-brass/50 bg-ink px-4 py-1.5 shadow-2xl">
                    <span className="h-2 w-2 rounded-full bg-brass animate-pulse" />
                    <span className="font-mono text-[10px] uppercase text-paper">
                      Flagship Atelier &middot; Bandra West
                    </span>
                  </div>
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}