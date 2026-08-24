import imageUrlBuilder from '@sanity/image-url'
import {sanityClient} from './client'

const builder = sanityClient ? imageUrlBuilder(sanityClient) : null

export function urlForImage(source: unknown, width = 1080) {
  if (!builder || !source || typeof source !== 'object') return undefined
  try {
    return builder.image(source as Parameters<typeof builder.image>[0]).width(width).auto('format').url()
  } catch {
    return undefined
  }
}
