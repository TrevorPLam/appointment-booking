// site.ts — Single source of truth for business content and behavior.

export type BookingEmbedConfig =
  | { mode: "iframe"; iframeUrl: string }
  | { mode: "script"; scriptSrc: string; scriptContainerId: string }
  | { mode: "link"; linkUrl: string; linkLabel?: string };

export type AnalyticsConfig =
  | { provider: "none" }
  | { provider: "ga4"; ga4MeasurementId: string }
  | { provider: "plausible"; plausibleDomain: string };

export type SpamProtectionConfig = {
  turnstileEnabled: boolean;
  turnstileSiteKey?: string;
  turnstileSecretKey?: string;
};

export type CopyBlocks = {
  heroHeadline: string;
  heroSubheadline: string;
  heroBullets: [string, string, string];
  ctaSectionHeadline: string;
  ctaSectionSubheadline: string;
};

export type ServicesPageCopy = {
  introHeadline: string;
  introParagraphs: [string, string, ...string[]];
};

export type PreBookingRouting = {
  enabled: boolean;
  options: string[];
};

export type BookingFallback = {
  show: boolean;
  fallbackText: string;
  allowCall: boolean;
  allowSms: boolean;
};

export type Portfolio = {
  enabled: boolean;
  images: { src: string; alt: string }[];
};

export interface SiteConfig {
  baseUrl: string;
  businessName: string;
  tagline: string;
  phoneDisplay: string;
  phoneDial: string;
  smsDisplay?: string;
  email?: string;
  address:
    | { serviceAreaOnly: true }
    | { line1: string; line2?: string; city: string; state: string; zip: string };
  hours: { day: string; open: string; close: string; closed?: boolean }[];
  serviceAreaCities: string[];
  services: {
    name: string;
    durationMinutes?: number;
    priceRange?: string;
    description?: string;
    category?: string;
  }[];
  servicesPageCopy: ServicesPageCopy;
  bookingEmbed: BookingEmbedConfig;
  bookingFallback: BookingFallback;
  preBookingRouting: PreBookingRouting;
  portfolio: Portfolio;
  proof: {
    yearsInBusiness?: string;
    credentials?: string[];
    guarantees?: string[];
  };
  reviews: {
    highlightQuotes: { name?: string; text: string }[];
    reviewPlatformLinks: { label: string; url: string }[];
  };
  faqs: { q: string; a: string }[];
  policiesCopy: {
    cancellation: string;
    noShow: string;
    deposits: string;
    latePolicy: string;
  };
  leadRouting: { webhookUrl?: string };
  seo: {
    siteTitle: string;
    titleTemplate: string;
    metaDescription: string;
    primaryServiceKeywords: string[];
    ogImagePath?: string;
  };
  copy: CopyBlocks;
  analytics: AnalyticsConfig;
  spamProtection: SpamProtectionConfig;
}

export const siteConfig: SiteConfig = {
  baseUrl: "https://TODO-INPUT.com",
  businessName: "TODO:INPUT Studio",
  tagline: "TODO:INPUT signature experience",
  phoneDisplay: "(555) 000-1234",
  phoneDial: "+15550001234",
  smsDisplay: "Text (555) 000-1234",
  email: "hello@TODO-INPUT.com",
  address: {
    line1: "TODO:INPUT Street",
    city: "TODO:INPUT City",
    state: "CA",
    zip: "90000",
  },
  hours: [
    { day: "Monday", open: "09:00", close: "18:00" },
    { day: "Tuesday", open: "09:00", close: "18:00" },
    { day: "Wednesday", open: "09:00", close: "18:00" },
    { day: "Thursday", open: "09:00", close: "18:00" },
    { day: "Friday", open: "09:00", close: "18:00" },
    { day: "Saturday", open: "10:00", close: "15:00" },
    { day: "Sunday", open: "00:00", close: "00:00", closed: true },
  ],
  serviceAreaCities: [
    "TODO:INPUT City",
    "Neighboring City",
    "Additional Metro",
  ],
  services: [
    {
      name: "Precision Haircut",
      durationMinutes: 60,
      priceRange: "$75+",
      description: "Detailed consultation, cut, and finish for any texture.",
      category: "Cut",
    },
    {
      name: "Luxury Color",
      durationMinutes: 120,
      priceRange: "$180+",
      description: "Customized color, gloss, and deep hydration treatment.",
      category: "Color",
    },
    {
      name: "Signature Blowout",
      durationMinutes: 45,
      priceRange: "$55+",
      description: "Smooth, polished styling with heat protection.",
      category: "Styling",
    },
  ],
  servicesPageCopy: {
    introHeadline: "Every appointment is a personalized ritual.",
    introParagraphs: [
      "Our studio combines advanced techniques with thoughtful hospitality so every visit feels dialed-in and unrushed.",
      "Choose a core service or build a custom session. Every booking includes a detailed consultation and aftercare plan.",
    ],
  },
  bookingEmbed: {
    mode: "iframe",
    iframeUrl: "https://booking.TODO-INPUT.com",
  },
  bookingFallback: {
    show: true,
    fallbackText: "Having trouble booking online? We can finalize your appointment by phone or text in minutes.",
    allowCall: true,
    allowSms: true,
  },
  preBookingRouting: {
    enabled: false,
    options: [],
  },
  portfolio: {
    enabled: true,
    images: [
      { src: "/portfolio/01.jpg", alt: "Creative color transformation" },
      { src: "/portfolio/02.jpg", alt: "Precision fade cut" },
      { src: "/portfolio/03.jpg", alt: "Formal styling" },
      { src: "/portfolio/04.jpg", alt: "Healthy natural curls" },
      { src: "/portfolio/05.jpg", alt: "Protective style" },
      { src: "/portfolio/06.jpg", alt: "Editorial finish" },
    ],
  },
  proof: {
    yearsInBusiness: "10+ years",
    credentials: [
      "TODO:INPUT Licensed Cosmetologist",
      "TODO:INPUT Extension Certified",
    ],
    guarantees: [
      "48-hr adjustment guarantee",
      "Premium product promise",
    ],
  },
  reviews: {
    highlightQuotes: [
      {
        name: "Morgan P.",
        text: "They mapped out my routine, color, and care plan like a stylist & coach in one.",
      },
      {
        name: "Jordan W.",
        text: "Booking is effortless and the results are consistent every single visit.",
      },
      {
        name: "Sasha K.",
        text: "The studio feels resort-level but still warm and neighborhood friendly.",
      },
    ],
    reviewPlatformLinks: [
      { label: "Google Reviews", url: "https://reviews.TODO-INPUT.com/google" },
      { label: "Yelp", url: "https://reviews.TODO-INPUT.com/yelp" },
      { label: "Instagram", url: "https://instagram.com/TODOINPUT" },
    ],
  },
  faqs: [
    {
      q: "How early should I arrive?",
      a: "Arrive 5 minutes ahead so we can begin with refreshments and your consultation notes.",
    },
    {
      q: "What is the cancellation policy?",
      a: "We request 24 hours notice to release your stylist. Late cancellations may incur 50% of the service.",
    },
    {
      q: "Do you offer group or event styling?",
      a: "Yes. Submit the lead form with your event date and we will confirm availability within one business day.",
    },
  ],
  policiesCopy: {
    cancellation: "24 hours notice required to avoid fees.",
    noShow: "No-shows are charged 100% of the scheduled service total.",
    deposits: "Color sessions over 2 hours require a 25% deposit.",
    latePolicy: "After 15 minutes we may need to adjust or reschedule services to stay on time.",
  },
  leadRouting: {
    webhookUrl: undefined,
  },
  seo: {
    siteTitle: "TODO:INPUT Studio",
    titleTemplate: "%s | TODO:INPUT Studio",
    metaDescription: "TODO:INPUT Studio delivers modern looks, effortless maintenance plans, and concierge booking.",
    primaryServiceKeywords: [
      "TODO:INPUT haircut",
      "TODO:INPUT color",
      "TODO:INPUT salon",
    ],
    ogImagePath: "/og-cover.png",
  },
  copy: {
    heroHeadline: "Effortless appointments. Award-winning craft.",
    heroSubheadline: "One boutique studio, every detail dialed so you can glide from booking to glow-up.",
    heroBullets: [
      "Priority scheduling for regulars",
      "Color-safe, scalp-loving products",
      "Transparent finish pricing",
    ],
    ctaSectionHeadline: "Ready when you are.",
    ctaSectionSubheadline: "Reserve in under two minutes or text us for concierge scheduling.",
  },
  analytics: {
    provider: "none",
  },
  spamProtection: {
    turnstileEnabled: false,
  },
};
