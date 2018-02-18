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
                        <p>I currently study at JAMK to become a computer engineer.
                            I'm looking to graduate by the end of 2018.
                        </p>
                    </div>
                </div>
                <div class="container">
                    <div
                        class="blueprint-box"
                        id="box-3"
                        :class="{ 'show': shown > 3 }"
                    >
                        <h3><i class="fa fa-user" /> Hobbies</h3>
                        <p>On my free time, I like playing the piano and computer games.
                            Every once in a while I try something new.
                        </p>
                    </div>
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
                        <p>I am a fast learner so I have picked up lots useful
                            skills like programming, problem solving, design and
                            project working.
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
                            a great full-stack developer. I'm also interested in
                            entrepreneurship.
                        </p>
                    </div>
                </div>
            </div>
        </div>
        </modal>
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
                this.animateBlueprint();
                waypoint.destroy();
            },
            offset: 600
        });
    },
    methods: {
        animateBlueprint() {
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
    background: $colorPrimaryTint;
    color: $colorLight;
    position: relative;
    padding-top: 50px;
    padding-bottom: 0;
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
            width: 33.33%;
            //margin-top: -30px;
            .container {
                max-height: 35vh;
                min-height: 30vh;
                position: relative;
                //@include flexbox(row, center, center);
            }
        }
        .third:nth-child(3) {
            .container {
                @include flexbox(row, center, center);
            }
        }
        .blueprint-box {
            text-align: center;
            opacity: 1; // 0
            //margin: 1.5vh;
            position: relative;

            width: 100%;
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
                font-size: 105%;
                background: $colorPrimary;
            }
        }
        #portrait {
            width: 23vh;
            @include border-radius(18vh);
            border: 0.5vh solid $colorLighter;
            position: relative;
            z-index: 5;
        }
        .contact-btns {
            margin-top: 8%;
            @include flexbox(row, center, center);
            .contact-btn {
                font-size: 350%;
                @include transition(color, 1s, ease);
                cursor: pointer;
            }
            a:nth-child(1) {
                font-size: 110%;
                padding-right: 7%;
            }
            i:nth-child(3) {
                font-size: 310%;
                padding-left: 7%;
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
            margin-top: 47%;
        }
        #box-1,
        #box-2 {
            z-index: 5;
            margin-top: -4vh;
        }
        #box-3,
        #box-4 {
            margin-top: -3vh;
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
            height: 55%;
            @media screen and (max-width: 999px) {
                display: none !important;
            }
        }
        #line-2 {
            border-right: 0.4vh dashed $colorLighter;
            border-top: 0.4vh dashed $colorLighter;
            margin-left: -40%;
            margin-top: -5%;
            border-top-right-radius: 100%;
        }
        #line-3 {
            border-right: 0.4vh dashed $colorLighter;
            border-bottom: 0.4vh dashed $colorLighter;
            margin-left: -40%;
            margin-top: 28%;
            border-bottom-right-radius: 100%;
        }
        #line-4 {
            border-top: 0.4vh dashed $colorLighter;
            border-left: 0.4vh dashed $colorLighter;
            margin-left: 40%;
            margin-top: -5%;
            border-top-left-radius: 100%;
        }
        #line-5 {
            border-bottom: 0.4vh dashed $colorLighter;
            border-left: 0.4vh dashed $colorLighter;
            margin-left: 40%;
            margin-top: 28%;
            border-bottom-left-radius: 100%;
        }
    }
    #cv {
        height: 95vh;
    }
}
</style>
