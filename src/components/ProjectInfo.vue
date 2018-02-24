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
            <p v-for="(paragraph, index) in project.description" :key="index">
                {{ paragraph }}
            </p>
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
            <h3>Screenshots</h3>
            <img
                v-for="(image, index) in project.images"
                :key="index"
                :src="'/static/projects/'+project.folder+image"
                :class="{ 'clicked': clicked === index }"
                @click="handleImgClick(index)"
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
    data() {
        return {
            clicked: null
        }
    },
    methods: {
        handleImgClick(index) {
            if (this.clicked === index) this.clicked = null;
            else this.clicked = index;
        }
    },
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
    padding: 1.5em 1em 2.5em 1em;
    .project-description,
    .project-technologies,
    .project-images,
    .project-source {
        margin-top: 1.5em;
        margin-left: 3vw;
        margin-right: 3vw;
    }
    h3 {
        font-size: 150%;
    }
    .header {
        align-self: center;
        @include flexbox(row, center, center);
        margin-right: 5%;
        .project-logo {
            margin-bottom: 3px;
            img {
                height: 6em;
                @media screen and (max-width: $sizeSm) {

                }
            }
        }
        .project-name {
            margin-left: 1vh;
            font-size: 170%;
        }
    }
    .project-technologies {
        .tags {
            margin-top: 1.1em;
            @include flexbox(row);
            @media screen and (max-width: $sizeSm) {
                @include flexbox(column);
            }

            @media screen and (max-width: $sizeSm) {
                .tag:nth-of-type(2) {
                    margin-top: 15px;
                }
                .tag:nth-of-type(3) {
                    margin-top: 15px;
                }
            }
        }

    }
    .project-images {
        img {
            max-width: 24%;
            max-height: 20vh;
            margin-left: 0.5%;
            margin-right: 0.5%;
            margin-top: 0.5em;
            cursor: pointer;
            transition: transform 0.5s;
            @media screen and (max-width: $sizeSm) {
                max-width: 100%;
                width: 100%;
                max-height: 100%;
                height: auto;
                margin: 0.5em 0 0.5em 0;
            }
        }
        img.clicked {
            transform: scale(4);
        }
    }
    .project-source {
        a {
            text-decoration: none;
            margin-top: 1.1em;
            color: $colorDark;
            @include transition(all, 0.7s, ease);
            @include flexbox(row, null, center);
            padding: 8px;
            i {
                cursor: pointer;
                transition: color 0.7s;
                font-size: 350%;
            }
            span {
                margin-left: 5px;
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
