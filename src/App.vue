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
$colorMain: #3949ab;
$colorLight: #fff;
$colorDark: #212121;

/*
background-color: #eee;
background-color: #2a2a2a;
font-family: 'Montserrat', sans-serif;
font-family: Raleway,sans-serif;

$colorMain: #0d47a1;
$colorLight: #fff;
$colorDark: #212121;
*/

body {
    background-color: $colorLight;
    margin: 0;
    padding: 0;
    #site {
        /* font-family: "Avenir", Helvetica, Arial, sans-serif; */
        font-family: Raleway, sans-serif;
        // font-family: 'Roboto', sans-serif;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
        /* color: #2c3e50; */
        color: $colorDark;
    }
    #main {
        z-index: 9999;
        position: relative;
        .container-fluid {
            padding: 4vw 4vw 4vw 4vw;
            h2 {
                text-align: center;
                font-family: "Montserrat", sans-serif;
                font-size: 250%;
                /* font-variant: small-caps; */
                font-weight: 500;
                margin-bottom: 6vh;
                /* text-shadow: 1px 1px 2px rgba(50, 50, 50, 0.6); */
                /* border-bottom: 0.3vh solid $colorMain; */
                padding-bottom: 0.5vh;
            }
        }
    }
}
.center-content {
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: center;
    align-items: center;
}
</style>
