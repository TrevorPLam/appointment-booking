import ProofStack from "@/components/ProofStack";
import PortfolioSection from "@/components/sections/PortfolioSection";
import { siteConfig } from "@/config/site";
import { buildPageMetadata } from "@/lib/seo";

export const metadata = buildPageMetadata({
  title: "About",
  path: "/about",
});

const AboutPage = () => (
  <div className="space-y-10">
    <header className="space-y-4">
      <p className="text-sm uppercase tracking-[0.3em] text-slate-400">About</p>
      <h1 className="text-4xl font-semibold text-slate-900">
        Boutique energy. Editorial talent.
      </h1>
      <p className="text-slate-600">
        {siteConfig.copy.heroSubheadline}
      </p>
    </header>
    <section className="grid gap-6 rounded-3xl border border-slate-200 bg-white p-6 shadow-card md:grid-cols-2">
      <div>
        <h2 className="text-2xl font-semibold text-slate-900">Our philosophy</h2>
        <p className="mt-3 text-slate-600">
          We take on a limited number of appointments per day so every guest receives deep consultation,
          a custom finish plan, and a follow-up check.
        </p>
        <p className="mt-3 text-slate-600">
          The studio doubles as a creative lab with lighting, styling tools, and product partners vetted for healthy scalps.
        </p>
      </div>
      <ProofStack />
    </section>
    <section className="space-y-3">
      <h2 className="text-2xl font-semibold text-slate-900">Service area</h2>
      <p className="text-slate-600">
        We regularly host guests from {siteConfig.serviceAreaCities.join(", ")} thanks to easy parking and flexible hours.
      </p>
    </section>
    <PortfolioSection />
  </div>
);

export default AboutPage;
