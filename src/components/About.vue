<template>
    <section 
        class="container-fluid smoothScroll" 
        id="about"
    >
        <h2>Who am I?</h2>
        <div class="horizontal-center"><div class="underline"></div></div>

        <div id="blueprint">
            <div
                class="blueprint-box"
                id="box-0"
                :class="{ 'show': shown[0] }"
            >
                <img
                id="portrait"
                    src="../assets/portrait.png"
                />
            </div>
            <div class="part-name">This is me</div>
            <div class="line" id="line-1" />

            <span class="contact-btn" id="linkedin">
                <i class=" fa fa-linkedin-square" />
            </span>
            <span class="contact-btn" id="github">
                <i class="devicon-github-plain" />
            </span>
            <span class="contact-btn" id="cv">
                <i class="fa fa-file" />
            </span>

            <div
                class="blueprint-box"
                id="box-1"
                :class="{ 'show': shown[1] }"
            >
                <h3><i class="fa fa-user" /> Hobbies</h3>
                <p>I like playing the piano and computer games.</p>
            </div>
            <div class="line" id="line-2" />

            <div
                class="blueprint-box"
                id="box-2"
                :class="{ 'show': shown[2] }"
            >
                <h3><i class="fa fa-pencil" /> Studies</h3>
                <p>I currently study at JAMK to become a computer engineer.</p>
            </div>
            <div class="line" id="line-3" />

            <div
                class="blueprint-box"
                id="box-3"
                :class="{ 'show': shown[3] }"
            >
                <h3><i class="fa fa-diamond" /> Skills</h3>
                <p>I am a fast learner so I have picked up a lot of useful
                    skills for programming and other related things.
                </p>
            </div>
            <div class="line" id="line-4" />

            <div
                class="blueprint-box"
                id="box-4"
                :class="{ 'show': shown[4] }"
            >
                <h3><i class="fa fa-rocket" /> Future</h3>
                <p>After graduation, I want to improve my skills to become
                    a great full-stack developer.
                </p>
            </div>
            <div class="line" id="line-5" />

        </div>
    </section>
</template>

<script>
export default {
    data() {
        return {
            shown: [],
            unwatch: 
                this.$watch("scrolled", function() {
                    this.animateblueprint();
                    this.unwatch();
                })
        };
    },
    methods: {
        animateblueprint() {
            for (let i = 0; i < 5; i++) {
                this.doAnimation(i);
            }
            console.log(this.shown);
        },
        doAnimation(i) {
            setTimeout(() => {
                this.shown.push(true);
            }, 1000 * i);
        }
    },
    props: ['scrolled']
};
</script>

<style lang="scss">
@import "../styles/variables.scss";

#about {
    background: #3949ab;
    color: $colorLight;
    height: 90vh;
    padding-top: 10vh;
    .underline {
        border-color: $colorLighter;
    }
    #blueprint {
        .blueprint-box {
            position: absolute;
            text-align: center;
            opacity: 0;
            h3 {
            }
            p {
                width: 27vh;
                min-height: 12vh;
                border: 0.5vh solid $colorLighter;
                border-radius: 0.3vh;
                color: $colorLighter;
                padding: 2vh;
                font-size: 110%;
                background: inherit;
                z-index: 9999;
            }
        }
        #portrait {
            width: 100%;
            border-radius: 18vh;
            padding: 1vh;
            border: 0.5vh solid $colorLighter;
        }
        .contact-btn {
            position: absolute;
            font-size: 350%;
            transition: color 1s;
        }
        .contact-btn:hover {
            color: $colorSecondary;
        }
        #linkedin {
            left: 25.3%;
            top: 11.5%;
        }
        #github {
            left: 25%;
            top: 14.2%;
        }
        .show {
            -webkit-transition: opacity 2s ease;
            -moz-transition: opacity 2s ease;
            -o-transition: opacity 2s ease;
            transition: opacity 2s ease;
            opacity: 1;
        }
        #box-0 {
            width: 15vw;
            top: 10%;
            left: 9%;
        }
        #box-1 {
            left: 24%;
            top: 18%;
        }
        #box-2 {
            left: 40%;
            top: 10.5%;
        }
        #box-3 {
            left: 56%;
            top: 16%;
        }
        #box-4 {
            left: 72%;
            top: 9%;
        }
        .line {
            position: absolute;
            display: block;
            z-index: 1;
        }
        #line-1 {
            border-top: 0.4vh solid $colorLighter;
            width: 2.5%;
            transform: skewY(-50deg);
            left: 21%;
            top: 10%;
            border-radius: 70%;
        }
        #line-2 {
            border-left: 0.4vh dashed $colorLighter;
            border-bottom: 0.4vh dashed $colorLighter;
            width: 9%;
            height: 3%;
            left: 15%;
            top: 18.5%;
            border-bottom-left-radius: 100%;
        }
        #line-3 {
            border-right: 0.4vh dashed $colorLighter;
            border-bottom: 0.4vh dashed $colorLighter;
            width: 8%;
            height: 5%;
            left: 38%;
            top: 16%;
            border-bottom-right-radius: 100%;
        }
        #line-4 {
            border-top: 0.4vh dashed $colorLighter;
            border-right: 0.4vh dashed $colorLighter;
            width: 4%;
            height: 2%;
            left: 54%;
            top: 15.3%;
            border-top-right-radius: 100%;
        }
        #line-5 {
            border-bottom: 0.4vh dashed $colorLighter;
            border-right: 0.4vh dashed $colorLighter;
            width: 5%;
            height: 5%;
            left: 70%;
            top: 15.4%;
            border-bottom-right-radius: 100%;
        }
        .part-name {
            font-size: 180%;
            font-family: $fontSecondary;
            position: absolute;
            left: 24%;
            top: 8%;
        }
    }
}
</style>
