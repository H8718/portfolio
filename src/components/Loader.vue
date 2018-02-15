<template>
    <div>
        <img
            id="loading-icon"
            src="../assets/gear.svg"
        >
        <!-- <p id="loading-text">Just a second</p> -->
    </div>
</template>

<script>
export default {
    data() {
        return {
            loading: true
        }
    },
    methods: {

    }
};
</script>

<style lang="scss">
@import "../styles/variables.scss";
@import "../styles/mixins.scss";

#loading-icon {
    animation: loaderAnimation 1.5s infinite;
    @include transition(opacity, 0.8s, ease);
}
#loading-text {
    color: $colorPrimary;
    font-weight: bold;
    font-family: $fontMain;
    text-align: center;
    margin-top: 30px;
    font-size: 130%;
}
@keyframes loaderAnimation {
    0% {
        transform: scale(1);
    }
    50% {
        transform: scale(1.5);
    }
    100% {
        transform: scale(1);
    }
}
</style>
