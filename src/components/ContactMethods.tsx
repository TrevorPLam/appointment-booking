"use client";

// ContactMethods.tsx — Interactive links for phone, sms, and email touchpoints.

import { siteConfig } from "@/config/site";
import { trackPhoneClick } from "@/lib/tracking";
import { cn, formatPhoneHref, formatSmsHref } from "@/lib/utils";

const baseClasses =
  "rounded-2xl border border-slate-200 bg-white p-5 transition hover:border-brand-primary hover:shadow-card";

interface ContactMethodsProps {
  className?: string;
  showCall?: boolean;
  showSms?: boolean;
  showEmail?: boolean;
}

const ContactMethods = ({
  className,
  showCall = true,
  showSms = true,
  showEmail = Boolean(siteConfig.email),
}: ContactMethodsProps) => (
  <div className={cn("grid gap-4 md:grid-cols-3", className)}>
    {showCall && (
      <a
        href={formatPhoneHref(siteConfig.phoneDial)}
        className={baseClasses}
        onClick={() => trackPhoneClick({ source: "contact_card", channel: "call" })}
      >
        <p className="text-sm uppercase tracking-wide text-slate-500">Call</p>
        <p className="text-2xl font-semibold text-slate-900">{siteConfig.phoneDisplay}</p>
      </a>
    )}
    {showSms && (
      <a
        href={formatSmsHref(siteConfig.phoneDial)}
        className={baseClasses}
        onClick={() => trackPhoneClick({ source: "contact_card", channel: "sms" })}
      >
        <p className="text-sm uppercase tracking-wide text-slate-500">Text</p>
        <p className="text-2xl font-semibold text-slate-900">{siteConfig.smsDisplay ?? siteConfig.phoneDisplay}</p>
      </a>
    )}
    {showEmail && siteConfig.email && (
      <a href={`mailto:${siteConfig.email}`} className={baseClasses}>
        <p className="text-sm uppercase tracking-wide text-slate-500">Email</p>
        <p className="text-xl font-semibold text-slate-900">{siteConfig.email}</p>
      </a>
    )}
  </div>
);

export default ContactMethods;
