## Archetype 1 — Appointment Booking (Single Location)

Production-ready marketing + booking template for barbers, nails, lashes, wellness, PT, tutoring, coaching, and other appointment-first service businesses. Mobile-first, config-driven, and optimized for conversions with a persistent "Book Now" CTA across the entire stack.

### Stack
- Next.js 16 (App Router) + TypeScript
- Tailwind CSS 3.4 with custom theme tokens
- Edge-ready `/api/lead` route with honeypot, rate limiting, and Cloudflare Turnstile seam
- Devcontainer for turnkey GitHub Codespaces onboarding

### Project Layout
- `src/app` — routes, layout, metadata endpoints, booking page, lead API
- `src/components` — global UI primitives (header/footer, CTA, forms, scheduler) + homepage sections
- `src/config/site.ts` — **single source of truth** for all content, booking behavior, analytics, and SEO
- `src/lib` — analytics shim, tracking helpers, JSON-LD builders, SEO utilities, rate limiter, shared utils
- `public/portfolio` — six branded JPEG placeholders for the required gallery grid

## Getting Started

```bash
npm install           # install dependencies
npm run dev           # start Next.js locally (http://localhost:3000)
npm run lint          # strict ESLint (ts/tsx only)
npm run type-check    # isolated TypeScript verification
npm run build         # production build (Turbopack)
```

Codespaces/devcontainer users can open the repo and run `npm install` — Node 20 + git are pre-provisioned via `.devcontainer/devcontainer.json`.

## Configure the Site (src/config/site.ts)
Everything on the site reads from `siteConfig`. Replace every `TODO:INPUT` placeholder before launch.

Key sections:
- **Business profile** — `baseUrl`, `businessName`, `tagline`, `address`, `hours`, `serviceAreaCities`, `phone`/`email`. Keep `baseUrl` as a valid https URL for metadata + sitemap.
- **Services** — `services` array powers cards on multiple pages. `servicesPageCopy.introParagraphs` must include ≥2 paragraphs for the `/services` hero.
- **Booking** — `bookingEmbed` chooses between `iframe`, `script`, or `link` (handled by `SchedulerEmbed`). `preBookingRouting` toggles the optional chip selector on `/book`. `bookingFallback` drives the "Having trouble booking?" block with call/text toggles.
- **Content blocks** — `copy.hero*`, `copy.ctaSection*`, `portfolio.images`, `reviews`, `faqs`, `policiesCopy`.
- **SEO** — `seo.siteTitle`, `titleTemplate`, `metaDescription`, `primaryServiceKeywords`, `ogImagePath` (point to `/public`).
- **Analytics & Spam** —
  - Set `analytics.provider` to `"ga4"` and supply `ga4MeasurementId` to auto-mount Google Analytics via `@next/third-parties`.
  - Enable Cloudflare Turnstile by toggling `spamProtection.turnstileEnabled` and filling both `turnstileSiteKey` + `turnstileSecretKey` (currently `TODO:INPUT`).
- **Lead routing** — Provide `leadRouting.webhookUrl` (HTTPS) to forward payloads server-side; fallback logs leads for manual follow-up.

> **TODO:PROD** — `src/lib/rateLimit.ts` ships with an in-memory bucket. Swap in Redis/Upstash (or another shared store) before running behind multiple instances.

## UX & Feature Highlights
- Sticky `StickyCTA` bar keeps "Book Now" + "Call" visible on mobile/desktop with safe-area padding.
- Homepage strictly follows: Hero → Social Proof → Services → Portfolio (6× `next/image`) → FAQ → CTA.
- `/book` keeps the scheduler above the fold, supports optional routing chips, and always shows the fallback "Having trouble booking? Call/Text." card.
- `LeadForm` adds honeypot, analytics events (`lead_form_*`), and Turnstile hint text when keys are missing.
- `robots.ts` registers the sitemap, `sitemap.ts` enumerates all static routes, and `JsonLd` injects LocalBusiness + Website schemas from config.

## QA Checklist (Stage C)
- [x] `npm run dev` (terminated after verifying readiness)
- [x] `npm run lint`
- [x] `npm run build`
- [x] All required routes render with no runtime errors
- [x] Sticky CTA visible on every viewport; body padding prevents overlap
- [x] `/book` shows scheduler first and fallback assistance card
- [x] Homepage uses mandated section order with 6-image grid
- [x] `LeadForm` honeypot + rate limit + Turnstile seam in `/api/lead`
- [x] `robots.txt` + `sitemap.xml` sourced from `siteConfig`
- [x] Analytics events wired (`cta_book_click`, `phone_click`, booking + lead events)

## Next Steps
1. Populate every `TODO:INPUT` inside `src/config/site.ts`, including booking URLs, SEO copy, reviews, FAQs, and policy text.
2. Replace `public/portfolio/*.jpg` with real, optimized imagery and supply a branded OG graphic referenced by `seo.ogImagePath`.
3. Validate the live scheduler (`bookingEmbed`) configuration and optional pre-book routing before launch.
4. Choose an analytics provider (GA4 or Plausible), add credentials, and confirm events from `src/lib/tracking.ts` arrive.
5. Enable Cloudflare Turnstile by setting both site + secret keys if enhanced spam protection is needed.
6. Configure `leadRouting.webhookUrl` and upgrade `src/lib/rateLimit.ts` to a durable store (Redis/Upstash) per the `TODO:PROD` note.
7. Run device/browser QA plus Lighthouse audits on Home + Book pages to verify sticky CTA behavior, responsiveness, and performance.
8. Document deployment + content editing steps for operators (can live in this README or an SOP).

After completing the checklist, redeploy (`npm run build && npm run start`) or push to Vercel for instant hosting.
