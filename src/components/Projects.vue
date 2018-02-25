<template>
    <section id="projects">
        <h2>My Works</h2>
        <div class="underline"></div>
        <div class="col-md-8 offset-md-2 col-sm-10 offset-sm-1 col-xs-12 offset-xs-0">
            <p class="description">Currently I'm working mostly on the front-end using frameworks like
                VueJS on the web and React-Native on mobile. Here are my latest solo projects.</p>
        </div>
        <div class="project-container col-lg-10 offset-lg-1 col-md-8 offset-md-2">
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
                <div class="cover">
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
                    description: [`My portfolio website, which you are on right now.
                        The purpose of the site is to tell something about myself, what I do and show what I'm capable of.
                        Another reason for building it is to use it for my Web visualization course at school.`,
                        `The website is built using VueJS framework for lightweight performance on the client
                        with Bootstrap and Sass for styling and layouts. The website is scaling and responsive
                        for mobile and desktop screens of most sizes. I use CSS transitions, animations and
                        dynamic classes with the help of Vue to create different kinds of animations and hover effects.`],
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
                    description: [`A hybrid mobile tracking application for movie enthusiasts. My Movie List allows its users
                        to keep track of movies that they've watched or plan to watch. It also features other things
                        like a list of movies currently showing at the theaters and upcoming movies.`, `The application
                        is built using Cordova, Onsen UI and VueJS libraries for my school's Mobile Application Development
                        course. All movie data used in the app comes from the TMDB API. The app will remain quite unfinished but it
                        was a great project for learning new technologies, programming techniques and working with external APIs.`],
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
                    description: [`An e-commerce website for a honey company. With this project, I focused on SEO, security measures and
                        common WordPress plugins, such as WooCommerce and Wordfence. I tried to use many different kinds of WordPress
                        plugins to learn as much as possible. Although I didn't create the theme myself, a lot of time went into
                        customization as well as creating custom components for the website.`,],
                    folder: "Mesiainen_Wordpress/",
                    logo: "logo_cropped.jpg",
                    images: ["main.jpg", "mesishop2.jpg", "mesishop3.jpg"],
                    source: "hunaja-wp",
                    tags: [
                        ["devicon-wordpress-plain", "WordPress", "#21759B"],
                        ["devicon-php-plain", "PHP", "#666699"]
                    ]
                },
                {
                    name: "3D Modeling",
                    description: [`A project for my 3D-modeling course assignment. My goal was to create an accurate replication of
                        Steinway and Sons' Model D grand piano with a nice orchestral stage as the background. It's created using Blender
                        and basic 3D-modeling techniques such as translating, scaling and other ways of manipulating simple meshes.`],
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
                    description: [`The backend management page for an e-commerce website. Using this page, the website administrators
                        and possible employees could manage their products, orders and users using a simple graphical user interface.`,
                        `The project included designing and implementing a relational MySQL database, creating a user interface
                        for management purposes using React, and PHP scripts to communicate with the database.`],
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
                    description: [`A work-in-progress project for aspiring musicians and composers. The application
                        will help beginners learn music and remind more seasoned veterans as well. Music
                        Notebook is meant to serve as a general resource for musical theory, including the
                        circle of fifths, scales, keys, musical notation and other things.`,
                        `This project is still WIP.`],
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
        },

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
@import "../styles/mixins.scss";

#projects {
    background-color: $colorLighter;
    padding-top: 4em;
    padding-bottom: 3em;
    .modal {
        width: 1024px !important;
        height: 100%;
    }
    h2 {
        color: $colorDark;
    }
    .project-container {
        position: relative !important;
        width: 100%;
        flex-wrap: wrap;
        @include flexbox(row, center, center);
        @include transition(opacity, 0.5s, ease);
        padding: 0;
    }
}
.project-item {
    @include flexbox(column, null, center);
    flex-wrap: wrap;
    width: 42vh;
    height: 32vh;
    color: $colorLighter;
    position: relative;
    overflow: hidden;
    @include transition(height, 0.5s, ease);
    .project-image {
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background-position: center center !important;
        background-repeat: no-repeat !important;
        background-size: cover !important;
        @include transition(transform, 0.7s, ease);
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
        @include transition(all, 0.6s, ease);
        @include flexbox(column, center, center);
        .project-name {
            /* margin-top: 5%; */
            font-size: 110%;
        }
        .project-tags {
            margin-top: 7%;
            margin-left: 2%;
            margin-right: 2%;
            @include flexbox(row, center, center);
            .tag:nth-of-type(2) {
                margin-left: 0.5em;
            }
            .tag:nth-of-type(3) {
                margin-left: 0.5em;
            }
        }
        .project-btn {
            margin-top: 34px;
            /* margin-bottom: 5%; */
            width: 30%;
            background: #f8f8f8;
            border: 3px solid $colorDark;
            border-bottom: 8px solid $colorDark;
            @include border-radius(6px);
            @include transition(all, 0.3s, ease);
            color: $colorDark;
            font-weight: 800;
            cursor: pointer;
            @media screen and (max-width: $sizeLg) {
                font-size: 100%;
            }
        }
        .project-btn:hover {
            border-bottom: 4px solid $colorDark;
            margin-top: 38px;
        }
    }
    @media screen and (max-width: $sizeSm) {
        width: 100%;
        height: auto;
        .cover {
            height: 100%;
            opacity: 1;
            background: rgba(255, 255, 255, 0.7);
            .project-btn {
                font-size: 105%;
            }
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
