<template>
    <section class="smoothScroll" id="banner">
        <div id="wrapper" class="skewed">
            <div class="layer bottom">
                <div class="content-wrap">
                    <div class="content-body">
                        <h1>Look Sharp</h1>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut quisquam temporibus dolore vero reiciendis atque debitis. Sequi at consequatur deserunt?</p>
                    </div>
                    <img src="http://www.traversymedia.com/downloads/assets/image1.png" alt=""/>
                </div>
            </div>

            <div class="layer top">
                <div class="content-wrap">
                    <div class="content-body">
                        <h1>Stay Cool</h1>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut quisquam temporibus dolore vero reiciendis atque debitis. Sequi at consequatur deserunt?</p>
                    </div>
                    <img src="http://www.traversymedia.com/downloads/assets/image2.png" alt=""/>
                </div>
            </div>

            <div class="handle"></div>

            <div id="header">
                <div class='header-line'>
                    > Hi! I'm <a class="orange smoothScroll no-style">Markus</a>
                </div>
            </div>

        </div>
    </section>

</template>

<script>
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
            handle.style.left = e.clientX + delta + "px";
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
    }
};
</script>

<style lang="scss">
@import "../styles/variables.scss";

#banner {
    background-color: rgba(254, 254, 254, 0);
    background-size: cover;
    background-repeat: no-repeat;
    width: 100%;
    /*margin-top: -120px;*/
    height: 43.3vw;
    #wrapper {
        position: relative;
        width: 100%;
        min-height: 38vw;
        overflow: hidden;
    }
    .header {
        margin-top: 15vh;
        margin-left: 0;
        .header-line {
            color: #444444;
            margin-top: 5vh;
            font-size: 450%;
            font-family: "Ubuntu", sans-serif;
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
.layer {
    border-top: 4px solid $colorMain;
    position: fixed; // absolute
    width: 100vw;
    min-height: 43.3vw;
    overflow: hidden;
    .content-wrap {
        position: absolute;
        width: 100vw;
        min-height: 55vw;
    }
    .content-body {
        width: 25%;
        position: absolute;
        top: 50%;
        text-align: center;
        transform: translateY(-50%);
        color: #fff;
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
    background: #222;
    z-index: 1;
    .content-body {
        right: 5%;
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
    padding-left: 5%;
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
.orange {
    color: $colorMain;
}
</style>
