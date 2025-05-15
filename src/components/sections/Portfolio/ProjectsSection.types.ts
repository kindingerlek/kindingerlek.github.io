import type { Section } from '@/components/Section.astro'
import type { ProjectEntry } from '@/content/config'

export interface ProjectsSection extends Section {
	/** List of your projects in a chronological order. Start with the most recent one. */
	projects: ProjectEntry[]

	config: Section['config']
}
