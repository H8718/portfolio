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
                <p>Hi. I'm</p>
                <p>Markus, a Web Developer</p>
                <p>and I make</p>
                <p>
                    <span>Websites</span>
                    <span>Web Apps</span>
                    <span>Mobile Apps</span>
                </p>
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
            ]
        };
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
    #overlay {
        background: $colorMain;
        opacity: 0.7;
        height: 100%;
        display: flex;
        justify-content: center;
        align-items: center;
        position: relative;
        #top {
            height: 10vh;
            background-color: #303F9F;
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
            width: 40%;
            margin-top: 10vh;
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
                line-height: 5vh;
            }
            p:nth-child(4) {
                span {
                    font-size: 200%;
                    width: 33.33%;
                }
            }
        }
    }
}
</style>
