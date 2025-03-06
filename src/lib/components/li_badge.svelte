<script lang="ts">
    import type { Snippet } from "svelte";

    let { title, children }: { title: string; children: Snippet } = $props();
</script>

<li class="list-row font-semibold">
    {title}
    <div class="list-col-wrap flex flex-row flex-wrap gap-1 sm:gap-2">
        {@render children()}
    </div>
</li>
