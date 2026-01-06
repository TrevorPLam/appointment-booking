"use client";

// LeadForm.tsx — Lightweight form with honeypot + analytics tracking.

import { FormEvent, useState } from "react";

import { siteConfig } from "@/config/site";
import {
  trackLeadFormError,
  trackLeadFormSubmit,
  trackLeadFormSuccess,
} from "@/lib/tracking";

const LeadForm = () => {
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [message, setMessage] = useState<string>("");

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setStatus("loading");
    setMessage("");
    trackLeadFormSubmit();

    const formData = new FormData(event.currentTarget);
    const payload = {
      name: formData.get("name")?.toString() ?? "",
      email: formData.get("email")?.toString() ?? "",
      phone: formData.get("phone")?.toString() ?? "",
      serviceInterest: formData.get("serviceInterest")?.toString() ?? "",
      message: formData.get("message")?.toString() ?? "",
      preferredContact: formData.get("preferredContact")?.toString() ?? "",
      honeypotField: formData.get("company")?.toString() ?? "",
      turnstileToken: formData.get("cf-turnstile-response")?.toString(),
    };

    try {
      const response = await fetch("/api/lead", {
        method: "POST",
        headers: { "content-type": "application/json" },
        body: JSON.stringify(payload),
      });

      if (!response.ok) {
        const errorData = (await response.json().catch(() => ({}))) as {
          error?: string;
        };
        throw new Error(errorData.error ?? "Submission failed");
      }

      event.currentTarget.reset();
      setStatus("success");
      setMessage("Thanks! We will confirm within one business day.");
      trackLeadFormSuccess();
    } catch (error) {
      const description = error instanceof Error ? error.message : "Unexpected error";
      setStatus("error");
      setMessage(description);
      trackLeadFormError({ description });
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4" aria-live="polite">
      <input type="text" name="company" className="hidden" tabIndex={-1} autoComplete="off" />
      <div className="grid gap-4 md:grid-cols-2">
        <label className="space-y-2 text-sm font-medium text-slate-700">
          Name
          <input
            name="name"
            type="text"
            required
            className="w-full rounded-2xl border border-slate-200 bg-white px-4 py-3 focus:border-brand-primary focus:outline-none"
          />
        </label>
        <label className="space-y-2 text-sm font-medium text-slate-700">
          Email
          <input
            name="email"
            type="email"
            className="w-full rounded-2xl border border-slate-200 bg-white px-4 py-3 focus:border-brand-primary focus:outline-none"
          />
        </label>
        <label className="space-y-2 text-sm font-medium text-slate-700">
          Phone
          <input
            name="phone"
            type="tel"
            className="w-full rounded-2xl border border-slate-200 bg-white px-4 py-3 focus:border-brand-primary focus:outline-none"
          />
        </label>
        <label className="space-y-2 text-sm font-medium text-slate-700">
          Preferred Contact
          <select
            name="preferredContact"
            className="w-full rounded-2xl border border-slate-200 bg-white px-4 py-3 focus:border-brand-primary focus:outline-none"
          >
            <option value="call">Call</option>
            <option value="sms">Text</option>
            <option value="email">Email</option>
          </select>
        </label>
      </div>
      <label className="space-y-2 text-sm font-medium text-slate-700">
        Service Interest
        <input
          name="serviceInterest"
          type="text"
          placeholder="Color refresh, haircut, styling..."
          className="w-full rounded-2xl border border-slate-200 bg-white px-4 py-3 focus:border-brand-primary focus:outline-none"
        />
      </label>
      <label className="space-y-2 text-sm font-medium text-slate-700">
        Message
        <textarea
          name="message"
          rows={4}
          className="w-full rounded-2xl border border-slate-200 bg-white px-4 py-3 focus:border-brand-primary focus:outline-none"
        />
      </label>
      {siteConfig.spamProtection.turnstileEnabled && !siteConfig.spamProtection.turnstileSiteKey && (
        <p className="rounded-2xl border border-amber-200 bg-amber-50 p-3 text-sm text-amber-800">
          TODO:INPUT — add the Cloudflare Turnstile site key to siteConfig to render the widget here.
        </p>
      )}
      <button
        type="submit"
        disabled={status === "loading"}
        className="w-full rounded-full bg-brand-primary py-3 text-lg font-semibold text-white transition hover:bg-brand-secondary disabled:cursor-not-allowed disabled:opacity-70"
      >
        {status === "loading" ? "Sending..." : "Send request"}
      </button>
      {message && (
        <p
          className={
            status === "success" ? "text-emerald-600" : "text-rose-600"
          }
        >
          {message}
        </p>
      )}
    </form>
  );
};

export default LeadForm;
