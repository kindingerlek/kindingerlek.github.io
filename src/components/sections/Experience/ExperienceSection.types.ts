import type { LinkButton } from '@/components/LinkButton.astro'
import type { Section } from '@/components/Section.astro'
import type { TagsList } from '@/components/TagList.astro'
import type { DateRange, Photo } from '../shared'

export interface JobRole {
	/** Your position in the company. */
	title: string

	/**
	 * Logo of Project/Allocation.
	 *
	 * **Ratio**: 1:1
	 *
	 * **Display size**: 56x56px
	 */
	image?: Photo

	/** Date range when you were working in the company. */
	dates: DateRange

	/** A short overview of your job. You can use markdown syntax. */
	description: string

	/** Any information that you want to highlight. We recommend to describe the technologies used in the project.*/
	tagsList: TagsList
}

export interface JobExperience {
	/** Name of the company. */
	company: string

	/**
	 * Logo of the company.
	 *
	 * **Ratio**: 1:1
	 *
	 * **Display size**: 56x56px
	 */
	image?: Photo

	/** The roles you had in the company */
	roles: JobRole[]

	/** Links related to your job (e.g. production app, company's website, project website).*/
	links: LinkButton[]
}

export interface ExperienceSection extends Section {
	/** List of your jobs in a chronological order. Start with the most recent one. */
	jobs: JobExperience[]
}
