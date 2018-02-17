<template>
    <div id="banner">
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
            <div
                id="header"
                :class="{'ready': ready > 0}"
            >
                <div class="col-lg-7 offset-lg-1 offset-1">
                    <p :class="{'ready': ready > 1}">Hi. I'm</p>
                    <p :class="{'ready': ready > 2}">Markus, a Web Developer</p>
                    <p :class="{'ready': ready > 3}">who makes</p>
                </div>
                <div
                    class="col-lg-7 offset-lg-1 offset-1"
                    :class="{'ready': ready > 4}"
                >
                    <span @click="toggleImg(1)">Websites</span>
                    <span @click="toggleImg(2)">Web Apps</span>
                    <span @click="toggleImg(3)">Mobile Apps</span>
                </div>
            </div>

            <div class="skewed overlay" :class="{ 'open': btnClicked != null }"></div>
            <div class="skewed under">
                <img
                    src="/static/projects/mesiainen_wordpress/main.png"
                    :class="{ 'show-img': btnClicked === 1 }"
                    @click="toggleImg(1)"
                />
                <img
                    src="/static/projects/black_banana_admin/main.png"
                    :class="{ 'show-img': btnClicked === 2 }"
                    @click="toggleImg(2)"
                />
                <img
                    src="/static/projects/my_movie_list/mmlphone.png"
                    :class="{ 'show-img': btnClicked === 3 }"
                    @click="toggleImg(3)"
                />
            </div>
        </div>

    </div>
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
            ],
            ready: 0
        };
    },
    mounted() {
        let waypoint = new Waypoint({
            element: document.getElementById("banner"),
            handler: () => {
                if (window.scrollY > 0) {

                }
                this.animateBanner();
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
                }, this.btnClicked === null ? 900 : 1800);
                if (this.btnClicked === index) {
                    this.btnClicked = null;
                    return
                }
                else if (this.btnClicked === null) {
                    this.btnClicked = index;
                    return;
                }
                this.btnClicked = null;
                setTimeout(() => {
                    this.btnClicked = index;
                }, 1200);
            }
        },
        animateBanner() {
            this.ready++;
            setTimeout(() => {
                this.ready++;
            }, 500);
            setTimeout(() => {
                this.ready++;
            }, 1200);
            setTimeout(() => {
                this.ready++;
            }, 1600);
            setTimeout(() => {
                this.ready++;
            }, 2100);
        }
    }
};
</script>

<style lang="scss">
@import "../styles/variables.scss";
@import "../styles/mixins.scss";

#banner {
    height: 93vh;
    position: relative;
    overflow: hidden !important;
    #overlay {
        background: url('../assets/banner-bg.jpg');
        background-attachment: fixed;
        background-size: cover;
        background-repeat: no-repeat;
        height: 100%;
        @include flexbox(row, null, center);
        position: relative;
        z-index: 9;
        #top {
            height: 9vh;
            background-color: rgba(0, 0, 0, 0.2);
            opacity: 1;
            position: absolute;
            top: 0;
            width: 100%;
            @include flexbox(row, null, center);
            img {
                @media screen and (max-width: 500px) {
                    display: none;
                }
                position: absolute;
                height: 6.5vh;
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
                    @include transition(color, 0.7s, ease);
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
            background-color: rgba(0, 0, 0, 0.6);
            padding-top: 50px;
            padding-bottom: 40px;
            font-family: $fontBrand;
            margin-top: -3vh;
            width: 100%;
            margin-left: -100%;
            position: relative;
            z-index: 10;
            @include transition(margin-left, 1.5s, ease);
            @media screen and (max-width: $sizeLg) {
                width: 100% !important;
            }
            div:nth-child(1) {
                //opacity: 0;
                
                p {
                    @include transition(all, 0.7s, ease);
                    
                }
                p:nth-of-type(1) {
                    font-size: 300%;
                    line-height: 4vh;
                    margin-left: -100%;
                }
                p:nth-of-type(1).ready {
                    margin-left: 0;
                }
                p:nth-of-type(2) {
                    font-size: 400%;
                    line-height: 5vh;
                    font-weight: bold;
                    //border-bottom: 4px solid $colorSecondary;
                    width: 80%;
                    padding-bottom: 15px;
                    margin-left: -100%;
                }
                p:nth-of-type(2).ready {
                    margin-left: 0;
                }
                p:nth-of-type(2).ready:after {
                    width: 100%;
                    background-color: $colorSecondary;
                }
                p:nth-of-type(2):after {
                    content: '';
                    display: block;
                    height: 0.5vh;
                    width: 0px;
                    margin-top: 1.5vh;
                    background: transparent;
                    transition: width 1s ease, background-color .5s ease;
                }
                p:nth-of-type(3) {
                    font-size: 300%;
                    line-height: 2vh;
                    margin-left: -100%;
                }
                p:nth-of-type(3).ready {
                    margin-left: 0;
                }
            }
            div:nth-child(2) {
                //opacity: 0;
                margin-top: 4vh;
                cursor: pointer;
                span:nth-of-type(1) {
                    margin-left: -100%;
                }
                span {
                    font-size: 200%;
                    color: $colorLighter;
                    margin-right: 3vw;
                    @include transition(all, 0.6s, ease);
                    border-bottom: 3px solid transparent;
                    margin-left: -100%;
                }
                span:hover {
                    border-color: $colorSecondary;
                }
            }
            div:nth-child(2).ready {
                span {
                    margin-left: 0%;
                }
            }
        }
        #header.ready {
            margin-left: 0;
        }
        .skewed {
            width: 45%;
            height: 84vh;
            position: absolute;
            right: -20%;
            top: 9vh;
            @include skew(-30deg);
            z-index: 100;
            @media screen and (max-width: $sizeLg) {
                display: none;
            }
        }
        .overlay {
            background-color: rgba(35, 35, 35, 1);
            @include transition(width, 0.8s, ease);
            z-index: 12;
        }
        .under {
            background: white;
            z-index: 11;
            @include flexbox(row, left, center);
            @media screen and (max-width: $sizeLg) {
                display: none;
            }
            img {
                @include skew(30deg);
                width: 70%;
                margin-left: 10%;
                margin-top: 8.5%;
                position: absolute;
                z-index: 11;
                /* transition: margin-left 1s, opacity 1s; */
                @include transition(all, 0.8s, ease);
                opacity: 0;
            }
            img:nth-child(1) {
                width: 100%;
            }
            img:nth-child(2) {
                width: 100%;
            }
            img:nth-child(3) {
                width: 70%;
                margin-right: -20%;
            }
            img:nth-child(3).show-img {
                margin-left: -25%;
            }
            img.show-img {
                margin-left: -40%;
                opacity: 1 !important;
                position: absolute !important;
            }
        }
        .overlay.open {
            width: 0 !important;
        }
    }
}
</style>
