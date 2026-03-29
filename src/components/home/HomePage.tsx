import { SectionViewTracker } from "../analytics/SectionViewTracker";
import { AboutSection } from './AboutSection';
import { CateringSection } from './CateringSection';
import { ContactSection } from './ContactSection';
import { EmotionStripSection } from './EmotionStripSection';
import { FaqSection } from './FaqSection';
import { FooterSection } from './FooterSection';
import { HeroSection } from './HeroSection';
import { LocalSeoSection } from './LocalSeoSection';
import { MenuSection } from './MenuSection';
import { NavSection } from './NavSection';
import { ReviewsSection } from './ReviewsSection';

const trackedSections = [
  { id: "about", name: "About", order: 1 },
  { id: "catering", name: "Catering", order: 2 },
  { id: "areas", name: "Areas", order: 3 },
  { id: "reviews", name: "Reviews", order: 4 },
  { id: "daily-menu", name: "Daily Menu", order: 5 },
  { id: "faq", name: "FAQ", order: 6 },
  { id: "contact", name: "Contact", order: 7 },
];

export function HomePage() {
  return (
    <div className="relative flex h-auto min-screen w-full flex-col group/design-root overflow-x-hidden">
      <SectionViewTracker sections={trackedSections} />
      <NavSection />
      <HeroSection />
      <AboutSection />
      <CateringSection />
      <LocalSeoSection />
      <ReviewsSection />
      <EmotionStripSection />
      <MenuSection />
      <FaqSection />
      <ContactSection />
      <FooterSection />
    </div>
  );
}
