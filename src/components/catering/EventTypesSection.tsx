import { Cake, Home, PartyPopper, Sparkles, Palette, Gift, Baby, Heart, Star, Sun } from "lucide-react";
import { ScrollReveal } from "@/components/ui/ScrollReveal";
import { eventTypes } from "@/content/businessInfo";

const eventIcons = [Cake, Home, PartyPopper, Sparkles, Palette, Gift, Sun, Baby, Heart, Star];

export function EventTypesSection() {
  return (
    <section className="bg-[#FFF5E4] py-10 md:py-14 px-5 lg:px-10 border-y border-[#E8D5C0]">
      <div className="max-w-7xl mx-auto">
        <ScrollReveal>
          <div className="text-center mb-6">
            <p className="text-xs font-bold uppercase tracking-[0.2em] text-[#D9381E] mb-3">
              Events we cater for
            </p>
            <h2
              className="font-serif italic font-black text-[#1C0A00] text-balance"
              style={{ fontSize: "clamp(1.8rem, 3.5vw, 2.5rem)" }}
            >
              Every occasion, celebrated with great food
            </h2>
          </div>
        </ScrollReveal>

        <ScrollReveal delay={80}>
          <div className="flex flex-wrap justify-center gap-3">
            {eventTypes.map(({ label }, i) => {
              const Icon = eventIcons[i % eventIcons.length];
              return (
                <div
                  key={label}
                  className="flex items-center gap-2 bg-white border border-[#E8D5C0] rounded-full px-5 py-2.5 shadow-sm"
                >
                  <Icon className="size-3.5 text-[#F5821F]" aria-hidden />
                  <span className="text-sm font-semibold text-[#1C0A00]">{label}</span>
                </div>
              );
            })}
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
