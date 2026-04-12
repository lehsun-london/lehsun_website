import { getEffectiveAnalyticsConsent } from "@/lib/consent";

export type DestinationType =
  | "anchor"
  | "whatsapp"
  | "maps"
  | "instagram"
  | "facebook"
  | "external";

export type TrackedLinkIntent =
  | "lead"
  | "menu"
  | "section_navigation"
  | "social";

export type LinkEventName =
  | "generate_lead"
  | "view_menu"
  | "select_content"
  | "click_social";

export type LinkEventParams = {
  placement: string;
  destination_type: DestinationType;
  link_url: string;
  link_text?: string;
  section_id?: string;
  is_primary_cta: boolean;
  debug_mode?: boolean;
};

export type LinkTrackInput = {
  intent: TrackedLinkIntent;
  placement: string;
  destination_type: DestinationType;
  href: string;
  link_text?: string;
  section_id?: string;
  is_primary_cta: boolean;
};

export type SectionViewParams = {
  section_id: string;
  section_name: string;
  section_order: number;
  debug_mode?: boolean;
};

const eventNameByIntent: Record<TrackedLinkIntent, LinkEventName> = {
  lead: "generate_lead",
  menu: "view_menu",
  section_navigation: "select_content",
  social: "click_social",
};

function isDebugModeEnabled(): boolean {
  return process.env.NODE_ENV !== "production";
}

function canTrackAnalytics(): boolean {
  if (typeof window === "undefined") {
    return false;
  }

  return getEffectiveAnalyticsConsent() === "granted";
}

function trackEvent(
  eventName: LinkEventName | "view_section",
  params: LinkEventParams | SectionViewParams,
): void {
  if (!canTrackAnalytics()) {
    return;
  }

  if (typeof window.gtag === "function") {
    window.gtag("event", eventName, params);
  } else {
    window.dataLayer = window.dataLayer || [];
    // eslint-disable-next-line @typescript-eslint/no-unused-vars -- required for gtag arguments binding
    (function gtag(_a: string, _b: string, _c: object) {
      // eslint-disable-next-line prefer-rest-params
      window.dataLayer.push(arguments);
    })("event", eventName, params);
  }
}

export function trackLinkInteraction(params: LinkTrackInput): void {
  trackEvent(eventNameByIntent[params.intent], {
    placement: params.placement,
    destination_type: params.destination_type,
    link_url: params.href,
    link_text: params.link_text,
    section_id: params.section_id,
    is_primary_cta: params.is_primary_cta,
    debug_mode: isDebugModeEnabled(),
  });
}

export function trackSectionView(params: SectionViewParams): void {
  trackEvent("view_section", {
    ...params,
    debug_mode: isDebugModeEnabled(),
  });
}
