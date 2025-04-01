<script lang="ts">
    import Card from "$lib/components/card.svelte";
    import Carousel from "$lib/components/carousel.svelte";
    import Slide from "$lib/components/slide.svelte";
    import LiBadge from "$lib/components/li_badge.svelte";
    import Badge from "$lib/components/badge.svelte";

    import Placeholder from "$lib/components/placeholder.svelte";

    import cargo from "$lib/logos/cargo.png";
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
    import polars from "$lib/logos/polars.svg";
    import pytorch from "$lib/logos/pytorch.svg";
    import matplotlib from "$lib/logos/matplotlib.svg";
</script>

<svelte:head>
    <title>Fatih Demircan</title>
</svelte:head>

<Card title="Short Bio">
    <div class="text-justify indent-6 sm:indent-12">
        I'm a mechanical engineer - who previously chose the path of economics -
        with a passion for programming.
    </div>
    <div class="text-justify indent-6 sm:indent-12">
        After high school, I initially chose to study industrial engineering but
        later switched to economics at the University of Cologne. However,
        driven by my passion for technology, I decided to pursue engineering as
        a career. I completed my Bachelor's in mechanical engineering at the
        Technical University of Braunschweig, followed by a Master's degree.
        Throughout my studies, I focused on methodological depth, ultimately
        specializing in mechatronics. This allowed me to combine traditional
        engineering with my passion for programming, giving me a broader
        perspective and enabling me to move beyond siloed thinking.
    </div>
    <div class="text-justify indent-6 sm:indent-12">
        In case you have interesting projects or potential business inquiries,
        feel free to <a href="#contact">contact</a> me.
    </div>
</Card>

<Card title="What I Use">
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
            <Badge src={cargo} name={"Actix Web"} />
            <Badge src={diesel} name={"Diesel"} />
            <Badge src={embassy} name={"Embassy"} />
            <Badge src={fenics} name={"FEniCS"} />
            <Badge src={matplotlib} name={"matplotlib"} />
            <Badge src={cargo} name={"ndarray"} />
            <Badge src={numpy} name={"NumPy"} />
            <Badge src={pandas} name={"pandas"} />
            <Badge src={polars} name={"Polars"} />
            <Badge src={pytorch} name={"PyTorch"} />
            <Badge src={cargo} name={"SQLx"} />
            <Badge src={svelte} name={"Svelte"} />
            <Badge src={tailwindcss} name={"TailwindCSS"} />
            <Badge src={daisyui} name={"daisyUI"} />
            <Badge src={tauri} name={"Tauri"} />
        </LiBadge>
    </ul>
</Card>

<Card title="Portfolio">
    <Carousel id={"portfolio"} length={5}>
        <Slide id={"portfolio_0"} title={"Soon to be updated!"}>
            <Placeholder />
        </Slide>
        <Slide id={"portfolio_1"} title={"Soon to be updated!"}>
            <Placeholder />
        </Slide>
        <Slide id={"portfolio_2"} title={"Soon to be updated!"}>
            <Placeholder />
        </Slide>
        <Slide id={"portfolio_3"} title={"Soon to be updated!"}>
            <Placeholder />
        </Slide>
        <Slide id={"portfolio_4"} title={"Soon to be updated!"}>
            <Placeholder />
        </Slide>
    </Carousel>
</Card>

<Card title="Contact">
    <h1>Soon to be updated!</h1>
</Card>
