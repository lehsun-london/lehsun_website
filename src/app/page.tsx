import Image from "next/image";
import { Hero } from "@/components/Hero";
import { MotifBand } from "@/components/MotifBand";
import { SectionShell } from "@/components/SectionShell";
import { SocialIcon } from "@/components/SocialIcon";
import { RotatingReviews } from "@/components/RotatingReviews";
import { StickyWhatsApp } from "@/components/StickyWhatsApp";
import { siteContent } from "@/content/site";

export default function Home() {
  return (
    <main className="pageWrap">
      <div className="ambientGlow ambientOne" aria-hidden="true" />
      <div className="ambientGlow ambientTwo" aria-hidden="true" />

      <Hero
        businessName={siteContent.businessName}
        headline={siteContent.headline}
        subheadline={siteContent.subheadline}
        ctas={siteContent.ctas}
        highlights={siteContent.dishHighlights}
      />

      <SectionShell
        title="Events We Cater"
        subtitle="From small celebrations to large gatherings, Lehsun designs menus that feel rooted and festive."
        className="revealOnScroll"
      >
        <ul className="chipGrid" aria-label="Catering event types">
          {siteContent.caterFor.map((item) => (
            <li key={item} className="chip">
              {item}
            </li>
          ))}
        </ul>
      </SectionShell>

      <SectionShell
        title="Flavour Story"
        subtitle={`Regional inspiration from ${siteContent.regionalRoots.join(", ")}`}
        className="revealOnScroll"
      >
        <ul className="promiseList" aria-label="Lehsun quality points">
          {siteContent.promisePoints.map((point) => (
            <li key={point}>{point}</li>
          ))}
        </ul>
      </SectionShell>

      <section className="dishGallery revealOnScroll" aria-label="Dish highlights">
        {siteContent.dishHighlights.map((dish) => (
          <article key={dish.title} className="dishCard">
            <div className="dishImageWrap">
              <Image src={dish.image} alt={dish.title} fill sizes="(max-width: 900px) 100vw, 33vw" />
            </div>
            <div className="dishCopy">
              <h3>{dish.title}</h3>
              <p>{dish.note}</p>
            </div>
          </article>
        ))}
      </section>

      <RotatingReviews reviews={siteContent.reviews} />

      <section className="hygieneSection revealOnScroll" aria-label="Food hygiene rating">
        <div className="hygieneContent">
          <div className="hygieneText">
            <h2>5-Star Food Hygiene Rating</h2>
            <p>
              Lehsun is proud to hold an official <strong>5-star Food Hygiene Rating</strong> from
              the UK Food Standards Agency — the highest possible standard. Every dish is prepared
              with the utmost care, cleanliness, and attention to safety.
            </p>
          </div>
          <div className="hygieneBadgeWrap">
            <Image
              src="/assets/brand/hygiene-rating-5star.png"
              alt="5 Star Food Hygiene Rating Badge"
              width={170}
              height={170}
              style={{ objectFit: "contain" }}
            />
          </div>
        </div>
      </section>

      <MotifBand
        title="Flavours You Remember"
        body="Warm, expressive, and celebration-ready. Lehsun brings nostalgic Indian cuisine to London events with colour, care, and unmistakable flavour."
        className="revealOnScroll"
      />

      <footer className="footer">
        <div>
          <p className="footerKicker">Book Lehsun</p>
          <p className="footerLine">
            <span className="footerLabel">WhatsApp:</span> {siteContent.whatsappNumber}
          </p>
          <p className="footerLine">{siteContent.locationLine}</p>
        </div>
        <div className="footerLinks">
          {siteContent.socialLinks.map((link) => (
            <a key={link.label} href={link.href} target="_blank" rel="noopener noreferrer">
              <SocialIcon label={link.label} className="linkIcon" />
              <span>{link.label}</span>
            </a>
          ))}
        </div>
      </footer>

      <StickyWhatsApp phoneNumber={siteContent.whatsappNumber} />
    </main>
  );
}
