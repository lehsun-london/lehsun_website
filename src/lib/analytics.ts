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
  | "social"
  | "review_click";

export type LinkEventName =
  | "generate_lead"
  | "view_menu"
  | "select_content"
  | "click_social"
  | "click_review";

// Lead types for differentiating WhatsApp CTA intent in GA4
export type LeadType = "catering_enquiry" | "menu_enquiry" | "general";

export type LinkEventParams = {
  placement: string;
  destination_type: DestinationType;
  link_url: string;
  link_text?: string;
  section_id?: string;
  is_primary_cta: boolean;
  // GA4 recommended conversion params
  lead_type?: LeadType;
  value?: number;
  currency?: string;
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
  leadType?: LeadType;
  value?: number;
};

export type SectionViewParams = {
  section_id: string;
  section_name: string;
  section_order: number;
  debug_mode?: boolean;
};

export type FaqOpenParams = {
  question: string;
  faq_index: number;
  faq_variant: string;
  debug_mode?: boolean;
};

const eventNameByIntent: Record<TrackedLinkIntent, LinkEventName> = {
  lead: "generate_lead",
  menu: "view_menu",
  section_navigation: "select_content",
  social: "click_social",
  review_click: "click_review",
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

// eslint-disable-next-line @typescript-eslint/no-explicit-any
function trackEvent(eventName: string, params: Record<string, any>): void {
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
  const eventParams: LinkEventParams = {
    placement: params.placement,
    destination_type: params.destination_type,
    link_url: params.href,
    link_text: params.link_text,
    section_id: params.section_id,
    is_primary_cta: params.is_primary_cta,
    debug_mode: isDebugModeEnabled(),
  };

  if (params.leadType) {
    eventParams.lead_type = params.leadType;
  }

  if (params.value !== undefined) {
    eventParams.value = params.value;
    eventParams.currency = "GBP";
  }

  trackEvent(eventNameByIntent[params.intent], eventParams);
}

export function trackSectionView(params: SectionViewParams): void {
  trackEvent("view_section", {
    ...params,
    debug_mode: isDebugModeEnabled(),
  });
}

/** Fire when a FAQ accordion item is opened — strong buying intent signal. */
export function trackFaqOpen(params: FaqOpenParams): void {
  trackEvent("faq_open", {
    ...params,
    debug_mode: isDebugModeEnabled(),
  });
}

/** Fire on client-side route changes in Next.js App Router. */
export function trackPageView(path: string, title: string): void {
  trackEvent("page_view", {
    page_location: window.location.href,
    page_path: path,
    page_title: title,
    debug_mode: isDebugModeEnabled(),
  });
}
