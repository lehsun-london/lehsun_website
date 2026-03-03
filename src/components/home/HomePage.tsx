import { AboutSection } from './AboutSection';
import { CateringSection } from './CateringSection';
import { ContactSection } from './ContactSection';
import { EmotionStripSection } from './EmotionStripSection';
import { FooterSection } from './FooterSection';
import { HeroSection } from './HeroSection';
import { MenuSection } from './MenuSection';
import { NavSection } from './NavSection';
import { ReviewsSection } from './ReviewsSection';

export function HomePage() {
  return (
    <div className="relative flex h-auto min-screen w-full flex-col group/design-root overflow-x-hidden">
      <NavSection />
      <HeroSection />
      <AboutSection />
      <MenuSection />
      <EmotionStripSection />
      <ReviewsSection />
      <CateringSection />
      <ContactSection />
      <FooterSection />
    </div>
  );
}
