<template>
    <section id="projects">
        <h2>My Works</h2>
        <div class="underline"></div>
        <div class="col-md-8 offset-md-2 col-sm-10 offset-sm-1 col-xs-12 offset-xs-0">
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
            /* if (this.isMobile) {
                window.location.href = 'some url';
            } else { */
                this.active = index;
                this.modalEnabled = !this.modalEnabled;
            /* } */
        },
        isMobile() {
            var mobile = false;
            (function(a){if(/(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino/i.test(a)||/1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i.test(a.substr(0,4))) check = true;})(navigator.userAgent||navigator.vendor||window.opera);
            mobile = true;
            return mobile;
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
@import "../styles/mixins.scss";

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
    .description {
        padding: 0 5vw 0vw 5vw;
        margin-top: 2vw;
    }
    .project-container {
        position: relative !important;
        margin-top: 2vw;
        width: 100%;
        flex-wrap: wrap;
        @include flexbox(row, center);
        @include transition(opacity, 0.5s, ease);
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
        .project-name {
            margin-top: 10%;
        }
        .project-tags {
            margin: 7% 0% 0 0%;
            @include flexbox(row, center, center);
        }
        .project-btn {
            margin-top: 36px;
            width: 35%;
            background: #f8f8f8;
            border: 3px solid $colorDark;
            border-bottom: 10px solid $colorDark;
            @include border-radius(6px);
            @include transition(all, 0.3s, ease);
            color: $colorDark;
            font-weight: 800;
            cursor: pointer;
        }
        .project-btn:hover {
            border-bottom: 4px solid $colorDark;
            margin-top: 42px;
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
