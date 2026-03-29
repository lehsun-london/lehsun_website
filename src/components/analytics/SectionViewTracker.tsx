"use client";

import { useEffect, useRef } from "react";
import { trackSectionView } from "@/lib/analytics";

type TrackedSection = {
  id: string;
  name: string;
  order: number;
};

type SectionViewTrackerProps = {
  sections: TrackedSection[];
};

export function SectionViewTracker({ sections }: SectionViewTrackerProps) {
  const seenSectionIds = useRef<Set<string>>(new Set());

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (!entry.isIntersecting || entry.intersectionRatio < 0.5) {
            continue;
          }

          const sectionId = entry.target.id;

          if (seenSectionIds.current.has(sectionId)) {
            continue;
          }

          const section = sections.find((item) => item.id === sectionId);

          if (!section) {
            continue;
          }

          seenSectionIds.current.add(sectionId);
          trackSectionView({
            section_id: section.id,
            section_name: section.name,
            section_order: section.order,
          });
          observer.unobserve(entry.target);
        }
      },
      { threshold: 0.5 },
    );

    for (const section of sections) {
      const element = document.getElementById(section.id);

      if (element) {
        observer.observe(element);
      }
    }

    return () => observer.disconnect();
  }, [sections]);

  return null;
}
