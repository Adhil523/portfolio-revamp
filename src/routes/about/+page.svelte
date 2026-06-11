<script lang="ts">
	import { data } from '$lib/data';
	import ContactCta from '$lib/components/ContactCta.svelte';
	import PageHeader from '$lib/components/PageHeader.svelte';
	import { reveal } from '$lib/actions/reveal';

	const principles = [
		{
			title: 'Ship, then sharpen',
			body: 'Working software beats perfect plans. I get things in front of users early and iterate with intent.'
		},
		{
			title: 'Own the whole stack',
			body: 'From schema design to the last pixel of polish — the best engineers refuse to stop at the API boundary.'
		},
		{
			title: 'Simple survives',
			body: 'Clever code is a liability. I optimize for the person reading it at 2am during an incident.'
		}
	];
</script>

<svelte:head>
	<title>About — {data.profile.name}</title>
	<meta
		name="description"
		content="About {data.profile.name} — background, principles and tools."
	/>
</svelte:head>

<PageHeader index="03" label="03 / About — {data.profile.location}">
	Engineer by trade, <span class="font-serif-display text-(--accent) italic">tinkerer</span> by default.
</PageHeader>

<!-- Bio -->
<section class="border-t border-(--line)">
	<div class="mx-auto max-w-7xl px-6 py-24 md:px-10 md:py-36">
		<div class="grid grid-cols-12 gap-y-12 md:gap-x-10">
			<div class="col-span-12 md:col-span-4">
				<p class="section-label" use:reveal>Background</p>
			</div>

			<div class="col-span-12 md:col-span-8">
				<div
					class="max-w-2xl space-y-6 text-lg leading-relaxed font-light text-(--text-dim)"
					use:reveal
				>
					<p>{data.profile.bio}</p>
					<p>
						The best products live at the intersection of strong technical foundations and intuitive
						design. My approach is minimal but never bare — every decision, from the schema to the
						easing curve, has to earn its place.
					</p>
					<p>
						Away from the keyboard you'll find me reverse-engineering whatever gadget broke last, or
						explaining to friends why their app idea needs a database.
					</p>
				</div>
			</div>
		</div>
	</div>
</section>

<!-- Principles -->
<section class="border-t border-(--line)">
	<div class="mx-auto max-w-7xl px-6 py-24 md:px-10 md:py-36">
		<div class="grid grid-cols-12 gap-y-12 md:gap-x-10">
			<div class="col-span-12 md:col-span-4">
				<p class="section-label" use:reveal>Principles</p>
			</div>

			<div class="col-span-12 md:col-span-8">
				<div class="grid grid-cols-1 gap-px border border-(--line) bg-(--line) md:grid-cols-3">
					{#each principles as principle, i (principle.title)}
						<div class="bg-(--bg) p-8" use:reveal={{ delay: i * 120 }}>
							<p class="font-mono-ui mb-4 text-xs text-(--accent)">0{i + 1}</p>
							<h2 class="mb-3 text-lg font-medium text-(--text)">{principle.title}</h2>
							<p class="text-sm leading-relaxed font-light text-(--text-dim)">{principle.body}</p>
						</div>
					{/each}
				</div>
			</div>
		</div>
	</div>
</section>

<!-- Stack -->
<section class="border-t border-(--line)">
	<div class="mx-auto max-w-7xl px-6 py-24 md:px-10 md:py-36">
		<div class="grid grid-cols-12 gap-y-12 md:gap-x-10">
			<div class="col-span-12 md:col-span-4">
				<p class="section-label" use:reveal>Stack</p>
				<p
					class="mt-6 max-w-xs leading-relaxed font-light text-(--text-dim)"
					use:reveal={{ delay: 100 }}
				>
					Tools are a means, not an identity — but these are the ones I reach for first.
				</p>
			</div>

			<div class="col-span-12 md:col-span-8">
				<div
					class="grid grid-cols-2 gap-px border border-(--line) bg-(--line) sm:grid-cols-3 lg:grid-cols-4"
				>
					{#each data.skills as skill, i (skill.name)}
						<div
							class="group flex flex-col items-start gap-4 bg-(--bg) p-6 transition-colors duration-300 hover:bg-(--bg-raised)"
							use:reveal={{ delay: (i % 4) * 80 }}
						>
							<i
								class="{skill.icon} text-3xl text-(--text-faint) transition-colors duration-300 group-hover:text-(--accent)"
							></i>
							<div>
								<p class="text-sm font-medium text-(--text)">{skill.name}</p>
								<p
									class="font-mono-ui mt-1 text-[0.6rem] tracking-widest text-(--text-faint) uppercase"
								>
									{skill.category}
								</p>
							</div>
						</div>
					{/each}
					<!-- Fills the grid remainder (2 empty cells at sm/lg column counts) -->
					<div class="hidden flex-col justify-end bg-(--bg) p-6 sm:col-span-2 sm:flex">
						<p class="font-mono-ui text-[0.6rem] tracking-widest text-(--text-faint) uppercase">
							+ whatever the problem needs
						</p>
					</div>
				</div>
			</div>
		</div>
	</div>
</section>

<ContactCta />
