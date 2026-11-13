/**
 * Town pages. Only towns where Google autocomplete shows local demand get a page
 * (docs/KEYWORDS.md). Local facts are public geography only (town, county, bay);
 * nothing about the client is invented. Expand with Search Console data later.
 */
export interface AreaPage {
  slug: string;
  title: string;
  description: string;
  h1: string;
  answer: string;
  local: string[];
  faq: { q: string; a: string }[];
  nearby: string[]; // area slugs or names
}

import { SITE } from '@/config/site';
const phone = SITE.phone.display;

export const areaPages: Record<string, AreaPage> = {
  'huntington-station': {
    slug: 'huntington-station',
    title: 'Cleaning Services in Huntington Station, NY | Krystal Clear',
    description: `House and office cleaning in Huntington Station, NY from a local team based right here. Recurring, deep, move-out and post-construction. Call ${phone}.`,
    h1: 'Cleaning services in Huntington Station, NY',
    answer: `Krystal Clear is based in Huntington Station, in the Town of Huntington, and cleans homes and offices across Huntington Station: recurring house cleaning, deep cleaning, move-in/move-out, post-construction and commercial cleaning.`,
    local: [
      'Huntington Station is home base for Liza Chamorro and the Krystal Clear crew, so local homes and businesses are the ones we reach most easily.',
      'Being local is part of why clients stay with us for years: we are your neighbors in the Town of Huntington, accountable to the same community.',
    ],
    faq: [
      { q: 'Is Krystal Clear a local Huntington Station company?', a: 'Yes. Krystal Clear Services is based in Huntington Station, NY, and is led by owner Liza Chamorro.' },
      { q: 'Do you clean offices in Huntington Station?', a: 'Yes. We clean offices, office buildings and retail spaces in Huntington Station and the rest of the Town of Huntington.' },
      { q: 'How do I get a quote in Huntington Station?', a: `Call or text ${phone} with your address, the size of your home or office and the service you need.` },
    ],
    nearby: ['huntington', 'commack', 'northport', 'dix-hills', 'melville'],
  },
  commack: {
    slug: 'commack',
    title: 'House Cleaning in Commack, NY | Krystal Clear Services',
    description: `House cleaning in Commack, NY: weekly, biweekly or monthly, plus deep, move-out and post-construction cleaning. Insured local team. Call ${phone}.`,
    h1: 'House cleaning in Commack, NY',
    answer: 'Krystal Clear provides house cleaning in Commack, NY, the hamlet that spans the Towns of Huntington and Smithtown: recurring visits, deep cleans, move-in/move-out and post-construction cleaning by an insured, background-checked crew.',
    local: [
      'Commack sits between our Huntington Station base and Smithtown, which makes it one of the main areas we serve on both sides of the town line.',
      'In Commack we offer the full list: recurring house cleaning, a deep clean as a first visit, move-in/move-out and post-construction cleaning for homes, and commercial cleaning for offices and shops.',
    ],
    faq: [
      { q: 'Do you clean homes on both the Huntington and Smithtown sides of Commack?', a: 'Yes. Commack is one of our main service areas on both sides of the town line.' },
      { q: 'What cleaning services are available in Commack?', a: 'Recurring house cleaning, deep cleaning, move-in/move-out, post-construction and commercial cleaning.' },
      { q: 'How do I book a cleaning in Commack?', a: `Call or text ${phone}; we will confirm your address and give you a free estimate.` },
    ],
    nearby: ['huntington-station', 'smithtown', 'dix-hills', 'northport', 'deer-park'],
  },
  northport: {
    slug: 'northport',
    title: 'House Cleaning in Northport, NY | Krystal Clear Services',
    description: `House cleaning and cleaning services in Northport, NY, on Northport Bay. Recurring, deep, move-out and post-construction cleaning. Call ${phone}.`,
    h1: 'House cleaning in Northport, NY',
    answer: 'Krystal Clear provides house cleaning and cleaning services in Northport, NY, the village on Northport Bay in the Town of Huntington: recurring house cleaning, deep cleaning, move-in/move-out, post-construction and commercial cleaning.',
    local: [
      'Northport and East Northport are part of our core area in the Town of Huntington, a short drive from our base in Huntington Station.',
      'From homes near the harbor to offices and shops in the village, we bring the same checklist and the same insured, background-checked crew.',
    ],
    faq: [
      { q: 'Do you clean in Northport village and East Northport?', a: 'Yes. Northport and East Northport are part of our main service area.' },
      { q: 'Do you offer deep cleaning in Northport?', a: 'Yes. Deep cleaning is available in Northport, often as the first visit before a recurring plan.' },
      { q: 'How do I get a quote in Northport?', a: `Call or text ${phone} with your address and the service you need.` },
    ],
    nearby: ['huntington', 'huntington-station', 'commack', 'smithtown', 'dix-hills'],
  },
};
