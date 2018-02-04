<template>
    <div id="site">
        <div id="loader-wrapper" v-if="loading">
            <div id="loader">

            </div>
        </div>
        <div id="content" v-if="!loading">
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
            loading: false
        }
    },
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
@import "styles/mixins.scss";

body {
    background-color: $colorLight;
    margin: 0;
    padding: 0;
    #loader-wrapper {
        background: red;
        @include flexbox(row, center, center);
        #loader {
            min-height: 100%;
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
