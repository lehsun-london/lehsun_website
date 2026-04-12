import type { Metadata } from "next";
import { MenuPage } from "@/components/menu/MenuPage";

export const metadata: Metadata = {
  title: "Daily North Indian Menu — Order via WhatsApp | Lehsun",
  description:
    "Lehsun posts a fresh North Indian menu every day. Order via WhatsApp catalogue — collection from Ebbsfleet Valley or delivery within 2 miles on orders above £25.",
  alternates: {
    canonical: "https://lehsun.co.uk/menu",
  },
  keywords: [
    "daily Indian food Ebbsfleet Valley",
    "North Indian food delivery Dartford",
    "Indian takeaway Ebbsfleet Valley",
    "daily thaali Gravesend",
    "fresh Indian food Kent",
    "WhatsApp food order Ebbsfleet Valley",
    "Indian home delivery Northfleet",
  ],
  openGraph: {
    title: "Daily North Indian Menu — Order via WhatsApp | Lehsun",
    description:
      "Fresh North Indian dishes posted daily. Order via WhatsApp — collection or delivery within 2 miles from Ebbsfleet Valley.",
    url: "https://lehsun.co.uk/menu",
    type: "website",
  },
};

export default function Page() {
  return <MenuPage />;
}
