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
    const viewportHeight = window.innerHeight || 1;
    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          const visibleViewportShare =
            entry.intersectionRect.height / viewportHeight;

          if (!entry.isIntersecting || visibleViewportShare < 0.5) {
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
      // Use several thresholds because the trigger condition is based on
      // viewport coverage, not the section's own intersection ratio.
      { threshold: [0, 0.25, 0.5, 0.75, 1] },
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
