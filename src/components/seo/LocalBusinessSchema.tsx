import { reviewStats, serviceAreas, contact } from "@/content/businessInfo";

const localBusinessSchema = {
  "@context": "https://schema.org",
  "@type": ["LocalBusiness", "CateringService"],
  "@id": "https://lehsun.co.uk/#localbusiness",
  name: "Lehsun - Nostalgic North Indian Catering",
  description:
    "Based in Ebbsfleet Valley, Lehsun provides North Indian catering for birthdays, housewarmings, baby showers, family gatherings and festive events across Dartford, Gravesend, Northfleet, Bexley, Orpington and nearby Kent, with real flavours like back home.",
  url: "https://lehsun.co.uk/",
  image: [
    "https://lehsun.co.uk/assets/stitch/lehsun-branded-final/hero-bg.png",
    "https://lehsun.co.uk/assets/stitch/lehsun-branded-final/catering-table.png",
    "https://lehsun.co.uk/assets/food/lehsuns-royal-thaali.jpg",
  ],
  logo: "https://lehsun.co.uk/apple-touch-icon.png",
  email: contact.email,
  telephone: contact.phone,
  priceRange: "££",
  servesCuisine: ["North Indian", "Indian"],
  slogan: "Flavours like you remember.",
  address: {
    "@type": "PostalAddress",
    streetAddress: "28 Portbridge Gardens",
    addressLocality: "Ebbsfleet Valley",
    addressRegion: "Kent",
    postalCode: "DA10 1GG",
    addressCountry: "GB",
  },
  geo: {
    "@type": "GeoCoordinates",
    latitude: 51.4391049,
    longitude: 0.2981534,
  },
  hasMap: contact.googleMaps,
  aggregateRating: {
    "@type": "AggregateRating",
    ratingValue: reviewStats.average,
    reviewCount: reviewStats.count,
  },
  areaServed: serviceAreas.map((area) => ({
    "@type":
      area === "Nearby Kent"
        ? "AdministrativeArea"
        : area === "Ebbsfleet Valley"
          ? "Place"
          : "City",
    name: area,
  })),
  serviceType: [
    "North Indian catering",
    "Party catering",
    "Private event catering",
    "Birthday catering",
    "Diwali catering",
    "Family gathering catering",
    "Festive event catering",
  ],
  hasMenu: "https://lehsun.co.uk/menu",
  hasOfferCatalog: {
    "@type": "OfferCatalog",
    name: "Lehsun Services",
    itemListElement: [
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "North Indian Catering for Events",
          description:
            "Tailored North Indian catering for birthdays, housewarmings, baby showers, Diwali and family gatherings across Ebbsfleet Valley, Dartford, Gravesend and nearby Kent. Minimum 15 guests. From £11.99 per head.",
        },
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Daily North Indian Menu",
          description:
            "Fresh North Indian dishes posted daily via WhatsApp. Order for collection from Ebbsfleet Valley (DA10) or local delivery within 2 miles on orders above £25.",
        },
      },
    ],
  },
  sameAs: [
    contact.instagram,
    contact.facebook,
    contact.googleMaps,
  ],
};

export default function LocalBusinessSchema() {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema) }}
    />
  );
}
