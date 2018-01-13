<template>
    <section id="projects" class="container-fluid">
        <h2>My Works</h2>
        <div class="horizontal-center"><div class="underline"></div></div>
        <div class="center-content col-md-8 offset-md-2 col-sm-10 offset-sm-1 col-xs-12 offset-xs-0">
            <p class="description">Currently I'm working mostly on the front-end using frameworks like
                VueJS on the web and React-Native on mobile. Here are my latest solo projects.</p>
        </div>
        <div
            class="project-container col-md-10 offset-md-1 offset-sm-0"
            :class="{ 'fade-out': fadeOut }"
            v-if="active === null"
        >
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
                    :style="{ background: 'url(/static/projects/'+project.folder+'main.jpg)' }"
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

        <modal name="project-info">
            <div class="project-info">
                asdasd
                <!-- <div>
                    <div class="project-logo">
                        <img :src="'/static/projects/'+projects[active].folder+projects[active].logo" />
                    </div>
                    <div class="project-name">{{ projects[active].name }}</div>
                </div>
                <div class="project-description">
                    <h3>Description:</h3>
                    {{ projects[active].description }}
                </div>
                <div class="project-technologies">
                    <Tag
                        v-for="(tag, index) in projects[active].tags"
                        :key="index"
                        :icon="tag[0]"
                        :text="tag[1]"
                        :color="tag[2]"
                    />
                </div>
                <div class="project-images">
                    <img
                        v-for="(image, index) in projects[active].images"
                        :key="index"
                        :src="'/static/projects/'+projects[active].folder+image"
                    />
                </div>
                <div class="project-source">
                    <h3>Source code:</h3>
                    <a :href="projects[active].source" target="_blank">Github</a>
                </div> -->
            </div>
        </modal>

        <!--
        <div
            v-if="active != null"
            :class="{ 'fade-in': fadeIn }"
            class="project-info-container col-sm-12 col-md-8 offset-md-2"
        >
            <div class="project-info">
                <div>
                    <div class="project-logo">
                        <img :src="'/static/projects/'+projects[active].folder+projects[active].logo" />
                    </div>
                    <div class="project-name">{{ projects[active].name }}</div>
                </div>
                <div class="project-description">
                    <h3>Description:</h3>
                    {{ projects[active].description }}
                </div>
                <div class="project-technologies">
                    <Tag
                        v-for="(tag, index) in projects[active].tags"
                        :key="index"
                        :icon="tag[0]"
                        :text="tag[1]"
                        :color="tag[2]"
                    />
                </div>
                <div class="project-images">
                    <img
                        v-for="(image, index) in projects[active].images"
                        :key="index"
                        :src="'/static/projects/'+projects[active].folder+image"
                    />
                </div>
                <div class="project-source">
                    <h3>Source code:</h3>
                    <a :href="projects[active].source" target="_blank">Github</a>
                </div>
            </div>

            <div class="inactive-list">
                <div
                    class="project-item"
                    v-for="(project, index) in projects"
                    v-if="active != index"
                    data-scale="1.6"
                    :class="{
                        'active': active == index,
                        'inactive': active != index && Number.isInteger(active),
                        'animate-out': animateOut == index
                    }"
                    :key="index"
                >
                    <div
                        v-if="active != index"
                        class="project-image"
                        :style="{ background: 'url(/static/projects/'+project.folder+'main.jpg)' }"
                    />
                    <div
                        class="cover"
                        v-if="active != index"
                    >
                        <div class="project-name">{{ project.name }}</div>
                        <b-button
                            class="project-btn"
                            @mouseup="changeCurrentProject(index)"
                        >Details</b-button>
                    </div>
                </div>
            </div>
            -->
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
                    description:
                        "Lorem ipsum. Lorem ipsum. Lorem ipsum. Lorem ipsum. Lorem ipsum.",
                    folder: "Portfolio/",
                    logo: "main.jpg",
                    images: [],
                    source: "https://github.com/moilamar/portfolio",
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
                    images: [],
                    source: "",
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
                    images: [],
                    source: "https://github.com/moilamar/film-app-mobile",
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
                    source: "https://github.com/Moilamar/3d-models",
                    tags: [["devicon-devicon-plain", "Blender", "#EA8E33"]]
                },
                {
                    name: "E-Commerce Admin Page",
                    description:
                        "Lorem ipsum. Lorem ipsum. Lorem ipsum. Lorem ipsum. Lorem ipsum.",
                    folder: "Black_Banana_Admin/",
                    logo: "main.jpg",
                    images: [],
                    source: "",
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
                    source: "",
                    tags: [
                        ["devicon-react-original", "React", "#00D8FF"],
                        ["devicon-android-plain", "Mobile", "#A4CA39"]
                    ]
                }
            ],
            active: null,
            fadeIn: false,
            fadeOut: false,
            animateOut: false,
            animateIn: false
        };
    },
    methods: {
        toggleProjectInfo(index) {
            /* this.fadeOut = true;
            setTimeout(() => {
                this.active = index;
                this.fadeIn = true;
                console.log(this.active);
            }, 500); */
            /* this.active = index;
            console.log("active: " + this.active); */
            this.active = index;
            this.$modal.show("project-info", {
                project: this.active ? this.projects[this.active] : null
            });
        },
        changeCurrentProject(index) {
            this.animateOut = index;
            setTimeout(() => {
                this.active = index;
                this.animateIn = true;
            }, 500);
        }
    },
    components: { Tag }
};
</script>

<style lang="scss">
@import "../styles/variables.scss";

#projects {
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
        transition: opacity 0.5s;
    }
    .fade-out {
        opacity: 0;
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
.animate-out {
    height: 0 !important;
}
.project-info-container {
    margin-top: 2vw;
    display: flex;
    flex-direction: row;
    @media screen and (max-width: 500px) {
        flex-direction: column;
    }
    color: white;
    opacity: 0;
    transition: opacity 0.5s;
    .project-info {
        width: 75%;
        height: 75vh;
        background: white;
        border: 1px solid black;
        border-radius: 4px;
        display: flex;
        flex-direction: column;
        @media screen and (max-width: 500px) {
            width: 100%;
        }
        div:nth-child(1) {
            background: lightcyan;
            align-self: center;
            padding: 1vh;
            .project-logo {
                display: inline-block;
                background: white;
                width: 11vh;
                height: auto;
                margin-top: 3vh;
                margin-left: 3vh;
                border-radius: 100%;
                img {
                    width: 100%;
                    height: auto;
                    padding: 0.5vh;
                    border-radius: 100%;
                    box-shadow: 2px 2px 4px #444;
                }
            }
            .project-name {
                display: inline-block;
                margin-left: 5vh;
                font-size: 150%;
            }
        }
        .project-description {
            background: lightblue;
            padding: 3vh;
        }
        .project-technologies {
            background: lightsteelblue;
            padding: 3vh;
        }
        .project-images {
            background: lightcoral;
            width: 100%;
            img {
                width: 22%;
                margin-left: 1.5%;
                margin-right: 1.5%;
                margin-top: 1vh;
                margin-bottom: 1vh;
            }
        }
        .project-source {
            background: lightseagreen;
            padding: 3vh;
        }
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
.fade-in {
    opacity: 1;
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
</style>
