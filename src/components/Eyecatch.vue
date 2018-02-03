<template>
    <section id="eyecatch">
        <b-row id="row-content">
            <b-col :class="{ 'animate-show': ready > 0 }">
                <i class="fa fa-codepen"></i>
                <p class="eyecatch-header">Full-Stack Development</p>
                <p class="eyecatch-text">I understand front-end and back-end
                    programming as well as using databases.</p>
            </b-col>
            <b-col :class="{ 'animate-show': ready > 1 }">
                <i class="devicon-javascript-plain"></i>
                <p class="eyecatch-header">Everything JavaScript</p>
                <p class="eyecatch-text">Whether I'm developing websites, web apps
                    or mobile apps, my language of choice is JavaScript. Usually VueJS.
                </p>
            </b-col>
            <b-col :class="{ 'animate-show': ready > 2 }">
                <i class="fa fa-cubes"></i>
                <p class="eyecatch-header">Responsive Layouts</p>
                <p class="eyecatch-text">I'm familiar with Bootstrap, Sass and flexbox
                    which I use to create intuitive and scaling layouts for both mobile
                    and web.</p>
            </b-col>
            <b-col :class="{ 'animate-show': ready > 3 }">
                <i class="fa fa-group"></i>
                <p class="eyecatch-header">Teamwork</p>
                <p class="eyecatch-text">I speak fluent English and have experience in
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
            element: document.getElementById("eyecatch"),
            handler: () => {
                this.startAnimation();
                waypoint.destroy();
            },
            offset: 750
        });
    },
    methods: {
        startAnimation() {
            for (var i = 0; i < 4; i++) {
                setTimeout(() => {
                    this.animateShow();
                }, 400 * i);
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

#eyecatch {
    width: 100%;
    background: $colorLight;
    #row-content {
        padding: 1vw 10vw 1vw 10vw;
        .col {
            @include flexbox(column);
            opacity: 0;
            @include transition(opacity, 1s, ease);
            @media screen and (max-width: 350px) {
                margin-bottom: 3vh;
                padding: 0vw 10vw 0vw 10vw;
            }
            i {
                font-size: 550%;
                color: $colorPrimary;
                align-self: center;
            }
            .eyecatch-header {
                margin-top: 2vh;
                text-align: center;
                color: #444;
                font-size: 115%;
                font-weight: bold;
            }
            .eyecatch-text {
                color: $colorPrimary;
                font-size: 105%;
                margin-left: 1vw;
                margin-right: 1vw;
            }
        }
        .animate-show {
            opacity: 1;
        }
    }
}
</style>
