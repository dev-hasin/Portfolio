import {defineField, defineType} from 'sanity'

export const experience = defineType({
  name: 'experience',
  title: 'Work Experience',
  type: 'document',
  fields: [
    defineField({name: 'role', title: 'Role', type: 'string', validation: (r) => r.required()}),
    defineField({name: 'company', title: 'Company', type: 'string', validation: (r) => r.required()}),
    defineField({name: 'period', title: 'Period', type: 'string'}),
    defineField({name: 'description', title: 'Description', type: 'text', rows: 4}),
    defineField({
      name: 'tags',
      title: 'Tags',
      type: 'array',
      of: [{type: 'string'}],
      options: {layout: 'tags'},
    }),
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
    select: {title: 'role', subtitle: 'company'},
  },
})
