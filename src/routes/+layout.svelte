<script lang="ts">
    import "../app.css";
    import { colors } from "$lib";

    let { children } = $props();

    const length = 2;
    let scroll = $state(0);

    function scroll_color(
        event: UIEvent & { currentTarget: EventTarget & HTMLElement },
    ) {
        const e = event.currentTarget;
        scroll = e.scrollTop / e.scrollHeight;
        let percentage = e.scrollTop / (e.scrollHeight - e.clientHeight);
        let idx = Math.floor(percentage * length);
        let p2 = (percentage * length - idx) * 100;
        for (let [k, v] of Object.entries(colors)) {
            let color1 = v[idx];
            let color2 = idx == length ? v[0] : v[idx + 1];
            let root: HTMLElement | null = document.querySelector(":root");
            root!.style.setProperty(
                `--color-${k}`,
                `color-mix(in srgb, ${color1}, ${color2} ${p2}%)`,
            );
        }
    }
</script>

<main class="flex flex-col h-svh w-svw relative items-center">
    <div class="absolute top-0 left-0 navbar justify-center z-10">
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
        onscroll={scroll_color}
        class="flex-1 max-w-3xl carousel carousel-vertical overflow-x-hidden sm:text-lg"
    >
        {@render children()}
    </div>
</main>
