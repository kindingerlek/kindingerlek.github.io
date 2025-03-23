import type { TestimonialsSection } from '@/components/sections/Testimonials/TestimonialsSection.types'
import type { ReadonlyDeep } from 'type-fest'

const testimonialsSectionData = {
	config: {
		title: 'Testimonials',
		slug: 'testimonials',
		icon: 'fa6-solid:comment',
		visible: true
	},
	testimonials: [
	]
} as const satisfies ReadonlyDeep<TestimonialsSection>

export default testimonialsSectionData
