import { SectionViewTracker } from "@/components/analytics/SectionViewTracker";
import { NavSection } from "@/components/home/NavSection";
import { FooterSection } from "@/components/home/FooterSection";
import { FaqSection } from "@/components/home/FaqSection";
import { ReviewsSection } from "@/components/home/ReviewsSection";
import { ContactSection } from "@/components/home/ContactSection";
import { TrustStripSection } from "@/components/home/TrustStripSection";
import BreadcrumbSchema from "@/components/seo/BreadcrumbSchema";
import { buildAbsoluteUrl } from "@/lib/seo";
import { CateringHeroSection } from "./CateringHeroSection";
import { CateringProcessSection } from "./CateringProcessSection";
import { EventTypesSection } from "./EventTypesSection";
import { CateringMenuSection } from "./CateringMenuSection";
import { PricingSection } from "./PricingSection";
import { AreasSection } from "./AreasSection";

const trackedSections = [
  { id: "catering-hero", name: "Hero", order: 1 },
  { id: "events", name: "Events", order: 2 },
  { id: "process", name: "Process", order: 3 },
  { id: "pricing", name: "Pricing", order: 4 },
  { id: "menu", name: "Menu", order: 5 },
  { id: "areas", name: "Areas", order: 6 },
  { id: "reviews", name: "Reviews", order: 7 },
  { id: "faq", name: "FAQ", order: 8 },
  { id: "contact", name: "Contact", order: 9 },
];

export function CateringPage() {
  return (
    <div className="relative flex flex-col min-h-screen w-full overflow-x-hidden">
      <BreadcrumbSchema
        items={[
          { name: "Home", item: buildAbsoluteUrl("/") },
          { name: "Catering", item: buildAbsoluteUrl("/catering") },
        ]}
      />
      <SectionViewTracker sections={trackedSections} />
      <NavSection />
      <main className="pt-[60px]">
        <CateringHeroSection />
        <TrustStripSection variant="catering" />
        <section className="bg-[#FDF8F0] border-t border-[#E8D5C0] py-8 px-5 lg:px-10">
          <div className="max-w-4xl mx-auto rounded-xl border border-[#E8D5C0] bg-white px-5 py-5 shadow-sm">
            <p className="text-xs font-bold uppercase tracking-[0.18em] text-[#D93423] mb-2">
              Catering at a glance
            </p>
            <p className="text-sm md:text-base leading-relaxed text-[#5C2A10]">
              Lehsun provides 5-star rated North Indian catering from Ebbsfleet
              Valley for birthdays, housewarmings, baby showers, corporate
              events, weddings, mandir events, Satyanarayan Katha and family
              gatherings across Dartford, Gravesend, Northfleet, Bexley,
              Orpington and nearby Kent. Catering starts from £11.99 per head
              for 12+ guests, with vegetarian, non-vegetarian, Jain and
              no-onion/no-garlic menus available.
            </p>
            <p className="mt-3 text-xs font-semibold text-[#6B3A2A]/70">
              Last updated: September 2026
            </p>
          </div>
        </section>
        <EventTypesSection />
        <CateringProcessSection />
        <PricingSection />
        <CateringMenuSection />
        <AreasSection />
        <ReviewsSection variant="catering" />
        <FaqSection variant="catering" />
        <ContactSection variant="catering" />
      </main>
      <FooterSection />
    </div>
  );
}
