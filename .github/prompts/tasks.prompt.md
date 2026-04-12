<!-- Common development tasks for Karen Chess Club website -->

---
description: Quick prompts for common development tasks in the Next.js + Sanity project
---

# Development Task Prompts

## Component Creation

### New Page Component
**Create a new page component with proper structure and styling**

I need to create a new page component called `{ComponentName}` for the Karen Chess Club website. Please generate:

1. A new JSX component file in `src/app/components/`
2. Proper TypeScript interfaces for props
3. Tailwind CSS styling following the design system
4. Responsive design with mobile-first approach
5. Accessibility features (semantic HTML, alt text)
6. Integration with the existing component patterns

The component should be about: `{brief description}`

### New Utility Component
**Create a reusable utility component**

Create a reusable `{ComponentName}` component with these features:
- Props: `{list of props}`
- Styling: `{styling requirements}`
- Behavior: `{interactive features}`
- Usage example in the component comments

## Content Schema Tasks

### New Sanity Schema
**Create a new content schema for Sanity CMS**

I need a new Sanity schema for `{content type}` with these fields:
- `{field1}`: {type and validation}
- `{field2}`: {type and validation}
- `{field3}`: {type and validation}

Include proper validation, preview configuration, and TypeScript types.

### Update Existing Schema
**Modify an existing Sanity schema**

Update the `{schemaName}` schema to include:
- New field: `{field details}`
- Modified field: `{field changes}`
- Updated validation rules

Ensure backward compatibility and update any related queries.

## Page Creation

### New Route Page
**Create a new page route with data fetching**

Create a new page at `{route path}` that:
- Fetches data from Sanity using GROQ queries
- Displays content in a responsive layout
- Includes proper metadata and SEO
- Follows the existing page patterns

### Blog Post Template
**Create a dynamic blog post page**

Generate the `[slug]` page component that:
- Fetches individual post data by slug
- Renders rich text content
- Includes related posts section
- Has proper error handling (404 for missing posts)

## Styling Tasks

### Component Styling Update
**Update component styling to match design system**

Update the `{ComponentName}` component to use:
- Consistent color palette (orange/blue theme)
- Proper spacing and typography
- Responsive breakpoints
- Hover and focus states
- Animation transitions

### Global Style Updates
**Modify global CSS for site-wide changes**

Update `globals.css` to include:
- New CSS custom properties
- Utility classes
- Animation keyframes
- Responsive design helpers

## Data Fetching

### New GROQ Query
**Create a new Sanity data fetching query**

I need a GROQ query for `{data purpose}` that:
- Filters content by `{criteria}`
- Orders results by `{field}`
- Includes related content
- Optimizes for performance

### Update Existing Query
**Modify an existing data fetching pattern**

Update the `{queryName}` query to:
- Include additional fields
- Add new filtering options
- Improve performance
- Handle edge cases

## Deployment Tasks

### Vercel Configuration Update
**Update deployment configuration**

Modify `vercel.json` to:
- Add new route rewrites
- Configure build settings
- Set environment variables
- Optimize deployment

### Build Optimization
**Optimize the build process**

Update build configuration for:
- Bundle size optimization
- Image optimization settings
- CSS optimization
- Performance improvements

## Content Management

### Studio Customization
**Customize Sanity Studio interface**

Update the studio configuration to:
- Add new content types
- Customize the desk structure
- Add plugins or tools
- Improve the editing experience

### Content Migration
**Plan and execute content migration**

Create a migration plan for:
- Moving existing content
- Updating content structure
- Preserving relationships
- Testing the migration process

## Testing Tasks

### Component Testing
**Add tests for a component**

Create tests for `{ComponentName}` that cover:
- Rendering behavior
- User interactions
- Props validation
- Error states
- Accessibility

### Integration Testing
**Test component integration**

Test how `{ComponentName}` works with:
- Parent components
- Data fetching
- User authentication
- External services

## Performance Tasks

### Image Optimization
**Optimize images and media**

Implement image optimization for:
- Sanity images
- Static assets
- Responsive images
- Lazy loading

### Bundle Analysis
**Analyze and optimize bundle size**

Review the build output and:
- Identify large dependencies
- Implement code splitting
- Remove unused code
- Optimize imports

## Accessibility Tasks

### Component Accessibility Audit
**Audit and improve component accessibility**

Review `{ComponentName}` for:
- Keyboard navigation
- Screen reader support
- Color contrast
- Focus management
- Semantic HTML

### Site-wide Accessibility
**Implement global accessibility improvements**

Add site-wide accessibility features:
- Skip links
- ARIA labels
- Focus indicators
- Error announcements
- Language attributes

## SEO Tasks

### Page Metadata
**Add comprehensive metadata to a page**

Update `{pageName}` with:
- Page title and description
- Open Graph tags
- Twitter Card metadata
- Structured data
- Canonical URLs

### Sitemap Generation
**Implement sitemap generation**

Create a sitemap that includes:
- All static pages
- Dynamic blog posts
- Gallery pages
- Priority and change frequency settings

## Maintenance Tasks

### Dependency Updates
**Update project dependencies**

Update dependencies for:
- Next.js and React
- Sanity packages
- Build tools
- Testing libraries
- Security patches

### Code Cleanup
**Clean up and refactor code**

Refactor `{file/component}` to:
- Remove dead code
- Improve readability
- Add proper documentation
- Follow best practices
- Optimize performance