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
  count: 75,
  sourceLabel: "Google reviews",
} as const;

export const reviews = [
  // ── Catering events ───────────────────────────────────────────────────────────
  {
    author: "aparna manaswini",
    type: "catering" as const,
    quote:
      "We recently ordered catering from Lehsun for my daughter's first birthday, and it was hands down the best catering experience we've ever had! Shweta took the time to understand our needs and offered such thoughtful menu suggestions — she even arranged a personalised tasting session. On the day, the food was ready on time, perfectly packed and absolutely delicious. The Shahi Tukda was honestly the best I have ever tasted! What makes it even more special is that Shweta did all of this by herself with so much care and that unmistakable touch of home-cooked goodness.",
    googleUrl: "https://maps.app.goo.gl/C8JKao4BbBerjfQj8",
  },
  {
    author: "Ashwini Dabhade",
    type: "catering" as const,
    quote:
      "We had our baby's first birthday party in Dartford and food plays the main role in such parties. The food was absolutely delicious — every single dish was perfect. All our guests kept asking where we had ordered from and everyone described the food as finger-licking good. The quantity was generous as well. Thank you for making our party so memorable through your amazing food.",
    googleUrl: "https://maps.app.goo.gl/C8JKao4BbBerjfQj8",
  },
  {
    author: "Sneha Shyamsunder",
    type: "catering" as const,
    quote:
      "We recently used Lehsun Catering for our sons' birthday party at Weldon Heart Community Center, Ebbsfleet and were absolutely delighted with the food and service. Every dish was beautifully prepared and full of flavour. Throughout the evening, several guests asked us who the caterer was because they enjoyed the food so much.",
    googleUrl: "https://maps.app.goo.gl/C8JKao4BbBerjfQj8",
  },
  {
    author: "Tarun Kumar",
    type: "catering" as const,
    quote:
      "We recently had our event catered by Lehsun and the experience was fantastic from start to finish. The food was absolutely amazing and every single guest loved it. The portion sizes were generous and everything from the starters to the mains exceeded our expectations. Delivery was perfectly on time, which made the whole experience smooth and stress free.",
    googleUrl: "https://maps.app.goo.gl/C8JKao4BbBerjfQj8",
  },
  {
    author: "Anudeet M",
    type: "catering" as const,
    quote:
      "We ordered from Lehsun for our housewarming, and it made the occasion even more special. The chole, dal makhni, dum aloo, puri, pulao, and moong dal halwa were all cooked to perfection — flavorful, homely, and truly nostalgic. Delivery was timely, portions were generous, and our guests kept complimenting the food. Highly recommend for anyone looking for authentic North Indian catering.",
    googleUrl: "https://maps.app.goo.gl/C8JKao4BbBerjfQj8",
  },
  {
    author: "Ishani Sharma",
    type: "catering" as const,
    quote:
      "Had Lehsun cater for our housewarming / Satyanarayan Katha event and they prepared delicious food without onion and garlic. Everything was brilliant. Both the food and service were amazing. Highly recommend!",
    googleUrl: "https://maps.app.goo.gl/C8JKao4BbBerjfQj8",
  },
  {
    author: "Deepa B",
    type: "catering" as const,
    quote:
      "Ordered food for a special occasion from Lehsun. Requested the food to be without onion and garlic which they accommodated and everything was so perfect and delicious and delivered on time. Will definitely recommend them and use them in the future.",
    googleUrl: "https://maps.app.goo.gl/C8JKao4BbBerjfQj8",
  },
  {
    author: "Rochak Agarwal",
    type: "catering" as const,
    quote:
      "We ordered catering from Lehsun North Indian Catering Service for our son's 2nd birthday celebration. The food was absolutely delicious, and every single guest loved it. From the presentation and quality of the food to the impeccable service and generous portions, everything was flawless.",
    googleUrl: "https://maps.app.goo.gl/C8JKao4BbBerjfQj8",
  },
  {
    author: "Bhavik Motasha",
    type: "catering" as const,
    quote:
      "We had ordered catering for my son's 4th birthday party in Sandwich, Kent. The food was beautifully packed, delivered on time, and everything was absolutely amazing and delicious. All our guests loved the food and everyone had wonderful things to say about it.",
    googleUrl: "https://maps.app.goo.gl/C8JKao4BbBerjfQj8",
  },
  {
    author: "Piyush Kumar",
    type: "catering" as const,
    quote:
      "Absolutely loved the food! Everything was fresh, full of flavour, and beautifully prepared. The food was delicious, the flavours were spot on, and everyone thoroughly enjoyed it. I would happily recommend them to anyone looking for great-tasting, quality catering.",
    googleUrl: "https://maps.app.goo.gl/C8JKao4BbBerjfQj8",
  },
  {
    author: "Shobha Kumari",
    type: "catering" as const,
    quote:
      "Amazing catering service, authentic veg food, delicious vada paos, Shahi Tukda is an amazing sweet dish, perfectly spiced, and by far the best catering service I have ever got.",
    googleUrl: "https://maps.app.goo.gl/C8JKao4BbBerjfQj8",
  },
  {
    author: "Parv Sharma",
    type: "catering" as const,
    quote:
      "We recently did a bulk order and I must say absolutely amazing food! The taste was so authentic, proper Indian flavours. Everything was fresh, perfectly cooked, and full of flavour. Everyone loved it and kept asking where it was from.",
    googleUrl: "https://maps.app.goo.gl/C8JKao4BbBerjfQj8",
  },
  {
    author: "M Pat",
    type: "catering" as const,
    quote:
      "Great food. We ordered for my daughter's birthday. Arrived in time and they gave heating equipment. Would order again.",
    googleUrl: "https://maps.app.goo.gl/C8JKao4BbBerjfQj8",
  },
  {
    author: "Ruchita Pokhriyal",
    type: "catering" as const,
    quote:
      "Food was absolutely amazing! Everything was so delicious and you could really taste the love and care put into the cooking. Thank you so much for the wonderful food and amazing catering service. Everyone really enjoyed it!",
    googleUrl: "https://maps.app.goo.gl/C8JKao4BbBerjfQj8",
  },
  // ── Daily menu orders ─────────────────────────────────────────────────────────
  {
    author: "surendra nivas",
    type: "daily" as const,
    quote:
      "Honestly, just really good food. Hot, fresh, and made with genuine care — exactly what you want when you're hungry. The flavours were spot on, portions were generous, and everything arrived in great condition. You can tell there's real effort going into every dish — this isn't just food thrown together, it's food made with a bit of heart. No complaints, no notes. Just clean plates and a happy stomach. 10/10.",
    googleUrl: "https://maps.app.goo.gl/C8JKao4BbBerjfQj8",
  },
  {
    author: "Janaki Bollisetti",
    type: "daily" as const,
    quote:
      "Our very first experience with Lehsun was so incredible that it is something we will always remember, and they have been our go-to ever since. The quality is always absolutely premium. We have been ordering from them for a year now, and I am amazed at how they maintain the exact same wonderful flavour every single time.",
    googleUrl: "https://maps.app.goo.gl/C8JKao4BbBerjfQj8",
  },
  {
    author: "Varsha Aravindhan",
    type: "daily" as const,
    quote:
      "We ordered the thali and aloo tikki chaat from Lehsun, and everything was absolutely delicious. We've also tried their chapatis and curries — being pure vegetarians, we really appreciate the authentic flavours and homemade texture. The taste is consistently brilliant, and even my kids adore the food from here. Definitely one of the best Indian food options in Ebbsfleet!",
    googleUrl: "https://maps.app.goo.gl/C8JKao4BbBerjfQj8",
  },
  {
    author: "Venkatesh Mishra",
    type: "daily" as const,
    quote:
      "Been ordering from Lehsun since they opened and they've been consistently excellent. The food tastes truly authentic, just like homemade Indian snacks and meals. Quality and flavour are always spot on. Highly recommended if you want genuine Indian taste!",
    googleUrl: "https://maps.app.goo.gl/C8JKao4BbBerjfQj8",
  },
  {
    author: "Sangeetha Sathyanarayanan",
    type: "daily" as const,
    quote:
      "Absolutely amazing food at Lehsun! The pav bhaji is the best I've had since moving to the UK, packed with authentic flavour and perfectly cooked. We also tried the nan khatai, Badam Milk, and mango lassi, and everything was excellent. Easily one of the best places in Ebbsfleet.",
    googleUrl: "https://maps.app.goo.gl/C8JKao4BbBerjfQj8",
  },
  {
    author: "DINESH RAJWANI",
    type: "daily" as const,
    quote:
      "Had a great experience at Lehsun! I ordered the Samosa Chaat, and it was absolutely delicious, fresh, flavorful, and perfectly balanced with the chutneys and spices. One of the best places for Indian food in and around Ebbsfleet.",
    googleUrl: "https://maps.app.goo.gl/C8JKao4BbBerjfQj8",
  },
  {
    author: "Shanmukhi Bhavani",
    type: "daily" as const,
    quote:
      "Ordered kachori and nankathai from Lehsun and loved both of them. The nankathai are literally melting in the mouth, kachori are crispy and perfect on spice level too, a perfect combination with potato curry.",
    googleUrl: "https://maps.app.goo.gl/C8JKao4BbBerjfQj8",
  },
  {
    author: "Sowmya Sundar",
    type: "daily" as const,
    quote:
      "The food is amazing and great customer service. This is our go to place for comfort food, my absolute favourite being Pav Bhaji and Vada Pav.",
    googleUrl: "https://maps.app.goo.gl/C8JKao4BbBerjfQj8",
  },
  {
    author: "Nick Brown",
    type: "daily" as const,
    quote:
      "Amazing authentic food. Different to anything we've had before and the flavours are incredible. Lovely lady too. Great value, what an experience.",
    googleUrl: "https://maps.app.goo.gl/C8JKao4BbBerjfQj8",
  },
  {
    author: "Ami Salunke",
    type: "daily" as const,
    quote:
      "Shahi thali was seriously delicious. The paneer was soft and full of flavour, and the dal makhani had that perfect creamy, slow-cooked taste. Every bite felt rich and comforting without being too heavy. Proper homestyle flavours — definitely one of the best food I've had in the area.",
    googleUrl: "https://maps.app.goo.gl/C8JKao4BbBerjfQj8",
  },
  {
    author: "krutika thakker",
    type: "daily" as const,
    quote:
      "We tried a few things from Lehsun and enjoyed the food every time. The chole, aloo tari sabzi, gajar halwa were outstanding. Definitely ordering more and highly recommend Lehsun for authentic and delicious Indian food.",
    googleUrl: "https://maps.app.goo.gl/C8JKao4BbBerjfQj8",
  },
  {
    author: "Pradeep Yadanala",
    type: "daily" as const,
    quote:
      "I've ordered from Lehsun Food a few times now, and it never disappoints. The food is full of authentic homemade flavour, fresh, and always beautifully prepared. Their homemade drinks are absolutely amazing and really make the meal feel special. Easily one of my favourite places to order from in Ebbsfleet.",
    googleUrl: "https://maps.app.goo.gl/C8JKao4BbBerjfQj8",
  },
  {
    author: "Bhavika Jain",
    type: "daily" as const,
    quote:
      "I ordered thali a couple of times and the food is really good. Quantity is nice and filling. The taste is great and very home-like.",
    googleUrl: "https://maps.app.goo.gl/C8JKao4BbBerjfQj8",
  },
  {
    author: "Dr Apeksha Tiwari",
    type: "daily" as const,
    quote:
      "I recently ordered from Lehsun and the food brought back so many nostalgic memories. It was incredibly tasty and comforting at the same time. I can't wait to order again — highly recommended!",
    googleUrl: "https://maps.app.goo.gl/C8JKao4BbBerjfQj8",
  },
  {
    author: "Sweety Mishra",
    type: "daily" as const,
    quote:
      "I have ordered Lehsun's Khasta Kachori so many times and every time it takes me back home. Crispy and crunchy outer layer with flavourful filling inside. Their Naan Khatai also had that perfect crumbly texture — soft yet slightly crisp, each bite melting in my mouth with a rich, buttery flavour and a hint of cardamom. They're doing a great job serving delicious food with love and care. Highly recommended!",
    googleUrl: "https://maps.app.goo.gl/C8JKao4BbBerjfQj8",
  },
  {
    author: "Himanshi Khurana",
    type: "daily" as const,
    quote:
      "The food was absolutely amazing — a real trip down memory lane! Everything was prepared and packed hygienically, and the flavours were just perfect. Highly recommend!",
    googleUrl: "https://maps.app.goo.gl/C8JKao4BbBerjfQj8",
  },
  {
    author: "vivek singh",
    type: "daily" as const,
    quote:
      "Just one word — laajawaab! The keema pav is nothing short of a culinary masterpiece. The keema was perfectly cooked, with a rich, masaledaar blend — spicy, savoury, and deeply satisfying. The pav was soft and buttery, toasted just right to soak up all that delicious keema. It's the kind of dish that makes you pause and say, 'Bas, yahi hai!' Highly recommend to anyone craving authentic flavours with a punch of nostalgia.",
    googleUrl: "https://maps.app.goo.gl/C8JKao4BbBerjfQj8",
  },
  {
    author: "Ruhi singh",
    type: "daily" as const,
    quote:
      "Lahsun nailed it! This trio was a perfect blend of swad, sanskaar, and yaadein. I ordered aloo ki sabzi, khasta kachori, and thandai — and honestly, it was ekdum swadisht! The whole meal felt like a nostalgic trip to the galli-nukkad stalls of India, where every bite tells a story. If you're craving something chatpata, comforting, and unapologetically desi, this is a must-try.",
    googleUrl: "https://maps.app.goo.gl/C8JKao4BbBerjfQj8",
  },
  {
    author: "Stuti Kashyap",
    type: "daily" as const,
    quote:
      "I can't recommend Lehsun enough! Their litti soaked in spicy Indian goat curry is an absolute flavour bomb — rich, authentic, and so tasty. And the Nankhatai is buttery, crumbly perfection that melts in your mouth. It's like a taste of home, right here in Kent. Super impressed with how hygienic they are, and their packaging is top-notch too. If you haven't tried them yet, you're seriously missing out!",
    googleUrl: "https://maps.app.goo.gl/C8JKao4BbBerjfQj8",
  },
  {
    author: "Rohit Sinha",
    type: "daily" as const,
    quote:
      "Lehsun absolutely nailed the Litti & Mutton at the Holi event! The litti had that perfect smoky, charred crust with a soft, flavourful sattu filling, absorbing every bit of the rich, spicy, slow-cooked mutton gravy. The balance of spices, the depth of flavour, and the quality of the ingredients made it a truly soul-satisfying experience.",
    googleUrl: "https://maps.app.goo.gl/C8JKao4BbBerjfQj8",
  },
  {
    author: "Shivangi Srivastava",
    type: "daily" as const,
    quote:
      "Lehsun truly brings out the authentic taste of India! I absolutely loved the nihari — it was rich, flavourful, and perfectly spiced. The litti was amazing too, with that classic smoky flavour. You can tell the food is made with care and tradition in mind. Will definitely be coming back!",
    googleUrl: "https://maps.app.goo.gl/C8JKao4BbBerjfQj8",
  },
] as const;

export const cateringReviews = reviews.filter((r) => r.type === "catering");
export const dailyMenuReviews = reviews.filter((r) => r.type === "daily");

function pickReviews(authors: readonly string[]) {
  return authors
    .map((author) => reviews.find((review) => review.author === author))
    .filter((review): review is (typeof reviews)[number] => Boolean(review));
}

export const homepageReviews = pickReviews([
  "aparna manaswini",
  "Janaki Bollisetti",
  "Ruchita Pokhriyal",
]);

export const menuPageReviews = pickReviews([
  "Varsha Aravindhan",
  "surendra nivas",
  "Sangeetha Sathyanarayanan",
  "Venkatesh Mishra",
  "DINESH RAJWANI",
  "Shanmukhi Bhavani",
  "Sowmya Sundar",
  "Nick Brown",
]);

export const cateringPageReviews = pickReviews([
  "aparna manaswini",
  "Tarun Kumar",
  "Sneha Shyamsunder",
  "Anudeet M",
  "Ishani Sharma",
  "Rochak Agarwal",
  "Bhavik Motasha",
  "Piyush Kumar",
  "Shobha Kumari",
  "Parv Sharma",
  "M Pat",
  "Ruchita Pokhriyal",
]);

export const structuredDataReviews = pickReviews([
  "Ashwini Dabhade",
  "Sneha Shyamsunder",
  "Ishani Sharma",
  "Tarun Kumar",
  "Deepa B",
  "Rochak Agarwal",
  "Bhavik Motasha",
  "Shobha Kumari",
  "Ruchita Pokhriyal",
]);

export function getLocationCateringReviews(locationName: string) {
  switch (locationName.toLowerCase()) {
    case "dartford":
      return pickReviews(["Ashwini Dabhade", "aparna manaswini", "M Pat"]);
    case "ebbsfleet valley":
      return pickReviews(["Sneha Shyamsunder", "Parv Sharma", "Shobha Kumari"]);
    case "gravesend":
      return pickReviews(["Tarun Kumar", "Anudeet M", "Piyush Kumar"]);
    default:
      return cateringPageReviews;
  }
}

// ─── Pricing ──────────────────────────────────────────────────────────────────

export const cateringPricing = {
  startingPrice: "From £11.99 per head",
  shortPrice: "£11.99 per head",
  minimumGuests: 12,
  minimumGuestsLabel: "Minimum 12 guests",
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
      "Paneer Makhani",
      "Lahsuni Palak Paneer",
      "Kadhai Paneer",
      "Veg Chowmein",
      "Matar Paneer",
      "Malai Kofta",
      "Vegetable Kofta",
      "Methi Malai Matar",
      "Amritsari Pindi Chole",
      "Punjabi Rajama",
      "Haaka Noodles",
      "Mix Vegetable",
      "Vegetable Jalfrezi",
      "Dum Aloo",
      "Dal Makhani",
      "Dhaba Daal Tadka",
      "Panchmel Daal",
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
  ],
  condiments: ["Masala Peanuts", "Papad", "Green Salad", "Sprouts Salad"],
} as const;

// ─── Daily menu ───────────────────────────────────────────────────────────────

export const dailyMenuInfo = {
  availability: "Available every day",
  posting: "Posted fresh daily",
  orderChannels:
    "Pre-order via WhatsApp catalogue, direct message, or a quick call.",
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
  hygieneRating:
    "https://www.food.gov.uk/sites/default/files/styles/promo_large/public/media/image/food-hygiene-Rating%205_a_preview.jpeg?itok=ao2_ogm4",
  logo: "/assets/stitch/lehsun-branded-final/logo.png",
} as const;
