<template>
    <div id="site">
        <Banner />
        <div id="main">
            <Navbar />
            <About />
            <Eyecatch />
            <Projects />
            <Contact />
            <Footer />
        </div>
    </div>
</template>

<script>
import Banner from "./components/Banner";
import Navbar from "./components/Navbar";
import About from "./components/About";
import Eyecatch from "./components/Eyecatch";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

export default {
    name: "app",
    components: {
        Banner,
        Navbar,
        About,
        Eyecatch,
        Projects,
        Contact,
        Footer
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
        /* font-family: "Avenir", Helvetica, Arial, sans-serif; */
        font-family: $fontMain;
        // font-family: 'Roboto', sans-serif;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
        /* color: #2c3e50; */
        color: $colorDark;
    }
    #main {
        z-index: 9999;
        position: relative;
    }
}
</style>
