import { Bell, ShoppingBag, MessageCircle, Store } from "lucide-react";
import { ScrollReveal } from "@/components/ui/ScrollReveal";

const steps = [
  {
    icon: Bell,
    step: "01",
    title: "Menu posted daily",
    body: "Each morning we post today's dishes on WhatsApp. Follow us to see what's available.",
    color: "bg-[#F5821F]",
  },
  {
    icon: ShoppingBag,
    step: "02",
    title: "Browse the catalogue",
    body: "Open our WhatsApp catalogue to see all dishes with descriptions. Pick what you want.",
    color: "bg-[#D9381E]",
  },
  {
    icon: MessageCircle,
    step: "03",
    title: "Place your order",
    body: "Send us a message with your order. We confirm availability and give you a collection time.",
    color: "bg-[#2E8B7A]",
  },
  {
    icon: Store,
    step: "04",
    title: "Collect or get local delivery",
    body: "Collect from Ebbsfleet Valley, or we deliver within 2 miles on orders of £25 or more.",
    color: "bg-[#C8881A]",
  },
];

export function HowItWorksSection() {
  return (
    <section className="bg-[#FFF5E4] py-12 md:py-16 px-5 lg:px-10 border-y border-[#E8D5C0]" id="ordering">
      <div className="max-w-7xl mx-auto">
        <ScrollReveal>
          <div className="text-center mb-8">
            <p className="text-xs font-bold uppercase tracking-[0.2em] text-[#D9381E] mb-3">
              How to order
            </p>
            <h2
              className="font-serif italic font-black text-[#1C0A00] text-balance"
              style={{ fontSize: "clamp(1.8rem, 3.5vw, 2.5rem)" }}
            >
              Fresh food in four simple steps
            </h2>
          </div>
        </ScrollReveal>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {steps.map(({ icon: Icon, step, title, body, color }, i) => (
            <ScrollReveal key={step} delay={i * 70}>
              <article className="bg-white border border-[#E8D5C0] rounded-2xl p-7 shadow-sm h-full">
                <div className="flex items-center justify-between mb-6">
                  <div className={`flex items-center justify-center size-11 rounded-full ${color} text-white`}>
                    <Icon className="size-5" aria-hidden />
                  </div>
                  <span className="text-4xl font-black tracking-tight text-[#E8D5C0]">{step}</span>
                </div>
                <h3 className="text-base font-black text-[#1C0A00] mb-2">{title}</h3>
                <p className="text-sm leading-relaxed text-[#6B3A2A]">{body}</p>
              </article>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
