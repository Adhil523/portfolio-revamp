<script lang="ts">
  import { data } from '$lib/data';
  import ProjectCard from '$lib/components/ProjectCard.svelte';
  import { onMount } from 'svelte';

  let visibleSections = $state(new Set());

  // Group skills by category for better display
  const skillsByCategory = data.skills.reduce((acc, skill) => {
    if (!acc[skill.category]) acc[skill.category] = [];
    acc[skill.category].push(skill);
    return acc;
  }, {});

  // Map categories to color themes
  const categoryThemes = {
    'Frontend': 'glass-indigo',
    'Backend': 'glass-violet',
    'Database': 'glass-emerald',
    'DevOps': 'glass-sky',
    'Language': 'glass-indigo',
    'Cloud': 'glass-sky'
  };

  function observeSections() {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          visibleSections.add(entry.target.id);
          visibleSections = new Set(visibleSections);
        }
      });
    }, { threshold: 0.1 });

    document.querySelectorAll('section').forEach(section => {
      observer.observe(section);
    });
  }

  onMount(() => {
    observeSections();
  });
</script>

<!-- Hero Section -->
<section id="home" class="min-h-screen flex items-center justify-center relative pt-16 overflow-hidden">
  <!-- Interactive background aura -->
  <div class="absolute inset-0 pointer-events-none">
     <div class="absolute top-[-20%] right-[-10%] w-[600px] h-[600px] bg-[radial-gradient(circle,rgba(79,70,229,0.2)_0%,transparent_70%)] blur-[80px] animate-pulse-glow"></div>
     <div class="absolute bottom-[-10%] left-[-20%] w-[500px] h-[500px] bg-[radial-gradient(circle,rgba(14,165,233,0.15)_0%,transparent_70%)] blur-[80px]" style="animation-delay: 2s"></div>
  </div>

  <div class="max-w-4xl mx-auto px-6 text-center z-10">
    <span class="inline-block mb-8 text-sm font-medium tracking-[0.3em] uppercase text-indigo-400 opacity-90 animate-fade-in" style="animation-delay: 0.2s">
      Design Engineer
    </span>
    
    <h1 class="text-6xl md:text-8xl font-medium tracking-tight mb-8 leading-[1.1] animate-fade-in" style="animation-delay: 0.4s">
      Creating <span class="text-zinc-600 font-serif italic">digital</span> experiences that feel <span class="text-gradient-color drop-shadow-lg font-semibold">alive</span>.
    </h1>
    
    <p class="text-xl md:text-2xl text-[var(--text-muted)] font-light max-w-2xl mx-auto mb-12 animate-fade-in" style="animation-delay: 0.6s">
      Hi, I'm {data.profile.name}. I craft polished software with a focus on user experience and architectural elegance.
    </p>

    <div class="flex flex-col md:flex-row justify-center gap-6 animate-fade-in" style="animation-delay: 0.8s">
       <a href="#projects" class="text-white border-b border-indigo-400/50 pb-1 hover:text-indigo-300 hover:border-indigo-300 transition-all duration-300">View Selected Works</a>
       <span class="hidden md:inline text-zinc-700">/</span>
       <a href="#about" class="text-[var(--text-muted)] hover:text-white transition-colors">Read About Me</a>
    </div>
  </div>
</section>

<!-- About Section -->
<section id="about" class="py-32 relative">
  <div class="max-w-5xl mx-auto px-6">
    <div class="grid grid-cols-1 md:grid-cols-2 gap-16 items-start">
       <div class="sticky top-32">
          <p class="text-xs font-bold tracking-widest uppercase text-indigo-400 mb-8 flex items-center gap-2">
            <span class="w-2 h-2 rounded-full bg-indigo-500 shadow-[0_0_10px_rgba(99,102,241,0.5)]"></span> 01 — About
          </p>
          <h2 class="text-4xl md:text-5xl font-medium mb-8 leading-tight">
            Bridging the gap between <br />
            <span class="text-gradient-violet font-semibold">design & engineering.</span>
          </h2>
          
          <div class="relative w-24 h-24 mb-8">
             <div class="absolute inset-0 bg-indigo-500 blur-2xl opacity-30 rounded-full animate-pulse-glow"></div>
             <img src={data.profile.avatar} alt="Portrait" class="relative w-full h-full rounded-full grayscale hover:grayscale-0 transition-all duration-700 opacity-90 border border-indigo-500/20" />
          </div>
       </div>
       
       <div class="space-y-8 text-lg font-light text-[var(--text-muted)] leading-relaxed">
         <p>{data.profile.bio}</p>
         
         <p>
           I believe that the best products are built at the intersection of strong technical foundations and intuitive design. My approach is minimalist yet functional, ensuring every pixel serves a purpose.
         </p>
         
         <div class="pt-8 border-t border-indigo-500/10">
            <h3 class="text-indigo-200 text-sm font-medium mb-4 uppercase tracking-wider">Expertise</h3>
            <ul class="grid grid-cols-2 gap-y-2 text-sm text-zinc-400">
               <li class="flex items-center gap-2"><span class="w-1.5 h-1.5 bg-indigo-500 rounded-full"></span> Full Stack Development</li>
               <li class="flex items-center gap-2"><span class="w-1.5 h-1.5 bg-violet-500 rounded-full"></span> UI/UX Design</li>
               <li class="flex items-center gap-2"><span class="w-1.5 h-1.5 bg-sky-500 rounded-full"></span> System Architecture</li>
               <li class="flex items-center gap-2"><span class="w-1.5 h-1.5 bg-emerald-500 rounded-full"></span> Performance Tuning</li>
            </ul>
         </div>
       </div>
    </div>
  </div>
</section>

<!-- Experience Section -->
<section id="experience" class="py-32 relative overflow-hidden">
  <!-- Subtle background glow -->
  <div class="absolute top-[20%] left-[-10%] w-[40%] h-[40%] bg-violet-900/10 blur-[120px] rounded-full pointer-events-none"></div>

  <div class="max-w-4xl mx-auto px-6">
    <p class="text-xs font-bold tracking-widest uppercase text-violet-400 mb-12 flex items-center gap-2">
      <span class="w-2 h-2 rounded-full bg-violet-500 shadow-[0_0_10px_rgba(139,92,246,0.5)]"></span> 02 — Experience
    </p>
    
    <div class="space-y-12 border-l border-violet-500/10 pl-8 md:pl-12 relative">
      {#each data.experience as job}
        <div class="relative group">
           <!-- Timeline dot -->
           <span class="absolute -left-[45px] md:-left-[61px] top-2 w-3 h-3 rounded-full border border-violet-500/30 bg-[var(--bg-primary)] group-hover:border-violet-400 group-hover:bg-violet-400 group-hover:shadow-[0_0_10px_rgba(139,92,246,0.8)] transition-all duration-300"></span>
           
           <div class="flex flex-col md:flex-row md:justify-between md:items-baseline mb-2">
             <h3 class="text-2xl font-medium text-white group-hover:text-violet-300 transition-colors">{job.role}</h3>
             <span class="text-sm font-mono text-zinc-500 group-hover:text-violet-400/70 transition-colors">{job.period}</span>
           </div>
           
           <div class="text-lg text-violet-400/90 mb-4 font-light">{job.company}</div>
           
           <p class="text-[var(--text-muted)] leading-relaxed max-w-2xl group-hover:text-zinc-300 transition-colors">
             {job.description}
           </p>
        </div>
      {/each}
    </div>
  </div>
</section>

<!-- Projects Section -->
<section id="projects" class="py-32 relative">
  <div class="absolute inset-0 bg-gradient-to-b from-transparent via-sky-900/5 to-transparent pointer-events-none"></div>
  
  <div class="max-w-7xl mx-auto px-6">
    <div class="flex justify-between items-end mb-20">
      <div>
         <p class="text-xs font-bold tracking-widest uppercase text-sky-400 mb-4 flex items-center gap-2">
           <span class="w-2 h-2 rounded-full bg-sky-500 shadow-[0_0_10px_rgba(14,165,233,0.5)]"></span> 03 — Works
         </p>
         <h2 class="text-4xl md:text-5xl font-medium">
           Selected <span class="text-gradient-sky font-semibold">Projects</span>
         </h2>
      </div>
      <a href="https://github.com/adhil523" target="_blank" class="hidden md:block text-sm text-[var(--text-muted)] hover:text-sky-300 transition-colors group">
        github.com/adhil523 <span class="group-hover:translate-x-1 inline-block transition-transform">→</span>
      </a>
    </div>
    
    <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-12">
      {#each data.projects as project}
         <div class="h-96">
            <ProjectCard {project} />
         </div>
      {/each}
    </div>
  </div>
</section>

<!-- Skills Section (Redesigned with Color) -->
<section id="skills" class="py-32 relative">
   <div class="absolute bottom-[20%] right-[-10%] w-[40%] h-[40%] bg-emerald-900/10 blur-[100px] rounded-full pointer-events-none"></div>

  <div class="max-w-6xl mx-auto px-6">
    <p class="text-xs font-bold tracking-widest uppercase text-emerald-400 mb-16 text-center flex items-center justify-center gap-2">
      <span class="w-2 h-2 rounded-full bg-emerald-500 shadow-[0_0_10px_rgba(16,185,129,0.5)]"></span> 04 — Stack
    </p>
    
    <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
      {#each Object.entries(skillsByCategory) as [category, skills]}
        <div class="{categoryThemes[category] || 'glass'} p-8 rounded-2xl">
          <h3 class="text-sm font-medium uppercase tracking-wider text-white/50 mb-6 border-b border-white/5 pb-2 flex justify-between items-center group-hover:text-white transition-colors">
            {category}
          </h3>
          <div class="flex flex-wrap gap-2.5">
            {#each skills as skill}
              <span class="px-3 py-1.5 rounded-md bg-white/5 border border-white/5 text-sm font-light text-zinc-300 hover:text-white hover:bg-white/10 hover:border-white/20 transition-all cursor-default flex items-center gap-2 shadow-sm">
                 {skill.name}
              </span>
            {/each}
          </div>
        </div>
      {/each}
    </div>
  </div>
</section>

<!-- Contact Section -->
<section id="contact" class="py-40 text-center relative overflow-hidden">
  <div class="absolute inset-0 bg-gradient-to-t from-indigo-900/20 to-transparent pointer-events-none"></div>
  
  <div class="max-w-4xl mx-auto px-6 relative z-10">
    <p class="text-xs font-bold tracking-widest uppercase text-indigo-400 mb-8">05 — Contact</p>
    <h2 class="text-5xl md:text-7xl font-medium mb-12 tracking-tight hover:italic transition-all duration-300 text-gradient-color p-4">Let's build together.</h2>
    
    <a 
      href="mailto:{data.profile.email}" 
      class="inline-block border border-indigo-500/30 px-12 py-5 rounded-full text-lg hover:bg-indigo-500 hover:text-white hover:border-transparent hover:shadow-[0_0_30px_rgba(99,102,241,0.4)] transition-all duration-500"
    >
      {data.profile.email}
    </a>
  </div>
</section>
