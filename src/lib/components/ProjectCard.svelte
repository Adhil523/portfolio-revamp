<script lang="ts">
  let { project } = $props();
</script>

<a href={project.link} target="_blank" rel="noopener noreferrer" class="group block h-full">
  <article class="glass-card rounded-2xl overflow-hidden h-full flex flex-col hover:border-violet-500/30 hover:shadow-[0_0_30px_-10px_rgba(139,92,246,0.15)]">
    <!-- Image -->
    <div class="relative aspect-video overflow-hidden bg-zinc-900">
      <div class="absolute inset-0 bg-black/20 group-hover:bg-transparent transition-colors duration-500 z-10"></div>
      <img 
        src={project.image} 
        alt={project.title} 
        class="w-full h-full object-cover transform transition-transform duration-700 ease-out group-hover:scale-105 opacity-90 group-hover:opacity-100"
      />
    </div>
    
    <!-- Content -->
    <div class="p-8 flex flex-col flex-grow relative">
      <!-- Subtle accent line -->
      <div class="absolute top-0 left-8 right-8 h-[1px] bg-gradient-to-r from-transparent via-violet-500/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

      <div class="flex justify-between items-start mb-4">
        <h3 class="text-2xl font-medium text-white group-hover:text-violet-300 transition-colors">
          {project.title}
        </h3>
        <svg 
          xmlns="http://www.w3.org/2000/svg" 
          width="20" 
          height="20" 
          viewBox="0 0 24 24" 
          fill="none" 
          stroke="currentColor" 
          stroke-width="1.5" 
          stroke-linecap="round" 
          stroke-linejoin="round"
          class="text-zinc-500 group-hover:text-violet-300 group-hover:translate-x-1 group-hover:-translate-y-1 transition-all"
        >
          <line x1="7" y1="17" x2="17" y2="7"></line>
          <polyline points="7 7 17 7 17 17"></polyline>
        </svg>
      </div>
      
      <p class="text-[var(--text-muted)] leading-relaxed text-sm mb-8 flex-grow">
        {project.description}
      </p>
      
      <!-- Minimal tags with color on hover -->
      <div class="flex flex-wrap gap-2 mt-auto pt-4 border-t border-white/5 group-hover:border-violet-500/10 transition-colors">
        {#each project.tags as tag}
          <span class="text-xs font-mono text-zinc-500 uppercase tracking-wider group-hover:text-violet-400 transition-colors">
            {tag}
          </span>
        {/each}
      </div>
    </div>
  </article>
</a>
