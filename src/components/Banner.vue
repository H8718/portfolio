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
                <div class="col-lg-7 col-md-10 offset-lg-1 offset-1">
                    <img
                        src="../assets/portrait.png"
                        class="col-md-4 offset-md-3"
                    />
                    <p>Hi. I'm</p>
                    <p>Markus, a Web Developer</p>
                    <p>who makes</p>
                </div>
                <div class="col-lg-7 col-md-10 offset-lg-1 offset-1">
                    <span @mouseover="toggleHover()" @mouseleave="toggleHover()">Websites</span>
                    <span >Web Apps</span>
                    <span >Mobile Apps</span>
                </div>
            </div>

            <div class="background">
                <div />
                <div />
            </div>

            <div class="skewed overlay" :class="{ 'open': btnHover }"></div>
            <div class="skewed under">
                <img :src="'/static/projects/mesiainen_wordpress/main.png'" />
            </div>
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
    overflow: hidden !important;
    #overlay {
        background-color: rgba(57, 73, 171, 0.8);
        /* opacity: 0.8; */
        height: 100%;
        /* display: flex;
        justify-content: center;
        align-items: center;
        position: relative; */
        display: flex;
        align-items: center;
        #top {
            height: 10vh;
            /* background-color: #303f9f; */
            background-color: rgba(48, 63, 159, 0.3);
            opacity: 1;
            position: absolute;
            top: 0;
            width: 100%;
            display: flex;
            align-items: center;
            img {
                @media screen and (max-width: 500px) {
                    display: none;
                }
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
            margin-top: -3vh;
            width: 100%;
            div:nth-child(1) {
                img {
                    width: 17vh;
                    padding: 1vh;
                    border-radius: 100%;
                    margin-bottom: 3%;
                    border: 0.4vh solid white;
                    opacity: 1 !important;
                }
                p:nth-of-type(1) {
                    font-size: 250%;
                    line-height: 2vh;
                }
                p:nth-of-type(2) {
                    font-size: 360%;
                    line-height: 6vh;
                }
                p:nth-of-type(3) {
                    font-size: 270%;
                    line-height: 7vh;
                }
            }
            div:nth-child(2) {
                cursor: pointer;
                span {
                    font-size: 200%;
                    color: $colorSecondary;
                    margin-right: 3vw;
                }
            }
        }
        .background {
            @media screen and (max-width: 500px) {
                display: none;
            }
            position: absolute;
            bottom: 0;
            left: 0;
            width: 60%;
            height: 20%;
            div:nth-child(1) {
                background-color: rgba(57, 73, 171, 0.6);
                position: absolute;
                height: 150%;
                width: 70%;
                bottom: -100%;
                border-top-left-radius: 70%;
                border-top-right-radius: 50%;
                border-bottom-left-radius: 10%;
                border-bottom-right-radius: 10%;
            }
            div:nth-child(2) {
                background-color: rgba(57, 73, 171, 0.6);
                position: absolute;
                height: 160%;
                width: 70%;
                bottom: -100%;
                left: 20%;
                border-top-left-radius: 70%;
                border-top-right-radius: 50%;
                border-bottom-left-radius: 10%;
                border-bottom-right-radius: 10%;
            }
        }
        .skewed {
            width: 53%;
            height: 82vh;
            position: absolute;
            right: -20%;
            top: 10vh;
            transform: skew(-35deg);
            @media screen and (max-width: 1199px) {
                display: none;
            }
        }
        .overlay {
            background-color: rgba(35, 35, 35, 1);
            transition: width 1.5s;
            z-index: 10;
        }
        .under {
            background: white;
            z-index: 9;
            overflow: hidden;
            display: flex;
            justify-content: left;
            align-items: center;
            img {
                transform: skew(35deg);
            }
        }
        .open {
            width: 0 !important;
        }
    }
}
</style>
