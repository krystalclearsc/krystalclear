/**
 * Single source of truth for business data.
 *
 * Every value comes from the client, the Google Business Profile
 * (checked 2026-11-12) or the client's current website. Anything not confirmed
 * stays null/false until confirmed. Never add claims
 * (licenses, ratings in schema, hours, address) without written confirmation.
 */

export const SITE = {
  name: 'Krystal Clear Services',
  legalName: 'Krystal Clear Services, Corp.',
  shortName: 'Krystal Clear',
  url: (import.meta.env.SITE as string | undefined)?.replace(/\/$/, '') ?? 'https://www.krystalclearny.com',
  locale: 'en-US',
  owner: 'Liza Chamorro',
  /**
   * Public phone (matches the Google Business Profile).
   * Change it here only — every page, button and schema reads from this object.
   */
  phone: {
    display: '(631) 759-8442',
    e164: '+16317598442',
    href: 'tel:+16317598442',
    sms: 'sms:+16317598442',
  },
  /** Public email. */
  email: 'info@krystalclearny.com',
  baseCity: 'Huntington Station',
  region: 'Long Island, New York',
  social: {
    facebook: 'https://www.facebook.com/krystalclearservicesny/',
    instagram: 'https://www.instagram.com/krystalclearsc',
  },
  listings: {
    google: 'https://maps.google.com/?cid=71417083433304240',
    bbb: 'https://www.bbb.org/us/ny/huntington-station/profile/cleaning-services/krystal-clear-services-corp-0121-87176211',
  },
  /** Online request form already in use (Jobber). Secondary to call/text. */
  jobberForm:
    'https://clienthub.getjobber.com/client_hubs/3132e29a-4074-42e1-af2f-eaf6d6c19b0e/public/work_request/embedded_work_request_form',

  /** Years of experience stated by the client. */
  yearsExperience: 20,
  /** Google rating as seen on 2026-11-12. Shown as text only, never as schema. */
  googleRating: { value: '5.0', count: 34, checked: '2026-11-12' },
  /** Attributes shown on the Google Business Profile. */
  attributes: ['Women-owned', 'Latino-owned'],
  /** "Background-checked and fully insured", as stated by the client. */
  insuredAndChecked: true,

  /* ---- Pending confirmation: keep null until validated ---- */
  /** Street address is not published (service-area business). */
  address: null as null | { streetAddress: string; addressLocality: string; addressRegion: string; postalCode: string },
  openingHours: null as null | string[],
} as const;

/**
 * Indexing:
 * - SITE_INDEXABLE=true/false (build variable) always wins.
 * - Otherwise, Cloudflare Workers Builds of the `main` branch are indexable (production),
 *   other branches are not, and local builds are not.
 * The temporary *.workers.dev address is never indexed anyway (X-Robots-Tag in public/_headers),
 * so production can be indexable before the domain is connected.
 */
const forced = process.env.SITE_INDEXABLE ?? import.meta.env.SITE_INDEXABLE;
const ciBranch = process.env.WORKERS_CI_BRANCH || process.env.CF_PAGES_BRANCH;

export const ENV = {
  indexable: forced !== undefined && forced !== '' ? forced === 'true' : ciBranch === 'main',
  ga4Id: (import.meta.env.PUBLIC_GA4_ID || '') as string,
};
