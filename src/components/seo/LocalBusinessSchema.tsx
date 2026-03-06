const localBusinessSchema = {
  "@context": "https://schema.org",
  "@type": ["LocalBusiness", "CateringService"],
  "@id": "https://www.lehsun.co.uk/#localbusiness",
  name: "Lehsun - Nostalgic North Indian Catering",
  description:
    "Authentic North Indian catering in Ebbsfleet Valley, Dartford, Gravesend and nearby Kent areas for private parties and corporate events.",
  url: "https://www.lehsun.co.uk",
  image: "https://www.lehsun.co.uk/apple-touch-icon.png",
  logo: "https://www.lehsun.co.uk/apple-touch-icon.png",
  email: "lehsun.london@gmail.com",
  telephone: "+44 7768 892652",
  priceRange: "££",
  servesCuisine: ["North Indian", "Indian"],
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
      "@type": "City",
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
      name: "Orpington",
    },
    {
      "@type": "City",
      name: "Swanley",
    },
    {
      "@type": "City",
      name: "Bexley",
    },
    {
      "@type": "AdministrativeArea",
      name: "Kent",
    },
  ],
  serviceType: [
    "Party catering",
    "Private event catering",
    "Corporate catering",
    "North Indian catering",
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
