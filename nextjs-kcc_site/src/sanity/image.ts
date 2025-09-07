// sanity/image.ts
import imageUrlBuilder from '@sanity/image-url'
import { client } from './client'

// Get a pre-configured url-builder from your sanity client
const builder = imageUrlBuilder(client)

// Then we can use it to transform images
export function urlFor(source: any) {
  return builder.image(source)
}