import ContactMethods from "@/components/ContactMethods";
import PreBookingSelector from "@/components/PreBookingSelector";
import SchedulerEmbed from "@/components/SchedulerEmbed";
import { siteConfig } from "@/config/site";
import { buildPageMetadata } from "@/lib/seo";

export const metadata = buildPageMetadata({
  title: "Book",
  path: "/book",
});

const BookPage = () => (
  <div className="space-y-10">
    <header className="space-y-4">
      <p className="text-sm uppercase tracking-[0.3em] text-slate-400">Book</p>
      <h1 className="text-4xl font-semibold text-slate-900">Claim your seat in under two minutes.</h1>
      <p className="text-slate-600">
        Real-time availability plus concierge double-check before you arrive.
      </p>
    </header>
    <PreBookingSelector />
    <SchedulerEmbed />
    {siteConfig.bookingFallback.show && (
      <section className="rounded-3xl border border-slate-200 bg-white p-6 shadow-card">
        <h2 className="text-2xl font-semibold text-slate-900">
          Having trouble booking? Call/Text
        </h2>
        <p className="mt-2 text-slate-600">{siteConfig.bookingFallback.fallbackText}</p>
        {siteConfig.bookingFallback.allowCall || siteConfig.bookingFallback.allowSms ? (
          <div className="mt-4">
            <ContactMethods
              showCall={siteConfig.bookingFallback.allowCall}
              showSms={siteConfig.bookingFallback.allowSms}
              showEmail={false}
            />
          </div>
        ) : null}
      </section>
    )}
  </div>
);

export default BookPage;
