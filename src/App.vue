<template>
    <div id="site">
        <Banner />
        <Navbar />
        <About />
        <Eyecatch />
        <Projects />
        <Contact />
    </div>
</template>

<script>
import Banner from "./components/Banner";
import Navbar from "./components/Navbar";
import Projects from "./components/Projects";
import About from "./components/About";
import Contact from "./components/Contact";
import Eyecatch from "./components/Eyecatch";

export default {
    name: "app",
    components: {
        Banner,
        Navbar,
        About,
        Eyecatch,
        Projects,
        Contact
    }
};
</script>

<style lang="scss">
$colorMain: #f9aa39;
$colorLight: #fff;
$colorDark: #222;

body {
    background-color: $colorLight;
    margin: 0;
    padding: 0;
    #site {
        font-family: "Avenir", Helvetica, Arial, sans-serif;
        // font-family: 'Roboto', sans-serif;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
        /* color: #2c3e50; */
        color: $colorDark;
    }
    .container-fluid {
        padding: 3vw 3vw 0 3vw;
        background: white;
        h2 {
            text-align: center;
            font-family: "Ubuntu", sans-serif;
            font-size: 250%;
            font-variant: small-caps;
            font-weight: 600;
            margin-bottom: 6vh;
            text-shadow: 1px 1px 2px rgba(150, 150, 150, 0.8);
            border-bottom: 0.3vh solid $colorMain;
            padding-bottom: 0.5vh;
        }
    }
}
</style>
