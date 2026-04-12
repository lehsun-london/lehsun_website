import { SectionViewTracker } from "../analytics/SectionViewTracker";
import { AboutSection } from "./AboutSection";
import { ContactSection } from "./ContactSection";
import { EmotionStripSection } from "./EmotionStripSection";
import { FooterSection } from "./FooterSection";
import { FaqSection } from "./FaqSection";
import { HeroSection } from "./HeroSection";
import { NavSection } from "./NavSection";
import { ReviewsSection } from "./ReviewsSection";
import { ServicesSection } from "./ServicesSection";
import { TrustStripSection } from "./TrustStripSection";
import { JaliWaveDivider } from "@/components/ui/JaliWaveDivider";

const trackedSections = [
  { id: "home",          name: "Home",    order: 1 },
  { id: "services",      name: "Services", order: 2 },
  { id: "about",         name: "About",   order: 3 },
  { id: "reviews",       name: "Reviews", order: 4 },
  { id: "emotion-strip", name: "Brand",   order: 5 },
  { id: "faq",           name: "FAQ",     order: 6 },
  { id: "contact",       name: "Contact", order: 7 },
];

export function HomePage() {
  return (
    <div className="relative flex flex-col min-h-screen w-full overflow-x-hidden">
      <SectionViewTracker sections={trackedSections} />
      <NavSection />
      <main className="pt-[60px]">
        <HeroSection />
        <TrustStripSection variant="general" />
        <JaliWaveDivider height={52} />
        <ServicesSection />
        <JaliWaveDivider height={52} />
        <AboutSection />
        <JaliWaveDivider height={52} />
        <ReviewsSection />
        <EmotionStripSection />
        <JaliWaveDivider height={52} />
        <FaqSection variant="catering" />
        <ContactSection variant="general" />
      </main>
      <FooterSection />
    </div>
  );
}
