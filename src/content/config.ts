import { defineCollection, z } from 'astro:content';

const workCollection = defineCollection({
	type: 'content',
	schema: z.object({
		// 1. Project Identity
		title: z.string(),
		client: z.string(),
		publishDate: z.date(),

		// 2. Visual Assets & Theming
		cover: z.string(),
		coverAlt: z.string(),
		heroVideo: z.string().optional(),
		accentColor: z.string().optional(), // Made optional as per some strategy docs implying it might not be strictly required everywhere, but good to have.

		// 3. Role & Engagement Details
		role: z.string(),
		engagement: z.enum(['White Label', 'Direct', 'Contract', 'Full-time']), // Standardized engagement types
		team: z.string().optional(), // e.g., "Solo", "Integrated with Agency Team"
		nda: z.boolean().default(false),

		// 4. Detailed content lists for the case study
		responsibilities: z.array(z.string()),
		results: z.array(z.string()), // Qualitative results
		tags: z.array(z.string()),

		// 5. Tech Stack
		stack: z.object({
			frontend: z.array(z.string()),
			backend: z.array(z.string()).optional(),
			tooling: z.array(z.string()).optional(),
		}),

		// 6. External Links
		liveUrl: z.string().url().optional(),
		repoUrl: z.string().url().optional(),

		// 7. UI Flags
		isFeatured: z.boolean().default(false),
	}),
});

export const collections = {
	'work': workCollection,
};
