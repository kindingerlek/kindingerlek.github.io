import type { ReadonlyDeep } from 'type-fest'
import type { PortfolioSection } from '@/components/sections/Portfolio/PortfolioSection.types'
import ProjectCollection from '@/collections/projects'

const portfolioSectionData = {
	config: {
		title: 'Projects',
		slug: 'projects',
		icon: 'fa6-solid:rocket',
		visible: import.meta.env.DEV,
		screenshots: {
			title: 'Screenshots',
			icon: 'fa6-solid:images'
		}
	},
	projects: await ProjectCollection.getAll()
} as const satisfies ReadonlyDeep<PortfolioSection>

export default portfolioSectionData
