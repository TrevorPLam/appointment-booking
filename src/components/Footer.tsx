// Footer.tsx — Wraps up with NAP, contact links, and quick nav.

import Link from "next/link";

import { siteConfig } from "@/config/site";
import ContactMethods from "@/components/ContactMethods";
import NAP from "@/components/NAP";

const footerLinks = [
  { href: "/policies", label: "Policies" },
  { href: "/privacy", label: "Privacy" },
  { href: "/terms", label: "Terms" },
];

const Footer = () => (
  <footer className="mt-16 border-t border-slate-200 bg-slate-50">
    <div className="container grid gap-10 py-12 md:grid-cols-[2fr,1fr]">
      <div className="space-y-6">
        <h3 className="text-3xl font-semibold text-slate-900">{siteConfig.businessName}</h3>
        <p className="max-w-xl text-slate-600">
          {siteConfig.tagline}
        </p>
        <ContactMethods />
      </div>
      <div className="space-y-6">
        <NAP />
        <div className="flex gap-4 text-sm text-slate-500">
          {footerLinks.map((link) => (
            <Link key={link.href} href={link.href} className="hover:text-slate-900">
              {link.label}
            </Link>
          ))}
        </div>
      </div>
    </div>
    <div className="border-t border-slate-200 py-6 text-center text-sm text-slate-500">
      © {new Date().getFullYear()} {siteConfig.businessName}. All rights reserved.
    </div>
  </footer>
);

export default Footer;
