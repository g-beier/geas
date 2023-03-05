import rss from '@astrojs/rss';
import { getCollection } from 'astro:content';

import { SITE } from '~/config.mjs';

export async function get() {
	const blog = await getCollection('blog');
	return rss({
		title: `Blog do ${SITE.name}`,
		description: SITE.description,
		site: import.meta.env.SITE,
		items: blog.map((post) => ({
			title: post.data.title,
			pubDate: post.data.publishDate,
			description: post.data.description,
			// Compute RSS link from post `slug`
			// This example assumes all posts are rendered as `/blog/[slug]` routes
			link: `/${post.slug}`,
		})),
	});
}
