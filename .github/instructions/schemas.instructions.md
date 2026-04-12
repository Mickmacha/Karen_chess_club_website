<!-- Sanity CMS schema development guidelines for Karen Chess Club website -->

---
description: Content schema design and development standards for Sanity Studio
applyTo: studio-kcc_site/schemaTypes/**/*
---

# Sanity Schema Guidelines

## Schema Design Principles

### Content Modeling
- **Purpose-driven**: Each schema serves a specific content need
- **User-friendly**: Field names and descriptions guide content editors
- **Scalable**: Design for future content requirements
- **Consistent**: Follow established patterns across schemas

### Field Types
- **Required vs Optional**: Mark essential fields as required
- **Validation**: Use appropriate validation rules
- **Default Values**: Provide sensible defaults where possible
- **Descriptions**: Include helpful descriptions for editors

## Schema Structure

### Basic Schema Template
```typescript
import { defineType, defineField } from 'sanity';

export default defineType({
  name: 'contentType',
  title: 'Content Type',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      title: 'Title',
      type: 'string',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      options: {
        source: 'title',
        maxLength: 96,
      },
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'publishedAt',
      title: 'Published at',
      type: 'datetime',
      initialValue: () => new Date().toISOString(),
    }),
    // Additional fields...
  ],
});
```

## Content Types

### Post Schema (Blog Articles)
```typescript
export const postType = defineType({
  name: 'post',
  title: 'Post',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      type: 'string',
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'slug',
      type: 'slug',
      options: { source: 'title' },
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'publishedAt',
      type: 'datetime',
      initialValue: () => new Date().toISOString(),
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'image',
      type: 'image',
    }),
    defineField({
      name: 'body',
      type: 'array',
      of: [{ type: 'block' }],
    }),
  ],
});
```

### Gallery Schema (Images)
```typescript
export default defineType({
  name: 'gallery',
  title: 'Gallery',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      type: 'string',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'category',
      type: 'string',
      options: {
        list: [
          { title: 'Tournaments', value: 'tournaments' },
          { title: 'Training', value: 'training' },
          { title: 'Events', value: 'events' },
          { title: 'Community', value: 'community' },
        ],
        layout: 'radio',
      },
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'image',
      type: 'image',
      fields: [
        defineField({
          name: 'alt',
          type: 'string',
          title: 'Alt Text',
          validation: (Rule) => Rule.required(),
        }),
      ],
      validation: (Rule) => Rule.required(),
    }),
  ],
});
```

## Field Patterns

### Common Fields

#### Title Field
```typescript
defineField({
  name: 'title',
  title: 'Title',
  type: 'string',
  validation: (Rule) => Rule.required().min(3).max(100),
}),
```

#### Slug Field
```typescript
defineField({
  name: 'slug',
  title: 'Slug',
  type: 'slug',
  options: {
    source: 'title',
    maxLength: 96,
  },
  validation: (Rule) => Rule.required(),
}),
```

#### Description Field
```typescript
defineField({
  name: 'description',
  title: 'Description',
  type: 'text',
  rows: 3,
  validation: (Rule) => Rule.max(300),
}),
```

#### Image Field
```typescript
defineField({
  name: 'image',
  title: 'Image',
  type: 'image',
  options: {
    hotspot: true,
  },
  fields: [
    defineField({
      name: 'alt',
      type: 'string',
      title: 'Alt Text',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'caption',
      type: 'string',
      title: 'Caption',
    }),
  ],
}),
```

#### Date Field
```typescript
defineField({
  name: 'publishedAt',
  title: 'Published at',
  type: 'datetime',
  initialValue: () => new Date().toISOString(),
}),
```

#### Tags Field
```typescript
defineField({
  name: 'tags',
  title: 'Tags',
  type: 'array',
  of: [{ type: 'string' }],
  options: {
    layout: 'tags',
  },
}),
```

## Validation Rules

### Common Validations
- **Required**: `Rule.required()`
- **Length**: `Rule.min(3).max(100)`
- **Email**: `Rule.email()`
- **URL**: `Rule.uri()`
- **Custom**: `Rule.custom((value) => { /* validation logic */ })`

### Field-Specific Validation
```typescript
// Title validation
validation: (Rule) => Rule.required().min(5).max(100),

// Email validation
validation: (Rule) => Rule.required().email(),

// URL validation
validation: (Rule) => Rule.uri({
  scheme: ['http', 'https']
}),
```

## Schema Organization

### File Structure
```
schemaTypes/
├── index.ts          # Schema exports
├── postType.ts       # Blog posts
├── gallery.ts        # Image gallery
├── event.ts          # Events (future)
└── member.ts         # Members (future)
```

### Export Pattern
```typescript
// index.ts
import { postType } from './postType';
import gallery from './gallery';

export const schemaTypes = [postType, gallery];
```

## Content Relationships

### Reference Fields
```typescript
defineField({
  name: 'author',
  title: 'Author',
  type: 'reference',
  to: [{ type: 'author' }],
}),
```

### Array References
```typescript
defineField({
  name: 'relatedPosts',
  title: 'Related Posts',
  type: 'array',
  of: [{ type: 'reference', to: [{ type: 'post' }] }],
}),
```

## Preview Configuration

### Basic Preview
```typescript
preview: {
  select: {
    title: 'title',
    media: 'image',
  },
},
```

### Custom Preview
```typescript
preview: {
  select: {
    title: 'title',
    subtitle: 'category',
    media: 'image',
  },
  prepare(selection) {
    const { title, subtitle, media } = selection;
    return {
      title,
      subtitle: subtitle ? `Category: ${subtitle}` : '',
      media,
    };
  },
},
```

## Best Practices

### Content Strategy
1. **Plan content types** based on user needs
2. **Keep schemas simple** and focused
3. **Use consistent field naming**
4. **Provide helpful descriptions**
5. **Test content entry workflow**

### Technical Guidelines
1. **Use TypeScript** for type safety
2. **Follow naming conventions** (camelCase for field names)
3. **Include validation rules** for data integrity
4. **Add preview configurations** for better UX
5. **Document schema purposes** and usage

### Performance Considerations
1. **Limit array sizes** where appropriate
2. **Use appropriate field types** for content
3. **Consider query patterns** when designing schemas
4. **Plan for future scalability**

## Migration Guidelines

### Schema Updates
1. **Test changes** in development environment
2. **Plan data migrations** for existing content
3. **Update queries** in frontend code
4. **Document breaking changes**
5. **Deploy during low-traffic periods**

### Version Control
1. **Commit schema changes** separately
2. **Update documentation** when schemas change
3. **Test content studio** after schema updates
4. **Validate frontend queries** work with new schemas