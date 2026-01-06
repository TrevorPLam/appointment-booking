// Header.tsx — Sticky site navigation with rapid booking CTA.

import Link from "next/link";

import { siteConfig } from "@/config/site";
import { BookNowButton } from "@/components/StickyCTA";
import { cn } from "@/lib/utils";

const links = [
  { href: "/services", label: "Services" },
  { href: "/book", label: "Book" },
  { href: "/about", label: "About" },
  { href: "/reviews", label: "Reviews" },
  { href: "/contact", label: "Contact" },
];

const Header = () => {
  return (
    <header className="sticky top-0 z-40 border-b border-white/20 bg-white/80 backdrop-blur">
      <div className="container flex items-center justify-between py-4">
        <Link href="/" className="flex flex-col font-semibold text-slate-900">
          <span className="text-lg uppercase tracking-wider">{siteConfig.businessName}</span>
          <span className="text-xs font-normal text-slate-500">
            {siteConfig.tagline}
          </span>
        </Link>
        <nav className="hidden items-center gap-6 text-sm font-medium text-slate-600 md:flex">
          {links.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={cn(
                "transition hover:text-slate-900",
                link.href === "/book" && "font-semibold text-slate-900",
              )}
            >
              {link.label}
            </Link>
          ))}
        </nav>
        <div className="hidden md:block">
          <BookNowButton />
        </div>
      </div>
    </header>
  );
};

export default Header;
