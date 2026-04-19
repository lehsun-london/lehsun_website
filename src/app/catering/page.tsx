import type { Metadata } from "next";
import { CateringPage } from "@/components/catering/CateringPage";
import FaqSchema from "@/components/seo/FaqSchema";
import { cateringFaqs } from "@/content/faqs";
import { createPageMetadata } from "@/lib/seo";

export const metadata: Metadata = createPageMetadata({
  title: "North Indian Event Catering | Ebbsfleet Valley, Dartford & Gravesend | Lehsun",
  description:
    "Tailored North Indian catering for birthdays, housewarmings, baby showers & Diwali across Ebbsfleet Valley, Dartford & Gravesend. From £11.99/head, 15+ guests.",
  path: "/catering",
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
});

export default function Page() {
  return (
    <>
      <FaqSchema faqs={cateringFaqs} />
      <CateringPage />
    </>
  );
}
