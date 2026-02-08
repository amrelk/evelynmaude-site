export async function load() {
	const modules = import.meta.glob('/src/md/projects/*.md', { eager: true });

	const projects = Object.entries(modules)
		.filter(([path]) => !path.endsWith('README.md'))
		.filter(([path]) => !path.includes('__'))
		.map(([path, module]: [string, any]) => {
			const slug = path.split('/').pop()!.replace('.md', '');
			const { title, date, description } = module.metadata;
			return { slug, title, date, description };
		})
		.sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());

	return { projects };
}
