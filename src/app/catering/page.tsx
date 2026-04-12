import type { Metadata } from "next";
import { CateringPage } from "@/components/catering/CateringPage";

export const metadata: Metadata = {
  title: "North Indian Catering in Dartford, Gravesend, Bexley & Kent | Lehsun",
  description:
    "Lehsun provides North Indian catering for events in Dartford, Gravesend, Ebbsfleet Valley, Bexley, Orpington and nearby Kent. Birthdays, Diwali, family gatherings and more — from £11.99 per head.",
  alternates: {
    canonical: "https://lehsun.co.uk/catering",
  },
  keywords: [
    "North Indian catering Dartford",
    "Indian catering Gravesend",
    "Indian catering Bexley",
    "Indian catering Orpington",
    "North Indian catering Ebbsfleet Valley",
    "party catering Kent",
    "event catering Dartford",
    "Diwali catering Kent",
    "birthday catering Gravesend",
    "Indian catering for events Kent",
  ],
  openGraph: {
    title: "North Indian Catering in Dartford, Gravesend, Bexley & Kent | Lehsun",
    description:
      "Proper North Indian catering for birthdays, Diwali, family gatherings and events across Dartford, Gravesend, Bexley, Orpington and Kent. From £11.99 per head.",
    url: "https://lehsun.co.uk/catering",
    type: "website",
  },
};

export default function Page() {
  return <CateringPage />;
}
