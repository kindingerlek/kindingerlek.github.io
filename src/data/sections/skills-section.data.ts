import type { SkillsSection } from '@/components/sections/Skills/SkillsSection.types'
import type { ReadonlyDeep } from 'type-fest'
import {
	apolloGraphql,
	astro,
	chakraUi,
	cypress,
	eslint,
	firebase,
	mongoDb,
	nestJs,
	pnpm,
	postgreSql,
	prettier,
	react,
	sass,
	supabase,
	tailwindCss,
	typescript
} from '../helpers/skills'

const skillsSectionData = {
	config: {
		title: 'Skills',
		slug: 'skills',
		icon: 'fa6-solid:bars-progress',
		visible: true
	},
	skillSets: [
		{
			title: 'I already know',
			skills: [
				react({
					description:
						'Proin ut erat sed massa tempus suscipit. Mauris efficitur nunc sem, nec scelerisque ligula bibendum ut.'
				}),
				typescript({
					description:
						'Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas.'
				}),
				sass({
					description:
						'Nulla interdum pellentesque ultricies. Ut id eros commodo, ultrices ligula eu, elementum ante.'
				}),
				chakraUi(),
				tailwindCss(),
				prettier(),
				eslint({
					description:
						'Nulla tempor turpis at vehicula pharetra. Vestibulum tellus tortor, commodo et suscipit id, lobortis id nunc.'
				}),
				nestJs({
					description:
						'Praesent feugiat ultricies iaculis. In posuere vehicula odio, sed consequat velit porta viverra.'
				}),
				postgreSql(),
				mongoDb(),
				firebase(),
				pnpm()
			]
		},
		{
			title: 'I want to learn',
			skills: [apolloGraphql(), astro(), supabase(), cypress()]
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
