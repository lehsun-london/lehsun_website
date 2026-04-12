import type { Metadata } from "next";
import { MenuPage } from "@/components/menu/MenuPage";
import FaqSchema from "@/components/seo/FaqSchema";
import { menuFaqs } from "@/content/faqs";

export const metadata: Metadata = {
  title: "Daily North Indian Menu in Ebbsfleet Valley | Order on WhatsApp | Lehsun",
  description:
    "Lehsun posts a fresh North Indian menu every day. Order on WhatsApp for collection in Ebbsfleet Valley, DA10, or local delivery within 2 miles on orders above £25.",
  alternates: {
    canonical: "https://lehsun.co.uk/menu",
  },
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
  openGraph: {
    title: "Daily North Indian Menu in Ebbsfleet Valley | Order on WhatsApp | Lehsun",
    description:
      "Fresh North Indian dishes posted daily. Order via WhatsApp for collection in Ebbsfleet Valley or local delivery within 2 miles.",
    url: "https://lehsun.co.uk/menu",
    type: "website",
  },
};

export default function Page() {
  return (
    <>
      <FaqSchema faqs={menuFaqs} />
      <MenuPage />
    </>
  );
}
