<template>
    <section id="projects" class="container-fluid">
        <h2>My Skills</h2>
        <div class="horizontal-center"><div class="underline"></div></div>
        <div class="center-content col-md-8 offset-md-2 col-sm-10 offset-sm-1 col-xs-12 offset-xs-0">
            <p class="description">Here's a decent estimation of how well I understand different technologies.</p>
        </div>

        <div class="center-content">

        </div>

    </section>
</template>

<script>
export default {
    data() {
        return {};
    }
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
    width: 42vh;
    height: 32vh;
    background-size: cover !important;
    color: $colorLighter;

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
            pointer-events: auto;
            width: 40%;
            background: none;
            border: 3px solid $colorDark;
            color: $colorDark;
            font-weight: 800;
        }
    }
    .open-cover {
        animation: openCover 0.7s;
        animation-fill-mode: forwards;
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
