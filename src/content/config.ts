import { defineCollection, z, type CollectionEntry, type SchemaContext } from 'astro:content'

function removeDupsAndLowerCase(array: string[]) {
	if (!array.length) return array
	const lowercaseItems = array.map((str) => str.toLowerCase())
	const distinctItems = new Set(lowercaseItems)
	return Array.from(distinctItems)
}

const contentSchemaFac = ({ image }: SchemaContext) =>
	z.object({
		title: z.string().max(60),
		description: z.string().min(50).max(160),
		featured: z.boolean().default(false),
		featuredImage: z.string().optional(),
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
				image: image(),
				alt: z.string().nullable()
			})
			.optional(),
		draft: z.boolean().default(false),
		tags: z.array(z.string()).default([]).transform(removeDupsAndLowerCase),
		ogImage: z.string().optional()
	})

export type Content = z.infer<ReturnType<typeof contentSchemaFac>>

const postSchema = (ctx: SchemaContext) => contentSchemaFac(ctx).extend({})

export type PostContent = z.infer<ReturnType<typeof postSchema>>

const projectsSchema = (ctx: SchemaContext) => contentSchemaFac(ctx).extend({})

export type ProjectContent = z.infer<ReturnType<typeof projectsSchema>>

const photographiesSchema = (ctx: SchemaContext) =>
	contentSchemaFac(ctx).extend({
		featured: z.boolean().default(false),
		matureContent: z.boolean().default(false),
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

export type PhotographyContent = z.infer<ReturnType<typeof photographiesSchema>>

export const artworkSchema = (ctx: SchemaContext) =>
	contentSchemaFac(ctx).extend({
		featured: z.boolean().default(false),
		featuredImage: z.string().optional(),
		types: z.array(z.string()).default([]).transform(removeDupsAndLowerCase),
		meta: z
			.object({
				dimensions: z.string().optional(),
				medium: z.string().optional(),
				year: z.string().optional(),
				location: z.string().optional()
			})
			.optional()
	})
export type ArtworkContent = z.infer<ReturnType<typeof artworkSchema>>

export const collections = {
	posts: defineCollection({
		type: 'content',
		schema: postSchema
	}),
	projects: defineCollection({
		type: 'content',
		schema: projectsSchema
	}),
	photographies: defineCollection({
		type: 'content',
		schema: photographiesSchema
	}),
	artworks: defineCollection({
		type: 'content',
		schema: artworkSchema
	})
}

export type ContentEntry = CollectionEntry<keyof typeof collections>

export type PhotographyEntry = CollectionEntry<'photographies'>

export const CollectionLinkMap: {
	[key in keyof typeof collections]: {
		label: string
		url: string
	}
} = {
	posts: {
		label: 'Blog',
		url: '/blog'
	},
	projects: {
		label: 'Projects',
		url: '/projects'
	},
	photographies: {
		label: 'Photography',
		url: '/photographies'
	},
	artworks: {
		label: 'Artworks',
		url: '/artworks'
	}
} as const
