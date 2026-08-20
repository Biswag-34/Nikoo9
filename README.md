# Nikoo Homes 9 Landing Page

A responsive Nikoo Homes 9 landing page built with vinext and the OpenAI Sites workflow.

## Prerequisites

- Node.js `>=22.13.0`

## Useful Commands

```bash
npm install
npm run dev
npm run build
npm test
```

## Project Shape

- `app/`: page, interactive sections, and global styles
- `public/`: brand logo, favicon, and site imagery
- `tests/`: rendered HTML smoke test
- `worker/`: Sites worker entry used by the local and production build
- `.openai/hosting.json`: Sites project configuration

## Notes

The project is intentionally static. Unused starter database tooling, old placeholder images, and local build/cache folders were removed during cleanup.