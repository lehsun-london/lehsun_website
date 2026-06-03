import { SectionViewTracker } from "@/components/analytics/SectionViewTracker";
import { NavSection } from "@/components/home/NavSection";
import { FooterSection } from "@/components/home/FooterSection";
import { FaqSection } from "@/components/home/FaqSection";
import { ContactSection } from "@/components/home/ContactSection";
import { ReviewsSection } from "@/components/home/ReviewsSection";
import { TrustProofBlock } from "@/components/home/TrustProofBlock";
import BreadcrumbSchema from "@/components/seo/BreadcrumbSchema";
import { buildAbsoluteUrl } from "@/lib/seo";
import { MenuHeroSection } from "./MenuHeroSection";
import { HowItWorksSection } from "./HowItWorksSection";
import { FeaturedDishesSection } from "./FeaturedDishesSection";
import { OrderingInfoSection } from "./OrderingInfoSection";

const trackedSections = [
  { id: "menu-hero", name: "Hero", order: 1 },
  { id: "dishes", name: "Dishes", order: 2 },
  { id: "ordering", name: "Ordering", order: 3 },
  { id: "ordering-info", name: "Info", order: 4 },
  { id: "faq", name: "FAQ", order: 5 },
  { id: "contact", name: "Contact", order: 6 },
];

export function MenuPage() {
  return (
    <div className="relative flex flex-col min-h-screen w-full overflow-x-hidden">
      <BreadcrumbSchema
        items={[
          { name: "Home", item: buildAbsoluteUrl("/") },
          { name: "Daily Menu", item: buildAbsoluteUrl("/menu") },
        ]}
      />
      <SectionViewTracker sections={trackedSections} />
      <NavSection />
      <main className="pt-[60px]">
        <MenuHeroSection />
        <TrustProofBlock
          items={[
            "Freshly prepared",
            "Limited daily quantities",
            "Collection from Ebbsfleet",
          ]}
          links={[
            {
              href: "/catering/ebbsfleet-valley",
              label: "Indian Catering in Ebbsfleet Valley",
            },
            { href: "/catering/dartford", label: "Indian Catering in Dartford" },
            { href: "/catering/gravesend", label: "Indian Catering in Gravesend" },
          ]}
        />
        <FeaturedDishesSection />
        <HowItWorksSection />
        <OrderingInfoSection />
        <ReviewsSection variant="daily" />
        <FaqSection variant="menu" />
        <ContactSection variant="menu" />
      </main>
      <FooterSection />
    </div>
  );
}
