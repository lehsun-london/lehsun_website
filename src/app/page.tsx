import type { Metadata } from "next";
import { HomePage } from "@/components/home/HomePage";

export const metadata: Metadata = {
  title: "North Indian Catering in Kent | Lehsun",
  alternates: {
    canonical: "https://lehsun.co.uk/",
  },
};

export default function Page() {
  return <HomePage />;
}
