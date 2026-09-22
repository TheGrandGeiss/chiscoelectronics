import type { BrandSlug, CategorySlug } from './site';

export type Product = {
  slug: string;
  name: string;
  brand: BrandSlug;
  category: CategorySlug;
  /* null renders as "Ask for today's price". Use it for anything volatile. */
  price: number | null;
  summary: string;
  specs: { label: string; value: string }[];
  inStock: boolean;
  featured?: boolean;
};

/* EVERY price and stock flag below is maintained by hand.
   Change one, then change PRICES_VERIFIED in data/site.ts. */
export const PRODUCTS: Product[] = [
  {
    slug: 'lg-55-ut80-4k-smart-tv',
    name: '55" UT80 4K Smart TV',
    brand: 'lg',
    category: 'televisions',
    price: 685000,
    summary:
      'The size most sitting rooms in Eket settle on, with WebOS and three HDMI ports.',
    specs: [
      { label: 'Screen size', value: '55 inches' },
      { label: 'Resolution', value: '4K UHD, 3840 x 2160' },
      { label: 'Platform', value: 'WebOS with Netflix and YouTube' },
      { label: 'Warranty', value: '1 year, handled at the plaza' },
    ],
    inStock: true,
    featured: true,
  },
  {
    slug: 'hisense-65-a6k-4k-smart-tv',
    name: '65" A6K 4K Smart TV',
    brand: 'hisense',
    category: 'televisions',
    price: 899000,
    summary:
      'Bigger panel, gentler price. Popular for sitting rooms above 20 square metres.',
    specs: [
      { label: 'Screen size', value: '65 inches' },
      { label: 'Resolution', value: '4K UHD' },
      { label: 'Platform', value: 'VIDAA smart TV' },
      { label: 'Warranty', value: '1 year' },
    ],
    inStock: true,
    featured: true,
  },
  {
    slug: 'samsung-75-cu7000-crystal-uhd',
    name: '75" CU7000 Crystal UHD',
    brand: 'samsung',
    category: 'televisions',
    price: 1950000,
    summary:
      'Our largest panel on the floor. Wall mount and installation included within Eket.',
    specs: [
      { label: 'Screen size', value: '75 inches' },
      { label: 'Resolution', value: '4K Crystal UHD' },
      { label: 'Platform', value: 'Tizen' },
      { label: 'Includes', value: 'Wall mount and installation' },
    ],
    inStock: true,
  },
  {
    slug: 'hisense-50-a6k-4k-smart-tv',
    name: '50" A6K 4K Smart TV',
    brand: 'hisense',
    category: 'televisions',
    price: 480000,
    summary:
      'The entry point into 4K. Fits a standard TV console without crowding it.',
    specs: [
      { label: 'Screen size', value: '50 inches' },
      { label: 'Resolution', value: '4K UHD' },
      { label: 'Warranty', value: '1 year' },
    ],
    inStock: true,
  },
  {
    slug: 'firman-eco8990es-6-5kva-generator',
    name: 'ECO8990ES 6.5KVA Generator',
    brand: 'firman',
    category: 'generators',
    price: 1150000,
    summary:
      'Key start, enough to carry a duplex including two air conditioners.',
    specs: [
      { label: 'Output', value: '6.5KVA' },
      { label: 'Start', value: 'Key start with battery' },
      { label: 'Fuel', value: 'Petrol' },
      { label: 'Tank', value: '25 litres' },
    ],
    inStock: true,
    featured: true,
  },
  {
    slug: 'firman-spg3000-2-5kva-generator',
    name: 'SPG3000 2.5KVA Generator',
    brand: 'firman',
    category: 'generators',
    price: 385000,
    summary:
      'Recoil start, sized for a flat running fans, lights, a fridge, and a TV.',
    specs: [
      { label: 'Output', value: '2.5KVA' },
      { label: 'Start', value: 'Recoil' },
      { label: 'Fuel', value: 'Petrol' },
      { label: 'Run time', value: 'About 9 hours on a full tank' },
    ],
    inStock: true,
  },
  {
    slug: 'maxmech-mx3800-3-5kva-generator',
    name: 'MX3800 3.5KVA Generator',
    brand: 'maxmech',
    category: 'generators',
    price: 465000,
    summary:
      'Quieter frame than most sets in this class, which matters in a compound.',
    specs: [
      { label: 'Output', value: '3.5KVA' },
      { label: 'Start', value: 'Key start' },
      { label: 'Fuel', value: 'Petrol' },
    ],
    inStock: false,
  },
  {
    slug: 'maxmech-mx10000-10kva-diesel-generator',
    name: 'MX10000 10KVA Diesel Generator',
    brand: 'maxmech',
    category: 'generators',
    price: null,
    summary:
      'Office and guest house set. Price moves with diesel plant costs, so we quote on the day.',
    specs: [
      { label: 'Output', value: '10KVA' },
      { label: 'Fuel', value: 'Diesel' },
      { label: 'Best for', value: 'Offices, guest houses, small sites' },
    ],
    inStock: true,
  },
  {
    slug: 'lg-1-5hp-dual-inverter-split-ac',
    name: '1.5HP Dual Inverter Split AC',
    brand: 'lg',
    category: 'air-conditioners',
    price: 720000,
    summary:
      'The unit we fit most often in bedrooms. Inverter compressor, so it is kinder on a generator.',
    specs: [
      { label: 'Capacity', value: '1.5HP' },
      { label: 'Type', value: 'Dual inverter, copper coil' },
      { label: 'Room size', value: 'Up to about 18 square metres' },
      { label: 'Includes', value: 'Installation within Eket' },
    ],
    inStock: true,
    featured: true,
  },
  {
    slug: 'haier-thermocool-1hp-split-ac',
    name: '1HP Split Air Conditioner',
    brand: 'haier-thermocool',
    category: 'air-conditioners',
    price: 425000,
    summary:
      'Standard compressor, straightforward to service anywhere in Akwa Ibom.',
    specs: [
      { label: 'Capacity', value: '1HP' },
      { label: 'Room size', value: 'Up to about 12 square metres' },
      { label: 'Includes', value: 'Installation within Eket' },
    ],
    inStock: true,
  },
  {
    slug: 'samsung-2hp-inverter-split-ac',
    name: '2HP Inverter Split AC',
    brand: 'samsung',
    category: 'air-conditioners',
    price: 980000,
    summary:
      'For sitting rooms and open plan offices. Fast cool mode for afternoons.',
    specs: [
      { label: 'Capacity', value: '2HP' },
      { label: 'Type', value: 'Inverter' },
      { label: 'Room size', value: 'Up to about 28 square metres' },
    ],
    inStock: true,
  },
  {
    slug: 'haier-thermocool-2-5hp-split-ac',
    name: '2.5HP Split Air Conditioner',
    brand: 'haier-thermocool',
    category: 'air-conditioners',
    price: 1180000,
    summary:
      'Largest split unit we stock. Common in shops and reception areas.',
    specs: [
      { label: 'Capacity', value: '2.5HP' },
      { label: 'Room size', value: 'Up to about 36 square metres' },
    ],
    inStock: false,
  },
  {
    slug: 'haier-thermocool-319l-chest-freezer',
    name: '319L Chest Freezer',
    brand: 'haier-thermocool',
    category: 'freezers-and-refrigerators',
    price: 520000,
    summary:
      'Holds cold for hours without power, which is the reason most people buy it.',
    specs: [
      { label: 'Capacity', value: '319 litres' },
      { label: 'Type', value: 'Chest freezer' },
      { label: 'Warranty', value: '5 years on compressor' },
    ],
    inStock: true,
    featured: true,
  },
  {
    slug: 'haier-thermocool-200l-chest-freezer',
    name: '200L Chest Freezer',
    brand: 'haier-thermocool',
    category: 'freezers-and-refrigerators',
    price: 385000,
    summary:
      'Fits a small kitchen or a provisions shop without taking the whole wall.',
    specs: [
      { label: 'Capacity', value: '200 litres' },
      { label: 'Warranty', value: '5 years on compressor' },
    ],
    inStock: true,
  },
  {
    slug: 'lg-double-door-refrigerator-437l',
    name: '437L Double Door Refrigerator',
    brand: 'lg',
    category: 'freezers-and-refrigerators',
    price: 1420000,
    summary: 'Inverter linear compressor with a water dispenser on the door.',
    specs: [
      { label: 'Capacity', value: '437 litres' },
      { label: 'Compressor', value: 'Inverter linear, 10 year warranty' },
      { label: 'Extras', value: 'Door water dispenser' },
    ],
    inStock: true,
  },
  {
    slug: 'royal-upright-freezer-6-drawer',
    name: '6 Drawer Upright Freezer',
    brand: 'royal',
    category: 'freezers-and-refrigerators',
    price: 610000,
    summary:
      'Upright footprint for tight kitchens. Drawers keep things findable.',
    specs: [
      { label: 'Type', value: 'Upright, 6 drawers' },
      { label: 'Warranty', value: '2 years' },
    ],
    inStock: true,
  },
  {
    slug: 'lg-8kg-top-load-washing-machine',
    name: '8kg Top Load Washing Machine',
    brand: 'lg',
    category: 'washing-machines',
    price: 545000,
    summary:
      'Top load, so it tolerates the low water pressure common on the estate lines.',
    specs: [
      { label: 'Capacity', value: '8kg' },
      { label: 'Type', value: 'Fully automatic top load' },
      { label: 'Warranty', value: '2 years' },
    ],
    inStock: true,
  },
  {
    slug: 'samsung-9kg-front-load-washing-machine',
    name: '9kg Front Load Washing Machine',
    brand: 'samsung',
    category: 'washing-machines',
    price: 890000,
    summary:
      'Front load with a ceramic heater. Uses noticeably less water per cycle.',
    specs: [
      { label: 'Capacity', value: '9kg' },
      { label: 'Type', value: 'Front load' },
      { label: 'Spin', value: '1200rpm' },
    ],
    inStock: false,
  },
  {
    slug: 'haier-thermocool-7kg-twin-tub-washer',
    name: '7kg Twin Tub Washer',
    brand: 'haier-thermocool',
    category: 'washing-machines',
    price: 235000,
    summary:
      'Manual twin tub. Cheapest way into a washing machine and easy to repair.',
    specs: [
      { label: 'Capacity', value: '7kg' },
      { label: 'Type', value: 'Twin tub, semi automatic' },
    ],
    inStock: true,
  },
  {
    slug: 'hisense-2-1ch-soundbar-with-subwoofer',
    name: '2.1 Channel Soundbar with Subwoofer',
    brand: 'hisense',
    category: 'home-audio',
    price: 265000,
    summary:
      'Wireless subwoofer, connects to any of our TVs over HDMI ARC or Bluetooth.',
    specs: [
      { label: 'Channels', value: '2.1' },
      { label: 'Power', value: '200W' },
      { label: 'Connection', value: 'HDMI ARC, optical, Bluetooth' },
    ],
    inStock: true,
  },
  {
    slug: 'royal-5-1-home-theatre-system',
    name: '5.1 Home Theatre System',
    brand: 'royal',
    category: 'home-audio',
    price: 178000,
    summary:
      'Five satellites and a subwoofer. Built loud, which is usually the brief.',
    specs: [
      { label: 'Channels', value: '5.1' },
      { label: 'Inputs', value: 'Bluetooth, USB, HDMI' },
    ],
    inStock: true,
  },
  {
    slug: 'royal-30l-microwave-oven',
    name: '30L Microwave Oven',
    brand: 'royal',
    category: 'small-appliances',
    price: 165000,
    summary:
      'Digital panel, grill function, and a turntable big enough for a full plate.',
    specs: [
      { label: 'Capacity', value: '30 litres' },
      { label: 'Functions', value: 'Microwave and grill' },
    ],
    inStock: true,
  },
  {
    slug: 'maxmech-18-inch-rechargeable-standing-fan',
    name: '18" Rechargeable Standing Fan',
    brand: 'maxmech',
    category: 'small-appliances',
    price: 98000,
    summary:
      'Holds a charge through a full evening of outage. Solar input on the back.',
    specs: [
      { label: 'Size', value: '18 inches' },
      { label: 'Run time', value: 'Up to 8 hours' },
      { label: 'Charging', value: 'Mains and solar input' },
    ],
    inStock: true,
  },
  {
    slug: 'royal-2l-blender-with-grinder',
    name: '2L Blender with Grinder',
    brand: 'royal',
    category: 'small-appliances',
    price: 72000,
    summary: 'Two jars, stainless blades, and a motor that survives egusi.',
    specs: [
      { label: 'Capacity', value: '2 litres' },
      { label: 'Includes', value: 'Grinding jar' },
    ],
    inStock: true,
  },
];

export function productsIn(category: string) {
  return PRODUCTS.filter((p) => p.category === category);
}

export function startingPrice(category: string) {
  const prices = productsIn(category)
    .map((p) => p.price)
    .filter((p): p is number => p !== null);
  return prices.length ? Math.min(...prices) : null;
}

export function brandsIn(category: string) {
  return Array.from(new Set(productsIn(category).map((p) => p.brand)));
}
