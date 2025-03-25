import type { Section } from '@/components/Section.astro'
import type { DateRange, Photo } from '../shared'
import type { LinkButton } from '@/components/LinkButton.astro'

export interface Diploma {
	/**
	 * Name of the certificate or the degree you got.
	 */
	title: string

	/**
	 * Name of the institution that issued the certificate or degree.
	 */
	institution: string

	/** Logo of the institution. *
	 * **Ratio**: 1:1
	 *
	 * **Display size**: 56x56px
	 */
	image?: Photo

	/**
	 * Date range when you were studying in the institution.
	 */
	dates: DateRange

	/**
	 * A short overview of your studies. You can use markdown syntax.
	 */
	description?: string

	/** Links related to your studies (e.g. course/university website, link to realized project).*/
	links: LinkButton[]

	/** Tags related to your studies (e.g. programming languages, frameworks, etc.).*/
	status: 'in-progress' | 'completed' | 'dropped-out'
}

export interface EducationSection extends Section {
	/**
	 * List of your diplomas, certificates, .etc. Start with the most recent one.
	 */
	diplomas: Diploma[]
}
