import type { Action } from 'svelte/action';

/**
 * Reveals an element when it enters the viewport by adding `.is-visible`.
 * Pair with the `.reveal` utility class; optional delay staggers siblings.
 */
export const reveal: Action<HTMLElement, { delay?: number } | undefined> = (node, options) => {
	node.classList.add('reveal');
	if (options?.delay) {
		node.style.setProperty('--reveal-delay', `${options.delay}ms`);
	}

	const observer = new IntersectionObserver(
		(entries) => {
			for (const entry of entries) {
				if (entry.isIntersecting) {
					node.classList.add('is-visible');
					observer.unobserve(node);
				}
			}
		},
		{ threshold: 0.15, rootMargin: '0px 0px -40px 0px' }
	);

	observer.observe(node);

	return {
		destroy() {
			observer.disconnect();
		}
	};
};
