import {defineField, defineType} from 'sanity'

export const certification = defineType({
  name: 'certification',
  title: 'Certification',
  type: 'document',
  fields: [
    defineField({name: 'title', title: 'Title', type: 'string', validation: (r) => r.required()}),
    defineField({name: 'issuer', title: 'Issuer', type: 'string', validation: (r) => r.required()}),
    defineField({name: 'date', title: 'Date', type: 'string'}),
    defineField({name: 'credentialUrl', title: 'Credential URL', type: 'url'}),
    defineField({
      name: 'image',
      title: 'Badge / Image',
      type: 'image',
      options: {hotspot: true},
    }),
    defineField({name: 'imageUrl', title: 'Badge Image URL (fallback)', type: 'url'}),
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
    select: {title: 'title', subtitle: 'issuer', media: 'image'},
  },
})
