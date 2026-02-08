<script lang="ts">
	let { data } = $props();
</script>

<article class="prose">
	<h1>{data.title}</h1>
	<p>Published {new Date(data.date).toLocaleDateString('en-US', { year: 'numeric', month: 'long' })}</p>
	<data.content />
</article>
