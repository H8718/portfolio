<template>
    <section id="projects" class="container-fluid">
        <h2>My Works</h2>
        <div class="horizontal-center"><div class="underline"></div></div>
        <div class="center-content col-md-8 offset-md-2 col-sm-10 offset-sm-1 col-xs-12 offset-xs-0">
            <p class="description">Currently I'm working mostly on the front-end using frameworks like
                VueJS on the web and React-Native on mobile. Here are my latest solo projects.</p>
        </div>
        <div class="center-content col-md-10 offset-md-1">
            <div
                class="project-item"
                v-for="(project, index) in projects"
                data-scale="1.6"
                :class="{ 'active': active == index, 'inactive': active != index && Number.isInteger(active) }"
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
                    <div class="project-tags">
                        <Tag
                            v-for="(tag, index) in project.tags"
                            :key="index"
                            :icon="tag[0]"
                            :text="tag[1]"
                            :color="tag[2]"
                        />
                        </div>
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
                        ["devicon-vuejs-plain", "VueJS", "#41B883"],
                        ["devicon-bootstrap-plain", "Bootstrap", "#62488A"],
                        ["devicon-sass-original", "Sass", "#CF649A"]
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
                        ["devicon-vuejs-plain", "VueJS", "#41B883"],
                        ["devicon-sass-original", "Sass", "#CF649A"],
                        ["devicon-android-plain", "Mobile", "#A4CA39"],
                        ["devicon-devicon-plain", "Onsen UI", "#E7372F"]
                    ]
                },
                {
                    name: "Mesiäinen E-Commerce",
                    summary:
                        "Lorem ipsum. Lorem ipsum. Lorem ipsum. Lorem ipsum. Lorem ipsum.",
                    folder: "Mesiainen_Wordpress/",
                    backdrop: "/mesishop.png",
                    images: [],
                    gitLink: "https://github.com/moilamar/film-app-mobile",
                    tags: [
                        ["devicon-wordpress-plain", "Wordpress", "#666699"],
                        ["devicon-php-plain", "PHP", "#666699"]
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
                    tags: [["devicon-devicon-plain", "Blender", "#EA8E33"]]
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
                        ["devicon-mysql-plain", "MySQL", "#00618A"],
                        ["devicon-php-plain", "PHP", "#666699"],
                        ["devicon-react-original", "React", "#00D8FF"]
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
                        ["devicon-react-original", "React-Native", "#00D8FF"],
                        ["devicon-android-plain", "Mobile", "#A4CA39"]
                    ]
                }
            ],
            active: null
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
    height: 110vh;
    h2 {
        color: $colorDark;
    }
    .center-content {
        padding: 0 5vw 0vw 5vw;
        margin-top: 2vw;
        position: relative;
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
    position: absolute;
    overflow: hidden;
    transition: width 1s, height 1s, top 1s, left 1s;

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
.project-item:nth-child(1) {
    left: 0;
    top: 0;
}
.project-item:nth-child(2) {
    left: 42vh;
    top: 0;
}
.project-item:nth-child(3) {
    left: 84vh;
    top: 0;
}
.project-item:nth-child(4) {
    left: 0;
    top: 32vh;
}
.project-item:nth-child(5) {
    left: 42vh;
    top: 32vh;
}
.project-item:nth-child(6) {
    left: 84vh;
    top: 32vh;
}
.active {
    width: 100%;
    height: 60vh;
    background: $colorMain;
    left: 0 !important;
    top: 0 !important;
}
.inactive {
    width: 16.66%;
    height: 17vh;
    top: 60vh !important;
    .cover {
        .project-tags {
            display: none;
        }
    }
    /* transform: translateY(20vh); */
}
.inactive:nth-of-type(1) {
    left: 0 !important;
}
.inactive:nth-of-type(2) {
    left: 16.666% !important;
}
.inactive:nth-of-type(3) {
    left: 33.33% !important;
}
.inactive:nth-of-type(4) {
    left: 50% !important;
}
.inactive:nth-of-type(5) {
    left: 66.66% !important;
}
.inactive:nth-of-type(6) {
    left: 83.33% !important;
}
.hovered {
    transform: scale(1.2);
}
.unhovered {
    transform: scale(1);
}
</style>
