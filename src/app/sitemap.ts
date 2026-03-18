import type { MetadataRoute } from "next";
import { execSync } from "node:child_process";

const contentPaths = [
  "src/app/layout.tsx",
  "src/components/home",
  "src/components/seo",
];

function getLastModifiedDate(): Date {
  try {
    const output = execSync(
      `git log -1 --format=%cI -- ${contentPaths.join(" ")}`,
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
      url: "https://lehsun.co.uk/",
      lastModified: getLastModifiedDate(),
      changeFrequency: "weekly",
      priority: 1,
    },
  ];
}
