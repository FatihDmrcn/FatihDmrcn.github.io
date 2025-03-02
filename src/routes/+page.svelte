<script lang="ts">
    import PageContainer from "$lib/components/page_container.svelte";
    import BtnCarousel from "$lib/components/btn_carousel.svelte";

    import profile from "$lib/fig/profile.jpg";
    // import profile from "$lib/profile_drawing.jpg";
    import rust from "$lib/fig/rust_logo.svg";
    import python from "$lib/fig/python_logo.svg";
    import LiAcademia from "$lib/components/li_academia.svelte";
</script>

<svelte:head>
    <title>Fatih Demircan</title>
</svelte:head>

<PageContainer id={"about_me"}>
    <div class="flex-1 carousel w-full items-center">
        <div id="about_me_1" class="carousel-item w-full flex-col">
            <div class="flex-1">
                <div class="avatar float-none sm:float-right">
                    <div class="mask mask-hexagon w-36 sm:w-48">
                        <img class="" src={profile} alt="profile" />
                    </div>
                </div>
                <h1 class="font-semibold">About me,...</h1>
                <p class="text-justify indent-12">
                    I'm a mechanical engineer [who previously chose the path of
                    economics] with strong interest in programming. Having honed
                    my coding skills - especially in
                    <span class="inline-flex items-baseline text-left">
                        <img
                            src={rust}
                            class="mx-1 self-center rounded-full size-6"
                            alt="test"
                        />
                        <span>Rust</span>
                    </span>
                    &
                    <span class="inline-flex items-baseline text-left">
                        <img
                            src={python}
                            class="mx-1 self-center rounded-full h-6 aspect-auto"
                            alt="test"
                        />
                        <span>Python</span>
                    </span>
                    - alongside my engineering expertise, I can go beyond siloed
                    thinking and deliver high-quality results across both disciplines.
                </p>
                <p class="text-justify indent-12">
                    If you have interesting projects, feel free to contact me.
                </p>
            </div>
        </div>
        <div id="about_me_2" class="carousel-item w-full flex-col">
            <h1 class="font-semibold italic">...and my background.</h1>
            <ul class="flex-1 list text-lg">
                <LiAcademia
                    degree={"M.Sc. Mechanical Engineering"}
                    university={"Technical University Braunschweig"}
                />
                <LiAcademia
                    degree={"B.Sc. Mechanical Engineering"}
                    university={"Technical University Braunschweig"}
                />
                <LiAcademia
                    degree={"B.Sc. Economics"}
                    university={"University of Cologne"}
                />
            </ul>
        </div>
    </div>
    <div class="flex w-full justify-center gap-6">
        <BtnCarousel dir="left" href={"#about_me_1"} />
        <BtnCarousel dir="right" href={"#about_me_2"} />
    </div>
</PageContainer>

<PageContainer id={"my_work"}>
    <h1>Soon to be updated!</h1>
</PageContainer>

<PageContainer id={"contact_me"}>
    <h1>Soon to be updated!</h1>
</PageContainer>
