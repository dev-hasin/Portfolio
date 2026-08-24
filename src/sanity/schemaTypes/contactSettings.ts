import {defineField, defineType} from 'sanity'

export const contactSettings = defineType({
  name: 'contactSettings',
  title: 'Contact Settings',
  type: 'document',
  fields: [
    defineField({
      name: 'softSkills',
      title: 'Soft Skills',
      type: 'array',
      of: [{type: 'string'}],
      options: {layout: 'tags'},
    }),
    defineField({
      name: 'faqs',
      title: 'FAQs',
      type: 'array',
      of: [
        {
          type: 'object',
          fields: [
            {name: 'question', title: 'Question', type: 'string'},
            {name: 'answer', title: 'Answer', type: 'text', rows: 3},
          ],
          preview: {
            select: {title: 'question'},
          },
        },
      ],
    }),
    defineField({
      name: 'mapsQuery',
      title: 'Google Maps Search Query',
      type: 'string',
      description: 'Used to build the location map link',
    }),
  ],
  preview: {
    prepare() {
      return {title: 'Contact Settings'}
    },
  },
})
