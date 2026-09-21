export type StoreOffer = {
  offerId: string;
  storeId: string;
  storeName: string;
  productId: string;
  variantId: string;
  price: number;
  currency: 'AED';
  stockStatus: 'available' | 'low-stock' | 'out-of-stock' | 'unavailable';
  availableQty: number | null;
  lastUpdated: string;
  source: 'manual' | 'feed' | 'api' | 'demo';
};

export type ProductVariant = {
  variantId: string;
  productId: string;
  size: string;
  sku: string;
  offers: StoreOffer[];
};

export type MarketplaceProduct = {
  productId: string;
  name: string;
  brand: string;
  category: 'for-him' | 'for-her' | 'unisex';
  gender: 'male' | 'female' | 'unisex';
  variants: ProductVariant[];
};

export const marketplaceProducts: MarketplaceProduct[] = [
  {
    productId: 'prd-001',
    name: 'Azzaro Wanted Girl',
    brand: 'Azzaro',
    category: 'for-her',
    gender: 'female',
    variants: [
      {
        variantId: 'var-001',
        productId: 'prd-001',
        size: '100ml',
        sku: 'AZW-100',
        offers: [
          {
            offerId: 'offer-001',
            storeId: 'store-afnan',
            storeName: 'Afnan Egypt',
            productId: 'prd-001',
            variantId: 'var-001',
            price: 385,
            currency: 'AED',
            stockStatus: 'available',
            availableQty: 12,
            lastUpdated: '2026-09-21T00:00:00.000Z',
            source: 'demo',
          },
          {
            offerId: 'offer-002',
            storeId: 'store-emarati',
            storeName: 'Emarati Scents',
            productId: 'prd-001',
            variantId: 'var-001',
            price: 410,
            currency: 'AED',
            stockStatus: 'low-stock',
            availableQty: 3,
            lastUpdated: '2026-09-21T00:00:00.000Z',
            source: 'demo',
          },
        ],
      },
    ],
  },
  {
    productId: 'prd-002',
    name: 'Lattafa Khamrah',
    brand: 'Lattafa',
    category: 'unisex',
    gender: 'unisex',
    variants: [
      {
        variantId: 'var-002',
        productId: 'prd-002',
        size: '100ml',
        sku: 'LAT-100',
        offers: [
          {
            offerId: 'offer-003',
            storeId: 'store-afnan',
            storeName: 'Afnan Egypt',
            productId: 'prd-002',
            variantId: 'var-002',
            price: 415,
            currency: 'AED',
            stockStatus: 'available',
            availableQty: 8,
            lastUpdated: '2026-09-21T00:00:00.000Z',
            source: 'demo',
          },
        ],
      },
    ],
  },
];

export const storefrontRules = {
  priceSelectionStrategy: 'lowest available offer by variant',
  productVisibleIf: 'at least one active store offer exists',
  unavailableRule: 'show unavailable state if no current verified offer exists',
  futureSync: 'api | feed | webhook | manual-import',
};
