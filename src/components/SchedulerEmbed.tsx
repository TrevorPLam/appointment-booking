"use client";

// SchedulerEmbed.tsx — Switches between iframe/script/link booking modes.

import { useEffect, useRef } from "react";

import { siteConfig } from "@/config/site";
import { trackBookingEmbedLoaded, trackCtaBookClick } from "@/lib/tracking";

const SchedulerEmbed = () => {
  const { bookingEmbed } = siteConfig;
  const scriptContainerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (bookingEmbed.mode !== "script") return;
    if (!scriptContainerRef.current) return;

    const scriptId = "booking-script-loader";
    if (document.getElementById(scriptId)) return;

    const script = document.createElement("script");
    script.id = scriptId;
    script.src = bookingEmbed.scriptSrc;
    script.async = true;
    script.onload = () => trackBookingEmbedLoaded();
    script.onerror = () => console.error("Booking script failed to load.");
    document.body.appendChild(script);

    return () => {
      script.remove();
    };
  }, [bookingEmbed]);

  if (bookingEmbed.mode === "iframe") {
    return (
      <iframe
        src={bookingEmbed.iframeUrl}
        title="Booking"
        className="h-[700px] w-full rounded-3xl border border-slate-200 shadow-card"
        loading="lazy"
        onLoad={() => trackBookingEmbedLoaded()}
      />
    );
  }

  if (bookingEmbed.mode === "script") {
    return (
      <div>
        <div
          id={bookingEmbed.scriptContainerId}
          ref={scriptContainerRef}
          className="rounded-3xl border border-dashed border-slate-300 p-6"
        />
        <p className="mt-4 text-sm text-slate-500">Waiting for scheduler...</p>
      </div>
    );
  }

  return (
    <a
      href={bookingEmbed.linkUrl}
      target="_blank"
      rel="noreferrer"
      onClick={() => trackCtaBookClick({ source: "scheduler_link" })}
      className="inline-flex items-center rounded-full bg-brand-primary px-8 py-4 text-lg font-semibold text-white shadow-card transition hover:bg-brand-secondary"
    >
      {bookingEmbed.linkLabel ?? "Launch booking portal"}
    </a>
  );
};

export default SchedulerEmbed;
