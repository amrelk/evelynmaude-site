import { error } from '@sveltejs/kit';

export async function load({ params }) {
	try {
		const post = await import(`../../../md/projects/${params.slug}.md`);
		const { title, date } = post.metadata;
		const content = post.default;

		return {
			content,
			title,
			date
		};
	} catch {
		error(404, 'issue in post load, likely not found');
	}
}
