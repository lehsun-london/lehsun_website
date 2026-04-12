import { SectionViewTracker } from "../analytics/SectionViewTracker";
import { AboutSection } from "./AboutSection";
import { ContactSection } from "./ContactSection";
import { FooterSection } from "./FooterSection";
import { FaqSection } from "./FaqSection";
import { HeroSection } from "./HeroSection";
import { NavSection } from "./NavSection";
import { ReviewsSection } from "./ReviewsSection";
import { ServicesSection } from "./ServicesSection";
import { TrustStripSection } from "./TrustStripSection";

const trackedSections = [
  { id: "home", name: "Home", order: 1 },
  { id: "services", name: "Services", order: 2 },
  { id: "about", name: "About", order: 3 },
  { id: "reviews", name: "Reviews", order: 4 },
  { id: "faq", name: "FAQ", order: 5 },
  { id: "contact", name: "Contact", order: 6 },
];

export function HomePage() {
  return (
    <div className="relative flex flex-col min-h-screen w-full overflow-x-hidden">
      <SectionViewTracker sections={trackedSections} />
      <NavSection />
      <main className="pt-[60px]">
        <HeroSection />
        <TrustStripSection />
        <ServicesSection />
        <AboutSection />
        <ReviewsSection />
        <FaqSection variant="catering" />
        <ContactSection variant="general" />
      </main>
      <FooterSection />
    </div>
  );
}
