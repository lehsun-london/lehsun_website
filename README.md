# Lehsun Holding Page

Single-page Next.js holding website for **Lehsun**, designed as a premium Indian catering launch page with WhatsApp-first conversion.

## Tech Stack

- Next.js (App Router)
- TypeScript
- CSS (custom design system + motion)

## Run Locally

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Validation

```bash
npm run lint
npm run typecheck
npm run build
```

## Project Structure

- `src/app/layout.tsx`: metadata, font setup, app shell
- `src/app/page.tsx`: holding page composition
- `src/app/globals.css`: brand tokens, responsive styles, animations
- `src/components/Hero.tsx`: top fold with logo, heading, CTA actions
- `src/components/CTACluster.tsx`: external CTA buttons
- `src/components/SectionShell.tsx`: reusable content section wrapper
- `src/components/MotifBand.tsx`: decorative motif panel with text overlay
- `src/content/site.ts`: centralized typed content + links
- `public/assets/brand`: Lehsun logo and motif assets

## Editing Content

Update copy, links, contact number, and labels in:

- `src/content/site.ts`

## Deploy to Vercel

1. Push this repo to GitHub.
2. Import the repository into Vercel.
3. Framework preset: **Next.js**.
4. Build command: `npm run build`.
5. Output: default Next.js output.
6. Add production domain when ready.

No additional environment variables are required for V1.
