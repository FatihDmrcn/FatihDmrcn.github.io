<script lang="ts">
    import type { Snippet } from "svelte";

    let {
        id,
        length,
        children,
    }: { id: string; length: number; children: Snippet } = $props();

    let pos = $state(0);

    export function onscroll(
        event: UIEvent & { currentTarget: EventTarget & HTMLElement },
    ) {
        const element = event.currentTarget;
        let a = element.scrollLeft; // actual position for scrollLeft
        let b = element.scrollWidth - element.clientWidth; // max. value for scrollLeft
        pos = Math.round((a / b) * (length - 1));
    }
</script>

<div class="flex-1 w-full carousel overflow-y-hidden items-center" {onscroll}>
    {@render children()}
</div>
<div class="navbar">
    <a
        aria-label="pre"
        href={pos > 0 ? `#${id}_${pos - 1}` : "#"}
        class="size-12 {pos == 0 ? 'pointer-events-none' : ''}"
    >
        <svg
            viewBox="0 -960 960 960"
            xmlns="http://www.w3.org/2000/svg"
            class="size-full fill-base-content transition-transform {pos == 0
                ? 'scale-0'
                : 'scale-100'}"
        >
            <path d="M560-280 360-480l200-200v400Z" />
        </svg>
    </a>
    <div class="flex-1 flex gap-1.5 sm:gap-3 justify-center">
        {#each Array(length) as _, i}
            <a
                aria-label="slide"
                href={`#${id}_${i}`}
                class="btn btn-circle size-3 {pos == i
                    ? 'bg-base-content'
                    : 'bg-base-content/20'}"
            ></a>
        {/each}
    </div>
    <a
        aria-label="post"
        href={pos < length - 1 ? `#${id}_${pos + 1}` : "#"}
        class="size-12 {pos == length - 1 ? 'pointer-events-none' : ''}"
    >
        <svg
            viewBox="0 -960 960 960"
            xmlns="http://www.w3.org/2000/svg"
            class="size-full fill-base-content transition-transform {pos ==
            length - 1
                ? 'scale-0'
                : 'scale-100'}"
        >
            <path d="M400-280v-400l200 200-200 200Z" />
        </svg>
    </a>
</div>
