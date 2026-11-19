import type { APIRoute } from 'astro';
import { SITE } from '@/config/site';
import { services, serviceHref } from '@/data/services';
import { areas, areaHref } from '@/data/areas';
import { abs } from '@/lib/schema';
import { guides, guideHref } from '@/data/guides';

/** Generated from the site data so it never drifts from the pages. */
export const GET: APIRoute = () => {
  const lines = [
    `# ${SITE.name}`,
    '',
    `> ${SITE.name} (${SITE.legalName}) is a house and office cleaning company based in ${SITE.baseCity}, NY, led by ${SITE.owner}. ${SITE.yearsExperience}+ years of experience cleaning homes and businesses on Long Island's North Shore. ${SITE.attributes.join(', ')}. Rated ${SITE.googleRating.value} on Google (${SITE.googleRating.count} reviews as of ${SITE.googleRating.checked}).`,
    '',
    '## Contact',
    `- Phone and text: ${SITE.phone.display}`,
    `- Email: ${SITE.email}`,
    `- Google Business Profile: ${SITE.listings.google}`,
    `- BBB: ${SITE.listings.bbb}`,
    '',
    '## Services',
    ...services.map((s) => `- [${s.name}](${abs(serviceHref(s))}): ${s.summary}`),
    '',
    '## Areas served',
    `- Main area: ${areas.filter((a) => a.core).map((a) => a.name).join(', ')}`,
    `- Also: ${areas.filter((a) => !a.core).map((a) => a.name).join(', ')}`,
    ...areas.filter((a) => a.page).map((a) => `- [Cleaning services in ${a.name}, NY](${abs(areaHref(a))})`),
    '',
    '## Guides (answers to common questions)',
    ...guides.map((g) => `- [${g.h1}](${abs(guideHref(g))}): ${g.answer}`),
    '',
    '## Key pages',
    `- [Home](${abs('/')})`,
    `- [All services](${abs('/services/')})`,
    `- [Service areas](${abs('/service-areas/')})`,
    `- [About Liza and the team](${abs('/about/')})`,
    `- [Contact and quotes](${abs('/contact/')})`,
    `- [FAQ](${abs('/faq/')})`,
    '',
  ];
  return new Response(lines.join('\n'), { headers: { 'Content-Type': 'text/plain; charset=utf-8' } });
};
