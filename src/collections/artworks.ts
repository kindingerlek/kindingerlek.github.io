import type { CollectionEntry } from 'astro:content'
import { getCollection } from 'astro:content'

export default class ArtworkCollection {
	public static async getAll() {
		return await getCollection(
			'artworks',
			({ data }: { data: CollectionEntry<'artworks'>['data'] }) => {
				return import.meta.env.PROD ? data.draft !== true : true
			}
		)
	}

	public static async sortedByDate(artworks?: Array<CollectionEntry<'artworks'>>) {
		const arts = artworks ?? (await this.getAll())

		return arts.sort((a, b) => {
			const aDate = new Date(a.data.updatedDate ?? a.data.publishDate).valueOf()
			const bDate = new Date(b.data.updatedDate ?? b.data.publishDate).valueOf()
			return bDate - aDate
		})
	}

	/** Note: This function doesn't filter draft artworks */
	public static async getAllTags(artworks?: Array<CollectionEntry<'artworks'>>) {
		const projs = artworks ?? (await this.getAll())
		return projs.flatMap((post) => [...post.data.tags])
	}

	/** Note: This function doesn't filter draft artworks */
	public static async getUniqueTags(artworks?: Array<CollectionEntry<'artworks'>>) {
		const allTags = await this.getAllTags(artworks)
		return [...new Set(allTags)]
	}

	/** Note: This function doesn't filter draft artworks */
	public static async getUniqueTagsWithCount(
		artworks?: Array<CollectionEntry<'artworks'>>
	): Promise<Array<[string, number]>> {
		const allTags = await this.getAllTags(artworks)
		return [
			...allTags.reduce((acc, t) => acc.set(t, (acc.get(t) || 0) + 1), new Map<string, number>())
		].sort((a, b) => b[1] - a[1])
	}

	public static async getByType(type: string, artworks?: Array<CollectionEntry<'artworks'>>) {
		artworks ??= await this.getAll()

		return artworks.filter((a) => a.data.types.includes(type))
	}

	public static async getAllTypes(artworks?: Array<CollectionEntry<'artworks'>>) {
		artworks ??= await this.getAll()

		return artworks.flatMap((a) => a.data.types)
	}

	public static async getUniqueTypes(artworks?: Array<CollectionEntry<'artworks'>>) {
		const allTypes = await this.getAllTypes(artworks)
		return [...new Set(allTypes)]
	}
}
