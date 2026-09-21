# Élan Scents

A premium Gulf fragrance marketplace storefront built with Next.js and TypeScript.

## Current release

This release is a presentable storefront MVP with:

- Luxury responsive homepage
- Product, brand, and store routes
- Dynamic product detail pages
- Persistent browser cart
- Quantity management and delivery calculation
- Demo checkout flow
- Initial marketplace data model
- Admin dashboard foundation

The catalog and checkout currently use demo data. No live store API, payment gateway, authentication, or production database is enabled yet.

## Run locally

Requirements: Node.js 18.17+.

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

Useful routes:

- `/` — storefront
- `/products` — catalog
- `/products/1` — product details
- `/brands` — brands
- `/stores` — stores
- `/cart` — shopping bag
- `/checkout` — demo checkout
- `/admin` — admin foundation

## Production preview

```bash
npm run build
npm run start
```

Before a commercial launch, replace demo data with a protected database and official store feeds. Add authentication, server-side stock and price validation, a real payment provider, order persistence, rate limiting, error monitoring, backups, legal pages, and authorized catalog integrations.
