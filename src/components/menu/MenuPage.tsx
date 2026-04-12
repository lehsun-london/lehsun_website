import { SectionViewTracker } from "@/components/analytics/SectionViewTracker";
import { NavSection } from "@/components/home/NavSection";
import { FooterSection } from "@/components/home/FooterSection";
import { FaqSection } from "@/components/home/FaqSection";
import { ContactSection } from "@/components/home/ContactSection";
import { TrustStripSection } from "@/components/home/TrustStripSection";
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
      <SectionViewTracker sections={trackedSections} />
      <NavSection />
      <main className="pt-[60px]">
        <MenuHeroSection />
        <TrustStripSection />
        <FeaturedDishesSection />
        <HowItWorksSection />
        <OrderingInfoSection />
        <FaqSection variant="menu" />
        <ContactSection variant="menu" />
      </main>
      <FooterSection />
    </div>
  );
}
