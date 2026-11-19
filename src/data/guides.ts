/**
 * AEO guides (/resources/). Each one answers a question people really search
 * (Google autocomplete, 2026-11-19 — docs/KEYWORDS.md). Checklists come from the
 * client's own service pages; no prices, durations or rules are invented.
 */
import { SITE } from '@/config/site';
import type { PhotoSlug } from './photos';
const phone = SITE.phone.display;

export interface Guide {
  slug: string;
  title: string;
  description: string;
  h1: string;
  answer: string;
  photo: PhotoSlug;
  photoAlt: string;
  published: string;
  updated: string;
  sections: { h2: string; lead: string; list?: string[]; table?: { head: string[]; rows: string[][] } }[];
  faq: { q: string; a: string }[];
  service: string; // related service slug
}

export const guides: Guide[] = [
  {
    slug: 'deep-cleaning-vs-regular-cleaning',
    title: 'Deep Cleaning vs Regular Cleaning | Krystal Clear',
    description: 'Deep cleaning vs. regular house cleaning (and move-out cleaning): what each includes, when you need it, and how to choose. A Long Island cleaning guide.',
    h1: 'Deep cleaning vs. regular cleaning: what is the difference?',
    answer: 'Regular cleaning keeps a home in shape on a schedule (weekly, every other week or monthly). Deep cleaning is a one-time, top-to-bottom reset that also reaches build-up, inside appliances and cabinets, upholstery, window frames, sills and tracks. Move-out cleaning is a deep clean of an empty home.',
    photo: 'showerScrub',
    photoAlt: 'Cleaner scrubbing the floor of a stone shower during a deep clean',
    published: '2026-11-19',
    updated: '2026-11-19',
    sections: [
      {
        h2: 'Side by side',
        lead: 'The quickest way to see the difference is what each visit covers.',
        table: {
          head: ['', 'Regular cleaning', 'Deep cleaning', 'Move-out cleaning'],
          rows: [
            ['How often', 'Weekly, every other week or monthly', 'One time, or once or twice a year', 'Once, when the home is empty'],
            ['Kitchen', 'Countertops, microwave, dishes, trash', 'Plus appliances, backsplashes, cabinets and drawers', 'Plus inside cabinets and inside appliances'],
            ['Bathrooms', 'Toilets, sinks, tile grime, mirrors', 'Plus showers, tubs, chrome fixtures in detail', 'Full sanitization of every fixture'],
            ['Living areas', 'Vacuum, mop, dust, mirrors, fans', 'Plus upholstery, electronics and decor', 'Plus walls, baseboards, closets'],
            ['Windows', 'Glass and mirrors', 'Glass, frames, sills, screens, tracks', 'Interior windows'],
          ],
        },
      },
      {
        h2: 'When do you need a deep clean?',
        lead: 'A deep clean makes sense when the house needs more than upkeep:',
        list: ['Before starting a recurring cleaning plan', 'Before or after hosting', 'At the change of seasons', 'Before listing or showing a home', 'When it has been a long time since the last thorough clean'],
      },
      {
        h2: 'When is regular cleaning enough?',
        lead: 'Once the home is at a clean baseline, regular visits keep it there. Busy families and homes with pets often choose weekly or every other week; smaller households usually do well with monthly cleaning.',
      },
    ],
    faq: [
      { q: 'Is deep cleaning worth it?', a: 'It is worth it when a home needs a reset: it reaches the build-up and hidden areas regular cleaning does not, and it makes recurring cleaning easier afterward.' },
      { q: 'What is the difference between deep cleaning and move-out cleaning?', a: 'A move-out clean is a deep clean of an empty home, so it also covers inside cabinets, closets and appliances, walls and baseboards.' },
      { q: 'How much does a deep clean cost?', a: `It depends on the size of the home, its condition and the extras you add. Krystal Clear gives a free estimate before starting: call or text ${phone}.` },
    ],
    service: 'deep-cleaning',
  },
  {
    slug: 'move-out-cleaning-checklist',
    title: 'Move-Out Cleaning Checklist (Room by Room) | Krystal Clear',
    description: 'A room-by-room move-out cleaning checklist for tenants, homeowners and landlords on Long Island: kitchen, bathrooms, bedrooms, floors and walls.',
    h1: 'Move-out cleaning checklist, room by room',
    answer: 'A move-out clean covers every room of the empty home: kitchen surfaces plus inside cabinets and appliances, full bathroom sanitization, bedrooms and closets, interior windows, light fixtures and ceiling fans, walls and baseboards, and every floor.',
    photo: 'kitchen',
    photoAlt: 'Cleaner wiping kitchen counters and cabinets during a move-out clean',
    published: '2026-11-19',
    updated: '2026-11-19',
    sections: [
      { h2: 'Kitchen', lead: 'The room landlords and buyers check first.', list: ['All kitchen surfaces and backsplashes', 'Inside cabinets and drawers', 'Inside appliances', 'Sinks and faucets'] },
      { h2: 'Bathrooms', lead: 'Every fixture, sanitized.', list: ['Toilets', 'Showers and bathtubs', 'Sinks and countertops', 'Mirrors and chrome fixtures'] },
      { h2: 'Bedrooms and living areas', lead: 'Easier to do well once the furniture is gone.', list: ['Closet spaces', 'All surfaces dusted', 'Interior windows', 'Light fixtures and ceiling fans'] },
      { h2: 'Floors and walls', lead: 'The last pass before you hand over the keys.', list: ['Vacuum carpets', 'Mop and polish hard floors', 'Wall and baseboard cleaning', 'Corners and edges'] },
    ],
    faq: [
      { q: 'Should the home be empty for a move-out clean?', a: 'Ideally yes. An empty home lets the cleaners reach inside cabinets, closets and every baseboard.' },
      { q: 'Who does move-out cleaning on Long Island?', a: `Krystal Clear does move-in and move-out cleaning in Huntington, Commack, Northport and nearby towns. Call or text ${phone} with your moving date.` },
    ],
    service: 'move-in-move-out-cleaning',
  },
  {
    slug: 'post-construction-cleaning-checklist',
    title: 'What Is Post-Construction Cleaning? | Krystal Clear',
    description: 'What post-construction cleaning is, what it includes and a checklist for after a renovation or new build on Long Island: debris, dust, glass, floors.',
    h1: 'What is post-construction cleaning? (with checklist)',
    answer: 'Post-construction cleaning is the detailed clean done after a renovation or new build, once the trades have finished: it removes leftover debris, fine construction dust, paint splatter, adhesive and plaster from floors, windows, fixtures, cabinets and appliances so the space is ready to use.',
    photo: 'stairsDusting',
    photoAlt: 'Cleaner dusting a staircase banister after renovation work',
    published: '2026-11-19',
    updated: '2026-11-19',
    sections: [
      { h2: 'Debris removal', lead: 'First, clear the way.', list: ['Wood pieces and metal scraps', 'Packaging materials'] },
      { h2: 'Surface cleaning', lead: 'Construction residue clings to every surface.', list: ['Walls, windows and floors', 'Paint splatter and adhesive', 'Other construction residue'] },
      { h2: 'Deep dusting', lead: 'Fine dust settles everywhere, including hidden nooks.', list: ['Ceilings to floors', 'Vacuuming every surface where dust settles'] },
      { h2: 'Kitchens, bathrooms, glass and floors', lead: 'The finishing pass.', list: ['Fixtures, cabinets and appliances sanitized', 'Windows, glass doors and mirrors (dust, fingerprints, plaster)', 'Carpets vacuumed, hard floors mopped, stains treated'] },
    ],
    faq: [
      { q: 'When should post-construction cleaning be done?', a: 'After the trades have finished their work, so the dust does not return.' },
      { q: 'Is post-construction cleaning the same as post-renovation cleaning?', a: 'Yes. It is the same type of clean, whether the work was a full build or a kitchen or bathroom remodel.' },
      { q: 'Who does post-construction cleaning on Long Island?', a: `Krystal Clear cleans homes and businesses after construction across Huntington and the North Shore. Call or text ${phone}.` },
    ],
    service: 'post-construction-cleaning',
  },
  {
    slug: 'office-cleaning-checklist',
    title: 'Office Cleaning Checklist, Long Island | Krystal Clear',
    description: 'An office cleaning checklist by area: reception, workstations, restrooms, breakroom and floors. What professional janitorial cleaning covers on Long Island.',
    h1: 'Office cleaning checklist by area',
    answer: 'A complete office clean covers trash removal and daily cleaning, restroom sanitation and restocking, breakroom and kitchen cleaning, desk and workstation sanitization, window and glass cleaning, common areas, floors, and light fixtures and ceiling fans.',
    photo: 'vacuumFoyer',
    photoAlt: 'Cleaner vacuuming an entrance hall and rug',
    published: '2026-11-19',
    updated: '2026-11-19',
    sections: [
      { h2: 'Reception and common areas', lead: 'The first impression starts here.', list: ['Common area maintenance', 'Window and glass cleaning', 'Floor care'] },
      { h2: 'Workstations', lead: 'Where your team spends the day.', list: ['Desk and workstation sanitization', 'Daily cleaning and trash removal', 'Light fixtures and ceiling fans'] },
      { h2: 'Restrooms and breakroom', lead: 'The rooms people notice most.', list: ['Restroom sanitation and restocking', 'Breakroom and kitchen cleaning'] },
    ],
    faq: [
      { q: 'Can office cleaning be done after business hours?', a: `Yes, Krystal Clear schedules commercial cleaning around your hours. Call or text ${phone}.` },
      { q: 'What is the difference between janitorial and commercial cleaning?', a: 'Janitorial service is the routine upkeep (trash, restrooms, breakrooms, floors); commercial cleaning is the broader term that also includes deeper and move-in/move-out cleaning of business spaces.' },
    ],
    service: 'commercial-cleaning',
  },
];

export const guideHref = (g: Guide) => `/resources/${g.slug}/`;
