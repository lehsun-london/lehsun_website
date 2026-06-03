import type { Metadata } from "next";
import { HomePage } from "@/components/home/HomePage";
import FaqSchema from "@/components/seo/FaqSchema";
import { cateringFaqs } from "@/content/faqs";
import { createPageMetadata } from "@/lib/seo";

export const metadata: Metadata = createPageMetadata({
  title: "North Indian Catering in Ebbsfleet, Dartford & Gravesend | Lehsun",
  description:
    "5★ North Indian catering for birthdays, housewarmings, baby showers and family events across Ebbsfleet, Dartford and Gravesend. WhatsApp for a quote.",
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
