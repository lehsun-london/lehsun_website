export type SocialLink = {
  label: string;
  href: string;
};

export type CTAItem = {
  label: string;
  href: string;
  variant: "primary" | "secondary";
};

export type DishHighlight = {
  title: string;
  note: string;
  image: string;
};

export type Review = {
  author: string;
  text: string;
  rating: number;
};

export type SiteContent = {
  businessName: string;
  headline: string;
  subheadline: string;
  whatsappNumber: string;
  locationLine: string;
  ctas: CTAItem[];
  socialLinks: SocialLink[];
  caterFor: string[];
  regionalRoots: string[];
  promisePoints: string[];
  dishHighlights: DishHighlight[];
  reviews: Review[];
};

export const siteContent: SiteContent = {
  businessName: "Lehsun",
  headline: "Flavours Like You Remember.\nBut Brighter.",
  subheadline:
    "Authentic Indian regional dishes made for celebrations, gatherings and serious cravings.\n\nBold. Vibrant. Properly spiced.",
  whatsappNumber: "+44 7768 892652",
  locationLine: "Based in Ebbsfleet Valley, DA10 1GG. Catering to nearby areas.",
  ctas: [
    {
      label: "View Menu",
      href: "https://wa.me/c/447768892652",
      variant: "primary",
    },
    {
      label: "Book Catering",
      href: "https://wa.me/447768892652",
      variant: "secondary",
    },
    {
      label: "Instagram",
      href: "https://www.instagram.com/lehsun.london",
      variant: "secondary",
    },
    {
      label: "Facebook",
      href: "https://www.facebook.com/people/Lehsun-Nostalgic-Indian-Cuisine/61580851580948/",
      variant: "secondary",
    },
  ],
  socialLinks: [
    { label: "Instagram", href: "https://www.instagram.com/lehsun.london" },
    {
      label: "Facebook",
      href: "https://www.facebook.com/people/Lehsun-Nostalgic-Indian-Cuisine/61580851580948/",
    },
  ],
  caterFor: [
    "Birthday Parties",
    "Holi Events",
    "Family Gatherings",
    "Corporate Lunches",
  ],
  regionalRoots: ["Delhi", "Uttar Pradesh", "Punjab", "Rajasthan"],
  promisePoints: [
    "Customisable menu",
    "Freshly prepared",
    "Pickup-based",
    "Limited batch cooking",
  ],
  dishHighlights: [
    {
      title: "Nalli Nihari",
      note: "Slow-cooked overnight. Rich. Deep. Unforgettable.",
      image: "/assets/generated/nalli-nihari.png",
    },
    {
      title: "Dal Bukhara",
      note: "Creamy black lentils simmered for hours.",
      image: "/assets/generated/dal-bukhara.png",
    },
    {
      title: "Khasta Kachori",
      note: "Golden, crisp, filled with bold spice.",
      image: "/assets/generated/khasta-kachori.png",
    },
    {
      title: "Shahi Tukda",
      note: "Saffron, rabri and pure indulgence.",
      image: "/assets/generated/shahi-tukda.png",
    },
    {
      title: "Pahadi Rajma",
      note: "Hearty, warming, mountain-style comfort.",
      image: "/assets/generated/pahadi-rajma.png",
    },
    {
      title: "Litti with Chokha",
      note: "Smoky, rustic and unapologetically authentic.",
      image: "/assets/generated/litti-chokha.png",
    },
  ],
  reviews: [
    {
      author: "Priya M.",
      text: "Lehsun catered our Diwali party in Ebbsfleet and the food was incredible. The Amritsari Thaali took everyone back home. Highly authentic!",
      rating: 5,
    },
    {
      author: "David S.",
      text: "We ordered for a corporate lunch in London. The freshness and deep flavours of the curries blew the team away. Will definitely order again.",
      rating: 5,
    },
    {
      author: "Aisha K.",
      text: "The best Indian catering I've found in Kent. The Pavilion Bhaji was a massive hit at our son's birthday. Fantastic presentation too.",
      rating: 5,
    },
    {
      author: "Rahul V.",
      text: "Absolutely phenomenal flavors. They catered our 50-person gathering effortlessly. The Litti Chokha was authentic and smoky.",
      rating: 5,
    },
  ],
};
