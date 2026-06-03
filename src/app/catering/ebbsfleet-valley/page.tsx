import type { Metadata } from "next";
import { LocationCateringPage } from "@/components/catering/LocationCateringPage";
import { createPageMetadata } from "@/lib/seo";

export const metadata: Metadata = createPageMetadata({
  title: "Indian Catering in Ebbsfleet Valley | 5★ Rated | Lehsun",
  description:
    "Local North Indian catering in Ebbsfleet Valley, DA10. 50+ Google reviews, fresh event menus, from £11.99/head, minimum 15 guests. WhatsApp for a quote.",
  path: "/catering/ebbsfleet-valley",
  keywords: [
    "North Indian catering Ebbsfleet Valley",
    "Indian catering Ebbsfleet Valley",
    "Indian catering DA10",
    "birthday catering Ebbsfleet Valley",
    "housewarming catering Ebbsfleet Valley",
    "baby shower catering Ebbsfleet",
    "Diwali catering Ebbsfleet",
    "party catering DA10 Kent",
  ],
});

export default function Page() {
  return (
    <LocationCateringPage
      location={{
        name: "Ebbsfleet Valley",
        displayName: "Ebbsfleet Valley, DA10",
        postcodes: "DA10",
        proximityNote:
          "We are based right here in Ebbsfleet Valley — local catering for local events, with fresh food cooked from our home kitchen.",
        nearbyAreas: ["Swanscombe", "Northfleet", "Gravesend", "Dartford", "Stone"],
        locationIntro:
          "Ebbsfleet Valley is our home. We cook from here, we deliver from here, and most of the events we have catered were just around the corner. The estate has grown fast — lots of young families, first housewarmings, children's birthdays — and there is something satisfying about feeding your own neighbourhood. When you order from us in DA10, the food comes from a kitchen less than a mile away.",
        locationFaqs: [
          {
            question: "Do you cater at homes and venues in Ebbsfleet Valley?",
            answer:
              "Yes — most of our DA10 events are at private homes and gardens in the development. Being based here means no travel costs, fast delivery, and easy communication on the day of your event. We have catered housewarmings on most of the streets in the estate.",
          },
          {
            question: "Is the daily menu available in Ebbsfleet Valley?",
            answer:
              "Yes — the daily menu is available for collection from our kitchen in DA10. Local delivery within 2 miles is also available on orders above £25. The daily menu is separate from catering and is posted fresh each morning on our WhatsApp catalogue.",
          },
        ],
      }}
    />
  );
}
