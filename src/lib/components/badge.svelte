<script lang="ts">
    let { src, name }: { src: string; name: string } = $props();
</script>

<div class="badge badge-neutral badge-xs sm:badge-md font-bold indent-0">
    <img {src} class="size-9/10" alt={name} />
    {name}
</div>
