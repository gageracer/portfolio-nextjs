<script lang="ts">
  import Layout from '$lib/components/Layout.svelte';
  import { getPosts } from '$lib/posts';
  
  const posts = getPosts();
</script>

<Layout>
  <section>
    <h2 class="mb-6 text-2xl font-bold">Works & Experience</h2>
    <ul class="space-y-4">
      {#each posts as post}
        <li class="flex items-center space-x-4">
          <a href={`/posts/${post.slug}`} class="flex items-center space-x-4">
            {#if post.img}
              <img
                src={`/images/${post.img}`}
                alt="Logo"
                class="h-12 w-12 object-contain"
              />
            {/if}
            <span>{post.title}</span>
          </a>
            <span class="text-xs text-gray-200">{post.date}</span>
        </li>
      {/each}
    </ul>
  </section>
</Layout>