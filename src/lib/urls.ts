const app = {
	home: '/',
	about: '/about',
	projects: '/projects',
	experience: '/experience',
	contact: '/contact',
	work: '/work'
} as const;

const assets = {
	resume: '/adhil-rumais-resume.pdf'
} as const;

export const URLS = {
	app,
	assets
} as const;
