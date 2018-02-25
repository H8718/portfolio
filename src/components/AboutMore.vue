<template>
    <section id="about-more">
        <b-row id="row-content">
            <b-col :class="{ 'animate-show': ready > 0 }">
                <i class="fa fa-codepen"></i>
                <p class="about-more-header">Full-Stack Development</p>
                <p class="about-more-text">I understand front-end and back-end
                    programming as well as using databases.</p>
            </b-col>
            <b-col :class="{ 'animate-show': ready > 1 }">
                <i class="devicon-javascript-plain"></i>
                <p class="about-more-header">Everything JavaScript</p>
                <p class="about-more-text">Whether I'm developing websites, web apps
                    or mobile apps, my language of choice is JavaScript.
                </p>
            </b-col>
            <b-col :class="{ 'animate-show': ready > 2 }">
                <i class="fa fa-cubes"></i>
                <p class="about-more-header">Responsive Layouts</p>
                <p class="about-more-text">I'm familiar with Bootstrap, Sass and flexbox
                    which I use to create intuitive and scaling layouts for both mobile
                    and web.</p>
            </b-col>
            <b-col :class="{ 'animate-show': ready > 3 }">
                <i class="fa fa-group"></i>
                <p class="about-more-header">Teamwork</p>
                <p class="about-more-text">I speak fluent English and have experience in
                    working in multinational teams.</p>
            </b-col>
        </b-row>
    </section>
</template>

<script>
export default {
    data() {
        return {
            ready: []
        };
    },
    mounted() {
        let waypoint = new Waypoint({
            element: document.getElementById("about-more"),
            handler: () => {
                this.startAnimation();
                waypoint.destroy();
            },
            offset: 800
        });
    },
    methods: {
        startAnimation() {
            for (var i = 0; i < 4; i++) {
                setTimeout(() => {
                    this.animateShow();
                }, 300 * i);
            }
        },
        animateShow() {
            this.ready++;
        }
    },
    props: ["scrolled"]
};
</script>

<style lang="scss">
@import "../styles/variables.scss";
@import "../styles/mixins.scss";

#about-more {
    width: 100%;
    background: $colorLight;
    padding-top: 2em;
    padding-bottom: 1.5em;
    #row-content {
        padding: 0 10vw 0 10vw;
        .col {
            opacity: 0;
            @include flexbox(column);
            @include transition(opacity, 1s, ease);
            i {
                font-size: 550%;
                color: $colorPrimary;
                align-self: center;
            }
            .about-more-header {
                margin-top: 1em;
                text-align: center;
                color: #444;
                font-size: 115%;
                font-weight: bold;
            }
            .about-more-text {
                margin-top: -0.2em;
                color: $colorPrimary;
                font-size: 105%;
                margin-left: 0.5vw;
                margin-right: 0.5vw;
                text-align: justify;
                text-justify: inter-word;
            }
        }
        .animate-show {
            opacity: 1;
        }
        @media screen and (max-width: $sizeLg) {
            padding: 0 2vw 0 2vw;
            .col {
                i {
                    font-size: 350%;
                }
                .about-more-header {
                    font-size: 105%;
                }
                .about-more-text {
                    font-size: 100%;
                }
            }
        }
        @media screen and (max-width: $sizeSm) {
            padding: 0 10vw 0 10vw;
            .col {
                min-width: 84vw;
                margin-bottom: 0.5em;
                i {
                    font-size: 400%;
                }
                .about-more-header {
                    margin-top: 0.5em;
                    margin-bottom: 0.5em;
                }
                .about-more-text {
                    text-align: initial;
                    margin-left: initial;
                    margin-right: initial;
                }
            }
        }
    }
}
</style>
