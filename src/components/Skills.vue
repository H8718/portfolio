<template>
    <section id="skills">
        <h2>My Skills</h2>
        <div class="underline"></div>
        <div class="col-md-8 offset-md-2 col-sm-10 offset-sm-1 col-xs-12 offset-xs-0">
            <p class="description">Here's a list of technologies and software that I use and an estimate of my ability.</p>
        </div>
        <div class="container col-lg-6 offset-lg-3 col-md-10 offset-md-1">
            <div
                v-for="(skill, index) in skills"
                :key="index"
                class="skill-row"
            >
                <span class="skill-name">
                    <i :class="skill.icon" /> {{ skill.name }}
                </span>
                <div class="skill-bar-container">
                    <div
                        class="skill-bar"
                        :style="{ width: skill.level + '%' }"
                    >
                        <div
                            class="skill-bar-fill"
                            :class="{ 'animate-fill': ready > index }"
                        />
                    </div>
                </div>
            </div>
        </div>

    </section>
</template>

<script>
export default {
    data() {
        return {
            skills: [
                { name: "HTML", level: 100 },
                { name: "JavaScript", level: 95 },
                { name: "CSS + SASS", level: 90 },
                { name: "Vue", level: 85 },
                { name: "React", level: 80 },
                { name: "PHP", level: 70 },
                { name: "MySQL", level: 70 },
                { name: "Blender", level: 60 },
                { name: "WordPress", level: 60 },
                { name: "Photoshop", level: 50 },
                { name: "Illustrator", level: 40 }
            ],
            ready: 0
        };
    },
    mounted() {
        let waypoint = new Waypoint({
            element: document.getElementById("skills"),
            handler: () => {
                for (let i = 0; i < this.skills.length; i++) {
                    setTimeout(() => {
                        this.increment();
                    }, 50 * i);
                }
                waypoint.destroy();
            },
            offset: 600
        });
    },
    methods: {
        increment() {
            this.ready++;
        }
    },
    props: ["scrolled"]
};
</script>

<style lang="scss">
@import "../styles/variables.scss";
@import "../styles/mixins.scss";

#skills {
    background-color: $colorLighter;
    padding-bottom: 5em;
    padding-top: 2em;
    h2 {
        color: $colorDark;
    }
    .container {
        @include flexbox(column);
        .skill-row {
            @include flexbox(row, null, center);
            margin-bottom: 0.5em;
            width: 100%;
            position: relative;
            .skill-name {
                position: relative;
                width: 18%;
            }
            .skill-bar-container {
                width: 80%;
                position: relative;
                .skill-bar {
                    height: 1.1em;
                    position: relative;
                    .skill-bar-fill {
                        background: $colorPrimary;
                        height: 100%;
                        position: relative;
                        width: 0%;
                        border-radius: 2px;
                        @include transition(width, 1.5s, ease);
                    }
                    .animate-fill {
                        width: 100%;
                    }
                }
            }
            @media screen and (max-width: $sizeSm) {
                margin-left: 3%;
                .skill-name {
                    width: 25%;
                    font-size: 95%;
                }
                .skill-bar-container {
                    width: 70%;
                }
            }
        }
    }
}
</style>
