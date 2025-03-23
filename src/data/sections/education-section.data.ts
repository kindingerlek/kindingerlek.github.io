import type { EducationSection } from '@/types/sections/education-section.types'
import type { ReadonlyDeep } from 'type-fest'

const educationSectionData = {
	config: {
		title: 'Education',
		slug: 'education',
		icon: 'fa6-solid:graduation-cap',
		visible: true
	},
	diplomas: [
		{
			title: 'Specialization in Artificial Intelligence',
			institution: 'Federal University of Paraná',
			image: import('@/assets/logos/ufpr-logo.png'),
			dates: [new Date('2020-01'), null],
			status: 'dropped-out',
			description: 'Specialization in Artificial Intelligence at the Federal University of Paraná.',
			links: []
		},
		{
			title: 'Analysis and Development of Systems',
			institution: 'Federal University of Paraná',
			image: import('@/assets/logos/ufpr-logo.png'),
			dates: [new Date('2014-01'), new Date('2016-12')],
			status: 'completed',
			description: 'Analysis and Development of Systems at the Federal University of Paraná.',
			links: []
		},
		{
			title: 'Development in Java',
			institution: 'Naptec',
			image: import('@/assets/logos/naptec-logo.jpg'),
			dates: [new Date('2015'), new Date('2015')],
			status: 'completed',
			description: 'Development in Java at Naptec.',
			links: []
		},
		{
			title: 'Digital Games Development',
			institution: 'Opet',
			image: import('@/assets/logos/opet-logo.png'),
			status: 'completed',
			dates: [new Date('2013-07'), new Date('2014-12')],
			description: 'Digital Games Development at Opet.',
			links: []
		}
	]
} as const satisfies ReadonlyDeep<EducationSection>

export default educationSectionData
