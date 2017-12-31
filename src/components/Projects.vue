<template>
    <section id="projects" class="container-fluid">
        <h2>My Works</h2>
        <div class="horizontal-center"><div class="underline"></div></div>
        <div class="center-content col-md-8 offset-md-2 col-sm-10 offset-sm-1 col-xs-12 offset-xs-0">
            <p class="description">Currently I'm working mostly on the front-end using frameworks like
                VueJS on the web and React-Native on mobile. Here are my latest solo projects.</p>
        </div>
        <div class="center-content">
            <div
                class="project-item"
                v-for="(project, index) in projects"
                data-scale="1.6"
                :class="{ 'active': active == index }"
                :key="index"
                :data-image="{ background: 'url(/static/projects/'+project.folder+project.backdrop+')' }"
            >
                <div
                    v-if="active != index"
                    class="project-image"
                    :style="{ background: 'url(/static/projects/'+project.folder+project.backdrop+')' }"
                />
                <div 
                    class="cover"
                    v-if="active != index"
                >
                    <div class="project-name">{{ project.name }}</div>
                    <div class="project-summary">{{ project.summary }}</div>
                    <b-button
                        class="project-btn"
                        @mouseup="toggleProjectInfo(index)"
                    >Details</b-button>
                </div>

                <div class="details">
                    <h3>{{ project.name }}</h3>
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
            /* hovered: -1 */
        };
    },
    methods: {
        toggleProjectInfo(index) {
            this.active = index;
        }
    },
    components: { Tag }
};
</script>

<style lang="scss">
@import "../styles/variables.scss";

#projects {
    /* background-color: $colorDark; */
    background-color: $colorLighter;
    -webkit-transition: background-color 1000ms linear;
    -ms-transition: background-color 1000ms linear;
    transition: background-color 1000ms linear;
    padding-bottom: 6vw;
    h2 {
        color: $colorDark;
    }
    .center-content {
        padding: 0 5vw 0vw 5vw;
        margin-top: 2vw;
    }
}
.project-item {
    display: flex;
    flex-direction: column;
    flex-wrap: wrap;
    align-items: center;
    width: 42vh;
    height: 32vh;
    color: $colorLighter;
    position: relative;
    overflow: hidden;
    transition: width 1s, height 1s;
    .project-image {
        /* position: absolute; */
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background-position: center center !important;
        background-repeat: no-repeat !important;
        transition: transform 0.5s ease-out !important;
    }
    .cover {
        background: rgba(255, 255, 255, 0.8);
        position: absolute;
        width: 100%;
        height: 0;
        color: $colorDark;
        font-weight: 800;
        text-align: center;
        opacity: 0;
        transition: opacity 0.6s, height 0.8s;
        .project-name {
            margin-top: 10%;
        }
        .project-summary {
            margin: 5% 10% 0 10%;
        }
        .project-btn {
            margin-top: 10%;
            width: 40%;
            background: none;
            border: 3px solid $colorDark;
            color: $colorDark;
            font-weight: 800;
        }
    }
}
.project-item:hover {
    .project-image {
        transform: scale(1.2);
    }
    .cover {
        opacity: 1;
        height: 100%;
    }   
}
.active {
    /* transform: scale(1.5, 2); */
    width: 52vh;
    height: 42vh;
}
.hovered {
    transform: scale(1.2);
}
.unhovered {
    transform: scale(1);
}
</style>
