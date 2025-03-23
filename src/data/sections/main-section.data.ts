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
			value: '/in/kindingerlek',
			url: 'https://linkedin.com/in/kindingerlek'
		},
		{ label: 'GitHub', value: '/kindingerlek', url: 'https://github.com/kindingerlek' }
	],
	description:
		"I'm Lucas Ernesto Kindinger, a Brazilian full-stack developer with 7 years of experience, working mostly with JavaScript and TypeScript. I specialize in modern frameworks like React and Next.js but lean more toward backend development. I enjoy tackling real-world challenges, optimizing APIs, and ensuring smooth system performance. I value good development practices, such as writing clear API documentation, adding unit tests, and actively participating in code reviews to maintain high-quality code. In my free time, I like joining Game Jams and creating small games with Unity. I'm always looking to learn new technologies and improve my craft.",
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
	links: [
		github({ url: 'https://github.com/kindingerlek' }),
		linkedin({ url: 'https://linkedin.com/in/kindingerlek' })
	]
} as const satisfies ReadonlyDeep<MainSection>

export default mainSectionData
