<script lang="ts">
    let { id, length, pos }: { id: string; length: number; pos: number } =
        $props();
</script>

<div class="flex w-full justify-center gap-3 opacity-70">
    {#each Array(length + 1) as _, i}
        <a
            aria-label="test"
            href={`#${id}_${i}`}
            class="btn btn-xs btn-circle {pos == i ? 'btn-neutral' : ''}"
        ></a>
    {/each}
</div>
