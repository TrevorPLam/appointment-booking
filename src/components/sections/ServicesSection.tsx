// ServicesSection.tsx — Highlights key services with CTA to book page.

import Link from "next/link";

import { siteConfig } from "@/config/site";
import ServiceMenu from "@/components/ServiceMenu";
import { BookNowButton } from "@/components/StickyCTA";

const ServicesSection = () => (
  <section className="space-y-8">
    <div className="flex flex-col gap-3 md:flex-row md:items-center md:justify-between">
      <div>
        <p className="text-sm uppercase tracking-[0.3em] text-slate-400">Services</p>
        <h2 className="text-3xl font-semibold text-slate-900">Signature menu</h2>
        <p className="text-slate-600">{siteConfig.servicesPageCopy.introHeadline}</p>
      </div>
      <div className="flex flex-col gap-2 text-right text-sm text-slate-500">
        <BookNowButton variant="ghost" className="self-end" />
        <Link href="/services" className="text-brand-primary underline">
          View full service guide
        </Link>
      </div>
    </div>
    <ServiceMenu />
  </section>
);

export default ServicesSection;
