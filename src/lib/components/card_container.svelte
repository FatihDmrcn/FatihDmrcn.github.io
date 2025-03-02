<script lang="ts">
    import type { Snippet } from "svelte";

    let {
        id,
        title,
        children,
    }: { id: string; title: string; children: Snippet } = $props();
</script>

<div {id} class="carousel-item card w-full">
    <div class="card-body">
        <div class="card-title sm:text-xl">{title}</div>
        <div class="sm:text-lg">
            {@render children()}
        </div>
    </div>
</div>
