<script lang="ts">
let { siteTitle = "John's Portfolio", children } = $props();
</script>

<svelte:head>
    <title>{siteTitle}</title>
</svelte:head>
<div class="container mx-auto max-w-2xl px-4 py-8">
    <section class="prose prose-invert mb-8">
      <p>
        Hi, my name is John. I'm a computer engineer and I build things for the web.
        You can contact me on <a href="https://www.linkedin.com/in/can-aygin" target="_blank">LinkedIn</a>
        and my resume is on the navigation bar.
      </p>
      <p>
        Here is some of my work so far. There are more if you want to check on my
        <a href="https://github.com/gageracer" target="_blank">GitHub</a> like games,
        small prototypes and such.
      </p>
    </section>
    
  {@render children()}
</div>
  <!-- Social Links -->
     <nav class="bottom-0 z-10 
                 relative w-full md:left-10 md:fixed md:w-auto">
       <ul class="flex flex-row justify-center space-x-5 items-center
                  md:flex-col md:space-x-0 md:space-y-4">
         <li class="w-6">
           <a href="https://github.com/gageracer" target="_blank" title="GitHub">
             <img src="/images/svgs/github.svg" alt="github" />
           </a>
         </li>
         <li class="w-6">
           <a href="https://www.codewars.com/users/gageracer/stats" title="CodeWars" target="_blank">
             <img src="/images/svgs/codewars.svg" alt="codewars" />
           </a>
         </li>
         <li class="w-6">
           <a href="https://www.linkedin.com/in/can-aygin" title="LinkedIn" target="_blank">
             <img alt="linkedin" src="/images/svgs/linkedin.svg" />
           </a>
         </li>
         <li class="w-6">
           <a href="/resume/John's Resume.pdf" title="Resume" target="blank">
             <img alt="resume" src="/images/svgs/resume.svg" />
           </a>
         </li>
       </ul>
       <!-- Vertical line after social icons - only shows on md and up -->
       <div class="hidden md:block mt-4 h-24 w-px mx-auto bg-text/30"></div>
     </nav>

