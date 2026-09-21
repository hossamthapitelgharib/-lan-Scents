export type ProductDetail = {
  id: string;
  name: string;
  brand: string;
  store: string;
  price: string;
  tag: string;
  heroImage: string;
  gallery: string[];
  description: string;
  notes: string[];
  size: string;
  rating: number;
  stock: string;
};

export const productDetails: ProductDetail[] = [
  {
    id: '1',
    name: 'Azzaro Wanted Girl',
    brand: 'Azzaro',
    store: 'Afnan Egypt',
    price: 'AED 385',
    tag: 'Best Seller',
    heroImage:
      'https://images.unsplash.com/photo-1541643600914-78b084683601?auto=format&fit=crop&w=1200&q=80',
    gallery: [
      'https://images.unsplash.com/photo-1541643600914-78b084683601?auto=format&fit=crop&w=900&q=80',
      'https://images.unsplash.com/photo-1523293182086-7651a899d37f?auto=format&fit=crop&w=900&q=80',
      'https://images.unsplash.com/photo-1592945403244-b3fbafd7f539?auto=format&fit=crop&w=900&q=80',
    ],
    description:
      'A bold feminine oriental fragrance with rich amber warmth, soft petals, and a luminous sensual trail designed for evening elegance.',
    notes: ['Amber', 'Floral', 'Vanilla', 'Musk'],
    size: '100ml',
    rating: 4.9,
    stock: 'In stock',
  },
  {
    id: '2',
    name: 'Maison Alhambra',
    brand: 'Maison',
    store: 'Emarati Scents',
    price: 'AED 295',
    tag: 'New',
    heroImage:
      'https://images.unsplash.com/photo-1523293182086-7651a899d37f?auto=format&fit=crop&w=1200&q=80',
    gallery: [
      'https://images.unsplash.com/photo-1523293182086-7651a899d37f?auto=format&fit=crop&w=900&q=80',
      'https://images.unsplash.com/photo-1585386959984-a4155224a1ad?auto=format&fit=crop&w=900&q=80',
      'https://images.unsplash.com/photo-1592945403244-b3fbafd7f539?auto=format&fit=crop&w=900&q=80',
    ],
    description:
      'An elegant, light-to-mid profile that blends soft florals with understated woody sweetness for everyday luxury.',
    notes: ['Rose', 'Wood', 'Pear', 'Sandalwood'],
    size: '75ml',
    rating: 4.8,
    stock: 'Low stock',
  },
  {
    id: '3',
    name: 'Lattafa Khamrah',
    brand: 'Lattafa',
    store: 'Afnan Egypt',
    price: 'AED 415',
    tag: 'Luxury',
    heroImage:
      'https://images.unsplash.com/photo-1592945403244-b3fbafd7f539?auto=format&fit=crop&w=1200&q=80',
    gallery: [
      'https://images.unsplash.com/photo-1592945403244-b3fbafd7f539?auto=format&fit=crop&w=900&q=80',
      'https://images.unsplash.com/photo-1541643600914-78b084683601?auto=format&fit=crop&w=900&q=80',
      'https://images.unsplash.com/photo-1585386959984-a4155224a1ad?auto=format&fit=crop&w=900&q=80',
    ],
    description:
      'A warm and refined perfume built around spice, gourmand sweetness, and deep woody warmth for a night-scent aura.',
    notes: ['Spice', 'Cinnamon', 'Amber', 'Wood'],
    size: '100ml',
    rating: 5,
    stock: 'In stock',
  },
];
