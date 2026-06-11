<script lang="ts">
	import { resolve } from '$app/paths';
	import { reveal } from '$lib/actions/reveal';
</script>

<!-- Full-width CTA band shown at the bottom of every page except /contact -->
<section class="border-t border-(--line)">
	<a
		href={resolve('/contact')}
		class="group block transition-colors duration-500 hover:bg-(--bg-raised)"
	>
		<div
			class="mx-auto flex max-w-7xl flex-col gap-6 px-6 py-20 md:flex-row md:items-end md:justify-between md:px-10 md:py-28"
			use:reveal
		>
			<div>
				<p class="section-label mb-6">Next step</p>
				<h2 class="text-4xl font-medium tracking-tight text-(--text) md:text-6xl">
					Let's work
					<span
						class="font-serif-display italic transition-colors duration-500 group-hover:text-(--accent)"
						>together</span
					>
				</h2>
			</div>
			<p class="font-mono-ui text-xs tracking-widest text-(--text-dim) uppercase">
				Start a conversation
				<span
					class="ml-2 inline-block text-(--accent) transition-transform duration-500 group-hover:translate-x-2"
					aria-hidden="true">→</span
				>
			</p>
		</div>
	</a>
</section>
