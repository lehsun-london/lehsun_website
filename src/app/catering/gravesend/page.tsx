import type { Metadata } from "next";
import { LocationCateringPage } from "@/components/catering/LocationCateringPage";
import { createPageMetadata } from "@/lib/seo";

export const metadata: Metadata = createPageMetadata({
  title:
    "5-Star Rated ★ Indian Catering in Gravesend | Parties & Family Celebrations | Lehsun",
  description:
    "Planning a birthday, housewarming or family gathering in Gravesend? Lehsun brings real North Indian flavours, generous portions and stress-free catering.",
  path: "/catering/gravesend",
  keywords: [
    "North Indian catering Gravesend",
    "Indian catering Gravesend",
    "birthday catering Gravesend",
    "housewarming catering Gravesend",
    "baby shower catering Gravesend",
    "Diwali catering Gravesend",
    "Indian food Gravesend DA11",
    "Indian food Gravesend DA12",
    "party catering Gravesend Kent",
  ],
});

export default function Page() {
  return (
    <LocationCateringPage
      location={{
        name: "Gravesend",
        displayName: "Gravesend, Kent",
        postcodes: "DA11, DA12",
        proximityNote:
          "Based in Ebbsfleet Valley — just 4 miles from Gravesend town centre. We regularly cater events across DA11, DA12 and surrounding Northfleet area.",
        nearbyAreas: [
          "Northfleet",
          "Singlewell",
          "Istead Rise",
          "Meopham",
          "Higham",
        ],
        heroTitle:
          "Indian Catering in Gravesend for Parties & Family Celebrations",
        trustItems: [
          "5-Star Rated ★ Google Reviews",
          "5-Star ★ Food Hygiene Rated",
          "Freshly prepared for every event",
        ],
        reviewHighlight:
          "Customers often mention consistency, generous portions and food their guests love.",
        relatedLinks: [
          { href: "/catering/dartford", label: "Indian Catering in Dartford" },
          {
            href: "/catering/ebbsfleet-valley",
            label: "Indian Catering in Ebbsfleet Valley",
          },
        ],
        localContent:
          "For Gravesend events, we regularly plan menus for family gatherings around Northfleet, Riverview Park and Singlewell. Food is cooked fresh in Ebbsfleet Valley, packed carefully, and brought over while the dishes are still event-ready.",
        locationIntro:
          "Gravesend has one of the largest South Asian communities in Kent. That means when you serve food at a Gravesend event, your guests know what good North Indian cooking should taste like. We find that motivating. We have catered Diwali parties, housewarmings, and birthday celebrations in DA11 and DA12 where the crowd were serious about the food — and we have always enjoyed that feedback. It is about 4 miles from our kitchen in Ebbsfleet Valley.",
        answerBlock:
          "Lehsun provides 5-star rated North Indian catering in Gravesend and nearby Kent from Ebbsfleet Valley. We prepare fresh, home-style menus for birthdays, housewarmings, baby showers, corporate events, weddings, mandir events and family celebrations, with vegetarian, non-vegetarian, Jain and no-onion/no-garlic options from £11.99 per head for 12+ guests.",
        locationFaqs: [
          {
            question:
              "Do you cater Diwali and cultural celebrations in Gravesend?",
            answer:
              "Yes — Diwali gatherings, Holi parties, and family puja events are events we know well. Gravesend has a strong South Asian community, and we maintain separate veg and non-veg kitchens, which matters for many events in the area.",
          },
          {
            question: "Do you cover Northfleet, Singlewell, and DA12?",
            answer:
              "Yes — Northfleet, Singlewell, Istead Rise, Higham, and the DA12 postcodes are all within our regular catering area. We are 4 miles from Gravesend town centre, so the food gets to you fresh.",
          },
        ],
      }}
    />
  );
}
