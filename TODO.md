# TODO: Launch Readiness Checklist

## Content & Brand Inputs
- [ ] Populate every `TODO:INPUT` field inside `src/config/site.ts` (business info, services, reviews, FAQs, SEO keywords, booking URLs).
- [ ] Swap the placeholder assets in `public/portfolio/*.jpg` with real portfolio imagery (optimize for 1200×900 JPG/WebP).
- [ ] Finalize policy/legal copy across `/policies`, `/privacy`, and `/terms` so they match the studio’s actual terms.
- [ ] Produce a branded OG image referenced by `seo.ogImagePath` for richer link previews.

## Integrations & Automation
- [ ] Confirm the scheduler configuration (`bookingEmbed`) is correct for production (iframe/script/link) and test the `/book` routing flow end-to-end.
- [ ] Choose an analytics provider (`ga4` or `plausible`) and supply credentials so events from `src/lib/tracking.ts` reach the provider.
- [ ] Enable Cloudflare Turnstile by adding both `turnstileSiteKey` (client) and `turnstileSecretKey` (server) if additional spam protection is desired.
- [ ] Configure `leadRouting.webhookUrl` to forward `/api/lead` submissions to CRM/Zapier and replace `src/lib/rateLimit.ts` with a durable store (Redis/Upstash) per the `TODO:PROD` note.

## QA & Enhancements
- [ ] Run device and browser QA (iOS Safari, Android Chrome, desktop browsers) to validate sticky CTA behavior, responsive typography, and booking flow.
- [ ] Capture Lighthouse/PageSpeed reports for Home and Book pages; tune copy or imagery if any metric dips below target.
- [ ] Document deployment + content editing steps for non-technical operators (could live in the README or a short SOP doc).
