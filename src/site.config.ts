import type { AstroExpressiveCodeOptions } from 'astro-expressive-code'
import type { Config } from '@/types/data'
import { enUS } from 'date-fns/locale'
import type { ReadonlyDeep } from 'type-fest'

export const CONFIG = {
	site: {
		// Used as both a meta property (src/components/BaseHead.astro L:31 + L:49) & the generated satori png (src/pages/og-image/[slug].png.ts)
		author: 'Lucas Kindinger',
		// Meta property used to construct the meta title property, found in src/components/BaseHead.astro L:11
		title: 'Lucas Kindinger - Software Engineer',
		// Meta property used as the default description meta property
		description:
			'Personal site of Lucas Kindinger, a software engineer from Brazil. Here you can find my projects, blog posts and more.'
	},

	i18n: {
		locale: enUS,
		dateFormat: 'MMMM yyyy',
		translations: {
			now: 'now'
		},
		// HTML lang property, found in src/layouts/Base.astro L:18
		lang: 'en-US',
		// Date.prototype.toLocaleDateString() parameters, found in src/utils/date.ts.
		date: {
			locale: 'en-US',
			options: {
				day: 'numeric',
				month: 'short',
				year: 'numeric'
			}
		}
	},
	meta: {
		title: 'Lucas Kindinger - Software Engineer',
		description:
			'Lorem ipsum dolor sit amet, consectetur adipiscing elit. In sodales ac dui at vestibulum. In condimentum metus id dui tincidunt, in blandit mi vehicula.',
		faviconPath: '/src/assets/my-image.jpeg',
		// Meta property, found in src/components/BaseHead.astro L:42
		ogLocale: 'en_US'
	},
	pdf: {
		footer:
			'I hereby give consent for my personal data included in my application to be processed for the purposes of the recruitment process.'
	}
} as const satisfies ReadonlyDeep<Config>

export const menuLinks: Array<{ title: string; path: string }> = [
	{
		title: 'Home',
		path: '/'
	},
	{
		title: 'Blog',
		path: '/blog/'
	}
]

// https://expressive-code.com/reference/configuration/
export const expressiveCodeOptions: AstroExpressiveCodeOptions = {
	// One dark, one light theme => https://expressive-code.com/guides/themes/#available-themes
	themes: ['dracula', 'github-light'],
	themeCssSelector(theme, { styleVariants }) {
		// If one dark and one light theme are available
		// generate theme CSS selectors compatible with cactus-theme dark mode switch
		if (styleVariants.length >= 2) {
			const baseTheme = styleVariants[0]?.theme
			const altTheme = styleVariants.find((v) => v.theme.type !== baseTheme?.type)?.theme
			if (theme === baseTheme || theme === altTheme) return `[data-theme='${theme.type}']`
		}
		// return default selector
		return `[data-theme="${theme.name}"]`
	},
	useThemedScrollbars: false,
	styleOverrides: {
		frames: {
			frameBoxShadowCssValue: 'none'
		},
		uiLineHeight: 'inherit',
		codeFontSize: '0.875rem',
		codeLineHeight: '1.7142857rem',
		borderRadius: '4px',
		codePaddingInline: '1rem',
		codeFontFamily:
			'ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, "Liberation Mono", "Courier New", monospace;'
	}
}
