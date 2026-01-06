// ServiceMenu.tsx — Summarizes services with pricing cues.

import { siteConfig } from "@/config/site";

const ServiceMenu = () => (
  <div className="grid gap-4 md:grid-cols-3">
    {siteConfig.services.map((service) => (
      <article
        key={service.name}
        className="rounded-3xl border border-slate-200 bg-white p-6 shadow-card"
      >
        <p className="text-xs uppercase tracking-[0.2em] text-slate-400">{service.category}</p>
        <h3 className="mt-2 text-2xl font-semibold text-slate-900">{service.name}</h3>
        {service.description && <p className="mt-2 text-slate-600">{service.description}</p>}
        <div className="mt-4 flex items-center justify-between text-sm text-slate-500">
          {service.durationMinutes && <span>{service.durationMinutes} min</span>}
          {service.priceRange && <span>{service.priceRange}</span>}
        </div>
      </article>
    ))}
  </div>
);

export default ServiceMenu;
