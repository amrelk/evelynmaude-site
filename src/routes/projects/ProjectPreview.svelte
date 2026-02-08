<script lang="ts">
	let { slug, title, description, preview } = $props();
</script>

<a class="prose flex flex-col rounded-2xl shadow-md outline outline-black/5 hover:shadow-xl" href="/projects/{slug}">
	{#if preview}
		<img src={preview} alt={title} class="m-0 h-100 w-full rounded-t-2xl object-cover" />
	{/if}
	<div class="p-5">
		<h4 class="font-semibold">{title}</h4>
		<p>{description}</p>
	</div>
</a>
