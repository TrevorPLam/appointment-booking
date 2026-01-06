import Link from "next/link";

import Testimonials from "@/components/Testimonials";
import { siteConfig } from "@/config/site";
import { buildPageMetadata } from "@/lib/seo";

export const metadata = buildPageMetadata({
  title: "Reviews",
  path: "/reviews",
});

const ReviewsPage = () => (
  <div className="space-y-8">
    <header className="space-y-4">
      <p className="text-sm uppercase tracking-[0.3em] text-slate-400">Reviews</p>
      <h1 className="text-4xl font-semibold text-slate-900">What guests share post-appointment</h1>
      <p className="text-slate-600">Pulled from Google, Yelp, and DM screenshots.</p>
    </header>
    <Testimonials />
    <div className="flex flex-wrap gap-4 text-sm text-slate-600">
      {siteConfig.reviews.reviewPlatformLinks.map((link) => (
        <Link key={link.label} href={link.url} className="underline">
          {link.label}
        </Link>
      ))}
    </div>
  </div>
);

export default ReviewsPage;
