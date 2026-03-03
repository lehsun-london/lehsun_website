export type SocialLink = {
  label: string;
  href: string;
};

export type NavigationLink = {
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

export type FeatureBlock = {
  title: string;
  description: string;
  icon: string;
};

export type OrderSection = {
  title: string;
  body: string;
  ctaLabel: string;
  ctaHref: string;
  hygiene: {
    rating: 5;
    label: string;
    authority: string;
  };
};

export type SiteContent = {
  businessName: string;
  headline: string;
  subheadline: string;
  emotionalLine: string;
  whatsappNumber: string;
  locationLine: string;
  ctas: CTAItem[];
  navigationLinks: NavigationLink[];
  socialLinks: SocialLink[];
  caterFor: string[];
  regionalRoots: string[];
  promisePoints: string[];
  dishHighlights: DishHighlight[];
  reviews: Review[];
  featureBlocks: FeatureBlock[];
  orderSection: OrderSection;
};

export const siteContent: SiteContent = {
  businessName: "Lehsun",
  headline: "Proper Indian Flavours.\nNot the watered-down version.",
  subheadline:
    "Authentic regional dishes made for celebrations, gatherings & nostalgia.",
  emotionalLine: "Cause sudden cravings for home.",
  whatsappNumber: "+44 7768 892652",
  locationLine: "Ebbsfleet Valley, Kent (DA10)",
  navigationLinks: [
    { label: "Home", href: "#home" },
    { label: "About", href: "#about" },
    { label: "Menu", href: "#menu" },
    { label: "Catering", href: "#catering" },
  ],
  ctas: [
    {
      label: "View Signature Dishes",
      href: "#menu",
      variant: "primary",
    },
    {
      label: "Book Catering",
      href: "#catering",
      variant: "secondary",
    },
  ],
  socialLinks: [
    { label: "Instagram", href: "https://www.instagram.com/lehsun.london" },
    {
      label: "Facebook",
      href: "https://www.facebook.com/people/Lehsun-Nostalgic-Indian-Cuisine/61580851580948/",
    },
    { label: "WhatsApp", href: "https://wa.me/447768892652" },
    { label: "Email", href: "mailto:hello@lehsun.co.uk" },
  ],
  caterFor: [
    "Birthday Parties",
    "Holi Events",
    "Family Gatherings",
    "Corporate Lunches",
  ],
  regionalRoots: ["Delhi", "Uttar Pradesh", "Punjab", "Rajasthan"],
  promisePoints: [
    "Customised menu options",
    "Premium batch cooking",
    "Authentic regional flavours",
    "Pickup-based service",
  ],
  dishHighlights: [
    {
      title: "Nalli Nihari",
      note: "Overnight slow-cooked. Bone marrow richness. Deep warming spices.",
      image: "/assets/generated/nalli-nihari.png",
    },
    {
      title: "Dal Bukhara",
      note: "Creamy black lentils simmered for hours - smoky, velvety, unforgettable.",
      image: "/assets/generated/dal-bukhara.png",
    },
    {
      title: "Khasta Kachori",
      note: "Crisp. Flaky. Properly spiced filling.",
      image: "/assets/generated/khasta-kachori.png",
    },
    {
      title: "Shahi Tukda",
      note: "Saffron, rabri and indulgence - festive nostalgia in every bite.",
      image: "/assets/generated/shahi-tukda.png",
    },
    {
      title: "Pahadi Rajma",
      note: "Earthy, slow-simmered kidney beans with mountain-style depth.",
      image: "/assets/generated/pahadi-rajma.png",
    },
    {
      title: "Litti with Chokha",
      note: "Smoky roasted wheat balls with spiced filling - rustic and bold.",
      image: "/assets/generated/litti-chokha.png",
    },
  ],
  featureBlocks: [
    {
      title: "Authentic Roots",
      description: "Recipes passed down through generations of home cooks.",
      icon: "auto_awesome",
    },
    {
      title: "Regional Mastery",
      description: "Specific spice blends sourced from native terrains.",
      icon: "skillet",
    },
    {
      title: "Soul Food",
      description: "Designed for celebrations that demand the best.",
      icon: "ecg_heart",
    },
  ],
  orderSection: {
    title: "Order & Pickup",
    body: "Pre-order via WhatsApp catalogue. Limited quantities. Made fresh.",
    ctaLabel: "Order on WhatsApp",
    ctaHref: "https://wa.me/c/447768892652",
    hygiene: {
      rating: 5,
      label: "Very Good",
      authority: "Food Hygiene Rating",
    },
  },
  reviews: [
    {
      author: "Priya M.",
      text: "Lehsun catered our Diwali party in Ebbsfleet and the food was incredible.",
      rating: 5,
    },
  ],
};
