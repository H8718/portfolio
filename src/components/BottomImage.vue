<template>
    <div 
        class="bottom-container" 
        v-on:mousemove="mouseMove()"
    >

        <i class="devicon-react-original" />
        <i class="devicon-react-original" />

        <div class="building">
            <b-row class="block-row">
                <b-col cols="12" class=""></b-col>
            </b-row>
            <b-row class="block-row">
                <b-col cols="2" class=""></b-col>
                <b-col cols="2" class="border-left border-top radius-tl"></b-col>
                <b-col cols="2" class="border-top border-right radius-tr"></b-col>
                <b-col cols="6" class=""></b-col>
            </b-row>
            <b-row class="block-row">
                <b-col cols="2" class=""></b-col>
                <b-col cols="2" class="border-left border-bottom radius-bl"></b-col>
                <b-col cols="2" class="border-bottom border-right radius-br"></b-col>
            </b-row>
            <b-row class="block-row">
                <b-col cols="5"></b-col>
                <b-col cols="2"><i class="devicon-vuejs-plain-wordmark" /></b-col>
                <b-col cols="5" class=""></b-col>
            </b-row>
            <b-row class="block-row">
                <b-col cols="12" class=""></b-col>
            </b-row>
            <b-row class="block-row">
                <b-col cols="5"></b-col>
                <!-- <b-col cols="2"><i class="devicon-react-original-wordmark" /></b-col> -->
                <b-col cols="5" class=""></b-col>
            </b-row>
            <b-row class="block-row">
                <b-col cols="12" class=""></b-col>
            </b-row>           

        </div>

        <div class="ground" />

    </div>
</template>

<script>
export default {
    data() {
        return {};
    },
    methods: {
        toggleProjectInfo(index) {
            this.active = index;
        },
        toggleHover(index) {
            this.hovered = index;
        },
        mouseMove() {}
    }
};
</script>

<style lang="scss">
@import "../styles/variables.scss";

$color1: #3f51b5;
$color2: #2196f3;
$iconColor: #aaa;
$borderColor: #444;

.bottom-container {
    display: flex;
    justify-content: center;
    color: $borderColor;
    i {
        font-size: 500%;
    }
    .building {
        width: 30%;
        height: 70%;
        position: absolute;
        bottom: 0;
        align-self: center;
        border-radius: 0.5vh 0.5vh 0 0px;
        overflow: hidden;
        margin: 0 auto;
        border: 0.8vh solid $borderColor;
        .block-row {
            height: 14.5%;
            
        }
        .border-top {
            border-top: 0.8vh solid $borderColor;
        }
        .border-bottom {
            border-bottom: 0.8vh solid $borderColor;
        }
        .border-left {
            border-left: 0.8vh solid $borderColor;
        }
        .border-right {
            border-right: 0.8vh solid $borderColor;
        }
    }
    .ground {
        position: absolute;
        bottom: -22vh;
        height: 38%;
        width: 65%;
        border-top-left-radius: 100%;
        border-top-right-radius: 100%;
        border-radius: 100%;
        border: 0.8vh solid $borderColor;
        background: $colorDark;
    }
}
.radius-tr {
    border-top-right-radius: 0.5vh;
}
.radius-tl {
    border-top-left-radius: 0.5vh;
}
.radius-br {
    border-bottom-right-radius: 0.5vh;
}
.radius-bl {
    border-bottom-left-radius: 0.5vh;
}
</style>
