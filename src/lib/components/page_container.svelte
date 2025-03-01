<script lang="ts">
    import type { Snippet } from "svelte";

    let { id, children }: { id: string; children: Snippet } = $props();
</script>

<div
    {id}
    class="carousel-item box-border flex-col h-full items-center justify-center px-6"
>
    {@render children()}
</div>
