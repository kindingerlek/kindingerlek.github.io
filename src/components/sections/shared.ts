import type { AllIcons } from 'iconify-icon-names'

/**
 * Name of the icon from the iconify library.
 *
 * @see https://icon-sets.iconify.design
 */
export type IconName = AllIcons

/**
 * - Dynamic import of the image from `src/assets` folder. Recommended as it enables image optimization.
 * - Path to the image placed in the `public` folder.
 * - URL of the image stored online.
 */
export type Photo = Promise<{ default: ImageMetadata }> | string

/**
 * Two date objects representing some time period.
 *
 * If the second date is `null`, it means that the period is still ongoing.
 * In such case, the translation from `config.i18n.translations.now` will be used.
 */
export type DateRange = [from: Date, to: Date | null]

export interface LabelledValue {
	/** Bolder text displayed on the left side of the value. */
	label: string

	/**
	 * Text displayed on the right side.
	 * If a list of strings provided, they will be separated by a comma.
	 */
	value: string | string[]

	/** URL that will be opened, when the value is clicked. */
	url?: string

	/** When labelled value is displayed in a grid, it will span the whole row. */
	fullRow?: boolean

	/** Icon displayed next to the value. */
	icon?: IconName
}
