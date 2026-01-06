// tracking.ts — Named wrappers for the standard analytics events.

import { trackEvent } from "@/lib/analytics";

export const trackCtaBookClick = (payload?: Record<string, unknown>) =>
  trackEvent("cta_book_click", payload);

export const trackPhoneClick = (payload?: Record<string, unknown>) =>
  trackEvent("phone_click", payload);

export const trackBookingEmbedLoaded = () =>
  trackEvent("booking_embed_loaded");

export const trackLeadFormSubmit = () =>
  trackEvent("lead_form_submit");

export const trackLeadFormSuccess = () =>
  trackEvent("lead_form_success");

export const trackLeadFormError = (payload?: Record<string, unknown>) =>
  trackEvent("lead_form_error", payload);
