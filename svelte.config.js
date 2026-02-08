import { mdsvex } from 'mdsvex';
import adapter from '@sveltejs/adapter-node';
import { vitePreprocess } from '@sveltejs/vite-plugin-svelte';
import rehypeFigure from 'rehype-figure';

const config = {
	preprocess: [vitePreprocess(), mdsvex({ extensions: ['.svx', '.md'], rehypePlugins: [rehypeFigure] })],
	kit: { adapter: adapter() },
	extensions: ['.svelte', '.svx', '.md']
};

export default config;
