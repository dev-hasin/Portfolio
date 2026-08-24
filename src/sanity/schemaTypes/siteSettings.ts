import {defineField, defineType} from 'sanity'

export const siteSettings = defineType({
  name: 'siteSettings',
  title: 'Site Settings',
  type: 'document',
  fields: [
    defineField({name: 'name', title: 'Full Name', type: 'string', validation: (r) => r.required()}),
    defineField({name: 'initials', title: 'Initials', type: 'string', validation: (r) => r.required()}),
    defineField({name: 'role', title: 'Role / Tagline', type: 'string'}),
    defineField({name: 'location', title: 'Location', type: 'string'}),
    defineField({name: 'email', title: 'Email', type: 'string'}),
    defineField({name: 'phone', title: 'Phone Display', type: 'string'}),
    defineField({name: 'phoneHref', title: 'Phone Link (tel:)', type: 'string'}),
    defineField({name: 'resumePath', title: 'Resume Path / URL', type: 'string'}),
    defineField({name: 'resumeFilename', title: 'Resume Download Filename', type: 'string'}),
    defineField({name: 'github', title: 'GitHub URL', type: 'url'}),
    defineField({name: 'linkedin', title: 'LinkedIn URL', type: 'url'}),
    defineField({name: 'twitter', title: 'Twitter / X URL', type: 'string'}),
    defineField({
      name: 'heroImage',
      title: 'Hero Background Image',
      type: 'image',
      options: {hotspot: true},
    }),
    defineField({
      name: 'heroImageUrl',
      title: 'Hero Image URL (fallback)',
      type: 'url',
      description: 'Used when no Sanity image is uploaded',
    }),
    defineField({
      name: 'profileImage',
      title: 'Profile Image',
      type: 'image',
      options: {hotspot: true},
    }),
    defineField({
      name: 'profileImageUrl',
      title: 'Profile Image URL (fallback)',
      type: 'url',
    }),
    defineField({name: 'availableForHire', title: 'Available for Hire', type: 'boolean', initialValue: true}),
    defineField({name: 'heroHeadline', title: 'Hero Supporting Headline', type: 'text', rows: 3}),
    defineField({name: 'heroSubheadline', title: 'Hero Subheadline', type: 'text', rows: 3}),
    defineField({name: 'aboutIntro', title: 'About Intro Paragraphs', type: 'array', of: [{type: 'text'}]}),
    defineField({name: 'aboutStatus', title: 'About Status Line', type: 'string'}),
    defineField({name: 'footerBlurb', title: 'Footer Blurb', type: 'text', rows: 3}),
    defineField({name: 'skillsIntro', title: 'Skills Section Intro', type: 'text', rows: 4}),
    defineField({
      name: 'stats',
      title: 'Stats',
      type: 'array',
      of: [
        {
          type: 'object',
          fields: [
            {name: 'value', title: 'Value', type: 'string'},
            {name: 'label', title: 'Label', type: 'string'},
          ],
        },
      ],
    }),
  ],
  preview: {
    select: {title: 'name', subtitle: 'role'},
  },
})
