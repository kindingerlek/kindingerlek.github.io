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
					url: 'https://globalgamejam.org/games/2025/ephemeral-breeze-5'
				},
				{
					name: '2024',
					url: 'https://globalgamejam.org/games/2024/happy-jam-friends-9'
				},
				{
					name: '2023',
					url: 'https://v3.globalgamejam.org/2023/games/rootproblems-7'
				},
				{
					name: '2020',
					url: 'https://v3.globalgamejam.org/2020/games/re-pair-8-0'
				},
				{
					name: '2019',
					url: 'https://v3.globalgamejam.org/2019/games/kutimido'
				},
				{
					name: '2018',
					url: 'https://v3.globalgamejam.org/2018/games/sick-people'
				},
				{
					name: '2017',
					url: 'https://v3.globalgamejam.org/2017/games/drownallthem'
				},
				{
					name: '2015',
					url: 'https://v3.globalgamejam.org/2015/games/babies-wanna-food'
				}
			]
		},
		{
			title: 'The Developer Conference (TDC)',
			url: 'https://thedevconf.com/',
			tags: [
				{
					name: '2023'
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
