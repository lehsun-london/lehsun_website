import type { Metadata } from "next";
import { HomePage } from "@/components/home/HomePage";
import FaqSchema from "@/components/seo/FaqSchema";
import { cateringFaqs } from "@/content/faqs";
import { createPageMetadata } from "@/lib/seo";

export const metadata: Metadata = createPageMetadata({
  title: "North Indian Catering in Ebbsfleet, Dartford & Gravesend | Lehsun",
  description:
    "Lehsun provides North Indian catering for birthdays, housewarmings, baby showers and festive events across Ebbsfleet Valley, Dartford, Gravesend and nearby Kent. Daily menu stays local to Ebbsfleet Valley collection and nearby delivery.",
  path: "/",
});

export default function Page() {
  return (
    <>
      <FaqSchema faqs={cateringFaqs} />
      <HomePage />
    </>
  );
}
