<script lang="ts">
	import { resolve } from '$app/paths';
	import { data } from '$lib/data';
	// import ContactCta from '$lib/components/ContactCta.svelte';
	// import HeroScene from '$lib/components/HeroScene.svelte';
	// import { reveal } from '$lib/actions/reveal';

	// const marqueeItems = [
	// 	'Full Stack Development',
	// 	'System Architecture',
	// 	'UI Engineering',
	// 	'Performance Tuning',
	// 	'API Design',
	// 	'Cloud Infrastructure'
	// ];
</script>

<svelte:head>
	<title>{data.profile.name} — {data.profile.role}</title>
</svelte:head>

<!-- ======================== HERO ======================== -->
<section class="relative flex min-h-screen flex-col justify-center overflow-hidden">
	<div class="relative mx-auto w-full max-w-7xl px-6 pb-12 md:px-10">

		<h1
			class="mb-12 text-[13vw] leading-[0.95] font-medium tracking-tighter text-(--text) md:text-[7.5rem] lg:text-[9rem]"
		>
			<span class="animate-rise block" style="animation-delay: 0.25s">Adhil</span>
			<span class="animate-rise block md:pl-[0.8em]" style="animation-delay: 0.4s">
				Rumais<span class="text-(--accent)">.</span>
			</span>
		</h1>
				<div
			class="font-mono-ui animate-rise mb-10 flex flex-wrap items-center gap-x-6 gap-y-2 text-xs tracking-widest text-(--text-dim) uppercase"
			style="animation-delay: 0.1s"
		>
			<span class="flex items-center gap-2">
				{data.profile.role}
			</span>
			<span class="text-(--text-faint)">{data.profile.location}</span>
		</div>

		<div
			class="animate-rise flex flex-col gap-10 border-t border-(--line) pt-8 md:flex-row md:items-end md:justify-between"
			style="animation-delay: 0.6s"
		>
			<p class="max-w-xl text-xl leading-relaxed font-light text-(--text-dim) md:text-2xl">
				Full-stack engineer in Kerala. I take products from first schema to final pixel — and I
				sweat the <span class="font-serif-display text-(--text) italic">details</span> most people never
				notice.
			</p>

			<div class="flex items-center gap-8">
				<a
					href={resolve('/projects')}
					class="link-line font-mono-ui text-xs tracking-widest text-(--text) uppercase"
				>
					See projects →
				</a>
				<a
					href={resolve('/work')}
					class="link-line font-mono-ui text-xs tracking-widest text-(--text-dim) uppercase"
				>
					Where I've worked
				</a>
			</div>
		</div>
	</div>

	<!-- Marquee strip -->
	<!-- <div
		class="marquee-mask animate-rise overflow-hidden border-t border-(--line) py-5"
		style="animation-delay: 0.8s"
	>
		<div class="animate-marquee flex w-max gap-12 whitespace-nowrap">
			{#each [0, 1] as half (half)}
				<div
					class="font-mono-ui flex gap-12 text-xs tracking-[0.3em] text-(--text-faint) uppercase"
					aria-hidden={half === 1}
				>
					{#each marqueeItems as item (item)}
						<span>{item}</span>
						<span class="text-(--accent)">✦</span>
					{/each}
				</div>
			{/each}
		</div>
	</div> -->
</section>

<!-- ======================== ABOUT TEASER ======================== -->
<!-- <section class="border-t border-(--line)">
	<div class="mx-auto max-w-7xl px-6 py-24 md:px-10 md:py-36">
		<div class="grid grid-cols-12 gap-y-12 md:gap-x-10">
			<div class="col-span-12 md:col-span-4">
				<p class="section-label" use:reveal>About</p>
			</div>

			<div class="col-span-12 md:col-span-8">
				<h2 class="mb-10 text-3xl leading-snug font-medium tracking-tight md:text-5xl" use:reveal>
					An engineer who thinks like a
					<span class="font-serif-display text-(--accent) italic">designer</span>, and a builder who
					thinks like an <span class="font-serif-display text-(--accent) italic">owner</span>.
				</h2>

				<p
					class="mb-10 max-w-2xl text-lg leading-relaxed font-light text-(--text-dim)"
					use:reveal={{ delay: 100 }}
				>
					{data.profile.bio}
				</p>

				<div use:reveal={{ delay: 200 }}>
					<a
						href={resolve('/about')}
						class="link-line font-mono-ui text-xs tracking-widest text-(--text) uppercase"
					>
						More about me →
					</a>
				</div>
			</div>
		</div>
	</div>
</section> -->

<!-- <ContactCta /> -->
