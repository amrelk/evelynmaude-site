<script lang="ts">
	let { slug, title, description } = $props();
</script>

<a class="prose rounded-2xl p-5 shadow-md outline outline-black/5 hover:shadow-xl" href="/projects/{slug}">
	<h4 class="font-semibold">{title}</h4>
	<p>{description}</p>
</a>
