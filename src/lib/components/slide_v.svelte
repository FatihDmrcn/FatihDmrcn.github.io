<script lang="ts">
    import type { Snippet } from "svelte";

    let { id, children }: { id: string; children: Snippet } = $props();
</script>

<div
    {id}
    class="carousel-item box-border h-full w-full flex-col justify-center items-center pt-16"
>
    {@render children()}
</div>
