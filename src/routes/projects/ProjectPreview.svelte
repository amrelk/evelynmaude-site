<script lang="ts">
	let { slug, title, description, preview } = $props();
</script>

<a
	class="flex flex-col overflow-hidden rounded-2xl shadow-md outline outline-black/5 hover:shadow-xl"
	href="/projects/{slug}"
>
	{#if preview}
		<img src={preview} alt={title} class="aspect-[5/3] w-full object-cover" />
	{/if}
	<div class="p-5">
		<h2 class="font-semibold text-gray-900">{title}</h2>
		<p class="mt-2 leading-7 text-gray-700">{description}</p>
	</div>
</a>
