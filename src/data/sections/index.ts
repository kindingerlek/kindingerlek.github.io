import type { Sections } from '@/types/data'
import type { ReadonlyDeep } from 'type-fest'
import educationData from './education-section.data'
import experienceData from './experience-section.data'
import favoritesData from './favorites-section.data'
import mainData from './main-section.data'
import projectsData from './projects-section.data'
import skillsData from './skills-section.data'
import testimonialsData from './testimonials-section.data'
import blogData from './blog-section.data'
import conferencesEventsData from './conferences-events.section.data'

export const sections = {
	main: mainData,
	blog: blogData,
	projects: projectsData,
	experience: experienceData,
	education: educationData,
	conferencesEvents: conferencesEventsData,
	skills: skillsData,
	testimonials: testimonialsData,
	favorites: favoritesData
} as const satisfies ReadonlyDeep<Sections>

export default sections
