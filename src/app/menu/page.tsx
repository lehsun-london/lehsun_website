import type { Metadata } from "next";
import { MenuPage } from "@/components/menu/MenuPage";
import FaqSchema from "@/components/seo/FaqSchema";
import { menuFaqs } from "@/content/faqs";
import { createPageMetadata } from "@/lib/seo";

export const metadata: Metadata = createPageMetadata({
  title: "Daily Indian Food in Ebbsfleet Valley | 5★ Rated | Lehsun",
  description:
    "Fresh North Indian dishes posted daily. Order via WhatsApp for collection in Ebbsfleet Valley or local delivery within 2 miles on £25+ orders.",
  path: "/menu",
  keywords: [
    "daily Indian food Ebbsfleet Valley",
    "Indian food collection Ebbsfleet Valley",
    "WhatsApp food order Ebbsfleet Valley",
    "North Indian meals Ebbsfleet Valley",
    "daily thaali Ebbsfleet Valley",
    "fresh Indian food Ebbsfleet Valley",
    "Indian food DA10",
    "local Indian delivery Ebbsfleet Valley",
  ],
});

export default function Page() {
  return (
    <>
      <FaqSchema faqs={menuFaqs} />
      <MenuPage />
    </>
  );
}
