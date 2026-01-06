"use client";

// PreBookingSelector.tsx — Lightweight routing helper ahead of the scheduler.

import { useState } from "react";

import { siteConfig } from "@/config/site";
import { trackCtaBookClick } from "@/lib/tracking";
import { cn } from "@/lib/utils";

const PreBookingSelector = () => {
  const routing = siteConfig.preBookingRouting;
  const [selection, setSelection] = useState<string | null>(null);

  if (!routing.enabled || routing.options.length === 0) {
    return null;
  }

  return (
    <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-card">
      <div className="flex flex-col gap-3 md:flex-row md:items-center md:justify-between">
        <div>
          <p className="text-sm uppercase tracking-[0.3em] text-slate-400">Optional step</p>
          <h2 className="text-2xl font-semibold text-slate-900">What are you booking today?</h2>
        </div>
        <button
          type="button"
          className="text-sm font-semibold text-brand-primary"
          onClick={() => {
            setSelection(null);
            trackCtaBookClick({ source: "pre-book", action: "skip" });
          }}
        >
          Skip this step
        </button>
      </div>
      <div className="mt-4 flex flex-wrap gap-3">
        {routing.options.map((option) => (
          <button
            key={option}
            type="button"
            className={cn(
              "rounded-full border px-5 py-2 text-sm font-semibold transition",
              selection === option
                ? "border-brand-primary bg-brand-primary/10 text-brand-primary"
                : "border-slate-200 text-slate-600 hover:border-brand-primary",
            )}
            onClick={() => {
              setSelection(option);
              trackCtaBookClick({ source: "pre-book", option });
            }}
          >
            {option}
          </button>
        ))}
      </div>
      {selection && (
        <p className="mt-4 rounded-2xl bg-slate-50 p-3 text-sm text-slate-600">
          Great! Your scheduler view will highlight {selection} times first.
        </p>
      )}
    </div>
  );
};

export default PreBookingSelector;
