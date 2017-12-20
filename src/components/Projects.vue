<template>
    <section id="projects" class="container-fluid">
        <h2>My Works</h2>
        <div class="horizontal-center"><div class="underline"></div></div>
        <div class="center-content">
            <p class="description">Currently I'm working mostly on the front-end using frameworks like
                VueJS on the web and React-Native on mobile.
                 Here are my latest solo projects.</p>
        </div>
        <div class="center-content">
            <div
                v-for="(project, index) in projects"
                class="project-item"
                data-scale="1.6"
                :class="{ 'active': active == index }"
                :key="index"
                :data-image="{ background: 'url(/static/projects/'+project.folder+project.backdrop+')' }"
            >
                <div
                    class="project-image"
                    :class="{ 'hovered': hovered == index, 'unhovered': !hovered == index }"
                    :style="{ background: 'url(/static/projects/'+project.folder+project.backdrop+')' }"
                    @mouseleave="toggleHover(-1)"
                    v-on:mouseover="toggleHover(index)"
                />
                <div
                    class="cover"
                    :class="{ 'open-cover': hovered == index }"
                >
                    <div class="project-name">{{project.name}}</div>
                    <div class="project-summary">{{project.summary}}</div>
                    <b-button
                        class="project-btn"
                        @mouseup="toggleProjectInfo(index)"
                    >Details</b-button>
                </div>

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
                    gitLink: "https://github.com/moilamar/portfolio",
                    tags: [
                        ["devicon-vuejs-plain colored", "VueJS"],
                        ["devicon-bootstrap-plain colored", "Bootstrap"],
                        ["devicon-sass-original colored", "Sass"]
                    ]
                },
                {
                    name: "My Movie List",
                    summary:
                        "Lorem ipsum. Lorem ipsum. Lorem ipsum. Lorem ipsum. Lorem ipsum.",
                    folder: "My_Movie_List/",
                    backdrop: "mml.png",
                    images: [],
                    gitLink: "",
                    tags: [
                        ["devicon-vuejs-plain colored", "VueJS"],
                        ["devicon-sass-original colored", "Sass"],
                        ["devicon-android-plain colored", "Mobile/Hybrid"],
                        ["devicon-devicon-plain", "Onsen UI"]
                    ]
                },
                {
                    name: "Mesiäinen Hunaja",
                    summary:
                        "Lorem ipsum. Lorem ipsum. Lorem ipsum. Lorem ipsum. Lorem ipsum.",
                    folder: "Mesiainen_Wordpress/",
                    backdrop: "/mesishop.png",
                    images: [],
                    gitLink: "https://github.com/moilamar/film-app-mobile",
                    tags: [
                        ["devicon-wordpress-plain colored", "Wordpress"],
                        ["devicon-php-plain colored", "PHP"]
                    ]
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
                    gitLink: "https://github.com/Moilamar/3d-models",
                    tags: [["devicon-devicon-plain", "Blender"]]
                },
                {
                    name: "E-Commerce Admin Page",
                    summary:
                        "Lorem ipsum. Lorem ipsum. Lorem ipsum. Lorem ipsum. Lorem ipsum.",
                    folder: "Black_Banana_Admin/",
                    backdrop: "bb.jpg",
                    images: [],
                    gitLink: "",
                    tags: [
                        ["devicon-mysql-plain colored", "MySQL"],
                        ["devicon-php-plain colored", "PHP"],
                        ["devicon-react-original colored", "React"],
                        ["devicon-devicon-plain", "Material-UI"]
                    ]
                },
                {
                    name: "Music_Notebook",
                    summary:
                        "Lorem ipsum. Lorem ipsum. Lorem ipsum. Lorem ipsum. Lorem ipsum.",
                    folder: "Music_Notebook/",
                    backdrop: "logo.jpg",
                    images: [],
                    gitLink: "",
                    tags: [
                        ["devicon-react-original colored", "React-Native"],
                        ["devicon-android-plain colored", "Mobile"]
                    ]
                }
            ],
            active: null,
            hovered: -1
        };
    },
    methods: {
        toggleProjectInfo(index) {
            this.active = index;
        },
        toggleHover(index) {
            this.hovered = index;
        }
    },
    components: { Tag }
};
</script>

<style lang="scss">
@import "../styles/variables.scss";

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
        padding: 0 5vw 0vw 5vw;
        margin-top: 2vw;
        .description {
            font-size: 125%;
        }
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
    .cover {
        background: rgba(255, 255, 255, 0.8);
        position: absolute;
        width: 100%;
        height: 0;
        color: $colorDark;
        font-weight: 800;
        text-align: center;
        pointer-events: none;
        opacity: 0;
        .project-name {
            margin-top: 10%;
        }
        .project-summary {
            margin: 5% 10% 0 10%;
        }
        .project-btn {
            margin-top: 10%;
            pointer-events: initial;
            width: 40%;
            background: none;
            border: 3px solid $colorDark;
            color: $colorDark;
            font-weight: 800;
        }
    }
    .open-cover {
        animation: openCover 0.7s;
        height: 100%;
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
