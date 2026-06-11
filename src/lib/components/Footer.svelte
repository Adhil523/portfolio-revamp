<script lang="ts">
	import { resolve } from '$app/paths';
	import { onMount } from 'svelte';
	import { data } from '$lib/data';

	const navLinks = [
		{ name: 'Home', href: resolve('/') },
		{ name: 'Work', href: resolve('/work') },
		{ name: 'Projects', href: resolve('/projects') },
		{ name: 'About', href: resolve('/about') },
		{ name: 'Contact', href: resolve('/contact') }
	];

	// Live clock in my timezone — small proof there's a person on the other end
	let localTime = $state('');

	function tick() {
		localTime = new Date().toLocaleTimeString('en-GB', {
			timeZone: 'Asia/Kolkata',
			hour: '2-digit',
			minute: '2-digit'
		});
	}

	onMount(() => {
		tick();
		const interval = setInterval(tick, 30_000);
		return () => clearInterval(interval);
	});
</script>

<!-- eslint-disable svelte/no-navigation-without-resolve -->
<footer class="border-t border-(--line)">
	<div class="mx-auto max-w-7xl px-6 md:px-10">
		<div class="grid grid-cols-1 gap-px md:grid-cols-3">
			<div class="border-b border-(--line) py-10 md:border-r md:border-b-0 md:py-12 md:pr-10">
				<p class="section-label mb-4">Index</p>
				<ul class="space-y-2">
					{#each navLinks as link (link.href)}
						<li>
							<a
								href={link.href}
								class="link-line font-mono-ui text-sm text-(--text-dim) transition-colors hover:text-(--text)"
							>
								{link.name}
							</a>
						</li>
					{/each}
				</ul>
			</div>

			<div class="border-b border-(--line) py-10 md:border-r md:border-b-0 md:px-10 md:py-12">
				<p class="section-label mb-4">Socials</p>
				<ul class="space-y-2">
					{#each data.socials as social (social.name)}
						<li>
							<a
								href={social.url}
								target="_blank"
								rel="noopener noreferrer"
								class="link-line font-mono-ui text-sm text-(--text-dim) transition-colors hover:text-(--text)"
							>
								{social.name} <span class="text-(--text-faint)">{social.handle}</span>
							</a>
						</li>
					{/each}
				</ul>
			</div>

			<div class="py-10 md:py-12 md:pl-10">
				<p class="section-label mb-4">Contact</p>
				<a
					href="mailto:{data.profile.email}"
					class="link-line font-mono-ui text-sm break-all text-(--text-dim) transition-colors hover:text-(--text)"
				>
					{data.profile.email}
				</a>
				<p class="font-mono-ui mt-2 text-sm text-(--text-faint)">
					{data.profile.location}{#if localTime}
						· {localTime} IST{/if}
				</p>
			</div>
		</div>

		<div
			class="font-mono-ui flex flex-col items-start justify-between gap-2 border-t border-(--line) py-6 text-xs tracking-wider text-(--text-faint) uppercase md:flex-row md:items-center"
		>
			<p>&copy; {new Date().getFullYear()} {data.profile.name}</p>
			<p>Designed &amp; built with SvelteKit</p>
		</div>
	</div>
</footer>
