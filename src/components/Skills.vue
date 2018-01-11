<template>
    <section id="skills" class="container-fluid">
        <h2>My Skills</h2>
        <div class="horizontal-center"><div class="underline"></div></div>
        <div class="center-content col-md-8 offset-md-2 col-sm-10 offset-sm-1 col-xs-12 offset-xs-0">
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
            ready: 0,
            unwatch: this.$watch("scrolled", function() {
                if (this.scrolled === true) {
                    this.unwatch();
                    for (let i = 0; i < this.skills.length; i++) {
                        setTimeout(() => {
                            this.increment();
                        }, 50 * i);
                    }
                }
            })
        };
    },
    mounted() {
        let waypoint = new Waypoint({
            element: document.getElementById("skills"),
            handler: () => {
                console.log("skills");
                this.scrollSkills = true;
                waypoint.destroy();
            },
            offset: 600
        });
    },
    methods: {
        increment() {
            this.ready++;
            console.log(this.ready);
        }
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
        .skill-row {
            display: flex;
            flex-direction: row;
            align-items: center;
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
                /* width: 80%; */
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
