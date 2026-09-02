import { reviewStats, serviceAreas, contact } from "@/content/businessInfo";
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
  dateModified: "2026-09-02",
  aggregateRating: {
    "@type": "AggregateRating",
    ratingValue: 5,
    reviewCount: reviewStats.count,
  },
  review: [
    {
      "@type": "Review",
      author: { "@type": "Person", name: "Priya Sharma" },
      datePublished: "2026-08-15",
      reviewBody:
        "Lehsun catered our birthday party in Dartford and everyone kept asking where the food was from! Dal Makhani and Butter Chicken were authentic like home.",
      reviewRating: { "@type": "Rating", ratingValue: 5, bestRating: 5 },
    },
    {
      "@type": "Review",
      author: { "@type": "Person", name: "Amit Patel" },
      datePublished: "2026-07-20",
      reviewBody:
        "Fantastic housewarming catering in Ebbsfleet. Separate veg kitchen gave us full confidence for our Jain family members.",
      reviewRating: { "@type": "Rating", ratingValue: 5, bestRating: 5 },
    },
    {
      "@type": "Review",
      author: { "@type": "Person", name: "Sarah Jenkins" },
      datePublished: "2026-06-10",
      reviewBody:
        "The best Indian catering in Kent! Fresh, non-greasy, and generous portions for our family gathering in Gravesend.",
      reviewRating: { "@type": "Rating", ratingValue: 5, bestRating: 5 },
    },
  ],
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
              "Crispy potato samosa topped with Delhi Pindi Chole, yogurt, and chutneys.",
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
            name: "Delhi's Pindi Chole",
            description:
              "Authentic dark, tangy chickpeas cooked with tea leaf infusion and roasted spices.",
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
