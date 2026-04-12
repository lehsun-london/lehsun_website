"use client";

import { useEffect, useRef } from "react";
import { usePathname } from "next/navigation";
import { trackPageView } from "@/lib/analytics";

/**
 * Fires a GA4 page_view event on every client-side route change.
 * Next.js App Router doesn't re-run gtag('config') on navigation,
 * so /catering and /menu visits are otherwise undercounted.
 */
export function PageViewTracker() {
  const pathname = usePathname();
  const isFirst = useRef(true);

  useEffect(() => {
    // Skip on initial load — gtag('config') in layout.tsx handles that
    if (isFirst.current) {
      isFirst.current = false;
      return;
    }

    trackPageView(pathname, document.title);
  }, [pathname]);

  return null;
}
