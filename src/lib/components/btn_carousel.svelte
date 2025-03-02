<script lang="ts">
    let { dir, href }: { dir: string; href: string } = $props();
</script>

<a {href} class="btn btn-ghost btn-square">
    <svg
        class="h-full aspect-square fill-base-content"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 -960 960 960"
    >
        {#if dir == "left"}
            <path
                d="M440-240 200-480l240-240 56 56-183 184 183 184-56 56Zm264 0L464-480l240-240 56 56-183 184 183 184-56 56Z"
            />
        {:else if dir == "right"}
            <path
                d="M383-480 200-664l56-56 240 240-240 240-56-56 183-184Zm264 0L464-664l56-56 240 240-240 240-56-56 183-184Z"
            />
        {/if}
    </svg>
</a>
