<script lang="ts">
	let { name, description } = $props();
</script>

<a class="prose rounded-2xl p-5 shadow-md outline outline-black/5 hover:shadow-xl" href="/">
	<h4 class="font-semibold">{name}</h4>
	<p>{description}</p>
</a>
