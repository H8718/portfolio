<template>
    <div id="site">
        <Banner />
        <div id="main">
            <Navbar />
            <About />
            <Eyecatch />
            <Projects />
            <Skills />
            <Contact />
            <Foot />
        </div>
    </div>
</template>

<script>
import Banner from "./components/Banner";
import Navbar from "./components/Navbar";
import About from "./components/About";
import Eyecatch from "./components/Eyecatch";
import Projects from "./components/Projects";
import Skills from "./components/Skills";
import Contact from "./components/Contact";
import Foot from "./components/Foot";

let Waypoints = require("./components/waypoints/lib/noframework.waypoints.min.js");

export default {
    components: {
        Banner,
        Navbar,
        About,
        Eyecatch,
        Projects,
        Skills,
        Contact,
        Foot
    }
};
</script>

<style lang="scss">
@import "styles/variables.scss";

body {
    background-color: $colorLight;
    margin: 0;
    padding: 0;
    #site {
        font-family: $fontMain;
        color: $colorDark;
    }
    #main {
        z-index: 9999;
        position: relative;
    }
}
</style>
