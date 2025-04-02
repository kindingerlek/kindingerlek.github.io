import type { CollectionEntry } from 'astro:content'
import { getCollection } from 'astro:content'

export default class PostCollection {
	/** Note: this function filters out draft posts based on the environment */
	public static async getAll() {
		return await getCollection('posts', ({ data }: { data: CollectionEntry<'posts'>['data'] }) => {
			return import.meta.env.PROD ? data.draft !== true : true
		})
	}

	public static async sortedByDate(posts?: Array<CollectionEntry<'posts'>>) {
		const items = posts ?? (await this.getAll())
		return items.sort((a, b) => {
			const aDate = new Date(a.data.updatedDate ?? a.data.publishDate).valueOf()
			const bDate = new Date(b.data.updatedDate ?? b.data.publishDate).valueOf()
			return bDate - aDate
		})
	}

	/** Note: This function doesn't filter draft posts */
	public static async getAllTags(posts?: Array<CollectionEntry<'posts'>>) {
		const items = posts ?? (await this.getAll())
		return items.flatMap((post) => [...post.data.tags])
	}

	/** Note: This function doesn't filter draft posts */
	public static async getUniqueTags(posts?: Array<CollectionEntry<'posts'>>) {
		const allTags = await this.getAllTags(posts)
		return [...new Set(allTags)]
	}

	/** Note: This function doesn't filter draft posts */
	public static async getUniqueTagsWithCount(
		posts?: Array<CollectionEntry<'posts'>>
	): Promise<Array<[string, number]>> {
		const allTags = await this.getAllTags(posts)
		return [
			...allTags.reduce((acc, t) => acc.set(t, (acc.get(t) || 0) + 1), new Map<string, number>())
		].sort((a, b) => b[1] - a[1])
	}
}
