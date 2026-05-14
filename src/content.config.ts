import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

const blog = defineCollection({
    loader: glob({ pattern: '**/*.md', base: './src/content/blog' }),
    schema: z.object({
        title: z.string(),
        description: z.string(),
        pubDate: z.coerce.date(),
        updatedDate: z.coerce.date().optional(),
        author: z.string().default('Liam James'),
        tags: z.array(z.string()),
        draft: z.boolean().default(false),
    }),
});

const guides = defineCollection({
    loader: glob({ pattern: '**/*.md', base: './src/content/guides' }),
    schema: z.object({
        title: z.string(),
        description: z.string(),
        price: z.number(),
        stripePriceId: z.string().optional(),
        pubDate: z.coerce.date(),
        draft: z.boolean().default(false),
    }),
});

export const collections = { blog, guides };
