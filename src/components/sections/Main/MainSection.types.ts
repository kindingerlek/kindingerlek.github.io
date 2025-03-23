import type { DownloadButton } from '@/components/DownloadButton.astro'
import type { LinkButton } from '@/components/LinkButton.astro'
import type { Section } from '@/components/Section.astro'
import type { Tag } from '@/components/Tag.astro'
import type { Photo, LabelledValue } from '../shared'

export interface MainSection extends Section {
	/**
	 * Your image.
	 *
	 * **Ratio**: 1:1
	 *
	 * **Display size**: 208x208px
	 */
	image: Photo

	/** Your name. */
	fullName: string

	/** Your current role. */
	role: string

	/**
	 * Label-value pairs with some key details about you.
	 *
	 * E.g. phone, email, location, expected salary.
	 */
	details: LabelledValue[]

	/**
	 * Labeled-value pairs that will be used in the PDF version of your resume.
	 *
	 * You can use it to add your social media profiles as those listed under the `links` property aren't used in the PDF.
	 *
	 * If not provided, the `details` will be used instead.
	 */
	pdfDetails?: LabelledValue[]

	/** A short overview of you and your experience. */
	description: string

	/** Any information that you want to highlight. */
	tags: Tag[]

	/** A button that will be used to download your resume. */
	action: DownloadButton

	/** Your social media profiles. */
	links: LinkButton[]
}
