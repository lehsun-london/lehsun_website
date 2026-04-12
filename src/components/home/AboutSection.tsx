"use client";

import Image from "next/image";
import { Flame, Users, BadgeCheck } from "lucide-react";
import { useEffect, useRef, useState } from "react";
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

const stats = [
  { value: 50, suffix: "+", label: "Events catered" },
  { value: 5.0, decimals: 1, suffix: "", label: "Google rating" },
  { value: 2, suffix: " mi", label: "Delivery radius" },
];

function useCountUp(target: number, decimals = 0, duration = 1500, trigger: boolean) {
  const [count, setCount] = useState(0);
  useEffect(() => {
    if (!trigger) return;
    const start = performance.now();
    const raf = (time: number) => {
      const progress = Math.min((time - start) / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      setCount(parseFloat((eased * target).toFixed(decimals)));
      if (progress < 1) requestAnimationFrame(raf);
    };
    requestAnimationFrame(raf);
  }, [trigger, target, decimals, duration]);
  return count;
}

function StatCounter({ value, suffix, label, decimals = 0, trigger }: {
  value: number; suffix: string; label: string; decimals?: number; trigger: boolean;
}) {
  const count = useCountUp(value, decimals, 1400, trigger);
  return (
    <div className="text-center">
      <p className="font-black text-[#1C0A00]" style={{ fontSize: "clamp(2rem, 4vw, 2.8rem)" }}>
        {decimals ? count.toFixed(decimals) : Math.floor(count)}{suffix}
      </p>
      <p className="text-xs font-bold uppercase tracking-wide text-[#6B3A2A]/70 mt-1">{label}</p>
    </div>
  );
}

export function AboutSection() {
  const statsRef = useRef<HTMLDivElement>(null);
  const [statsVisible, setStatsVisible] = useState(false);

  useEffect(() => {
    const el = statsRef.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) { setStatsVisible(true); observer.disconnect(); } },
      { threshold: 0.4 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <section className="bg-[#FFF5E4] py-20 md:py-28 px-5 lg:px-10 scroll-mt-20" id="about">
      <div className="max-w-7xl mx-auto">
        <div className="grid gap-12 lg:grid-cols-2 lg:items-center">

          {/* Text */}
          <div>
            <ScrollReveal>
              <p className="text-xs font-bold uppercase tracking-[0.2em] text-[#D9381E] mb-4">
                The Lehsun Story
              </p>
              <h2
                className="font-serif italic font-black text-[#1C0A00] mb-6 text-balance leading-tight"
                style={{ fontSize: "clamp(2rem, 4vw, 3rem)" }}
              >
                Proper North Indian flavours, made the way you remember
              </h2>
            </ScrollReveal>

            {/* Etymology callout */}
            <ScrollReveal delay={60}>
              <blockquote className="border-l-4 border-[#F5821F] pl-5 py-2 mb-6 bg-white rounded-r-xl shadow-sm">
                <p className="font-serif italic text-[#1C0A00] text-base leading-relaxed">
                  &ldquo;Lehsun — the Hindi word for garlic, the heart of every dish we cook.&rdquo;
                </p>
              </blockquote>
            </ScrollReveal>

            <ScrollReveal delay={80}>
              <p className="text-[#6B3A2A] text-base leading-relaxed mb-4 max-w-[38rem]">
                Lehsun was built for one purpose: to bring the real flavours of North Indian
                cooking to gatherings in Kent. Not a toned-down version. Not adapted. Just the food people genuinely miss.
              </p>
              <p className="text-[#F5821F] font-bold italic font-serif text-lg mb-10">
                &ldquo;{brandLine}&rdquo;
              </p>
            </ScrollReveal>

            <div className="space-y-6">
              {pillars.map(({ icon: Icon, color, title, body }, i) => (
                <ScrollReveal key={title} delay={100 + i * 80}>
                  <div className="flex items-start gap-4">
                    <div className={`mt-0.5 flex-shrink-0 ${color}`}>
                      <Icon className="size-5" aria-hidden />
                    </div>
                    <div>
                      <p className="font-bold text-[#1C0A00] text-sm mb-1">{title}</p>
                      <p className="text-[#6B3A2A] text-sm leading-relaxed">{body}</p>
                    </div>
                  </div>
                </ScrollReveal>
              ))}
            </div>
          </div>

          {/* Image + stats */}
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

              {/* Animated stats row */}
              <div
                ref={statsRef}
                className="grid grid-cols-3 gap-4 bg-white rounded-2xl border border-[#E8D5C0] p-5 shadow-sm"
              >
                {stats.map((stat) => (
                  <StatCounter
                    key={stat.label}
                    value={stat.value}
                    suffix={stat.suffix}
                    label={stat.label}
                    decimals={stat.decimals}
                    trigger={statsVisible}
                  />
                ))}
              </div>

              {/* Trust duo */}
              <div className="grid grid-cols-2 gap-4">
                {/* Official FSA hygiene rating image */}
                <div className="bg-white rounded-2xl border border-[#E2C9A8] p-4 shadow-sm flex flex-col items-center justify-center gap-2">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src={visualAssets.hygieneRating}
                    alt="Food Hygiene Rating 5 — awarded by the Food Standards Agency"
                    className="h-16 w-auto object-contain"
                    loading="lazy"
                  />
                  <p className="text-[10px] font-bold uppercase tracking-wide text-[#246B5A] text-center">
                    5-Star Food Hygiene
                  </p>
                </div>
                <div className="bg-white rounded-2xl border border-[#E2C9A8] p-5 shadow-sm">
                  <div className="flex gap-0.5 mb-3" aria-label="5 stars">
                    {[...Array(5)].map((_, i) => (
                      <Flame key={i} className="size-3.5 text-[#B8780A]" aria-hidden />
                    ))}
                  </div>
                  <p className="text-3xl font-black text-[#1A0600]">{reviewStats.average}</p>
                  <p className="text-[10px] font-bold uppercase tracking-wide text-[#6B3520]/60 mt-1">
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
