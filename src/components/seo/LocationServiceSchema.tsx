import {
  cateringPricing,
  reviewStats,
  whatsapp,
} from "@/content/businessInfo";
import { buildAbsoluteUrl } from "@/lib/seo";

type LocationServiceSchemaProps = {
  locationName: string;
  displayName: string;
  postcodes: string;
  nearbyAreas: readonly string[];
  description: string;
};

export default function LocationServiceSchema({
  locationName,
  displayName,
  postcodes,
  nearbyAreas,
  description,
}: LocationServiceSchemaProps) {
  const slug = locationName.toLowerCase().replace(/\s+/g, "-");
  const url = buildAbsoluteUrl(`/catering/${slug}` as `/${string}`);
  const schema = {
    "@context": "https://schema.org",
    "@type": "Service",
    "@id": `${url}#catering-service`,
    name: `North Indian catering in ${displayName}`,
    description,
    serviceType: [
      "North Indian Catering",
      "Indian Catering",
      "Birthday catering",
      "Housewarming catering",
      "Baby shower catering",
      "Corporate catering",
      "Wedding catering",
      "Mandir event catering",
      "Jain catering",
      "No-onion/no-garlic catering",
    ],
    provider: {
      "@id": "https://lehsun.co.uk/#localbusiness",
    },
    areaServed: [
      {
        "@type": "Place",
        name: locationName,
        address: {
          "@type": "PostalAddress",
          addressLocality: locationName,
          postalCode: postcodes,
          addressRegion: "Kent",
          addressCountry: "GB",
        },
      },
      ...nearbyAreas.map((area) => ({
        "@type": "Place",
        name: area,
      })),
    ],
    offers: {
      "@type": "Offer",
      url,
      priceCurrency: "GBP",
      price: 11.99,
      priceSpecification: {
        "@type": "UnitPriceSpecification",
        price: 11.99,
        priceCurrency: "GBP",
        unitText: "per head",
      },
      eligibleQuantity: {
        "@type": "QuantitativeValue",
        minValue: cateringPricing.minimumGuests,
        unitText: "guests",
      },
      itemOffered: {
        "@type": "Service",
        name: `North Indian catering for ${locationName} events`,
      },
      availability: "https://schema.org/InStock",
    },
    aggregateRating: {
      "@type": "AggregateRating",
      ratingValue: reviewStats.average,
      reviewCount: reviewStats.count,
      bestRating: 5,
      worstRating: 1,
    },
    url,
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: `${locationName} catering options`,
      itemListElement: [
        "Vegetarian catering",
        "Non-vegetarian catering",
        "Jain catering",
        "No-onion/no-garlic catering",
        "Birthday catering",
        "Corporate catering",
        "Wedding catering",
        "Mandir event catering",
      ].map((name) => ({
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name,
        },
      })),
    },
    potentialAction: {
      "@type": "CommunicateAction",
      name: "Request a catering quote",
      target: whatsapp.cateringEnquiry,
    },
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}
