import type { Metadata } from "next";
import { HomePage } from "@/components/home/HomePage";
import FaqSchema from "@/components/seo/FaqSchema";
import { cateringFaqs } from "@/content/faqs";
import { createPageMetadata } from "@/lib/seo";

export const metadata: Metadata = createPageMetadata({
  title: "5★ North Indian Catering in Gravesend, Dartford & Ebbsfleet | Lehsun",
  description:
    "5★ rated North Indian catering for birthdays, baby showers, housewarmings and family celebrations across Gravesend, Dartford, Ebbsfleet and nearby Kent.",
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
