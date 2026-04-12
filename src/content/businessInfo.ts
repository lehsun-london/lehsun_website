// ─── Brand ───────────────────────────────────────────────────────────────────

export const brandLine = "Not toned down. Not adapted. Just real flavour.";

// ─── Contact / WhatsApp ───────────────────────────────────────────────────────

export const contact = {
  phone: "+44 7768 892652",
  email: "lehsun.london@gmail.com",
  instagram: "https://www.instagram.com/lehsun.london",
  facebook:
    "https://www.facebook.com/people/Lehsun-Nostalgic-Indian-Cuisine/61580851580948/",
  googleMaps: "https://maps.app.goo.gl/C8JKao4BbBerjfQj8",
} as const;

export const whatsapp = {
  catalog: "https://wa.me/c/447768892652",
  cateringEnquiry:
    "https://wa.me/447768892652?text=Hi%20Lehsun%2C%20I%27d%20like%20to%20enquire%20about%20catering%20for%20my%20event.",
  brochure:
    "https://wa.me/447768892652?text=Hi%20Lehsun%2C%20please%20share%20the%20full%20catering%20brochure.",
} as const;

// ─── Service areas ────────────────────────────────────────────────────────────

export const serviceAreas = [
  "Ebbsfleet Valley",
  "Dartford",
  "Gravesend",
  "Northfleet",
  "Bexley",
  "Orpington",
  "Nearby Kent",
] as const;

export type ServiceArea = (typeof serviceAreas)[number];

export const primaryCateringAreas = [
  "Ebbsfleet Valley",
  "Dartford",
  "Gravesend",
] as const;

// ─── Reviews ──────────────────────────────────────────────────────────────────

export const reviewStats = {
  average: "5.0",
  count: 50,
  sourceLabel: "Google reviews",
} as const;

export const reviews = [
  {
    author: "Anudeet M",
    age: "5 months ago",
    quote:
      "Lehsun catered our housewarming and the food was outstanding — the chole, dal makhni, dum aloo, puri and pulao were all spot on. Guests kept going back for seconds. Portions were generous and delivery was right on time.",
    googleUrl: "https://maps.app.goo.gl/C8JKao4BbBerjfQj8",
  },
  {
    author: "Dr Apeksha Tiwari",
    age: "4 months ago",
    quote:
      "The food took me straight back to memories of home. Tasty, comforting, and made with real care. We will absolutely be ordering again.",
    googleUrl: "https://maps.app.goo.gl/C8JKao4BbBerjfQj8",
  },
  {
    author: "Himanshi Khurana",
    age: "6 months ago",
    quote:
      "Amazing food — proper flavours, everything fresh and hygienically prepared. It felt like a trip down memory lane. Absolutely perfect.",
    googleUrl: "https://maps.app.goo.gl/C8JKao4BbBerjfQj8",
  },
] as const;

// ─── Pricing ──────────────────────────────────────────────────────────────────

export const cateringPricing = {
  startingPrice: "From £11.99 per head",
  shortPrice: "£11.99 per head",
  minimumGuests: 15,
  minimumGuestsLabel: "Minimum 15 guests",
} as const;

// ─── Event types ──────────────────────────────────────────────────────────────

export const eventTypes = [
  { label: "Birthday parties" },
  { label: "Family gatherings" },
  { label: "House parties" },
  { label: "Diwali" },
  { label: "Holi" },
  { label: "Christmas" },
  { label: "Easter" },
  { label: "Baby showers" },
  { label: "Anniversaries" },
  { label: "Cultural events" },
] as const;

// ─── Full catering menu ───────────────────────────────────────────────────────

export const cateringMenu = {
  starters: {
    veg: [
      "Samosa Chole Chaat",
      "Dahi Papdi Chaat",
      "Bhalla Papdi Chaat",
      "Dahi Bhalle",
      "Aloo Tikki Chaat",
      "Mini Kachori with Spicy Aloo",
      "Chilly Paneer",
      "Veg Manchurian (dry)",
      "Honey Chilly Potatoes",
      "Vegetable Cutlets",
      "Chana Daal Vada",
      "Hara Bhara Kebab",
      "Mini Aloo Puff Pastries",
      "Samosa Cigars",
      "Delhi's Ram Ladoo",
      "Masala Potato Fries",
      "Mumbai Vada Pav",
      "Butter Pav Bhaji",
    ],
    nonVeg: [
      "Chicken Tikka (65 style)",
      "Chicken Tikka Safeda",
      "Chicken Chutlets",
      "Chapli Kebab (Lamb/Goat)",
    ],
  },
  mains: {
    veg: [
      "Shahi Diwani Handi",
      "Paneer Lababdaar",
      "Paneer Butter Masala",
      "Purani Delhi's Paneer Makhani",
      "Kadhai Paneer",
      "Matar Paneer",
      "Veg Chowmein",
      "Malai Kofta",
      "Vegetable Kofta",
      "Meethi Malai Matar",
      "Delhi Wale Pindi Chole",
      "Punjabi Rajama",
      "Dum Aloo",
      "Haka Noodles",
      "Mix Vegetable",
      "Vegetable Jalfrezi",
      "Dal Makhani",
      "Dhaba Daal Tadka",
      "Daal Panchmel",
      "Veg Manchurian (gravy)",
    ],
    nonVeg: {
      chicken: [
        "Shahi Patiala Chicken",
        "Delhi's Butter Chicken",
        "Dhaba Chicken Curry",
        "Punjabi Saag Chicken",
      ],
      lambGoat: [
        "Old Delhi's Nihari",
        "Rajasthani Lal Maas",
        "Kashmiri Rogan Josh",
        "Dhaba Mutton Curry",
        "Mumbai Keema",
      ],
    },
  },
  rice: ["Plain Rice", "Jira Rice", "Kaju Paneer Pulao", "Vegetable Pulao"],
  breads: ["Plain Naan", "Butter Naan", "Poori"],
  raita: ["Plain Raita", "Boondi Raita", "Mix Veg Raita", "Pineapple Raita"],
  desserts: [
    "Shahi Tukda with Rabdi",
    "Firni / Phirni",
    "Rice Kheer",
    "Sooji Halwa",
    "Gajar Halwa",
    "Fruit Custard",
    "Fruit Cream",
    "Nawabi Royal Sewai",
  ],
  condiments: [
    "Masala Peanuts",
    "Papad",
    "Green Salad",
    "Watermelon Feta Salad",
    "Sprouts Salad",
  ],
} as const;

// ─── Daily menu ───────────────────────────────────────────────────────────────

export const dailyMenuInfo = {
  availability: "Available every day",
  posting: "Posted fresh daily",
  orderChannels: "Pre-order via WhatsApp catalogue, direct message, or a quick call.",
  fulfilment:
    "Collection is available from Ebbsfleet Valley, and local delivery is available within 2 miles for orders above £25.",
  format:
    "Order dish by dish, or go for the daily thaali when you want a complete meal.",
  deliveryMinimum: "£25",
  deliveryRadius: "2 miles",
  collectionPoint: "Ebbsfleet Valley, DA10",
  localDeliveryNote: "Local delivery within 2 miles of Ebbsfleet Valley only.",
} as const;

export const dailyMenuDishes = [
  {
    alt: "Nalli Nihari",
    image: "/assets/generated/nalli-nihari.png",
    title: "Nalli Nihari",
    note: "Slow-cooked mutton shank in a deeply spiced, rich gravy with silky marrow and old-Delhi depth.",
    borderColor: "#C8881A",
  },
  {
    alt: "Dal Bukhara",
    image: "/assets/generated/dal-bukhara.png",
    title: "Dal Bukhara",
    note: "Black lentils slow-cooked overnight and finished with cream and butter for a smoky, decadent finish.",
    borderColor: "#D9381E",
  },
  {
    alt: "Butter Pav Bhaji",
    image: "/assets/food/pav-bhaji-1400.jpg",
    title: "Butter Pav Bhaji",
    note: "Buttery mashed vegetable curry simmered with spices, vibrant and full of Mumbai-style comfort.",
    borderColor: "#F5821F",
  },
  {
    alt: "Lehsun's Royal Thaali",
    image: "/assets/food/lehsuns-royal-thaali.jpg",
    title: "Daily Thaali",
    note: "A rotating complete meal with different combinations through the week, made for an easy everyday order.",
    borderColor: "#2E8B7A",
  },
] as const;

// ─── Visual assets ────────────────────────────────────────────────────────────

export const visualAssets = {
  heroImage: "/assets/food/amritsari-thaali-1600.jpg",
  aboutImage: "/assets/food/litti-chokha-1400.jpg",
  cateringImage: "/assets/food/butter-chicken-1400.png",
  dailyMenuImage: "/assets/food/lehsuns-royal-thaali.jpg",
  hygieneRating: "https://www.food.gov.uk/sites/default/files/styles/promo_large/public/media/image/food-hygiene-Rating%205_a_preview.jpeg?itok=ao2_ogm4",
  logo: "/assets/stitch/lehsun-branded-final/logo.png",
} as const;
