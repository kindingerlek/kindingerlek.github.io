import { type Section } from '@/components/Section.astro'
import type { Tag } from '@/components/Tag.astro'
import type { Photo, DateRange } from '../shared'

export interface ConferencesEventsSection extends Section {
	conferences: Array<{
		/** Title of the conference or event. */
		title: string

		/** Logo of the conference or event.
		 *
		 * **Ratio**: 1:1
		 *
		 * **Display size**: 56x56px
		 */
		image?: Photo

		/** Date range when the conference or event took place. */
		dates?: DateRange

		/** Description of the conference or event. You can use markdown syntax. */
		description?: string

		/** URL to the main website related to the conference or event. */
		url?: string

		/** Tags related to the conference or event (e.g. programming languages, frameworks, etc.). */
		tags?: Tag[]
	}>
}
