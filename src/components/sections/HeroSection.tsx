// HeroSection.tsx — Above-the-fold pitch with CTA + proof row.

import Image from "next/image";

import { siteConfig } from "@/config/site";
import ProofStack from "@/components/ProofStack";
import { BookNowButton, CallNowLink } from "@/components/StickyCTA";

const HeroSection = () => (
  <section className="relative isolate overflow-hidden rounded-[40px] bg-gradient-to-br from-slate-900 via-slate-800 to-brand-secondary text-white">
    <div className="container grid gap-12 py-16 md:grid-cols-2">
      <div className="space-y-6">
        <p className="inline-flex items-center rounded-full bg-white/10 px-4 py-1 text-sm uppercase tracking-[0.3em]">
          {siteConfig.tagline}
        </p>
        <h1 className="text-4xl font-semibold leading-tight md:text-5xl">
          {siteConfig.copy.heroHeadline}
        </h1>
        <p className="text-lg text-white/80">{siteConfig.copy.heroSubheadline}</p>
        <ul className="grid gap-3 text-sm text-white/70">
          {siteConfig.copy.heroBullets.map((bullet) => (
            <li key={bullet} className="flex items-center gap-2">
              <span className="h-1.5 w-8 rounded-full bg-brand-primary" />
              {bullet}
            </li>
          ))}
        </ul>
        <div className="flex flex-col gap-3 sm:flex-row">
          <BookNowButton variant="primary" size="lg" className="w-full sm:w-auto" />
          <CallNowLink className="w-full sm:w-auto border border-white/30 bg-transparent text-center" />
        </div>
        <div className="text-sm text-white/70">
          Booking proof: instant confirmations + concierge text support.
        </div>
      </div>
      <div className="relative">
        <div className="absolute inset-0 rounded-[40px] bg-brand-primary/20 blur-3xl" />
        <div className="relative rounded-[32px] bg-white/10 p-6 shadow-card backdrop-blur">
          <Image
            src="/portfolio/01.jpg"
            width={800}
            height={600}
            alt="Studio work sample"
            className="h-64 w-full rounded-3xl object-cover"
            priority
          />
          <div className="mt-6">
            <ProofStack />
          </div>
        </div>
      </div>
    </div>
  </section>
);

export default HeroSection;
