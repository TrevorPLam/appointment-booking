// PortfolioSection.tsx — Six-image grid referencing local placeholders.

import Image from "next/image";

import { siteConfig } from "@/config/site";

const PortfolioSection = () => (
  <section className="space-y-6">
    <div>
      <p className="text-sm uppercase tracking-[0.3em] text-slate-400">Portfolio</p>
      <h2 className="text-3xl font-semibold text-slate-900">Fresh seats, weekly</h2>
    </div>
    <div className="grid gap-4 md:grid-cols-3">
      {siteConfig.portfolio.enabled &&
        siteConfig.portfolio.images.map((image) => (
          <Image
            key={image.src}
            src={image.src}
            alt={image.alt}
            width={800}
            height={600}
            className="h-64 w-full rounded-3xl object-cover"
          />
        ))}
    </div>
  </section>
);

export default PortfolioSection;
