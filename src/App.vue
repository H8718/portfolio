<template>
    <div id="site">
        <Banner />
        <Navbar />
        <Projects />
        <About />
    </div>
</template>

<script>
import Banner from "./components/Banner";
import Navbar from "./components/Navbar";
import Projects from "./components/Projects";
import About from "./components/About";

export default {
    name: "app",
    components: {
        Banner,
        Navbar,
        Projects,
        About
    }
};
</script>

<style lang="scss">
$orange: #f9aa39;

body {
    background-color: #f9f9f9;
    margin: 0;
    padding: 0;
    #site {
        font-family: "Avenir", Helvetica, Arial, sans-serif;
        // font-family: 'Roboto', sans-serif;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
        color: #2c3e50;
    }
    .container-fluid {
        padding: 3vw 3vw 0 3vw;
        h2 {
            font-family: "Ubuntu", sans-serif;
            font-size: 250%;
            font-variant: small-caps;
            font-weight: 600;
            margin-bottom: 6vh;
            text-shadow: 1px 1px 2px rgba(150, 150, 150, 0.8);
            border-bottom: 0.3vh solid $orange;
            padding-bottom: 0.5vh;
        }
    }
}
</style>
