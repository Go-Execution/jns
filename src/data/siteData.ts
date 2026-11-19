export interface MaterialService {
  id: 'dirt' | 'sand' | 'aggregate' | 'asphalt';
  code: string;
  title: string;
  shortLabel: string;
  subtitle: string;
  description: string;
  image: string;
  imageAlt: string;
  applications: string[];
  dispatchNotes: string;
  colSpan: string;
  rowSpan: string;
}

export const COMPANY_INFO = {
  name: 'JNS Hauling LLC',
  owner: 'Jeremy Gabrielson',
  established: 2014,
  phoneDisplay: '(706) 681-1765',
  phoneHref: 'tel:706-681-1765',
  email: 'jandshauling@icloud.com',
  emailHref: 'mailto:jandshauling@icloud.com',
  addressLine1: '1254 Noland Dr',
  addressLine2: 'Columbus, GA 31907',
  fullAddress: '1254 Noland Dr, Columbus, GA 31907',
  certification: 'DBE Certified',
  fleetCount: 11,
  fleetModel: 'Western Star 4700',
  fleetType: 'Tandem Dump Trucks',
  statesServed: ['Georgia', 'Alabama'],
} as const;

export const MANIFEST_ENTRIES: ReadonlyArray<{
  label: string;
  value: string;
  highlight?: boolean;
}> = [
  { label: 'TICKET NO.', value: '0001' },
  { label: 'ESTABLISHED', value: '2014' },
  { label: 'STATUS', value: 'DBE CERTIFIED', highlight: true },
  { label: 'FLEET', value: '11 TANDEMS' },
  { label: 'SERVICE AREA', value: 'GA · AL' },
];

export const MATERIALS: MaterialService[] = [
  {
    id: 'dirt',
    code: 'MAT-01',
    title: 'Dirt & Soil',
    shortLabel: 'DIRT & SOIL',
    subtitle: 'Site Grading, Structural Fill & Excavation Haul-Off',
    description:
      'Consistent tandem dump truck hauling for site preparation, mass excavation cut-and-fill, borrow pit transport, and spoil removal across active commercial and residential sites.',
    image: '/pexels-zaiwizi-89700396-9529407.jpg',
    imageAlt: 'Loaded tandem dump truck hauling dirt and stone along a jobsite haul road',
    applications: [
      'Select structural fill and subgrade stabilization',
      'Clean topsoil and final grading material delivery',
      'Excavation spoil, clay, and site-clearing haul-off',
      'Borrow pit to jobsite cycle coordination',
    ],
    dispatchNotes: 'Available for single-load deliveries or multi-truck continuous cycle work.',
    colSpan: 'md:col-span-8',
    rowSpan: 'md:row-span-2',
  },
  {
    id: 'sand',
    code: 'MAT-02',
    title: 'Sand',
    shortLabel: 'SAND',
    subtitle: 'Masonry, Concrete, Utility Bedding & Fill Sand',
    description:
      'Clean, timely transport from regional quarries and sand pits directly to concrete batch sites, utility trenches, and masonry laydown areas.',
    image: '/pexels-nc-farm-bureau-mark-17765495.jpg',
    imageAlt: 'Stockpiled sand and bulk hauling equipment at a material yard',
    applications: [
      'Utility pipe bedding and trench backfill',
      'Masonry and concrete sand supply runs',
      'Drainage and base-layer sand delivery',
      'Direct quarry-to-site scheduled drops',
    ],
    dispatchNotes: 'Coordinated load timing to match crew and batching schedules.',
    colSpan: 'md:col-span-4',
    rowSpan: 'md:row-span-1',
  },
  {
    id: 'aggregate',
    code: 'MAT-03',
    title: 'Aggregate',
    shortLabel: 'AGGREGATE',
    subtitle: 'Crushed Stone, Road Base, Gravel & Riprap',
    description:
      'Dependable bulk hauling of crushed stone, graded aggregate base (GAB), #57 stone, surge stone, and driveway or haul-road aggregate from local quarries.',
    image: '/pexels-soner-mazlum-182555-6890415.jpg',
    imageAlt: 'Crushed aggregate conveyor and stone stockpiles at an industrial quarry',
    applications: [
      'Graded Aggregate Base (GAB) for road and pad prep',
      '#57, #67, and #89 crushed stone for drainage and concrete',
      'Heavy surge stone and erosion-control riprap',
      'Construction entrance and haul-road maintenance stone',
    ],
    dispatchNotes: 'Scale-verified quarry tickets tracked and delivered per load.',
    colSpan: 'md:col-span-4',
    rowSpan: 'md:row-span-1',
  },
  {
    id: 'asphalt',
    code: 'MAT-04',
    title: 'Asphalt',
    shortLabel: 'ASPHALT',
    subtitle: 'Hot-Mix Asphalt Delivery & Millings Haul-Off',
    description:
      'Dedicated tandem support for highway paving crews, parking lot contractors, and resurfacing jobs — keeping pavers fed on schedule and hauling away milled material.',
    image: '/pexels-alfinauzikri-5696170.jpg',
    imageAlt: 'Heavy commercial truck operating on a paved highway corridor',
    applications: [
      'Hot-mix asphalt transport from plant to paver hopper',
      'DOT roadway, municipal street, and commercial lot paving',
      'Reclaimed asphalt pavement (RAP) and millings haul-off',
      'Tarp-secured temperature-conscious plant cycles',
    ],
    dispatchNotes: 'Multi-truck staging coordinated directly with plant loadout and paving foremen.',
    colSpan: 'md:col-span-12',
    rowSpan: 'md:row-span-1',
  },
];

export const FLEET_HIGHLIGHTS = [
  {
    label: 'Primary Platform',
    value: 'Western Star 4700',
    detail: 'Heavy-duty tandem dump chassis built for sustained quarry, paving, and site-work cycles.',
  },
  {
    label: 'Active Fleet Count',
    value: '11 Tandems',
    detail: 'Scalable dispatch from single-truck utility runs to coordinated multi-truck paving trains.',
  },
  {
    label: 'Operating Since',
    value: '2014',
    detail: 'Over a decade moving bulk construction materials out of Columbus, Georgia.',
  },
  {
    label: 'Compliance Status',
    value: 'DBE Certified',
    detail: 'Verified Disadvantaged Business Enterprise supporting public and prime-contractor bids.',
  },
] as const;

export const FLEET_STANDARDS = [
  {
    title: 'Scheduled Preventative Maintenance',
    description:
      'Every Western Star 4700 unit follows a strict service interval covering hydraulics, braking systems, tires, and suspension so trucks stay on schedule instead of on the shoulder.',
  },
  {
    title: 'Pre-Trip & Post-Trip DOT Inspections',
    description:
      'Drivers complete documented daily inspections before rolling out of the Columbus yard and after returning, maintaining clean safety and compliance records.',
  },
  {
    title: 'Tarped Loads & Ticket Documentation',
    description:
      'Each load is tarped per state DOT requirements and documented with quarry or plant weigh tickets for transparent jobsite billing and prime-contractor audits.',
  },
  {
    title: 'Direct Dispatcher Coordination',
    description:
      'Contractors and site superintendents communicate directly with dispatch—no automated call trees—allowing rapid cycle adjustments when plant or weather windows shift.',
  },
] as const;

export const STATE_REGIONS = {
  georgia: {
    name: 'Georgia',
    badge: 'Primary Hub · Columbus, GA',
    summary:
      'Anchored at our 1254 Noland Dr yard in Columbus, JNS Hauling dispatches across Muscogee County, West Georgia, and major state highway and commercial development corridors.',
    corridors: [
      'Columbus & Muscogee County',
      'Harris & Troup County Corridors',
      'I-185 & US-27 Haul Routes',
      'Macon-Bibb & Central GA Projects (by schedule)',
    ],
    note: 'Specific Georgia county and municipality availability is confirmed by project scope and fleet schedule.',
  },
  alabama: {
    name: 'Alabama',
    badge: 'Interstate Network · East & Central AL',
    summary:
      'Positioned directly on the Chattahoochee Valley border, our trucks cross into Alabama daily to serve civil contractors, quarry suppliers, and roadway paving projects.',
    corridors: [
      'Phenix City & Russell County',
      'Auburn / Opelika & Lee County',
      'I-85 & US-80 / US-431 Corridors',
      'Chambers & Macon County Sites (by schedule)',
    ],
    note: 'Multi-truck interstate dispatch across Alabama routes can be arranged directly through our dispatch desk.',
  },
} as const;

export const SERVICES_FAQ = [
  {
    id: 'faq-materials',
    title: 'What materials does JNS Hauling transport?',
    description:
      'We haul bulk dirt and fill soil, masonry and fill sand, crushed stone and road-base aggregate, and hot-mix asphalt or asphalt millings using our fleet of 11 Western Star 4700 tandem dump trucks.',
  },
  {
    id: 'faq-trucks-per-job',
    title: 'Can you assign multiple tandem trucks to a single paving or grading job?',
    description:
      'Yes. With 11 company-owned Western Star 4700 tandems, we regularly scale from 1–2 trucks for smaller deliveries up to multi-truck cycle schedules for heavy grading and continuous asphalt paving.',
  },
  {
    id: 'faq-dbe',
    title: 'Can prime contractors count JNS Hauling toward DBE participation goals?',
    description:
      'Yes. JNS Hauling LLC is DBE Certified. General contractors and civil bidders in Georgia and Alabama can contact our office directly for certification details and subcontracting quote packages.',
  },
  {
    id: 'faq-quotes',
    title: 'What information do you need to quote a hauling project?',
    description:
      'Share your project location (city/county or jobsite address), material type, pickup quarry or plant if known, estimated load volume or truck count needed, and your target timeline.',
  },
] as const;

export const CAREERS_FAQ = [
  {
    id: 'career-cdl',
    title: 'What CDL license class is required to drive a tandem dump truck for JNS?',
    description:
      'Drivers must hold a valid Class A or Class B Commercial Driver License (CDL) in good standing, along with a current DOT medical card.',
  },
  {
    id: 'career-equipment',
    title: 'What equipment will I be operating?',
    description:
      'Our fleet consists of 11 Western Star 4700 tandem dump trucks maintained out of our Columbus, GA yard.',
  },
  {
    id: 'career-routes',
    title: 'Are the hauling routes local or over-the-road?',
    description:
      'Routes are regional across Georgia and Alabama out of Columbus, GA—meaning project-based day work hauling between local quarries, asphalt plants, and jobsites rather than long-haul sleeper runs.',
  },
  {
    id: 'career-apply',
    title: 'How fast does JNS review driver applications?',
    description:
      'Applications go directly to management for review. If you have questions or want to follow up after submitting, call (706) 681-1765.',
  },
] as const;

export const ABOUT_FAQ = [
  {
    id: 'about-founded',
    title: 'When and where was JNS Hauling LLC founded?',
    description:
      'JNS Hauling LLC was established in 2014 by Jeremy Gabrielson and operates out of Columbus, Georgia at 1254 Noland Dr.',
  },
  {
    id: 'about-dbe-bids',
    title: 'How do contractors verify DBE status for public bids?',
    description:
      'Reach out via the quote page or email jandshauling@icloud.com with your bid details and project owner requirements so we can provide our documentation promptly.',
  },
  {
    id: 'about-materials-supply',
    title: 'Do you provide hauling-only or supply-and-haul quotes?',
    description:
      'We primarily provide dedicated tandem dump truck hauling from your designated pit, quarry, or asphalt plant. Reach out with your project details so dispatch can confirm what your job requires.',
  },
] as const;
