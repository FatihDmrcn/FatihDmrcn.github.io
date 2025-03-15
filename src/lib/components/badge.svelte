<script lang="ts">
    let { src, name }: { src: string; name: string } = $props();
</script>

<div
    class="badge badge-sm sm:badge-md bg-base-300 indent-0 font-semibold"
>
    <img {src} class="h-9/10 aspect-auto" alt={name} />
    {name}
</div>
