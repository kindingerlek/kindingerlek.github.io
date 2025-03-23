import type { Section } from '@/components/Section.astro'

export interface BlogSection extends Section {
	maxVisiblePosts: number
}
