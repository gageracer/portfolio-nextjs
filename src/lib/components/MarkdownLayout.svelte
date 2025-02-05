<script lang="ts">
import { formatDate } from "$lib/utils";

let { title, date, children } = $props();
</script>

<br>
  <article class="prose prose-invert mx-auto">
    <h1>{title}</h1>
    {#if date}
      <div class="text-gray-400">
        <time datetime={date}>{formatDate(date)}</time>
      </div>
    {/if}
    {@render children()}
  </article>
  <br>
  <a href="/" class="flex items-center space-x-4">← Back to Home</a>