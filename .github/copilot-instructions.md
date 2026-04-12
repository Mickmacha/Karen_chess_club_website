<!-- This file is for copilot instructions. -->

---
description: Karen Chess Club website - Next.js + Sanity CMS project architecture and development guidelines
applyTo: **/*.ts, **/*.tsx, **/*.js, **/*.jsx
---

# Karen Chess Club Website - Project Architecture

## Project Overview

This is a modern, responsive website for Karen Chess Club, a chess training and community organization located in Karen, Nairobi, Kenya. The project uses Next.js 15 with React 19, TypeScript, and Sanity.io as a headless CMS for content management.

### Tech Stack
- **Frontend**: Next.js 15, React 19, TypeScript
- **Styling**: Tailwind CSS v4 with custom gradients and animations
- **CMS**: Sanity.io v4 with custom schemas
- **Deployment**: Vercel (monorepo with separate studio and frontend builds)
- **Additional**: EmailJS for contact forms, FontAwesome icons

### Project Structure

```
Karen_chess_club_website/
├── nextjs-kcc_site/          # Main Next.js application
│   ├── src/
│   │   ├── app/              # Next.js App Router
│   │   │   ├── components/   # React components (JSX)
│   │   │   ├── [slug]/       # Dynamic blog post routes
│   │   │   ├── gallery/      # Gallery page
│   │   │   ├── blog/         # Blog listing page
│   │   │   └── globals.css   # Global styles
│   │   └── sanity/           # Sanity client configuration
│   ├── package.json
│   ├── tsconfig.json
│   └── eslint.config.mjs
├── studio-kcc_site/          # Sanity Studio
│   ├── schemaTypes/          # Content schemas
│   ├── sanity.config.ts
│   └── package.json
└── vercel.json               # Deployment configuration
```

## Content Architecture

### Sanity Schemas

#### Post Schema (`postType.ts`)
- **Purpose**: Blog posts and news articles
- **Fields**:
  - `title` (string, required)
  - `slug` (auto-generated from title, required)
  - `publishedAt` (datetime, required)
  - `image` (optional hero image)
  - `body` (rich text blocks)
  - `excerpt` (optional summary)

#### Gallery Schema (`gallery.ts`)
- **Purpose**: Photo gallery with categorization
- **Fields**:
  - `title` (string, required)
  - `slug` (auto-generated, required)
  - `description` (text)
  - `category` (radio: tournaments, training, events, community - required)
  - `image` (with alt text and caption - required)
  - `featured` (boolean for homepage display)
  - `tags` (array of strings)
  - `publishedAt` (datetime)

## Component Architecture

### Page Components
- **Hero**: Animated chess-themed landing section with floating pieces
- **About**: Club information and mission
- **Programs**: Training programs and offerings
- **GalleryPreview**: Featured gallery images on homepage
- **Contact**: Contact form with EmailJS integration
- **BlogPreview**: Latest blog posts section

### Shared Components
- **Layout**: Root layout with metadata and font loading
- **Header**: Navigation with responsive design
- **Footer**: Site footer with links
- **Button**: Reusable button component
- **Card**: Content card component
- **WhatsAppButton**: Floating WhatsApp contact button

## Coding Standards & Conventions

### File Naming
- **Components**: PascalCase (e.g., `Hero.jsx`, `GalleryPreview.jsx`)
- **Pages**: `page.tsx` or `page.jsx` in route directories
- **Utilities**: camelCase (e.g., `client.ts`, `image.ts`)
- **Schemas**: camelCase with descriptive names (e.g., `postType.ts`, `gallery.ts`)

### Import Organization
```typescript
// External libraries first
import { useState, useEffect } from 'react';
import Link from 'next/link';

// Internal imports
import Layout from '../components/Layout';
import { client } from '@/sanity/client';

// Types
import type { SanityDocument } from 'next-sanity';
```

### Component Patterns
- Use functional components with hooks
- Prefer `'use client'` directive for interactive components
- Export default for page components
- Use named exports for utility components

### Styling Guidelines
- **Tailwind Classes**: Use utility-first approach
- **Color Palette**:
  - Primary: Orange theme (`orange-500`, `orange-600`)
  - Secondary: Blue accents (`blue-500`, `blue-600`)
  - Background: White/Black gradients
- **Animations**: CSS transitions with `duration-300` standard
- **Responsive**: Mobile-first with `sm:`, `md:`, `lg:` breakpoints

### TypeScript Usage
- Strict mode enabled
- Use interfaces for component props
- Leverage Next.js built-in types (`Metadata`, `Viewport`)
- Sanity documents typed as `SanityDocument[]`

## Data Fetching

### Sanity Client Configuration
```typescript
export const client = createClient({
  projectId: "e0f5onws",
  dataset: "production",
  apiVersion: "2024-01-01",
  useCdn: false, // SSR support
});
```

### Query Patterns
- Use GROQ queries with proper filtering
- Include `next: { revalidate: 30 }` for ISR
- Order by `publishedAt desc` for chronological content
- Filter by `defined(slug.current)` for published content

### Image Handling
- Use `@sanity/image-url` for optimized images
- Always provide alt text for accessibility
- Use `urlFor().width().height().url()` for specific dimensions

## Routing & Navigation

### App Router Structure
- `/` - Homepage with all sections
- `/blog` - Blog listing page
- `/gallery` - Photo gallery
- `/[slug]` - Dynamic blog post pages
- `/studio/*` - Sanity Studio (proxied in Vercel config)

### Navigation
- Responsive header with mobile menu
- Smooth scrolling to page sections
- External links open in new tabs
- SEO-friendly URLs with descriptive slugs

## Performance & SEO

### Optimization Features
- **ISR**: 30-second revalidation for dynamic content
- **Image Optimization**: Next.js automatic optimization
- **Font Loading**: Preconnect to Google Fonts
- **CDN**: Sanity images served via CDN

### SEO Implementation
- Comprehensive metadata in `layout.tsx`
- Open Graph and Twitter Card support
- Structured data for local business
- Sitemap generation (if implemented)

## Development Workflow

### Build Commands
```bash
# Frontend development
npm run dev --turbopack

# Studio development
npm run dev

# Production build
npm run build

# Type checking
npm run lint
```

### Deployment
- **Vercel**: Automatic deployments on push to main
- **Studio**: Deployed separately with `sanity deploy`
- **Environment**: Production dataset with proper security

## Content Management

### Studio Features
- Visual editing interface
- Image upload with metadata
- Category-based organization
- Featured content flagging
- Tag system for flexible filtering

### Content Strategy
- **Blog**: Chess strategies, club news, tournament results
- **Gallery**: Event photos, training sessions, community activities
- **Categories**: Tournaments, Training, Events, Community

## Accessibility & UX

### Design Principles
- **Inclusive**: High contrast ratios, readable fonts
- **Responsive**: Mobile-first design
- **Performant**: Optimized images and lazy loading
- **Intuitive**: Clear navigation and calls-to-action

### Chess Theme Integration
- Unicode chess symbols (♔♛♜♝♞♟) for visual elements
- Strategic color scheme (black/white/chessboard patterns)
- Interactive elements with chess-inspired animations

## Future Enhancements

### Potential Features
- User authentication for member areas
- Tournament registration system
- Online chess lessons booking
- Member dashboard
- Social media integration
- Newsletter subscription
- Search functionality
- Multi-language support

### Technical Improvements
- Component library standardization
- Storybook for component documentation
- Automated testing setup
- Performance monitoring
- Advanced SEO features

## Development Guidelines

### When Adding New Features
1. **Plan Content Structure**: Define Sanity schema first
2. **Create Components**: Build reusable React components
3. **Implement Routing**: Add appropriate App Router pages
4. **Style Consistently**: Follow Tailwind patterns
5. **Test Thoroughly**: Check responsive design and accessibility
6. **Deploy Safely**: Use feature branches and PR reviews

### Code Quality
- ESLint configuration for consistency
- TypeScript for type safety
- Semantic HTML structure
- Clean, readable component code
- Proper error handling and loading states

This architecture provides a solid foundation for a modern, maintainable chess club website with excellent content management capabilities.