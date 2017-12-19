<template>
    <section id="projects" class="container-fluid">
        <h2>Projects</h2>
        <div class="center-content">
            <div
                v-for="(project, index) in projects"
                class="project-item"
                data-scale="1.6"
                :class="{ 'active': active == index }"
                :key="index"
                :data-image="{ background: 'url(/static/projects/'+project.folder+project.backdrop+')' }"
                @mouseup="toggleProjectInfo(index)"
            >
                <div
                    class="project-image"
                    :class="{ 'hovered': hovered, 'unhovered': !hovered }"
                    :style="{ background: 'url(/static/projects/'+project.folder+project.backdrop+')' }"
                    @mouseleave="toggleHover()"
                    v-on:mouseover="toggleHover()"
                    v-on:mousemove="mouseMove()"
                />
                <div class="project-name">{{project.name}}</div>
                <div class="project-summary">{{project.summary}}</div>
            </div>
        </div>
    </section>
</template>

<script>
import Tag from "./Tag";

export default {
    data() {
        return {
            projects: [
                {
                    name: "Portfolio",
                    summary:
                        "Lorem ipsum. Lorem ipsum. Lorem ipsum. Lorem ipsum. Lorem ipsum.",
                    folder: "Portfolio/",
                    backdrop: "logo.png",
                    images: [],
                    technologies: [],
                    gitLink: ""
                },
                {
                    name: "My Movie List",
                    summary:
                        "Lorem ipsum. Lorem ipsum. Lorem ipsum. Lorem ipsum. Lorem ipsum.",
                    folder: "My_Movie_List/",
                    backdrop: "mml.png",
                    images: [],
                    technologies: [],
                    gitLink: ""
                },
                {
                    name: "Mesiäinen Hunaja",
                    summary:
                        "Lorem ipsum. Lorem ipsum. Lorem ipsum. Lorem ipsum. Lorem ipsum.",
                    folder: "Mesiainen_Wordpress/",
                    backdrop: "/mesishop.png",
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
                    name: "E-Commerce Admin Backend",
                    summary:
                        "Lorem ipsum. Lorem ipsum. Lorem ipsum. Lorem ipsum. Lorem ipsum.",
                    folder: "Black_Banana_Admin/",
                    backdrop: "bb.jpg",
                    images: [],
                    technologies: [],
                    gitLink: ""
                },
                {
                    name: "Music_Notebook",
                    summary:
                        "Lorem ipsum. Lorem ipsum. Lorem ipsum. Lorem ipsum. Lorem ipsum.",
                    folder: "Music_Notebook/",
                    backdrop: "logo.jpg",
                    images: [],
                    technologies: [],
                    gitLink: ""
                }
            ],
            active: null,
            hovered: false
        };
    },
    methods: {
        toggleProjectInfo(index) {
            this.active = index;
        },
        toggleHover() {
            this.hovered = !this.hovered;
        },
        mouseMove() {}
    },
    components: { Tag }
};
</script>

<style lang="scss">
$colorMain: #0d47a1;
$colorLight: #fff;
$colorDark: #212121;

#projects {
    /* background-color: $colorDark; */

    background-color: $colorLight;
    -webkit-transition: background-color 1000ms linear;
    -ms-transition: background-color 1000ms linear;
    transition: background-color 1000ms linear;

    h2 {
        color: $colorDark;
    }
    .center-content {
        padding: 0 5vw 0 5vw;
    }
}
.project-item {
    display: flex;
    flex-direction: column;
    flex-wrap: wrap;
    align-items: center;
    width: 45vh;
    height: 35vh;
    background-size: cover !important;
    color: $colorLight;

    position: relative;
    overflow: hidden;

    .project-image {
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background-repeat: no-repeat;
        background-position: center;
        background-size: cover;
        transition: transform 0.5s ease-out;
    }
    .project-name {
        margin-top: 10%;
    }
    .project-summary {
        margin: 5% 10% 0 10%;
    }
}
.animate-bg {
    background-color: $colorLight;
    -webkit-transition: background-color 1000ms linear;
    -ms-transition: background-color 1000ms linear;
    transition: background-color 1000ms linear;
}
.active {
    transform: scale(1.5, 2);
}
.hovered {
    transform: scale(1.2);
}
.unhovered {
    transform: scale(1);
}
</style>
