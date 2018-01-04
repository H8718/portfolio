<template>
    <section id="banner">
        <div id="overlay">
            <div id="top">
                <img src="../assets/logo.png" alt=""/>
                <div class="contact-icons">
                    <i class="fa fa-linkedin-square" />
                    <i class="devicon-github-plain" />
                </div>
            </div>
            <div
                id="header"
            >
                <div class="col-md-7 offset-1">
                    <p>Hi. I'm</p>
                    <p>Markus, a Web Developer</p>
                    <p>who makes</p>
                </div>
                <div class="col-md-8 offset-1">
                    <b-row><span
                        class="col-md-2"
                        @mouseover="toggleHover()" @mouseleave="toggleHover()"
                    >Websites</span>
                    <span class="col-md-2">Web Apps</span>
                    <span class="col-md-3">Mobile Apps</span>
                    </b-row>
                </div>
            </div>
            <div class="skewed overlay" :class="{ 'open': btnHover }"></div>
            <div class="skewed under"></div>
        </div>
    </section>

</template>

<script>
import TopImage from "./TopImage";
import BottomImage from "./BottomImage";

export default {
    /* mounted() {
        let wrapper = document.getElementById("wrapper");
        let topLayer = wrapper.querySelector(".top");
        let handle = wrapper.querySelector(".handle");
        let skew = 0;
        let delta = 0;
        if (wrapper.className.indexOf("skewed") != -1) {
            skew = 1000;
        }
        wrapper.addEventListener("mousemove", function(e) {
            delta = (e.clientX - window.innerWidth / 2) * 0.5;
            /* handle.style.left = e.clientX + delta + "px";
            topLayer.style.width = e.clientX + skew + delta + "px";
        });
    }, */
    data() {
        return {
            headerLines: [
                ["> Hi! I'm", "Markus"],
                ["> I make", "Websites"],
                [">", "Web apps"],
                [">", "Mobile apps"]
            ],
            btnHover: false
        };
    },
    methods: {
        toggleHover() {
            this.btnHover = !this.btnHover;
            console.log("test");
        }
    },
    components: {
        TopImage,
        BottomImage
    }
};
</script>

<style lang="scss">
@import "../styles/variables.scss";

#banner {
    height: 92vh;
    /* border-top: 0.5vh solid $colorMain; */
    position: relative;
    overflow-x: hidden !important;
    #overlay {
        background: $colorMain;
        opacity: 0.7;
        height: 100%;
        /* display: flex;
        justify-content: center;
        align-items: center;
        position: relative; */
        display: flex;
        align-items: center;
        #top {
            height: 10vh;
            background-color: #303f9f;
            opacity: 1;
            position: absolute;
            top: 0;
            width: 100%;
            display: flex;
            align-items: center;
            img {
                position: absolute;
                height: 8vh;
                left: 6vh;
            }
            .contact-icons {
                color: white;
                position: absolute;
                right: 6vh;
                font-size: 250%;
                i {
                    margin-left: 2vh;
                }
                i:nth-child(1) {
                    font-size: 105%;
                }
            }
        }
        #header {
            color: $colorLighter;
            font-family: $fontBrand;
            margin-top: 10vh;
            width: 100%;
            div:nth-child(1) {
                p:nth-child(1) {
                    font-size: 250%;
                    line-height: 2vh;
                }
                p:nth-child(2) {
                    font-size: 360%;
                    line-height: 6vh;
                }
                p:nth-child(3) {
                    font-size: 270%;
                    line-height: 7vh;
                }
            }
            div:nth-child(2) {
                span {
                    font-size: 200%;
                    color: $colorSecondary;
                }
            }
        }
        .skewed {
            width: 60%;
            height: 82vh;
            position: absolute;
            right: -20%;
            top: 10vh;
            transform: skew(-35deg);
        }
        .overlay {
            background: black;
            transition: width 1.5s;
            z-index: 10;
        }
        .under {
            background: white;
            z-index: 9;
        }
        .open {
            width: 0 !important;
        }
    }
}
</style>
