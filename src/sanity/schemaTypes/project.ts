import {defineField, defineType} from 'sanity'

export const project = defineType({
  name: 'project',
  title: 'Project',
  type: 'document',
  fields: [
    defineField({name: 'title', title: 'Title', type: 'string', validation: (r) => r.required()}),
    defineField({name: 'description', title: 'Description', type: 'text', rows: 4, validation: (r) => r.required()}),
    defineField({
      name: 'tags',
      title: 'Tags',
      type: 'array',
      of: [{type: 'string'}],
      options: {layout: 'tags'},
    }),
    defineField({
      name: 'category',
      title: 'Category',
      type: 'string',
      options: {
        list: [
          {title: 'Full-Stack', value: 'Full-Stack'},
          {title: 'Mobile', value: 'Mobile'},
          {title: 'Frontend', value: 'Frontend'},
        ],
        layout: 'radio',
      },
      validation: (r) => r.required(),
    }),
    defineField({
      name: 'image',
      title: 'Cover Image',
      type: 'image',
      options: {hotspot: true},
    }),
    defineField({
      name: 'imageUrl',
      title: 'Cover Image URL (fallback)',
      type: 'url',
    }),
    defineField({name: 'featured', title: 'Featured', type: 'boolean', initialValue: false}),
    defineField({name: 'sourceUrl', title: 'Source Code URL', type: 'url'}),
    defineField({name: 'liveUrl', title: 'Live Demo URL', type: 'url'}),
    defineField({name: 'order', title: 'Sort Order', type: 'number', initialValue: 0}),
  ],
  orderings: [
    {
      title: 'Order',
      name: 'orderAsc',
      by: [{field: 'order', direction: 'asc'}],
    },
  ],
  preview: {
    select: {title: 'title', media: 'image', subtitle: 'category'},
  },
})
