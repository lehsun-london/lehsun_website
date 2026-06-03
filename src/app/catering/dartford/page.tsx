import type { Metadata } from "next";
import { LocationCateringPage } from "@/components/catering/LocationCateringPage";
import { createPageMetadata } from "@/lib/seo";

export const metadata: Metadata = createPageMetadata({
  title: "Indian Catering in Dartford | 5★ Google Reviews | Lehsun",
  description:
    "5★ North Indian catering for birthdays, housewarmings, baby showers and Diwali events in Dartford. 50+ Google reviews, from £11.99/head, 15+ guests.",
  path: "/catering/dartford",
  keywords: [
    "North Indian catering Dartford",
    "Indian catering Dartford",
    "birthday catering Dartford",
    "housewarming catering Dartford",
    "baby shower catering Dartford",
    "Diwali catering Dartford",
    "Indian food Dartford DA1",
    "Indian food Dartford DA2",
    "party catering Dartford Kent",
  ],
});

export default function Page() {
  return (
    <LocationCateringPage
      location={{
        name: "Dartford",
        displayName: "Dartford, Kent",
        postcodes: "DA1, DA2",
        proximityNote:
          "Based in Ebbsfleet Valley — just 5 miles from Dartford town centre. We regularly cater events across DA1, DA2 and surrounding areas.",
        nearbyAreas: ["Stone", "Swanscombe", "Greenhithe", "Crayford", "Longfield"],
        locationIntro:
          "Dartford sits at the edge of London and the edge of Kent, which means the people who live there have come from everywhere. We have catered birthday parties in Dartford where half the room were Londoners and the other half were Kent families — and the food gave both sides something to talk about. It is about 5 miles from our kitchen in Ebbsfleet Valley, so we are in quickly, and the food arrives at the right temperature.",
        locationFaqs: [
          {
            question: "Do you cover Stone, Crayford, and Longfield?",
            answer:
              "Yes — Stone, Crayford, Swanscombe, Longfield, and Greenhithe all fall within our catering area. If you are unsure whether we cover your specific postcode in DA1 or DA2, message us on WhatsApp and we will confirm the same day.",
          },
          {
            question: "How far in advance should I book catering in Dartford?",
            answer:
              "Most Dartford events are booked 2 to 4 weeks in advance. For larger gatherings or busy dates like Diwali, Christmas, or summer weekends, earlier is better. We sometimes accommodate shorter notice, so it is always worth asking.",
          },
        ],
      }}
    />
  );
}
