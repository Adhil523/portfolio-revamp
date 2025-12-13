<script lang="ts">
  import { onMount } from 'svelte';
  
  let isScrolled = $state(false);

  function handleScroll() {
    isScrolled = window.scrollY > 20;
  }
  
  onMount(() => {
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  });
  
  const links = [
    { name: 'About', href: '#about' },
    { name: 'Projects', href: '#projects' },
    { name: 'Skills', href: '#skills' },
    { name: 'Contact', href: '#contact' }
  ];
</script>

<nav 
  class="fixed top-6 left-1/2 -translate-x-1/2 z-50 transition-all duration-500 w-[95%] max-w-5xl rounded-full"
  class:glass={isScrolled}
  class:bg-transparent={!isScrolled}
  class:py-3={isScrolled}
  class:py-6={!isScrolled}
>
  <div class="px-6 md:px-8 flex items-center justify-between">
    <a href="/" class="text-xl font-medium tracking-tight group">
      <span class="text-white group-hover:opacity-70 transition-opacity">alex</span>
      <span class="text-[var(--text-muted)] group-hover:text-white transition-colors">.dev</span>
    </a>
    
    <div class="hidden md:flex items-center space-x-10">
      {#each links as link}
        <a 
          href={link.href} 
          class="text-sm text-[var(--text-muted)] hover:text-white transition-colors duration-300 relative group"
        >
          {link.name}
          <span class="absolute -bottom-1 left-0 w-0 h-[1px] bg-white transition-all duration-300 group-hover:w-full opacity-50"></span>
        </a>
      {/each}
      
      <a 
        href="mailto:canbeadhil@gmail.com"
        class="text-white bg-white/10 hover:bg-white text-xs px-5 py-2.5 rounded-full font-medium tracking-wide hover:text-black transition-all duration-300"
      >
        <span class="relative top-[1px]">GET IN TOUCH</span>
      </a>
    </div>
    
    <!-- Mobile Menu Button -->
    <button class="md:hidden text-white opacity-80" aria-label="Menu">
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5">
        <path d="M3 12h18M3 6h18M3 18h18" stroke-linecap="round" stroke-linejoin="round"/>
      </svg>
    </button>
  </div>
</nav>
