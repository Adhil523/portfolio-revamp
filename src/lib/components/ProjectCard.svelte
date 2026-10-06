<script lang="ts">
	import type { Project } from '$lib/data';

	let { project, index }: { project: Project; index: number } = $props();

	const indexLabel = $derived(String(index + 1).padStart(2, '0'));
</script>

<!-- eslint-disable svelte/no-navigation-without-resolve -->
<a
	href={project.link}
	target="_blank"
	rel="noopener noreferrer"
	class="group block border-t border-(--line) py-10 transition-colors duration-500 last:border-b hover:bg-(--bg-raised) md:py-14"
>
	<article class="grid grid-cols-12 items-start gap-6 md:gap-10">
		<div
			class="font-mono-ui col-span-12 flex items-center gap-4 text-xs text-(--text-faint) md:col-span-1 md:block"
		>
			<span class="transition-colors duration-300 group-hover:text-(--accent)">{indexLabel}</span>
			{#if project.year}
				<span class="md:mt-2 md:block">{project.year}</span>
			{/if}
		</div>

		<div class="col-span-12 md:col-span-6">
			<h3
				class="mb-4 text-3xl font-medium tracking-tight text-(--text) transition-transform duration-500 group-hover:translate-x-2 md:text-5xl"
			>
				{project.title}
				<span
					class="inline-block text-(--text-faint) transition-all duration-500 group-hover:translate-x-1 group-hover:-translate-y-1 group-hover:text-(--accent)"
					aria-hidden="true">↗</span
				>
			</h3>
			<p class="mb-6 max-w-xl leading-relaxed font-light text-(--text-dim)">
				{project.description}
			</p>
			<div class="flex flex-wrap gap-2">
				{#each project.tags as tag (tag)}
					<span
						class="font-mono-ui border border-(--line) px-3 py-1 text-[0.65rem] tracking-widest text-(--text-faint) uppercase transition-colors duration-300 group-hover:border-(--line-strong) group-hover:text-(--text-dim)"
					>
						{tag}
					</span>
				{/each}
			</div>
		</div>

		<div class="col-span-12 overflow-hidden md:col-span-5">
			{#if project.image}
				<img
					src={project.image}
					alt={project.title}
					loading="lazy"
					class="aspect-3/2 w-full object-cover opacity-70 grayscale transition-all duration-700 ease-out group-hover:scale-[1.03] group-hover:opacity-100 group-hover:grayscale-0"
				/>
			{:else if project.logo}
				<!-- Logos sit small and centred so they aren't stretched to fill the frame -->
				<div
					class="flex aspect-3/2 w-full items-center justify-center border border-(--line) bg-(--bg-raised) transition-colors duration-500 group-hover:border-(--line-strong)"
				>
					<img
						src={project.logo}
						alt="{project.title} logo"
						loading="lazy"
						class="size-16 object-contain opacity-70 grayscale transition-all duration-700 ease-out group-hover:scale-110 group-hover:opacity-100 group-hover:grayscale-0 md:size-20"
					/>
				</div>
			{/if}
		</div>
	</article>
</a>
