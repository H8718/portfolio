<template>
    <div id="site">
        <Banner />
        <div id="main">
            <Navbar />
            <About :scrolled="scrollAbout === true" />
            <Eyecatch :scrolled="scrollEyecatch === true" />
            <Projects />
            <Skills :scrolled="scrollSkills === true" />
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
            scrollAbout: false,
            scrollEyecatch: false,
            scrollSkills: false,
            didScroll: false
        }
    },
    created() {
        window.addEventListener('scroll', this.handleScroll);
        let scrollInterval = setInterval(() => {
            if (this.didScroll) {
                if (window.scrollY >= 2700) {
                     window.removeEventListener('scroll', this.handleScroll);
                    this.scrollSkills = true;
                    clearInterval(scrollInterval);
                    this.didScroll = false;
                    return;
                }
                else if (window.scrollY >= 950) {
                    this.scrollEyecatch = true;
                    this.didScroll = false;
                    return;
                }
                else if (window.scrollY > 200) {
                    this.scrollAbout = true;
                    this.didScroll = false;
                    return;
                }
            }
        }, 800);
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
