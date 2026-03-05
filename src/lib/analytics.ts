export type CtaEventName =
  | "click_plan_event"
  | "click_view_menu"
  | "click_scroll_section"
  | "click_whatsapp_order"
  | "click_whatsapp_message"
  | "click_whatsapp_quote"
  | "click_social"
  | "click_contact_us";

export type DestinationType =
  | "anchor"
  | "whatsapp"
  | "maps"
  | "instagram"
  | "facebook"
  | "external";

export type CtaEventParams = {
  placement: string;
  destination_type: DestinationType;
  href: string;
  cta_text?: string;
  section_id?: string;
  link_url: string;
  link_text?: string;
  outbound: boolean;
  transport_type: "beacon";
};

type CtaTrackInput = Omit<
  CtaEventParams,
  "link_url" | "link_text" | "outbound" | "transport_type"
> &
  Partial<Pick<CtaEventParams, "cta_text" | "section_id">>;

export function trackCtaClick(
  eventName: CtaEventName,
  params: CtaTrackInput,
): void {
  if (typeof window === "undefined" || typeof window.gtag !== "function") {
    return;
  }

  const finalParams: CtaEventParams = {
    ...params,
    link_url: params.href,
    link_text: params.cta_text,
    outbound: params.destination_type !== "anchor",
    transport_type: "beacon",
  };

  window.gtag("event", eventName, finalParams);
}
