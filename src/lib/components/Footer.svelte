<script lang="ts">
  import { data } from '$lib/data';
</script>

<footer class="border-t border-white/5 bg-[var(--bg-secondary)] mt-20 pt-16 pb-8">
  <div class="max-w-7xl mx-auto px-6">
    <div class="flex flex-col md:flex-row justify-between items-center mb-12">
      <div class="mb-8 md:mb-0 text-center md:text-left">
        <h2 class="text-3xl font-bold mb-2 text-white">Let's work together</h2>
        <p class="text-[var(--text-muted)] max-w-md">
          Have a project in mind? Let's build something amazing for the future.
        </p>
      </div>
      
      <div class="flex space-x-6">
        {#each data.socials as social}
          <a 
            href={social.url} 
            target="_blank" 
            rel="noopener noreferrer"
            class="w-12 h-12 rounded-full border border-white/10 flex items-center justify-center text-white hover:bg-[var(--accent-primary)] hover:text-black hover:border-transparent hover:shadow-[0_0_20px_var(--accent-primary)] transition-all duration-300"
            aria-label={social.name}
          >
           <!-- Simple Icons can be replaced with actual SVGs later -->
           <span class="text-xs font-bold">{social.name[0]}</span>
          </a>
        {/each}
      </div>
    </div>
    
    <div class="flex flex-col md:flex-row justify-between items-center pt-8 border-t border-white/5 text-sm text-[var(--text-muted)]">
      <p>&copy; {new Date().getFullYear()} {data.profile.name}. All rights reserved.</p>
      <div class="flex space-x-6 mt-4 md:mt-0">
        <a href="#" class="hover:text-white transition-colors">Privacy</a>
        <a href="#" class="hover:text-white transition-colors">Terms</a>
      </div>
    </div>
  </div>
</footer>
