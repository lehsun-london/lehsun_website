import Image from "next/image";
import { Hero } from "@/components/Hero";
import { SocialIcon } from "@/components/SocialIcon";
import { RotatingReviews } from "@/components/RotatingReviews";
import { siteContent } from "@/content/site";

export default function Home() {
  return (
    <main className="pageWrap">
      {/* 1. HERO */}
      <Hero
        businessName={siteContent.businessName}
        headline={siteContent.headline}
        subheadline={siteContent.subheadline}
        ctas={siteContent.ctas}
        highlights={siteContent.dishHighlights}
      />

      {/* 2. ABOUT (Mustard) */}
      <section className="aboutSection blockSection" aria-label="About Lehsun">
        <div className="patternOverlay" aria-hidden="true"></div>
        <div className="blockContainer">
          <h2>Why Lehsun?</h2>
          <div className="aboutCopy">
            <p>Because some flavours should never fade.</p>
            <p>
              The kind of Rajma that reminds you of winter afternoons.
              <br />
              The kind of Kachori that flakes perfectly.
              <br />
              The kind of Shahi Tukda that tastes like a wedding.
            </p>
            <p>
              Lehsun brings back regional Indian classics &mdash; made fresh, in small batches, with
              full flavour.
            </p>
            <p>
              <strong>No shortcuts. No generic curry taste. Just proper depth and celebration on every plate.</strong>
            </p>
          </div>
        </div>
        <Image
          src="/assets/generated/geometric-motif.png"
          alt=""
          width={180}
          height={180}
          className="aboutDeco"
          aria-hidden="true"
        />
      </section>

      {/* 3. SIGNATURE DISH GRID (Cream) */}
      <section className="dishesSection blockSection" aria-label="Signature Dishes">
        <div className="blockContainer">
          <div style={{ textAlign: "center", marginBottom: "3rem" }}>
            <h2>Our Favourites</h2>
            <p style={{ marginTop: "0.5rem", fontSize: "1.2rem", color: "#666" }}>
              Colourful. Comforting. Crave-worthy.
            </p>
          </div>

          <div className="dishesGrid">
            {siteContent.dishHighlights.map((dish) => (
              <article key={dish.title} className="dishCardNew">
                <div className="dishImageWrap">
                  <Image src={dish.image} alt={dish.title} fill sizes="(max-width: 900px) 100vw, 33vw" />
                </div>
                <div className="dishTitles">
                  <h3>{dish.title}</h3>
                  <p>{dish.note}</p>
                </div>
              </article>
            ))}
          </div>

          <div className="ctaCluster" style={{ justifyContent: "center", marginTop: "4rem" }}>
            <a href="https://wa.me/c/447768892652" className="ctaLink primary">
              Explore Full Menu on WhatsApp
            </a>
          </div>
        </div>
      </section>

      {/* 4. CATERING (Magenta Arch) */}
      <section className="cateringSection blockSection" aria-label="Catering Options">
        <div className="patternOverlay" aria-hidden="true"></div>
        <div className="blockContainer cateringInner">
          <div>
            <h2>Planning Something Special?</h2>
            <p className="cateringCopy" style={{ marginTop: "1.5rem" }}>
              From birthday parties to Holi events, family gatherings to corporate lunches &mdash;
              Lehsun caters for 25+ guests with curated menus that bring colour to your table.
            </p>
            <p className="cateringCopy" style={{ marginTop: "1.5rem", fontWeight: 700 }}>
              Big gatherings deserve big flavours.
            </p>
            <div className="ctaCluster" style={{ marginTop: "2.5rem" }}>
              <a href="https://wa.me/447768892652" className="ctaLink secondary">
                Enquire for Catering
              </a>
              <a href="https://wa.me/447768892652" className="ctaLink whatsapp" style={{ background: "#25d366", color: "#fff" }}>
                Message on WhatsApp
              </a>
            </div>
          </div>
          <div>
            <ul className="cateringList">
              <li>Customisable menu</li>
              <li>Freshly prepared</li>
              <li>Pickup-based</li>
              <li>Limited batch cooking</li>
            </ul>
          </div>
        </div>
      </section>

      {/* 5. EMOTIONAL STRIP (Red) */}
      <section className="emotionStrip" aria-hidden="true">
        <div className="patternOverlay" aria-hidden="true"></div>
        <h2>Cause sudden cravings for home.</h2>
      </section>

      {/* 6. ORDER & FOOTER (Cream) */}
      <section className="orderFooterSection">
        <div className="blockContainer">
          <h2>Order Now</h2>
          <p className="orderCopy">
            Pre-order through our WhatsApp catalogue. Fresh batches. Limited availability.
            <br />
            <br />
            <strong>📍 Pickup: Ebbsfleet Valley, Kent (DA10)</strong>
          </p>
          <a href="https://wa.me/c/447768892652" className="ctaLink whatsapp">
            Order on WhatsApp
          </a>

          <div className="footerLinks">
            <a href="https://www.instagram.com/lehsun.london">Instagram</a>
            <a href="https://wa.me/447768892652">WhatsApp</a>
            <a href="mailto:hello@lehsun.co.uk">Email</a>
          </div>
          <p style={{ marginTop: "2rem", color: "#888", fontSize: "0.9rem" }}>
            Lehsun &mdash; Flavours like you remember.
          </p>
        </div>
      </section>

      {/* Sticky Helper components */}
      <div className="stickyWhatsappWrap">
        {/* We keep the sticky global component as requested in previous phases, but stripped some complexity */}
        <a href="https://wa.me/447768892652" className="stickyWhatsapp" aria-label="Chat on WhatsApp">
          <SocialIcon label="WhatsApp" />
        </a>
      </div>
    </main>
  );
}
