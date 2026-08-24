import {defineField, defineType} from 'sanity'

export const skillProgress = defineType({
  name: 'skillProgress',
  title: 'Skill Progress',
  type: 'document',
  fields: [
    defineField({name: 'name', title: 'Skill Name', type: 'string', validation: (r) => r.required()}),
    defineField({
      name: 'level',
      title: 'Level (%)',
      type: 'number',
      validation: (r) => r.required().min(0).max(100),
    }),
    defineField({name: 'order', title: 'Sort Order', type: 'number', initialValue: 0}),
  ],
  preview: {
    select: {title: 'name', subtitle: 'level'},
    prepare({title, subtitle}) {
      return {title, subtitle: `${subtitle}%`}
    },
  },
})
