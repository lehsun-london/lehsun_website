import Image from "next/image";
import { CTAItem, DishHighlight } from "@/content/site";
import { CTACluster } from "./CTACluster";

type HeroProps = {
  businessName: string;
  headline: string;
  subheadline: string;
  ctas: CTAItem[];
  highlights: DishHighlight[];
};

export function Hero({ businessName, headline, subheadline, ctas, highlights }: HeroProps) {
  return (
    <header className="hero" aria-labelledby="hero-title">
      <div className="heroDeco" aria-hidden="true">
        <Image src="/assets/generated/geometric-motif.png" alt="" fill sizes="40vw" priority style={{ objectFit: "cover" }} />
      </div>

      <div className="heroContentArea">

      <div className="heroCopyWrap">
        <Image
          src="/assets/brand/logo-full.svg"
          width={88}
          height={88}
          alt={`${businessName} logo`}
          className="heroLogoMark"
          priority
        />
        <h1 id="hero-title">{headline}</h1>
        <p className="heroCopy">{subheadline}</p>
        <CTACluster items={ctas} />
        
        <div className="heroLocationNote">
          <p>📍 Ebbsfleet Valley, Kent</p>
          <p>Pre-order &bull; Limited batches &bull; 25+ guests catering</p>
        </div>
      </div>

      <div className="heroVisual" aria-label={`${businessName} signature dishes`}>
        <div className="heroVisualMain">
          <Image
            src={highlights[0].image}
            alt={highlights[0].title}
            fill
            sizes="(max-width: 960px) 100vw, 35vw"
            priority
          />
          <div className="dishBadge">
            <strong>{highlights[0].title}</strong>
            <span>{highlights[0].note}</span>
          </div>
        </div>

        <div className="heroVisualSub">
          <Image src={highlights[1].image} alt={highlights[1].title} fill sizes="(max-width: 960px) 52vw, 18vw" style={{ objectFit: "cover" }} />
        </div>

        <div className="heroVisualSub">
          <Image src={highlights[2].image} alt={highlights[2].title} fill sizes="(max-width: 960px) 52vw, 18vw" style={{ objectFit: "cover" }} />
        </div>
      </div>
      </div>
    </header>
  );
}
