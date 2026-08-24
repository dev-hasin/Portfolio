import {defineConfig} from 'sanity'
import {structureTool} from 'sanity/structure'
import {visionTool} from '@sanity/vision'
import {schemaTypes} from './src/sanity/schemaTypes'

const projectId =
  (typeof import.meta !== 'undefined' && import.meta.env?.VITE_SANITY_PROJECT_ID) ||
  (typeof process !== 'undefined' && (process.env.SANITY_STUDIO_PROJECT_ID || process.env.VITE_SANITY_PROJECT_ID)) ||
  'your-project-id'

const dataset =
  (typeof import.meta !== 'undefined' && import.meta.env?.VITE_SANITY_DATASET) ||
  (typeof process !== 'undefined' && (process.env.SANITY_STUDIO_DATASET || process.env.VITE_SANITY_DATASET)) ||
  'production'

export default defineConfig({
  name: 'portfolio',
  title: 'Portfolio Admin',
  projectId: String(projectId),
  dataset: String(dataset),
  basePath: '/admin',
  plugins: [structureTool(), visionTool()],
  schema: {
    types: schemaTypes,
  },
})
