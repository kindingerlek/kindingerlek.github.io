import type { BlogSection } from '@/components/sections/Blog/BlogSection.types'
import type { ReadonlyDeep } from 'type-fest'

const blogSectionData = {
	config: {
		visible: false,
		title: 'Blog',
		slug: 'blog',
		icon: 'fa6-solid:pen-to-square'
	},
	maxVisiblePosts: 5
} as const satisfies ReadonlyDeep<BlogSection>

export default blogSectionData
