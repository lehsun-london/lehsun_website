import Image from "next/image";
import Link from "next/link";
import { Star, ShieldCheck, MapPin } from "lucide-react";
import { TrackedLink } from "../analytics/TrackedLink";
import { whatsapp, visualAssets, reviewStats } from "@/content/businessInfo";

export function HeroSection() {
  return (
    <section className="relative bg-[#FFFDF9] py-16 md:py-24 px-5 lg:px-10 overflow-hidden" id="home">
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-[55fr_45fr] gap-10 lg:gap-16 items-center">

          {/* Left — text */}
          <div className="order-2 md:order-1">
            <div className="inline-flex items-center gap-2 rounded-full border border-[#E8D5C0] bg-[#FFF5E4] px-4 py-1.5 mb-6 animate-fade-in-up">
              <Star className="size-3.5 text-[#C8881A] fill-[#C8881A]" aria-hidden />
              <span className="text-[11px] font-bold uppercase tracking-[0.18em] text-[#6B3A2A]">
                {reviewStats.average} · {reviewStats.count} Google Reviews · Kent
              </span>
            </div>

            <h1
              className="font-serif italic font-black text-[#1C0A00] text-balance leading-[1.0] tracking-tight mb-5 animate-fade-in-up"
              style={{ fontSize: "clamp(2.8rem, 6vw, 5rem)", animationDelay: "80ms" }}
            >
              Proper North Indian
              <br />
              <span className="text-[#F5821F]">Catering in Kent</span>
            </h1>

            <p
              className="text-lg md:text-xl font-serif italic text-[#6B3A2A] mb-3 animate-fade-in-up"
              style={{ animationDelay: "160ms" }}
            >
              Real flavours — the kind you miss from back home.
            </p>

            <p
              className="text-[#6B3A2A] text-base leading-relaxed mb-8 max-w-[40ch] animate-fade-in-up"
              style={{ animationDelay: "240ms" }}
            >
              Catering for events and daily meals across Dartford, Gravesend,
              Ebbsfleet Valley, Bexley, Orpington and nearby Kent.
            </p>

            <div
              className="flex flex-col sm:flex-row gap-3 mb-8 animate-fade-in-up"
              style={{ animationDelay: "320ms" }}
            >
              <TrackedLink
                className="flex items-center justify-center gap-2 bg-[#D9381E] hover:bg-[#F5821F] text-white px-8 py-4 rounded-full font-bold text-sm uppercase tracking-wider transition-all shadow-lg shadow-[#D9381E]/25 hover:-translate-y-0.5 focus-ring cursor-pointer"
                ctaText="Plan Your Event"
                destinationType="whatsapp"
                href={whatsapp.cateringEnquiry}
                intent="lead"
                isPrimaryCta
                placement="hero"
                rel="noopener noreferrer"
                target="_blank"
              >
                Plan Your Event &rarr;
              </TrackedLink>
              <Link
                href="/menu"
                className="flex items-center justify-center gap-2 border border-[#E8D5C0] text-[#1C0A00] bg-white px-8 py-4 rounded-full font-semibold text-sm hover:border-[#F5821F] hover:text-[#F5821F] transition-colors focus-ring cursor-pointer"
              >
                View Daily Menu
              </Link>
            </div>

            <div
              className="flex flex-wrap gap-3 animate-fade-in-up"
              style={{ animationDelay: "400ms" }}
            >
              <div className="flex items-center gap-1.5 text-xs font-semibold text-[#6B3A2A]">
                <Star className="size-3.5 text-[#C8881A] fill-[#C8881A]" aria-hidden />
                5.0 Google Reviews
              </div>
              <span className="text-[#E8D5C0]" aria-hidden>&middot;</span>
              <div className="flex items-center gap-1.5 text-xs font-semibold text-[#6B3A2A]">
                <ShieldCheck className="size-3.5 text-[#2E8B7A]" aria-hidden />
                5-Star Hygiene Rated
              </div>
              <span className="text-[#E8D5C0]" aria-hidden>&middot;</span>
              <div className="flex items-center gap-1.5 text-xs font-semibold text-[#6B3A2A]">
                <MapPin className="size-3.5 text-[#F5821F]" aria-hidden />
                6 Areas in Kent
              </div>
            </div>
          </div>

          {/* Right — food image */}
          <div className="order-1 md:order-2 flex justify-center md:justify-end animate-fade-in-up" style={{ animationDelay: "100ms" }}>
            <div className="relative w-full max-w-sm md:max-w-none md:w-[420px] lg:w-[500px] aspect-square rounded-3xl overflow-hidden shadow-2xl border-4 border-[#FFF5E4]">
              <Image
                alt="Authentic North Indian spread — Amritsari thaali with rich curries, breads and chutneys"
                className="object-cover"
                fill
                priority
                sizes="(max-width: 768px) 90vw, (max-width: 1024px) 40vw, 500px"
                src={visualAssets.heroImage}
              />
              <div className="absolute inset-0 ring-1 ring-inset ring-[#F5821F]/20 rounded-3xl pointer-events-none" />
            </div>
          </div>
        </div>
      </div>

      {/* WhatsApp FAB — mobile only */}
      <TrackedLink
        aria-label="Message us on WhatsApp"
        className="whatsapp-fab md:hidden"
        ctaText="WhatsApp FAB"
        destinationType="whatsapp"
        href={whatsapp.cateringEnquiry}
        intent="lead"
        isPrimaryCta
        placement="hero_fab"
        rel="noopener noreferrer"
        target="_blank"
      >
        <svg className="size-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden>
          <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347" />
        </svg>
      </TrackedLink>
    </section>
  );
}
