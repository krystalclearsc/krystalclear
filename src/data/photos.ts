/** Real photos of the Krystal Clear crew (from the client's own site and video). */
import staircase from '@/assets/photos/team-staircase.jpg';
import stairsDusting from '@/assets/photos/team-stairs-dusting.jpg';
import vacuumFoyer from '@/assets/photos/team-vacuum-foyer.jpg';
import bathroomTub from '@/assets/photos/team-bathroom-tub.jpg';
import kitchen from '@/assets/photos/team-kitchen.jpg';
import shower from '@/assets/photos/team-shower.jpg';
import showerScrub from '@/assets/photos/team-shower-scrub.jpg';
import diningTable from '@/assets/photos/team-dining-table.jpg';
import liza from '@/assets/photos/liza-chamorro.jpg';
import triptych from '@/assets/photos/team-triptych.jpg';
import videoPoster from '@/assets/photos/team-video-poster.jpg';
/* Free-licensed: "Northport Dock" by Fife Club, Wikimedia Commons, CC BY 3.0 (credited in the footer). */
import northportDock from '@/assets/photos/northport-dock.jpg';

export const photos = {
  staircase,
  stairsDusting,
  vacuumFoyer,
  bathroomTub,
  kitchen,
  shower,
  showerScrub,
  diningTable,
  liza,
  triptych,
  videoPoster,
  northportDock,
} as const;

export type PhotoSlug = keyof typeof photos;
