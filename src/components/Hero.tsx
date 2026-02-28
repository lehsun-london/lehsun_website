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
        <Image src="/assets/generated/spice-burst.svg" alt="" fill sizes="40vw" priority />
      </div>

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
      </div>

      <div className="heroVisual" aria-label={`${businessName} signature dishes`}>
        <div className="heroVisualMain cardFloatA">
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

        <div className="heroVisualSub cardFloatB">
          <Image src={highlights[1].image} alt={highlights[1].title} fill sizes="(max-width: 960px) 52vw, 18vw" />
        </div>

        <div className="heroVisualSub cardFloatC">
          <Image src={highlights[2].image} alt={highlights[2].title} fill sizes="(max-width: 960px) 52vw, 18vw" />
        </div>
      </div>
    </header>
  );
}
