import { slugify } from '@/utils/slug'
import { defineCollection, z, type CollectionEntry, type SchemaContext } from 'astro:content'

function removeDupsAndSlugify(array: string[]) {
	if (!array.length) return array
	const lowercaseItems = array.map((str) => slugify(str))
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
		tags: z.array(z.string()).default([]).transform(removeDupsAndSlugify),
		ogImage: z.string().optional()
	})

export type Content = z.infer<ReturnType<typeof contentSchemaFac>>

const postSchema = (ctx: SchemaContext) => contentSchemaFac(ctx).extend({})

export type PostContent = z.infer<ReturnType<typeof postSchema>>

const projectsSchema = (ctx: SchemaContext) => contentSchemaFac(ctx).extend({})

export type ProjectContent = z.infer<ReturnType<typeof projectsSchema>>

export const artworkSchema = (ctx: SchemaContext) =>
	contentSchemaFac(ctx).extend({
		featured: z.boolean().default(false),
		featuredImage: z.string().optional(),
		matureContent: z.boolean().optional().default(false),
		types: z
			.array(
				z.enum([
					'photography',
					'illustration',
					'drawing',
					'painting',
					'digital-painting',
					'vector',
					'pixel-art',
					'graphic-design',
					'3D',
					'sculpture',
					'animation',
					'render'
				])
			)
			.min(1),
		meta: z.record(z.string())
	})
export type ArtworkContent = z.infer<ReturnType<typeof artworkSchema>>

export type ArtworkContentType = ArtworkContent['types'][number]

export const collections = {
	posts: defineCollection({
		type: 'content',
		schema: postSchema
	}),
	projects: defineCollection({
		type: 'content',
		schema: projectsSchema
	}),
	artworks: defineCollection({
		type: 'content',
		schema: artworkSchema
	})
}

export type ContentEntry = CollectionEntry<keyof typeof collections>
export type ArtworkEntry = CollectionEntry<'artworks'>
export type ProjectEntry = CollectionEntry<'projects'>
export type BlogPostEntry = CollectionEntry<'posts'>

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
	artworks: {
		label: 'Artworks',
		url: '/artworks'
	}
} as const
