<script lang="ts">
    let { degree, university }: { degree: string; university: string } =
        $props();
</script>

<li class="list-row">
    <svg
        class="fill-base-content size-7 sm:size-9"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 -960 960 960"
    >
        <path
            d="M480-120 200-272v-240L40-600l440-240 440 240v320h-80v-276l-80 44v240L480-120Zm0-332 274-148-274-148-274 148 274 148Zm0 241 200-108v-151L480-360 280-470v151l200 108Zm0-241Zm0 90Zm0 0Z"
        />
    </svg>
    <div>
        <div class="font-semibold">{degree}</div>
        <div>{university}</div>
    </div>
</li>
