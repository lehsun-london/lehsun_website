import type { Metadata } from "next";
import { CateringPage } from "@/components/catering/CateringPage";
import FaqSchema from "@/components/seo/FaqSchema";
import { cateringFaqs } from "@/content/faqs";
import { createPageMetadata } from "@/lib/seo";

export const metadata: Metadata = createPageMetadata({
  title: "5-Star Rated ★ Indian Catering in Kent | Lehsun",
  description:
    "North Indian catering for Dartford, Gravesend, Ebbsfleet and nearby Kent. 5.0 ★ rated with 75+ Google reviews, from £11.99/head. WhatsApp for a quote.",
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
