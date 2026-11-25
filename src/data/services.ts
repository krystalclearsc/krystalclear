import type { PhotoSlug } from './photos';

/**
 * Core services confirmed by the client:
 * residential, commercial, post-construction and move-in/move-out.
 * Deep cleaning is offered on the current site and in the approved ad scripts.
 * Carpet, window and power washing pages exist on the old site — pending
 * confirmation before they get their own pages.
 */
export interface Service {
  slug: string;
  name: string;
  /** Short name for menus and the numbered list. */
  short: string;
  keyword: string;
  summary: string;
  audience: 'Homes' | 'Businesses' | 'Homes and businesses';
  photo: PhotoSlug;
  photoAlt: string;
}

export const services: Service[] = [
  {
    slug: 'house-cleaning',
    name: 'House Cleaning',
    short: 'House cleaning',
    keyword: 'house cleaning Huntington NY',
    summary:
      'Weekly, every-other-week or monthly cleaning of bedrooms, kitchen, bathrooms and living areas, on a plan built around your home and schedule.',
    audience: 'Homes',
    photo: 'diningTable',
    photoAlt: 'Krystal Clear cleaner polishing a dining room table in a Huntington home',
  },
  {
    slug: 'deep-cleaning',
    name: 'Deep Cleaning',
    short: 'Deep cleaning',
    keyword: 'deep cleaning Huntington NY',
    summary:
      'A top-to-bottom reset for the areas routine cleaning misses: baseboards, corners, fixtures, kitchen and bathroom build-up.',
    audience: 'Homes',
    photo: 'showerScrub',
    photoAlt: 'Cleaner scrubbing the floor of a stone-tiled walk-in shower',
  },
  {
    slug: 'move-in-move-out-cleaning',
    name: 'Move-In / Move-Out Cleaning',
    short: 'Move-in / move-out',
    keyword: 'move out cleaning Huntington NY',
    summary:
      'Kitchens, bathrooms, floors, cabinets and fixtures cleaned before you move in or hand over the keys.',
    audience: 'Homes',
    photo: 'kitchen',
    photoAlt: 'Krystal Clear cleaner wiping down kitchen countertops and cabinets',
  },
  {
    slug: 'post-construction-cleaning',
    name: 'Post-Construction Cleaning',
    short: 'Post-construction',
    keyword: 'post construction cleaning Long Island',
    summary:
      'Fine construction dust, debris and residue removed from floors, windows, fixtures and surfaces after a build or renovation.',
    audience: 'Homes and businesses',
    photo: 'stairsDusting',
    photoAlt: 'Cleaner dusting a staircase banister after renovation work',
  },
  {
    slug: 'commercial-cleaning',
    name: 'Commercial & Office Cleaning',
    short: 'Commercial and office',
    keyword: 'office cleaning Huntington NY',
    summary:
      'Offices, reception areas, restrooms and breakrooms kept clean on a schedule that works around your business hours.',
    audience: 'Businesses',
    photo: 'vacuumFoyer',
    photoAlt: 'Krystal Clear cleaner vacuuming an entrance hall and rug',
  },
];

export const serviceHref = (s: Service) => `/services/${s.slug}/`;
