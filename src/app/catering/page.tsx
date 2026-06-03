import type { Metadata } from "next";
import { CateringPage } from "@/components/catering/CateringPage";
import FaqSchema from "@/components/seo/FaqSchema";
import { cateringFaqs } from "@/content/faqs";
import { createPageMetadata } from "@/lib/seo";

export const metadata: Metadata = createPageMetadata({
  title: "Indian Catering in Kent | 5★ Google Reviews | Lehsun",
  description:
    "North Indian catering for Dartford, Gravesend, Ebbsfleet and nearby Kent. 50+ Google reviews, from £11.99/head, 15+ guests. WhatsApp for a quote.",
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
