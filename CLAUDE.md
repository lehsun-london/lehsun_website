# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

```bash
npm run dev        # Start dev server (Next.js)
npm run build      # Production build
npm run lint       # ESLint
npm run typecheck  # TypeScript type-check (no emit)
```

There are no automated tests. Playwright is installed as a dev dependency but no test files exist yet.

## Architecture

This is a single-page marketing website for **Lehsun**, a North Indian catering business in Ebbsfleet Valley, Kent. Built with Next.js 16 (App Router), React 19, TypeScript, and Tailwind CSS.

**Single route**: `src/app/page.tsx` → `HomePage` component that stacks all sections vertically.

### Section order (as rendered)

`Nav → Hero → About → Catering → LocalSeo → Reviews → EmotionStrip → Menu → FAQ → Contact → Footer`

Each section lives in `src/components/home/` as a named export.

### Content layer

Business copy, pricing, images, and service-area data live in `src/content/`:

- `businessInfo.ts` — brand line, service areas, pricing, menu groups, daily menu info, image paths, review stats
- `faqs.ts` — FAQ data used by both `FaqSection` and the `FAQPage` JSON-LD schema in `layout.tsx`

**Always update content in `src/content/` rather than hardcoding it in components.**

### SEO / Structured data

Three JSON-LD schemas are injected in `src/app/layout.tsx`:
1. `LocalBusiness` / `CateringService` — via `<LocalBusinessSchema />` (`src/components/seo/LocalBusinessSchema.tsx`), which pulls live data from `businessInfo.ts`
2. `FAQPage` — built inline in `layout.tsx` from `faqs.ts`
3. `WebSite` — static, inline in `layout.tsx`

When updating business details (rating count, service areas, pricing) always update `src/content/businessInfo.ts` — the schema and components consume it from there.

### Analytics

- **GA4** loaded conditionally via `NEXT_PUBLIC_GA_MEASUREMENT_ID` (fallback: `NEXT_PUBLIC_GA_ID`) in `layout.tsx`
- Consent is opt-out (default `"granted"`), stored under key `lehsun_cookie_consent_v1` in `localStorage`
- `src/lib/analytics.ts` — `trackLinkInteraction()` and `trackSectionView()` are the two public tracking functions
- `TrackedLink` (`src/components/analytics/TrackedLink.tsx`) — wraps `<a>` and calls `trackLinkInteraction` on click; requires `intent`, `placement`, and `destinationType` props
- `SectionViewTracker` (`src/components/analytics/SectionViewTracker.tsx`) — rendered once at the top of `HomePage`; fires `view_section` GA events when a section crosses the 50 % viewport threshold for the first time

### Scroll animations

`ScrollReveal` (`src/components/ui/ScrollReveal.tsx`) — client component using `IntersectionObserver`. Adds `reveal` / `reveal-visible` CSS classes; the actual transition styles come from `globals.css`.

### Fonts

Two Google Fonts via `next/font`:
- `Inter` → CSS variable `--font-display` (body default via `font-display` Tailwind class)
- `Playfair Display` → CSS variable `--font-serif`
