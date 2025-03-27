import { glob } from 'astro/loaders'
import { defineCollection } from 'astro:content'
import { blogPostSchema } from '../schemas/blog.schema'
import { artPostSchema } from '../schemas/art.schema'
import { projectSchema } from '../schemas/project.schema'

const blog = defineCollection({
	// Load Markdown and MDX files in the `src/content/blog/` directory.
	loader: glob({ base: './src/content/blog', pattern: '**/*.{md,mdx}' }),
	// Type-check frontmatter using a schema
	schema: blogPostSchema
})

const art = defineCollection({
	loader: glob({ base: './src/content/art', pattern: '**/*.{md,mdx}' }),
	schema: artPostSchema
})

const project = defineCollection({
	loader: glob({ base: './src/content/projects', pattern: '**/*.{md,mdx}' }),
	schema: projectSchema
})

export const collections = {
	blog,
	art,
	project
}

export type CollectionsName = keyof typeof collections
