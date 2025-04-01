import { defineCollection, z, type SchemaContext } from 'astro:content'

function removeDupsAndLowerCase(array: string[]) {
	if (!array.length) return array
	const lowercaseItems = array.map((str) => str.toLowerCase())
	const distinctItems = new Set(lowercaseItems)
	return Array.from(distinctItems)
}

const postsSchema = ({ image }: SchemaContext) =>
	z.object({
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
				src: image(),
				alt: z.string()
			})
			.optional(),
		draft: z.boolean().default(false),
		tags: z.array(z.string()).default([]).transform(removeDupsAndLowerCase),
		ogImage: z.string().optional()
	})

const contentSchemaFac = ({ image }: SchemaContext) =>
	z.object({
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
				src: image(),
				alt: z.string().nullable()
			})
			.optional(),
		draft: z.boolean().default(false),
		tags: z.array(z.string()).default([]).transform(removeDupsAndLowerCase),
		ogImage: z.string().optional()
	})

export type Content = z.infer<ReturnType<typeof contentSchemaFac>>

const postSchema = (ctx: SchemaContext) =>
	contentSchemaFac(ctx).extend({
		minutesRead: z.number().optional()
	})

export type PostContent = z.infer<ReturnType<typeof postSchema>>

const projectsSchema = (ctx: SchemaContext) =>
	contentSchemaFac(ctx).extend({
		featured: z.boolean().default(false),
		featuredImage: z.string().optional()
	})

export type ProjectContent = z.infer<ReturnType<typeof projectsSchema>>

const photographySchema = (ctx: SchemaContext) =>
	contentSchemaFac(ctx).extend({
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

export type PhotographyContent = z.infer<ReturnType<typeof photographySchema>>

export const collections = {
	posts: defineCollection({
		type: 'content',
		schema: postSchema
	}),
	projects: defineCollection({
		type: 'content',
		schema: projectsSchema
	}),
	photography: defineCollection({
		type: 'content',
		schema: photographySchema
	})
}
