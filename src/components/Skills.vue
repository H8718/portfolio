<template>
    <section id="skills" class="container-fluid">
        <h2>My Skills</h2>
        <div class="horizontal-center"><div class="underline"></div></div>
        <div class="center-content col-md-8 offset-md-2 col-sm-10 offset-sm-1 col-xs-12 offset-xs-0">
            <p class="description">Here's a decent estimation of how well I understand different technologies.</p>
        </div>

        <div class="container">
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
                        :class="{ 'animate-fill': ready }"
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
                { name: "HTML", level: 85, icon: "" },
                { name: "JavaScript", level: 80, icon: "" },
                { name: "CSS + SASS", level: 75, icon: "" },
                { name: "Vue", level: 75, icon: "" },
                { name: "PHP", level: 70, icon: "" },
                { name: "MySQL", level: 70, icon: "" },
                { name: "Linux", level: 65, icon: "" },
                { name: "React", level: 60, icon: "" },
                { name: "WordPress", level: 55, icon: "" },
                { name: "Photoshop", level: 45, icon: "" },
                { name: "Blender", level: 40, icon: "" },
                { name: "Illustrator", level: 35, icon: "" }
            ],
            ready: false,
            unwatch: this.$watch("scrolled", function() {
                if (this.scrolled === true) {
                    this.unwatch();
                    this.ready = true;
                }
            })
        };
    },
    props: ["scrolled"]
};
</script>

<style lang="scss">
@import "../styles/variables.scss";

#skills {
    /* background-color: $colorDark; */
    background-color: $colorLighter;
    -webkit-transition: background-color 1000ms linear;
    -ms-transition: background-color 1000ms linear;
    transition: background-color 1000ms linear;
    padding-bottom: 5vw;
    h2 {
        color: $colorDark;
    }
    .center-content {
        padding: 0 5vw 0vw 5vw;
        margin-top: 2vw;
    }
    .container {
        margin-top: 2vw;
        display: flex;
        flex-direction: column;
        width: 50%;
        /* different screen widths */
        .skill-row {
            display: flex;
            flex-direction: row;
            align-items: center;
            margin-bottom: 1vh;
            .skill-name {
                position: relative;
                width: 13%;
            }
            .skill-bar {
                height: 2vh;
                position: relative;
                width: 87%;
                .skill-bar-fill {
                    background: $colorMain;
                    height: 100%;
                    position: relative;
                    width: 0%;
                    transition: width 1.5s;
                }
                .animate-fill {
                    width: 100%;
                }
            }
        }
    }
}
</style>
