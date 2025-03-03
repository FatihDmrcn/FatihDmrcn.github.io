<script lang="ts">
    import "../app.css";
    import BtnNav from "$lib/components/btn_nav.svelte";

    let { children } = $props();

    const colors = [
        "var(--color-base-100)",
        "var(--color-base-200)",
        "var(--color-base-300)",
    ];
    const length = 2;
    let pos = $state(0);
    let c1 = $state(colors[0]);
    let c2 = $state(colors[1]);
    let p2 = $state(0);

    function scroll_color(
        event: UIEvent & { currentTarget: EventTarget & HTMLElement },
    ) {
        const element = event.currentTarget;
        let a = element.scrollTop; // actual position for scrollTop
        let b = element.scrollHeight - element.clientHeight; // max. value for scrollTop
        let percentage = a / b;
        pos = percentage * length;
        let idx = Math.floor(pos);
        p2 = (percentage * length - idx) * 100;
        c1 = colors[idx];
        c2 = idx == length ? colors[0] : colors[idx + 1];
    }
</script>

<main
    class="flex flex-col h-dvh w-dvw relative items-center"
    style="background-color: color-mix(in srgb, {c1}, {c2} {p2}%);"
>
    <div
        class="absolute top-0 left-0 navbar gap-1 glass justify-center shadow-none opacity-70"
    >
        <BtnNav {pos} href={"#about_me"} />
        <BtnNav {pos} href={"#my_work"} />
        <BtnNav {pos} href={"#contact_me"} />
    </div>
    <div
        onscroll={scroll_color}
        class="flex-1 max-w-3xl carousel carousel-vertical sm:text-lg"
    >
        {@render children()}
    </div>
</main>
