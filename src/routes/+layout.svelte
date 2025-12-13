<script lang="ts">
	import './layout.css';
  import '../app.css';
	import favicon from '$lib/assets/favicon.svg';
  import Navbar from '$lib/components/Navbar.svelte';
  import Footer from '$lib/components/Footer.svelte';

	let { children } = $props();
</script>

<svelte:head>
  <link rel="icon" href={favicon} />
  <title>Alex Dev | Portfolio</title>
</svelte:head>

<div class="relative min-h-screen flex flex-col">
  <!-- Dynamic background glow effects -->
  <div class="fixed top-0 left-0 w-full h-full overflow-hidden pointer-events-none -z-10">
    <div class="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-[var(--accent-secondary)] rounded-full mix-blend-screen opacity-10 blur-[100px] animate-pulse-glow"></div>
    <div class="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] bg-[var(--accent-primary)] rounded-full mix-blend-screen opacity-10 blur-[100px] animate-pulse-glow" style="animation-delay: 1.5s"></div>
  </div>

  <Navbar />
  
  <main class="flex-grow pt-20">
    {@render children()}
  </main>
  
  <Footer />
</div>
