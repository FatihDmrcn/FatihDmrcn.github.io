<script lang="ts">
    import { scroll_horizontal } from "$lib";
    import PageContainer from "$lib/components/page_container.svelte";
    import CardContainer from "$lib/components/card_container.svelte";
    import BtnCarousel from "$lib/components/btn_carousel.svelte";
    import Badge from "$lib/components/badge.svelte";

    import profile from "$lib/fig/profile.jpg";

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
                <div class="mask mask-hexagon opacity-80 w-30 sm:w-48">
                    <img class="" src={profile} alt="profile" />
                </div>
            </div>
            <div class="text-justify indent-6 sm:indent-12">
                I'm a mechanical engineer - who previously chose the path of
                economics - with honed skills in programming; especially in
                <Badge src={rust} name={"Rust"} /> &
                <Badge src={python} name={"Python"} />. By combining these
                skills with my engineering expertise, I can move beyond siloed
                thinking and deliver high-quality results across both
                disciplines.
            </div>
            <div class="text-justify indent-6 sm:indent-12">
                So, if you have interesting projects or potential business
                inquiries, feel free to contact me.
            </div>
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
    <BtnCarousel id="about_me" length={2} pos={pos_01} />
</PageContainer>

<PageContainer id={"my_work"}>
    <h1>Soon to be updated!</h1>
</PageContainer>

<PageContainer id={"contact_me"}>
    <h1>Soon to be updated!</h1>
</PageContainer>
