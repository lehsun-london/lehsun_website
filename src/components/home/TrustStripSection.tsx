import { Star, ShieldCheck, MapPin } from "lucide-react";
import { reviewStats, serviceAreas } from "@/content/businessInfo";

const areas = serviceAreas.filter((a) => a !== "Nearby Kent");

export function TrustStripSection() {
  return (
    <div className="bg-[#FFF5E4] border-y border-[#E8D5C0]">
      <div className="max-w-7xl mx-auto px-5 lg:px-10 py-3 flex flex-wrap items-center justify-center gap-x-6 gap-y-2">
        <div className="flex items-center gap-1.5">
          <Star className="size-3.5 text-[#C8881A] fill-[#C8881A]" aria-hidden />
          <span className="text-[11px] font-bold tracking-wide text-[#1C0A00]">
            {reviewStats.average} — {reviewStats.count} Google reviews
          </span>
        </div>
        <span className="hidden sm:block text-[#E8D5C0]" aria-hidden>·</span>
        <div className="flex items-center gap-1.5">
          <ShieldCheck className="size-3.5 text-[#2E8B7A]" aria-hidden />
          <span className="text-[11px] font-bold tracking-wide text-[#1C0A00]">
            5-Star Food Hygiene
          </span>
        </div>
        <span className="hidden sm:block text-[#E8D5C0]" aria-hidden>·</span>
        <div className="flex flex-wrap items-center gap-1.5">
          <MapPin className="size-3 text-[#F5821F]" aria-hidden />
          <span className="text-[11px] text-[#6B3A2A] font-medium">Serving</span>
          {areas.map((area, i) => (
            <span key={area} className="text-[11px] font-bold text-[#1C0A00]">
              {area}{i < areas.length - 1 ? " ·" : ""}
            </span>
          ))}
          <span className="text-[11px] font-bold text-[#1C0A00]">&amp; nearby Kent</span>
        </div>
      </div>
    </div>
  );
}
