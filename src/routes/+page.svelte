<script lang="ts">
    import { scroll_horizontal } from "$lib";
    import PageContainer from "$lib/components/page_container.svelte";
    import CardContainer from "$lib/components/card_container.svelte";
    import BtnCarousel from "$lib/components/btn_carousel.svelte";
    import Badge from "$lib/components/badge.svelte";
    import LiAcademia from "$lib/components/li_academia.svelte";

    import profile from "$lib/fig/profile.jpg";

    import cargo from "$lib/logos/cargo.png";
    import actixweb from "$lib/logos/actixweb.png";
    import fenics from "$lib/logos/fenics.png";
    import abaqus from "$lib/logos/abaqus.png";
    import embassy from "$lib/logos/embassy.png";
    import rust from "$lib/logos/rust.svg";
    import tauri from "$lib/logos/tauri.svg";
    import diesel from "$lib/logos/diesel.svg";
    import python from "$lib/logos/python.svg";
    import ts from "$lib/logos/ts.svg";
    import svelte from "$lib/logos/svelte.svg";
    import tailwindcss from "$lib/logos/tailwindcss.svg";
    import freecad from "$lib/logos/freecad.svg";
    import siemens from "$lib/logos/siemens.svg";
    import postgresql from "$lib/logos/postgresql.svg";
    import docker from "$lib/logos/docker.svg";
    import numpy from "$lib/logos/numpy.svg";
    import pandas from "$lib/logos/pandas.svg";
    import pytorch from "$lib/logos/pytorch.svg";
    import matplotlib from "$lib/logos/matplotlib.svg";

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
        <CardContainer id={"about_me_0"} title={"Who I am"}>
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
        <CardContainer id={"about_me_1"} title={"What I use"}>
            <ul class="list">
                <li class="list-row">
                    Applications
                    <div class="list-col-wrap flex flex-row flex-wrap gap-1">
                        <Badge src={siemens} name={"SolidEdge"} />
                        <Badge src={freecad} name={"FreeCAD"} />
                        <Badge src={abaqus} name={"Abaqus"} />
                        <Badge src={docker} name={"Docker"} />
                        <Badge src={postgresql} name={"PostgreSQL"} />
                    </div>
                </li>
                <li class="list-row">
                    Languages
                    <div class="list-col-wrap flex flex-row flex-wrap gap-1">
                        <Badge src={rust} name={"Rust"} />
                        <Badge src={python} name={"Python"} />
                        <Badge src={ts} name={"TypeScript"} />
                    </div>
                </li>
                <li class="list-row">
                    Packages / Frameworks
                    <div class="list-col-wrap flex flex-row flex-wrap gap-1">
                        <Badge src={actixweb} name={"Actix Web"} />
                        <Badge src={diesel} name={"Diesel"} />
                        <Badge src={embassy} name={"Embassy"} />
                        <Badge src={fenics} name={"FEniCS"} />
                        <Badge src={matplotlib} name={"matplotlib"} />
                        <Badge src={cargo} name={"ndarray"} />
                        <Badge src={numpy} name={"NumPy"} />
                        <Badge src={pandas} name={"pandas"} />
                        <Badge src={pytorch} name={"PyTorch"} />
                        <Badge src={cargo} name={"SQLx"} />
                        <Badge src={svelte} name={"Svelte"} />
                        <Badge src={tailwindcss} name={"TailwindCSS"} />
                        <Badge src={tauri} name={"Tauri"} />
                    </div>
                </li>
            </ul>
        </CardContainer>
        <CardContainer id={"about_me_2"} title={"My background"}>
            <ul class="list sm:text-lg">
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
