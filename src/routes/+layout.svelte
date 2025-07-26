<script lang="ts">
    import "../app.css";
    import Favicon from "$lib/components/favicon.svelte";
    let { children } = $props();
</script>

<svelte:head>
    <title>Fatih Demircan</title>
</svelte:head>

<main class="flex justify-center">
    <div class="max-w-3xl flex flex-col items-center sm:text-lg">
        <div class="inline-flex mt-6">
            <Favicon />
            <h1 class="text-4xl">Fatih Demircan</h1>
        </div>
        <div class="w-full flex flex-col divide-y-1 divide-base-content/10">
            {@render children()}
        </div>
        <div class="py-6 text-xs sm:text-sm">© 2025 - Fatih Demircan</div>
    </div>
</main>
