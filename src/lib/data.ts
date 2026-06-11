export type SkillCategory = 'Frontend' | 'Backend' | 'Database' | 'DevOps' | 'Language' | 'Cloud';

export interface Profile {
	name: string;
	role: string;
	tagline: string;
	bio: string;
	email: string;
	location: string;
	avatar: string;
}

export interface Social {
	name: string;
	url: string;
	handle: string;
}

export interface Skill {
	name: string;
	category: SkillCategory;
	icon: string;
}

export interface Project {
	title: string;
	year: string;
	description: string;
	tags: string[];
	link: string;
	image: string;
}

export interface Experience {
	role: string;
	company: string;
	period: string;
	description: string;
	highlights: string[];
}

export interface PortfolioData {
	profile: Profile;
	socials: Social[];
	skills: Skill[];
	projects: Project[];
	experience: Experience[];
}

export const data: PortfolioData = {
	profile: {
		name: 'Adhil Rumais',
		role: 'Software Engineer',
		tagline: 'Solving problems, one line of code at a time.',
		bio: "I'm a full-stack engineer who cares about the whole picture — from database schemas to the last pixel. I build, I lead, and I'm always hunting for the next hard problem.",
		email: 'adhilrumais007@gmail.com',
		location: 'Kerala, India',
		avatar: 'https://ui-avatars.com/api/?name=Adhil+Rumais&background=0D8ABC&color=fff&size=256'
	},
	socials: [
		{ name: 'GitHub', url: 'https://github.com/adhil523', handle: '@adhil523' },
		{ name: 'LinkedIn', url: 'https://linkedin.com/in/adhil523', handle: 'in/adhil523' },
		{ name: 'X', url: 'https://x.com/adhil523', handle: '@adhil523' }
	],
	skills: [
		{ name: 'TypeScript', category: 'Language', icon: 'devicon-typescript-plain' },
		{ name: 'Python', category: 'Language', icon: 'devicon-python-plain' },
		{ name: 'SvelteKit', category: 'Frontend', icon: 'devicon-svelte-plain' },
		{ name: 'React', category: 'Frontend', icon: 'devicon-react-original' },
		{ name: 'Tailwind CSS', category: 'Frontend', icon: 'devicon-tailwindcss-original' },
		{ name: 'Node.js', category: 'Backend', icon: 'devicon-nodejs-plain' },
		{ name: 'FastAPI', category: 'Backend', icon: 'devicon-fastapi-plain' },
		{ name: 'PostgreSQL', category: 'Database', icon: 'devicon-postgresql-plain' },
		{ name: 'Docker', category: 'DevOps', icon: 'devicon-docker-plain' },
		{ name: 'AWS', category: 'Cloud', icon: 'devicon-amazonwebservices-plain-wordmark' }
	],
	projects: [
		{
			title: 'Neon Nexus',
			year: '2025',
			description:
				'A futuristic dashboard for managing IoT devices in real-time. Live data visualization over WebSockets, remote device control, and sub-second telemetry at scale.',
			tags: ['SvelteKit', 'WebSocket', 'Tailwind'],
			link: 'https://github.com/adhil523?tab=repositories',
			image: 'https://placehold.co/1200x800/121211/cdf563?text=Neon+Nexus'
		},
		{
			title: 'CryptoVault',
			year: '2024',
			description:
				'Secure cryptocurrency wallet with a focus on user experience and security — detailed transaction history, portfolio analytics, and hardware-key signing.',
			tags: ['React', 'Blockchain', 'Web3'],
			link: 'https://github.com/adhil523?tab=repositories',
			image: 'https://placehold.co/1200x800/121211/ece9e2?text=CryptoVault'
		},
		{
			title: 'AI Canvas',
			year: '2024',
			description:
				'Generative AI art platform letting users create and share unique artwork with stable diffusion models. Queue-based GPU inference behind a FastAPI gateway.',
			tags: ['Python', 'Machine Learning', 'FastAPI'],
			link: 'https://github.com/adhil523?tab=repositories',
			image: 'https://placehold.co/1200x800/121211/9b968a?text=AI+Canvas'
		}
	],
	experience: [
		{
			role: 'Senior Frontend Engineer',
			company: 'TechNova',
			period: '2023 — Present',
			description:
				'Leading the frontend team in rebuilding the core platform using modern web technologies.',
			highlights: ['Team leadership', 'Platform rebuild', 'Design systems']
		},
		{
			role: 'Full Stack Developer',
			company: 'QuantumSoft',
			period: '2021 — 2023',
			description:
				'Developed scalable microservices and interactive user interfaces for enterprise clients.',
			highlights: ['Microservices', 'Enterprise UI', 'CI/CD']
		}
	]
};
