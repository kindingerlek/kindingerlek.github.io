import type { LinkButton } from '@/components/LinkButton.astro'
import type { Merge } from 'type-fest'

type LinkWithoutUrl = Omit<LinkButton, 'url'>
type PartialLinkWithUrl = Partial<LinkButton> & { url: string }

const createLinkFactory =
	<Link extends LinkWithoutUrl>(defaultData: Readonly<Link>) =>
	<Override extends PartialLinkWithUrl>(override: Readonly<Override>) =>
		({
			...defaultData,
			...override
		}) as Readonly<Merge<Link, Override>>

export default createLinkFactory

/*
Usage examples:
link({ url: '...' }) — returns base link object with provided url.
link({ name: '...', url: '...' }) — returns link object with a custom name.
*/

// GENERAL

export const facebook = createLinkFactory({
	name: 'Facebook',
	icon: 'fa6-brands:facebook-f'
})

export const linkedin = createLinkFactory({
	name: 'LinkedIn',
	icon: 'fa6-brands:linkedin-in'
})

export const twitter = createLinkFactory({
	name: 'Twitter',
	icon: 'fa6-brands:twitter'
})

export const pinterest = createLinkFactory({
	name: 'Pinterest',
	icon: 'fa6-brands:pinterest'
})

// CODE

export const github = createLinkFactory({
	name: 'GitHub',
	icon: 'fa6-brands:github'
})

export const codepen = createLinkFactory({
	name: 'CodePen',
	icon: 'fa6-brands:codepen'
})

export const stackblitz = createLinkFactory({
	name: 'StackBlitz',
	icon: 'simple-icons:stackblitz'
})

export const codesandbox = createLinkFactory({
	name: 'CodeSandbox',
	icon: 'simple-icons:codesandbox'
})

// BLOG

export const dev = createLinkFactory({
	name: 'Dev',
	icon: 'fa6-brands:dev'
})

export const medium = createLinkFactory({
	name: 'Medium',
	icon: 'fa6-brands:medium'
})

// FORUM / CHAT

export const reddit = createLinkFactory({
	name: 'Reddit',
	icon: 'fa6-brands:reddit'
})

export const quora = createLinkFactory({
	name: 'Quora',
	icon: 'fa6-brands:quora'
})

export const stackoverflow = createLinkFactory({
	name: 'Stack Overflow',
	icon: 'fa6-brands:stack-overflow'
})

// DESIGN

export const instagram = createLinkFactory({
	name: 'Instagram',
	icon: 'fa6-brands:instagram'
})
export const behance = createLinkFactory({
	name: 'Behance',
	icon: 'fa6-brands:behance'
})

export const dribbble = createLinkFactory({
	name: 'Dribbble',
	icon: 'fa6-brands:dribbble'
})

export const figma = createLinkFactory({
	name: 'Figma',
	icon: 'fa6-brands:figma'
})

// MUSIC

export const spotify = createLinkFactory({
	name: 'Spotify',
	icon: 'fa6-brands:spotify'
})

export const soundcloud = createLinkFactory({
	name: 'SoundCloud',
	icon: 'fa6-brands:soundcloud'
})

// VIDEO

export const youtube = createLinkFactory({
	name: 'YouTube',
	icon: 'fa6-brands:youtube'
})

export const twitch = createLinkFactory({
	name: 'Twitch',
	icon: 'fa6-brands:twitch'
})

export const vimeo = createLinkFactory({
	name: 'Vimeo',
	icon: 'fa6-brands:vimeo'
})

// PROJECT TYPE

export const website = createLinkFactory({
	name: 'Website',
	icon: 'fa6-solid:link'
})

export const demo = createLinkFactory({
	name: 'App demo',
	icon: 'fa6-solid:desktop'
})

export const mockups = createLinkFactory({
	name: 'Mockups',
	icon: 'fa6-solid:paintbrush'
})

export const repository = createLinkFactory({
	name: 'Repository',
	icon: 'fa6-solid:code-branch'
})
