import { siteConfig } from "@/config/site";
import { buildPageMetadata } from "@/lib/seo";

export const metadata = buildPageMetadata({
  title: "Policies",
  path: "/policies",
});

const PoliciesPage = () => (
  <div className="space-y-8">
    <header>
      <p className="text-sm uppercase tracking-[0.3em] text-slate-400">Policies</p>
      <h1 className="text-4xl font-semibold text-slate-900">Our studio policies</h1>
      <p className="mt-2 text-slate-600">Clear expectations keep the day smooth for everyone.</p>
    </header>
    <div className="space-y-6">
      <section className="rounded-3xl border border-slate-200 bg-white p-6 shadow-card">
        <h2 className="text-2xl font-semibold text-slate-900">Cancellation</h2>
        <p className="mt-2 text-slate-600">{siteConfig.policiesCopy.cancellation}</p>
      </section>
      <section className="rounded-3xl border border-slate-200 bg-white p-6 shadow-card">
        <h2 className="text-2xl font-semibold text-slate-900">No-Show</h2>
        <p className="mt-2 text-slate-600">{siteConfig.policiesCopy.noShow}</p>
      </section>
      <section className="rounded-3xl border border-slate-200 bg-white p-6 shadow-card">
        <h2 className="text-2xl font-semibold text-slate-900">Deposits</h2>
        <p className="mt-2 text-slate-600">{siteConfig.policiesCopy.deposits}</p>
      </section>
      <section className="rounded-3xl border border-slate-200 bg-white p-6 shadow-card">
        <h2 className="text-2xl font-semibold text-slate-900">Late arrivals</h2>
        <p className="mt-2 text-slate-600">{siteConfig.policiesCopy.latePolicy}</p>
      </section>
    </div>
  </div>
);

export default PoliciesPage;
