// Testimonials.tsx — Highlight customer stories with compact cards.

import { siteConfig } from "@/config/site";

const Testimonials = () => (
  <div className="grid gap-6 md:grid-cols-3">
    {siteConfig.reviews.highlightQuotes.map((quote) => (
      <article
        key={quote.text}
        className="rounded-3xl border border-slate-200 bg-white p-6 shadow-card"
      >
        <p className="mb-4 text-slate-700">“{quote.text}”</p>
        <p className="text-sm font-semibold text-slate-900">{quote.name ?? "Verified client"}</p>
      </article>
    ))}
  </div>
);

export default Testimonials;
