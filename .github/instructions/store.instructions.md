---
description: Store feature setup and management guide for Karen Chess Club website
---

# Store Feature - Architecture & Management Guide

## Overview

The Store feature allows static display of chess merchandise with direct-contact purchasing (no payment integration). This keeps your site fully static while leveraging Sanity CMS for content management.

## Architecture

### Tech Stack
- **CMS**: Sanity Studio with custom Product schema
- **Frontend**: Next.js server component (ISR caching) + client component (filtering)
- **Styling**: Tailwind CSS (matches site design system)
- **Purchasing**: Direct contact links (email, WhatsApp, contact form)

### How It Works

1. **Data Management**: You manage products in Sanity Studio (title, price, image, category, stock status)
2. **ISR Caching**: Product data is cached for 1 hour (3600s revalidate), then refreshed automatically
3. **Frontend**: Next.js server fetches products, passes to client component for interactive filtering
4. **Purchasing**: "Inquire Now" button links to contact form with product pre-populated as query parameter

## Features

- ✅ **5 Product Categories**: Boards & Sets, Apparel, Books & Media, Training Tools, Merchandise
- ✅ **Category Filtering**: Client-side filter buttons (fast, no network required)
- ✅ **Stock Status**: Show "Out of Stock" badge for unavailable items
- ✅ **Price Display**: KES (Kenyan Shilling) pricing with locale formatting
- ✅ **Featured Products**: Mark products as "featured" for homepage display (optional)
- ✅ **ISR Caching**: Products update automatically every hour
- ✅ **Static Deployment**: No backend servers needed, hosted on Vercel

## File Structure

```
nextjs-kcc_site/
├── src/app/
│   ├── store/
│   │   └── page.tsx (Server component, fetches products, sets ISR)
│   ├── components/
│   │   └── sections/
│   │       └── StoreContent.tsx (Client component, handles filtering & UI)
│   └── components/layout/
│       └── Header.jsx (Updated with /store link)
├── sanity/
│   └── queries.ts (Added FEATURED_PRODUCTS_QUERY, ALL_PRODUCTS_QUERY, etc.)

studio-kcc_site/
└── schemaTypes/
    ├── product.ts (New Product schema)
    └── index.ts (Updated exports)
```

## Product Schema Fields

| Field | Type | Required | Notes |
|-------|------|----------|-------|
| Title | String | ✅ | Product name (e.g., "Professional Chess Board Set") |
| Slug | Slug | ✅ | Auto-generated from title |
| Description | Text | ❌ | Short product description (displayed on card) |
| Price | Number | ✅ | Price in KES (Kenyan Shillings) |
| Image | Image | ✅ | Product photo with hotspot cropping |
| Category | Select | ✅ | One of: boards, apparel, books, tools, merchandise |
| Featured | Boolean | ❌ | Show on homepage featured section (default: false) |
| In Stock | Boolean | ✅ | Availability toggle (default: true) |
| Published At | DateTime | ❌ | Auto-set to current time |

## GROQ Queries

```typescript
// Fetch featured products (e.g., for homepage)
FEATURED_PRODUCTS_QUERY: Returns products where featured=true, limited to 8

// Fetch all products (for /store page)
ALL_PRODUCTS_QUERY: Returns all products with full details

// Fetch by category (optional, not currently used but available)
PRODUCTS_BY_CATEGORY_QUERY: Filter products by specific category using $category parameter
```

## Managing Products in Sanity

### Adding a Product
1. Go to Sanity Studio
2. Click "Create" → "Product"
3. Fill in all required fields:
   - Title (e.g., "Wooden Chess Set Deluxe")
   - Price (e.g., 5500 for KES 5,500)
   - Image (upload product photo)
   - Category (select from dropdown)
4. Mark as "Featured" if you want it on homepage (optional)
5. Ensure "In Stock" is checked if available
6. Click "Publish"

### Editing a Product
1. Find product in list view
2. Click to open
3. Update any fields (price, description, image, stock status)
4. Click "Publish"
5. Changes appear on site within 1 hour (ISR refresh)

### Managing Stock Status
- **In Stock (checked)**: "Inquire Now" button active
- **Out of Stock (unchecked)**: Shows "Coming Soon" button (disabled)

### Marking Out of Stock
1. Open product
2. Uncheck "In Stock"
3. Publish
4. Button changes to "Coming Soon" automatically

## Testing Locally

### Setup
```bash
cd nextjs-kcc_site
npm install
npm run dev
```

### Access Store
- Homepage: http://localhost:3000
- Store page: http://localhost:3000/store
- Check Header for "Store" link

### Test Features
1. **Filtering**: Click category buttons, verify products filter correctly
2. **Stock Status**: Go to Sanity, uncheck "In Stock" on a product, refresh browser — should show "Coming Soon"
3. **Links**: Click "Inquire Now", verify it links to `/contact?product=ProductName`

## Deployment

### Vercel (No changes needed)
- Already configured in `vercel.json`
- Just push to main branch
- ISR works automatically

### Environment Variables
No additional env vars needed. Uses existing Sanity setup:
- `projectId: "e0f5onws"`
- `dataset: "production"`
- `apiVersion: "2024-01-01"`
- `useCdn: false` (allows ISR)

## Enhancing the Store (Optional)

### Add Featured Section to Homepage
Create a "StorePreview" component in `src/app/components/sections/StorePreview.jsx`:
```jsx
export function StorePreview({ products = [] }) {
  return (
    <section className="py-20">
      <h2>Featured Products</h2>
      {/* Grid of featured products, link to /store for all */}
    </section>
  );
}
```

Then in `src/app/page.tsx`:
```typescript
const featuredProducts = await client.fetch(FEATURED_PRODUCTS_QUERY);
<StorePreview products={featuredProducts} />
```

### Add Shopping Cart Preview (Optional, still no checkout)
Store selected items in localStorage, show cart count in header (stateless, no backend).

### Add Product Details Page (Optional)
Create `src/app/store/[slug]/page.tsx` for individual product pages with rich descriptions.

## Search Engine Optimization

### Meta Tags
- Store page title: "Store | Karen Chess Club"
- Meta description: "Browse and purchase chess merchandise..."
- Auto-generated by Next.js `Metadata` export

### Rich Product Data
Consider adding Schema.org markup for products (future enhancement).

## Performance Considerations

- **ISR Caching**: 1-hour revalidation balances freshness with performance
- **Image Optimization**: Next.js auto-optimizes all product images
- **Static Export**: No database queries at runtime; all data cached via ISR
- **Bundle Size**: ~15KB additional JS (StoreContent filtering logic)

## Future Enhancements

- ☐ Variant system (size, color options) stored as array in Sanity
- ☐ Product reviews/ratings stored as separate schema type
- ☐ Inventory sync with Sanity webhooks
- ☐ Discount codes manageable in Sanity
- ☐ Email notifications on product inquiries (via EmailJS)
- ☐ Shopping cart with localStorage persistence
- ☐ Social media integration (share products)

## Troubleshooting

### Products not showing on store page?
1. Check Sanity Studio — are products published?
2. Verify ISR cache: Force refresh after 1 hour
3. Check browser console for Sanity API errors
4. Ensure products have images and prices set

### "Inquire Now" links broken?
1. Check query parameter: `/contact?product=ProductName`
2. Verify Contact component reads query params
3. Clear browser cache and retry

### Stock status not updating?
1. Uncheck "In Stock" in Sanity
2. Publish the product
3. Wait for ISR refresh (~10 seconds on Vercel)
4. Hard refresh browser (Ctrl+F5) to bypass cache

## Questions?

Refer to:
- Sanity CMS docs: https://www.sanity.io/docs
- Next.js ISR docs: https://nextjs.org/docs/basic-features/data-fetching/incremental-static-regeneration
- Store page schema: `studio-kcc_site/schemaTypes/product.ts`
