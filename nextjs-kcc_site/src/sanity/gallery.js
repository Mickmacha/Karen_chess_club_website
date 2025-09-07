// sanity/schemas/gallery.js
export default {
  name: 'gallery',
  title: 'Gallery',
  type: 'document',
  fields: [
    {
      name: 'title',
      title: 'Title',
      type: 'string',
      validation: Rule => Rule.required()
    },
    {
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      options: {
        source: 'title',
        maxLength: 96,
      },
      validation: Rule => Rule.required()
    },
    {
      name: 'description',
      title: 'Description',
      type: 'text',
      rows: 3
    },
    {
      name: 'category',
      title: 'Category',
      type: 'string',
      options: {
        list: [
          {title: 'Tournaments', value: 'tournaments'},
          {title: 'Training', value: 'training'},
          {title: 'Events', value: 'events'},
          {title: 'Community', value: 'community'}
        ],
        layout: 'radio'
      },
      validation: Rule => Rule.required()
    },
    {
      name: 'image',
      title: 'Image',
      type: 'image',
      options: {
        hotspot: true,
      },
      fields: [
        {
          name: 'alt',
          title: 'Alt Text',
          type: 'string',
          description: 'Important for SEO and accessibility',
          validation: Rule => Rule.required()
        },
        {
          name: 'caption',
          title: 'Caption',
          type: 'string'
        }
      ],
      validation: Rule => Rule.required()
    },
    {
      name: 'featured',
      title: 'Featured Image',
      type: 'boolean',
      description: 'Should this image be featured on the homepage?',
      initialValue: false
    },
    {
      name: 'tags',
      title: 'Tags',
      type: 'array',
      of: [
        {
          type: 'string'
        }
      ],
      options: {
        layout: 'tags'
      }
    },
    {
      name: 'publishedAt',
      title: 'Published at',
      type: 'datetime',
      initialValue: () => new Date().toISOString(),
    },
  ],
  
  preview: {
    select: {
      title: 'title',
      media: 'image',
      category: 'category'
    },
    prepare(selection) {
      const {title, media, category} = selection
      return {
        title: title,
        subtitle: category ? category.charAt(0).toUpperCase() + category.slice(1) : 'No category',
        media: media
      }
    }
  },

  orderings: [
    {
      title: 'Published Date, New',
      name: 'publishedAtDesc',
      by: [
        {field: 'publishedAt', direction: 'desc'}
      ]
    },
    {
      title: 'Published Date, Old',
      name: 'publishedAtAsc',
      by: [
        {field: 'publishedAt', direction: 'asc'}
      ]
    },
    {
      title: 'Title A-Z',
      name: 'titleAsc',
      by: [
        {field: 'title', direction: 'asc'}
      ]
    }
  ]
}