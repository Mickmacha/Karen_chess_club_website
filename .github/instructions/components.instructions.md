<!-- Component development guidelines for Karen Chess Club website -->

---
description: React component development standards and patterns for the Next.js frontend
applyTo: nextjs-kcc_site/src/app/components/**/*
---

# React Component Guidelines

## Component Structure

### File Organization
- One component per file
- PascalCase naming (e.g., `HeroSection.jsx`)
- Export default for page components
- Named exports for reusable utilities

### Component Types

#### Page Components
- Located in `src/app/components/`
- Full page sections (Hero, About, Programs, etc.)
- Use `'use client'` for interactivity
- Receive props from parent pages

#### Utility Components
- Reusable across the application
- Keep simple and focused
- Prefer composition over complex props

## Coding Patterns

### Functional Components
```jsx
'use client';

import { useState, useEffect } from 'react';

export default function ComponentName({ prop1, prop2 }) {
  const [state, setState] = useState(initialValue);

  useEffect(() => {
    // Side effects here
  }, [dependencies]);

  return (
    <div className="component-styles">
      {/* JSX content */}
    </div>
  );
}
```

### Props Interface (TypeScript)
```tsx
interface ComponentProps {
  title: string;
  description?: string;
  onAction: () => void;
}

export default function ComponentName({ title, description, onAction }: ComponentProps) {
  // Component logic
}
```

## Styling Standards

### Tailwind CSS Classes
- Use utility-first approach
- Consistent spacing: `space-y-4`, `gap-6`
- Responsive design: `sm:`, `md:`, `lg:`
- Color palette adherence

### Color Usage
- **Primary**: `orange-500`, `orange-600` (buttons, links)
- **Secondary**: `blue-500`, `blue-600` (accents)
- **Text**: `black`, `gray-600`, `white`
- **Background**: `white`, `black`, gradients

### Animation Guidelines
- Use `transition-all duration-300` for standard transitions
- Hover effects: `hover:scale-105`, `hover:shadow-lg`
- Loading states with smooth animations

## Accessibility

### Semantic HTML
- Use appropriate heading hierarchy (`h1`, `h2`, `h3`)
- Semantic elements (`<main>`, `<section>`, `<article>`)
- Proper alt text for images

### Keyboard Navigation
- Focus management for interactive elements
- Visible focus indicators
- Logical tab order

## Performance

### Image Optimization
- Use Next.js `Image` component
- Provide `width`, `height`, `alt` props
- Lazy loading by default

### Code Splitting
- Dynamic imports for heavy components
- Route-based code splitting (automatic with App Router)

## Chess Theme Integration

### Chess Symbols
Use Unicode chess pieces for visual elements:
- ♔ King
- ♛ Queen
- ♜ Rook
- ♝ Bishop
- ♞ Knight
- ♟ Pawn

### Chess-inspired Animations
- Floating piece animations
- Strategic color transitions
- Board-like grid patterns

## Component Examples

### Button Component
```jsx
export default function Button({ children, variant = 'primary', onClick }) {
  const baseStyles = 'px-6 py-3 rounded-lg font-medium transition-all duration-300';
  const variants = {
    primary: 'bg-orange-500 hover:bg-orange-600 text-white',
    secondary: 'bg-blue-500 hover:bg-blue-600 text-white',
    outline: 'border-2 border-orange-500 text-orange-500 hover:bg-orange-500 hover:text-white'
  };

  return (
    <button
      className={`${baseStyles} ${variants[variant]}`}
      onClick={onClick}
    >
      {children}
    </button>
  );
}
```

### Card Component
```jsx
export default function Card({ title, description, image, link }) {
  return (
    <div className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300 overflow-hidden">
      {image && (
        <img src={image} alt={title} className="w-full h-48 object-cover" />
      )}
      <div className="p-6">
        <h3 className="text-xl font-bold text-black mb-2">{title}</h3>
        <p className="text-gray-600 mb-4">{description}</p>
        {link && (
          <a href={link} className="text-orange-500 hover:text-orange-600 font-medium">
            Learn More →
          </a>
        )}
      </div>
    </div>
  );
}
```

## Testing Guidelines

### Component Testing
- Test user interactions
- Test responsive behavior
- Test accessibility features
- Mock external dependencies

### Visual Testing
- Cross-browser compatibility
- Mobile responsiveness
- High contrast mode

## Best Practices

1. **Keep components small and focused**
2. **Use meaningful prop names**
3. **Provide default values for optional props**
4. **Document complex components**
5. **Follow the established design system**
6. **Test components in isolation**
7. **Optimize for performance**
8. **Ensure accessibility compliance**