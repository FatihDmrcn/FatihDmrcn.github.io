<script lang="ts">
    import type { Snippet } from "svelte";

    let {
        id,
        title,
        children,
    }: { id: string; title: string; children: Snippet } = $props();
</script>

<div {id} class="carousel-item box-border w-full">
    <div class="card-xs sm:card-sm grid grid-cols-1 w-full">
        <div class="card-body">
            <div class="card-title">{title}</div>
            {@render children()}
        </div>
    </div>
</div>
