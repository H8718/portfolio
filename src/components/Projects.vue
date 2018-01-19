<template>
    <section id="projects" class="container-fluid">
        <h2>My Works</h2>
        <div class="horizontal-center"><div class="underline"></div></div>
        <div class="center-content col-md-8 offset-md-2 col-sm-10 offset-sm-1 col-xs-12 offset-xs-0">
            <p class="description">Currently I'm working mostly on the front-end using frameworks like
                VueJS on the web and React-Native on mobile. Here are my latest solo projects.</p>
        </div>
        <div class="project-container col-md-10 offset-md-1 offset-sm-0">
            <div
                class="project-item"
                v-for="(project, index) in projects"
                data-scale="1.6"
                :key="index"
            >
                <div
                    class="project-image"
                    :style="{ background: 'url(/static/projects/'+project.folder+'main.jpg)' }"
                />
                <div
                    class="cover"
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
                        @click="toggleProjectInfo(index)"
                    >Details</b-button>
                </div>

            </div>
        </div>
        <Lightbox :enabled="modalEnabled">
            <component :is="ProjectInfo" :project="projects[active]"></component>
        </Lightbox>
    </section>
</template>

<script>
import Tag from "./Tag";
import Lightbox from "./Lightbox";
import ProjectInfo from "./ProjectInfo";

export default {
    data() {
        return {
            ProjectInfo,
            projects: [
                {
                    name: "Portfolio",
                    description:
                        "Lorem ipsum. Lorem ipsum. Lorem ipsum. Lorem ipsum. Lorem ipsum.",
                    folder: "Portfolio/",
                    logo: "main.jpg",
                    images: [],
                    source: "portfolio",
                    tags: [
                        ["devicon-vuejs-plain", "VueJS", "#41B883"],
                        ["devicon-bootstrap-plain", "Bootstrap", "#62488A"],
                        ["devicon-sass-original", "Sass", "#CF649A"]
                    ]
                },
                {
                    name: "My Movie List",
                    description:
                        "Lorem ipsum. Lorem ipsum. Lorem ipsum. Lorem ipsum. Lorem ipsum.",
                    folder: "My_Movie_List/",
                    logo: "logo.svg",
                    images: ["mml4.jpg", "mml2.jpg", "mml3.jpg"],
                    source: "film-app-mobile",
                    tags: [
                        ["devicon-vuejs-plain", "VueJS", "#41B883"],
                        ["devicon-sass-original", "Sass", "#CF649A"],
                        ["devicon-android-plain", "Mobile", "#A4CA39"]
                    ]
                },
                {
                    name: "Mesiäinen E-Commerce",
                    description:
                        "Lorem ipsum. Lorem ipsum. Lorem ipsum. Lorem ipsum. Lorem ipsum.",
                    folder: "Mesiainen_Wordpress/",
                    logo: "logo_cropped.jpg",
                    images: ["main.jpg", "mesishop2.jpg", "mesishop3.jpg"],
                    source: "hunaja-wp",
                    tags: [
                        ["devicon-wordpress-plain", "Wordpress", "#21759B"],
                        ["devicon-php-plain", "PHP", "#666699"]
                    ]
                },
                {
                    name: "3D Modeling",
                    description:
                        "Lorem ipsum. Lorem ipsum. Lorem ipsum. Lorem ipsum. Lorem ipsum.",
                    folder: "3D_Models/",
                    logo: "main.jpg",
                    images: [
                        "back_of_audience.jpg",
                        "behind_piano.jpg",
                        "insides3.jpg",
                        "textures.jpg"
                    ],
                    source: "3d-models",
                    tags: [["devicon-devicon-plain", "Blender", "#EA8E33"]]
                },
                {
                    name: "E-Commerce Admin Page",
                    description:
                        "Lorem ipsum. Lorem ipsum. Lorem ipsum. Lorem ipsum. Lorem ipsum.",
                    folder: "Black_Banana_Admin/",
                    logo: "main.jpg",
                    images: ["bb.jpg", "bb2.jpg", "bbdb.jpg", "main.jpg"],
                    tags: [
                        ["devicon-mysql-plain", "MySQL", "#00618A"],
                        ["devicon-php-plain", "PHP", "#666699"],
                        ["devicon-react-original", "React", "#00D8FF"]
                    ]
                },
                {
                    name: "Music Notebook",
                    description:
                        "Lorem ipsum. Lorem ipsum. Lorem ipsum. Lorem ipsum. Lorem ipsum.",
                    folder: "Music_Notebook/",
                    logo: "main.jpg",
                    images: [],
                    tags: [
                        ["devicon-react-original", "React", "#00D8FF"],
                        ["devicon-android-plain", "Mobile", "#A4CA39"]
                    ]
                }
            ],
            active: null,
            modalEnabled: false
        };
    },
    methods: {
        toggleProjectInfo(index) {
            this.active = index;
            this.modalEnabled = !this.modalEnabled;
        }
    },
    components: {
        Tag,
        Lightbox,
        ProjectInfo
    }
};
</script>

<style lang="scss">
@import "../styles/variables.scss";

#projects {
    background-color: $colorLighter;
    height: auto;
    .modal {
        width: 900px !important;
        height: 100%;
    }
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
        transition: opacity 0.5s;
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
    transition: height 0.5s;
    .project-image {
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background-position: center center !important;
        background-repeat: no-repeat !important;
        background-size: cover !important;
        transition: transform 0.7s !important;
    }
    .cover {
        background: rgba(255, 255, 255, 0.85);
        position: relative;
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
            cursor: pointer;
        }
    }
}
.project-item:hover {
    .project-image {
        transform: scale(1.3);
    }
    .cover {
        opacity: 1;
        height: 100%;
    }
}
a {
    text-decoration: none !important;
    color: white;
}
</style>
