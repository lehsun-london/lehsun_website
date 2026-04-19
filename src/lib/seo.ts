import type { Metadata } from "next";

export const SITE_URL = "https://lehsun.co.uk";
export const DEFAULT_OG_IMAGE = `${SITE_URL}/assets/stitch/lehsun-branded-final/hero-bg.png`;
export const DEFAULT_OG_IMAGE_ALT = "Lehsun North Indian catering and daily menu";

export function buildAbsoluteUrl(path: `/${string}` | "/"): string {
  return path === "/" ? `${SITE_URL}/` : `${SITE_URL}${path}`;
}

interface CreatePageMetadataInput {
  title: string;
  description: string;
  path: `/${string}` | "/";
  keywords?: string[];
}

export function createPageMetadata({
  title,
  description,
  path,
  keywords = [],
}: CreatePageMetadataInput): Metadata {
  const canonical = buildAbsoluteUrl(path);

  return {
    title,
    description,
    alternates: {
      canonical,
    },
    keywords,
    openGraph: {
      title,
      description,
      url: canonical,
      type: "website",
      siteName: "Lehsun",
      locale: "en_GB",
      images: [
        {
          url: DEFAULT_OG_IMAGE,
          width: 1200,
          height: 630,
          alt: DEFAULT_OG_IMAGE_ALT,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [DEFAULT_OG_IMAGE],
    },
  };
}
