<script lang="ts">
	import { data } from '$lib/data';
	import ProjectCard from '$lib/components/ProjectCard.svelte';
	import ContactCta from '$lib/components/ContactCta.svelte';
	import PageHeader from '$lib/components/PageHeader.svelte';
	import { reveal } from '$lib/actions/reveal';
</script>

<svelte:head>
	<title>Projects — {data.profile.name}</title>
	<meta
		name="description"
		content="Side projects and experiments by {data.profile
			.name} — built to learn, kept because they're useful."
	/>
</svelte:head>

<PageHeader
	index="02"
	label="02 / Projects — {data.projects.length} and counting"
	sub="Side projects and experiments. Some shipped, some taught me a lesson, all of them were worth the late nights."
>
	Built after <span class="font-serif-display text-(--accent) italic">hours</span>
</PageHeader>

<!-- Project list -->
<section>
	<div class="mx-auto max-w-7xl px-6 pb-24 md:px-10 md:pb-36">
		{#each data.projects as project, i (project.title)}
			<div use:reveal={{ delay: 80 }}>
				<ProjectCard {project} index={i} />
			</div>
		{/each}

		<div class="mt-16 flex justify-center" use:reveal>
			<a
				href="https://github.com/adhil523"
				target="_blank"
				rel="noopener noreferrer"
				class="link-line font-mono-ui text-xs tracking-widest text-(--text-dim) uppercase"
			>
				More on github.com/adhil523 ↗
			</a>
		</div>
	</div>
</section>

<ContactCta />
