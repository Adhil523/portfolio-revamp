<script lang="ts">
	import { goto } from '$app/navigation';
	import { page } from '$app/state';
	import { onMount } from 'svelte';
	import { URLS } from '$lib/urls';

	const links = [
		{ name: 'Work', path: URLS.app.work },
		{ name: 'Projects', path: URLS.app.projects },
		{ name: 'About', path: URLS.app.about },
		{ name: 'Contact', path: URLS.app.contact }
	];

	async function navigate(path: Parameters<typeof goto>[0]) {
		// eslint-disable-next-line svelte/no-navigation-without-resolve -- routes come from the URLS map
		await goto(path);
	}

	let linkEls = $state<HTMLButtonElement[]>([]);
	let hovered = $state<number | null>(null);

	let activeIndex = $derived(links.findIndex((l) => l.path === page.url.pathname));
	// The indicator follows the hovered tab, falling back to the active route.
	let target = $derived(hovered ?? activeIndex);

	let pill = $state({ left: 0, width: 0, visible: false });

	function measure() {
		const el = target >= 0 ? linkEls[target] : null;
		if (el) {
			pill = { left: el.offsetLeft, width: el.offsetWidth, visible: true };
		} else {
			pill = { ...pill, visible: false };
		}
	}

	// Re-measure on hover/route change, after fonts settle, and on resize.
	$effect(() => {
		// Touch the reactive deps so the effect re-runs when they change.
		void target;
		void page.url.pathname;
		requestAnimationFrame(measure);
	});

	onMount(() => {
		const onResize = () => measure();
		window.addEventListener('resize', onResize);
		// Fonts can shift widths after first paint.
		if (document.fonts?.ready) document.fonts.ready.then(measure);
		return () => window.removeEventListener('resize', onResize);
	});

	const isActive = (i: number) => activeIndex === i;
</script>

<header class="fixed bottom-6 left-1/2 z-70 -translate-x-1/2 px-3">
	<nav
		class="flex items-center gap-1 rounded-full border border-(--line-strong) bg-(--bg-raised)/70 p-1.5 shadow-[0_8px_40px_-12px_rgba(0,0,0,0.7)] backdrop-blur-xl"
	>
		<!-- Brand -->
		<button
			type="button"
			aria-label="Home"
			onclick={() => navigate(URLS.app.home)}
			class="group flex cursor-pointer items-center rounded-full px-3.5 py-2 transition-colors"
		>
			<span
				class="font-mono-ui text-sm tracking-widest text-(--text) uppercase transition-colors group-hover:text-(--accent)"
			>
				AR<span class="text-(--accent)">.</span>
			</span>
		</button>

		<span class="mx-0.5 h-5 w-px bg-(--line-strong)" aria-hidden="true"></span>

		<!-- Tabs with a gliding indicator -->
		<!-- svelte-ignore a11y_no_static_element_interactions -->
		<div class="relative flex items-center" onmouseleave={() => (hovered = null)}>
			<!-- The pill that slides between tabs -->
			<span
				class="pointer-events-none absolute top-0 bottom-0 rounded-full bg-(--accent) transition-[left,width,opacity] duration-400 ease-[cubic-bezier(0.34,1.55,0.5,1)]"
				style="left: {pill.left}px; width: {pill.width}px; opacity: {pill.visible ? 1 : 0}"
				aria-hidden="true"
			></span>

			{#each links as link, i (link.path)}
				<button
					type="button"
					bind:this={linkEls[i]}
					aria-current={isActive(i) ? 'page' : undefined}
					onmouseenter={() => (hovered = i)}
					onclick={() => navigate(link.path)}
					class="font-mono-ui relative z-10 cursor-pointer rounded-full px-4 py-2 text-xs tracking-widest uppercase transition-colors duration-300 {target ===
					i
						? 'text-(--accent-ink)'
						: isActive(i)
							? 'text-(--text)'
							: 'text-(--text-dim) hover:text-(--text)'}"
				>
					{link.name}
				</button>
			{/each}
		</div>
	</nav>
</header>
