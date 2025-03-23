import type { MainSection } from '@/components/sections/Main/MainSection.types'
import type { ReadonlyDeep } from 'type-fest'
import { github, linkedin } from '../helpers/links'

const mainSectionData = {
	config: {
		icon: 'fa6-solid:user',
		title: 'About',
		slug: 'about',
		visible: true
	},
	image: import('@/assets/my-image.jpg'),
	fullName: 'Lucas Kindinger',
	role: 'Software Engineer',
	details: [
		{
			label: 'Phone',
			icon: 'ph:phone-outgoing',
			value: '+5541984408026',
			url: 'tel:+5541984408026'
		},
		{
			label: 'Email',
			icon: 'ci:mail',
			value: 'lucas.ernesto.k@gmail.com',
			url: 'mailto:lucas.ernesto.k@gmail.com'
		},
		{ label: 'From', icon: 'ph:map-pin', value: 'Paraná, Brazil' }
	],
	pdfDetails: [
		{ label: 'Phone', value: '+5541984408026' },
		{ label: 'Email', value: 'lucas.ernesto.k@gmail.com' },
		{
			label: 'LinkedIn',
			value: '/in/lucas-kindinger',
			url: 'https://linkedin.com/in/kindingerlek'
		},
		{ label: 'GitHub', value: '/kindingerlek', url: 'https://github.com/kindingerlek' }
	],
	description:
		'Lorem ipsum dolor sit amet, consectetur **adipiscing elit**. In sodales ac dui at *vestibulum*. In condimentum metus id dui tincidunt, in blandit mi [vehicula](/). Nulla lacinia, erat sit amet elementum vulputate, lectus mauris volutpat mi, vitae accumsan metus elit ut nunc. Vestibulum lacinia enim eget eros fermentum scelerisque. Proin augue leo, posuere ut imperdiet vitae, fermentum eu ipsum. Sed sed neque sagittis, posuere urna nec, commodo leo. Pellentesque posuere justo vitae massa volutpat maximus.',
	tags: [
		{ name: 'Open for freelance' },
		{ name: 'Available for mentoring' },
		{ name: 'Working on side project' }
	],
	action: {
		label: 'Download CV',
		url: '/cv.pdf',
		downloadedFileName: 'CV-Lucas_Kindinger.pdf'
	},
	links: [github({ url: '#' }), linkedin({ url: '#' })]
} as const satisfies ReadonlyDeep<MainSection>

export default mainSectionData
