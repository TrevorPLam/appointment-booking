import ContactMethods from "@/components/ContactMethods";
import LeadForm from "@/components/LeadForm";
import NAP from "@/components/NAP";
import { siteConfig } from "@/config/site";
import { buildPageMetadata } from "@/lib/seo";

export const metadata = buildPageMetadata({
  title: "Contact",
  path: "/contact",
});

const ContactPage = () => (
  <div className="space-y-10">
    <header className="space-y-4">
      <p className="text-sm uppercase tracking-[0.3em] text-slate-400">Contact</p>
      <h1 className="text-4xl font-semibold text-slate-900">We&apos;re quick on the reply.</h1>
      <p className="text-slate-600">
        Call, text, or send the form below — we reply within one business day.
      </p>
    </header>
    <ContactMethods />
    <div className="grid gap-6 md:grid-cols-[1.5fr,1fr]">
      <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-card">
        <LeadForm />
      </div>
      <div className="rounded-3xl border border-slate-200 bg-slate-50 p-6">
        <NAP />
        {siteConfig.email && (
          <p className="mt-4 text-sm text-slate-600">
            Prefer email? Reach us at {siteConfig.email}
          </p>
        )}
      </div>
    </div>
  </div>
);

export default ContactPage;
