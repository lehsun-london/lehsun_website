import Image from "next/image";
import { Flame, Users, BadgeCheck } from "lucide-react";
import { ScrollReveal } from "@/components/ui/ScrollReveal";
import { brandLine, reviewStats, visualAssets } from "@/content/businessInfo";

const pillars = [
  {
    icon: Flame,
    color: "text-[#F5821F]",
    title: "Authentic flavour — not toned down",
    body: "Cooked with the depth and spice people actually miss. No adaptations for a British palate, no shortcuts.",
  },
  {
    icon: Users,
    color: "text-[#2E8B7A]",
    title: "Made for gatherings",
    body: "Built around birthdays, house parties, Diwali and family events where the food is part of the occasion.",
  },
  {
    icon: BadgeCheck,
    color: "text-[#D9381E]",
    title: "Trusted to host with",
    body: "5-star food hygiene rated, 5.0 on Google. The kind of reassurance you need before a big occasion.",
  },
];

export function AboutSection() {
  return (
    <section className="bg-[#FFF5E4] py-20 md:py-28 px-5 lg:px-10 scroll-mt-20" id="about">
      <div className="max-w-7xl mx-auto">
        <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
          {/* Text */}
          <ScrollReveal>
            <div>
              <p className="text-xs font-bold uppercase tracking-[0.2em] text-[#D9381E] mb-4">
                The Lehsun Story
              </p>
              <h2
                className="font-serif italic font-black text-[#1C0A00] mb-6 text-balance leading-tight"
                style={{ fontSize: "clamp(2rem, 4vw, 3rem)" }}
              >
                Proper North Indian flavours, made the way you remember
              </h2>
              <p className="text-[#6B3A2A] text-base leading-relaxed mb-4 max-w-[38rem]">
                Lehsun — meaning garlic in Hindi — was built for one purpose: to bring
                the real flavours of North Indian cooking to gatherings in Kent. Not a
                toned-down version. Not adapted. Just the food people genuinely miss.
              </p>
              <p className="text-[#F5821F] font-bold italic font-serif text-lg mb-10">
                &ldquo;{brandLine}&rdquo;
              </p>

              <div className="space-y-6">
                {pillars.map(({ icon: Icon, color, title, body }) => (
                  <div key={title} className="flex items-start gap-4">
                    <div className={`mt-0.5 flex-shrink-0 ${color}`}>
                      <Icon className="size-5" aria-hidden />
                    </div>
                    <div>
                      <p className="font-bold text-[#1C0A00] text-sm mb-1">{title}</p>
                      <p className="text-[#6B3A2A] text-sm leading-relaxed">{body}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </ScrollReveal>

          {/* Image + trust signals */}
          <ScrollReveal delay={100}>
            <div className="space-y-4">
              {/* Main food image */}
              <div className="relative rounded-2xl overflow-hidden h-72 shadow-lg border border-[#E8D5C0]">
                <Image
                  alt="Lehsun litti chokha — traditional North Indian cooking at its best"
                  className="object-cover"
                  fill
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  src={visualAssets.aboutImage}
                />
              </div>

              {/* Trust duo */}
              <div className="grid grid-cols-2 gap-4">
                <div className="bg-white rounded-2xl border border-[#E8D5C0] p-5 shadow-sm">
                  <BadgeCheck className="size-7 text-[#2E8B7A] mb-3" aria-hidden />
                  <p className="text-xs font-bold uppercase tracking-wide text-[#2E8B7A] mb-1">5-Star Hygiene</p>
                  <p className="text-xs text-[#6B3A2A] leading-relaxed">Rated by the Food Standards Agency</p>
                </div>

                <div className="bg-white rounded-2xl border border-[#E8D5C0] p-5 shadow-sm">
                  <div className="flex gap-0.5 mb-3" aria-label="5 stars">
                    {[...Array(5)].map((_, i) => (
                      <Flame key={i} className="size-3.5 text-[#C8881A] fill-[#C8881A]" aria-hidden />
                    ))}
                  </div>
                  <p className="text-3xl font-black text-[#1C0A00]">{reviewStats.average}</p>
                  <p className="text-[10px] font-bold uppercase tracking-wide text-[#6B3A2A]/60 mt-1">
                    {reviewStats.count} Google reviews
                  </p>
                </div>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
}
