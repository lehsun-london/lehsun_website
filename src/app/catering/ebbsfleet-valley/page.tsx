import type { Metadata } from "next";
import { LocationCateringPage } from "@/components/catering/LocationCateringPage";

export const metadata: Metadata = {
  title: "North Indian Catering in Ebbsfleet Valley | DA10 | Lehsun",
  description:
    "Lehsun is based in Ebbsfleet Valley (DA10) and provides North Indian catering for birthdays, housewarmings, baby showers & events locally. From £11.99/head, minimum 15 guests.",
  alternates: {
    canonical: "https://lehsun.co.uk/catering/ebbsfleet-valley",
  },
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
  openGraph: {
    title: "North Indian Catering in Ebbsfleet Valley | DA10 | Lehsun",
    description:
      "Lehsun is based in Ebbsfleet Valley, DA10. North Indian catering for birthdays, housewarmings, baby showers & events. From £11.99/head, 15+ guests.",
    url: "https://lehsun.co.uk/catering/ebbsfleet-valley",
    type: "website",
  },
};

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
      }}
    />
  );
}
