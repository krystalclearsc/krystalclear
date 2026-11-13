/**
 * Long-form content for each service page. Task lists come from the client's
 * own service pages on krystalclearny.com (2026-11-12). Answers restate what the
 * client publishes (quotes, insurance, access, eco-conscious products) — no
 * prices, durations or guarantees are invented. Keywords: docs/KEYWORDS.md.
 */
import { SITE } from '@/config/site';

export interface ServicePage {
  slug: string;
  title: string; // <title>, 50–60 chars
  description: string; // meta, 140–160 chars
  h1: string;
  answer: string; // direct 1–2 sentence answer (GEO)
  intro: string[];
  forWho: { title: string; text: string }[];
  included: { group: string; items: string[] }[];
  priceFactors: string[];
  faq: { q: string; a: string }[];
  related: string[]; // slugs
}

const phone = SITE.phone.display;

export const servicePages: Record<string, ServicePage> = {
  'house-cleaning': {
    slug: 'house-cleaning',
    title: 'House Cleaning in Huntington, NY | Krystal Clear',
    description: `Recurring house cleaning in Huntington, NY: weekly, every-other-week or monthly. Insured, background-checked crew led by Liza. Call or text ${phone}.`,
    h1: 'House cleaning in Huntington, NY',
    answer: `Krystal Clear provides recurring house cleaning in Huntington, NY and nearby Long Island towns: weekly, every-other-week or monthly visits that cover bedrooms, kitchen, bathrooms and living areas, done by Liza Chamorro's insured, background-checked team.`,
    intro: [
      'Most of our clients are busy families who would rather spend their weekends together than scrubbing bathrooms. We build a cleaning plan around your home, your schedule and your standards, then follow the same room-by-room checklist on every visit so you always know what you are getting.',
      `Some of our house cleaning clients have been with Liza for 18 years. That kind of trust comes from the same crew showing up on time, doing the job right and respecting your privacy and your space.`,
    ],
    forWho: [
      { title: 'Busy families', text: 'Get your evenings and weekends back. We keep the house in shape so you do not have to.' },
      { title: 'Homes with pets and kids', text: 'Environmentally conscious products that are safe for the whole family are available on request.' },
      { title: 'Homeowners away during the day', text: 'Leave us a key or garage code and come home to a clean house.' },
    ],
    included: [
      { group: 'Bedrooms', items: ['Dust and polish cabinet doors', 'Vacuum area rugs', 'Dust and disinfect phones', 'Dust surfaces and make the room ready'] },
      { group: 'Kitchen', items: ['Wipe and disinfect countertops', 'Clean the microwave', 'Clean cups and plates', 'Take all trash out'] },
      { group: 'Living and dining areas', items: ['Vacuum and mop floors', 'Dust furniture', 'Clean windows and mirrors', 'Dust fans and lighting'] },
      { group: 'Bathrooms', items: ['Scrub and clean toilets', 'Scrub and clean sinks', 'Mop and remove tile grime', 'Clean all mirrors and glass'] },
    ],
    priceFactors: ['The size of your home (bedrooms, bathrooms, square footage)', 'How often you want us to come: weekly, every other week or monthly', 'The current condition of the home; a first deep clean is often recommended', 'Any extra tasks you add to the checklist'],
    faq: [
      { q: 'How often should I schedule house cleaning?', a: 'It depends on your household. Busy families and homes with pets often choose weekly or every-other-week visits; smaller households usually do well with a monthly clean. We help you choose when you call.' },
      { q: 'Who leads the cleaning team?', a: 'Krystal Clear is owned and led by Liza Chamorro, who has cleaned Long Island homes for more than 20 years. Many clients mention her by name in their reviews.' },
      { q: 'Do you bring your own supplies?', a: 'Yes, our crew arrives with professional supplies. If you prefer specific or green products, tell us and we will use them.' },
      { q: 'How do I get a price?', a: `Call or text ${phone}. We ask about your home's size, how often you want cleaning and its condition, then give you a clear, free estimate.` },
    ],
    related: ['deep-cleaning', 'move-in-move-out-cleaning', 'commercial-cleaning'],
  },

  'deep-cleaning': {
    slug: 'deep-cleaning',
    title: 'Deep Cleaning Services on Long Island | Krystal Clear',
    description: `Deep house cleaning on Long Island, from Huntington to Northport: bathrooms, kitchen, living areas and windows, top to bottom. Call or text ${phone}.`,
    h1: 'Deep cleaning services on Long Island',
    answer: 'A deep clean is a one-time, top-to-bottom reset of your home or office that reaches the areas routine cleaning misses: shower build-up, inside appliances, cabinets and drawers, upholstery, window frames, sills and tracks.',
    intro: [
      'Deep cleaning is the right choice before starting a recurring plan, before or after hosting, at the change of seasons, or when the house simply needs more than a regular visit. It takes longer than a maintenance clean because every room is done in detail.',
      'A real estate agent who has worked with Liza for almost 18 years recommends Krystal Clear for whole-house deep cleans, and then uses us for maintenance cleaning at home.',
    ],
    forWho: [
      { title: 'First visit before a recurring plan', text: 'We bring the home to a clean baseline, then keep it there.' },
      { title: 'Homes being listed or shown', text: 'A detailed clean that makes every room presentable.' },
      { title: 'Seasonal resets', text: 'Spring or fall: the once-or-twice-a-year clean of everything.' },
    ],
    included: [
      { group: 'Bathrooms', items: ['Showers and bathtubs', 'Toilets', 'Sinks and countertops', 'Mirrors and chrome fixtures'] },
      { group: 'Kitchen', items: ['Appliances', 'Countertops and backsplashes', 'Cabinets and drawers', 'Sinks and faucets'] },
      { group: 'Living areas', items: ['Dusting and cleaning all surfaces', 'Upholstery and fabric care', 'Floor care', 'Electronics and decor'] },
      { group: 'Windows', items: ['Glass cleaning', 'Frame and sill cleaning', 'Screen washing', 'Track and seal cleaning'] },
    ],
    priceFactors: ['Size of the home or office', 'Current condition and how long since the last thorough clean', 'Rooms and extras included (inside appliances, windows, upholstery)', 'Whether it is followed by a recurring plan'],
    faq: [
      { q: "What's the difference between regular cleaning and deep cleaning?", a: 'Regular cleaning keeps a home in shape on a schedule. Deep cleaning is a one-time, detailed reset that also covers build-up, inside cabinets and appliances, window frames and tracks, and upholstery.' },
      { q: 'How often do I need a deep clean?', a: 'Many homes do well with one or two deep cleans a year, plus regular maintenance cleaning in between.' },
      { q: 'Do you deep clean offices too?', a: 'Yes. We deep clean homes and offices; for ongoing office cleaning see our commercial cleaning service.' },
      { q: 'How do I book a deep clean?', a: `Call or text ${phone} with the size of your home and its condition, and we will give you a free estimate.` },
    ],
    related: ['house-cleaning', 'move-in-move-out-cleaning', 'post-construction-cleaning'],
  },

  'move-in-move-out-cleaning': {
    slug: 'move-in-move-out-cleaning',
    title: 'Move In & Move Out Cleaning, Long Island | Krystal Clear',
    description: `Move-in and move-out cleaning on Long Island: kitchens, inside cabinets and appliances, bathrooms, bedrooms and floors. Free quote: ${phone}.`,
    h1: 'Move-in and move-out cleaning on Long Island',
    answer: 'Move-in and move-out cleaning prepares an empty home for the next chapter: kitchens including inside cabinets and appliances, bathrooms, bedrooms and closets, interior windows and every floor, cleaned before you unpack or hand over the keys.',
    intro: [
      'Moving comes with a lot to coordinate. Before you bring in furniture, or before the walkthrough with your landlord or buyer, the kitchen, bathrooms and floors need a thorough clean. We take that off your list.',
      'An empty home lets us reach everything: inside cabinets and drawers, closets, baseboards and the corners furniture usually hides.',
    ],
    forWho: [
      { title: 'Moving in', text: 'Start fresh in a home that is clean before your first box comes through the door.' },
      { title: 'Moving out', text: 'Leave the home ready for the walkthrough, the next tenant or the new owners.' },
      { title: 'Landlords and agents', text: 'Turn a unit around between tenants or before a listing.' },
    ],
    included: [
      { group: 'Kitchen', items: ['All kitchen surfaces', 'Inside cabinets', 'Inside appliances', 'Sinks and fixtures'] },
      { group: 'Bathrooms', items: ['Toilets', 'Showers and bathtubs', 'Sinks', 'Full sanitization'] },
      { group: 'Bedrooms and living areas', items: ['Closet spaces', 'All surfaces dusted', 'Interior windows', 'Light fixtures and ceiling fans'] },
      { group: 'Floors and walls', items: ['Vacuuming carpets', 'Mopping and polishing hard floors', 'Wall and baseboard cleaning', 'Corners and edges'] },
    ],
    priceFactors: ['Size of the home', 'Condition after the move', 'Inside-appliance and inside-cabinet cleaning', 'Your moving date and timing'],
    faq: [
      { q: 'Should the home be empty for a move-out clean?', a: 'Ideally yes. An empty home lets us clean inside cabinets, closets and along every baseboard.' },
      { q: 'Do you clean inside the oven and fridge?', a: 'Inside-appliance cleaning is part of our move-in/move-out kitchen clean. Mention it when you call so we plan the time.' },
      { q: 'Can you work around my closing or lease date?', a: `Tell us your moving date when you call or text ${phone} and we will schedule around it.` },
    ],
    related: ['deep-cleaning', 'house-cleaning', 'post-construction-cleaning'],
  },

  'post-construction-cleaning': {
    slug: 'post-construction-cleaning',
    title: 'Post Construction Cleaning, Long Island | Krystal Clear',
    description: `Post-construction cleaning on Long Island: debris, fine dust, paint splatter and residue removed from floors, windows and fixtures. Call ${phone}.`,
    h1: 'Post-construction cleaning on Long Island',
    answer: 'Post-construction cleaning removes the debris, fine dust and residue a renovation or new build leaves behind, from ceilings to floors, windows, fixtures, cabinets and appliances, so the space is ready to use.',
    intro: [
      'The renovation is finished, but the dust is still there. Construction dust settles on every surface and in hidden corners, and paint splatter, adhesive and plaster cling to windows, floors and fixtures. Our crew cleans all of it in detail.',
      'We work with homeowners after a remodel and with contractors who need a space handed over clean.',
    ],
    forWho: [
      { title: 'Homeowners after a remodel', text: 'Move back into a finished kitchen, bathroom or addition without the dust.' },
      { title: 'Contractors and builders', text: 'Hand over a clean, ready-to-use space to your client.' },
      { title: 'Businesses after a build-out', text: 'Open the doors on a clean office or retail space.' },
    ],
    included: [
      { group: 'Debris removal', items: ['Wood pieces, metal scraps and packaging', 'Clearing the way for detailed cleaning'] },
      { group: 'Surface cleaning', items: ['Walls, windows and floors', 'Paint splatter and adhesive', 'Other construction residue'] },
      { group: 'Bathroom and kitchen', items: ['Fixtures', 'Cabinets', 'Appliances', 'Full sanitization'] },
      { group: 'Dust, glass and floors', items: ['Deep dusting from ceilings to floors', 'Windows, glass doors and mirrors', 'Vacuuming carpets and mopping hard floors', 'Stain treatment before furniture goes in'] },
    ],
    priceFactors: ['Square footage and number of rooms', 'Amount of dust and debris left by the work', 'Windows, glass and fixtures to detail', 'Whether more than one visit is needed'],
    faq: [
      { q: 'When should post-construction cleaning be scheduled?', a: 'After the trades have finished their work, so the dust does not return. Call us as soon as you know the finish date.' },
      { q: 'Do you remove large construction debris?', a: `Our clean includes removing leftover wood pieces, metal scraps and packaging. Tell us what remains when you call ${phone} and we will confirm what we can take.` },
      { q: 'Do you clean after commercial build-outs?', a: 'Yes, we clean homes and businesses after construction.' },
    ],
    related: ['deep-cleaning', 'commercial-cleaning', 'move-in-move-out-cleaning'],
  },

  'commercial-cleaning': {
    slug: 'commercial-cleaning',
    title: 'Commercial Cleaning Services, Long Island | Krystal Clear',
    description: `Office and commercial cleaning on Long Island: janitorial, restrooms, breakrooms, floors and workstations on your schedule. Call or text ${phone}.`,
    h1: 'Commercial and office cleaning on Long Island',
    answer: 'Krystal Clear provides commercial and office cleaning on Long Island: janitorial service, restroom sanitation and restocking, breakrooms, floors, desks and common areas, scheduled around your business hours.',
    intro: [
      'The first impression of your office starts before anyone sits down to meet with you. The reception area, the floors and the restrooms are all part of your clients’ experience, and a clean breakroom tells your team the workplace is cared for.',
      'We clean offices, office buildings and retail spaces in the Huntington area. One of our office-building clients describes the team as very professional, detail-oriented and friendly.',
    ],
    forWho: [
      { title: 'Offices and professional practices', text: 'Reception, workstations, conference rooms and restrooms kept spotless.' },
      { title: 'Office buildings', text: 'Common areas, hallways and shared restrooms on a set schedule.' },
      { title: 'Retail spaces', text: 'A clean, welcoming space for your customers.' },
    ],
    included: [
      { group: 'Janitorial services', items: ['Daily cleaning and trash removal', 'Restroom sanitation and restocking', 'Breakroom and kitchen cleaning', 'Window and glass cleaning'] },
      { group: 'Offices and buildings', items: ['Floor care', 'Desk and workstation sanitization', 'Common area maintenance', 'Light fixtures and ceiling fans'] },
      { group: 'Move-in / move-out', items: ['Deep kitchen cleaning', 'Bathroom sanitization', 'Wall and baseboard cleaning'] },
    ],
    priceFactors: ['Size of the space and number of restrooms', 'How often you need service', 'Time of day (during or after business hours)', 'Specific tasks for your type of business'],
    faq: [
      { q: 'Can you clean after business hours?', a: `Tell us your hours when you call ${phone}; we schedule commercial cleaning around them.` },
      { q: 'What kinds of businesses do you clean?', a: 'Offices, office buildings and retail spaces in the Huntington area and nearby Long Island towns.' },
      { q: 'Are your cleaners insured and background-checked?', a: 'Yes. Every member of the team is background-checked and insured.' },
    ],
    related: ['post-construction-cleaning', 'deep-cleaning', 'house-cleaning'],
  },
};
