export type Product = {
  id: number;
  name: string;
  brand: string;
  store: string;
  price: string;
  tag: string;
  image: string;
};

export const navItems = [
  { label: 'Home', href: '/' },
  { label: 'Offers & Bundles', href: '/products' },
  { label: 'New Arrivals', href: '/products' },
  { label: 'Best Sellers', href: '/products' },
  { label: 'Élan Picks', href: '/products' },
  { label: 'Categories', href: '/products' },
  { label: 'Occasions', href: '/products' },
  { label: 'Brands', href: '/brands' },
  { label: 'Stores', href: '/stores' },
  { label: 'My Orders', href: '/my-orders' },
];

export const topTicker = [
  'Free delivery on orders over AED 250',
  'Curated Gulf fragrances',
  'Luxury scents, refined taste',
  'New launches every week',
];

export const products: Product[] = [
  {
    id: 1,
    name: 'Azzaro Wanted Girl',
    brand: 'Azzaro',
    store: 'Afnan Egypt',
    price: 'AED 385',
    tag: 'Best Seller',
    image:
      'https://images.unsplash.com/photo-1541643600914-78b084683601?auto=format&fit=crop&w=900&q=80',
  },
  {
    id: 2,
    name: 'Maison Alhambra',
    brand: 'Maison',
    store: 'Emarati Scents',
    price: 'AED 295',
    tag: 'New',
    image:
      'https://images.unsplash.com/photo-1523293182086-7651a899d37f?auto=format&fit=crop&w=900&q=80',
  },
  {
    id: 3,
    name: 'Lattafa Khamrah',
    brand: 'Lattafa',
    store: 'Afnan Egypt',
    price: 'AED 415',
    tag: 'Luxury',
    image:
      'https://images.unsplash.com/photo-1592945403244-b3fbafd7f539?auto=format&fit=crop&w=900&q=80',
  },
  {
    id: 4,
    name: 'Armaf Club de Nuit',
    brand: 'Armaf',
    store: 'Emarati Scents',
    price: 'AED 420',
    tag: 'Top Rated',
    image:
      'https://images.unsplash.com/photo-1585386959984-a4155224a1ad?auto=format&fit=crop&w=900&q=80',
  },
];

export const brands = [
  {
    name: 'AMOUAGE',
    image:
      'https://images.unsplash.com/photo-1528740561666-dc2479d462a6?auto=format&fit=crop&w=500&q=80',
  },
  {
    name: 'LATTAFA',
    image:
      'https://images.unsplash.com/photo-1571781926291-c477ebfd024b?auto=format&fit=crop&w=500&q=80',
  },
  {
    name: 'ARMAF',
    image:
      'https://images.unsplash.com/photo-1602173574767-37ac01994b2a?auto=format&fit=crop&w=500&q=80',
  },
  {
    name: 'AFNAN',
    image:
      'https://images.unsplash.com/photo-1523293182086-7651a899d37f?auto=format&fit=crop&w=500&q=80',
  },
  {
    name: 'RASASI',
    image:
      'https://images.unsplash.com/photo-1563170351-be82bc888aa4?auto=format&fit=crop&w=500&q=80',
  },
  {
    name: 'Maison Alhambra',
    image:
      'https://images.unsplash.com/photo-1541643600914-78b084683601?auto=format&fit=crop&w=500&q=80',
  },
];

export const stores = [
  {
    name: 'Afnan Egypt',
    city: 'Cairo',
    image:
      'https://images.unsplash.com/photo-1528740561666-dc2479d462a6?auto=format&fit=crop&w=900&q=80',
  },
  {
    name: 'Emarati Scents',
    city: 'Dubai',
    image:
      'https://images.unsplash.com/photo-1523293182086-7651a899d37f?auto=format&fit=crop&w=900&q=80',
  },
  {
    name: 'Élan Boutique',
    city: 'UAE',
    image:
      'https://images.unsplash.com/photo-1541643600914-78b084683601?auto=format&fit=crop&w=900&q=80',
  },
];

export const categories = [
  { title: 'For Him', count: '120 scents', icon: 'M' },
  { title: 'For Her', count: '118 scents', icon: 'F' },
  { title: 'Luxury', count: '64 scents', icon: 'L' },
  { title: 'Fresh', count: '90 scents', icon: 'R' },
  { title: 'Oriental', count: '76 scents', icon: 'O' },
  { title: 'Gift Sets', count: '40 sets', icon: 'G' },
];

export const moments = [
  'Evening',
  'Wedding',
  'Office',
  'Anniversary',
  'Summer',
  'VIP Gift',
  'Daily Wear',
  'Luxury Night',
];

export const contactLinks = [
  { label: 'Instagram', href: 'https://instagram.com' },
  { label: 'Facebook', href: 'https://facebook.com' },
  { label: 'WhatsApp', href: 'https://wa.me/971000000000' },
  { label: 'hello@elanscents.com', href: 'mailto:hello@elanscents.com' },
];

export const heroStats = [
  { value: '350+', label: 'Luxury scents' },
  { value: '24h', label: 'Dispatch' },
  { value: '4.9', label: 'Customer rating' },
];
