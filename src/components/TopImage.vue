<template>
    <div class="banner-container">
        <div class="building">
            <b-row class="block-row">
                <b-col cols="12" class="color3"></b-col>
            </b-row>
            <b-row class="block-row">
                <b-col cols="2" class="color3"></b-col>
                <b-col cols="2" class="transparent radius-tl"></b-col>
                <b-col cols="2" class="transparent radius-tr"></b-col>
                <b-col cols="6" class="color3"></b-col>
            </b-row>
            <b-row class="block-row">
                <b-col cols="2" class="color3"></b-col>
                <b-col cols="2" class="transparent radius-bl"></b-col>
                <b-col cols="2" class="transparent radius-br"></b-col>
                <b-col cols="6" class="color3"></b-col>
            </b-row>
            <b-row class="block-row">
                <b-col cols="12" class="color3"></b-col>
            </b-row>
            <b-row class="block-row">
                <b-col cols="12" class="color3"></b-col>
            </b-row>
            <b-row class="block-row">
                <b-col cols="12" class="color3"></b-col>
            </b-row>
            <b-row class="block-row">
                <b-col cols="12" class="color3"></b-col>
            </b-row>
        </div>
    </div>
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

$color1: #3f51b5;
$color2: #2196f3;
$color3: #ff9800;
$color4: #ff9800;

.banner-container {
    display: flex;
    justify-content: center;
    .building {
        /* background: $colorMain; */
        width: 30%;
        height: 70%;
        position: absolute;
        bottom: 0;
        align-self: center;
        border-radius: 5px 5px 0 0px;
        overflow: hidden;
        .block-row {
            height: 14.5%;
        }
        .full {
            width: 100%;
            height: 15%;
            background: $colorSecondary;
        }
        .half {
            width: 50%;
            height: 15%;
            background: $colorSecondary;
        }
        .color1 {
            background: $color1;
        }
        .color2 {
            background: $color2;
        }
        .color3 {
            background: $color3;
        }
        .transparent {
            background: transparent;
        }
    }
}
</style>
