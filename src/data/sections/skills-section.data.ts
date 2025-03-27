import type { SkillsSection } from '@/components/sections/Skills/SkillsSection.types'
import type { ReadonlyDeep } from 'type-fest'
import * as icon from '../../helpers/skillsIconSet'

const skillsSectionData = {
	config: {
		title: 'Skills',
		slug: 'skills',
		icon: 'fa6-solid:code',
		visible: true
	},
	skillSets: [
		{
			title: 'I already know',
			skills: [
				icon.typescript(),
				icon.dotnet(),
				icon.react(),
				icon.nextJs(),
				icon.tailwindCss(),
				icon.firebase(),
				icon.pnpm(),
				icon.arduino(),
				icon.unity()
			]
		},
		{
			title: 'I want to learn',
			skills: [icon.apolloGraphql(), icon.go(), icon.rust()]
		},
		{
			title: 'I speak',
			skills: [
				{ icon: 'circle-flags:br', name: 'Brazilian Portuguese - native' },
				{ icon: 'circle-flags:us', name: 'English - B2' }
			]
		}
	]
} as const satisfies ReadonlyDeep<SkillsSection>

export default skillsSectionData
