import type { Metadata } from "next";
import { LocationCateringPage } from "@/components/catering/LocationCateringPage";

export const metadata: Metadata = {
  title: "North Indian Catering in Dartford | Birthdays & Events | Lehsun",
  description:
    "Lehsun provides North Indian catering for birthdays, housewarmings, baby showers & Diwali in Dartford (DA1, DA2). From £11.99/head, minimum 15 guests. Same-day quotes.",
  alternates: {
    canonical: "https://lehsun.co.uk/catering/dartford",
  },
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
  openGraph: {
    title: "North Indian Catering in Dartford | Birthdays & Events | Lehsun",
    description:
      "Proper North Indian catering for events in Dartford, Kent. From £11.99/head, minimum 15 guests. Message on WhatsApp for a same-day quote.",
    url: "https://lehsun.co.uk/catering/dartford",
    type: "website",
  },
};

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
      }}
    />
  );
}
