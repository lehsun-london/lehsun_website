import { Clock, MessageCircle, Store, Truck } from "lucide-react";
import { TrackedLink } from "@/components/analytics/TrackedLink";
import { ScrollReveal } from "@/components/ui/ScrollReveal";
import { dailyMenuInfo, whatsapp, contact } from "@/content/businessInfo";

const infoCards = [
  {
    icon: Clock,
    color: "text-[#F5821F]",
    title: "Available every day",
    body: dailyMenuInfo.availability + ". Menu posted fresh each morning.",
  },
  {
    icon: MessageCircle,
    color: "text-[#2E8B7A]",
    title: "How to order",
    body: dailyMenuInfo.orderChannels,
  },
  {
    icon: Store,
    color: "text-[#D9381E]",
    title: "Collection",
    body: "Collect from Ebbsfleet Valley, DA10. We confirm your collection time when you order.",
  },
  {
    icon: Truck,
    color: "text-[#C8881A]",
    title: "Delivery",
    body: `Delivery within ${dailyMenuInfo.deliveryRadius} for orders above ${dailyMenuInfo.deliveryMinimum}. Ebbsfleet Valley and surrounding areas.`,
  },
];

export function OrderingInfoSection() {
  return (
    <section className="bg-[#FFF5E4] py-20 md:py-24 px-5 lg:px-10" id="ordering-info">
      <div className="max-w-7xl mx-auto">
        <ScrollReveal>
          <div className="text-center mb-12">
            <p className="text-xs font-bold uppercase tracking-[0.2em] text-[#D9381E] mb-3">
              Good to know
            </p>
            <h2
              className="font-serif italic font-black text-[#1C0A00] text-balance"
              style={{ fontSize: "clamp(1.8rem, 3.5vw, 2.5rem)" }}
            >
              Everything about ordering from us
            </h2>
          </div>
        </ScrollReveal>

        <div className="grid sm:grid-cols-2 gap-5 mb-10">
          {infoCards.map(({ icon: Icon, color, title, body }, i) => (
            <ScrollReveal key={title} delay={i * 60}>
              <div className="bg-white border border-[#E8D5C0] rounded-2xl p-7 shadow-sm h-full">
                <Icon className={`size-6 ${color} mb-4`} aria-hidden />
                <h3 className="font-black text-sm text-[#1C0A00] mb-2">{title}</h3>
                <p className="text-sm text-[#6B3A2A] leading-relaxed">{body}</p>
              </div>
            </ScrollReveal>
          ))}
        </div>

        <ScrollReveal delay={240}>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <TrackedLink
              className="flex items-center justify-center gap-2 bg-[#2E8B7A] hover:bg-[#2E8B7A]/80 text-white px-8 py-4 rounded-full font-bold text-sm uppercase tracking-wider transition-all focus-ring cursor-pointer"
              ctaText="Browse Menu on WhatsApp"
              destinationType="whatsapp"
              href={whatsapp.catalog}
              intent="menu"
              isPrimaryCta
              placement="ordering_info"
              rel="noopener noreferrer"
              target="_blank"
            >
              <MessageCircle className="size-4" aria-hidden />
              Browse Menu on WhatsApp
            </TrackedLink>
            <a
              href={`tel:${contact.phone.replace(/\s/g, "")}`}
              className="flex items-center justify-center gap-2 border border-[#E8D5C0] bg-white text-[#1C0A00] px-8 py-4 rounded-full font-semibold text-sm hover:border-[#2E8B7A] hover:text-[#2E8B7A] transition-colors focus-ring cursor-pointer"
            >
              Call to Order
            </a>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
