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
                ></div>
            </div>
        </div>

    </section>
</template>

<script>
export default {
    data() {
        return {
            skills: [
                { name: "HTML", level: 90, icon: "" },
                { name: "JavaScript", level: 85, icon: "" },
                { name: "CSS + SASS", level: 80, icon: "" },
                { name: "Vue", level: 80, icon: "" },
                { name: "PHP", level: 75, icon: "" },
                { name: "MySQL", level: 75, icon: "" },
                { name: "Linux", level: 70, icon: "" },
                { name: "React", level: 65, icon: "" },
                { name: "WordPress", level: 60, icon: "" },
                { name: "Photoshop", level: 50, icon: "" },
                { name: "Blender", level: 55, icon: "" },
                { name: "Illustrator", level: 40, icon: "" },
                /* { name: "Java/C#", level: 40, icon: "" }, */
                /* { name: "NodeJS", level: 40, icon: "" } */
            ]
        };
    }
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
    padding-bottom: 6vw;
    h2 {
        color: $colorDark;
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
                background: $colorMain;
                position: relative;
                width: 87%;
                
            }
        }
    }
}
</style>
