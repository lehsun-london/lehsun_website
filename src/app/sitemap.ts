import type { MetadataRoute } from "next";
import { execSync } from "node:child_process";

const contentPaths = [
  "src/app/layout.tsx",
  "src/components/home",
  "src/components/catering",
  "src/components/menu",
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
  const lastMod = getLastModifiedDate();
  return [
    {
      url: "https://lehsun.co.uk/",
      lastModified: lastMod,
      changeFrequency: "weekly",
      priority: 1,
    },
    {
      url: "https://lehsun.co.uk/catering",
      lastModified: lastMod,
      changeFrequency: "weekly",
      priority: 0.9,
    },
    {
      url: "https://lehsun.co.uk/menu",
      lastModified: lastMod,
      changeFrequency: "daily",
      priority: 0.8,
    },
    {
      url: "https://lehsun.co.uk/catering/ebbsfleet-valley",
      lastModified: lastMod,
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: "https://lehsun.co.uk/catering/dartford",
      lastModified: lastMod,
      changeFrequency: "monthly",
      priority: 0.75,
    },
    {
      url: "https://lehsun.co.uk/catering/gravesend",
      lastModified: lastMod,
      changeFrequency: "monthly",
      priority: 0.75,
    },
  ];
}
