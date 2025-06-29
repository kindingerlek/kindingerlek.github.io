import type { EducationSection } from '@/components/sections/Education/EducationSection.types'
import type { ExperienceSection } from '@/components/sections/Experience/ExperienceSection.types'
import type { FavoritesSection } from '@/components/sections/Favorites/FavoritesSection.types'
import type { MainSection } from '@/components/sections/Main/MainSection.types'
import type { SkillsSection } from '../components/sections/Skills/SkillsSection.types'
import type { TestimonialsSection } from '../components/sections/Testimonials/TestimonialsSection.types'
import type { BlogSection } from '@/components/sections/Blog/BlogSection.types'
import type { ConferencesEventsSection } from '@/components/sections/ConferencesEvents/ConferencesEventsSection.types'
import type { Locale } from 'date-fns'
import type { ProjectsSection } from '@/components/sections/Portfolio/ProjectsSection.types'

export type Config = {
	site: {
		author: string
		title: string
		description: string
	}

	/** Page metadata used for SEO and social media sharing. */
	meta: {
		/** Page title.
		 *
		 * Displayed as browser tab title and in search results.
		 * It's recommended to keep it between 30 and 60 characters.
		 *
		 * *Optional:* If not specified, the `site.title` will be used as a fallback.
		 *
		 * @see https://www.screamingfrog.co.uk/learn-seo/page-title
		 */
		title?: string

		/** Page description.
		 *
		 * Displayed under the title in search results.
		 * It's recommended to keep it between 70 and 155 characters.
		 *
		 * @see https://www.screamingfrog.co.uk/learn-seo/meta-description
		 */
		description: string

		/** Absolute path to the image used for favicons generation.
		 *
		 * Specified icon will be displayed next to the page title in browser tab.
		 */
		faviconPath: string

		/** Title used in open graph links.
		 *
		 * If not specified, the title property will be used.
		 *
		 * @see https://ahrefs.com/blog/open-graph-meta-tags
		 */
		ogTitle?: string

		/** Description used in open graph links.
		 *
		 * If not specified, the description property will be used.
		 *
		 * @see https://ahrefs.com/blog/open-graph-meta-tags
		 */
		ogDescription?: string

		/** Image used in open graph links.
		 *
		 * It's recommended to keep it between 30 and 60 characters.
		 *
		 * @see https://ahrefs.com/blog/open-graph-meta-tags
		 */
		ogImage?: string

		ogLocale?: string | undefined

		articleDate?: string | undefined
	}

	/** Language and date display configuration. */
	i18n: {
		/** Language code used for date formatting, translations, and value of the page `lang` attribute.*/
		locale: Locale

		/** Date format used when displaying date ranges in some sections.*/
		dateFormat: string

		/** List of translations used in the application.*/
		translations: {
			/** Used in date ranges to represent the current date.*/
			now: string
		}

		lang: string
		date: {
			locale: string | string[] | undefined
			options: Intl.DateTimeFormatOptions
		}
	}

	/** Configuration of the pdf generation. */
	pdf?: {
		/** Displays footer with specified content on each PDF page.
		 *
		 * You can use it to add the data processing clause.
		 */
		footer?: string
	}
}

export type Sections = {
	/** Basic information about you. */
	main: MainSection

	/** posts and articles. */
	blog: BlogSection

	/** Your projects and initiatives. */
	projects: ProjectsSection

	/** Grouped lists of your skills. */
	skills: SkillsSection

	/** Your employment history. */
	experience: ExperienceSection

	/** Your education degrees and certifications. */
	education: EducationSection

	/** Recommendations from your previous employers and people you worked with. */
	testimonials: TestimonialsSection

	/** List of sources you use to gain knowledge and inspiration. */
	favorites: FavoritesSection

	/** List of Conferences and events you attended. */
	conferencesEvents: ConferencesEventsSection
}

/** All data used to generate the cv. */
export interface Data {
	/** Global configuration of the web and pdf versions of the cv. */
	config: Config

	/** Configurations for the particular sections of the cv. */
	sections: Sections
}
