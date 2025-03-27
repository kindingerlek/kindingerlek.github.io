import { z } from 'astro:content'

const blogPostSchema = z.object({
	title: z.string(),
	description: z.string(),
	// Transform string to Date object
	pubDate: z.coerce.date(),
	updatedDate: z.coerce.date().optional(),
	heroImage: z.string().optional()
})

type BlogPost = z.infer<typeof blogPostSchema>

export { blogPostSchema, type BlogPost }
