// src/content/config.ts
import { defineCollection, z } from "astro:content";

const blogCollection = defineCollection({
  schema: ({ image }) =>
    z.object({
      title: z.string(),
      cover: image(),
      coverAlt: z.string(),
      description: z.string().optional(),
    }),
});

export const collections = {
  blog: blogCollection,
};
