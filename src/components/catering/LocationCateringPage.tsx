import {
  MessageCircle,
  Star,
  ShieldCheck,
  MapPin,
  Users,
  ChefHat,
  Calendar,
} from "lucide-react";
import { TrackedLink } from "@/components/analytics/TrackedLink";
import BreadcrumbSchema from "@/components/seo/BreadcrumbSchema";
import { ScrollReveal } from "@/components/ui/ScrollReveal";
import { NavSection } from "@/components/home/NavSection";
import { FooterSection } from "@/components/home/FooterSection";
import { TrustProofBlock } from "@/components/home/TrustProofBlock";
import {
  whatsapp,
  contact,
  cateringPricing,
  reviewStats,
  cateringReviews,
} from "@/content/businessInfo";
import { buildAbsoluteUrl } from "@/lib/seo";

export interface LocationConfig {
  /** City / area name, e.g. "Dartford" */
  name: string;
  /** Full display name, e.g. "Dartford, Kent" */
  displayName: string;
  /** Postcode areas served, e.g. "DA1, DA2" */
  postcodes: string;
  /** Short prose about proximity to base, shown below hero */
  proximityNote: string;
  heroTitle?: string;
  trustItems?: readonly string[];
  reviewHighlight?: string;
  relatedLinks?: ReadonlyArray<{
    href: string;
    label: string;
  }>;
  localContent?: string;
  /** Nearby places to mention for long-tail coverage */
  nearbyAreas: string[];
  /** 3-4 sentences unique to this location, shown in the location context section */
  locationIntro: string;
  /** 2 FAQs specific to this location, shown on-page and emitted in FAQ schema */
  locationFaqs: ReadonlyArray<{
    question: string;
    answer: string;
  }>;
}

const eventTypes = [
  { icon: "🎂", label: "Birthday parties" },
  { icon: "🏠", label: "Housewarmings" },
  { icon: "👶", label: "Baby showers" },
  { icon: "🪔", label: "Diwali gatherings" },
  { icon: "🎉", label: "Anniversaries" },
  { icon: "👨‍👩‍👧‍👦", label: "Family get-togethers" },
  { icon: "🌸", label: "Holi celebrations" },
  { icon: "🎄", label: "Christmas parties" },
];

const menuHighlights = {
  veg: [
    "Dal Makhani",
    "Paneer Butter Masala",
    "Delhi's Pindi Chole",
    "Dum Aloo",
    "Samosa Chole Chaat",
  ],
  nonVeg: [
    "Delhi's Butter Chicken",
    "Kashmiri Rogan Josh",
    "Chicken Tikka",
    "Shahi Patiala Chicken",
  ],
  extras: [
    "Butter Naan / Poori",
    "Veg & Non-Veg Pulao",
    "Shahi Tukda",
    "Fresh Raita",
  ],
};

export function LocationCateringPage({
  location,
}: {
  location: LocationConfig;
}) {
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: location.locationFaqs.map((faq) => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: { "@type": "Answer", text: faq.answer },
    })),
  };

  return (
    <>
      <BreadcrumbSchema
        items={[
          { name: "Home", item: buildAbsoluteUrl("/") },
          { name: "Catering", item: buildAbsoluteUrl("/catering") },
          {
            name: location.displayName,
            item: buildAbsoluteUrl(
              `/catering/${location.name.toLowerCase().replace(/\s+/g, "-")}` as `/${string}`,
            ),
          },
        ]}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <NavSection />

      {/* Hero */}
      <section className="bg-[#FDF8F0] pt-24 pb-12 px-5 lg:px-10">
        <div className="max-w-4xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 rounded-full border border-[#D93423]/20 bg-[#D93423]/5 px-5 py-2 mb-6 animate-fade-in-up">
            <Star
              className="size-3.5 fill-[#E69B39] text-[#E69B39]"
              aria-hidden
            />
            <span className="text-xs font-bold uppercase tracking-[0.18em] text-[#D93423]">
              5★ · {reviewStats.count}+ Google Reviews
            </span>
          </div>

          <h1
            className="font-serif italic font-black text-[#1A0600] text-balance leading-tight mb-5 animate-fade-in-up"
            style={{
              fontSize: "clamp(2.2rem, 5vw, 3.8rem)",
              animationDelay: "80ms",
            }}
          >
            {location.heroTitle ?? (
              <>
                North Indian Catering in{" "}
                <span style={{ color: "#D93423" }}>{location.name}</span>
              </>
            )}
          </h1>

          <p
            className="text-lg md:text-xl text-[#5C2A10] mb-4 max-w-[48ch] mx-auto leading-relaxed animate-fade-in-up"
            style={{ animationDelay: "160ms" }}
          >
            Proper flavours for birthdays, housewarmings, baby showers and
            family events in {location.displayName}. From{" "}
            <strong>{cateringPricing.shortPrice}</strong>.
          </p>

          <p
            className="text-sm text-[#6B3A2A] mb-8 animate-fade-in-up"
            style={{ animationDelay: "200ms" }}
          >
            {location.proximityNote}
          </p>

          <div
            className="flex flex-col items-stretch sm:flex-row sm:items-center sm:justify-center gap-4 mb-8 animate-fade-in-up"
            style={{ animationDelay: "240ms" }}
          >
            <TrackedLink
              className="flex items-center justify-center gap-2 text-white px-8 py-4 rounded-full font-bold text-sm uppercase tracking-wider transition-all shadow-lg hover:-translate-y-0.5 focus-ring cursor-pointer"
              style={{
                backgroundColor: "#D93423",
                boxShadow: "0 8px 24px rgba(217,52,35,0.35)",
              }}
              ctaText="Get a Catering Quote"
              destinationType="whatsapp"
              href={whatsapp.cateringEnquiry}
              intent="lead"
              isPrimaryCta
              leadType="catering_enquiry"
              value={150}
              placement={`location_hero_${location.name.toLowerCase()}`}
              rel="noopener noreferrer"
              target="_blank"
            >
              <MessageCircle className="size-4" aria-hidden />
              Get a Catering Quote
            </TrackedLink>
            <TrackedLink
              href={`tel:${contact.phone.replace(/\s/g, "")}`}
              className="flex items-center justify-center gap-2 border-2 border-[#03B6AA] text-[#03B6AA] px-8 py-4 rounded-full font-bold text-sm uppercase tracking-wider hover:bg-[#03B6AA]/5 transition-colors focus-ring cursor-pointer"
              ctaText="Call Us"
              destinationType="phone"
              intent="lead"
              isPrimaryCta={false}
              leadType="catering_enquiry"
              value={150}
              placement="location_hero_call"
            >
              Call Us
            </TrackedLink>
          </div>

          {/* Trust chips */}
          <div
            className="flex flex-wrap justify-center gap-4 animate-fade-in-up"
            style={{ animationDelay: "300ms" }}
          >
            {[
              { icon: Star, text: "5★ Google Reviews", color: "#E69B39" },
              {
                icon: ShieldCheck,
                text: "5-Star Hygiene Rating",
                color: "#03B6AA",
              },
              {
                icon: MapPin,
                text: `Serving ${location.name} & nearby`,
                color: "#D93423",
              },
            ].map(({ icon: Icon, text, color }) => (
              <div
                key={text}
                className="flex items-center gap-2 text-sm font-semibold text-[#5C2A10]"
              >
                <Icon className="size-4" style={{ color }} aria-hidden />
                {text}
              </div>
            ))}
          </div>
        </div>
      </section>

      <TrustProofBlock
        items={
          location.trustItems ?? [
            "★★★★★ 5★ Google Reviews",
            "5★ Food Hygiene Rated",
          ]
        }
        reviewHighlight={location.reviewHighlight}
        links={location.relatedLinks}
      />

      {/* What We Offer */}
      <section className="bg-white border-t border-[#E8D5C0] py-12 px-5 lg:px-10">
        <div className="max-w-5xl mx-auto">
          <ScrollReveal>
            <div className="text-center mb-8">
              <p className="text-xs font-bold uppercase tracking-[0.2em] text-[#D93423] mb-3">
                Catering in {location.name}
              </p>
              <h2
                className="font-serif italic font-black text-[#1C0A00] text-balance"
                style={{ fontSize: "clamp(1.6rem, 3vw, 2.2rem)" }}
              >
                Tailored North Indian menus for every occasion
              </h2>
            </div>
          </ScrollReveal>

          <div className="grid md:grid-cols-3 gap-6">
            {[
              {
                icon: ChefHat,
                color: "#D93423",
                title: "Handcrafted menus",
                body: "Every menu is tailored to your event and guests — veg-only, non-veg, or a mix. Separate veg and non-veg kitchens are maintained for full hygiene separation.",
              },
              {
                icon: Users,
                color: "#03B6AA",
                title: "From 15 guests",
                body: `We cater for events in ${location.name} and nearby ${location.postcodes} postcodes. The more guests, the better the per-head value.`,
              },
              {
                icon: Calendar,
                color: "#E69B39",
                title: "Same-day quotes",
                body: "Send us your event date, guest count, and any dishes in mind on WhatsApp. We usually come back with a tailored quote the same day.",
              },
            ].map(({ icon: Icon, color, title, body }, i) => (
              <ScrollReveal key={title} delay={i * 80}>
                <div className="bg-[#FFF5E4] border border-[#E8D5C0] rounded-2xl p-6 h-full">
                  <div
                    className="size-10 rounded-full flex items-center justify-center mb-4"
                    style={{ backgroundColor: `${color}15` }}
                  >
                    <Icon className="size-5" style={{ color }} aria-hidden />
                  </div>
                  <h3 className="font-black text-[#1C0A00] mb-2">{title}</h3>
                  <p className="text-sm text-[#6B3A2A] leading-relaxed">
                    {body}
                  </p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Event Types */}
      <section className="bg-[#FFF5E4] border-t border-[#E8D5C0] py-12 px-5 lg:px-10">
        <div className="max-w-5xl mx-auto">
          <ScrollReveal>
            <div className="text-center mb-8">
              <p className="text-xs font-bold uppercase tracking-[0.2em] text-[#D93423] mb-3">
                Events we cater
              </p>
              <h2
                className="font-serif italic font-black text-[#1C0A00]"
                style={{ fontSize: "clamp(1.6rem, 3vw, 2.2rem)" }}
              >
                Celebrating in {location.name}?
              </h2>
            </div>
          </ScrollReveal>
          <ScrollReveal delay={80}>
            <div className="flex flex-wrap justify-center gap-3">
              {eventTypes.map(({ icon, label }) => (
                <span
                  key={label}
                  className="inline-flex items-center gap-2 rounded-full border border-[#E8D5C0] bg-white px-4 py-2 text-sm font-semibold text-[#6B3A2A]"
                >
                  <span aria-hidden>{icon}</span>
                  {label}
                </span>
              ))}
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Menu Highlights */}
      <section className="bg-white border-t border-[#E8D5C0] py-12 px-5 lg:px-10">
        <div className="max-w-5xl mx-auto">
          <ScrollReveal>
            <div className="text-center mb-8">
              <p className="text-xs font-bold uppercase tracking-[0.2em] text-[#D93423] mb-3">
                What we cook
              </p>
              <h2
                className="font-serif italic font-black text-[#1C0A00] text-balance"
                style={{ fontSize: "clamp(1.6rem, 3vw, 2.2rem)" }}
              >
                Popular dishes for {location.name} events
              </h2>
            </div>
          </ScrollReveal>

          <div className="grid sm:grid-cols-3 gap-5">
            {[
              {
                title: "Vegetarian mains & starters",
                items: menuHighlights.veg,
                color: "#03B6AA",
              },
              {
                title: "Non-vegetarian mains",
                items: menuHighlights.nonVeg,
                color: "#D93423",
              },
              {
                title: "Breads, rice & desserts",
                items: menuHighlights.extras,
                color: "#E69B39",
              },
            ].map(({ title, items, color }, i) => (
              <ScrollReveal key={title} delay={i * 70}>
                <div className="bg-[#FFF5E4] border border-[#E8D5C0] rounded-2xl p-6 h-full">
                  <div
                    className="text-xs font-bold uppercase tracking-[0.15em] mb-4"
                    style={{ color }}
                  >
                    {title}
                  </div>
                  <ul className="space-y-2">
                    {items.map((dish) => (
                      <li
                        key={dish}
                        className="flex items-start gap-2 text-sm text-[#6B3A2A]"
                      >
                        <span
                          className="mt-1.5 size-1.5 rounded-full flex-shrink-0"
                          style={{ backgroundColor: color }}
                          aria-hidden
                        />
                        {dish}
                      </li>
                    ))}
                  </ul>
                </div>
              </ScrollReveal>
            ))}
          </div>

          <ScrollReveal delay={200}>
            <p className="text-center text-sm text-[#6B3A2A] mt-6">
              50+ dishes across starters, mains, rice, breads and desserts.{" "}
              <TrackedLink
                className="text-[#D93423] font-semibold underline underline-offset-2 hover:opacity-70 transition-opacity"
                ctaText="See full catering menu"
                destinationType="external"
                href="/catering"
                intent="section_navigation"
                placement={`location_menu_link_${location.name.toLowerCase()}`}
              >
                See the full catering menu
              </TrackedLink>
              .
            </p>
          </ScrollReveal>
        </div>
      </section>

      {/* Pricing */}
      <section className="bg-[#FFF5E4] border-t border-[#E8D5C0] py-12 px-5 lg:px-10">
        <div className="max-w-3xl mx-auto text-center">
          <ScrollReveal>
            <p className="text-xs font-bold uppercase tracking-[0.2em] text-[#D93423] mb-3">
              Pricing
            </p>
            <h2
              className="font-serif italic font-black text-[#1C0A00] mb-4"
              style={{ fontSize: "clamp(1.6rem, 3vw, 2.2rem)" }}
            >
              {cateringPricing.startingPrice} for {location.name} events
            </h2>
            <p className="text-[#6B3A2A] text-base leading-relaxed mb-6 max-w-[40ch] mx-auto">
              Price depends on menu choice and guest count. WhatsApp us with the
              details and we&apos;ll send you a tailored quote — usually the
              same day.
            </p>
            <TrackedLink
              className="inline-flex items-center gap-2 text-white px-8 py-4 rounded-full font-bold text-sm uppercase tracking-wider transition-all shadow-lg hover:-translate-y-0.5 focus-ring cursor-pointer"
              style={{ backgroundColor: "#D93423" }}
              ctaText="Get a Quote"
              destinationType="whatsapp"
              href={whatsapp.cateringEnquiry}
              intent="lead"
              leadType="catering_enquiry"
              value={150}
              placement={`location_pricing_${location.name.toLowerCase()}`}
              rel="noopener noreferrer"
              target="_blank"
            >
              <MessageCircle className="size-4" aria-hidden />
              Get a Quote on WhatsApp
            </TrackedLink>
          </ScrollReveal>
        </div>
      </section>

      {/* Reviews — all catering reviews */}
      <section className="bg-white border-t border-[#E8D5C0] py-12 px-5 lg:px-10">
        <div className="max-w-5xl mx-auto">
          <ScrollReveal>
            <div className="text-center mb-8">
              <p className="text-xs font-bold uppercase tracking-[0.2em] text-[#D93423] mb-3">
                What clients say
              </p>
              <div className="flex items-center justify-center gap-1 mb-2">
                {Array.from({ length: 5 }).map((_, j) => (
                  <Star
                    key={j}
                    className="size-4 fill-[#E69B39] text-[#E69B39]"
                    aria-hidden
                  />
                ))}
              </div>
              <p className="text-sm font-semibold text-[#6B3A2A]">
                5★ · {reviewStats.count}+ reviews on Google
              </p>
            </div>
          </ScrollReveal>
          <div className="grid md:grid-cols-2 gap-5 mb-6">
            {cateringReviews.map((review, i) => (
              <ScrollReveal key={review.author} delay={i * 80}>
                <blockquote className="bg-[#FFF5E4] border border-[#E8D5C0] rounded-2xl p-7 h-full flex flex-col">
                  <p className="text-sm text-[#6B3A2A] leading-relaxed flex-1 italic mb-4">
                    &ldquo;{review.quote}&rdquo;
                  </p>
                  <footer className="text-sm font-bold text-[#1C0A00]">
                    — {review.author}
                  </footer>
                </blockquote>
              </ScrollReveal>
            ))}
          </div>
          <ScrollReveal delay={160}>
            <div className="text-center">
              <TrackedLink
                className="inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-[0.15em] text-[#D93423] hover:opacity-70 transition-opacity"
                ctaText="Read all reviews on Google"
                destinationType="maps"
                href={contact.googleMaps}
                intent="review_click"
                placement={`location_reviews_${location.name.toLowerCase()}`}
                rel="noopener noreferrer"
                target="_blank"
              >
                <Star
                  className="size-3 fill-[#D93423] text-[#D93423]"
                  aria-hidden
                />
                Read all {reviewStats.count}+ reviews on Google
              </TrackedLink>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Location context */}
      <section className="bg-[#FFF5E4] border-t border-[#E8D5C0] py-12 px-5 lg:px-10">
        <div className="max-w-3xl mx-auto">
          <ScrollReveal>
            <h2
              className="font-serif italic font-black text-[#1C0A00] mb-4"
              style={{ fontSize: "clamp(1.4rem, 2.5vw, 1.8rem)" }}
            >
              North Indian catering for {location.displayName}
            </h2>
            <p className="text-[#6B3A2A] leading-relaxed mb-3">
              {location.locationIntro}
            </p>
            {location.localContent ? (
              <p className="text-[#6B3A2A] leading-relaxed mb-3">
                {location.localContent}
              </p>
            ) : null}
            <p className="text-[#6B3A2A] leading-relaxed">
              We also cover {location.nearbyAreas.join(", ")} and surrounding
              areas. Every menu is cooked fresh and tailored to your guest list.
              We maintain separate veg and non-veg kitchens and hold a 5-star
              food hygiene rating.
            </p>
          </ScrollReveal>

          {location.locationFaqs.length > 0 && (
            <ScrollReveal delay={80}>
              <div className="mt-8 pt-8 border-t border-[#E8D5C0] space-y-6">
                {location.locationFaqs.map((faq) => (
                  <div key={faq.question}>
                    <p className="font-bold text-[#1C0A00] mb-2">
                      {faq.question}
                    </p>
                    <p className="text-[#6B3A2A] leading-relaxed text-sm">
                      {faq.answer}
                    </p>
                  </div>
                ))}
              </div>
            </ScrollReveal>
          )}
        </div>
      </section>

      {/* Final CTA */}
      <section className="bg-gradient-to-b from-[#FFF0D4] to-[#FFE8B8] border-t border-[#E8D5C0] py-12 px-5 lg:px-10">
        <div className="max-w-2xl mx-auto text-center">
          <ScrollReveal>
            <p className="text-xs font-bold uppercase tracking-[0.2em] text-[#D93423] mb-3">
              Get in touch
            </p>
            <h2
              className="font-serif italic font-black text-[#1A0600] mb-4"
              style={{ fontSize: "clamp(1.8rem, 3.5vw, 2.4rem)" }}
            >
              Ready to plan your {location.name} event?
            </h2>
            <p className="text-[#6B3520] mb-6 leading-relaxed">
              Message us on WhatsApp with your event date, guest count, and any
              dishes in mind. We&apos;ll come back with a tailored quote —
              usually the same day.
            </p>
            <div className="flex flex-col items-stretch sm:flex-row sm:items-center sm:justify-center gap-4">
              <TrackedLink
                className="flex items-center justify-center gap-2 bg-[#25D366] text-white px-8 py-4 rounded-full font-bold text-sm uppercase tracking-wider hover:-translate-y-0.5 transition-all shadow-lg shadow-green-500/20 focus-ring cursor-pointer"
                ctaText="Get Catering Quote"
                destinationType="whatsapp"
                href={whatsapp.cateringEnquiry}
                intent="lead"
                isPrimaryCta
                leadType="catering_enquiry"
                value={150}
                placement={`location_cta_${location.name.toLowerCase()}`}
                rel="noopener noreferrer"
                target="_blank"
              >
                <MessageCircle className="size-4" aria-hidden />
                Get Catering Quote
              </TrackedLink>
              <TrackedLink
                href={`tel:${contact.phone.replace(/\s/g, "")}`}
                className="flex items-center justify-center gap-2 border border-[#E2C9A8] bg-white text-[#1A0600] px-8 py-4 rounded-full font-semibold text-sm hover:border-[#D93423] hover:text-[#D93423] transition-colors focus-ring cursor-pointer"
                ctaText={`Call ${contact.phone}`}
                destinationType="phone"
                intent="lead"
                isPrimaryCta={false}
                leadType="catering_enquiry"
                value={150}
                placement="location_cta_call"
              >
                Call {contact.phone}
              </TrackedLink>
            </div>
          </ScrollReveal>
        </div>
      </section>

      <FooterSection />
    </>
  );
}
