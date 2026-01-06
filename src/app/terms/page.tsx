import { siteConfig } from "@/config/site";
import { buildPageMetadata } from "@/lib/seo";

export const metadata = buildPageMetadata({
  title: "Terms",
  path: "/terms",
});

const TermsPage = () => (
  <div className="space-y-6">
    <header>
      <p className="text-sm uppercase tracking-[0.3em] text-slate-400">Terms</p>
      <h1 className="text-4xl font-semibold text-slate-900">Terms & Conditions</h1>
      <p className="mt-2 text-slate-600">
        Outline the rules of engagement for using {siteConfig.businessName}&rsquo;s site and services.
      </p>
    </header>
    <section className="space-y-3 text-slate-600">
      <p>TODO:INPUT — Liability limitations for services performed.</p>
      <p>TODO:INPUT — Payment terms, adjustments, and refunds.</p>
      <p>TODO:INPUT — Copyright and content usage clauses.</p>
    </section>
  </div>
);

export default TermsPage;
