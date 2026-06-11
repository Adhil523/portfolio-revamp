<script lang="ts">
	import { resolve } from '$app/paths';
	import { page } from '$app/state';
	import { onMount } from 'svelte';
	import { data } from '$lib/data';

	let isScrolled = $state(false);
	let isHidden = $state(false);
	let isMobileMenuOpen = $state(false);

	let lastScrollY = 0;

	function handleScroll() {
		const y = window.scrollY;
		isScrolled = y > 20;
		// Hide when scrolling down past the top strip, reveal on any upward scroll.
		if (y > lastScrollY && y > 120) {
			isHidden = true;
		} else if (y < lastScrollY) {
			isHidden = false;
		}
		lastScrollY = y;
	}

	onMount(() => {
		lastScrollY = window.scrollY;
		window.addEventListener('scroll', handleScroll, { passive: true });
		const handleResize = () => {
			if (window.innerWidth >= 768) isMobileMenuOpen = false;
		};
		window.addEventListener('resize', handleResize);

		return () => {
			window.removeEventListener('scroll', handleScroll);
			window.removeEventListener('resize', handleResize);
		};
	});

	const links = [
		{ index: '01', name: 'Work', href: resolve('/work') },
		{ index: '02', name: 'Projects', href: resolve('/projects') },
		{ index: '03', name: 'About', href: resolve('/about') },
		{ index: '04', name: 'Contact', href: resolve('/contact') }
	];

	const isActive = (href: string) => page.url.pathname === href;
</script>

<!-- eslint-disable svelte/no-navigation-without-resolve -- all hrefs are resolve()-built or mailto -->
<header
	class="fixed top-0 left-0 z-50 w-full border-b transition-all duration-500 {isScrolled ||
	isMobileMenuOpen
		? 'border-(--line) bg-[rgba(12,12,11,0.85)] backdrop-blur-md'
		: 'border-transparent bg-transparent'} {isHidden && !isMobileMenuOpen
		? '-translate-y-full'
		: 'translate-y-0'}"
>
	<nav class="mx-auto flex max-w-7xl items-center justify-between px-6 py-4 md:px-10">
		<a href={resolve('/')} class="font-mono-ui text-sm tracking-widest text-(--text) uppercase">
			AR<span class="text-(--accent)">.</span>
		</a>

		<div class="hidden items-center gap-8 md:flex">
			{#each links as link (link.href)}
				<a
					href={link.href}
					aria-current={isActive(link.href) ? 'page' : undefined}
					class="font-mono-ui group text-xs tracking-wider uppercase transition-colors duration-300 hover:text-(--text) {isActive(
						link.href
					)
						? 'text-(--text)'
						: 'text-(--text-dim)'}"
				>
					<span
						class="mr-1 transition-colors group-hover:text-(--accent) {isActive(link.href)
							? 'text-(--accent)'
							: 'text-(--text-faint)'}">{link.index}</span
					>{link.name}
				</a>
			{/each}

			<a
				href="mailto:{data.profile.email}"
				class="font-mono-ui border border-(--line-strong) px-4 py-2 text-xs tracking-wider text-(--text) uppercase transition-all duration-300 hover:border-(--accent) hover:bg-(--accent) hover:text-(--accent-ink)"
			>
				Get in touch
			</a>
		</div>

		<button
			class="text-(--text) md:hidden"
			aria-label="Toggle navigation menu"
			aria-expanded={isMobileMenuOpen}
			aria-controls="mobile-nav-menu"
			onclick={() => (isMobileMenuOpen = !isMobileMenuOpen)}
		>
			<svg
				width="24"
				height="24"
				viewBox="0 0 24 24"
				fill="none"
				stroke="currentColor"
				stroke-width="1.5"
			>
				<path
					d={isMobileMenuOpen ? 'M6 6l12 12M18 6L6 18' : 'M3 12h18M3 6h18M3 18h18'}
					stroke-linecap="round"
					stroke-linejoin="round"
				/>
			</svg>
		</button>
	</nav>

	{#if isMobileMenuOpen}
		<div id="mobile-nav-menu" class="border-t border-(--line) px-6 py-6 md:hidden">
			<div class="flex flex-col gap-1">
				{#each links as link (link.href)}
					<a
						href={link.href}
						aria-current={isActive(link.href) ? 'page' : undefined}
						onclick={() => (isMobileMenuOpen = false)}
						class="font-mono-ui flex items-baseline gap-3 py-3 text-left text-sm tracking-wider uppercase transition-colors hover:text-(--text) {isActive(
							link.href
						)
							? 'text-(--text)'
							: 'text-(--text-dim)'}"
					>
						<span class="text-xs text-(--accent)">{link.index}</span>
						{link.name}
					</a>
				{/each}
				<a
					href="mailto:{data.profile.email}"
					class="font-mono-ui mt-4 border border-(--line-strong) px-4 py-3 text-center text-xs tracking-wider text-(--text) uppercase transition-all hover:bg-(--accent) hover:text-(--accent-ink)"
					onclick={() => (isMobileMenuOpen = false)}
				>
					Get in touch
				</a>
			</div>
		</div>
	{/if}
</header>
