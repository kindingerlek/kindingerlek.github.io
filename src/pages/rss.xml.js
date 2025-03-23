import rss from '@astrojs/rss'
import { CONFIG } from '@/site-config'
import { getAllPosts } from '@/utils'

export const GET = async () => {
	const posts = await getAllPosts()

	return rss({
		title: CONFIG.site.title,
		description: CONFIG.site.description,
		site: import.meta.env.SITE,
		items: posts.map((post) => ({
			title: post.data.title,
			description: post.data.description,
			pubDate: post.data.publishDate,
			link: `/blog/${post.slug}`
		}))
	})
}
