import type { ConferencesEventsSection } from '@/components/sections/ConferencesEvents/ConferencesEventsSection.types'
import type { ReadonlyDeep } from 'type-fest'

const conferencesEventsSectionData = {
	config: {
		title: 'Conferences & Events',
		slug: 'conferences-events',
		icon: 'fa6-solid:calendar-days',
		visible: true
	},
	conferences: [
		{
			title: 'Global Game Jam',
			url: 'https://globalgamejam.org/',
			tags: [
				{
					name: '2025',
					url: '#'
				},
				{
					name: '2024',
					url: '#'
				},
				{
					name: '2023',
					url: '#'
				},
				{
					name: '2020',
					url: '#'
				},
				{
					name: '2019',
					url: '#'
				},
				{
					name: '2018',
					url: '#'
				},
				{
					name: '2017',
					url: '#'
				},
				{
					name: '2015',
					url: '#'
				}
			]
		},
		{
			title: 'Volunteer at SBGames',
			url: 'https://sbgames.org/',
			tags: [
				{
					name: '2017'
				}
			]
		},
		{
			title: 'Computing update journey',
			tags: [
				{
					name: '2014'
				}
			]
		},
		{
			title: 'Introduction to Unity 3D',
			tags: [
				{
					name: '2014'
				}
			]
		},
		{
			title: 'Unity 2D Games',
			tags: [
				{
					name: '2014'
				}
			]
		}
	]
} as const satisfies ReadonlyDeep<ConferencesEventsSection>

export default conferencesEventsSectionData
