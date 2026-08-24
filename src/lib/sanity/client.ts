import {createClient, type SanityClient} from '@sanity/client'

const projectId = import.meta.env.VITE_SANITY_PROJECT_ID?.trim() || ''
const dataset = import.meta.env.VITE_SANITY_DATASET?.trim() || 'production'
const apiVersion = import.meta.env.VITE_SANITY_API_VERSION?.trim() || '2025-01-01'

export const isSanityConfigured = Boolean(projectId && projectId !== 'your-project-id')

export const sanityClient: SanityClient | null = isSanityConfigured
  ? createClient({
      projectId,
      dataset,
      apiVersion,
      useCdn: true,
    })
  : null
