export const cateringFaqs = [
  {
    question: "What is included in Lehsun catering?",
    answer:
      "Catering menus can include veg and non-veg starters, mains, rice, breads, raita, desserts and condiments — shaped around your event and guest list. Everything is made fresh and served at your venue.",
  },
  {
    question: "Which events do you cater for?",
    answer:
      "We cater for birthday parties, family gatherings, house parties, and festive events including Diwali, Holi, Christmas, Easter, baby showers, anniversaries and more. If you have a specific occasion in mind, just ask.",
  },
  {
    question: "What does catering start from?",
    answer:
      "Catering starts from £11.99 per head with a minimum of 15 guests. The final price depends on the menu combination and event size — get in touch on WhatsApp for a tailored quote.",
  },
  {
    question: "Can I request a bespoke menu?",
    answer:
      "Yes — if you have a specific mix of dishes, a regional preference or dietary requirement in mind, we can shape a bespoke menu around it. Just share your ideas over WhatsApp.",
  },
  {
    question: "Do you cater in Dartford, Bexley and Orpington?",
    answer:
      "Yes — we are based in Ebbsfleet Valley and cater across Dartford, Gravesend, Northfleet, Bexley, Orpington and nearby Kent. Get in touch to confirm availability for your area and date.",
  },
  {
    question: "Do you use separate kitchens for veg and non-veg food?",
    answer:
      "Yes — we use separate kitchens for veg and non-veg food, so pure vegetarian customers can order with confidence.",
  },
  {
    question: "What is the minimum catering order?",
    answer:
      "Our catering is designed for 15 or more guests. For smaller gatherings, the daily menu may be a better fit.",
  },
] as const;

export const menuFaqs = [
  {
    question: "How do I order from the daily menu?",
    answer:
      "The daily menu is posted every day on our WhatsApp catalogue. You can pre-order through the catalogue, a direct message, or a quick call to +44 7768 892652.",
  },
  {
    question: "Is the daily menu available for delivery?",
    answer:
      "Collection is always available. Delivery is also available within 2 miles of Ebbsfleet Valley for orders above £25.",
  },
  {
    question: "What time is the daily menu posted?",
    answer:
      "The menu is posted fresh each morning. Pre-orders are welcome — message us on WhatsApp to place your order or check the day's menu.",
  },
  {
    question: "Can I order individual dishes or do I have to order a set meal?",
    answer:
      "You can order dish by dish, or go for the daily thaali when you want a complete meal. Both options are available every day.",
  },
  {
    question: "Do you use separate kitchens for veg and non-veg food?",
    answer:
      "Yes — we use separate kitchens for veg and non-veg food, so pure vegetarian customers can order with full confidence.",
  },
] as const;

// Combined export for pages that need all FAQs (e.g. layout schema)
export const faqs = [...cateringFaqs, ...menuFaqs] as const;
