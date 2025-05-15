import type { ArtworkContentType, ArtworkEntry } from '@/content/config'
import { getCollection } from 'astro:content'

export default class ArtworkCollection {
	public static async getAll() {
		return await getCollection('artworks', ({ data }: { data: ArtworkEntry['data'] }) => {
			return import.meta.env.PROD ? data.draft !== true : true
		})
	}

	public static async sortedByDate(artworks?: Array<ArtworkEntry>) {
		const arts = artworks ?? (await this.getAll())

		return arts.sort((a, b) => {
			const aDate = new Date(a.data.updatedDate ?? a.data.publishDate).valueOf()
			const bDate = new Date(b.data.updatedDate ?? b.data.publishDate).valueOf()
			return bDate - aDate
		})
	}

	/** Note: This function doesn't filter draft artworks */
	public static async getAllTags(artworks?: Array<ArtworkEntry>) {
		const projs = artworks ?? (await this.getAll())
		return projs.flatMap((post) => [...post.data.tags])
	}

	/** Note: This function doesn't filter draft artworks */
	public static async getUniqueTags(artworks?: Array<ArtworkEntry>) {
		const allTags = await this.getAllTags(artworks)
		return [...new Set(allTags)]
	}

	/** Note: This function doesn't filter draft artworks */
	public static async getUniqueTagsWithCount(
		artworks?: Array<ArtworkEntry>
	): Promise<Array<[string, number]>> {
		const allTags = await this.getAllTags(artworks)
		return [
			...allTags.reduce((acc, t) => acc.set(t, (acc.get(t) || 0) + 1), new Map<string, number>())
		].sort((a, b) => b[1] - a[1])
	}

	public static async getByType(type: ArtworkContentType, artworks?: Array<ArtworkEntry>) {
		artworks ??= await this.getAll()

		return artworks.filter((a) => a.data.types.includes(type))
	}

	public static async getAllTypes(artworks?: Array<ArtworkEntry>) {
		artworks ??= await this.getAll()

		return artworks.flatMap((a) => a.data.types)
	}

	public static async getUniqueTypes(artworks?: Array<ArtworkEntry>) {
		const allTypes = await this.getAllTypes(artworks)
		return [...new Set(allTypes)]
	}
}
