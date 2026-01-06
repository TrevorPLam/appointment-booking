// CTASection.tsx — Final booking nudge with CTA + reassurance copy.

import { siteConfig } from "@/config/site";
import { BookNowButton, CallNowLink } from "@/components/StickyCTA";

const CTASection = () => (
  <section className="rounded-[32px] bg-slate-900 p-10 text-white">
    <div className="grid gap-6 md:grid-cols-2 md:items-center">
      <div>
        <p className="text-sm uppercase tracking-[0.3em] text-white/60">It&apos;s time</p>
        <h2 className="mt-3 text-4xl font-semibold">{siteConfig.copy.ctaSectionHeadline}</h2>
        <p className="mt-3 text-white/70">{siteConfig.copy.ctaSectionSubheadline}</p>
      </div>
      <div className="flex flex-col gap-3 md:items-end">
        <BookNowButton size="lg" className="w-full md:w-auto" />
        <CallNowLink className="w-full md:w-auto" />
      </div>
    </div>
  </section>
);

export default CTASection;
