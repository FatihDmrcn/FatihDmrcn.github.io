<script lang="ts">
    import Card from "$lib/components/card.svelte";
    import Carousel from "$lib/components/carousel.svelte";
    import Slide from "$lib/components/slide.svelte";
    import LiBadge from "$lib/components/li_badge.svelte";
    import Badge from "$lib/components/badge.svelte";

    import Placeholder from "$lib/components/placeholder.svelte";

    import mail from "$lib/fig/mail.png";
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

    import ahrs_board from "$lib/fig/ahrs_board.webp";
</script>

<Card title="Short Bio">
    <div class="text-justify indent-6 sm:indent-12">
        I'm a mechanical engineer - who also holds a degree in economics - with
        a passion for programming.
    </div>
    <div class="text-justify indent-6 sm:indent-12">
        After high school, I initially chose to study industrial engineering but
        opted for economics at the University of Cologne. However, driven by my
        passion for technology, I decided to pursue engineering as a career. I
        completed my Bachelor's in mechanical engineering at the Technical
        University of Braunschweig, followed by a Master's degree. Throughout my
        studies, I focused on methodological depth, eventually specializing in
        mechatronics. This allowed me to combine traditional engineering with my
        passion for programming, giving me a broader perspective and enabling me
        to move beyond siloed thinking.
    </div>
    <div class="text-justify indent-6 sm:indent-12">
        In case you have interesting projects or potential business inquiries,
        feel free to <a href="#contact">contact</a> me.
    </div>
</Card>

<Card title="Portfolio">
    <Carousel id={"portfolio"} length={4}>
        <Slide id={"portfolio_0"} title={"AHRS module"}>
            <article class="text-justify">
                <img
                    class="rounded-box w-full sm:w-[45%] float-none sm:float-left mb-2 sm:mr-2"
                    src={ahrs_board}
                    alt="ahrs_board"
                />
                <p>
                    I've designed an AHRS module (Attitude Heading Reference
                    System), also integrating a GNSS chip as well as a pressure
                    sensor. My work covers the design of the PCB as well as the
                    corresponding code. The PCB was designed using KiCad whereas
                    the embedded code makes use the Rust crate Embassy. The goal
                    is to utilize this in future projects, primarily for a
                    drone.
                </p>
            </article>
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
    </Carousel>
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

<Card title="Contact">
    <article class="text-center">
        <img
            class="mt-2 h-5 aspect-auto justify-self-center"
            src={mail}
            alt="mail"
        />
        <p class="pt-5 text-xs sm:text-sm">
            *the address is embedded as an image in order to avoid misuse
            through webscraping!
        </p>
    </article>
</Card>
