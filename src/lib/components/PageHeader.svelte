<script lang="ts">
	import type { Snippet } from 'svelte';

	let {
		index,
		label,
		sub,
		children
	}: { index: string; label: string; sub?: string; children: Snippet } = $props();
</script>

<section class="relative overflow-hidden">
	<!-- Oversized hollow numeral bleeding off the right edge -->
	<span
		class="text-outline font-display animate-rise pointer-events-none absolute -top-8 -right-6 text-[16rem] leading-none font-bold select-none md:-top-4 md:text-[24rem]"
		style="animation-delay: 0.5s"
		aria-hidden="true"
	>
		{index}
	</span>

	<div class="relative mx-auto max-w-7xl px-6 pt-40 pb-16 md:px-10 md:pt-48 md:pb-24">
		<p class="section-label animate-rise mb-8" style="animation-delay: 0.1s">{label}</p>
		<h1
			class="animate-rise max-w-4xl text-5xl leading-[1.02] font-medium tracking-tighter text-(--text) md:text-8xl"
			style="animation-delay: 0.25s"
		>
			{@render children()}
		</h1>
		{#if sub}
			<p
				class="animate-rise mt-8 max-w-xl text-lg leading-relaxed font-light text-(--text-dim)"
				style="animation-delay: 0.4s"
			>
				{sub}
			</p>
		{/if}
	</div>
</section>
