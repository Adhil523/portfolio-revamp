<script lang="ts">
	import { data } from '$lib/data';
	import ContactCta from '$lib/components/ContactCta.svelte';
	import PageHeader from '$lib/components/PageHeader.svelte';
	import { reveal } from '$lib/actions/reveal';

	const capabilities = [
		{
			name: 'Product engineering',
			detail: 'Taking features from a one-line idea to production, owning the messy middle.'
		},
		{
			name: 'Interface & design systems',
			detail: 'Component libraries that designers trust and engineers actually use.'
		},
		{
			name: 'APIs & data modelling',
			detail: 'Schemas and contracts that survive the second year of the product.'
		},
		{
			name: 'Cloud & delivery',
			detail: 'CI/CD, containers and infrastructure that stays out of the way.'
		}
	];
</script>

<svelte:head>
	<title>Work — {data.profile.name}</title>
	<meta
		name="description"
		content="Professional experience and capabilities of {data.profile.name}."
	/>
</svelte:head>

<PageHeader
	index="01"
	label="01 / Work — since 2021"
	sub="The short version: I join teams, find the hardest problem on the board, and make it boring."
>
	Where I've <span class="font-serif-display text-(--accent) italic">worked</span>
</PageHeader>

<!-- Experience -->
<section class="border-t border-(--line)">
	<div class="mx-auto max-w-7xl px-6 py-24 md:px-10 md:py-36">
		<div class="grid grid-cols-12 gap-y-12 md:gap-x-10">
			<div class="col-span-12 md:col-span-4">
				<p class="section-label" use:reveal>Experience</p>
			</div>

			<div class="col-span-12 md:col-span-8">
				{#each data.experience as job, i (job.role)}
					<div
						class="group grid grid-cols-12 gap-y-4 border-t border-(--line) py-10 transition-colors duration-500 last:border-b md:gap-x-6"
						use:reveal={{ delay: i * 100 }}
					>
						<div class="col-span-12 md:col-span-3">
							<p class="font-mono-ui text-xs tracking-wider text-(--text-faint)">{job.period}</p>
						</div>
						<div class="col-span-12 md:col-span-9">
							<h2
								class="text-2xl font-medium tracking-tight text-(--text) transition-transform duration-500 group-hover:translate-x-2"
							>
								{job.role}
							</h2>
							<p class="font-mono-ui mt-1 mb-4 text-sm text-(--accent)">{job.company}</p>
							<p class="mb-5 max-w-xl leading-relaxed font-light text-(--text-dim)">
								{job.description}
							</p>
							<div class="flex flex-wrap gap-2">
								{#each job.highlights as highlight (highlight)}
									<span
										class="font-mono-ui border border-(--line) px-3 py-1 text-[0.65rem] tracking-widest text-(--text-faint) uppercase"
									>
										{highlight}
									</span>
								{/each}
							</div>
						</div>
					</div>
				{/each}
			</div>
		</div>
	</div>
</section>

<!-- Capabilities -->
<section class="border-t border-(--line)">
	<div class="mx-auto max-w-7xl px-6 py-24 md:px-10 md:py-36">
		<div class="grid grid-cols-12 gap-y-12 md:gap-x-10">
			<div class="col-span-12 md:col-span-4">
				<p class="section-label" use:reveal>What I'm hired for</p>
			</div>

			<div class="col-span-12 md:col-span-8">
				{#each capabilities as capability, i (capability.name)}
					<div
						class="group flex flex-col gap-2 border-t border-(--line) py-8 transition-colors duration-500 last:border-b md:flex-row md:items-baseline md:justify-between md:gap-10"
						use:reveal={{ delay: i * 80 }}
					>
						<h2
							class="shrink-0 text-xl font-medium text-(--text) transition-transform duration-500 group-hover:translate-x-2 md:w-72"
						>
							<span
								class="font-mono-ui mr-3 text-xs text-(--text-faint) group-hover:text-(--accent)"
								>0{i + 1}</span
							>{capability.name}
						</h2>
						<p class="leading-relaxed font-light text-(--text-dim) md:text-right">
							{capability.detail}
						</p>
					</div>
				{/each}
			</div>
		</div>
	</div>
</section>

<ContactCta />
