import Image from "next/image";
import Link from "next/link";
import { Star, ShieldCheck, MapPin } from "lucide-react";
import { TrackedLink } from "../analytics/TrackedLink";
import { whatsapp, visualAssets, reviewStats } from "@/content/businessInfo";

export function HeroSection() {
  return (
    <section className="relative bg-[#FDF8F0] py-16 md:py-24 px-5 lg:px-10 overflow-hidden" id="home">
      {/* Spice-burst — large decorative top-right */}
      <div
        aria-hidden
        className="absolute -top-16 -right-16 w-[420px] h-[420px] opacity-[0.08] pointer-events-none animate-spin-slow"
        style={{
          backgroundImage: "url('/assets/generated/spice-burst.svg')",
          backgroundSize: "contain",
          backgroundRepeat: "no-repeat",
        }}
      />
      {/* Spice-burst — small bottom-left */}
      <div
        aria-hidden
        className="absolute -bottom-20 -left-20 w-[280px] h-[280px] opacity-[0.06] pointer-events-none"
        style={{
          backgroundImage: "url('/assets/generated/spice-burst.svg')",
          backgroundSize: "contain",
          backgroundRepeat: "no-repeat",
        }}
      />

      <div className="relative max-w-7xl mx-auto">
        <div className="grid md:grid-cols-[55fr_45fr] gap-10 lg:gap-16 items-center">

          {/* Left — text */}
          <div className="order-2 md:order-1">
            {/* Badge pill */}
            <div className="inline-flex items-center gap-2 rounded-full border-2 border-[#D93423]/20 bg-[#D93423]/8 px-4 py-1.5 mb-6 animate-fade-in-up" style={{ backgroundColor: "rgba(217,52,35,0.07)" }}>
              <Star className="size-3.5 fill-[#E69B39] text-[#E69B39]" aria-hidden />
              <span className="text-[11px] font-bold uppercase tracking-[0.18em] text-[#D93423]">
                {reviewStats.average} · {reviewStats.count} Google Reviews · Kent
              </span>
            </div>

            <h1
              className="font-serif italic font-black text-[#1A0600] text-balance leading-[1.0] tracking-tight mb-5 animate-fade-in-up"
              style={{ fontSize: "clamp(2.8rem, 6vw, 5rem)", animationDelay: "80ms" }}
            >
              Proper North Indian
              <br />
              <span style={{ color: "#D93423" }}>Catering</span>
              {" "}
              <span style={{ color: "#03B6AA" }}>in Kent</span>
            </h1>

            <p
              className="text-lg md:text-xl font-serif italic mb-3 animate-fade-in-up"
              style={{ color: "#993786", animationDelay: "160ms" }}
            >
              Real flavours — the kind you miss from back home.
            </p>

            <p
              className="text-base leading-relaxed mb-8 max-w-[40ch] animate-fade-in-up"
              style={{ color: "#5C2A10", animationDelay: "240ms" }}
            >
              Catering for events and daily meals across Dartford, Gravesend,
              Ebbsfleet Valley, Bexley, Orpington and nearby Kent.
            </p>

            <div
              className="flex flex-col sm:flex-row gap-3 mb-8 animate-fade-in-up"
              style={{ animationDelay: "320ms" }}
            >
              <TrackedLink
                className="flex items-center justify-center gap-2 text-white px-8 py-4 rounded-full font-bold text-sm uppercase tracking-wider transition-all shadow-lg hover:-translate-y-0.5 focus-ring cursor-pointer"
                style={{ backgroundColor: "#D93423", boxShadow: "0 8px 24px rgba(217,52,35,0.35)" }}
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
                className="flex items-center justify-center gap-2 border-2 px-8 py-4 rounded-full font-bold text-sm uppercase tracking-wider transition-all hover:-translate-y-0.5 focus-ring cursor-pointer"
                style={{ borderColor: "#03B6AA", color: "#03B6AA" }}
              >
                View Daily Menu
              </Link>
            </div>

            {/* Trust chips */}
            <div
              className="flex flex-wrap gap-4 animate-fade-in-up"
              style={{ animationDelay: "400ms" }}
            >
              <div className="flex items-center gap-1.5 text-xs font-semibold" style={{ color: "#5C2A10" }}>
                <Star className="size-3.5 fill-[#E69B39] text-[#E69B39]" aria-hidden />
                5.0 Google Reviews
              </div>
              <div className="flex items-center gap-1.5 text-xs font-semibold" style={{ color: "#5C2A10" }}>
                <ShieldCheck className="size-3.5" style={{ color: "#03B6AA" }} aria-hidden />
                5-Star Hygiene
              </div>
              <div className="flex items-center gap-1.5 text-xs font-semibold" style={{ color: "#5C2A10" }}>
                <MapPin className="size-3.5" style={{ color: "#D93423" }} aria-hidden />
                6 Areas in Kent
              </div>
            </div>
          </div>

          {/* Right — food image with floating circles */}
          <div className="order-1 md:order-2 flex justify-center md:justify-end animate-fade-in-up relative" style={{ animationDelay: "100ms" }}>

            {/* Floating circle — top right */}
            <div className="absolute -top-4 -right-4 md:-right-6 z-10 animate-float" style={{ animationDelay: "0ms" }} aria-hidden>
              <div className="relative size-16 rounded-full overflow-hidden shadow-xl"
                style={{ border: "3px solid #03B6AA" }}>
                <Image src={visualAssets.cateringImage} alt="" fill className="object-cover" sizes="64px" />
              </div>
            </div>

            {/* Floating circle — bottom left */}
            <div className="absolute -bottom-4 -left-4 md:-left-6 z-10 animate-float-slow" style={{ animationDelay: "800ms" }} aria-hidden>
              <div className="relative size-20 rounded-full overflow-hidden shadow-xl"
                style={{ border: "3px solid #E69B39" }}>
                <Image src="/assets/food/pav-bhaji-1400.jpg" alt="" fill className="object-cover" sizes="80px" />
              </div>
            </div>

            {/* Main image */}
            <div
              className="relative w-full max-w-sm md:max-w-none md:w-[420px] lg:w-[500px] aspect-square rounded-3xl overflow-hidden shadow-2xl"
              style={{ border: "4px solid #F1E1AA" }}
            >
              <Image
                alt="Authentic North Indian spread — Amritsari thaali with rich curries, breads and chutneys"
                className="object-cover"
                fill
                priority
                sizes="(max-width: 768px) 90vw, (max-width: 1024px) 40vw, 500px"
                src={visualAssets.heroImage}
              />
              {/* Ring inset */}
              <div className="absolute inset-0 rounded-3xl pointer-events-none"
                style={{ boxShadow: "inset 0 0 0 2px rgba(217,52,35,0.25)" }} />

              {/* Review badge */}
              <div className="absolute bottom-4 left-4 bg-white/95 backdrop-blur-sm rounded-full px-3 py-1.5 flex items-center gap-1.5 shadow-md">
                <Star className="size-3 fill-[#E69B39] text-[#E69B39]" aria-hidden />
                <span className="text-[10px] font-bold text-[#1A0600]">5.0 · 50 Reviews</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* WhatsApp FAB */}
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
