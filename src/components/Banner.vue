<template>
    <section id="banner">
        <div id="overlay">
            <div id="top">
                <img src="../assets/logo.png" alt=""/>
                <div class="contact-icons">
                    <a href="https://www.linkedin.com/in/markus-moilanen/" target="_blank">
                        <i class="contact-btn fa fa-linkedin-square" />
                    </a>
                    <a href="https://github.com/moilamar" target="_blank">
                                <i class="contact-btn devicon-github-plain" />
                            </a>
                </div>
            </div>
            <div id="header">
                <div class="col-lg-7 col-md-10 offset-lg-1 offset-1">
                    <img
                        src="../assets/portrait.jpg"
                        class="col-md-4 offset-md-3"
                    />
                    <p>Hi. I'm</p>
                    <p>Markus, a Web Developer</p>
                    <p>who makes</p>
                </div>
                <div class="col-lg-7 col-md-10 offset-lg-1 offset-1">
                    <span @click="toggleImg(1)">Websites</span>
                    <span @click="toggleImg(2)">Web Apps</span>
                    <span @click="toggleImg(3)">Mobile Apps</span>
                </div>
            </div>

            <div class="background">
                <div />
                <div />
                <div />
                <div />
                <i class="devicon-react-original" />
            </div>

            <div class="skewed overlay" :class="{ 'open': btnClicked != null }"></div>
            <div class="skewed under">
                <!-- <img class="img" :src="img" :class="{ 'show-img': btnClicked }" /> -->
                <img src="/static/projects/mesiainen_wordpress/main.png" :class="{ 'show-img': btnClicked === 1 }" />
                <img src="/static/projects/black_banana_admin/main.png" :class="{ 'show-img': btnClicked === 2 }" />
                <img src="/static/projects/my_movie_list/mmlphone.png" :class="{ 'show-img': btnClicked === 3 }" />
            </div>
        </div>

    </section>
</template>

<script>
export default {
    data() {
        return {
            btnClicked: null,
            clickable: true,
            images: [
                {
                    src: "/static/projects/mesiainen_wordpress/main.png",
                    title: "test"
                }
            ]
        };
    },
    mounted() {
        let waypoint = new Waypoint({
            element: document.getElementById("banner"),
            handler: () => {
                if (window.scrollY > 0) {
                    console.log("banner under");
                }
                this.scrollBanner = true;
                waypoint.destroy();
            }
        });
    },
    methods: {
        toggleImg(index) {
            if (this.clickable) {
                this.clickable = false;
                setTimeout(() => {
                    this.clickable = true;
                }, this.btnClicked == null ? 1200 : 2200);
                if (this.btnClicked == null) {
                    this.btnClicked = index;
                    return;
                }
                this.btnClicked = null;
                setTimeout(() => {
                    this.btnClicked = index;
                }, 1200);
            }
        }
    }
};
</script>

<style lang="scss">
@import "../styles/variables.scss";

#banner {
    height: 93vh;
    position: relative;
    overflow: hidden !important;
    #overlay {
        background-color: rgba(57, 73, 171, 0.8);
        height: 100%;
        display: flex;
        align-items: center;
        position: relative;
        z-index: 9;
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
                height: 7vh;
                left: 6vh;
            }
            .contact-icons {
                color: white;
                position: absolute;
                right: 6vh;
                font-size: 250%;
                margin-top: 0.1vh;
                i {
                    margin-left: 2vh;
                    transition: color 0.7s;
                }
                a:nth-child(1) {
                    font-size: 110%;
                }
                i:hover {
                    color: $colorSecondary;
                }
            }
        }
        #header {
            color: $colorLighter;
            font-family: $fontBrand;
            margin-top: -3vh;
            width: 100%;
            position: relative;
            z-index: 10;
            div:nth-child(1) {
                img {
                    width: 17vh;
                    padding: 0vh;
                    border-radius: 100%;
                    margin-bottom: 3%;
                    border: 0.5vh solid white;
                    opacity: 1 !important;
                    /* transition: transform 2s; */
                }
                /* img:hover {
                    transform: rotate(360deg);
                } */
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
            z-index: 2;
            div:nth-child(1) {
                background-color: rgba(57, 73, 171, 0.6);
                z-index: 5;
                position: absolute;
                height: 160%;
                width: 90%;
                bottom: -95%;
                border-top-left-radius: 80%;
                border-top-right-radius: 80%;
                border-bottom-left-radius: 10%;
                border-bottom-right-radius: 10%;
            }
            div:nth-child(2) {
                background-color: rgba(57, 73, 171, 0.6);
                z-index: 5;
                position: absolute;
                height: 160%;
                width: 90%;
                bottom: -85%;
                left: 25%;
                border-top-left-radius: 80%;
                border-top-right-radius: 50%;
                border-bottom-left-radius: 10%;
                border-bottom-right-radius: 10%;
            }
            div:nth-child(3) {
                background-color: rgba(57, 73, 171, 0.6);
                z-index: 2;
                position: absolute;
                height: 200%;
                width: 150%;
                bottom: -100%;
                left: -30%;
                border-top-left-radius: 90%;
                border-top-right-radius: 90%;
                border-bottom-left-radius: 10%;
                border-bottom-right-radius: 10%;
            }
            div:nth-child(4) {
                background-color: rgba(57, 73, 171, 1);
                z-index: 3;
                position: absolute;
                height: 275%;
                width: 230%;
                bottom: -100%;
                left: -70%;
                border-top-left-radius: 70%;
                border-top-right-radius: 50%;
                border-bottom-left-radius: 10%;
                border-bottom-right-radius: 10%;
            }
            i:nth-child(5) {
                color: white;
                z-index: 5;
                position: absolute;
                left: 10%;
                top: -300%;
                font-size: 280%;
            }
        }
        .skewed {
            width: 53%;
            height: 82vh;
            position: absolute;
            right: -20%;
            top: 10vh;
            transform: skew(-30deg);
            z-index: 100;
            @media screen and (max-width: 1199px) {
                display: none;
            }
        }
        .overlay {
            background-color: rgba(35, 35, 35, 1);
            transition: width 1s;
            z-index: 12;
        }
        .under {
            background: white;
            z-index: 11;
            display: flex;
            justify-content: left;
            align-items: center;
            img {
                transform: skew(30deg);
                width: 90%;
                margin-left: 20%;
                margin-top: 15%;
                position: absolute;
                z-index: 11;
                transition: margin-left 1s, opacity 1s;
                opacity: 0;
            }
            img.show-img {
                margin-left: -25%;
                opacity: 1 !important;
                position: relative !important;
            }
        }
        .overlay.open {
            width: 0 !important;
        }
    }
}
</style>
