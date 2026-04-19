import type { MetadataRoute } from "next";
import { execSync } from "node:child_process";
import { buildAbsoluteUrl } from "@/lib/seo";

function getLastModifiedDate(paths: readonly string[]): Date {
  try {
    const output = execSync(
      `git log -1 --format=%cI -- ${paths.join(" ")}`,
      {
        encoding: "utf8",
        stdio: ["ignore", "pipe", "ignore"],
      },
    ).trim();

    if (output) {
      return new Date(output);
    }
  } catch {
    // Fallback for environments where .git metadata is unavailable.
  }

  return new Date("2026-03-13T07:54:10Z");
}

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: buildAbsoluteUrl("/"),
      lastModified: getLastModifiedDate([
        "src/app/layout.tsx",
        "src/app/page.tsx",
        "src/components/home",
        "src/components/seo",
        "src/content/faqs.ts",
      ]),
      changeFrequency: "weekly",
      priority: 1,
    },
    {
      url: buildAbsoluteUrl("/catering"),
      lastModified: getLastModifiedDate([
        "src/app/layout.tsx",
        "src/app/catering/page.tsx",
        "src/components/catering",
        "src/components/seo",
        "src/content/faqs.ts",
        "src/content/businessInfo.ts",
      ]),
      changeFrequency: "weekly",
      priority: 0.9,
    },
    {
      url: buildAbsoluteUrl("/menu"),
      lastModified: getLastModifiedDate([
        "src/app/layout.tsx",
        "src/app/menu/page.tsx",
        "src/components/menu",
        "src/components/home/FaqSection.tsx",
        "src/components/seo",
        "src/content/faqs.ts",
        "src/content/businessInfo.ts",
      ]),
      changeFrequency: "daily",
      priority: 0.8,
    },
    {
      url: buildAbsoluteUrl("/catering/ebbsfleet-valley"),
      lastModified: getLastModifiedDate([
        "src/app/layout.tsx",
        "src/app/catering/ebbsfleet-valley/page.tsx",
        "src/components/catering/LocationCateringPage.tsx",
        "src/components/seo",
        "src/content/businessInfo.ts",
      ]),
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: buildAbsoluteUrl("/catering/dartford"),
      lastModified: getLastModifiedDate([
        "src/app/layout.tsx",
        "src/app/catering/dartford/page.tsx",
        "src/components/catering/LocationCateringPage.tsx",
        "src/components/seo",
        "src/content/businessInfo.ts",
      ]),
      changeFrequency: "monthly",
      priority: 0.75,
    },
    {
      url: buildAbsoluteUrl("/catering/gravesend"),
      lastModified: getLastModifiedDate([
        "src/app/layout.tsx",
        "src/app/catering/gravesend/page.tsx",
        "src/components/catering/LocationCateringPage.tsx",
        "src/components/seo",
        "src/content/businessInfo.ts",
      ]),
      changeFrequency: "monthly",
      priority: 0.75,
    },
  ];
}
