<template>
    <section id="projects" class="container-fluid">
        <h2>Projects</h2>
        <div class="center-content">
            <div
                v-for="(project, index) in projects"
                class="project-item"
                :class="{ 'active': active == index }"
                :key="index"
                :style="{ background: 'url(/static/projects/'+project.folder+project.backdrop+')' }"
                @mouseup="toggleProjectInfo(index)"
            >
                <div class="project-name">{{project.name}}</div>
                <div class="project-summary">{{project.summary}}</div>
            </div>
        </div>
    </section>
</template>

<script>
export default {
    data() {
        return {
            projects: [
                {
                    name: "Test",
                    summary:
                        "Lorem ipsum. Lorem ipsum. Lorem ipsum. Lorem ipsum. Lorem ipsum.",
                    folder: "test",
                    backdrop: "",
                    images: [],
                    technologies: [],
                    gitLink: ""
                },
                {
                    name: "Test",
                    summary:
                        "Lorem ipsum. Lorem ipsum. Lorem ipsum. Lorem ipsum. Lorem ipsum.",
                    folder: "test",
                    backdrop: "",
                    images: [],
                    technologies: [],
                    gitLink: ""
                },
                {
                    name: "Portfolio",
                    summary:
                        "Lorem ipsum. Lorem ipsum. Lorem ipsum. Lorem ipsum. Lorem ipsum.",
                    folder: "portfolio",
                    backdrop: "",
                    images: [],
                    technologies: [],
                    gitLink: ""
                },
                {
                    name: "3D Modeling",
                    summary:
                        "Lorem ipsum. Lorem ipsum. Lorem ipsum. Lorem ipsum. Lorem ipsum.",
                    /* backdrop: require("../assets/projects/3D_Models/full.png"), */
                    folder: "3D_Models/",
                    backdrop: "full.png",
                    images: [
                        "back_of_audience.png",
                        "behind_piano.png",
                        "insides3.png",
                        "details4.png",
                        "textures.png"
                    ],
                    technologies: ["blender"],
                    gitLink: "https://github.com/Moilamar/3d-models"
                },
                {
                    name: "Test",
                    summary:
                        "Lorem ipsum. Lorem ipsum. Lorem ipsum. Lorem ipsum. Lorem ipsum.",
                    folder: "test",
                    backdrop: "",
                    images: [],
                    technologies: [],
                    gitLink: ""
                }
            ],
            active: null
        };
    },
    methods: {
        toggleProjectInfo(index) {
            this.active = index;
        }
    }
};
</script>

<style lang="scss">
$colorMain: #f9aa39;
$colorLight: #fff;
$colorDark: #222;

#projects {
    background-color: #fafafa;
    h2 {
        color: $colorDark;
    }
}
.project-item {
    display: flex;
    flex-direction: column;
    flex-wrap: wrap;
    align-items: center;
    width: 40vh;
    height: 30vh;
    background-size: cover !important;
    border-radius: 2px;
    color: $colorLight;
    border: 1px solid black;
    .project-name {
        margin-top: 10%;
    }
    .project-summary {
        margin: 5% 10% 0 10%;
    }
}
.active {
    width: 50vh;
    height: 40vh;
}
</style>
