import { z } from 'astro:content'

const projectSchema = z.object({
	title: z.string(),
	description: z.string(),
	pubDate: z.coerce.date(),
	updatedDate: z.coerce.date().optional(),
	heroImage: z.string().optional(),
	tags: z.array(z.string()),
	content: z.string()
})

type Project = z.infer<typeof projectSchema>

export { projectSchema, type Project }
