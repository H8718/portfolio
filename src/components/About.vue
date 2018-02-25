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
                <div class="about-container">
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
                <div class="about-container">
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
                <div class="about-container">
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
                <div class="about-container">
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
                <div class="about-container">
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
    /* mounted() {
        let waypoint = new Waypoint({
            element: document.getElementById("about"),
            handler: () => {
                this.animateBlueprint();
                waypoint.destroy();
            },
            offset: 600
        });
    }, */
    methods: {
        /* animateBlueprint() {
            for (let i = 0; i < 5; i++) {
                this.doAnimation(i);
            }
        }, */
        /* doAnimation(i) {
            setTimeout(() => {
                this.shown++;
            }, 700 * i);
        }, */
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
    padding-top: 3.5em;
    padding-bottom: 4.5em;
    @media screen and (max-width: $sizeLg) {
        padding-bottom: 2.5em;
    }
    @media screen and (max-width: $sizeSm) {
        padding-bottom: 3em;
        padding-left: 1em;
        padding-right: 1em;
    }
    .underline {
        border-color: $colorLighter;
    }
    #blueprint {
        @include flexbox(row);
        position: relative;
        .mobile-portrait {
            display: none;
            .contact-btns {
                margin-top: 0;
            }
        }
        h3 {
            text-align: center;
            @media screen and (max-width: $sizeSm) {
                font-size: 200%;
            }
        }
        @media screen and (max-width: $sizeSm) {
            div:nth-child(1) {
                margin-top: 1.3em !important;
            }
            .third:nth-child(4) {
                @media screen and (max-width: $sizeMd) {
                    margin-top: -1.3em !important;
                }
            }
            flex-direction: column;
            .mobile-portrait {
                display: initial;
                #portrait {
                    width: 50vw;

                }
            }
            .third {
                width: 100% !important;
            }
            .third:nth-child(3) {
                display: none;
            }
        }
        .third {
            width: (100vw/3);
            .about-container {
                position: relative;
                @media screen and (min-width: $sizeMd) {
                    max-height: 35vh;
                }
            }
            .about-container:nth-child(1) {
                @media screen and (min-width: $sizeMd) {
                    max-height: 35vh;
                    min-height: 30vh;
                }
            }
        }
        .third:nth-child(3) {
            .about-container {
                @include flexbox(column, center, center);
            }
        }
        .blueprint-box {
            /* opacity: 1; // 0  */
            position: relative;
            width: 100%;
            @media screen and (max-width: $sizeLg) and (min-width: $sizeMd) {
                width: 150%;
            }
            p {
                /* min-height: 12vh; */
                border: 0.3em solid $colorLighter;
                @include border-radius(0.3vh);
                color: $colorLighter;
                padding: 1em;
                font-size: 110%;
                background: $colorPrimary;
            }
        }
        #portrait {
            width: 60%;
            @include border-radius(100%);
            border: 0.5vh solid $colorLighter;
            position: relative;
            margin-bottom: 1.5em;
            z-index: 5;
        }
        .contact-btns {
            margin-top: 1.5em;
            @include flexbox(row, center, center);
            .contact-btn {
                font-size: 400%;
                @include transition(color, 1s, ease);
                cursor: pointer;
                @media screen and (max-width: $sizeSm) {
                    font-size: 500% !important;
                }
            }
            :nth-child(1) {
                margin-right: 0.3em;
            }
            :nth-child(2) {
                font-size: 95%;
                margin-right: 0.3em;
            }
            :nth-child(3) {
                font-size: 350%;
            }
            @media screen and (max-width: $sizeSm) {
                :nth-child(1) {
                    font-size: 590% !important;
                    margin-right: 0.35em;
                }
                :nth-child(2) {
                    font-size: 540% !important;
                    margin-right: 0.35em;
                }
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
            margin-top: 18%;
            @include flexbox(column, null, center);
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
            @media screen and (max-width: $sizeLg) and (min-width: $sizeMd) {
                margin-left: -60%;
            }
        }
        .line {
            position: absolute;
            display: block;
            z-index: 1;
            width: 45%;
            height: 55%;
            @media screen and (max-width: $sizeSm) {
                display: none;
            }
        }
        #line-2 {
            border-right: 0.4vh dashed $colorLighter;
            border-top: 0.4vh dashed $colorLighter;
            margin-left: -40%;
            margin-top: -10%;
            border-top-right-radius: 100%;
        }
        #line-3 {
            border-right: 0.4vh dashed $colorLighter;
            border-bottom: 0.4vh dashed $colorLighter;
            margin-left: -40%;
            margin-top: 20%;
            border-bottom-right-radius: 100%;
        }
        #line-4 {
            border-top: 0.4vh dashed $colorLighter;
            border-left: 0.4vh dashed $colorLighter;
            margin-left: 40%;
            margin-top: -10%;
            border-top-left-radius: 100%;
        }
        #line-5 {
            border-bottom: 0.4vh dashed $colorLighter;
            border-left: 0.4vh dashed $colorLighter;
            margin-left: 40%;
            margin-top: 20%;
            border-bottom-left-radius: 100%;
        }
    }
    #cv {
        max-height: 95vh;
        max-width: 100vw;
    }
}
</style>
