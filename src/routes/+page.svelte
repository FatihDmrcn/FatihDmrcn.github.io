<script lang="ts">
    import CarouselH from "$lib/components/carousel_h.svelte";
    import SlideH from "$lib/components/slide_h.svelte";
    import SlideV from "$lib/components/slide_v.svelte";
    import Card from "$lib/components/card.svelte";

    import Badge from "$lib/components/badge.svelte";
    import LiAcademia from "$lib/components/li_academia.svelte";

    import profile from "$lib/fig/profile_drawing.jpg";

    import cargo from "$lib/logos/cargo.png";
    import actixweb from "$lib/logos/actixweb.png";
    import daisyui from "$lib/logos/daisyui.png";
    import fenics from "$lib/logos/fenics.png";
    import abaqus from "$lib/logos/abaqus.png";
    import embassy from "$lib/logos/embassy.png";
    import rust from "$lib/logos/rust.svg";
    import tauri from "$lib/logos/tauri.svg";
    import diesel from "$lib/logos/diesel.png";
    import python from "$lib/logos/python.svg";
    import ts from "$lib/logos/ts.svg";
    import svelte from "$lib/logos/svelte.svg";
    import tailwindcss from "$lib/logos/tailwindcss.svg";
    import freecad from "$lib/logos/freecad.svg";
    import siemens from "$lib/logos/siemens.svg";
    import kicad from "$lib/logos/kicad.png";
    import postgresql from "$lib/logos/postgresql.svg";
    import docker from "$lib/logos/docker.svg";
    import numpy from "$lib/logos/numpy.svg";
    import pandas from "$lib/logos/pandas.svg";
    import pytorch from "$lib/logos/pytorch.svg";
    import matplotlib from "$lib/logos/matplotlib.svg";
</script>

<svelte:head>
    <title>Fatih Demircan</title>
</svelte:head>

<SlideV id={"about_me"}>
    <CarouselH id={"about_me"} length={2}>
        <SlideH id={"about_me_0"}>
            <Card title={"Who I Am"}>
                <div class="avatar float-right">
                    <div class="mask mask-hexagon opacity-80 w-30 sm:w-48">
                        <img class="sepia" src={profile} alt="profile" />
                    </div>
                </div>
                <div class="text-justify indent-6 sm:indent-12">
                    I'm a mechanical engineer - who previously chose the path of
                    economics - with honed skills in programming; especially in
                    <Badge src={rust} name={"Rust"} /> &
                    <Badge src={python} name={"Python"} />. By combining these
                    skills with my engineering expertise, I can move beyond
                    siloed thinking and deliver high-quality results across both
                    disciplines.
                </div>
                <div class="text-justify indent-6 sm:indent-12">
                    So, if you have interesting projects or potential business
                    inquiries, feel free to contact me.
                </div>
            </Card>
        </SlideH>
        <SlideH id={"about_me_1"}>
            <Card title={"What I Use"}>
                <ul class="list">
                    <li class="list-row font-semibold">
                        Applications
                        <div
                            class="list-col-wrap flex flex-row flex-wrap gap-1 sm:gap-2"
                        >
                            <Badge src={siemens} name={"SolidEdge"} />
                            <Badge src={freecad} name={"FreeCAD"} />
                            <Badge src={abaqus} name={"Abaqus"} />
                            <Badge src={docker} name={"Docker"} />
                            <Badge src={postgresql} name={"PostgreSQL"} />
                            <Badge src={kicad} name={"KiCad"} />
                        </div>
                    </li>
                    <li class="list-row font-semibold">
                        Languages
                        <div
                            class="list-col-wrap flex flex-row flex-wrap gap-1 sm:gap-2"
                        >
                            <Badge src={rust} name={"Rust"} />
                            <Badge src={python} name={"Python"} />
                            <Badge src={ts} name={"TypeScript"} />
                        </div>
                    </li>
                    <li class="list-row font-semibold">
                        Packages / Frameworks
                        <div
                            class="list-col-wrap flex flex-row flex-wrap gap-1 sm:gap-2"
                        >
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
                            <Badge src={daisyui} name={"daisyUI"} />
                            <Badge src={tauri} name={"Tauri"} />
                        </div>
                    </li>
                </ul>
            </Card>
        </SlideH>
        <SlideH id={"about_me_2"}>
            <Card title={"My Background"}>
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
            </Card>
        </SlideH>
    </CarouselH>
</SlideV>

<SlideV id={"portfolio"}>
    <CarouselH id={"portfolio"} length={3}>
        <SlideH id={"portfolio_0"}>Soon to be updated!</SlideH>
        <SlideH id={"portfolio_1"}>Soon to be updated!</SlideH>
        <SlideH id={"portfolio_2"}>Soon to be updated!</SlideH>
        <SlideH id={"portfolio_3"}>Soon to be updated!</SlideH>
    </CarouselH>
</SlideV>

<SlideV id={"contact"}>
    <h1>Soon to be updated!</h1>
</SlideV>
