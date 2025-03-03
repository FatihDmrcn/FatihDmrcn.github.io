<script lang="ts">
    import { scroll_horizontal } from "$lib";
    import PageContainer from "$lib/components/page_container.svelte";
    import CardContainer from "$lib/components/card_container.svelte";
    import BtnCarousel from "$lib/components/btn_carousel.svelte";

    import profile from "$lib/fig/profile.jpg";
    // import profile from "$lib/profile_drawing.jpg";
    import rust from "$lib/fig/rust_logo.svg";
    import python from "$lib/fig/python_logo.svg";
    import LiAcademia from "$lib/components/li_academia.svelte";

    const len_01 = 2;
    let pos_01 = $state(0);
</script>

<svelte:head>
    <title>Fatih Demircan</title>
</svelte:head>

<PageContainer id={"about_me"}>
    <div
        class="flex-1 carousel w-full items-center"
        onscroll={(e) => {
            pos_01 = scroll_horizontal(e, len_01);
        }}
    >
        <CardContainer id={"about_me_0"} title={"About me,.."}>
            <div class="avatar float-right">
                <div class="mask mask-hexagon w-30 sm:w-48">
                    <img class="" src={profile} alt="profile" />
                </div>
            </div>
            <p class="text-justify indent-6 sm:indent-12">
                I'm a mechanical engineer [who previously chose the path of
                economics] with strong interest in programming. Having honed my
                coding skills - especially in
                <span class="inline-flex items-baseline text-start">
                    <img
                        src={rust}
                        class="mx-1 self-center rounded-full size-4 sm:size-6"
                        alt="test"
                    />
                    Rust
                </span>
                &
                <span class="inline-flex items-baseline w-fit">
                    <img
                        src={python}
                        class="mx-1 self-center rounded-full aspect-auto h-4 sm:h-6"
                        alt="test"
                    />
                    Python
                </span>
                - alongside my engineering expertise, I can go beyond siloed thinking
                and deliver high-quality results across both disciplines.
            </p>
            <p class="text-justify indent-6 sm:indent-12">
                If you have interesting projects, feel free to contact me.
            </p>
        </CardContainer>
        <CardContainer id={"about_me_1"} title={"..my skills,.."}>
            Soon to be updated!
        </CardContainer>
        <CardContainer id={"about_me_2"} title={"..and my background."}>
            <ul class="flex-1 list sm:text-lg">
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
        </CardContainer>
    </div>
    <div class="flex w-full justify-center gap-3">
        <a
            aria-label="test"
            href={"#about_me_0"}
            class="btn btn-xs btn-circle {pos_01 == 0 ? 'btn-neutral' : ''}"
        ></a>
        <a
            aria-label="test"
            href={"#about_me_1"}
            class="btn btn-xs btn-circle {pos_01 == 1 ? 'btn-neutral' : ''}"
        ></a>
        <a
            aria-label="test"
            href={"#about_me_2"}
            class="btn btn-xs btn-circle {pos_01 == 2 ? 'btn-neutral' : ''}"
        ></a>
    </div>
</PageContainer>

<PageContainer id={"my_work"}>
    <h1>Soon to be updated!</h1>
</PageContainer>

<PageContainer id={"contact_me"}>
    <h1>Soon to be updated!</h1>
</PageContainer>
