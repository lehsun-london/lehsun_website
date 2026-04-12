import Image from "next/image";
import { Star, Clock } from "lucide-react";
import { TrackedLink } from "@/components/analytics/TrackedLink";
import { whatsapp, visualAssets } from "@/content/businessInfo";

export function MenuHeroSection() {
  return (
    <section className="bg-[#FFFDF9] py-10 md:py-14 px-5 lg:px-10" id="menu-hero">
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-[55fr_45fr] gap-10 lg:gap-16 items-center">

          {/* Left — text */}
          <div className="order-2 md:order-1">
            <div className="inline-flex items-center gap-2 rounded-full border border-[#E8D5C0] bg-[#FFF5E4] px-4 py-1.5 mb-6 animate-fade-in-up">
              <Clock className="size-3.5 text-[#2E8B7A]" aria-hidden />
              <span className="text-[11px] font-bold uppercase tracking-[0.18em] text-[#6B3A2A]">
                Posted fresh every day
              </span>
            </div>

            <h1
              className="font-serif italic font-black text-[#1C0A00] text-balance leading-tight mb-5 animate-fade-in-up"
              style={{ fontSize: "clamp(2.4rem, 5vw, 4rem)", animationDelay: "80ms" }}
            >
              Fresh North Indian dishes,{" "}
              <span className="text-[#2E8B7A]">posted every day</span>
            </h1>

            <p
              className="text-[#6B3A2A] text-base leading-relaxed mb-8 max-w-[40ch] animate-fade-in-up"
              style={{ animationDelay: "160ms" }}
            >
              A rotating daily menu — browse today&apos;s dishes on our WhatsApp catalogue,
              order what you want, and collect or get delivery within 2 miles.
            </p>

            <div
              className="flex flex-col sm:flex-row gap-3 mb-8 animate-fade-in-up"
              style={{ animationDelay: "240ms" }}
            >
              <TrackedLink
                className="flex items-center justify-center gap-2 bg-[#2E8B7A] hover:bg-[#2E8B7A]/80 text-white px-8 py-4 rounded-full font-bold text-sm uppercase tracking-wider transition-all shadow-lg shadow-teal-600/20 hover:-translate-y-0.5 focus-ring cursor-pointer"
                ctaText="Browse Today's Menu"
                destinationType="whatsapp"
                href={whatsapp.catalog}
                intent="menu"
                isPrimaryCta
                leadType="menu_enquiry"
                value={15}
                placement="menu_hero"
                rel="noopener noreferrer"
                target="_blank"
              >
                Browse Today&apos;s Menu &rarr;
              </TrackedLink>
            </div>

            <div className="flex flex-wrap gap-3 animate-fade-in-up" style={{ animationDelay: "320ms" }}>
              <div className="flex items-center gap-1.5 text-xs font-semibold text-[#6B3A2A]">
                <Star className="size-3.5 text-[#C8881A] fill-[#C8881A]" aria-hidden />
                5.0 on Google
              </div>
              <span className="text-[#E8D5C0]" aria-hidden>·</span>
              <div className="flex items-center gap-1.5 text-xs font-semibold text-[#6B3A2A]">
                <Clock className="size-3.5 text-[#2E8B7A]" aria-hidden />
                Collection &amp; delivery within 2 miles
              </div>
            </div>
          </div>

          {/* Right — food image */}
          <div className="order-1 md:order-2 flex justify-center md:justify-end animate-fade-in-up" style={{ animationDelay: "100ms" }}>
            <div className="relative w-full max-w-sm md:max-w-none md:w-[400px] lg:w-[480px] aspect-square rounded-3xl overflow-hidden shadow-2xl border-4 border-[#FFF5E4]">
              <Image
                alt="Lehsun pav bhaji — buttery Mumbai-style street food comfort dish"
                className="object-cover"
                fill
                priority
                sizes="(max-width: 768px) 90vw, (max-width: 1024px) 40vw, 480px"
                src={visualAssets.dailyMenuImage}
              />
              <div className="absolute inset-0 ring-1 ring-inset ring-[#2E8B7A]/20 rounded-3xl pointer-events-none" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
