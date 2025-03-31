<script lang="ts">
    import type { Snippet } from "svelte";

    let { title, children }: { title: string; children: Snippet } = $props();
    let id = $derived(title.toLowerCase().replaceAll(" ", "_"));
</script>

<div {id} class="box-border w-full flex-col justify-center items-center">
    <div class="card sm:card-lg w-full">
        <div class="card-body">
            <div class="card-title">{title}</div>
            {@render children()}
        </div>
    </div>
</div>
