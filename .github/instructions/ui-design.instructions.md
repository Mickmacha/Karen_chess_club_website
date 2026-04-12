<!-- UI/UX design specification for Karen Chess Club website -->

---
description: UI/UX redesign specification for all sections (header to footer) with consistent visual system
applyTo: nextjs-kcc_site/src/app/**/*
---

# UI Redesign Specification (v2)

This spec replaces the current visual baseline with a cohesive, premium UI system that is modern, performant, and consistent across all sections.

## 1) Design Direction

### Theme
- Modern chess club: premium, strategic, refined.
- Mood: confident, calm, and focused.
- Visual density: clean layouts with purposeful accents.

### Typography
- Headings: expressive serif (e.g., "Playfair Display").
- Body: clean sans (e.g., "Manrope").
- Hierarchy: large hero heading, strong section titles, short supporting copy.

### Color System
- Brand primary: Orange (orange-500 / #F97316)
- Brand accent: Amber (amber-500 / #F59E0B)
- Background base: Deep charcoal (#0B0F14)
- Surface: Slate (#111827)
- Text primary: Near-white (#F9FAFB)
- Text muted: Gray (#9CA3AF)

### Surfaces & Elevation
- Base: full-page gradient or subtle texture.
- Surface: cards with 1px translucent borders.
- Elevation: soft shadows only, avoid heavy glows.

## 2) Layout System

### Grid & Container
- Max width: 1200-1280px
- Section padding: 96px top/bottom (mobile 64px)
- Consistent gap scale: 8 / 12 / 16 / 24 / 32 / 48 / 64

### Page Rhythm
- Each section begins with a small badge or eyebrow label.
- Strong section heading + 1-2 lines of copy.
- Visual separation via spacing and subtle divider lines.

## 3) Motion & Interaction

### Motion Principles
- Only meaningful motion: reveal, hover, active state.
- Remove random floating animations.
- Use one animation system (Framer Motion preferred).

### Motion Rules
- Section reveal: fade + 20px translate up.
- Hover: scale 1.02 + shadow increase.
- Header: height and opacity change on scroll.

## 4) Section-by-Section Spec

### Header
- Sticky, glass effect with dark tint on scroll (no white).
- Compact height on scroll, logo remains clear.
- Nav items with underline hover.
- Primary CTA aligned right (Join Club).

### Hero
- Strong headline, short subtext.
- Primary CTA + secondary link.
- One hero visual (image/illustration/board texture).
- Trust strip below (members, tournaments, years).

### About
- Two-column layout: story + imagery.
- Mission card with surface styling.
- Stats row (3 items max).

### Programs
- Three program cards with clear structure.
- Each card: title, short summary, 3 bullet features.
- CTA button per card (same style).

### Gallery
- Clean grid or masonry layout.
- Hover overlay with title/caption.
- Filter tabs in a segmented control.

### Blog Preview
- Card layout with consistent image size.
- Include tag, date, title, short excerpt.
- Single "View all" CTA.

### Contact
- Two-column layout: form + contact info.
- Inline validation + success state.
- Contact cards: phone, email, location, hours.
- Social row with subtle icons.

### Footer
- Dark footer with 3-4 columns.
- Links, contact, social, quick CTA.
- Small legal line at bottom.

## 5) Component System

### Core UI Components
- Button: primary, secondary, ghost.
- Card: standard surface card.
- Badge: small label for section headings.
- Input/Textarea: consistent styling + focus states.
- Tabs: for gallery filters.

### Design Tokens (Tailwind or CSS vars)
- radii: 8, 12, 20
- shadows: soft, medium
- border: 1px translucent white

## 6) Performance & UX Guidelines

- Avoid heavy background animations.
- Prefer optimized images with next/image.
- Preload only key fonts.
- Use reduced motion when user prefers.

## 7) Implementation Phases

1. Build updated Header + Hero + Footer.
2. Redesign Programs + Gallery.
3. Redesign Contact + Blog Preview.
4. Polish spacing, color, and motion system.

## 8) Library Guidance

- Use shadcn/ui for base UI primitives.
- Use Framer Motion for reveals and hover states.
- Avoid mixing multiple animation libraries.

This spec should be used as the single source of truth for the redesign and future UI work.