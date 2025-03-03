<script lang="ts">
    import type { Snippet } from "svelte";

    let { id, children }: { id: string; children: Snippet } = $props();
</script>

<div
    {id}
    class="carousel-item box-border flex-col h-full w-full items-center justify-center pt-16 pb-8"
>
    {@render children()}
</div>
