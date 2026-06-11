<script lang="ts">
	import { data } from '$lib/data';
	import PageHeader from '$lib/components/PageHeader.svelte';
	import { reveal } from '$lib/actions/reveal';
</script>

<svelte:head>
	<title>Contact — {data.profile.name}</title>
	<meta name="description" content="Get in touch with {data.profile.name}." />
</svelte:head>

<!-- eslint-disable svelte/no-navigation-without-resolve -->

<PageHeader index="04" label="04 / Contact">
	Have a hard problem?<br />
	<span class="font-serif-display text-(--text-dim) italic">Let's make it look easy.</span>
</PageHeader>

<!-- Contact channels -->
<section class="border-t border-(--line)">
	<div class="mx-auto max-w-7xl px-6 py-24 md:px-10 md:py-36">
		<div class="grid grid-cols-12 gap-y-16 md:gap-x-10">
			<div class="col-span-12 md:col-span-7">
				<p class="section-label mb-8" use:reveal>Email</p>
				<div use:reveal={{ delay: 100 }}>
					<a
						href="mailto:{data.profile.email}"
						class="group inline-flex flex-wrap items-center gap-4 border border-(--line-strong) px-8 py-6 transition-all duration-500 hover:border-(--accent) hover:bg-(--accent)"
					>
						<span
							class="font-mono-ui text-sm tracking-wider break-all text-(--text) transition-colors group-hover:text-(--accent-ink) md:text-lg"
						>
							{data.profile.email}
						</span>
						<span
							class="text-(--accent) transition-all duration-500 group-hover:translate-x-2 group-hover:text-(--accent-ink)"
							aria-hidden="true">→</span
						>
					</a>
				</div>
				<p
					class="font-mono-ui mt-8 text-xs tracking-widest text-(--text-faint) uppercase"
					use:reveal={{ delay: 200 }}
				>
					Usually replies within 24 hours
				</p>
			</div>

			<div class="col-span-12 md:col-span-5">
				<p class="section-label mb-8" use:reveal>Elsewhere</p>
				<ul class="border-t border-(--line)">
					{#each data.socials as social, i (social.name)}
						<li use:reveal={{ delay: i * 80 }}>
							<a
								href={social.url}
								target="_blank"
								rel="noopener noreferrer"
								class="group flex items-baseline justify-between border-b border-(--line) py-5 transition-colors duration-300 hover:bg-(--bg-raised)"
							>
								<span
									class="text-lg font-medium text-(--text) transition-transform duration-300 group-hover:translate-x-2"
								>
									{social.name}
									<span
										class="ml-1 inline-block text-(--text-faint) transition-colors group-hover:text-(--accent)"
										aria-hidden="true">↗</span
									>
								</span>
								<span class="font-mono-ui text-xs text-(--text-faint)">{social.handle}</span>
							</a>
						</li>
					{/each}
				</ul>

				<p class="section-label mt-12 mb-4" use:reveal>Based in</p>
				<p class="font-mono-ui text-sm text-(--text-dim)" use:reveal={{ delay: 80 }}>
					{data.profile.location} · UTC+5:30
				</p>
			</div>
		</div>
	</div>
</section>
