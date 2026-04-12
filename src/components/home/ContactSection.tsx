import { type DestinationType } from "@/lib/analytics";
import { MessageCircle, Calendar, Users, MapPin, UtensilsCrossed, Info } from "lucide-react";
import { TrackedLink } from "../analytics/TrackedLink";
import { contact, whatsapp } from "@/content/businessInfo";
import { ScrollReveal } from "@/components/ui/ScrollReveal";

export type ContactVariant = "general" | "catering" | "menu";

const enquiryTips = [
  { icon: Calendar, label: "Your event date" },
  { icon: Users, label: "Number of guests (15+)" },
  { icon: MapPin, label: "Your area" },
  { icon: UtensilsCrossed, label: "Any dishes in mind" },
];

function SocialIcon({ type }: { type: "instagram" | "facebook" | "google" }) {
  if (type === "instagram") {
    return (
      <svg aria-hidden className="size-4" fill="none" viewBox="0 0 24 24">
        <rect x="4" y="4" width="16" height="16" rx="5" stroke="currentColor" strokeWidth="1.8" />
        <circle cx="12" cy="12" r="3.6" stroke="currentColor" strokeWidth="1.8" />
        <circle cx="17.2" cy="6.8" r="1.1" fill="currentColor" />
      </svg>
    );
  }
  if (type === "facebook") {
    return (
      <svg aria-hidden className="size-4" viewBox="0 0 24 24">
        <circle cx="12" cy="12" r="10" fill="#1877F2" />
        <path d="M13.3 19v-6.1h2l.3-2.3h-2.3V9.1c0-.7.2-1.2 1.2-1.2h1.2V5.8c-.2 0-.9-.1-1.8-.1-1.8 0-3.1 1.1-3.1 3.2v1.8H9v2.3h2V19h2.3Z" fill="#fff" />
      </svg>
    );
  }
  return (
    <svg aria-hidden className="size-4" viewBox="0 0 24 24">
      <path d="M12 2c3.7 0 6.8 3 6.8 6.8 0 4.8-6.8 13.3-6.8 13.3S5.2 13.6 5.2 8.8C5.2 5 8.3 2 12 2Z" fill="#EA4335" />
      <circle cx="12" cy="8.8" r="2.8" fill="#FBBC05" />
      <path d="M12 2a6.8 6.8 0 0 1 5.2 2.4l-2.4 1.9A3.7 3.7 0 0 0 12 5.1V2Z" fill="#4285F4" />
      <path d="M6.8 4.4A6.8 6.8 0 0 1 12 2v3.1a3.7 3.7 0 0 0-2.8 1.2L6.8 4.4Z" fill="#34A853" />
    </svg>
  );
}

const socialLinks = [
  { href: contact.instagram, icon: "instagram" as const, label: "Instagram", destinationType: "instagram" as DestinationType },
  { href: contact.facebook, icon: "facebook" as const, label: "Facebook", destinationType: "facebook" as DestinationType },
  { href: contact.googleMaps, icon: "google" as const, label: "Google", destinationType: "maps" as DestinationType },
];

interface ContactSectionProps {
  variant?: ContactVariant;
}

export function ContactSection({ variant = "general" }: ContactSectionProps) {
  const isMenu = variant === "menu";
  const isCatering = variant === "catering";

  const heading = isMenu
    ? "Order Today\u2019s Menu on WhatsApp"
    : "Ready to Plan Your Event?";

  const subtext = isMenu
    ? "Browse the WhatsApp catalogue, drop us a message, or give us a call. Collection is available, and delivery within 2 miles on orders above \u00a325."
    : "Message us on WhatsApp with a few details and we\u2019ll come back with a tailored quote — usually the same day.";

  return (
    <section className="bg-gradient-to-b from-[#FFF0D4] to-[#FFE8B8] py-20 md:py-28 px-5 lg:px-10 scroll-mt-20" id="contact">
      <div className="max-w-3xl mx-auto">
        <ScrollReveal>
          <div className="text-center mb-10">
            <p className="text-xs font-bold uppercase tracking-[0.2em] text-[#C42B0A] mb-4">
              {isMenu ? "Order Now" : "Get in Touch"}
            </p>
            <h2
              className="font-serif italic font-black text-[#1A0600] mb-5 text-balance"
              style={{ fontSize: "clamp(2rem, 4vw, 3rem)" }}
            >
              {heading}
            </h2>
            <p className="text-[#6B3520] text-base max-w-xl mx-auto leading-relaxed">
              {subtext}
            </p>
          </div>
        </ScrollReveal>

        <ScrollReveal delay={100}>
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            {isMenu ? (
              <TrackedLink
                className="flex items-center justify-center gap-3 bg-[#25D366] text-white px-10 py-4 rounded-full font-bold uppercase tracking-wide hover:-translate-y-0.5 transition-all shadow-lg shadow-green-500/20 focus-ring text-sm cursor-pointer"
                ctaText="Browse Menu on WhatsApp"
                destinationType="whatsapp"
                href={whatsapp.catalog}
                intent="menu"
                isPrimaryCta
                placement="contact_menu"
                rel="noopener noreferrer"
                target="_blank"
              >
                <MessageCircle className="size-4" aria-hidden />
                Browse Menu on WhatsApp
              </TrackedLink>
            ) : (
              <>
                <TrackedLink
                  className="flex items-center justify-center gap-3 bg-[#25D366] text-white px-10 py-4 rounded-full font-bold uppercase tracking-wide hover:-translate-y-0.5 transition-all shadow-lg shadow-green-500/20 focus-ring text-sm cursor-pointer"
                  ctaText="Get Catering Quote"
                  destinationType="whatsapp"
                  href={whatsapp.cateringEnquiry}
                  intent="lead"
                  isPrimaryCta
                  placement={`contact_${variant}`}
                  rel="noopener noreferrer"
                  target="_blank"
                >
                  <MessageCircle className="size-4" aria-hidden />
                  Get Catering Quote
                </TrackedLink>
                {!isCatering && (
                  <TrackedLink
                    className="flex items-center justify-center gap-2 border border-[#E2C9A8] bg-white text-[#1A0600] px-10 py-4 rounded-full font-semibold text-sm hover:border-[#E8751A] hover:text-[#E8751A] transition-colors focus-ring cursor-pointer"
                    ctaText="Browse Daily Menu"
                    destinationType="external"
                    href="/menu"
                    intent="section_navigation"
                    placement="contact_general"
                  >
                    Browse Daily Menu
                  </TrackedLink>
                )}
              </>
            )}
          </div>
        </ScrollReveal>

        {/* Quick tip — catering/general only */}
        {!isMenu && (
          <ScrollReveal delay={150}>
            <div className="flex gap-3 bg-white/70 border border-[#E2C9A8] rounded-2xl p-5 mb-10 shadow-sm">
              <div className="flex-shrink-0 mt-0.5">
                <div className="size-8 rounded-full bg-[#E8751A]/10 flex items-center justify-center">
                  <Info className="size-4 text-[#E8751A]" aria-hidden />
                </div>
              </div>
              <div>
                <p className="text-sm font-bold text-[#1A0600] mb-3">
                  A few details help us quote faster
                </p>
                <div className="grid gap-2 sm:grid-cols-2">
                  {enquiryTips.map(({ icon: Icon, label }) => (
                    <div key={label} className="flex items-center gap-2 text-sm text-[#6B3520]">
                      <Icon className="size-3.5 text-[#E8751A] flex-shrink-0" aria-hidden />
                      {label}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </ScrollReveal>
        )}

        {/* Social links */}
        <ScrollReveal delay={200}>
          <div className="flex flex-wrap gap-3 justify-center">
            {socialLinks.map((link) => (
              <TrackedLink
                key={link.label}
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-white border border-[#E2C9A8] text-sm font-semibold text-[#6B3520] hover:border-[#E8751A] hover:text-[#E8751A] transition-colors focus-ring cursor-pointer shadow-sm"
                ctaText={link.label}
                destinationType={link.destinationType}
                href={link.href}
                intent="social"
                placement="contact_social"
                rel="noopener noreferrer"
                target="_blank"
              >
                <SocialIcon type={link.icon} />
                {link.label}
              </TrackedLink>
            ))}
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
