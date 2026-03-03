"use client";

import type { ComponentPropsWithoutRef, MouseEvent } from "react";
import {
  type CtaEventName,
  type DestinationType,
  trackCtaClick,
} from "@/lib/analytics";

type AnchorProps = ComponentPropsWithoutRef<"a">;

type TrackedLinkProps = AnchorProps & {
  eventName: CtaEventName;
  placement: string;
  destinationType: DestinationType;
  ctaText?: string;
};

export function TrackedLink({
  eventName,
  placement,
  destinationType,
  ctaText,
  href,
  onClick,
  ...props
}: TrackedLinkProps) {
  const hrefValue = typeof href === "string" ? href : "";

  function handleClick(event: MouseEvent<HTMLAnchorElement>) {
    onClick?.(event);

    if (event.defaultPrevented || hrefValue.length === 0) {
      return;
    }

    const sectionId =
      destinationType === "anchor" && hrefValue.startsWith("#")
        ? hrefValue.slice(1)
        : undefined;

    trackCtaClick(eventName, {
      placement,
      destination_type: destinationType,
      href: hrefValue,
      cta_text: ctaText,
      section_id: sectionId,
    });
  }

  return <a {...props} href={href} onClick={handleClick} />;
}
