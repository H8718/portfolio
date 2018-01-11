<template>
    <section id="eyecatch" class="container-fluid">
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
            ready: [],
            unwatch: this.$watch("scrolled", function() {
                if (this.scrolled === true) {
                    this.unwatch();
                    this.startAnimation();
                }
            })
        };
    },
    mounted() {
        let waypoint = new Waypoint({
            element: document.getElementById("eyecatch"),
            handler: () => {
                console.log("eyecatch");
                this.scrollEyecatch = true;
                waypoint.destroy();
            },
            offset: 700
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

#eyecatch {
    width: 100%;
    background: $colorLight;
    #row-content {
        padding: 1vw 10vw 1vw 10vw;
        .col {
            display: flex;
            flex-direction: column;
            opacity: 0;
            transition: opacity 1s;
            @media screen and (max-width: 350px) {
                margin-bottom: 3vh;
                padding: 0vw 10vw 0vw 10vw;
            }
            i {
                font-size: 600%;
                color: $colorMain;
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
                color: $colorMain;
                font-size: 110%;
            }
        }
        .animate-show {
            opacity: 1;
        }
    }
}
</style>
