import {
  reviewStats,
  serviceAreas,
  contact,
  structuredDataReviews,
} from "@/content/businessInfo";
import { SITE_ALTERNATE_NAMES, SITE_NAME } from "@/lib/seo";

const localBusinessSchema = {
  "@context": "https://schema.org",
  "@type": ["LocalBusiness", "CateringService"],
  "@id": "https://lehsun.co.uk/#localbusiness",
  name: SITE_NAME,
  alternateName: SITE_ALTERNATE_NAMES,
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
  currenciesAccepted: "GBP",
  paymentAccepted: "Cash, Bank Transfer, Debit Card, Credit Card",
  award: "5-Star Food Hygiene Rating",
  servesCuisine: ["North Indian", "Indian"],
  slogan: "Flavours like you remember.",
  knowsAbout: [
    "North Indian cuisine",
    "Punjabi cuisine",
    "Delhi street food",
    "Pure vegetarian catering",
    "Jain catering",
    "No-onion/no-garlic catering",
    "Event catering",
    "Birthday party catering",
    "Housewarming catering",
    "Baby shower catering",
    "Diwali catering",
    "Corporate lunch catering",
    "Wedding catering",
    "Mandir and religious puja catering",
    "Ebbsfleet Valley DA10",
    "Dartford DA1 DA2",
    "Gravesend DA11 DA12",
  ],
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
  dateModified: "2026-09-02",
  aggregateRating: {
    "@type": "AggregateRating",
    ratingValue: 5,
    reviewCount: reviewStats.count,
  },
  review: structuredDataReviews.map((review) => ({
    "@type": "Review",
    author: { "@type": "Person", name: review.author },
    reviewBody: review.quote,
    reviewRating: { "@type": "Rating", ratingValue: 5, bestRating: 5 },
    publisher: { "@type": "Organization", name: "Google" },
    url: review.googleUrl,
  })),
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
    "North Indian Catering",
    "Party catering",
    "Private event catering",
    "Birthday catering",
    "Diwali catering",
    "Corporate catering",
    "Wedding catering",
    "Mandir event catering",
    "Jain catering",
    "No-onion/no-garlic catering",
    "Family gathering catering",
    "Festive event catering",
  ],
  hasMenu: {
    "@type": "Menu",
    name: "Lehsun Catering & Daily Menu",
    url: "https://lehsun.co.uk/menu",
    hasMenuSection: [
      {
        "@type": "MenuSection",
        name: "North Indian Starters",
        hasMenuItem: [
          {
            "@type": "MenuItem",
            name: "Samosa Chole Chaat",
            description:
              "Crispy potato samosa topped with spiced chole (chickpeas), yogurt, and chutneys.",
            suitableForDiet: "https://schema.org/VegetarianDiet",
          },
          {
            "@type": "MenuItem",
            name: "Dahi Bhalle",
            description:
              "Soft lentil dumplings in sweet yogurt with roasted cumin and chutneys.",
            suitableForDiet: "https://schema.org/VegetarianDiet",
          },
          {
            "@type": "MenuItem",
            name: "Chicken Tikka",
            description:
              "Tender boneless chicken marinated in yogurt and tandoori spices.",
          },
        ],
      },
      {
        "@type": "MenuSection",
        name: "North Indian Main Courses",
        hasMenuItem: [
          {
            "@type": "MenuItem",
            name: "Dal Makhani",
            description:
              "Slow-cooked black lentils simmered overnight with cream and aromatic spices.",
            suitableForDiet: "https://schema.org/VegetarianDiet",
          },
          {
            "@type": "MenuItem",
            name: "Paneer Butter Masala",
            description:
              "Cottage cheese cubes cooked in rich tomato, butter, and cashew gravy.",
            suitableForDiet: "https://schema.org/VegetarianDiet",
          },
          {
            "@type": "MenuItem",
            name: "Amritsari Pindi Chole",
            description:
              "North Indian chickpeas cooked with roasted spices and Amritsari flavour.",
            suitableForDiet: "https://schema.org/VegetarianDiet",
          },
          {
            "@type": "MenuItem",
            name: "Delhi's Butter Chicken",
            description:
              "Tandoori chicken in rich tomato, butter and cream gravy.",
          },
          {
            "@type": "MenuItem",
            name: "Kashmiri Rogan Josh",
            description:
              "Tender mutton slow-cooked in a Kashmiri red chili and fennel gravy.",
          },
        ],
      },
    ],
  },
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
            "Tailored North Indian catering for birthdays, housewarmings, baby showers, Diwali and family gatherings across Ebbsfleet Valley, Dartford, Gravesend and nearby Kent. From £11.99 per head.",
        },
        priceSpecification: {
          "@type": "PriceSpecification",
          priceCurrency: "GBP",
          minPrice: 11.99,
          price: 11.99,
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
  sameAs: [contact.instagram, contact.facebook, contact.googleMaps],
};

export default function LocalBusinessSchema() {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema) }}
    />
  );
}
