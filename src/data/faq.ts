/**
 * Home page FAQ. Answers restate what the client already publishes on the
 * current site (areas, insurance, access, quotes) — PENDING Liza's final read.
 * Each answer opens with a direct, self-contained sentence (GEO).
 */
import { SITE } from '@/config/site';

export const homeFaq = [
  {
    q: 'What areas does Krystal Clear serve?',
    a: `Krystal Clear cleans homes and businesses in Huntington, Huntington Station, Commack and Northport, and in nearby Long Island towns such as Dix Hills, Melville, Cold Spring Harbor, Smithtown and Syosset. Call or text ${SITE.phone.display} to confirm your address.`,
  },
  {
    q: 'Are your cleaners insured and background-checked?',
    a: 'Yes. Every member of the Krystal Clear team is background-checked and insured, which protects you, your property and our staff.',
  },
  {
    q: 'Do I need to be home during the cleaning?',
    a: "No, it's up to you. Many clients give us a key or a garage code and go about their day; others prefer to be home. We work either way.",
  },
  {
    q: 'How do I get a quote?',
    a: `Call or text ${SITE.phone.display}, or send a request online. We'll ask about the size of your home or office, the service you need and its current condition, and give you a clear, free estimate.`,
  },
  {
    q: "What's the difference between regular cleaning and deep cleaning?",
    a: 'Regular cleaning keeps a home in shape on a set schedule. Deep cleaning is a one-time, top-to-bottom reset that also covers baseboards, corners, fixtures and kitchen and bathroom build-up; it is often the first visit before a recurring plan.',
  },
];
