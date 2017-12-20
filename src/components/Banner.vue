<template>
    <section class="smoothScroll" id="banner">
        <div id="wrapper" class="skewed">

            <!-- <div id="header"><br>Hi, I'm Markus, <br>a Web Developer</div> -->

            <div class="layer bottom">

                <!-- <div id="header" style="color:#AAA;"><br>Hi, I'm Markus, <br>a Web Developer</div> -->

                <!-- <div class="content-wrap"> -->
                    <!-- <div class="content-body">
                        <h1>Look Sharp</h1>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut quisquam temporibus dolore vero reiciendis atque debitis. Sequi at consequatur deserunt?</p>
                    </div>
                    <img src="http://www.traversymedia.com/downloads/assets/image1.png" alt=""/> -->

                <div class="content-wrap">
                    <BottomImage />
                </div>

                <!-- </div> -->
            </div>

            <div class="layer top">



                <div class="content-wrap">


                    <TopImage />


                    <!-- <div class="content-body">
                        <h1>Stay Cool</h1>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut quisquam temporibus dolore vero reiciendis atque debitis. Sequi at consequatur deserunt?</p>
                    </div>
                    <img src="http://www.traversymedia.com/downloads/assets/image2.png" alt=""/> -->



                </div>
            </div>

            <div class="handle"></div>

            <div id="header">
                <div class='header-line'>
                    > Hi! I'm <a class="">Markus</a>
                </div>
            </div>

        </div>
    </section>

</template>

<script>
import TopImage from "./TopImage";
import BottomImage from "./BottomImage";
import ScrollReveal from "scrollreveal";
window.sr = ScrollReveal();
sr.reveal("#banner");

export default {
    mounted() {
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
            /* handle.style.left = e.clientX + delta + "px"; */
            topLayer.style.width = e.clientX + skew + delta + "px";
        });
    },
    data() {
        return {
            hasFocus: true,
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
/* #header {
    text-align: center;
    font-size: 280%;
    font-weight: 800;
    color: $colorDark;
    font-family: $fontSecondary;
    position: absolute;
    z-index: 9999;
    width: 100%;
} */

#banner {
    background-color: rgba(254, 254, 254, 0);
    background-size: cover;
    background-repeat: no-repeat;
    width: 100%;
    /*margin-top: -120px;*/
    height: 90.5vh;
    #wrapper {
        position: relative;
        width: 100%;
        min-height: 38vw;
        overflow: hidden;
        .header {
            position: absolute;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            z-index: 99999;
            .header-line {
                color: #444444;
                margin-top: 5vh;
                font-size: 450%;
                overflow: hidden;
                font-weight: 600;
                position: absolute;
                text-shadow: 2px 2px 3px rgba(0, 0, 0, 0.3);
            }
            #line2 {
                margin-top: 15vh;
            }
        }
    }
}
.layer {
    /* border-top: 4px solid $colorMain;
    margin-top: -4px; */
    position: fixed; // absolute
    width: 100vw;
    min-height: 91.5vh;
    /* min-height: 43.3vw; */
    overflow: hidden;
    margin-left: -8px;
    .content-wrap {
        position: absolute;
        width: 100vw;
        /* min-height: 95vh; */
        min-height: 95vh;
    }
    .content-body {
        width: 25%;
        position: absolute;
        top: 50%;
        text-align: center;
        transform: translateY(-50%);
        color: $colorLighter;
    }
    img {
        position: absolute;
        width: 35%;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
    }
    h1 {
        font-size: 2em;
    }
}
.bottom {
    background: #212121;
    z-index: 1;
    /* padding-left: 5%; */
    .content-body {
        /* right: 5%; */
    }
    .bottom h1 {
        /* color: #fdab00; */
        color: $colorMain;
    }
}
.top {
    background: #eee;
    /* color: #222; */
    color: $colorDark;
    z-index: 2;
    width: 50vw;
    /* padding-left: 5%; */
    .content-body {
        left: 5%;
        color: $colorDark;
        /* color: ssssssssssssssssssssssssssssssssssssssssssssssssssssss#222; */
    }
}
.handle {
    height: 100%;
    display: block;
    /* background-color: #fdab00; */
    background-color: $colorMain;
    width: 0px;
    top: 0;
    left: 50%;
    z-index: 3;
}
.skewed {
    .handle {
        top: 50%;
        transform: rotate(30deg) translateY(-50%);
        height: 200%;
        transform-origin: top;
        position: absolute;
    }
    .top {
        transform: skew(-30deg);
        margin-left: -1000px;
        width: calc(50vw + 1000px);
        .content-wrap {
            transform: skew(30deg);
            margin-left: 1000px;
        }
    }
}
</style>
