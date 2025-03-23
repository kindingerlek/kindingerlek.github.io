import type { LinkButton } from '@/components/LinkButton.astro'
import type { Section } from '@/components/Section.astro'
import type { Photo } from '../shared'

export interface Testimonial {
	/**  Photo of the testimonial author.  *
	 * **Ratio**: 1:1
	 *
	 * **Display size**: 56x56px
	 */
	image: Photo

	/**  Full name of the testimonial author. */
	author: string

	/**  Your relation to the testimonial author (e.g. supervisor, colleague, subordinate). */
	relation: string

	/**  Content of the testimonial. You can use markdown syntax. */
	content: string

	/**  Social media (e.g. LinkedIn profile, website) of the testimonial author. */
	links: LinkButton[]
}

export interface TestimonialsSection extends Section {
	/**  List of your testimonials in a chronological order. Start with the most recent one. */
	testimonials: Testimonial[]
}
