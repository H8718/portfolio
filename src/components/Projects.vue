<template>
    <section id="projects" class="container-fluid">
        <h2>My Works</h2>
        <div class="horizontal-center"><div class="underline"></div></div>
        <div class="center-content col-md-8 offset-md-2 col-sm-10 offset-sm-1 col-xs-12 offset-xs-0">
            <p class="description">Currently I'm working mostly on the front-end using frameworks like
                VueJS on the web and React-Native on mobile. Here are my latest solo projects.</p>
        </div>
        <div class="project-container col-md-10 offset-1" v-if="!active">
            <div
                class="project-item"
                v-for="(project, index) in projects"
                data-scale="1.6"
                :class="{ 'active': active == index, 'inactive': active != index && Number.isInteger(active) }"
                :key="index"
            >
                <div
                    v-if="active != index"
                    class="project-image"
                    :style="{ background: 'url(/static/projects/'+project.folder+'main.png)' }"
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

            </div>
        </div>
        <div v-if="active" class="project-info-container col-md-8 offset-2">
            <div class="project-info">
                <div class="project-name">{{ projects[active].name }}</div>
            </div>
            <div class="inactive-list">
                <div
                    class="project-item"
                    v-for="(project, index) in projects"
                    v-if="active != index"
                    data-scale="1.6"
                    :class="{ 'active': active == index, 'inactive': active != index && Number.isInteger(active) }"
                    :key="index"
                >
                    <div
                        v-if="active != index"
                        class="project-image"
                        :style="{ background: 'url(/static/projects/'+project.folder+'main.png)' }"
                    />
                    <div
                        class="cover"
                        v-if="active != index"
                    >
                        <div class="project-name">{{ project.name }}</div>
                        <b-button
                            class="project-btn"
                            @mouseup="toggleProjectInfo(index)"
                        >Details</b-button>
                    </div>
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
                    images: [],
                    gitLink: "",
                    tags: [
                        ["devicon-vuejs-plain", "VueJS", "#41B883"],
                        ["devicon-sass-original", "Sass", "#CF649A"],
                        ["devicon-android-plain", "Mobile", "#A4CA39"]
                    ]
                },
                {
                    name: "Mesiäinen E-Commerce",
                    summary:
                        "Lorem ipsum. Lorem ipsum. Lorem ipsum. Lorem ipsum. Lorem ipsum.",
                    folder: "Mesiainen_Wordpress/",
                    images: [],
                    gitLink: "https://github.com/moilamar/film-app-mobile",
                    tags: [
                        ["devicon-wordpress-plain", "Wordpress", "#21759B"],
                        ["devicon-php-plain", "PHP", "#666699"]
                    ]
                },
                {
                    name: "3D Modeling",
                    summary:
                        "Lorem ipsum. Lorem ipsum. Lorem ipsum. Lorem ipsum. Lorem ipsum.",
                    folder: "3D_Models/",
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
                    images: [],
                    gitLink: "",
                    tags: [
                        ["devicon-mysql-plain", "MySQL", "#00618A"],
                        ["devicon-php-plain", "PHP", "#666699"],
                        ["devicon-react-original", "React", "#00D8FF"]
                    ]
                },
                {
                    name: "Music Notebook",
                    summary:
                        "Lorem ipsum. Lorem ipsum. Lorem ipsum. Lorem ipsum. Lorem ipsum.",
                    folder: "Music_Notebook/",
                    images: [],
                    gitLink: "",
                    tags: [
                        ["devicon-react-original", "React", "#00D8FF"],
                        ["devicon-android-plain", "Mobile", "#A4CA39"]
                    ]
                }
            ],
            active: null
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
    height: auto;
    h2 {
        color: $colorDark;
    }
    .center-content {
        padding: 0 5vw 0vw 5vw;
        margin-top: 2vw;
    }
    .project-container {
        position: relative !important;
        margin-top: 2vw;
        width: 100%;
        display: flex;
        flex-wrap: wrap;
        justify-content: center;
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
    transition: width 1s, height 1s, top 1s, left 1s;

    .project-image {
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background-position: center center !important;
        background-repeat: no-repeat !important;
        background-size: cover !important;
        transition: transform 0.5s ease-out !important;
    }
    .cover {
        background: rgba(255, 255, 255, 0.85);
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
        .project-tags {
            margin: 7% 0% 0 0%;
            display: flex;
            flex-direction: row;
            justify-content: center;
            align-items: center;
        }
        .project-btn {
            margin-top: 13%;
            width: 40%;
            background: none;
            border: 0.3vh solid $colorDark;
            color: $colorDark;
            font-weight: 800;
        }
    }
}
.project-info-container {
    margin-top: 2vw;
    display: flex;
    flex-direction: row;
    .project-info {
        width: 75%;
        height:
        75vh;
        background: lightcyan;
    }
    .inactive-list {
        width: 25%;
        .inactive {
            width: 100%;
            height: 20%;
            .cover {
                .project-btn {
                    margin-top: 5%;
                }
            }
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
/* .active {
    width: 50%;
    height: 80vh;
    background: $colorMain;
    left: 0 !important;
}
.inactive {
    width: 20%;
    height: 18vh;
    right: 0px !important;
    .cover {
        .project-tags {
            display: none;
        }
    }
} */
/* .inactive:nth-of-type(1) {
    top: 0;
}
.inactive:nth-of-type(2) {
    top: 20%;
}
.inactive:nth-of-type(3) {
    top: 40%;
}
.inactive:nth-of-type(4) {
    top: 60%;
}
.inactive:nth-of-type(5) {
    top: 80%;
}
.inactive:nth-of-type(6) {
    top: 80%;
} */
.hovered {
    transform: scale(1.2);
}
.unhovered {
    transform: scale(1);
}
</style>
