import { defineCollection, z } from "astro:content";

const thought = defineCollection({
	type: "content",
	// Type-check frontmatter using a schema
	schema: z.object({
		title: z.string(),
		description: z.string(),
		category: z.string(),
		showTldr: z.boolean().optional(),
		// Transform string to Date object
		pubDate: z.coerce.date(),
		updatedDate: z.coerce.date().optional(),
		readingTime: z.number().optional(),
	}),
});

export const collections = { thought };
