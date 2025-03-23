import type { Section } from '@/components/Section.astro'
import type { Photo } from '../shared'

export interface Book {
	/** Book title. */
	title: string

	/** Book cover.
	 *
	 * **Ratio**: 3:4
	 *
	 * **Display size**: 300x400px
	 */
	image: Photo

	/** Full name of the book author. */
	author: string

	/** Website to buy the book or read more about it. */
	url: string
}

export interface Person {
	/** Full name of the person. */
	name: string

	/** Photo of the person.
	 *
	 * **Ratio**: 1:1
	 *
	 * **Display size**: 200x200px
	 */
	image: Photo

	/** Main website related to the person. */
	url?: string
}

export interface Video {
	/** Title of the video. */
	title: string

	/** Thumbnail of the video.
	 *
	 * **Ratio**: 16:9
	 *
	 * **Display size**: 448x252px
	 */
	image: Photo

	/** Link to the video. */
	url: string
}

export interface Media {
	/** Title of the media. */
	title: string

	/** Type of the media (e.g. podcast, blog, newsletter, YouTube channel, .etc). */
	type: string

	/** Logo of the media.
	 *
	 * **Ratio**: 1:1
	 *
	 * **Display size**: 200x200px
	 */
	image: Photo

	/** URL to the main website related to the media. */
	url: string
}

export interface SubSection<Data = unknown> {
	/** Title that will be displayed above the list of items. */
	title: string

	/** List of items to display within the subsection. */
	data: Data[]
}

export interface FavoritesSection extends Section {
	/** List of your favorite books. */
	books?: SubSection<Book>

	/** List of the people that inspire you. */
	people?: SubSection<Person>

	/** List of the videos you learned the most from. */
	videos?: SubSection<Video>

	/** List of other media types that helps you to growth in your field. */
	medias?: SubSection<Media>
}
