<script lang="ts">
    import type { Snippet } from "svelte";

    let { title, children }: { title: string; children: Snippet } = $props();
</script>

<div class="card card-sm sm:card-lg w-full h-fit">
    <div class="card-body">
        <div class="card-title sm:text-xl">{title}</div>
        <div class="sm:text-lg">
            {@render children()}
        </div>
    </div>
</div>
