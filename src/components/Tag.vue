<template>
    <div
        class="tag"
        :style="{ background: color }"
    >
        <i :class="icon" style="color:white;"></i>
        <span>{{ text }}</span>
    </div>
</template>

<script>
export default {
    props: ["color", "icon", "text"]
};
</script>

<style lang="scss">
@import "../styles/variables.scss";

.tag {
    min-width: 20%;
    width: auto;
    margin-right: 3%;
    height: 2.2vw;
    border-radius: 3vw;
    box-shadow: 2px 2px 2px #444;
    color: white;
    display: flex;
    align-items: center;
    padding-right: 5%;
    i {
        font-size: 150%;
        margin-left: 10%;
    }
    span {
        text-align: initial;
        margin-left: 5%;
        padding-right: 10%;
    }
}
</style>
