<script lang="ts">
	import ProjectPreview from './ProjectPreview.svelte';

	import { error } from '@sveltejs/kit';

	let projects = [
		{
			name: 'Formula SAE Car',
			description: 'a very interesting project',
			size: 'small'
		},
		{
			name: 'two',
			description:
				'an even more interesting project which i have a lot of stuff to write about so i can work on my ui lol',
			size: 'small'
		},
		{ name: 'three', description: 'interesting project', size: 'big' },
		{
			name: 'four',
			description: 'interesting project',
			size: 'big'
		}
	];

	error(404, 'not found');
</script>

<div class="flex flex-col gap-5">
	{#each projects as project}
		<ProjectPreview name={project.name} description={project.description} />
	{/each}
</div>
