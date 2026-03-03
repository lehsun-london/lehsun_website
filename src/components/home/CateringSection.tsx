import Image from "next/image";
import { TrackedLink } from "../analytics/TrackedLink";

const points = [
  "Customisable vegetarian & non-veg catering menus",
  "Reliable delivery & setup",
  "Freshly prepared in batches",
  "Designed for gatherings of 15+ guests",
];

export function CateringSection() {
  return (
    <section
      className="bg-vermillion text-white py-24 px-6 lg:px-20 relative scroll-mt-28"
      id="catering"
    >
      <div className="max-w-[1200px] mx-auto flex flex-col lg:flex-row items-center gap-16">
        <div className="lg:w-1/2">
          <h2 className="text-balance text-4xl lg:text-6xl font-black mb-2 leading-tight">
            North Indian Catering
          </h2>
          <h3 className="text-balance text-xl lg:text-2xl font-black mb-8 leading-tight">
            for Private Parties & Corporate Events
          </h3>
          <p className="text-white/90 text-lg md:text-xl mb-6 leading-relaxed max-w-[62ch]">
            Lehsun provides authentic North Indian catering in the UK for house
            parties, birthdays, family celebrations, and corporate events.
            <br />
            <br />
            We provide North Indian catering across Kent and South East London.
            <br />
            <br />
            From 15 to 300 guests, we create a spread people remember long after
            the event.
            <br />
            <br />
            Rich gravies. Proper spice. Nostalgia in every bite.
            <br />
            One bite, and you&rsquo;re back in India.
          </p>
          <p className="text-white/90 text-base mb-12 leading-relaxed max-w-[62ch]">
            If you&apos;re looking for authentic Indian catering with proper
            flavour, Lehsun delivers the taste you remember.
          </p>
          <ul className="space-y-6">
            {points.map((point) => (
              <li key={point} className="flex items-center gap-4">
                <span className="text-mustard bg-white rounded-full px-2 py-1 font-bold leading-none">
                  ✓
                </span>
                <span className="text-lg font-medium">{point}</span>
              </li>
            ))}
          </ul>
          <TrackedLink
            className="mt-12 bg-white text-vermillion px-12 py-4 rounded-full font-bold uppercase tracking-widest hover:bg-cream transition-colors shadow-xl inline-flex focus-ring"
            ctaText="Get Catering Quote on WhatsApp"
            destinationType="whatsapp"
            eventName="click_whatsapp_quote"
            href="https://wa.me/447768892652?text=Hi%20Lehsun%2C%20I%27d%20like%20to%20inquire%20about%20catering."
            placement="catering_section"
            rel="noopener noreferrer"
            target="_blank"
          >
            Get Catering Quote on WhatsApp
          </TrackedLink>
        </div>
        <div className="lg:w-1/2 relative">
          <div className="aspect-[4/5] rounded-2xl overflow-hidden shadow-2xl rotate-3 border-8 border-white">
            <Image
              alt="North Indian catering setup for a large family gathering"
              className="w-full h-full object-cover"
              height={1200}
              src="/assets/stitch/lehsun-branded-final/catering-table.png"
              width={960}
            />
          </div>
        </div>
      </div>
    </section>
  );
}
