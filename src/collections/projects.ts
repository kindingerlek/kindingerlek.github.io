import type { CollectionEntry } from 'astro:content'
import { getCollection } from 'astro:content'

export default class ProjectCollection {
	/** Note: this function filters out draft projects based on the environment */
	public static async getAll() {
		return await getCollection(
			'projects',
			({ data }: { data: CollectionEntry<'projects'>['data'] }) => {
				return import.meta.env.PROD ? data.draft !== true : true
			}
		)
	}

	public static async sortedByDate(projects?: Array<CollectionEntry<'projects'>>) {
		const projs = projects ?? (await this.getAll())
		return projs.sort((a, b) => {
			const aDate = new Date(a.data.updatedDate ?? a.data.publishDate).valueOf()
			const bDate = new Date(b.data.updatedDate ?? b.data.publishDate).valueOf()
			return bDate - aDate
		})
	}

	/** Note: This function doesn't filter draft projects */
	public static async getAllTags(projects?: Array<CollectionEntry<'projects'>>) {
		const projs = projects ?? (await this.getAll())
		return projs.flatMap((post) => [...post.data.tags])
	}

	/** Note: This function doesn't filter draft projects */
	public static async getUniqueTags(projects?: Array<CollectionEntry<'projects'>>) {
		const allTags = await this.getAllTags(projects)
		return [...new Set(allTags)]
	}

	/** Note: This function doesn't filter draft projects */
	public static async getUniqueTagsWithCount(
		projects?: Array<CollectionEntry<'projects'>>
	): Promise<Array<[string, number]>> {
		const allTags = await this.getAllTags(projects)
		return [
			...allTags.reduce((acc, t) => acc.set(t, (acc.get(t) || 0) + 1), new Map<string, number>())
		].sort((a, b) => b[1] - a[1])
	}
}
