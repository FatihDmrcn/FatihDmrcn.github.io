<script lang="ts">
    import "../app.css";

    let { children } = $props();

    const colors = [
        "var(--color-base-100)",
        "var(--color-base-100)",
        "var(--color-base-100)",
    ];
    const length = 2;
    let scroll = $state(0);
    let c1 = $state(colors[0]);
    let c2 = $state(colors[1]);
    let p2 = $state(0);

    function scroll_color(
        event: UIEvent & { currentTarget: EventTarget & HTMLElement },
    ) {
        const e = event.currentTarget;
        let percentage = e.scrollTop / (e.scrollHeight - e.clientHeight);
        let idx = Math.floor(percentage * length);
        scroll = e.scrollTop / e.scrollHeight;
        p2 = (percentage * length - idx) * 100;
        c1 = colors[idx];
        c2 = idx == length ? colors[0] : colors[idx + 1];
    }
</script>

<main
    class="flex flex-col h-svh w-svw relative items-center font-mono"
    style="background-color: color-mix(in srgb, {c1}, {c2} {p2}%);"
>
    <div class="absolute top-0 left-0 navbar justify-center">
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
