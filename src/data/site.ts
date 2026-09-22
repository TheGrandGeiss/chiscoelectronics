export const SITE = {
  name: 'Chisco Electronics And Household Plaza',
  shortName: 'Chisco',
  address: 'Plot 1A Grace Bill Road, Eket, Akwa Ibom State',
  hours: 'Monday to Saturday, 8:00am to 7:00pm. Closed Sundays.',
  /* Confirm the real founding year with the owner before the pitch. */
  yearsTrading: 15,
};

/* Update this by hand every time you touch a price in data/products.ts.
   This stamp is the honest version of a static catalogue, and it is the
   single clearest argument for the admin dashboard. */
export const PRICES_VERIFIED = '12 September 2026';

export const CATEGORIES = [
  {
    slug: 'televisions',
    name: 'Smart televisions',
    blurb:
      '50 to 75 inch panels from brands people in Eket can service locally.',
  },
  {
    slug: 'generators',
    name: 'Power generators',
    blurb:
      'Petrol and diesel sets sized for a flat, a duplex, or a small office.',
  },
  {
    slug: 'air-conditioners',
    name: 'Split unit air conditioners',
    blurb: '1HP to 2.5HP inverter and standard units, installation included.',
  },
  {
    slug: 'freezers-and-refrigerators',
    name: 'Freezers and refrigerators',
    blurb: 'Chest freezers, upright freezers, and double door fridges.',
  },
  {
    slug: 'washing-machines',
    name: 'Washing machines',
    blurb: 'Top load and front load, 7kg upward.',
  },
  {
    slug: 'home-audio',
    name: 'Home audio',
    blurb: 'Soundbars and home theatre systems.',
  },
  {
    slug: 'small-appliances',
    name: 'Small appliances',
    blurb: 'Blenders, microwaves, pressing irons, and rechargeable fans.',
  },
] as const;

export type CategorySlug = (typeof CATEGORIES)[number]['slug'];

export const BRANDS = [
  { slug: 'haier-thermocool', name: 'Haier Thermocool' },
  { slug: 'lg', name: 'LG' },
  { slug: 'samsung', name: 'Samsung' },
  { slug: 'hisense', name: 'Hisense' },
  { slug: 'royal', name: 'Royal' },
  { slug: 'firman', name: 'Firman' },
  { slug: 'maxmech', name: 'Maxmech' },
] as const;

export type BrandSlug = (typeof BRANDS)[number]['slug'];

export const PRICE_BANDS = [
  { id: 'a', label: 'Under \u20A6300,000', min: 0, max: 300000 },
  {
    id: 'b',
    label: '\u20A6300,000 to \u20A6700,000',
    min: 300000,
    max: 700000,
  },
  { id: 'c', label: '\u20A6700,000 to \u20A61.5m', min: 700000, max: 1500000 },
  { id: 'd', label: 'Above \u20A61.5m', min: 1500000, max: Infinity },
] as const;

export function categoryName(slug: string) {
  return CATEGORIES.find((c) => c.slug === slug)?.name ?? slug;
}

export function brandName(slug: string) {
  return BRANDS.find((b) => b.slug === slug)?.name ?? slug;
}
