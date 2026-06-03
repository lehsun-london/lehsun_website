import type { Metadata } from "next";
import { MenuPage } from "@/components/menu/MenuPage";
import FaqSchema from "@/components/seo/FaqSchema";
import { menuFaqs } from "@/content/faqs";
import { createPageMetadata } from "@/lib/seo";

export const metadata: Metadata = createPageMetadata({
  title: "Fresh North Indian Daily Menu in Ebbsfleet | Lehsun",
  description:
    "Changing daily North Indian menu in Ebbsfleet with fresh homemade dishes, street food favourites and flavours like back home.",
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
