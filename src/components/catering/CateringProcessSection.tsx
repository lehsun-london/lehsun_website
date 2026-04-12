import { MessageCircle, ClipboardList, UtensilsCrossed, Truck } from "lucide-react";
import { ScrollReveal } from "@/components/ui/ScrollReveal";

const steps = [
  {
    icon: MessageCircle,
    step: "01",
    title: "Send us a message",
    body: "Drop us a WhatsApp with your event date, guest count, and area. We reply quickly with availability.",
  },
  {
    icon: ClipboardList,
    step: "02",
    title: "We plan the menu together",
    body: "Choose from our full North Indian menu — starters, mains, breads, rice and desserts — tailored to your occasion.",
  },
  {
    icon: UtensilsCrossed,
    step: "03",
    title: "Food cooked fresh for your event",
    body: "Everything made fresh on the day. No batch-cooked or pre-frozen shortcuts.",
  },
  {
    icon: Truck,
    step: "04",
    title: "Delivered on time",
    body: "We deliver to your location across Dartford, Gravesend, Ebbsfleet Valley, Bexley and Orpington.",
  },
];

export function CateringProcessSection() {
  return (
    <section className="bg-white py-20 md:py-24 px-5 lg:px-10" id="process">
      <div className="max-w-7xl mx-auto">
        <ScrollReveal>
          <div className="text-center mb-12">
            <p className="text-xs font-bold uppercase tracking-[0.2em] text-[#D9381E] mb-3">
              How it works
            </p>
            <h2
              className="font-serif italic font-black text-[#1C0A00] text-balance"
              style={{ fontSize: "clamp(1.8rem, 3.5vw, 2.5rem)" }}
            >
              A calm process for hosts who want the food handled properly
            </h2>
          </div>
        </ScrollReveal>

        <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-4">
          {steps.map(({ icon: Icon, step, title, body }, i) => (
            <ScrollReveal key={step} delay={i * 70}>
              <article className="bg-[#FFFDF9] border border-[#E8D5C0] rounded-2xl p-7 shadow-sm h-full">
                <div className="flex items-center justify-between mb-6">
                  <div className="flex items-center justify-center size-11 rounded-full bg-[#D9381E] text-white">
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
