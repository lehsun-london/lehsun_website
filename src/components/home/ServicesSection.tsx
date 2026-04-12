import Image from "next/image";
import Link from "next/link";
import { ScrollReveal } from "@/components/ui/ScrollReveal";
import { visualAssets, cateringPricing, whatsapp } from "@/content/businessInfo";
import { TrackedLink } from "@/components/analytics/TrackedLink";

const eventSnippets = ["Birthdays", "Diwali", "Holi", "Family gatherings", "House parties", "Festive events"];

export function ServicesSection() {
  return (
    <section className="bg-white py-20 md:py-28 px-5 lg:px-10" id="services">
      <div className="max-w-7xl mx-auto">
        <ScrollReveal>
          <div className="text-center mb-12">
            <p className="text-xs font-bold uppercase tracking-[0.2em] text-[#D9381E] mb-3">
              Two ways to order
            </p>
            <h2
              className="font-serif italic font-black text-[#1C0A00] text-balance"
              style={{ fontSize: "clamp(2rem, 4vw, 3rem)" }}
            >
              Events or everyday — we&apos;ve got you covered
            </h2>
          </div>
        </ScrollReveal>

        <div className="grid md:grid-cols-2 gap-6">
          {/* Catering card */}
          <ScrollReveal delay={60}>
            <article className="group rounded-2xl overflow-hidden border border-[#E8D5C0] bg-white shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col h-full cursor-pointer">
              <div className="relative h-60 overflow-hidden">
                <Image
                  alt="Rich North Indian butter chicken — Lehsun catering"
                  className="object-cover w-full h-full group-hover:scale-105 transition-transform duration-500"
                  fill
                  sizes="(max-width: 768px) 100vw, 50vw"
                  src={visualAssets.cateringImage}
                />
                <div className="absolute top-4 left-4">
                  <span className="text-[10px] font-bold uppercase tracking-[0.2em] bg-[#D9381E] text-white px-3 py-1 rounded-full">
                    Event Catering
                  </span>
                </div>
              </div>

              <div className="p-7 flex flex-col flex-1">
                <h3 className="text-xl font-black text-[#1C0A00] mb-2">
                  North Indian catering for your event
                </h3>
                <p className="text-[#6B3A2A] text-sm leading-relaxed mb-5">
                  Proper North Indian menus for birthdays, family gatherings, festive
                  events and parties. Customised to your guests and occasion.
                </p>

                <div className="flex flex-wrap gap-2 mb-5">
                  {eventSnippets.map((e) => (
                    <span
                      key={e}
                      className="text-[11px] font-semibold px-3 py-1 rounded-full bg-[#FFF5E4] border border-[#E8D5C0] text-[#6B3A2A]"
                    >
                      {e}
                    </span>
                  ))}
                </div>

                <p className="text-xs font-bold uppercase tracking-widest text-[#D9381E] mb-6">
                  {cateringPricing.startingPrice} · {cateringPricing.minimumGuestsLabel}
                </p>

                <div className="mt-auto flex flex-col sm:flex-row gap-3">
                  <TrackedLink
                    className="flex-1 text-center bg-[#D9381E] hover:bg-[#F5821F] text-white px-6 py-3 rounded-full text-sm font-bold uppercase tracking-wider transition-colors focus-ring cursor-pointer"
                    ctaText="Plan an Event"
                    destinationType="whatsapp"
                    href={whatsapp.cateringEnquiry}
                    intent="lead"
                    isPrimaryCta
                    placement="services_catering_card"
                    rel="noopener noreferrer"
                    target="_blank"
                  >
                    Plan an Event &rarr;
                  </TrackedLink>
                  <Link
                    href="/catering"
                    className="flex-1 text-center border border-[#E8D5C0] text-[#1C0A00] px-6 py-3 rounded-full text-sm font-semibold hover:border-[#F5821F] hover:text-[#F5821F] transition-colors focus-ring cursor-pointer"
                  >
                    See Full Menu
                  </Link>
                </div>
              </div>
            </article>
          </ScrollReveal>

          {/* Daily menu card */}
          <ScrollReveal delay={120}>
            <article className="group rounded-2xl overflow-hidden border border-[#E8D5C0] bg-white shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col h-full cursor-pointer">
              <div className="relative h-60 overflow-hidden">
                <Image
                  alt="Lehsun daily thaali — fresh North Indian food for home orders"
                  className="object-cover w-full h-full group-hover:scale-105 transition-transform duration-500"
                  fill
                  sizes="(max-width: 768px) 100vw, 50vw"
                  src={visualAssets.dailyMenuImage}
                />
                <div className="absolute top-4 left-4">
                  <span className="text-[10px] font-bold uppercase tracking-[0.2em] bg-[#2E8B7A] text-white px-3 py-1 rounded-full">
                    Daily Menu
                  </span>
                </div>
              </div>

              <div className="p-7 flex flex-col flex-1">
                <h3 className="text-xl font-black text-[#1C0A00] mb-2">
                  Fresh North Indian meals, every day
                </h3>
                <p className="text-[#6B3A2A] text-sm leading-relaxed mb-5">
                  A rotating daily menu posted fresh each morning. Order via
                  WhatsApp catalogue, collect or get delivery within 2 miles.
                </p>

                <div className="space-y-2 mb-6">
                  {[
                    "Posted fresh daily on WhatsApp",
                    "Order dish by dish or a daily thaali",
                    "Collection · Delivery within 2 mi on £25+",
                  ].map((point) => (
                    <div key={point} className="flex items-start gap-2">
                      <span className="text-[#2E8B7A] font-bold mt-0.5 text-sm">✓</span>
                      <span className="text-sm text-[#6B3A2A]">{point}</span>
                    </div>
                  ))}
                </div>

                <div className="mt-auto">
                  <Link
                    href="/menu"
                    className="block w-full text-center bg-[#2E8B7A] hover:bg-[#2E8B7A]/80 text-white px-6 py-3 rounded-full text-sm font-bold uppercase tracking-wider transition-colors focus-ring cursor-pointer"
                  >
                    View Today&apos;s Menu &rarr;
                  </Link>
                </div>
              </div>
            </article>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
}
