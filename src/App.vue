<template>
    <div id="site">
        <Banner :scrolled="scrollBanner === true" />
        <div id="main">
            <Navbar :scrolled="scrollNavbar === true" />
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

let Waypoints = require("./components/waypoints/lib/noframework.waypoints.min.js");

export default {
    data() {
        return {
            scrollBanner: false,
            scrollNavbar: false,
            scrollAbout: false,
            scrollEyecatch: false,
            scrollSkills: false,
            didScroll: false
        };
    },
    mounted() {
        /* window.addEventListener("scroll", this.handleScroll);
        let scrollInterval = setInterval(() => {
            if (this.didScroll) {
                if (window.scrollY >= 2700) {
                    window.removeEventListener("scroll", this.handleScroll);
                    this.scrollSkills = true;
                    clearInterval(scrollInterval);
                    this.didScroll = false;
                    return;
                } else if (window.scrollY >= 950) {
                    this.scrollEyecatch = true;
                    this.didScroll = false;
                    return;
                } else if (window.scrollY > 200) {
                    this.scrollAbout = true;
                    this.didScroll = false;
                    return;
                }
            }
        }, 800); */
        let banner = new Waypoint({
            element: document.getElementById("banner"),
            handler: () => {
                if (window.scrollY > 0) {
                    console.log("banner under");
                }
                this.scrollBanner = true;
                banner.destroy();
            }
        });
        let navbar = new Waypoint({
            element: document.getElementById("navbar"),
            handler: () => {
                /* if (window.scrollY > 0) {
                    console.log("banner under");
                } */
                console.log("navbar");
                this.scrollNavbar = true;
                navbar.destroy();
            }
        });
        let about = new Waypoint({
            element: document.getElementById("about"),
            handler: () => {
                if (window.scrollY > 950) {
                    console.log("under about");
                }
                this.scrollAbout = true;
                about.destroy();
            },
            offset: 600
        });
        let eyecatch = new Waypoint({
            element: document.getElementById("eyecatch"),
            handler: () => {
                console.log("eyecatch");
                this.scrollEyecatch = true;
                eyecatch.destroy();
            },
            offset: 700
        });
        let skills = new Waypoint({
            element: document.getElementById("skills"),
            handler: () => {
                console.log("skills");
                this.scrollSkills = true;
                skills.destroy();
            },
            offset: 600
        });
    },
    methods: {
        /* handleScroll() {
            this.didScroll = true;
        } */
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
        color: $colorDark;
    }
    #main {
        z-index: 9999;
        position: relative;
    }
}
</style>
