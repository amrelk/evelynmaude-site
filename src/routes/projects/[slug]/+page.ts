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
	} catch (e) {
		error(404, `issue in post "${params.slug}" load, likely not found -- ${e}`);
	}
}
