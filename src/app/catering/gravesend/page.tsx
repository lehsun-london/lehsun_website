import type { Metadata } from "next";
import { LocationCateringPage } from "@/components/catering/LocationCateringPage";

export const metadata: Metadata = {
  title: "North Indian Catering in Gravesend | Birthdays & Events | Lehsun",
  description:
    "Lehsun provides North Indian catering for birthdays, housewarmings, baby showers & Diwali in Gravesend (DA11, DA12). From £11.99/head, minimum 15 guests. Same-day quotes.",
  alternates: {
    canonical: "https://lehsun.co.uk/catering/gravesend",
  },
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
  openGraph: {
    title: "North Indian Catering in Gravesend | Birthdays & Events | Lehsun",
    description:
      "Proper North Indian catering for events in Gravesend, Kent. From £11.99/head, minimum 15 guests. Message on WhatsApp for a same-day quote.",
    url: "https://lehsun.co.uk/catering/gravesend",
    type: "website",
  },
};

export default function Page() {
  return (
    <LocationCateringPage
      location={{
        name: "Gravesend",
        displayName: "Gravesend, Kent",
        postcodes: "DA11, DA12",
        proximityNote:
          "Based in Ebbsfleet Valley — just 4 miles from Gravesend town centre. We regularly cater events across DA11, DA12 and surrounding Northfleet area.",
        nearbyAreas: ["Northfleet", "Singlewell", "Istead Rise", "Meopham", "Higham"],
      }}
    />
  );
}
