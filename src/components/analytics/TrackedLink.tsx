"use client";

import type { ComponentPropsWithoutRef, MouseEvent } from "react";
import {
  type DestinationType,
  type LeadType,
  type TrackedLinkIntent,
  trackLinkInteraction,
} from "@/lib/analytics";

type AnchorProps = ComponentPropsWithoutRef<"a">;

type TrackedLinkProps = AnchorProps & {
  intent: TrackedLinkIntent;
  placement: string;
  destinationType: DestinationType;
  ctaText?: string;
  isPrimaryCta?: boolean;
  /** Differentiates catering vs menu WhatsApp leads in GA4 reports */
  leadType?: LeadType;
  /** Estimated GBP value of this conversion — used by Google Ads for ROAS */
  value?: number;
};

export function TrackedLink({
  intent,
  placement,
  destinationType,
  ctaText,
  isPrimaryCta = false,
  leadType,
  value,
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

    trackLinkInteraction({
      intent,
      placement,
      destination_type: destinationType,
      href: hrefValue,
      link_text: ctaText,
      section_id: sectionId,
      is_primary_cta: isPrimaryCta,
      leadType,
      value,
    });
  }

  return <a {...props} href={href} onClick={handleClick} />;
}
