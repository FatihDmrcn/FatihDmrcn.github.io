<script lang="ts">
    import type { Snippet } from "svelte";

    let {
        children,
        id,
        length,
    }: { children: Snippet; id: string; length: number } = $props();

    let pos = $state(0);

    export function onscroll(
        event: UIEvent & { currentTarget: EventTarget & HTMLElement },
    ) {
        const element = event.currentTarget;
        let a = element.scrollLeft; // actual position for scrollLeft
        let b = element.scrollWidth - element.clientWidth; // max. value for scrollLeft
        pos = Math.round((a / b) * length);
    }
</script>

<div
    class="flex-1 carousel carousel-horizontal overflow-y-hidden w-full items-center"
    {onscroll}
>
    {@render children()}
</div>
<div class="navbar justify-center gap-3">
    {#each Array(length + 1) as _, i}
        <a
            aria-label="test"
            href={`#${id}_${i}`}
            class="btn btn-xs btn-circle {pos == i ? 'bg-base-content' : ''}"
        ></a>
    {/each}
</div>
