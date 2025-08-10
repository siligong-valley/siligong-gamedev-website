import { defineCollection, z } from 'astro:content';

// Define schemas for future content scalability
export const collections = {
  // Events collection for managing community events
  events: defineCollection({
    type: 'content',
    schema: z.object({
      title: z.string(),
      date: z.date(),
      time: z.string(),
      location: z.string(),
      description: z.string(),
      tags: z.array(z.string()).optional(),
      featured: z.boolean().default(false),
      image: z.string().optional(),
      registrationUrl: z.string().url().optional(),
      capacity: z.number().optional(),
      attendees: z.number().default(0),
    }),
  }),
  
  // Community resources and links
  community: defineCollection({
    type: 'content', 
    schema: z.object({
      title: z.string(),
      description: z.string(),
      link: z.string().url().optional(),
      icon: z.string().optional(),
      category: z.enum(['social', 'learning', 'tools', 'showcase']).default('social'),
      featured: z.boolean().default(false),
      order: z.number().optional(),
    }),
  }),
  
  // Blog posts for community updates and tutorials
  blog: defineCollection({
    type: 'content',
    schema: z.object({
      title: z.string(),
      description: z.string(),
      pubDate: z.date(),
      updatedDate: z.date().optional(),
      author: z.string(),
      image: z.string().optional(),
      tags: z.array(z.string()).optional(),
      featured: z.boolean().default(false),
      draft: z.boolean().default(false),
    }),
  }),
  
  // Team members and contributors
  team: defineCollection({
    type: 'content',
    schema: z.object({
      name: z.string(),
      role: z.string(),
      bio: z.string(),
      avatar: z.string().optional(),
      social: z.object({
        twitter: z.string().optional(),
        github: z.string().optional(),
        linkedin: z.string().optional(),
        website: z.string().optional(),
      }).optional(),
      featured: z.boolean().default(false),
      order: z.number().optional(),
    }),
  }),
};