import Image from "next/image";
import Link from "next/link";
import { Check } from "lucide-react";
import { ScrollReveal } from "@/components/ui/ScrollReveal";
import { visualAssets, cateringPricing, whatsapp } from "@/content/businessInfo";
import { TrackedLink } from "@/components/analytics/TrackedLink";

const eventSnippets = [
  "Birthdays",
  "Housewarmings",
  "Baby showers",
  "Diwali",
  "Family gatherings",
  "Festive events",
];

const dailyPoints = [
  "Posted fresh daily on WhatsApp",
  "Order dish by dish or a daily thaali",
  "Collection · Delivery within 2 mi on £25+",
];

export function ServicesSection() {
  return (
    <section className="bg-white py-12 md:py-16 px-5 lg:px-10" id="services">
      <div className="max-w-7xl mx-auto">
        <ScrollReveal>
          <div className="text-center mb-8">
            <p className="text-xs font-bold uppercase tracking-[0.2em] text-[#D9381E] mb-3">
              Two ways to order
            </p>
            <h2
              className="font-serif italic font-black text-[#1C0A00] text-balance"
              style={{ fontSize: "clamp(2rem, 4vw, 3rem)" }}
            >
              Catering for your event, plus a daily menu for nearby orders
            </h2>
          </div>
        </ScrollReveal>

        <div className="grid md:grid-cols-2 gap-6">

          {/* ── Catering card — CardHoverReveal ── */}
          <ScrollReveal delay={60}>
            <article className="group relative rounded-2xl overflow-hidden h-[500px] md:h-[520px] cursor-pointer shadow-md hover:shadow-2xl transition-shadow duration-500 border border-[#E8D5C0]">

              {/* Full-bleed image */}
              <Image
                alt="Rich North Indian butter chicken — Lehsun catering"
                className="absolute inset-0 object-cover w-full h-full group-hover:scale-105 transition-transform duration-700 ease-out"
                fill
                sizes="(max-width: 768px) 100vw, 50vw"
                src={visualAssets.cateringImage}
              />

              {/* Default overlay — desktop only; on mobile the content panel is always visible */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent pointer-events-none hidden md:block md:group-hover:opacity-0 transition-opacity duration-300" />
              <div className="absolute bottom-0 left-0 right-0 p-6 hidden md:block md:group-hover:opacity-0 transition-opacity duration-300 pointer-events-none">
                <span className="text-[10px] font-bold uppercase tracking-[0.2em] bg-[#D9381E] text-white px-3 py-1 rounded-full">
                  Event Catering
                </span>
                <h3 className="text-xl font-black text-white mt-3 leading-tight">
                  North Indian catering for your event
                </h3>
              </div>

              {/* Content panel — always visible on mobile, hover-reveal on desktop */}
              <div className="absolute bottom-0 left-0 right-0 md:translate-y-full md:group-hover:translate-y-0 transition-transform duration-500 ease-out bg-white p-6 border-t border-[#E8D5C0] rounded-b-2xl">
                <div className="flex items-center gap-2 mb-3">
                  <span className="text-[10px] font-bold uppercase tracking-[0.2em] bg-[#D9381E] text-white px-3 py-1 rounded-full">
                    Event Catering
                  </span>
                  <span className="text-xs font-bold text-[#D9381E]">{cateringPricing.startingPrice}</span>
                </div>
                <h3 className="text-lg font-black text-[#1C0A00] mb-2 leading-tight">
                  North Indian catering for your event
                </h3>
                <p className="text-[#6B3A2A] text-sm leading-relaxed mb-4">
                  Proper North Indian menus for birthdays, housewarmings, baby showers, family gatherings and festive occasions.
                </p>
                <div className="flex flex-wrap gap-1.5 mb-5">
                  {eventSnippets.map((e) => (
                    <span
                      key={e}
                      className="text-[11px] font-semibold px-2.5 py-1 rounded-full bg-[#FFF5E4] border border-[#E8D5C0] text-[#6B3A2A]"
                    >
                      {e}
                    </span>
                  ))}
                </div>
                <div className="flex flex-col sm:flex-row gap-2">
                  <TrackedLink
                    className="flex-1 text-center bg-[#D9381E] hover:bg-[#F5821F] text-white px-5 py-3 rounded-full text-sm font-bold uppercase tracking-wider transition-colors focus-ring cursor-pointer"
                    ctaText="Plan an Event"
                    destinationType="whatsapp"
                    href={whatsapp.cateringEnquiry}
                    intent="lead"
                    isPrimaryCta
                    leadType="catering_enquiry"
                    value={150}
                    placement="services_catering_card"
                    rel="noopener noreferrer"
                    target="_blank"
                  >
                    Plan an Event &rarr;
                  </TrackedLink>
                  <Link
                    href="/catering"
                    className="flex-1 text-center border border-[#E8D5C0] text-[#1C0A00] px-5 py-3 rounded-full text-sm font-semibold hover:border-[#F5821F] hover:text-[#F5821F] transition-colors focus-ring cursor-pointer"
                  >
                    See Full Menu
                  </Link>
                </div>
              </div>
            </article>
          </ScrollReveal>

          {/* ── Daily menu card — CardHoverReveal ── */}
          <ScrollReveal delay={120}>
            <article className="group relative rounded-2xl overflow-hidden h-[500px] md:h-[520px] cursor-pointer shadow-md hover:shadow-2xl transition-shadow duration-500 border border-[#E8D5C0]">

              {/* Full-bleed image */}
              <Image
                alt="Lehsun daily thaali — fresh North Indian food for home orders"
                className="absolute inset-0 object-cover w-full h-full group-hover:scale-105 transition-transform duration-700 ease-out"
                fill
                sizes="(max-width: 768px) 100vw, 50vw"
                src={visualAssets.dailyMenuImage}
              />

              {/* Default overlay — desktop only */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent pointer-events-none hidden md:block md:group-hover:opacity-0 transition-opacity duration-300" />
              <div className="absolute bottom-0 left-0 right-0 p-6 hidden md:block md:group-hover:opacity-0 transition-opacity duration-300 pointer-events-none">
                <span className="text-[10px] font-bold uppercase tracking-[0.2em] bg-[#2E8B7A] text-white px-3 py-1 rounded-full">
                  Daily Menu
                </span>
                <h3 className="text-xl font-black text-white mt-3 leading-tight">
                  Fresh North Indian meals, every day
                </h3>
              </div>

              {/* Content panel — always visible on mobile, hover-reveal on desktop */}
              <div className="absolute bottom-0 left-0 right-0 md:translate-y-full md:group-hover:translate-y-0 transition-transform duration-500 ease-out bg-white p-6 border-t border-[#E8D5C0] rounded-b-2xl">
                <div className="mb-3">
                  <span className="text-[10px] font-bold uppercase tracking-[0.2em] bg-[#2E8B7A] text-white px-3 py-1 rounded-full">
                    Daily Menu
                  </span>
                </div>
                <h3 className="text-lg font-black text-[#1C0A00] mb-2 leading-tight">
                  Fresh North Indian meals, every day
                </h3>
                <p className="text-[#6B3A2A] text-sm leading-relaxed mb-4">
                  A rotating daily menu posted fresh each morning for Ebbsfleet Valley collection and nearby local delivery.
                </p>
                <div className="space-y-1.5 mb-5">
                  {dailyPoints.map((point) => (
                    <div key={point} className="flex items-start gap-2">
                      <Check className="size-3.5 text-[#2E8B7A] flex-shrink-0 mt-0.5" aria-hidden />
                      <span className="text-sm text-[#6B3A2A]">{point}</span>
                    </div>
                  ))}
                </div>
                <Link
                  href="/menu"
                  className="block w-full text-center bg-[#2E8B7A] hover:bg-[#2E8B7A]/80 text-white px-6 py-3 rounded-full text-sm font-bold uppercase tracking-wider transition-colors focus-ring cursor-pointer"
                >
                  View Today&apos;s Menu &rarr;
                </Link>
              </div>
            </article>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
}
