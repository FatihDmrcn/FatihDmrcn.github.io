<script lang="ts">
    let { src, name }: { src: string; name: string } = $props();
</script>

<div
    class="badge badge-xs badge-ghost bg-base-300 sm:badge-md indent-0 rounded-sm font-semibold"
>
    <img {src} class="h-9/10 aspect-auto" alt={name} />
    {name}
</div>
