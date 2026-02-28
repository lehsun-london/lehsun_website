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
  headline: "Authentic Indian Catering in London & Kent",
  subheadline:
    "Order your daily lunch or dinner via our WhatsApp Catalogue — fresh, homestyle Indian food delivered to your door. We also cater private parties, festivals & corporate events across Ebbsfleet Valley and nearby areas.",
  whatsappNumber: "+44 7768 892652",
  locationLine: "Based in Ebbsfleet Valley, DA10 1GG. Catering to nearby areas.",
  ctas: [
    {
      label: "WhatsApp Enquiry",
      href: "https://wa.me/447768892652",
      variant: "primary",
    },
    {
      label: "View WhatsApp Catalogue",
      href: "https://wa.me/c/447768892652",
      variant: "secondary",
    },
    {
      label: "Join WhatsApp Group",
      href: "https://chat.whatsapp.com/LwTQNtkxb0oBD8Cj5uJ97T",
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
    "Daily WhatsApp Orders",
    "Private Events",
    "Festivals",
    "Corporate Catering",
    "Community Gatherings",
  ],
  regionalRoots: ["Delhi", "Uttar Pradesh", "Punjab", "Rajasthan"],
  promisePoints: [
    "India-rooted depth with event-grade consistency",
    "Vegetarian & non-vegetarian menus with rich regional range",
    "From Punjab to Rajasthan — something for every palate",
    "Designed for both intimate and large-format service",
  ],
  dishHighlights: [
    {
      title: "Butter Chicken",
      note: "Slow-cooked in a rich, velvety tomato and cream sauce",
      image: "/assets/food/butter-chicken-1400.png",
    },
    {
      title: "Dal Makhani",
      note: "Silky black lentils cooked overnight with spiced butter",
      image: "/assets/food/dal-makhani-1400.png",
    },
    {
      title: "Pav Bhaji",
      note: "Street classic elevated for event service",
      image: "/assets/food/pav-bhaji-1400.png",
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
