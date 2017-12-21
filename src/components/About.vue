<template>
  <section class="container-fluid smoothScroll" id="about">
        <h2>Who am I?</h2>
        <div class="horizontal-center"><div class="underline"></div></div>
        <!-- <b-row>
            <div id="left">
                <img
                    id="portrait"
                    src="../assets/portrait.png"
                />
            </div>
            <div id="right">
            </div>
        </b-row> -->

        <div id="timeline">
            <div
                class="timeline-box"
                id="box-0"
                :class="{ 'show': shown[0] }"
            >
                <img
                id="portrait"
                    src="../assets/portrait.png"
                />
            </div>
            <div class="line" id="line-1" />

            <div
                class="timeline-box"
                id="box-1"
                :class="{ 'show': shown[1] }"
            >
                <h3><i class="fa fa-user" /> Hobbies</h3>
                <p>I like playing the piano and computer games.</p>
            </div>
            <div
                class="timeline-box"
                id="box-2"
                :class="{ 'show': shown[2] }"
            >
                <h3><i class="fa fa-pencil" /> Studies</h3>
                <p>I currently study at JAMK to become a computer engineer.</p>
            </div>
            <div
                class="timeline-box"
                id="box-3"
                :class="{ 'show': shown[3] }"
            >
                <h3><i class="fa fa-diamond" /> Skills</h3>
                <p>I am a fast learner so I have picked up a lot of useful
                    skills for programming and other related things.
                </p>
            </div>
            <div
                class="timeline-box"
                id="box-4"
                :class="{ 'show': shown[4] }"
            >
                <h3><i class="fa fa-rocket" /> Future</h3>
                <p>After graduation, I want to improve my skills to become
                    a great full-stack developer.
                </p>
            </div>
        </div>
    </section>
</template>

<script>
export default {
    data() {
        return {
            shown: []
        };
    },
    mounted() {
        this.animateTimeline();
    },
    methods: {
        animateTimeline() {
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
    }
};
</script>

<style lang="scss">
@import "../styles/variables.scss";

#about {
    background: #3949ab;
    color: $colorLight;
    height: 85vh;
    padding-top: 10vh;
    .underline {
        border-color: $colorLighter;
    }
    #timeline {
        .timeline-box {
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
                color: white;
                padding: 2vh;
                font-size: 110%;
            }
        }
        #portrait {
            width: 100%;
            border-radius: 18vh;
            padding: 1vh;
            border: 0.5vh solid $colorLighter;
        }
        .show {
            -webkit-transition: opacity 2s ease;
            -moz-transition: opacity 2s ease;
            -o-transition: opacity 2s ease;
            transition: opacity 2s ease;
            opacity: 1;
        }
        #box-0 {
            width: 15%;
            top: 8%;
            left: 10%;
        }
        #box-1 {
            left: 20%;
            top: 17%;
        }
        #box-2 {
            left: 36%;
            top: 10.5%;
        }
        #box-3 {
            left: 55%;
            top: 16%;
        }
        #box-4 {
            left: 72%;
            top: 9%;
        }
        .line {
            border: 0.4vh dashed $colorLighter;
            position: absolute;
            display: block;
        }
        #line-1 {
            width: 3%;
            transform: skewY(-50deg);
            left: 15%;
            top: 8.5%;
            border: solid;
        }
    }

    /* #left {
            width: 50vw;
            text-align: center;
            #portrait {
                width: 35vh;
                border-radius: 20vh;
            }
        }
        #right {
            width: 50vw;
        } */
    /* } */
}
</style>
