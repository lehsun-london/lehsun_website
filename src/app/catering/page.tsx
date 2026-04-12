import type { Metadata } from "next";
import { CateringPage } from "@/components/catering/CateringPage";
import FaqSchema from "@/components/seo/FaqSchema";
import { cateringFaqs } from "@/content/faqs";

export const metadata: Metadata = {
  title: "North Indian Catering in Ebbsfleet, Dartford & Gravesend | Lehsun",
  description:
    "Lehsun provides North Indian catering for birthdays, housewarmings, baby showers, Diwali and family gatherings across Ebbsfleet Valley, Dartford, Gravesend and nearby Kent. From £11.99 per head.",
  alternates: {
    canonical: "https://lehsun.co.uk/catering",
  },
  keywords: [
    "North Indian catering Ebbsfleet",
    "North Indian catering Dartford",
    "Indian catering Gravesend",
    "North Indian catering Ebbsfleet Valley",
    "birthday catering Dartford",
    "housewarming catering Gravesend",
    "baby shower catering Ebbsfleet",
    "Diwali catering Kent",
    "Indian catering for events Kent",
  ],
  openGraph: {
    title: "North Indian Catering in Ebbsfleet, Dartford & Gravesend | Lehsun",
    description:
      "Proper North Indian catering for birthdays, housewarmings, baby showers, Diwali and family gatherings across Ebbsfleet Valley, Dartford, Gravesend and nearby Kent.",
    url: "https://lehsun.co.uk/catering",
    type: "website",
  },
};

export default function Page() {
  return (
    <>
      <FaqSchema faqs={cateringFaqs} />
      <CateringPage />
    </>
  );
}
