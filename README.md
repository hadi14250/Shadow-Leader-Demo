# Shadow Leaders Demo Site

A modern, single-page React landing site for **Shadow Leaders** — executive growth partners for visionary founders. Built as a marketing demo with a dark, gradient-driven aesthetic and animated section reveals.

## Overview

The site presents Shadow Leaders' positioning as a private network of advisors, former CEOs, investors, and entrepreneurs working "in the shadows" to help founders scale. It's a one-page experience optimized for conversion, ending in a confidential consultation CTA.

## Sections

- **Hero** — headline, subhead, and primary CTA with animated gradient highlight
- **Trust Badge** — bordered card describing the Shadow Leaders value proposition
- **Logo Carousel** — companies growing with Shadow Leaders (Trimble, Linkcard, BrandAI, AxonIQ, AVP, Europartners)
- **Problem** — framing of the founder's journey and how Shadow Leaders helps
- **Value Props** — four pillars: Strategic Clarity, Leadership Support, Sustainable Growth, Increased Confidence
- **Services** — Shadow Leaders Advisory + Non-Executive Director Services
- **Why We Deliver** — five differentiators including real-life experience, no nonsense, exclusivity
- **Testimonials** — three founder testimonials (XRDAM, Linkcard.app, Salesflare)
- **Results** — outcomes clients see (clarity, stronger teams, growth)
- **CTA** — final call to schedule a confidential growth meeting
- **Footer** — branding and copyright

## Tech Stack

- **React 18** — component-based UI, single `App.jsx` with co-located section components
- **Vite 5** — dev server and production bundler
- **Vanilla CSS** — single `App.css` stylesheet using CSS gradients, keyframe animations, backdrop-filter, and CSS grid
- **Inline SVG icons** — no icon library dependency

## Project Structure

```
Shadow-Leader-Demo/
├── index.html              # Vite entry, page title and meta description
├── package.json            # Scripts and dependencies
├── vite.config.js          # Vite config
└── src/
    ├── main.jsx            # React root mount
    ├── App.jsx             # All page sections as components
    ├── App.css             # Styles, animations, responsive breakpoints
    └── index.css           # Base styles
```

## Setup

```bash
npm install
```

## Development

Start the Vite dev server with hot module reload:

```bash
npm run dev
```

## Build

Build the production bundle to `dist/`:

```bash
npm run build
```

## Preview Production Build

Serve the production bundle locally to verify before deploy:

```bash
npm run preview
```

## Deployment

The `dist/` output is fully static and can be deployed to any static host (Vercel, Netlify, Cloudflare Pages, GitHub Pages, S3, etc.). No backend or environment variables are required.

## Responsive Design

The layout adapts at two breakpoints:

- `≤ 1200px` — value/why/logo grids collapse to fewer columns
- `≤ 768px` — full single-column layout, reduced hero typography, stacked footer

## Notes

This is a demo / marketing site. The contact CTA points to `mailto:hello@shadowleaders.com`; replace with a real form or scheduling link before production use.
