<script lang="ts">
    let {
        src,
        name,
        inline = false,
    }: { src: string; name: string; inline?: boolean } = $props();
</script>

<div
    class="badge badge-neutral {inline
        ? 'badge-xs sm:badge-md'
        : 'badge-md sm:badge-lg'} font-bold indent-0"
>
    <img {src} class="h-9/10 aspect-auto" alt={name} />
    {name}
</div>
