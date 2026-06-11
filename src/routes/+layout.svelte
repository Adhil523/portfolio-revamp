<script lang="ts">
	import '../app.css';
	import favicon from '$lib/assets/favicon.svg';
	import Navbar from '$lib/components/Navbar.svelte';
	// import Footer from '$lib/components/Footer.svelte';
	import { page } from '$app/state';

	let { children } = $props();
</script>

<svelte:head>
	<link rel="icon" href={favicon} />
</svelte:head>

<div class="relative flex min-h-screen flex-col">
	<!-- Faint blueprint grid behind each page header -->
	<div class="blueprint-grid pointer-events-none fixed inset-0 -z-10"></div>
	<!-- Film grain over everything -->
	<div class="noise-overlay pointer-events-none fixed inset-0 z-60 opacity-[0.04]"></div>

	<Navbar />

	{#key page.url.pathname}
		<main class="page-enter grow">
			{@render children()}
		</main>
	{/key}

	<!-- <Footer /> -->
</div>
