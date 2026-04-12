import { Star, ShieldCheck, MapPin } from "lucide-react";
import { reviewStats, serviceAreas } from "@/content/businessInfo";

const areas = serviceAreas.filter((a) => a !== "Nearby Kent");

export function TrustStripSection() {
  return (
    <div
      className="relative overflow-hidden"
      style={{ backgroundColor: "#D93423" }}
    >
      {/* Subtle spice-burst decoration — right side */}
      <div
        className="absolute right-0 top-1/2 -translate-y-1/2 w-32 h-32 opacity-[0.12] pointer-events-none"
        aria-hidden
        style={{
          backgroundImage: "url('/assets/generated/spice-burst.svg')",
          backgroundSize: "contain",
          backgroundRepeat: "no-repeat",
          backgroundPosition: "center",
        }}
      />
      {/* Left decoration */}
      <div
        className="absolute left-0 top-1/2 -translate-y-1/2 w-24 h-24 opacity-[0.10] pointer-events-none"
        aria-hidden
        style={{
          backgroundImage: "url('/assets/generated/spice-burst.svg')",
          backgroundSize: "contain",
          backgroundRepeat: "no-repeat",
          backgroundPosition: "center",
        }}
      />

      <div className="relative max-w-7xl mx-auto px-5 lg:px-10 py-3.5 flex flex-wrap items-center justify-center gap-x-7 gap-y-2">
        <div className="flex items-center gap-2">
          <Star className="size-3.5 fill-[#E69B39] text-[#E69B39]" aria-hidden />
          <span className="text-[11px] font-bold tracking-wide text-[#F1E1AA]">
            {reviewStats.average} — {reviewStats.count} Google reviews
          </span>
        </div>
        <span className="hidden sm:block text-[#F1E1AA]/30" aria-hidden>·</span>
        <div className="flex items-center gap-2">
          <ShieldCheck className="size-3.5 text-[#03B6AA]" aria-hidden />
          <span className="text-[11px] font-bold tracking-wide text-[#F1E1AA]">
            5-Star Food Hygiene
          </span>
        </div>
        <span className="hidden sm:block text-[#F1E1AA]/30" aria-hidden>·</span>
        <div className="flex flex-wrap items-center gap-1.5">
          <MapPin className="size-3 text-[#E69B39]" aria-hidden />
          <span className="text-[11px] text-[#F1E1AA]/70 font-medium">Serving</span>
          {areas.map((area, i) => (
            <span key={area} className="text-[11px] font-bold text-[#F1E1AA]">
              {area}{i < areas.length - 1 ? " ·" : ""}
            </span>
          ))}
          <span className="text-[11px] font-bold text-[#F1E1AA]">&amp; nearby Kent</span>
        </div>
      </div>
    </div>
  );
}
