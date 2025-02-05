// import { defineCollection, z } from 'astro:content';
// import { glob } from 'astro/loaders';
//
// const blog = defineCollection({
//   // For content layer you no longer define a `type`
//   type: 'content',
//   loader: glob({ pattern: '**/[^_]*.{md,mdx}', base: "./src/data/blog" }),
//   schema: z.object({
//     title: z.string(),
//     description: z.string(),
//     pubDate: z.coerce.date(),
//     updatedDate: z.coerce.date().optional(),
//   }),
// });
