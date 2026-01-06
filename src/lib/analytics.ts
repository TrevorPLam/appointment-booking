// analytics.ts — Centralized analytics helpers with optional providers.

import { siteConfig } from "@/config/site";

type EventPayload = Record<string, unknown> | undefined;

declare global {
  interface Window {
    dataLayer?: Record<string, unknown>[];
    plausible?: (event: string, payload?: { props?: Record<string, unknown> }) => void;
  }
}

export const trackEvent = (eventName: string, payload?: EventPayload) => {
  console.log(`[analytics] ${eventName}`, payload ?? {});

  if (typeof window === "undefined") return;

  const provider = siteConfig.analytics;

  if (provider.provider === "ga4") {
    window.dataLayer = window.dataLayer || [];
    window.dataLayer.push({ event: eventName, ...payload });
  }

  if (provider.provider === "plausible") {
    window.plausible?.(eventName, { props: payload });
  }
};
