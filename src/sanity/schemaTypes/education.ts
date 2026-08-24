import {defineField, defineType} from 'sanity'

export const education = defineType({
  name: 'education',
  title: 'Education',
  type: 'document',
  fields: [
    defineField({name: 'degree', title: 'Degree', type: 'string', validation: (r) => r.required()}),
    defineField({name: 'school', title: 'School', type: 'string', validation: (r) => r.required()}),
    defineField({name: 'period', title: 'Period', type: 'string'}),
    defineField({name: 'description', title: 'Description', type: 'text', rows: 3}),
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
    select: {title: 'degree', subtitle: 'school'},
  },
})
