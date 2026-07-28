import { defineContentConfig, defineCollection, z } from '@nuxt/content'

export default defineContentConfig({
  collections: {
    content: defineCollection({
      type: 'page',
      source: '**/*.md',
      schema: z.object({
        hero: z.object({
          title: z.string().optional(),
          badge: z.string().optional(),
          description: z.string().optional(),
          primaryButton: z.string().optional(),
          secondaryButton: z.string().optional()
        }).optional(),
        whyUs: z.object({
          title: z.string().optional(),
          description: z.string().optional(),
          features: z.array(z.object({
            icon: z.string().optional(),
            title: z.string().optional(),
            description: z.string().optional()
          })).optional()
        }).optional(),
        clients: z.object({
          title: z.string().optional(),
          categories: z.array(z.string()).optional(),
          logos: z.array(z.string()).optional()
        }).optional()
      })
    })
  }
})