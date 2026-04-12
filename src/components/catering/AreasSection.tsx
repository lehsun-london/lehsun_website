import { MapPin, ExternalLink } from "lucide-react";
import { TrackedLink } from "@/components/analytics/TrackedLink";
import { ScrollReveal } from "@/components/ui/ScrollReveal";
import { contact } from "@/content/businessInfo";

const areas = [
  { name: "Ebbsfleet Valley", postcode: "DA10", note: "Our home base — fastest delivery" },
  { name: "Dartford", postcode: "DA1 / DA2", note: "Town centre and surrounding areas" },
  { name: "Gravesend", postcode: "DA11 / DA12", note: "Full town coverage" },
  { name: "Northfleet", postcode: "DA11", note: "Close to Ebbsfleet — easy access" },
  { name: "Bexley", postcode: "DA5 / DA6", note: "Including Bexleyheath and Sidcup" },
  { name: "Orpington", postcode: "BR5 / BR6", note: "Including surrounding BR postcodes" },
];

export function AreasSection() {
  return (
    <section className="bg-[#FFF5E4] py-20 md:py-24 px-5 lg:px-10" id="areas">
      <div className="max-w-7xl mx-auto">
        <ScrollReveal>
          <div className="text-center mb-10">
            <p className="text-xs font-bold uppercase tracking-[0.2em] text-[#D9381E] mb-3">
              Where we cater
            </p>
            <h2
              className="font-serif italic font-black text-[#1C0A00] text-balance"
              style={{ fontSize: "clamp(1.8rem, 3.5vw, 2.5rem)" }}
            >
              Covering Dartford, Gravesend, Bexley &amp; across Kent
            </h2>
            <p className="mt-4 text-[#6B3A2A] text-base max-w-xl mx-auto">
              Based in Ebbsfleet Valley, we deliver across North West Kent and into South East London.
              Not sure if we cover your area? Just ask.
            </p>
          </div>
        </ScrollReveal>

        <ScrollReveal delay={60}>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 mb-10">
            {areas.map(({ name, postcode, note }) => (
              <div
                key={name}
                className="bg-white border border-[#E8D5C0] rounded-xl p-5 shadow-sm"
              >
                <div className="flex items-start gap-3">
                  <MapPin className="size-4 text-[#F5821F] flex-shrink-0 mt-0.5" aria-hidden />
                  <div>
                    <p className="font-black text-sm text-[#1C0A00]">{name}</p>
                    <p className="text-xs font-bold text-[#6B3A2A]/60 mt-0.5">{postcode}</p>
                    <p className="text-xs text-[#6B3A2A] mt-1 leading-relaxed">{note}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </ScrollReveal>

        <ScrollReveal delay={120}>
          <div className="rounded-2xl overflow-hidden border-2 shadow-md" style={{ borderColor: "#EAD6A8" }}>
            <iframe
              className="w-full h-80"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1242.3!2d0.300725!3d51.4391265!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47d8b74bf97b3043%3A0xfe7b3d927e4704c6!2sLehsun%20%E2%80%93%20Nostalgic%20North%20Indian%20Catering!5e0!3m2!1sen!2suk!4v1700000000000!5m2!1sen!2suk"
              title="Lehsun – Nostalgic North Indian Catering location on Google Maps"
            />
            <div className="bg-white border-t px-5 py-3 flex items-center justify-between flex-wrap gap-3" style={{ borderColor: "#EAD6A8" }}>
              <div className="flex items-center gap-2">
                <MapPin className="size-3.5 flex-shrink-0" style={{ color: "#D93423" }} aria-hidden />
                <p className="text-xs font-medium" style={{ color: "#5C2A10" }}>Lehsun — Ebbsfleet Valley, DA10</p>
              </div>
              <TrackedLink
                className="inline-flex items-center gap-1.5 text-xs font-bold hover:underline cursor-pointer focus-ring"
                style={{ color: "#1A73E8" }}
                ctaText="View on Google Maps"
                destinationType="maps"
                href={contact.googleMaps}
                intent="section_navigation"
                placement="areas_map"
                rel="noopener noreferrer"
                target="_blank"
              >
                View on Google Maps
                <ExternalLink className="size-3" aria-hidden />
              </TrackedLink>
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
