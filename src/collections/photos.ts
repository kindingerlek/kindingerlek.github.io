import type { CollectionEntry } from 'astro:content'
import { getCollection } from 'astro:content'

// filepath: d:\Projetos\Astro\astro-theme-resume\src\collections/photos.ts

export default class PhotoCollection {
	/** Note: this function filters out draft photos based on the environment */
	public static async getAll() {
		return await getCollection(
			'photography',
			({ data }: { data: CollectionEntry<'photography'>['data'] }) => {
				return import.meta.env.PROD ? data.draft !== true : true
			}
		)
	}

	public static async sortedByDate(photos?: Array<CollectionEntry<'photography'>>) {
		const items = photos ?? (await this.getAll())
		return items.sort((a, b) => {
			const aDate = new Date(a.data.updatedDate ?? a.data.publishDate).valueOf()
			const bDate = new Date(b.data.updatedDate ?? b.data.publishDate).valueOf()
			return bDate - aDate
		})
	}

	/** Note: This function doesn't filter draft photos */
	public static async getAllTags(photos?: Array<CollectionEntry<'photography'>>) {
		const items = photos ?? (await this.getAll())
		return items.flatMap((photo) => [...photo.data.tags])
	}

	/** Note: This function doesn't filter draft photos */
	public static async getUniqueTags(photos?: Array<CollectionEntry<'photography'>>) {
		const allTags = await this.getAllTags(photos)
		return [...new Set(allTags)]
	}

	/** Note: This function doesn't filter draft photos */
	public static async getUniqueTagsWithCount(
		photos?: Array<CollectionEntry<'photography'>>
	): Promise<Array<[string, number]>> {
		const allTags = await this.getAllTags(photos)
		return [
			...allTags.reduce((acc, t) => acc.set(t, (acc.get(t) || 0) + 1), new Map<string, number>())
		].sort((a, b) => b[1] - a[1])
	}
}
