<script lang="ts">
    import type { Snippet } from "svelte";

    let { id, children }: { id: string; children: Snippet } = $props();
</script>

<div
    {id}
    class="carousel-item box-border w-full h-full items-center justify-center px-2 sm:px-6"
>
    {@render children()}
</div>
