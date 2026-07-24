import { defineContentConfig, defineCollection, z } from '@nuxt/content'

export default defineContentConfig({
  collections: {
    content: defineCollection({
      type: 'page',
      source: '**/*.md',
      schema: z.object({
        hero: z.object({
          title: z.string(),
          badge: z.string(),
          description: z.string(),
          primaryButton: z.string(),
          secondaryButton: z.string()
        })
      })
    })
  }
})