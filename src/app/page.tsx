import type { Metadata } from "next";
import { HomePage } from "@/components/home/HomePage";

export const metadata: Metadata = {
  title: "North Indian Catering in Ebbsfleet, Dartford & Gravesend | Lehsun",
  description:
    "Lehsun provides North Indian catering for birthdays, housewarmings, baby showers and festive events across Ebbsfleet Valley, Dartford, Gravesend and nearby Kent. Daily menu stays local to Ebbsfleet Valley collection and nearby delivery.",
  alternates: {
    canonical: "https://lehsun.co.uk/",
  },
};

export default function Page() {
  return <HomePage />;
}
