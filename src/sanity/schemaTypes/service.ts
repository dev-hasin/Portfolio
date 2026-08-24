import {defineField, defineType} from 'sanity'

export const service = defineType({
  name: 'service',
  title: 'Service',
  type: 'document',
  fields: [
    defineField({name: 'title', title: 'Title', type: 'string', validation: (r) => r.required()}),
    defineField({name: 'description', title: 'Description', type: 'text', rows: 3}),
    defineField({
      name: 'icon',
      title: 'Icon',
      type: 'string',
      options: {
        list: [
          {title: 'Layers', value: 'Layers'},
          {title: 'Zap', value: 'Zap'},
          {title: 'Shield', value: 'Shield'},
          {title: 'Star', value: 'Star'},
          {title: 'Code', value: 'Code2'},
          {title: 'Sparkles', value: 'Sparkles'},
        ],
      },
      initialValue: 'Layers',
    }),
    defineField({
      name: 'accent',
      title: 'Accent Color',
      type: 'string',
      options: {
        list: [
          {title: 'Teal', value: 'teal'},
          {title: 'Amber', value: 'amber'},
          {title: 'Emerald', value: 'emerald'},
          {title: 'Sky', value: 'sky'},
        ],
      },
      initialValue: 'teal',
    }),
    defineField({name: 'order', title: 'Sort Order', type: 'number', initialValue: 0}),
  ],
  preview: {
    select: {title: 'title', subtitle: 'accent'},
  },
})
