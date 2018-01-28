<template>
    <div class="project-info">
        <div class="header">
            <div class="project-logo">
                <img :src="'/static/projects/'+project.folder+project.logo" />
            </div>
            <div class="project-name">{{ project.name }}</div>
        </div>
        <div class="project-description">
            <h3>Description:</h3>
            {{ project.description }}
        </div>
        <div class="project-technologies">
            <h3>Technologies &amp; software:</h3>
            <div class="tags">
                <Tag
                    v-for="(tag, index) in project.tags"
                    :key="index"
                    :icon="tag[0]"
                    :text="tag[1]"
                    :color="tag[2]"
                />
            </div>
        </div>
        <div class="project-images">
            <img
                v-for="(image, index) in project.images"
                :key="index"
                :src="'/static/projects/'+project.folder+image"
            />
        </div>
        <div
            class="project-source"
            v-if="project.source"
        >
            <h3>Source code:</h3>
            <a
                :href="'https://github.com/moilamar/'+project.source"
                target="_blank"
                v-if="project.source"
            >
                <i class="devicon-github-plain-wordmark colored"></i>
                <span>/{{ project.source }}</span>
            </a>
        </div>
    </div>
</template>

<script>
import Tag from "./Tag";
import "../styles/mixins.scss";

export default {
    props: ["project"],
    components: {
        Tag
    }
};
</script>

<style lang="scss">
@import "../styles/variables.scss";
@import "../styles/mixins.scss";

.project-info {
    background: white;
    @include flexbox(column);
    padding-top: 0.5vh;
    padding-bottom: 3vh;
    padding-left: 4vh;
    padding-right: 4vh;
    @media screen and (max-width: 500px) {
        width: 100%;
    }
    .close-btn {
        font-size: 180%;
        position: absolute;
        right: 2.5%;
        top: 0.8%;
        font-weight: bold;
        cursor: pointer;
    }
    h3 {
        font-size: 150%;
    }
    .header {
        align-self: center;
        padding: 1vh;
        @include flexbox(row, center, center);
        margin-top: 0.7vh;
        margin-right: 5%;
        .project-logo {
            background: white;
            margin-bottom: 3px;
            img {
                height: 5vw;
                /* padding: 0.5vh; */
                /* box-shadow: 2px 2px 4px #444; */
            }
        }
        .project-name {
            margin-left: 1vh;
            font-size: 170%;
        }
    }
    .project-description {
        padding: 3vh;
    }
    .project-technologies {
        padding: 3vh;
        .tags {
            @include flexbox(row);
            margin-top: 2vh;
            @media screen and (max-width: 800px) {
                margin-left: 0;
                margin-right: 0;
                .tag {
                    border-radius: 15px;
                }
            }
            .tag {
                width: 10vw;
                span {
                    margin-left: 10%;
                }
            }
        }
    }
    .project-images {
        padding-left: 2%;
        padding-right: 2%;
        img {
            max-width: 24%;
            margin-left: 0.5%;
            margin-right: 0.5%;
            margin-top: 1vh;
            margin-bottom: 1vh;
            cursor: pointer;
            transition: transform 0.5s;
        }
        /* img:hover {
            transform: scale(3.5);
        } */
    }
    .project-source {
        padding: 3vh;
        margin-top: 3vh;
        @include flexbox(row, null, center);
        a {
            text-decoration: none;
            margin-left: 5%;
            margin-bottom: 6px;
            color: $colorDark;
            transition: color 0.7s, border-color 0.7s;
            @include flexbox(row, null, center);
            border: 3px solid $colorDark;
            @include border-radius(5px);
            padding: 8px;
            i {
                cursor: pointer;
                transition: color 0.7s;
                font-size: 350%;
            }
            span {
                font-weight: bold;
            }
        }
        a:hover {
            color: $colorSecondary;
            border-color: $colorSecondary;
            i {
                color: $colorSecondary;
            }
        }
    }
}
</style>
