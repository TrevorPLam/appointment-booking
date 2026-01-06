// FAQSection.tsx — Reuses FAQ component with config-driven list.

import { siteConfig } from "@/config/site";
import FAQ from "@/components/FAQ";

const FAQSection = () => (
  <section className="space-y-6">
    <div>
      <p className="text-sm uppercase tracking-[0.3em] text-slate-400">FAQ</p>
      <h2 className="text-3xl font-semibold text-slate-900">Answers before you even ask</h2>
    </div>
    <FAQ items={siteConfig.faqs.slice(0, 6)} />
  </section>
);

export default FAQSection;
