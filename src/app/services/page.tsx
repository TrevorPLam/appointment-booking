import ServiceMenu from "@/components/ServiceMenu";
import { siteConfig } from "@/config/site";
import { buildPageMetadata } from "@/lib/seo";

export const metadata = buildPageMetadata({
  title: "Services",
  path: "/services",
});

const ServicesPage = () => (
  <div className="space-y-8">
    <header className="space-y-4">
      <p className="text-sm uppercase tracking-[0.3em] text-slate-400">Services</p>
      <h1 className="text-4xl font-semibold text-slate-900">
        {siteConfig.servicesPageCopy.introHeadline}
      </h1>
      <div className="space-y-4 text-lg text-slate-600">
        {siteConfig.servicesPageCopy.introParagraphs.map((paragraph) => (
          <p key={paragraph}>{paragraph}</p>
        ))}
      </div>
    </header>
    <ServiceMenu />
  </div>
);

export default ServicesPage;
