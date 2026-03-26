import Image from "next/image";
import { TrackedLink } from "../analytics/TrackedLink";

export function HeroSection() {
  return (
    <section
      className="relative h-screen flex items-center justify-center overflow-hidden"
      id="home"
    >
      <Image
        alt="North Indian feast with rich gravies and warm festive lighting"
        className="absolute inset-0 z-0 object-cover"
        fill
        priority
        sizes="100vw"
        src="/assets/stitch/lehsun-branded-final/hero-bg.png"
      />

      <div className="absolute inset-0 z-0 bg-gradient-to-b from-[#2b1307]/40 via-[#3d1c0f]/50 to-[#2a1309]/75" />
      <div className="relative z-10 text-center px-4 max-w-3xl flex flex-col items-center gap-4">
        <h1 className="text-balance text-primary text-4xl md:text-5xl lg:text-6xl font-black leading-[0.95] tracking-tight">
          North Indian Catering in Dartford &amp; Ebbsfleet Valley
        </h1>
        <p className="text-balance text-white italic font-serif text-xl md:text-2xl leading-tight">
          Real North Indian flavours — the kind you miss from back home.
        </p>
        <p className="text-white text-base font-medium max-w-[44ch] mx-auto opacity-95 leading-relaxed">
          Based in Ebbsfleet Valley, serving Dartford, Gravesend, Northfleet
          and nearby Kent.
        </p>
        <div className="inline-flex items-center rounded-full border border-white/25 bg-white/10 px-4 py-2 text-xs font-semibold uppercase tracking-[0.18em] text-white/90 backdrop-blur-sm">
          ⭐ 5-Star Food Hygiene Rated
        </div>
        <div className="flex flex-col sm:flex-row gap-4 justify-center mt-1">
          <TrackedLink
            className="bg-[#D9381E] text-white h-14 px-10 rounded-full font-bold uppercase tracking-widest hover:bg-[#F28C28] transition-colors shadow-lg shadow-vermillion/20 flex items-center justify-center focus-ring"
            ctaText="Plan Your Event"
            destinationType="anchor"
            eventName="click_plan_event"
            href="#catering"
            placement="hero"
          >
            Plan Your Event
          </TrackedLink>
          <TrackedLink
            className="border-2 border-white text-white h-14 px-10 rounded-full font-bold uppercase tracking-widest hover:bg-white hover:text-[#D9381E] transition-all flex items-center justify-center focus-ring"
            ctaText="View Today's Menu"
            destinationType="whatsapp"
            eventName="click_view_menu"
            href="https://wa.me/c/447768892652"
            placement="hero"
            rel="noopener noreferrer"
            target="_blank"
          >
            View Daily Menu
          </TrackedLink>
        </div>
        <p className="text-sm font-medium text-white/80">
          Perfect for birthdays, house parties and family gatherings.
        </p>
      </div>
      <TrackedLink
        className="absolute bottom-10 left-1/2 -translate-x-1/2 motion-safe:animate-bounce focus-ring rounded-sm"
        ctaText="scroll_down"
        destinationType="anchor"
        eventName="click_scroll_section"
        href="#about"
        placement="hero"
      >
        <span aria-hidden className="text-white text-3xl">
          ↓
        </span>
      </TrackedLink>
    </section>
  );
}
