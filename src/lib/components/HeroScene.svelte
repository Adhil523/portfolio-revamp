<script lang="ts">
	import { onMount } from 'svelte';

	let container: HTMLDivElement;
	let canvas: HTMLCanvasElement;

	onMount(() => {
		let frame = 0;
		let disposed = false;
		let cleanup = () => {};

		// Dynamic import keeps three out of the SSR bundle and off the critical path.
		(async () => {
			const THREE = await import('three');
			if (disposed || !container) return;

			const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

			const scene = new THREE.Scene();
			const camera = new THREE.PerspectiveCamera(
				45,
				container.clientWidth / container.clientHeight,
				0.1,
				100
			);
			camera.position.z = 9;

			const renderer = new THREE.WebGLRenderer({ canvas, alpha: true, antialias: true });
			renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
			renderer.setSize(container.clientWidth, container.clientHeight);

			// Faint lime wireframe with brighter vertex points — matches the blueprint language
			const geometry = new THREE.IcosahedronGeometry(2.7, 1);
			const wireframe = new THREE.LineSegments(
				new THREE.WireframeGeometry(geometry),
				new THREE.LineBasicMaterial({ color: 0xcdf563, transparent: true, opacity: 0.14 })
			);
			const vertices = new THREE.Points(
				geometry,
				new THREE.PointsMaterial({
					color: 0xcdf563,
					size: 0.05,
					transparent: true,
					opacity: 0.5
				})
			);
			const group = new THREE.Group();
			group.add(wireframe, vertices);
			// Sit in the hero's empty upper-right quadrant, away from the name
			group.position.set(3.2, 1.2, 0);
			scene.add(group);

			// Mouse parallax — the shape leans gently toward the cursor
			let targetX = 0;
			let targetY = 0;
			const onPointerMove = (event: PointerEvent) => {
				targetX = (event.clientX / window.innerWidth - 0.5) * 0.5;
				targetY = (event.clientY / window.innerHeight - 0.5) * 0.5;
			};
			window.addEventListener('pointermove', onPointerMove, { passive: true });

			const onResize = () => {
				camera.aspect = container.clientWidth / container.clientHeight;
				camera.updateProjectionMatrix();
				renderer.setSize(container.clientWidth, container.clientHeight);
			};
			window.addEventListener('resize', onResize);

			const clock = new THREE.Clock();
			const render = () => {
				const elapsed = clock.getElapsedTime();
				group.rotation.y = elapsed * 0.08 + targetX;
				group.rotation.x = elapsed * 0.04 + targetY;
				group.position.y = 1.2 + Math.sin(elapsed * 0.5) * 0.15;
				renderer.render(scene, camera);
				frame = requestAnimationFrame(render);
			};

			if (prefersReducedMotion) {
				renderer.render(scene, camera);
			} else {
				render();
			}

			cleanup = () => {
				window.removeEventListener('pointermove', onPointerMove);
				window.removeEventListener('resize', onResize);
				geometry.dispose();
				wireframe.geometry.dispose();
				(wireframe.material as { dispose(): void }).dispose();
				(vertices.material as { dispose(): void }).dispose();
				renderer.dispose();
			};
		})();

		return () => {
			disposed = true;
			cancelAnimationFrame(frame);
			cleanup();
		};
	});
</script>

<div bind:this={container} class="pointer-events-none absolute inset-0" aria-hidden="true">
	<canvas bind:this={canvas} class="h-full w-full"></canvas>
</div>
