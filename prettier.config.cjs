/** @type {import("prettier").Config} */

module.exports = {
	...require('prettier-config-standard'),
	plugins: ['prettier-plugin-astro', 'prettier-plugin-tailwindcss'],
	overrides: [
		{
			files: '*.astro',
			options: {
				parser: 'astro'
			}
		}
	],
	useTabs: true,
	singleQuote: true,
	trailingComma: 'none',
	printWidth: 100
}
