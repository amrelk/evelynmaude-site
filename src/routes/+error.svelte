<script lang="ts">
	import { page } from '$app/state';

	console.log(page.error);
</script>

<svelte:head>
	<title>error {page.status}</title>
</svelte:head>

<div class="prose rounded-2xl p-10 shadow-lg outline outline-black/5">
	<h3 class="text-center">We've found an error. Graphical representation to follow.</h3>
	<img src="https://http.cat/{page.status}" alt="a cat representing http error {page.status}"/>
</div>
