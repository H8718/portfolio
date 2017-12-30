<template>
    <div id="site">
        <Banner />
        <div id="main">
            <Navbar />
            <About :scrolled="{ true: scrollPos >= 200 }" />
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

export default {
    data() {
        return {
            scrollAbout: null,
            scrollEyecatch: null,
            scrollProjects: null,
            didScroll: null,
            scrollPos: 0
        }
    },
    created() {
        window.addEventListener('scroll', this.handleScroll);
        setInterval(() => {
            if (this.didScroll) {
                this.didScroll = false;
                this.scrollPos = window.scrollY;
            }
        }, 500);
    },
    methods: {
        handleScroll() {
            this.didScroll = true;
        }
    },
    name: "app",
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
        /* font-family: "Avenir", Helvetica, Arial, sans-serif; */
        font-family: $fontMain;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
        color: $colorDark;
    }
    #main {
        z-index: 9999;
        position: relative;
    }
}
</style>
