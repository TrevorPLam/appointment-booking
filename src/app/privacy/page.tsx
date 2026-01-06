import Link from "next/link";

import { siteConfig } from "@/config/site";
import { buildPageMetadata } from "@/lib/seo";

export const metadata = buildPageMetadata({
  title: "Privacy",
  path: "/privacy",
});

const PrivacyPage = () => (
  <div className="space-y-6">
    <header>
      <p className="text-sm uppercase tracking-[0.3em] text-slate-400">Privacy</p>
      <h1 className="text-4xl font-semibold text-slate-900">Privacy Policy</h1>
      <p className="mt-2 text-slate-600">
        {siteConfig.businessName} respects your inbox and never sells information. Replace this copy with your
        attorney-approved policy.
      </p>
    </header>
    <section className="space-y-3 text-slate-600">
      <p>
        TODO:INPUT — Outline the data you collect via booking apps, forms, and marketing platforms.
      </p>
      <p>
        TODO:INPUT — Explain how long you retain guest information and how to request deletion.
      </p>
      <p>
        TODO:INPUT — Reference compliance standards (CCPA, GDPR) that apply to your market.
      </p>
    </section>
    <p className="text-sm text-slate-500">
      Need a starter template? <Link href="https://www.termsfeed.com/blog/sample-privacy-policy-template/" className="underline">TermsFeed</Link> has solid references.
    </p>
  </div>
);

export default PrivacyPage;
