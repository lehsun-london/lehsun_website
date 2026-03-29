export const COOKIE_CONSENT_KEY = "lehsun_cookie_consent_v1";

export type ConsentValue = "granted" | "denied";

export function getStoredAnalyticsConsent(): ConsentValue | null {
  if (typeof window === "undefined") {
    return null;
  }

  try {
    const storedValue = window.localStorage.getItem(COOKIE_CONSENT_KEY);

    return storedValue === "granted" || storedValue === "denied"
      ? storedValue
      : null;
  } catch {
    return null;
  }
}
