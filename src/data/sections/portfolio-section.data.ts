import type { ReadonlyDeep } from 'type-fest'
import type { PortfolioSection } from '@/components/sections/Portfolio/PortfolioSection.types'

const portfolioSectionData = {
	config: {
		title: 'Projects',
		slug: 'projects',
		icon: 'fa6-solid:rocket',
		visible: false,
		screenshots: {
			title: 'Screenshots',
			icon: 'fa6-solid:images'
		}
	},
	projects: []
} as const satisfies ReadonlyDeep<PortfolioSection>

export default portfolioSectionData
