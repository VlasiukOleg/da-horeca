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
        }).optional(),
        ecosystem: z.object({
          title: z.string().optional(),
          description: z.string().optional(),
          highlight: z.string().optional(),
          partners: z.array(z.object({
            name: z.string().optional(),
            icon: z.string().optional(),
            description: z.string().optional()
          })).optional()
        }).optional(),
        clientBonuses: z.object({
          badge: z.string().optional(),
          title: z.string().optional(),
          description: z.string().optional(),
          bonuses: z.array(z.object({
            icon: z.string().optional(),
            title: z.string().optional(),
            description: z.string().optional()
          })).optional()
        }).optional(),
        pricing: z.object({
          title: z.string().optional(),
          description: z.string().optional(),
          categories: z.array(z.object({
            id: z.string().optional(),
            title: z.string().optional(),
            icon: z.string().optional(),
            items: z.array(z.object({
              name: z.string().optional(),
              price: z.string().optional(),
              description: z.string().optional()
            })).optional()
          })).optional()
        }).optional()
      })
    })
  }
})