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
