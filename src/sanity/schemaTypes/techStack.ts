import {defineField, defineType} from 'sanity'

export const techStack = defineType({
  name: 'techStack',
  title: 'Tech Stack Group',
  type: 'document',
  fields: [
    defineField({name: 'category', title: 'Category', type: 'string', validation: (r) => r.required()}),
    defineField({
      name: 'items',
      title: 'Items',
      type: 'array',
      of: [{type: 'string'}],
      options: {layout: 'tags'},
    }),
    defineField({name: 'order', title: 'Sort Order', type: 'number', initialValue: 0}),
  ],
  preview: {
    select: {title: 'category'},
  },
})
