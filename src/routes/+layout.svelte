<script lang="ts">
    import "../app.css";
    let { children } = $props();
</script>

<main class="flex justify-center">
    <div
        class="flex flex-col max-w-3xl sm:text-lg divide-y-1 divide-base-content/10"
    >
        {@render children()}
    </div>
</main>
