/**
 * JSON-LD builders. Only facts visible on the site and recorded in
 * src/config/site.ts are emitted. Deliberately omitted until validated:
 * address, geo, openingHours and any Review/AggregateRating (Google does not
 * allow self-serving review markup).
 */
import { SITE } from '@/config/site';
import { areas } from '@/data/areas';
import { services } from '@/data/services';

export const abs = (path: string) => new URL(path, SITE.url + '/').toString();

export const ORG_ID = abs('/#business');
export const WEBSITE_ID = abs('/#website');

export function businessNode(logoUrl: string, imageUrl: string) {
  const node: Record<string, unknown> = {
    '@type': ['HouseCleaningService', 'LocalBusiness'],
    '@id': ORG_ID,
    name: SITE.name,
    alternateName: SITE.shortName,
    legalName: SITE.legalName,
    url: abs('/'),
    telephone: SITE.phone.e164,
    email: SITE.email,
    logo: { '@type': 'ImageObject', url: logoUrl },
    image: imageUrl,
    founder: { '@type': 'Person', name: SITE.owner },
    description: `${SITE.name} is a house and office cleaning company led by ${SITE.owner}, with ${SITE.yearsExperience}+ years of experience serving Huntington, Huntington Station, Commack, Northport and nearby Long Island towns. Services: recurring house cleaning, deep cleaning, move-in/move-out, post-construction and commercial cleaning.`,
    areaServed: areas.map((a) => ({ '@type': 'City', name: `${a.name}, NY` })),
    sameAs: [SITE.listings.google, SITE.listings.bbb, SITE.social.facebook, SITE.social.instagram],
    knowsAbout: services.map((s) => s.name),
    contactPoint: {
      '@type': 'ContactPoint',
      contactType: 'customer service',
      telephone: SITE.phone.e164,
      availableLanguage: ['English'], // PENDING: add Spanish once Liza confirms it
    },
  };
  if (SITE.address) node.address = { '@type': 'PostalAddress', addressCountry: 'US', ...SITE.address };
  if (SITE.openingHours) node.openingHours = SITE.openingHours;
  return node;
}

export function websiteNode() {
  return { '@type': 'WebSite', '@id': WEBSITE_ID, url: abs('/'), name: SITE.name, inLanguage: SITE.locale, publisher: { '@id': ORG_ID } };
}

export function webPageNode(opts: { url: string; name: string; description: string; type?: string }) {
  return {
    '@type': opts.type ?? 'WebPage',
    '@id': opts.url + '#webpage',
    url: opts.url,
    name: opts.name,
    description: opts.description,
    inLanguage: SITE.locale,
    isPartOf: { '@id': WEBSITE_ID },
    about: { '@id': ORG_ID },
  };
}

export function breadcrumbNode(items: { name: string; href: string }[]) {
  return {
    '@type': 'BreadcrumbList',
    itemListElement: items.map((it, i) => ({ '@type': 'ListItem', position: i + 1, name: it.name, item: abs(it.href) })),
  };
}

export function serviceNode(opts: { name: string; description: string; url: string; image?: string; areaServed?: string }) {
  return {
    '@type': 'Service',
    '@id': opts.url + '#service',
    name: opts.name,
    serviceType: opts.name,
    description: opts.description,
    url: opts.url,
    image: opts.image,
    provider: { '@id': ORG_ID },
    areaServed: opts.areaServed ? { '@type': 'City', name: opts.areaServed } : areas.filter((a) => a.core).map((a) => ({ '@type': 'City', name: `${a.name}, NY` })),
  };
}

export function faqNode(items: { q: string; a: string }[]) {
  return {
    '@type': 'FAQPage',
    mainEntity: items.map((f) => ({ '@type': 'Question', name: f.q, acceptedAnswer: { '@type': 'Answer', text: f.a } })),
  };
}

export const graph = (...nodes: unknown[]) => ({ '@context': 'https://schema.org', '@graph': nodes.filter(Boolean) });
