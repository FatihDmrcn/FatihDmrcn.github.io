<script lang="ts">
    import "../app.css";
    let { children } = $props();
</script>

<main class="flex justify-center">
    <div class="flex flex-col max-w-3xl sm:text-lg divide-y-1 divide-base-300">
        {@render children()}
    </div>
</main>
