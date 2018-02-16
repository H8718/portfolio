<template>
    <div id="site">
        <div
            id="loader-wrapper"
            v-if="isLoading"
            :class="{ 'animate-out': animateOutLoader }"
        >
            <Loader />
        </div>
        <div id="content" v-if="!isLoading">
            <Banner />
            <div id="main">
                <Navbar />
                <About />
                <AboutMore />
                <Projects />
                <Skills />
                <Contact />
                <Foot />
            </div>
        </div>
    </div>
</template>

<script>
import Loader from "./components/Loader";
import Banner from "./components/Banner";
import Navbar from "./components/Navbar";
import About from "./components/About";
import AboutMore from "./components/AboutMore";
import Projects from "./components/Projects";
import Skills from "./components/Skills";
import Contact from "./components/Contact";
import Foot from "./components/Foot";

export default {
    data() {
        return {
            isLoading: true,
            animateOutLoader: false
        }
    },
    mounted() {
        setTimeout(() => {
            this.animateOutLoader = true;
        }, 1600);
        setTimeout(() => {
            this.isLoading = false;
        }, 2400);
    },
    components: {
        Banner,
        Navbar,
        About,
        AboutMore,
        Projects,
        Skills,
        Contact,
        Foot,
        Loader
    }
};
</script>

<style lang="scss">
@import "styles/variables.scss";
@import "styles/mixins.scss";

body {
    background-color: $colorLight;
    margin: 0;
    padding: 0;
    #loader-wrapper {
        @include flexbox(row, center, center);
        height: 100vh;
        padding-bottom: 40px;
    }
    .animate-out {
        #loading-icon {
            opacity: 0;
        }
    }
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
