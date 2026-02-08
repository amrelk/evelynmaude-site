<script lang="ts">
	import ProjectPreview from './ProjectPreview.svelte';

	let { data } = $props();
</script>

<svelte:head>
	<title>evelyn maude - projects</title>
</svelte:head>

<div class="flex flex-col gap-5">
	{#each data.projects as project}
		<ProjectPreview slug={project.slug} title={project.title} description={project.description} preview={project.preview} />
	{/each}
</div>
