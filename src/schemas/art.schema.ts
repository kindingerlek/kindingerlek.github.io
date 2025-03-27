import { z } from 'astro:content'

const artPostSchema = z.object({
	title: z.string(),
	description: z.string(),
	pubDate: z.coerce.date(),
	updatedDate: z.coerce.date().optional(),
	heroImage: z.string().optional(),
	tags: z.array(z.string()),
	content: z.string()
})

type ArtPost = z.infer<typeof artPostSchema>

export { artPostSchema, type ArtPost }
