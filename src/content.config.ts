import { glob } from "astro/loaders";
import { defineCollection, z } from "astro:content";

const blog = defineCollection({
  loader: glob({ pattern: "**/*.md", base: "./src/content/blog" }),
  schema: z.object({
    title: z.string(),
    description: z.string(), // used as the teaser line
    type: z.enum(["case-study", "article"]),
    pubDate: z.date(),
    draft: z.boolean().default(false),
  }),
});

export const collections = { blog };
