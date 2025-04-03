import type { Section } from '@/components/Section.astro'
import type { ProjectContent } from '@/content/config'
import type { CollectionEntry } from 'astro:content'

export interface ProjectsSection extends Section {
	/** List of your projects in a chronological order. Start with the most recent one. */
	projects: CollectionEntry<'projects'>[]

	config: Section['config']
}
