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
}
</style>
