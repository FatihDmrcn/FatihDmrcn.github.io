<script lang="ts">
    import "../app.css";
    let { children } = $props();
    import profile from "$lib/fig/profile_drawing.jpg";
</script>

<main class="flex justify-center">
    <div class="max-w-3xl flex flex-col items-center sm:text-lg">
        <div class="avatar pt-6">
            <div class="rounded-full w-54 sm:42 sepia-10">
                <img src={profile} alt="profile" />
            </div>
        </div>
        <div class="w-full flex flex-col divide-y-1 divide-base-content/10">
            {@render children()}
        </div>
    </div>
</main>
