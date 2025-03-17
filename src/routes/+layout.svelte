<script lang="ts">
    import "../app.css";
    import { onMount } from "svelte";

    let { children } = $props();

    let html: HTMLElement | null = $state.raw(null);
    onMount(() => {
        html = document.documentElement;
    });

    let scroll = $state(0);
    function onscroll(
        event: UIEvent & { currentTarget: EventTarget & HTMLElement },
    ) {
        const e = event.currentTarget;
        scroll = e.scrollTop / e.scrollHeight;
    }
</script>

<main class="flex flex-col h-svh w-svw relative items-center">
    <div
        class="absolute top-0 left-0 navbar glass shadow-none justify-center z-10"
    >
        <div
            class="relative w-xs grid grid-cols-3 justify-items-center pb-1 text-lg font-semibold"
        >
            <a href="#about_me">About Me</a>
            <a href="#portfolio">Portfolio</a>
            <a href="#contact">Contact</a>
            <div
                class="absolute bottom-0 w-1/3 h-0.5 bg-base-content"
                style="left: calc(var(--container-xs) * {scroll});"
            ></div>
        </div>
    </div>
    <div
        {onscroll}
        class="flex-1 max-w-3xl carousel carousel-vertical overflow-x-hidden sm:text-lg"
    >
        {@render children()}
    </div>
</main>
