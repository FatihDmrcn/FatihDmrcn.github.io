<script lang="ts">
    import type { Snippet } from "svelte";

    let { length, children }: { length: number; children: Snippet } = $props();

    let carousel: HTMLDivElement | undefined = $state(undefined);

    let pos = $state(0);
    let start = $derived(pos == 0);
    let end = $derived(pos == length - 1);

    export function onscroll(
        event: UIEvent & { currentTarget: EventTarget & HTMLElement },
    ) {
        const element = event.currentTarget;
        let a = element.scrollLeft; // actual position for scrollLeft
        let b = element.scrollWidth - element.clientWidth; // max. value for scrollLeft
        pos = Math.round((a / b) * (length - 1));
    }

    function scrollLeft() {
        let pos_new = start ? length - 1 : pos - 1;
        scrollTo(pos_new);
    }

    function scrollRight() {
        let pos_new = end ? 0 : pos + 1;
        scrollTo(pos_new);
    }

    function scrollTo(pos_new: number) {
        let x =
            (pos_new * (carousel!.scrollWidth - carousel!.clientWidth)) /
            (length - 1);
        carousel?.scrollTo(x, 0);
    }
</script>

<div class="flex-1 w-full relative">
    <div
        bind:this={carousel}
        class="w-full carousel overflow-y-hidden items-start"
        {onscroll}
    >
        {@render children()}
    </div>
    <div
        class="absolute w-full bottom-0 translate-y-1/2 flex gap-1 sm:gap-3 justify-center"
    >
        {#each Array(length) as _, i}
            <button
                aria-label="slide"
                onclick={() => {
                    scrollTo(i);
                }}
                class="btn btn-circle size-3 {pos == i
                    ? 'bg-base-content'
                    : 'bg-base-content/20'}"
            ></button>
        {/each}
    </div>
    <button
        onclick={scrollLeft}
        aria-label="scrollLeft"
        class="absolute left-0 top-1/2 -translate-x-1/2 -translate-y-1/2 size-6"
    >
        <svg
            viewBox="0 -960 960 960"
            xmlns="http://www.w3.org/2000/svg"
            class="size-full fill-base-content transition-transform"
        >
            <path d="M560-280 360-480l200-200v400Z" />
        </svg>
    </button>
    <button
        onclick={scrollRight}
        aria-label="scrollRight"
        class="absolute right-0 top-1/2 translate-x-1/2 -translate-y-1/2 size-6"
    >
        <svg
            viewBox="0 -960 960 960"
            xmlns="http://www.w3.org/2000/svg"
            class="size-full fill-base-content transition-transform"
        >
            <path d="M400-280v-400l200 200-200 200Z" />
        </svg>
    </button>
</div>
