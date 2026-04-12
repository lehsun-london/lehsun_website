import { Check } from "lucide-react";
import { TrackedLink } from "@/components/analytics/TrackedLink";
import { ScrollReveal } from "@/components/ui/ScrollReveal";
import { cateringPricing, whatsapp } from "@/content/businessInfo";

const included = [
  "Starters of your choice",
  "Mains — veg and/or non-veg",
  "Rice and breads",
  "Desserts",
  "Condiments and salads",
  "Freshly cooked on the day",
];

export function PricingSection() {
  return (
    <section className="bg-[#FFF5E4] py-12 md:py-16 px-5 lg:px-10" id="pricing">
      <div className="max-w-4xl mx-auto">
        <ScrollReveal>
          <div className="text-center mb-6">
            <p className="text-xs font-bold uppercase tracking-[0.2em] text-[#D9381E] mb-3">
              Pricing
            </p>
            <h2
              className="font-serif italic font-black text-[#1C0A00] text-balance"
              style={{ fontSize: "clamp(1.8rem, 3.5vw, 2.5rem)" }}
            >
              Simple, transparent pricing
            </h2>
          </div>
        </ScrollReveal>

        <ScrollReveal delay={80}>
          <div className="bg-white border border-[#E8D5C0] rounded-2xl shadow-sm overflow-hidden">
            <div className="border-b border-[#E8D5C0] p-8 md:p-10 text-center">
              <p className="text-xs font-bold uppercase tracking-[0.2em] text-[#6B3A2A] mb-2">Starting from</p>
              <div className="flex items-end justify-center gap-2 mb-3">
                <span
                  className="font-serif font-black text-[#F5821F] leading-none"
                  style={{ fontSize: "clamp(4rem, 10vw, 6rem)" }}
                >
                  £11.99
                </span>
                <span className="text-[#6B3A2A] font-semibold pb-3">per head</span>
              </div>
              <p className="text-sm text-[#6B3A2A] font-semibold">
                Minimum {cateringPricing.minimumGuests} guests
              </p>
            </div>

            <div className="p-8 md:p-10">
              <p className="text-xs font-bold uppercase tracking-[0.2em] text-[#6B3A2A] mb-5">
                What&apos;s included
              </p>
              <div className="grid sm:grid-cols-2 gap-3 mb-8">
                {included.map((item) => (
                  <div key={item} className="flex items-center gap-3">
                    <Check className="size-4 text-[#2E8B7A] flex-shrink-0" aria-hidden />
                    <span className="text-sm font-medium text-[#1C0A00]">{item}</span>
                  </div>
                ))}
              </div>

              <div className="flex flex-col sm:flex-row gap-3">
                <TrackedLink
                  className="flex-1 flex items-center justify-center gap-2 bg-[#D9381E] hover:bg-[#F5821F] text-white px-6 py-3.5 rounded-full font-bold text-sm uppercase tracking-wider transition-all focus-ring cursor-pointer"
                  ctaText="Get Quote on WhatsApp"
                  destinationType="whatsapp"
                  href={whatsapp.cateringEnquiry}
                  intent="lead"
                  isPrimaryCta
                  leadType="catering_enquiry"
                  value={150}
                  placement="pricing_section"
                  rel="noopener noreferrer"
                  target="_blank"
                >
                  Get a Quote on WhatsApp
                </TrackedLink>
                <TrackedLink
                  className="flex-1 flex items-center justify-center gap-2 border border-[#E8D5C0] text-[#6B3A2A] px-6 py-3.5 rounded-full font-semibold text-sm hover:border-[#F5821F] hover:text-[#F5821F] transition-colors focus-ring cursor-pointer"
                  ctaText="Request Full Brochure"
                  destinationType="whatsapp"
                  href={whatsapp.brochure}
                  intent="lead"
                  leadType="catering_enquiry"
                  value={150}
                  placement="pricing_brochure"
                  rel="noopener noreferrer"
                  target="_blank"
                >
                  Request Full Brochure
                </TrackedLink>
              </div>
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
