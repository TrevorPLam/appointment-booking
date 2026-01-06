// SocialProofSection.tsx — Testimonials plus platform links.

import Link from "next/link";

import { siteConfig } from "@/config/site";
import Testimonials from "@/components/Testimonials";

const SocialProofSection = () => (
  <section className="space-y-8">
    <div className="flex flex-col gap-3 md:flex-row md:items-center md:justify-between">
      <div>
        <p className="text-sm uppercase tracking-[0.3em] text-slate-400">Proof</p>
        <h2 className="text-3xl font-semibold text-slate-900">Reviews from the fam</h2>
      </div>
      <div className="flex flex-wrap gap-3 text-sm text-slate-600">
        {siteConfig.reviews.reviewPlatformLinks.map((platform) => (
          <Link key={platform.label} href={platform.url} className="rounded-full border border-slate-200 px-4 py-2 hover:border-brand-primary">
            {platform.label}
          </Link>
        ))}
      </div>
    </div>
    <Testimonials />
  </section>
);

export default SocialProofSection;
