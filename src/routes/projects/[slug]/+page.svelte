<script lang="ts">
	let { data } = $props();
</script>

<article class="prose">
	<h1>{data.title}</h1>
	<p>Published {data.date}</p>
	<data.content />
</article>
