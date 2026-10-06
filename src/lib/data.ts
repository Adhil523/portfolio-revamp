export type SkillCategory =
	| 'Language'
	| 'Frontend'
	| 'Backend'
	| 'Full Stack'
	| 'Database'
	| 'Tooling'
	| 'Mobile'
	| 'DevOps'
	| 'Cloud';

export type Profile = {
	name: string;
	role: string;
	tagline: string;
	bio: string;
	email: string;
	location: string;
	avatar: string;
};

export type Social = {
	name: string;
	url: string;
	handle: string;
};

export type Skill = {
	name: string;
	category: SkillCategory;
	/** Devicon class; skills without one render a monogram instead. */
	icon?: string;
};

export type Project = {
	title: string;
	/** Optional — omitted where the resume doesn't date the project. */
	year?: string;
	description: string;
	tags: string[];
	link: string;
	/** Screenshot shown full-bleed in the card. */
	image?: string;
	/** Square logo from /static, shown small and centred when there's no screenshot. */
	logo?: string;
};

export type Experience = {
	project: string;
	/** Public site for the product; the title becomes a link when set. */
	link?: string;
	/** Path to a logo in /static (e.g. '/logos/viewbox.svg'); falls back to a monogram. */
	logo?: string;
	role: string;
	company: string;
	period: string;
	description: string;
	highlights: string[];
};

export type PortfolioData = {
	profile: Profile;
	socials: Social[];
	skills: Skill[];
	projects: Project[];
	experience: Experience[];
};

const GITHUB_URL = 'https://github.com/Adhil523';

const placeholderImage = (title: string) =>
	`https://placehold.co/1200x800/121211/cdf563?text=${encodeURIComponent(title)}`;

export const data: PortfolioData = {
	profile: {
		name: 'Adhil Rumais',
		role: 'Lead Software Engineer',
		tagline: 'Solving problems, one line of code at a time.',
		bio: "I'm a full-stack engineer who cares about the whole picture — from database schemas to the last pixel. I lead engineering on a US trade-automation platform and a digital signage marketplace, and I'm always hunting for the next hard problem.",
		email: 'adhilrumais007@gmail.com',
		location: 'Kerala, India',
		avatar: 'https://ui-avatars.com/api/?name=Adhil+Rumais&background=0D8ABC&color=fff&size=256'
	},
	socials: [
		{ name: 'GitHub', url: GITHUB_URL, handle: '@Adhil523' },
		{
			name: 'LinkedIn',
			url: 'https://www.linkedin.com/in/adhil-rumais-503818253',
			handle: 'in/adhil-rumais'
		},
		{ name: 'X', url: 'https://x.com/adhil523', handle: '@adhil523' }
	],
	skills: [
		{ name: 'Solidity', category: 'Language', icon: 'devicon-solidity-plain' },
		{ name: 'TypeScript', category: 'Language', icon: 'devicon-typescript-plain' },
		{ name: 'Python', category: 'Language', icon: 'devicon-python-plain' },
		{ name: 'Kotlin', category: 'Language', icon: 'devicon-kotlin-plain' },
		{ name: 'Java', category: 'Language', icon: 'devicon-java-plain' },
		{ name: 'C', category: 'Language', icon: 'devicon-c-plain' },
		{ name: 'SvelteKit', category: 'Full Stack', icon: 'devicon-svelte-plain' },
		{ name: 'Django', category: 'Full Stack', icon: 'devicon-django-plain' },
		{ name: 'React', category: 'Frontend', icon: 'devicon-react-original' },
		{ name: 'Tailwind CSS', category: 'Frontend', icon: 'devicon-tailwindcss-original' },
		{ name: 'Node.js', category: 'Backend', icon: 'devicon-nodejs-plain' },
		{ name: 'Capacitor', category: 'Mobile', icon: 'devicon-capacitor-plain' },
		{ name: 'PostgreSQL', category: 'Database', icon: 'devicon-postgresql-plain' },
		{ name: 'MySQL', category: 'Database', icon: 'devicon-mysql-plain' },
		{ name: 'MongoDB', category: 'Database', icon: 'devicon-mongodb-plain' },
		{ name: 'ZenStack', category: 'Database' },
		{ name: 'Tortoise ORM', category: 'Database' },
		{ name: 'Git', category: 'Tooling', icon: 'devicon-git-plain' },
		{ name: 'Docker', category: 'DevOps', icon: 'devicon-docker-plain' },
		{ name: 'Dokploy', category: 'DevOps' },
		{ name: 'AWS', category: 'Cloud', icon: 'devicon-amazonwebservices-plain-wordmark' },
		{ name: 'Vercel', category: 'Cloud', icon: 'devicon-vercel-original' }
	],
	projects: [
		{
			title: 'Perch',
			description:
				'A centralized waitlist platform for restaurants, clinics and hospitals that notifies people when it’s their turn. Web3 payment vouching with Ethereum Layer 2 tokens is in development.',
			tags: ['Waitlist', 'Notifications', 'Web3', 'Ethereum L2'],
			link: 'https://github.com/Adhil523/perch',
			logo: '/logos/perch.svg'
		},
		{
			title: 'WarrantyVault',
			description:
				'A truly offline document vault and expiry tracker. Keeps important papers safe on-device and reminds you before bills or documents expire, with optional online sync.',
			tags: ['Offline-first', 'Sync', 'Mobile'],
			link: 'https://github.com/Adhil523/warranty-vault',
			image: placeholderImage('DocVault')
		},
		{
			title: 'School Bus Tracker',
			description:
				'Live school bus tracking built entirely on open source: OpenStreetMap tiles and a self-hosted routing engine, with no proprietary map APIs.',
			tags: ['OpenStreetMap', 'Routing', 'Geolocation'],
			link: 'https://github.com/Adhil523/Project',
			image: placeholderImage('School Bus Tracker')
		},
		{
			title: 'Channel Chat',
			description:
				'A real-time chat application on Django Channels supporting both private conversations and room-based messaging.',
			tags: ['Django', 'Channels', 'WebSocket'],
			link: 'https://github.com/Adhil523/Room-Chat-App',
			image: placeholderImage('Channel Chat')
		},
		{
			title: 'BookMyDoc',
			description:
				'A proximity-oriented clinic booking app built for adoption by local clinics, so patients can find and book nearby doctors.',
			tags: ['Booking', 'Geolocation', 'Healthcare'],
			link: 'https://github.com/Adhil523/bookmydoc',
			image: placeholderImage('BookMyDoc')
		}
	],
	experience: [
		{
			project: 'NeuralVest',
			role: 'Lead Software Engineer',
			company: '10xMinds',
			period: 'Sep 2025 — Present',
			description:
				'A fully automated trading and investment platform for the US stock market. Designed the architecture and feature suite, built cross-platform API orchestration and queueing, set up bank and ACH relationships for hands-off investing, and implemented the portfolio rebalancing algorithm. Deployed on a distributed database with VPS hosting.',
			highlights: ['System architecture', 'ACH integrations', 'Queue management', 'Rebalancing'],
			link: 'https://neuralvest.ai',
			logo: '/logos/neuralvest.svg'
		},
		{
			project: 'Viewbox',
			role: 'Lead Software Engineer',
			company: '10xMinds',
			period: 'Sep 2025 — Present',
			description:
				'A digital signage marketplace where advertisers rent screens by area, audience and requirements. Screen owners get centralized playlist management and full control over their screens. The signage platform is live on Android, with Tizen and WebOS support and the marketplace in development.',
			highlights: ['Digital signage', 'Android', 'Tizen & WebOS', 'Marketplace'],
			link: 'https://viewbox.io',
			logo: '/logos/viewbox.png'
		},
		{
			project: 'BeyondMetrics',
			role: 'Intern → Software Developer',
			company: '10xMinds',
			period: 'Apr 2024 — Sep 2025',
			description:
				'A fitness application. As an intern, built the trainer-side interface — week creation and client weight tracking — plus finance reports on the admin side. As a developer, shipped the platform subscription flow, chat module and workout features, and improved performance with blurhash image preloading and client-side query caching using TanStack Query.',
			link: 'https://beyondmetrics.fit',
			highlights: ['Trainer tools', 'Finance reports', 'Subscriptions', 'Chat', 'TanStack Query']
		},
		{
			project: 'Formance',
			role: 'Software Developer Intern',
			company: '10xMinds',
			period: 'Apr 2024 — Mar 2025',
			description: 'Built theme customization for the graphs in Formance.',
			link: 'https://formance.com',
			logo: '/logos/formance-icon.png',
			highlights: ['Data visualization', 'Theming']
		}
	]
};
