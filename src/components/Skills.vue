<template>
    <section id="skills">
        <h2>My Skills</h2>
        <div class="underline"></div>
        <div class="col-md-8 offset-md-2 col-sm-10 offset-sm-1 col-xs-12 offset-xs-0">
            <p class="description">Here's a list of technologies and software that I use and an estimate of my ability.</p>
        </div>

        <div class="container col-lg-6 col-lg-offset-3 col-md-10 col-md-offset-1">
            <div
                v-for="(skill, index) in skills"
                :key="index"
                class="skill-row"
            >
                <span class="skill-name">
                    <i :class="skill.icon" /> {{ skill.name }}
                </span>
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

    </section>
</template>

<script>
export default {
    data() {
        return {
            skills: [
                { name: "HTML", level: 80, icon: "" },
                { name: "JavaScript", level: 75, icon: "" },
                { name: "CSS + SASS", level: 70, icon: "" },
                { name: "Vue", level: 70, icon: "" },
                { name: "PHP", level: 65, icon: "" },
                { name: "MySQL", level: 65, icon: "" },
                { name: "Linux", level: 55, icon: "" },
                { name: "React", level: 55, icon: "" },
                { name: "WordPress", level: 50, icon: "" },
                { name: "Blender", level: 45, icon: "" },
                { name: "Photoshop", level: 40, icon: "" },
                { name: "Illustrator", level: 30, icon: "" }
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
    padding-bottom: 5vw;
    h2 {
        color: $colorDark;
    }
    .description {
        padding: 0 5vw 0vw 5vw;
        margin-top: 2vw;
    }
    .container {
        margin-top: 2vw;
        @include flexbox(column);
        .skill-row {
            @include flexbox(row, null, center);
            margin-bottom: 1vh;
            width: 100%;
            position: relative;
            .skill-name {
                position: relative;
                width: 13%;
                margin-right: 3vh;
            }
            .skill-bar {
                height: 2vh;
                position: relative;
                .skill-bar-fill {
                    background: $colorPrimary;
                    height: 100%;
                    position: relative;
                    width: 0%;
                    @include transition(width, 1.5s, ease);
                }
                .animate-fill {
                    width: 100%;
                }
            }
        }
    }
}
</style>
