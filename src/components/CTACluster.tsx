import { CTAItem } from "@/content/site";
import { SocialIcon } from "./SocialIcon";

type CTAClusterProps = {
  items: CTAItem[];
};

export function CTACluster({ items }: CTAClusterProps) {
  return (
    <div className="ctaCluster" role="list" aria-label="Primary actions">
      {items.map((item, index) => (
        <a
          key={item.label}
          className={`ctaLink ${item.variant}`}
          href={item.href}
          target="_blank"
          rel="noopener noreferrer"
          style={{ animationDelay: `${index * 80}ms` }}
          role="listitem"
        >
          <span className="ctaContent">
            <SocialIcon label={item.label} className="linkIcon" />
            <span>{item.label}</span>
          </span>
        </a>
      ))}
    </div>
  );
}
