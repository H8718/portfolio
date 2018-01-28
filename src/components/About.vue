<template>
    <section id="about">
        <h2>Who am I?</h2>
        <div class="underline"></div>

        <div id="blueprint" class="col-lg-8 col-md-12 offset-lg-2 offset-md-0">

            <div class="mobile-portrait">
                <div
                    class="blueprint-box"
                    id="box-0"
                    :class="{ 'show': shown > 0 }"
                >
                    <img
                        id="portrait"
                        src="../assets/portrait.png"
                    />
                    <div class="contact-btns">
                        <i class="contact-btn fa fa-linkedin-square" />
                        <i class="contact-btn devicon-github-plain" />
                        <i class="contact-btn fa fa-file" />
                    </div>
                </div>
            </div>

            <div class="third">
                <div class="container">
                    <div
                        class="blueprint-box"
                        id="box-1"
                        :class="{ 'show': shown > 1 }"
                    >
                        <h3><i class="fa fa-pencil" /> Studies</h3>
                        <p>I currently study at JAMK to become a computer engineer.</p>
                    </div>
                </div>
                <div
                    class="blueprint-box"
                    id="box-3"
                    :class="{ 'show': shown > 3 }"
                >
                    <h3><i class="fa fa-user" /> Hobbies</h3>
                    <p>I like playing the piano and computer games.</p>
                </div>
            </div>
            <div class="third">
                <div class="container">
                    <div
                        class="blueprint-box"
                        id="box-0"
                        :class="{ 'show': shown > 0 }"
                    >
                        <img
                            id="portrait"
                            src="../assets/portrait.jpg"
                        />
                        <div class="contact-btns">
                            <a href="https://www.linkedin.com/in/markus-moilanen/" target="_blank">
                                <i class="contact-btn fa fa-linkedin-square" />
                            </a>
                            <a href="https://github.com/moilamar" target="_blank">
                                <i class="contact-btn devicon-github-plain" />
                            </a>
                            <i class="contact-btn fa fa-file" @click="showCV()"/>
                        </div>
                    </div>
                    <div class="line" id="line-1" />
                    <div class="line" id="line-2" />
                    <div class="line" id="line-3" />
                    <div class="line" id="line-4" />
                    <div class="line" id="line-5" />
                </div>
            </div>
            <div class="third">
                <div class="container">
                    <div
                        class="blueprint-box"
                        id="box-2"
                        :class="{ 'show': shown > 2 }"
                    >
                        <h3><i class="fa fa-diamond" /> Skills</h3>
                        <p>I am a fast learner so I have picked up a lot of useful
                            skills for programming and other related things.
                        </p>
                    </div>
                </div>
                <div class="container">
                    <div
                        class="blueprint-box"
                        id="box-4"
                        :class="{ 'show': shown > 4 }"
                    >
                        <h3><i class="fa fa-rocket" /> Future</h3>
                        <p>After graduation, I want to improve my skills to become
                            a great full-stack developer.
                        </p>
                    </div>
                </div>
            </div>
        </div>
        <!-- <modal
            name="cv"
            height="95%"
        >
            <img src="/static/cv.png" />
        </modal> -->
        <Lightbox :enabled="modalEnabled">
            <component :is="childComponent"></component>
        </Lightbox>
    </section>
</template>

<script>
import Lightbox from "./Lightbox";

export default {
    data() {
        return {
            shown: 0,
            modalEnabled: false,
            childComponent: { template: '<img id="cv" src="/static/cv.png" />' }
        };
    },
    mounted() {
        let waypoint = new Waypoint({
            element: document.getElementById("about"),
            handler: () => {
                if (window.scrollY > 950) {
                    console.log("under about");
                }
                this.animateblueprint();
                waypoint.destroy();
            },
            offset: 600
        });
    },
    methods: {
        animateblueprint() {
            for (let i = 0; i < 5; i++) {
                this.doAnimation(i);
            }
        },
        doAnimation(i) {
            setTimeout(() => {
                this.shown++;
            }, 700 * i);
        },
        showCV() {
            /* this.$modal.show("cv"); */
            this.modalEnabled = !this.modalEnabled;
        }
    },
    props: ["scrolled"],
    components: {
        Lightbox
    }
};
</script>

<style lang="scss">
@import "../styles/variables.scss";
@import "../styles/mixins.scss";

#about {
    background: $colorMain;
    color: $colorLight;
    position: relative;
    padding-top: 7vh;
    padding-bottom: 2vh;
    height: auto !important;
    /* @media screen and (max-width: 1000px) {
        height: auto !important;
    } */
    .underline {
        border-color: $colorLighter;
    }
    #blueprint {
        @include flexbox(row);
        position: relative;
        .mobile-portrait {
            display: none;
        }
        @media screen and (max-width: 999px) {
            flex-direction: column;
            .mobile-portrait {
                display: auto;
            }
            .third {
                width: 100% !important;
                .container {
                    min-height: initial !important;
                    max-height: initial !important;
                }
            }
            .third:nth-of-type(2) {
                display: none;
            }
        }
        .third {
            width: 33.33vw;
            .container {
                max-height: 35vh;
                min-height: 30vh;
                position: relative;
            }
        }
        .third:nth-child(3) {
            .container {
                display: flex;
                align-items: center;
                justify-content: center;
            }
        }
        .blueprint-box {
            text-align: center;
            opacity: 1; // 0
            margin: 1.5vh;
            position: relative;
            background: $colorMain;
            @media screen and (max-width: 1299px) and (min-width: 999px) {
                width: 150%;
            }
            h3 {
            }
            p {
                /* width: 27vh; */
                /* min-height: 12vh; */
                border: 0.5vh solid $colorLighter;
                @include border-radius(0.3vh);
                color: $colorLighter;
                padding: 2vh;
                font-size: 110%;
                background: $colorSecondary;
            }
        }
        #portrait {
            width: 25vh;
            @include border-radius(18vh);
            border: 0.5vh solid $colorLighter;
            position: relative;
            z-index: 5;
        }
        .contact-btns {
            margin-top: 8%;
            margin-left: 7%;
            .contact-btn {
                font-size: 350%;
                @include transition(color, 1s, ease);
                margin-right: 7%;
                cursor: pointer;
            }
            a:nth-child(1) {
                font-size: 110%;
            }
            i:nth-child(3) {
                font-size: 330%;
            }
            .contact-btn:hover {
                color: $colorSecondary;
            }
        }
        .show {
            @include transition(opacity, 1.5s, ease);
            opacity: 1;
        }
        #box-0 {
            width: 100%;
            margin-top: 65%;
        }
        #box-1,
        #box-2 {
            z-index: 5;
            margin-top: -2vh;
        }
        #box-3,
        #box-4 {
            z-index: 5;
        }
        #box-1,
        #box-3 {
            @media screen and (max-width: 1299px) and (min-width: 999px) {
                margin-left: -60%;
            }
        }
        .line {
            position: absolute !important;
            display: block !important;
            z-index: 1;
            width: 45%;
            height: 50%;
            @media screen and (max-width: 999px) {
                display: none !important;
            }
        }
        /* #line-1 {
            border-top: 0.4vh solid $colorLighter;
            width: 2.5%;
            transform: skewY(-50deg);
            left: 21%;
            top: 10%;
            border-radius: 70%;
        } */
        #line-2 {
            border-right: 0.4vh dashed $colorLighter;
            border-top: 0.4vh dashed $colorLighter;
            margin-left: -40%;
            border-top-right-radius: 100%;
        }
        #line-3 {
            border-right: 0.4vh dashed $colorLighter;
            border-bottom: 0.4vh dashed $colorLighter;
            margin-left: -40%;
            margin-top: 40%;
            border-bottom-right-radius: 100%;
        }
        #line-4 {
            border-top: 0.4vh dashed $colorLighter;
            border-left: 0.4vh dashed $colorLighter;
            margin-left: 40%;
            border-top-left-radius: 100%;
        }
        #line-5 {
            border-bottom: 0.4vh dashed $colorLighter;
            border-left: 0.4vh dashed $colorLighter;
            margin-left: 40%;
            margin-top: 40%;
            border-bottom-left-radius: 100%;
        }
        .part-name {
            font-size: 180%;
            font-family: $fontSecondary;
            position: absolute;
            left: 24%;
            top: 8%;
        }
    }
    #cv {
        height: 95vh;
    }
}
</style>
