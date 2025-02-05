<script lang="ts">
import MarkdownLayout from "$lib/components/MarkdownLayout.svelte";
import type { PageProps } from "./$types";

let { data }: PageProps = $props();
</script>

<svelte:head>
    <title>{data.title}</title>
</svelte:head>
<svelte:boundary>
    {@const MDContent = data.content}
    <MDContent/>
</svelte:boundary>
<!-- <MarkdownLayout title={data.title} date={data.date}>
</MarkdownLayout> -->
