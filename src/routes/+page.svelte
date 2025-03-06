<script lang="ts">
    import CarouselH from "$lib/components/carousel_h.svelte";
    import SlideH from "$lib/components/slide_h.svelte";
    import SlideV from "$lib/components/slide_v.svelte";

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
    import Placeholder from "$lib/components/placeholder.svelte";
    import LiBadge from "$lib/components/li_badge.svelte";
</script>

<svelte:head>
    <title>Fatih Demircan</title>
</svelte:head>

<SlideV id={"about_me"}>
    <CarouselH id={"about_me"} length={3}>
        <SlideH id={"about_me_0"} title={"Who I Am"}>
            <div class="avatar sm:float-right">
                <div class="mask mask-hexagon-2 sm:mask-hexagon w-48">
                    <img src={profile} alt="profile" />
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
        </SlideH>
        <SlideH id={"about_me_1"} title={"What I Use"}>
            <ul class="list">
                <LiBadge title={"Applications"}>
                    <Badge src={siemens} name={"SolidEdge"} />
                    <Badge src={freecad} name={"FreeCAD"} />
                    <Badge src={abaqus} name={"Abaqus"} />
                    <Badge src={docker} name={"Docker"} />
                    <Badge src={postgresql} name={"PostgreSQL"} />
                    <Badge src={kicad} name={"KiCad"} />
                </LiBadge>
                <LiBadge title={"Languages"}>
                    <Badge src={rust} name={"Rust"} />
                    <Badge src={python} name={"Python"} />
                    <Badge src={ts} name={"TypeScript"} />
                </LiBadge>
                <LiBadge title={"Packages / Frameworks"}>
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
                </LiBadge>
            </ul>
        </SlideH>
        <SlideH id={"about_me_2"} title={"My Background"}>
            <ul class="list">
                <LiAcademia
                    degree={"Mechanical Engineering, M.Sc."}
                    university={"Technical University Braunschweig"}
                />
                <LiAcademia
                    degree={"Mechanical Engineering, B.Sc."}
                    university={"Technical University Braunschweig"}
                />
                <LiAcademia
                    degree={"Economics,B.Sc."}
                    university={"University of Cologne"}
                />
            </ul>
        </SlideH>
    </CarouselH>
</SlideV>

<SlideV id={"portfolio"}>
    <CarouselH id={"portfolio"} length={5}>
        <SlideH id={"portfolio_0"} title={"Soon to be updated!"}>
            <Placeholder />
        </SlideH>
        <SlideH id={"portfolio_1"} title={"Soon to be updated!"}>
            <Placeholder />
        </SlideH>
        <SlideH id={"portfolio_2"} title={"Soon to be updated!"}>
            <Placeholder />
        </SlideH>
        <SlideH id={"portfolio_3"} title={"Soon to be updated!"}>
            <Placeholder />
        </SlideH>
        <SlideH id={"portfolio_4"} title={"Soon to be updated!"}>
            <Placeholder />
        </SlideH>
    </CarouselH>
</SlideV>

<SlideV id={"contact"}>
    <h1>Soon to be updated!</h1>
</SlideV>
