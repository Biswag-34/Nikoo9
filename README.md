# Nikoo Homes 9 Landing Page

A mobile-first, animated Next.js landing page focused on Nikoo Homes 9 project discovery and lead generation.

## Run locally

```bash
npm install
npm run dev
```

Open `http://localhost:3000`.

Run the production check before deployment:

```bash
npm run lint
npm run build
```

## Current mode

- Form mode: demo validation only
- Image mode: optimized conceptual campaign imagery; approved technical plans pending
- Pricing: Price on Request
- RERA: Coming Soon
- Search indexing: disabled until launch readiness
- Contact method: forms only

The form currently validates input and displays a demo success state. It does not transmit or store lead information.

## Content editing

Central project content is maintained in `src/data/site-content.ts`. Update project facts there rather than duplicating them inside section components.

## Architecture

```text
src/app/
  layout.tsx
  page.tsx
  globals.css

src/components/
  forms/
  layout/
  motion/
  sections/
  ui/

src/data/
  site-content.ts
```

## Media

The hero, amenity, lifestyle and location sections are already connected to mobile-optimized assets in `public/images`. Every conceptual image is visibly identified as an artistic impression.

Only the approved residence floor plans and master plan remain as **Coming soon** placeholders. See `IMAGE_ASSET_GUIDE.md` for exact filenames, dimensions and replacement rules.

The hero uses separate mobile and desktop compositions. Production images are WebP; editable PNG masters are retained beside them.

## Logo replacement

The header and footer currently use a temporary Nikoo 9 text wordmark. Replace those wordmarks with the approved Nikoo Homes 9 logo when supplied.

## Before publishing

1. Connect the lead form to an approved submission endpoint.
2. Add the verified project-specific RERA registration number.
3. Add the approved floor plans and master plan using the paths in `IMAGE_ASSET_GUIDE.md`.
4. Reconfirm pricing, areas, amenities, possession and location data.
5. Complete legal and privacy review.
6. Add privacy/terms routes if required.
7. Add analytics and conversion tracking.
8. Change metadata robots to allow indexing.
9. Run responsive, accessibility and production-build checks.
