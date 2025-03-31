import { defineCollection, z } from 'astro:content'

function removeDupsAndLowerCase(array: string[]) {
	if (!array.length) return array
	const lowercaseItems = array.map((str) => str.toLowerCase())
	const distinctItems = new Set(lowercaseItems)
	return Array.from(distinctItems)
}

const contentSchema = z.object({
	title: z.string().max(60),
	description: z.string().min(50).max(160),
	publishDate: z
		.string()
		.or(z.date())
		.transform((val) => new Date(val)),
	updatedDate: z
		.string()
		.optional()
		.transform((str) => (str ? new Date(str) : undefined)),
	coverImage: z
		.object({
			src: z.string(),
			alt: z.string().optional()
		})
		.optional(),
	draft: z.boolean().default(false),
	tags: z.array(z.string()).default([]).transform(removeDupsAndLowerCase),
	ogImage: z.string().optional()
})

export type Content = z.infer<typeof contentSchema>

const postSchema = contentSchema.extend({
	minutesRead: z.number().optional()
})

export type PostContent = z.infer<typeof postSchema>

const projectsSchema = contentSchema.extend({
	featured: z.boolean().default(false),
	featuredImage: z.string().optional()
})

export type ProjectContent = z.infer<typeof projectsSchema>

const photographySchema = contentSchema.extend({
	category: z.literal('photography'),
	featured: z.boolean().default(false),
	meta: z
		.object({
			iso: z.string().optional(),
			aperture: z.string().optional(),
			shutterSpeed: z.string().optional(),
			lens: z.string().optional(),
			camera: z.string().optional(),
			location: z.string().optional(),
			latitude: z.string().optional(),
			longitude: z.string().optional()
		})
		.optional()
})

export type PhotographyContent = z.infer<typeof photographySchema>

export const collections = {
	posts: defineCollection({
		type: 'content',
		schema: postSchema
	}),
	projects: defineCollection({
		type: 'content',
		schema: projectsSchema
	})
}
