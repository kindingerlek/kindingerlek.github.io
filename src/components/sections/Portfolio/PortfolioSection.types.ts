import type { LinkButton } from '@/components/LinkButton.astro'
import type { Section } from '@/components/Section.astro'
import type { TagsList } from '@/components/TagList.astro'
import type { Photo, DateRange, LabelledValue, IconName } from '../shared'

interface Screenshot {
	/** Source of the screenshot. */
	src: Photo

	/** Alt text for the screenshot. */
	alt: string
}

export interface Project {
	/** Name of the project. */
	name: string

	/** Logo of the project.
	 *
	 * **Ratio**: 1:1
	 *
	 * **Display size**: 56x56px
	 */
	image?: Photo

	/** Date range when you were working on the project. */
	dates: DateRange

	/** Label-value pairs with some key details about the project. */
	details: LabelledValue[]

	/**
	 * Labeled-value pairs that will be used in the PDF version of your resume.
	 *
	 * You can use it to add some links related to your project as those listed under the `links` property aren't used in the PDF.
	 *
	 * If not provided, the `details` will be used instead.
	 */
	pdfDetails?: LabelledValue[]

	/** A short overview of the project. You can use markdown syntax. */
	description: string

	/** Screenshots of the project. */
	screenshots?: Screenshot[]

	/**
	 * Any information that you want to highlight.
	 * We recommend to describe the technologies used in the project.
	 */
	tagsList: TagsList

	/** Links related to your project (e.g. GitHub repository, live demo, mockups). */
	links: LinkButton[]
}

export interface PortfolioSection extends Section {
	/**
	 * List of your projects in a chronological order. Start with the most recent one.
	 */
	projects: Project[]

	config: Section['config'] & {
		/** Configuration of the button that displays project's screenshots. */
		screenshots?: {
			/** Icon displayed within the button. */
			icon?: IconName

			/** Title displayed when hovering the button.*/
			title?: string
		}
	}
}
