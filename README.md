# lapsleep (Frontend-Only)

A Next.js (App Router) frontend that mirrors a baby-focused site structure similar to slapsleep.com. This project uses mock data, reusable components, and Tailwind CSS for responsive styling. No backend yet.

## Tech Stack
- Next.js 15 (App Router)
- TypeScript
- Tailwind CSS

## Getting Started

1. Install dependencies
```bash
npm install
```

2. Run the dev server
```bash
npm run dev
```
Then open http://localhost:3000

## Project Structure
- `app/` — App Router pages and layouts
  - `/` — Home (hero, featured products, guides, videos)
  - `/products` — Catalog grid
  - `/products/[slug]` — Product detail
  - `/guides` — Guides index
  - `/guides/[slug]` — Guide detail
  - `/videos` — Videos index (cards link to placeholder detail or external)
  - `/about` — About page
  - `/contact` — Contact page
- `components/` — Navbar, Footer, Hero, Cards
- `data/` — Mock JSON data for products, guides, articles, videos
- `types/` — Shared TypeScript types
- `public/placeholders/` — Placeholder images (add your own)

## Notes
- All content uses mock data from `data/*.json`. Replace with your own or connect to a backend/API later.
- Add images to `public/placeholders/` and update JSON paths accordingly.
- Tailwind is preconfigured via the Next.js app template.

## Future Enhancements
- Product filtering and search
- Video detail pages with embedded players
- CMS or API integration for content
- Theming and custom brand assets

## License
This project is for demonstration purposes. Replace branding/content as needed.
