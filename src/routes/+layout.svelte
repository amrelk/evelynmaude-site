<script lang="ts">
	import '../app.css';

	import Header from '$lib/components/Header.svelte';
	import Footer from '$lib/components/Footer.svelte';

	let { children } = $props();
</script>

<Header />
<div class="container mx-auto mt-10 flex items-center justify-center px-4">
	{@render children()}
</div>
<Footer />
