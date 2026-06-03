import { SectionViewTracker } from "../analytics/SectionViewTracker";
import { AboutSection } from "./AboutSection";
import { ContactSection } from "./ContactSection";
import { EmotionStripSection } from "./EmotionStripSection";
import { FooterSection } from "./FooterSection";
import { FaqSection } from "./FaqSection";
import { HeroSection } from "./HeroSection";
import { NavSection } from "./NavSection";
import { ReviewsSection } from "./ReviewsSection";
import { InstagramReelsSection } from "./InstagramReelsSection";
import { ServicesSection } from "./ServicesSection";
import { TrustProofBlock } from "./TrustProofBlock";
import { JaliWaveDivider } from "@/components/ui/JaliWaveDivider";

const trackedSections = [
  { id: "home",          name: "Home",    order: 1 },
  { id: "services",      name: "Services", order: 2 },
  { id: "about",         name: "About",   order: 3 },
  { id: "reviews",       name: "Reviews", order: 4 },
  { id: "reels",         name: "Reels",   order: 5 },
  { id: "emotion-strip", name: "Brand",   order: 6 },
  { id: "faq",           name: "FAQ",     order: 7 },
  { id: "contact",       name: "Contact", order: 8 },
];

export function HomePage() {
  return (
    <div className="relative flex flex-col min-h-screen w-full overflow-x-hidden">
      <SectionViewTracker sections={trackedSections} />
      <NavSection />
      <main className="pt-[60px]">
        <HeroSection />
        <TrustProofBlock
          items={[
            "★★★★★ Loved by local families",
            "5★ Food Hygiene Rated",
            "Trusted for birthdays, housewarmings & celebrations",
          ]}
          reviewHighlight="Dartford birthday catering guests kept asking where the food was from."
          links={[
            { href: "/catering/dartford", label: "Indian Catering in Dartford" },
            { href: "/catering/gravesend", label: "Indian Catering in Gravesend" },
            {
              href: "/catering/ebbsfleet-valley",
              label: "Indian Catering in Ebbsfleet Valley",
            },
            { href: "/menu", label: "Daily Menu" },
          ]}
        />
        <JaliWaveDivider height={52} />
        <ServicesSection />
        <JaliWaveDivider height={52} />
        <AboutSection />
        <JaliWaveDivider height={52} />
        <ReviewsSection />
        <InstagramReelsSection />
        <EmotionStripSection />
        <JaliWaveDivider height={52} />
        <FaqSection variant="catering" />
        <ContactSection variant="general" />
      </main>
      <FooterSection />
    </div>
  );
}
