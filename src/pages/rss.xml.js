import rss from "@astrojs/rss";
import { SITE_DESCRIPTION, SITE_TITLE } from "@data/index";
import { getCollection } from "astro:content";

export async function GET(context) {
	const [thoughts] = await Promise.all([
		getCollection("thought"),
	]);

	return rss({
		title: SITE_TITLE,
		description: SITE_DESCRIPTION,
		site: context.site,
		items: [
			...thoughts.map((thought) => ({
				title: thought.data.title,
				pubDate: thought.data.pubDate,
				description: thought.data.description,
				link: `/thoughts/${thought.slug}/`,
			})),
		],
		customData: `<language>en-us</language>`,
	});
}
