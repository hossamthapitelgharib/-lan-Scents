export type UserRole = 'customer' | 'store-owner' | 'admin';

export type User = {
  id: string;
  name: string;
  email: string;
  role: UserRole;
  createdAt: string;
};

export type Store = {
  id: string;
  name: string;
  city: string;
  status: 'active' | 'pending' | 'suspended';
  commissionRate: number;
  ownerId: string;
  createdAt: string;
};

export type Brand = {
  id: string;
  name: string;
  logo: string;
  description: string;
};

export type Product = {
  id: string;
  name: string;
  brandId: string;
  category: 'for-him' | 'for-her' | 'unisex';
  description: string;
  heroImage: string;
  gallery: string[];
  createdAt: string;
};

export type ProductVariant = {
  id: string;
  productId: string;
  size: string;
  sku: string;
  price: number;
  currency: 'AED';
  stock: number;
  status: 'active' | 'draft' | 'archived';
};

export type StoreOffer = {
  id: string;
  storeId: string;
  productId: string;
  variantId: string;
  price: number;
  currency: 'AED';
  stock: number;
  status: 'active' | 'paused';
  updatedAt: string;
};

export type CustomerOrder = {
  id: string;
  userId: string;
  status: 'pending' | 'processing' | 'shipped' | 'delivered' | 'cancelled';
  total: number;
  currency: 'AED';
  createdAt: string;
};

export type OrderItem = {
  id: string;
  orderId: string;
  productId: string;
  variantId: string;
  storeId: string;
  quantity: number;
  unitPrice: number;
  total: number;
};

export type Commission = {
  id: string;
  orderId: string;
  storeId: string;
  amount: number;
  rate: number;
  status: 'pending' | 'paid';
};

export const users: User[] = [
  { id: 'u-1', name: 'Sarah Ali', email: 'sarah@example.com', role: 'customer', createdAt: '2026-09-01' },
  { id: 'u-2', name: 'Afnan Manager', email: 'afnan@example.com', role: 'store-owner', createdAt: '2026-09-02' },
  { id: 'u-3', name: 'Admin User', email: 'admin@elanscents.com', role: 'admin', createdAt: '2026-09-01' },
];

export const stores: Store[] = [
  { id: 's-1', name: 'Afnan Egypt', city: 'Cairo', status: 'active', commissionRate: 0.12, ownerId: 'u-2', createdAt: '2026-09-10' },
  { id: 's-2', name: 'Emarati Scents', city: 'Dubai', status: 'active', commissionRate: 0.1, ownerId: 'u-2', createdAt: '2026-09-11' },
  { id: 's-3', name: 'Élan Boutique', city: 'UAE', status: 'pending', commissionRate: 0.08, ownerId: 'u-2', createdAt: '2026-09-12' },
];

export const brands: Brand[] = [
  { id: 'b-1', name: 'Azzaro', logo: 'https://images.unsplash.com/...', description: 'Bold and elegant scents with sensual depth.' },
  { id: 'b-2', name: 'Lattafa', logo: 'https://images.unsplash.com/...', description: 'Warm, rich and contemporary perfume expressions.' },
  { id: 'b-3', name: 'Maison Alhambra', logo: 'https://images.unsplash.com/...', description: 'Luxury-inspired silhouettes with modern appeal.' },
];

export const products: Product[] = [
  { id: 'p-1', name: 'Azzaro Wanted Girl', brandId: 'b-1', category: 'for-her', description: 'Elegant amber floral with sensual warmth.', heroImage: 'https://images.unsplash.com/photo-1541643600914-78b084683601?auto=format&fit=crop&w=1200&q=80', gallery: ['https://images.unsplash.com/photo-1541643600914-78b084683601?auto=format&fit=crop&w=900&q=80'], createdAt: '2026-09-15' },
  { id: 'p-2', name: 'Lattafa Khamrah', brandId: 'b-2', category: 'unisex', description: 'Warm spice with woods and amber depth.', heroImage: 'https://images.unsplash.com/photo-1592945403244-b3fbafd7f539?auto=format&fit=crop&w=1200&q=80', gallery: ['https://images.unsplash.com/photo-1592945403244-b3fbafd7f539?auto=format&fit=crop&w=900&q=80'], createdAt: '2026-09-15' },
];

export const productVariants: ProductVariant[] = [
  { id: 'pv-1', productId: 'p-1', size: '100ml', sku: 'AZW-100', price: 385, currency: 'AED', stock: 11, status: 'active' },
  { id: 'pv-2', productId: 'p-2', size: '100ml', sku: 'LAT-100', price: 415, currency: 'AED', stock: 8, status: 'active' },
];

export const storeOffers: StoreOffer[] = [
  { id: 'so-1', storeId: 's-1', productId: 'p-1', variantId: 'pv-1', price: 385, currency: 'AED', stock: 11, status: 'active', updatedAt: '2026-09-20T10:00:00.000Z' },
  { id: 'so-2', storeId: 's-2', productId: 'p-1', variantId: 'pv-1', price: 405, currency: 'AED', stock: 4, status: 'active', updatedAt: '2026-09-20T10:00:00.000Z' },
  { id: 'so-3', storeId: 's-1', productId: 'p-2', variantId: 'pv-2', price: 415, currency: 'AED', stock: 8, status: 'active', updatedAt: '2026-09-20T10:00:00.000Z' },
];

export const orders: CustomerOrder[] = [
  { id: 'o-1', userId: 'u-1', status: 'delivered', total: 415, currency: 'AED', createdAt: '2026-09-10' },
  { id: 'o-2', userId: 'u-1', status: 'processing', total: 385, currency: 'AED', createdAt: '2026-09-18' },
];

export const orderItems: OrderItem[] = [
  { id: 'oi-1', orderId: 'o-1', productId: 'p-2', variantId: 'pv-2', storeId: 's-1', quantity: 1, unitPrice: 415, total: 415 },
  { id: 'oi-2', orderId: 'o-2', productId: 'p-1', variantId: 'pv-1', storeId: 's-1', quantity: 1, unitPrice: 385, total: 385 },
];

export const commissions: Commission[] = [
  { id: 'c-1', orderId: 'o-1', storeId: 's-1', amount: 49.8, rate: 0.12, status: 'paid' },
  { id: 'c-2', orderId: 'o-2', storeId: 's-1', amount: 46.2, rate: 0.12, status: 'pending' },
];
