import Image from "next/image";
import { Star, ShieldCheck, MapPin } from "lucide-react";
import { TrackedLink } from "../analytics/TrackedLink";
import { whatsapp, reviewStats } from "@/content/businessInfo";

export function HeroSection() {
  return (
    <section
      className="relative bg-[#FDF8F0] pt-24 pb-32 px-5 lg:px-10 overflow-hidden flex flex-col items-center text-center isolate min-h-[90vh] justify-center"
      id="home"
    >
      {/* Full-bleed tile texture — very subtle richness across whole bg */}
      <div
        aria-hidden
        className="absolute inset-0 opacity-[0.035] pointer-events-none z-0 hidden md:block"
        style={{
          backgroundImage: "url('/assets/brand/lehsun-motifs-2200.png')",
          backgroundSize: "220px",
          backgroundRepeat: "repeat",
        }}
      />

      {/* Soft warm gold radial blob — left side, centred on samosa */}
      <div
        aria-hidden
        className="absolute left-[-10%] top-[10%] w-[65vw] h-[80vh] pointer-events-none z-0"
        style={{
          background:
            "radial-gradient(ellipse at 30% 55%, rgba(230,155,57,0.22) 0%, rgba(230,155,57,0.08) 40%, transparent 70%)",
        }}
      />

      {/* Soft teal radial blob — top right */}
      <div
        aria-hidden
        className="absolute right-[-5%] top-[-10%] w-[55vw] h-[70vh] pointer-events-none z-0"
        style={{
          background:
            "radial-gradient(ellipse at 70% 30%, rgba(3,182,170,0.13) 0%, rgba(3,182,170,0.04) 45%, transparent 70%)",
        }}
      />

      {/* Soft vermillion glow — bottom centre, grounds the layout */}
      <div
        aria-hidden
        className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[80vw] h-48 pointer-events-none z-0"
        style={{
          background:
            "radial-gradient(ellipse at center, rgba(217,52,35,0.09) 0%, transparent 70%)",
        }}
      />

      {/* Spice-burst — large decorative top-right */}
      <div
        aria-hidden
        className="absolute -top-16 -right-16 w-[420px] h-[420px] opacity-[0.10] pointer-events-none animate-spin-slow z-0"
        style={{
          backgroundImage: "url('/assets/generated/spice-burst.svg')",
          backgroundSize: "contain",
          backgroundRepeat: "no-repeat",
        }}
      />
      {/* Spice-burst — mid left, behind samosa area */}
      <div
        aria-hidden
        className="absolute left-[-8%] top-[35%] -translate-y-1/2 w-[320px] h-[320px] opacity-[0.07] pointer-events-none z-0"
        style={{
          backgroundImage: "url('/assets/generated/spice-burst.svg')",
          backgroundSize: "contain",
          backgroundRepeat: "no-repeat",
        }}
      />

      {/* Floating Food Items -> Blended with Multiply to remove white BG */}
      {/* Samosa -> Left Middle */}
      <div className="absolute left-[-5%] md:left-[0%] top-[40%] md:top-[15%] -translate-y-1/2 w-72 h-72 md:w-96 md:h-96 xl:w-[36rem] xl:h-[36rem] animate-float opacity-95 z-0 pointer-events-none scale-[1.3] transform">
        <Image
          src="/assets/generated/Samosa-transparent.png"
          alt="Crispy Indian Samosa"
          fill
          className="object-contain"
          sizes="(max-width: 768px) 300px, 500px"
          priority
        />
      </div>

      {/* Paneer -> Top Right */}
      <div
        className="absolute right-[-10%] md:right-[2%] top-[5%] md:top-[10%] w-40 h-40 md:w-56 md:h-56 xl:w-96 xl:h-96 animate-float-slow opacity-100 z-0 pointer-events-none drop-shadow-xl"
        style={{ animationDelay: "400ms" }}
      >
        <Image
          src="/assets/generated/panner-transparent.png"
          alt="Steaming Paneer Makhani"
          fill
          className="object-contain scale-125"
          sizes="(max-width: 768px) 160px, 288px"
        />
      </div>

      {/* Naan -> Bottom Right */}
      <div
        className="absolute right-[-5%] md:right-[8%] bottom-[2%] md:bottom-[10%] w-48 h-48 md:w-60 md:h-60 xl:w-60 xl:h-60 animate-float opacity-95 z-0 pointer-events-none"
        style={{ animationDelay: "800ms" }}
      >
        <Image
          src="/assets/generated/Naan-transparent.png"
          alt="Garlic Naan"
          fill
          className="object-contain rotate-[-15deg] scale-110"
          sizes="(max-width: 768px) 192px, 320px"
        />
      </div>

      {/* Accent Chilli -> Scattered Top Left */}
      <div
        className="absolute left-[5%] md:left-[24%] top-[5%] md:top-[10%] w-32 h-32 md:w-48 md:h-48 xl:w-64 xl:h-64 animate-float-slow opacity-90 z-0 pointer-events-none hidden sm:block transform scale-150"
        style={{ animationDelay: "200ms" }}
      >
        <Image
          src="/assets/generated/chilli-trans.png"
          alt="Chilli Accent"
          fill
          className="object-contain rotate-12"
          sizes="200px"
        />
      </div>
      {/* Accent Coriander -> Scattered Bottom Left */}
      <div
        className="absolute left-[18%] md:left-[70%] bottom-[12%] md:bottom-[36%] w-16 h-16 md:w-24 md:h-24 animate-float opacity-75 z-0 pointer-events-none hidden sm:block"
        style={{ animationDelay: "600ms" }}
      >
        <Image
          src="/assets/generated/coriander-trans.png"
          alt="Spices"
          fill
          className="object-contain transform rotate-[-45deg] scale-125"
          sizes="96px"
        />
      </div>
      <div
        className="absolute left-[18%] md:left-[26%] bottom-[12%] md:bottom-[18%] w-16 h-16 md:w-24 md:h-24 animate-float opacity-75 z-0 pointer-events-none hidden sm:block"
        style={{ animationDelay: "600ms" }}
      >
        <Image
          src="/assets/generated/coriander-trans.png"
          alt="Spices"
          fill
          className="object-contain transform rotate-[-45deg] scale-125"
          sizes="96px"
        />
      </div>

      {/* Centered Main Content */}
      <div className="relative z-10 w-full max-w-4xl mx-auto flex flex-col items-center">
        {/* Badge pill */}
        <div
          className="inline-flex items-center gap-2 rounded-full border-2 border-[#D93423]/20 px-5 py-2 mb-8 animate-fade-in-up"
          style={{ backgroundColor: "rgba(217,52,35,0.07)" }}
        >
          <Star className="size-4 fill-[#E69B39] text-[#E69B39]" aria-hidden />
          <span className="text-xs font-bold uppercase tracking-[0.18em] text-[#D93423]">
            5★ · {reviewStats.count}+ Google Reviews · Kent
          </span>
        </div>

        {/* Huge Centered Heading */}
        <h1
          className="font-serif italic font-black text-[#1A0600] text-balance leading-[1.0] tracking-tight mb-6 animate-fade-in-up"
          style={{
            fontSize: "clamp(2.8rem, 6vw, 5rem)",
            animationDelay: "80ms",
          }}
        >
          North <span style={{ color: "#D93423" }}>Indian</span> <br />
          <span style={{ color: "#03B6AA" }}>Catering</span>
          <br />
          <span style={{ fontSize: "30px" }}>
            for Ebbsfleet, Dartford, Gravesend
          </span>{" "}
        </h1>

        {/* Subheadings */}
        <p
          className="text-xl md:text-2xl font-serif italic mb-5 animate-fade-in-up"
          style={{ color: "#993786", animationDelay: "160ms" }}
        >
          Proper flavours for birthdays, house warmings, <br />
          baby showers and family events.
        </p>

        <p
          className="text-lg md:text-xl leading-relaxed mb-6 max-w-[45ch] animate-fade-in-up"
          style={{ color: "#5C2A10", animationDelay: "240ms" }}
        >
          Based in Ebbsfleet Valley, we create tailored North Indian catering
          menus across Dartford, Gravesend and nearby areas.
        </p>

        <div
          className="flex flex-wrap justify-center gap-2.5 mb-8 animate-fade-in-up"
          style={{ animationDelay: "280ms" }}
        >
          {[
            "Tailored quotes, usually same day",
            "Separate veg & non-veg kitchens",
            "Minimum 15 guests for catering",
          ].map((point) => (
            <span
              key={point}
              className="rounded-full border border-[#E8D5C0] bg-white/80 px-4 py-2 text-xs font-bold uppercase tracking-[0.12em] text-[#6B3A2A]"
            >
              {point}
            </span>
          ))}
        </div>

        {/* CTA Buttons */}
        <div
          className="flex flex-col sm:flex-row gap-4 mb-8 w-full max-w-lg justify-center animate-fade-in-up"
          style={{ animationDelay: "320ms" }}
        >
          <TrackedLink
            className="flex items-center justify-center gap-2 text-white px-8 py-4 md:py-5 rounded-full font-bold text-sm md:text-base uppercase tracking-wider transition-all shadow-xl hover:-translate-y-1 focus-ring cursor-pointer w-full sm:w-auto"
            style={{
              backgroundColor: "#D93423",
              boxShadow: "0 10px 30px rgba(217,52,35,0.4)",
            }}
            ctaText="Plan Your Event"
            destinationType="whatsapp"
            href={whatsapp.cateringEnquiry}
            intent="lead"
            isPrimaryCta
            leadType="catering_enquiry"
            value={150}
            placement="hero"
            rel="noopener noreferrer"
            target="_blank"
          >
            Plan Your Event &rarr;
          </TrackedLink>
          <TrackedLink
            href="/menu"
            className="flex items-center justify-center gap-2 border-2 px-8 py-4 md:py-5 rounded-full font-bold text-sm md:text-base uppercase tracking-wider transition-all hover:-translate-y-1 hover:bg-[#03B6AA]/5 focus-ring cursor-pointer w-full sm:w-auto bg-white/50 backdrop-blur-sm"
            style={{ borderColor: "#03B6AA", color: "#03B6AA" }}
            ctaText="View Daily Menu"
            destinationType="internal"
            intent="menu"
            isPrimaryCta={false}
            leadType="menu_enquiry"
            value={15}
            placement="hero_daily_menu"
          >
            View Daily Menu
          </TrackedLink>
        </div>

        {/* Trust chips */}
        <div
          className="flex flex-wrap justify-center gap-6 md:gap-10 animate-fade-in-up pt-4 border-t border-[#5C2A10]/10 w-full max-w-2xl"
          style={{ animationDelay: "400ms" }}
        >
          <div
            className="flex items-center gap-2 text-sm md:text-base font-bold tracking-tight"
            style={{ color: "#5C2A10" }}
          >
            <Star
              className="size-5 fill-[#E69B39] text-[#E69B39]"
              aria-hidden
            />
            5★ Google Reviews
          </div>
          <div
            className="flex items-center gap-2 text-sm md:text-base font-bold tracking-tight"
            style={{ color: "#5C2A10" }}
          >
            <ShieldCheck
              className="size-5"
              style={{ color: "#03B6AA" }}
              aria-hidden
            />
            5-Star Hygiene
          </div>
          <div
            className="flex items-center gap-2 text-sm md:text-base font-bold tracking-tight"
            style={{ color: "#5C2A10" }}
          >
            <MapPin
              className="size-5"
              style={{ color: "#D93423" }}
              aria-hidden
            />
            Ebbsfleet · Dartford · Gravesend
          </div>
        </div>
      </div>

      {/* WhatsApp FAB */}
      <TrackedLink
        aria-label="Message us on WhatsApp"
        className="whatsapp-fab md:hidden z-20"
        ctaText="WhatsApp FAB"
        destinationType="whatsapp"
        href={whatsapp.cateringEnquiry}
        intent="lead"
        isPrimaryCta
        leadType="catering_enquiry"
        value={150}
        placement="hero_fab"
        rel="noopener noreferrer"
        target="_blank"
      >
        <svg
          className="size-6"
          fill="currentColor"
          viewBox="0 0 24 24"
          aria-hidden
        >
          <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347" />
        </svg>
      </TrackedLink>
    </section>
  );
}
