"use client";

import { useEffect, useState } from "react";
import {
  COOKIE_CONSENT_KEY,
  type ConsentValue,
  getEffectiveAnalyticsConsent,
  getStoredAnalyticsConsent,
} from "@/lib/consent";

const COOKIE_BANNER_OPEN_EVENT = "lehsun:cookie-banner-open";

function updateAnalyticsConsent(value: ConsentValue) {
  if (typeof window === "undefined") {
    return;
  }

  if (typeof window.gtag === "function") {
    window.gtag("consent", "update", { analytics_storage: value });
  } else {
    window.dataLayer = window.dataLayer || [];
    // eslint-disable-next-line @typescript-eslint/no-unused-vars -- required for gtag arguments binding
    (function gtag(_a: string, _b: string, _c: object) {
      // eslint-disable-next-line prefer-rest-params
      window.dataLayer.push(arguments);
    })("consent", "update", { analytics_storage: value });
  }
}

export function openCookieBanner(): void {
  if (typeof window === "undefined") {
    return;
  }

  window.dispatchEvent(new CustomEvent(COOKIE_BANNER_OPEN_EVENT));
}

export function CookieConsentBanner() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const storedValue = getStoredAnalyticsConsent();

    updateAnalyticsConsent(getEffectiveAnalyticsConsent());

    // eslint-disable-next-line react-hooks/set-state-in-effect -- Visibility is initialized from client-only localStorage on mount.
    setIsVisible(!(storedValue === "granted" || storedValue === "denied"));

    const openHandler = () => {
      setIsVisible(true);
    };

    window.addEventListener(
      COOKIE_BANNER_OPEN_EVENT,
      openHandler as EventListener,
    );

    return () => {
      window.removeEventListener(
        COOKIE_BANNER_OPEN_EVENT,
        openHandler as EventListener,
      );
    };
  }, []);

  function handleAccept() {
    window.localStorage.setItem(COOKIE_CONSENT_KEY, "granted");
    updateAnalyticsConsent("granted");
    setIsVisible(false);
  }

  function handleReject() {
    window.localStorage.setItem(COOKIE_CONSENT_KEY, "denied");
    updateAnalyticsConsent("denied");
    setIsVisible(false);
  }

  if (!isVisible) {
    return null;
  }

  return (
    <div className="fixed inset-x-0 bottom-4 z-[60] px-4 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-3xl rounded-2xl border border-[#efcaa4] bg-[#fff8f1] p-4 shadow-2xl">
        <p className="text-sm text-slate-800 leading-relaxed">
          We use analytics cookies to understand site traffic and improve
          Lehsun. They are enabled by default, and you can reject them here at
          any time.
        </p>
        <div className="mt-3 flex flex-col-reverse gap-2 sm:flex-row sm:justify-end">
          <button
            className="rounded-full border border-slate-300 bg-white px-4 py-2 text-sm font-semibold text-slate-800 transition-colors hover:bg-slate-50"
            onClick={handleReject}
            type="button"
          >
            Reject
          </button>
          <button
            className="rounded-full bg-[#D9381E] px-4 py-2 text-sm font-semibold text-white transition-colors hover:bg-[#B52E18]"
            onClick={handleAccept}
            type="button"
          >
            Keep Enabled
          </button>
        </div>
      </div>
    </div>
  );
}
