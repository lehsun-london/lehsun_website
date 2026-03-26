const localBusinessSchema = {
  "@context": "https://schema.org",
  "@type": ["LocalBusiness", "CateringService"],
  "@id": "https://lehsun.co.uk/#localbusiness",
  name: "Lehsun - Nostalgic North Indian Catering",
  description:
    "Based in Ebbsfleet Valley, Lehsun provides North Indian catering for parties, gatherings and events across Dartford, Gravesend, Northfleet and nearby Kent, with real flavours like back home.",
  url: "https://lehsun.co.uk/",
  image: [
    "https://lehsun.co.uk/assets/stitch/lehsun-branded-final/hero-bg.png",
    "https://lehsun.co.uk/assets/stitch/lehsun-branded-final/catering-table.png",
    "https://lehsun.co.uk/assets/food/lehsuns-royal-thaali.jpg",
  ],
  logo: "https://lehsun.co.uk/apple-touch-icon.png",
  email: "lehsun.london@gmail.com",
  telephone: "+44 7768 892652",
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
  hasMap: "https://maps.app.goo.gl/C8JKao4BbBerjfQj8",
  areaServed: [
    {
      "@type": "Place",
      name: "Ebbsfleet Valley",
    },
    {
      "@type": "City",
      name: "Dartford",
    },
    {
      "@type": "City",
      name: "Gravesend",
    },
    {
      "@type": "City",
      name: "Northfleet",
    },
    {
      "@type": "AdministrativeArea",
      name: "Kent",
    },
  ],
  serviceType: [
    "North Indian catering",
    "Party catering",
    "Private event catering",
    "Birthday catering",
    "Family gathering catering",
    "Small corporate event catering",
  ],
  openingHoursSpecification: [
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: [
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thursday",
        "Friday",
        "Saturday",
        "Sunday",
      ],
      opens: "09:00",
      closes: "20:00",
    },
  ],
  sameAs: [
    "https://www.instagram.com/lehsun.london",
    "https://www.facebook.com/people/Lehsun-Nostalgic-Indian-Cuisine/61580851580948/",
    "https://maps.app.goo.gl/C8JKao4BbBerjfQj8",
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
