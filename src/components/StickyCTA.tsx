"use client";

// StickyCTA.tsx — Persistent booking + call bar for every screen.

import Link from "next/link";
import { usePathname } from "next/navigation";

import { siteConfig } from "@/config/site";
import { trackCtaBookClick, trackPhoneClick } from "@/lib/tracking";
import { cn, formatPhoneHref } from "@/lib/utils";

type ButtonVariant = "primary" | "ghost";

type BookNowButtonProps = {
  variant?: ButtonVariant;
  className?: string;
  size?: "md" | "lg";
};

export const BookNowButton = ({
  variant = "primary",
  className,
  size = "md",
}: BookNowButtonProps) => (
  <Link
    href="/book"
    className={cn(
      "inline-flex items-center justify-center rounded-full font-semibold transition focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2",
      variant === "primary"
        ? "bg-brand-primary text-white shadow-card hover:bg-brand-secondary"
        : "border border-slate-400/30 bg-white/80 text-brand-secondary hover:border-brand-primary/40",
      size === "lg" ? "px-8 py-4 text-lg" : "px-6 py-3 text-base",
      className,
    )}
    onClick={() => trackCtaBookClick({ source: "book_button" })}
    prefetch
  >
    Book Now
  </Link>
);

type CallNowLinkProps = {
  className?: string;
};

export const CallNowLink = ({ className }: CallNowLinkProps) => (
  <a
    href={formatPhoneHref(siteConfig.phoneDial)}
    className={cn(
      "inline-flex items-center justify-center rounded-full border border-transparent bg-white/20 px-6 py-3 text-base font-semibold text-white backdrop-blur transition hover:bg-white/30 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-white",
      className,
    )}
    onClick={() => trackPhoneClick({ source: "sticky_bar" })}
  >
    Call {siteConfig.phoneDisplay}
  </a>
);

const StickyCTA = () => {
  const pathname = usePathname();
  const isBookPage = pathname === "/book";

  return (
    <div className="pointer-events-none fixed inset-x-0 bottom-0 z-50">
      <div className="container pointer-events-auto pb-4">
        <div className="glass-panel flex flex-col gap-3 rounded-2xl border border-slate-200/60 bg-slate-900 text-white shadow-2xl md:flex-row md:items-center md:justify-between md:px-6 md:py-4">
          <div className="flex flex-col text-sm text-white/80 md:text-base">
            <span className="font-semibold text-white">{siteConfig.businessName}</span>
            <span>Appointments available this week.</span>
          </div>
          <div className="flex flex-col gap-3 md:flex-row">
            <BookNowButton
              size="lg"
              className={cn("w-full md:w-auto", isBookPage && "bg-white text-brand-secondary hover:bg-white/90")}
            />
            <CallNowLink className="w-full md:w-auto" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default StickyCTA;
