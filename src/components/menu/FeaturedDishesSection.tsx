import Image from "next/image";
import { TrackedLink } from "@/components/analytics/TrackedLink";
import { ScrollReveal } from "@/components/ui/ScrollReveal";
import { dailyMenuDishes, whatsapp } from "@/content/businessInfo";

export function FeaturedDishesSection() {
  return (
    <section className="bg-white py-20 md:py-24 px-5 lg:px-10" id="dishes">
      <div className="max-w-7xl mx-auto">
        <ScrollReveal>
          <div className="text-center mb-12">
            <p className="text-xs font-bold uppercase tracking-[0.2em] text-[#D9381E] mb-3">
              On the menu
            </p>
            <h2
              className="font-serif italic font-black text-[#1C0A00] text-balance"
              style={{ fontSize: "clamp(1.8rem, 3.5vw, 2.5rem)" }}
            >
              A taste of what we cook
            </h2>
          </div>
        </ScrollReveal>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {dailyMenuDishes.map((dish, i) => (
            <ScrollReveal key={dish.title} delay={i * 60}>
              <article
                className="group rounded-2xl overflow-hidden border border-[#E8D5C0] bg-white shadow-sm hover:shadow-lg transition-all duration-200 hover:-translate-y-1 cursor-pointer"
                style={{ borderTopColor: dish.borderColor, borderTopWidth: "3px" }}
              >
                <div className="relative h-48 overflow-hidden">
                  <Image
                    alt={dish.alt}
                    className="object-cover w-full h-full group-hover:scale-105 transition-transform duration-500"
                    fill
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                    src={dish.image}
                  />
                </div>
                <div className="p-5">
                  <h3 className="font-black text-sm text-[#1C0A00] mb-2">{dish.title}</h3>
                  <p className="text-xs text-[#6B3A2A] leading-relaxed">{dish.note}</p>
                </div>
              </article>
            </ScrollReveal>
          ))}
        </div>

        <ScrollReveal delay={240}>
          <div className="text-center mt-10">
            <TrackedLink
              className="inline-flex items-center gap-2 bg-[#2E8B7A] hover:bg-[#2E8B7A]/80 text-white px-8 py-4 rounded-full font-bold text-sm uppercase tracking-wider transition-all focus-ring cursor-pointer"
              ctaText="Browse Full Menu"
              destinationType="whatsapp"
              href={whatsapp.catalog}
              intent="menu"
              isPrimaryCta
              placement="featured_dishes"
              rel="noopener noreferrer"
              target="_blank"
            >
              Browse Today&apos;s Full Menu &rarr;
            </TrackedLink>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
