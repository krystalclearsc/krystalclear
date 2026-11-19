/**
 * Towns listed on the client's current website. The FAQ there says the core
 * area is Huntington, Commack and Northport (base: Huntington Station, per Notion).
 * `core: true` areas get their own page first; the rest stay listed only until
 * Liza confirms she wants to be found there (see PENDING_CLIENT_APPROVAL.md).
 */
export interface Area {
  slug: string;
  name: string;
  county: 'Suffolk' | 'Nassau';
  core: boolean;
  /** Has its own page (only where Google autocomplete shows demand — docs/KEYWORDS.md). */
  page: boolean;
}

export const areas: Area[] = [
  { slug: 'huntington', name: 'Huntington', county: 'Suffolk', core: true, page: false },
  { slug: 'huntington-station', name: 'Huntington Station', county: 'Suffolk', core: true, page: true },
  { slug: 'commack', name: 'Commack', county: 'Suffolk', core: true, page: true },
  { slug: 'northport', name: 'Northport', county: 'Suffolk', core: true, page: true },
  { slug: 'dix-hills', name: 'Dix Hills', county: 'Suffolk', core: false, page: false },
  { slug: 'melville', name: 'Melville', county: 'Suffolk', core: false, page: true },
  { slug: 'cold-spring-harbor', name: 'Cold Spring Harbor', county: 'Suffolk', core: false, page: false },
  { slug: 'smithtown', name: 'Smithtown', county: 'Suffolk', core: false, page: true },
  { slug: 'deer-park', name: 'Deer Park', county: 'Suffolk', core: false, page: false },
  { slug: 'west-babylon', name: 'West Babylon', county: 'Suffolk', core: false, page: false },
  { slug: 'syosset', name: 'Syosset', county: 'Nassau', core: false, page: false },
  { slug: 'oyster-bay', name: 'Oyster Bay', county: 'Nassau', core: false, page: false },
  { slug: 'farmingdale', name: 'Farmingdale', county: 'Nassau', core: false, page: false },
];

export const areaHref = (a: Area) => (a.page ? `/service-areas/${a.slug}/` : '/service-areas/');
